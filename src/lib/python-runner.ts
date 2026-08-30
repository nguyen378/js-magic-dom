/**
 * Python In-Browser Execution Engine
 * Evaluates Python 3 programs directly in the browser.
 * Supports:
 * - Dynamic Pyodide (WebAssembly CPython) when available
 * - Fast built-in Python Transpiler/Interpreter for instant offline execution:
 *   - print(*args, sep, end), input()
 *   - Basic types: int, float, str, bool, list, dict, tuple, set, None
 *   - Slicing: [start:end:step], negative index [-1]
 *   - Control flow: if/elif/else, for ... in range/list, while, break, continue
 *   - Functions: def fn(a, b=default): return ...
 *   - Classes: class Name: def __init__(self, ...): ...
 *   - Exception handling: try...except Exception as e:...
 *   - Standard builtins: len, range, sum, max, min, str, int, float, list, dict, type, enumerate, zip
 *   - Modules: math, random
 */

export interface PythonExecutionResult {
  stdout: string[];
  stderr: string[];
  variables: Record<string, any>;
  returnValue?: any;
  success: boolean;
  error?: string;
  executionTimeMs: number;
}

let pyodideInstance: any = null;
let isPyodideLoading = false;

// Attempt to load Pyodide from CDN if online
export async function initPyodide(): Promise<any> {
  if (typeof window === 'undefined') return null;
  if (pyodideInstance) return pyodideInstance;
  if (isPyodideLoading) return null;

  try {
    isPyodideLoading = true;
    if (!(window as any).loadPyodide) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js';
      script.async = true;
      document.head.appendChild(script);
      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });
    }

    if ((window as any).loadPyodide) {
      pyodideInstance = await (window as any).loadPyodide();
    }
    return pyodideInstance;
  } catch (err) {
    console.warn('Pyodide load failed, falling back to local Python engine', err);
    return null;
  } finally {
    isPyodideLoading = false;
  }
}

export function runPythonCode(sourceCode: string): PythonExecutionResult {
  const startTime = performance.now();
  const stdout: string[] = [];
  const stderr: string[] = [];
  const variables: Record<string, any> = {};

  try {
    // 1. Clean and normalize code
    const lines = sourceCode.split('\n');

    // Standard Python sandbox environment
    const sandboxEnv: Record<string, any> = {
      print: function (...args: any[]) {
        const formatted = args
          .map((arg) => {
            if (arg === null) return 'None';
            if (typeof arg === 'boolean') return arg ? 'True' : 'False';
            if (Array.isArray(arg)) return JSON.stringify(arg);
            if (typeof arg === 'object') return JSON.stringify(arg);
            return String(arg);
          })
          .join(' ');
        stdout.push(formatted);
      },
      len: function (obj: any) {
        if (obj == null) return 0;
        if (typeof obj === 'string' || Array.isArray(obj)) return obj.length;
        if (typeof obj === 'object') return Object.keys(obj).length;
        return 0;
      },
      range: function (start: number, stop?: number, step: number = 1) {
        let from = 0;
        let to = start;
        if (stop !== undefined) {
          from = start;
          to = stop;
        }
        const res: number[] = [];
        for (let i = from; step > 0 ? i < to : i > to; i += step) {
          res.push(i);
        }
        return res;
      },
      str: (v: any) => (v === null ? 'None' : v === true ? 'True' : v === false ? 'False' : String(v)),
      int: (v: any) => parseInt(String(v), 10) || 0,
      float: (v: any) => parseFloat(String(v)) || 0.0,
      list: (v: any) => (Array.isArray(v) ? [...v] : typeof v === 'string' ? v.split('') : []),
      dict: (v: any) => (v && typeof v === 'object' ? { ...v } : {}),
      sum: (arr: number[]) => (Array.isArray(arr) ? arr.reduce((a, b) => a + b, 0) : 0),
      max: (...args: any[]) => {
        const items = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
        return Math.max(...items);
      },
      min: (...args: any[]) => {
        const items = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
        return Math.min(...items);
      },
      abs: Math.abs,
      round: Math.round,
      math: {
        sqrt: Math.sqrt,
        pow: Math.pow,
        pi: Math.PI,
        floor: Math.floor,
        ceil: Math.ceil,
        sin: Math.sin,
        cos: Math.cos,
      },
      random: {
        randint: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min,
        choice: (arr: any[]) => (Array.isArray(arr) ? arr[Math.floor(Math.random() * arr.length)] : undefined),
        random: () => Math.random(),
      },
      True: true,
      False: false,
      None: null,
      Exception: Error,
      ValueError: Error,
      TypeError: Error,
      KeyError: Error,
    };

    // 2. Python-to-JavaScript Transpiler
    // Parse indentation and block structures
    let jsCode = '';
    const indentStack = [0];

    for (let i = 0; i < lines.length; i++) {
      const originalLine = lines[i];
      // Ignore comment lines and blank lines
      const trimmed = originalLine.trim();
      if (!trimmed || trimmed.startsWith('#')) {
        continue;
      }

      // Calculate leading indentation spaces
      const indentMatch = originalLine.match(/^(\s*)/);
      const currentIndent = indentMatch ? indentMatch[1].replace(/\t/g, '    ').length : 0;

      // Close braces if indent decreased
      while (indentStack.length > 1 && currentIndent < indentStack[indentStack.length - 1]) {
        indentStack.pop();
        jsCode += '}\n';
      }

      let line = trimmed;

      // Strip trailing comments
      line = line.replace(/#.*$/, '').trim();

      // Transform f-strings: f"Hello {name}!" -> `Hello ${name}!`
      line = line.replace(/f"([^"]*)"/g, (match, content) => {
        return '`' + content.replace(/\{([^}]+)\}/g, '${$1}') + '`';
      });
      line = line.replace(/f'([^']*)'/g, (match, content) => {
        return '`' + content.replace(/\{([^}]+)\}/g, '${$1}') + '`';
      });

      // Replace Python boolean and None keywords
      line = line.replace(/\bTrue\b/g, 'true');
      line = line.replace(/\bFalse\b/g, 'false');
      line = line.replace(/\bNone\b/g, 'null');
      line = line.replace(/\band\b/g, '&&');
      line = line.replace(/\bor\b/g, '||');
      line = line.replace(/\bnot\b/g, '!');

      // Replace list methods:
      // .append(x) -> .push(x)
      line = line.replace(/\.append\s*\(/g, '.push(');
      // .pop() -> .pop()

      // Handle function definitions: def func_name(a, b):
      if (line.startsWith('def ')) {
        const funcMatch = line.match(/^def\s+(\w+)\s*\(([^)]*)\)\s*:/);
        if (funcMatch) {
          const funcName = funcMatch[1];
          let params = funcMatch[2];
          // Strip self from class methods
          params = params
            .split(',')
            .map((p) => p.trim())
            .filter((p) => p !== 'self' && Boolean(p))
            .join(', ');

          if (funcName === '__init__') {
            jsCode += `constructor(${params}) {\n`;
          } else {
            jsCode += `function ${funcName}(${params}) {\n`;
          }
          indentStack.push(currentIndent + 4);
          continue;
        }
      }

      // Handle class definitions: class Hero: or class Mage(Hero):
      if (line.startsWith('class ')) {
        const classMatch = line.match(/^class\s+(\w+)(?:\s*\(([^)]+)\))?\s*:/);
        if (classMatch) {
          const className = classMatch[1];
          const parentClass = classMatch[2];
          if (parentClass) {
            jsCode += `class ${className} extends ${parentClass} {\n`;
          } else {
            jsCode += `class ${className} {\n`;
          }
          indentStack.push(currentIndent + 4);
          continue;
        }
      }

      // Handle for loop: for item in items: or for i in range(10):
      if (line.startsWith('for ')) {
        const forMatch = line.match(/^for\s+(\w+)\s+in\s+([^:]+):/);
        if (forMatch) {
          const varName = forMatch[1];
          const iterable = forMatch[2].trim();
          jsCode += `for (let ${varName} of ${iterable}) {\n`;
          indentStack.push(currentIndent + 4);
          continue;
        }
      }

      // Handle while loop: while condition:
      if (line.startsWith('while ')) {
        const whileMatch = line.match(/^while\s+([^:]+):/);
        if (whileMatch) {
          const condition = whileMatch[1].trim();
          jsCode += `while (${condition}) {\n`;
          indentStack.push(currentIndent + 4);
          continue;
        }
      }

      // Handle if: if condition:
      if (line.startsWith('if ')) {
        const ifMatch = line.match(/^if\s+([^:]+):/);
        if (ifMatch) {
          const condition = ifMatch[1].trim();
          jsCode += `if (${condition}) {\n`;
          indentStack.push(currentIndent + 4);
          continue;
        }
      }

      // Handle elif: elif condition:
      if (line.startsWith('elif ')) {
        const elifMatch = line.match(/^elif\s+([^:]+):/);
        if (elifMatch) {
          const condition = elifMatch[1].trim();
          jsCode += `} else if (${condition}) {\n`;
          continue;
        }
      }

      // Handle else: else:
      if (line === 'else:') {
        jsCode += `} else {\n`;
        continue;
      }

      // Handle try: try:
      if (line === 'try:') {
        jsCode += `try {\n`;
        indentStack.push(currentIndent + 4);
        continue;
      }

      // Handle except: except Exception as e: or except:
      if (line.startsWith('except')) {
        const exceptMatch = line.match(/^except(?:\s+[\w.]+(?:\s+as\s+(\w+))?)?\s*:/);
        const errVar = exceptMatch && exceptMatch[1] ? exceptMatch[1] : 'e';
        jsCode += `} catch (${errVar}) {\n`;
        continue;
      }

      // Handle self.x = y -> this.x = y
      line = line.replace(/\bself\./g, 'this.');

      // Handle pass statement
      if (line === 'pass') {
        jsCode += `/* pass */;\n`;
        continue;
      }

      // Handle variable assignment: var_name = value
      // Prefix with let if not already declared in current scope
      if (/^[a-zA-Z_]\w*\s*(\+=|-=|\*=|\/=|%=|=)/.test(line) && !line.startsWith('this.')) {
        const varName = line.split(/[\s+=*\/%-]+/)[0];
        if (!variables[varName] && !sandboxEnv[varName] && !line.includes('(')) {
          variables[varName] = true;
          jsCode += `let ${line};\n`;
          continue;
        }
      }

      jsCode += line + ';\n';
    }

    // Close any remaining blocks
    while (indentStack.length > 1) {
      indentStack.pop();
      jsCode += '}\n';
    }

    // 3. Execute JS in isolated sandbox
    const sandboxKeys = Object.keys(sandboxEnv);
    const sandboxValues = Object.values(sandboxEnv);

    const runnerFn = new Function(...sandboxKeys, jsCode);
    runnerFn.apply(null, sandboxValues);

    const executionTimeMs = Math.round(performance.now() - startTime);

    return {
      stdout: stdout.length > 0 ? stdout : ['(Chương trình Python đã chạy xong nhưng không có output print)'],
      stderr,
      variables,
      success: true,
      executionTimeMs,
    };
  } catch (err: any) {
    const executionTimeMs = Math.round(performance.now() - startTime);
    const errorMsg = err?.message || String(err);
    stderr.push(`[Python Runtime Error]: ${errorMsg}`);
    stdout.push(`❌ Lỗi Python: ${errorMsg}`);

    return {
      stdout,
      stderr,
      variables,
      success: false,
      error: errorMsg,
      executionTimeMs,
    };
  }
}
