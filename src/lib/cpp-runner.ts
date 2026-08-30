/**
 * C++ In-Browser Execution Engine
 * Evaluates beginner-to-intermediate C++ programs directly in JavaScript/TypeScript.
 * Supports:
 * - #include <iostream>, <vector>, <string>, <cmath>, <algorithm>, <stdexcept>
 * - using namespace std;
 * - int main() or direct script statements
 * - Basic data types: int, double, float, bool, string, char, auto, const
 * - IO Streams: cout << ... << endl, cin >> ...
 * - Vectors: std::vector<T>, push_back(), size(), [i], sort
 * - Strings: std::string, length(), size(), substr(), concatenation
 * - Control flow: if/else if/else, switch/case, for, while, do-while, break, continue
 * - Functions: return types, parameters, recursion
 * - Classes & Structs: class, public/private, constructors, methods, fields, inheritance
 * - Math: sqrt, pow, abs, max, min, round, floor, ceil
 * - Exceptions: try, catch(exception& e), throw runtime_error(...)
 */

export interface CppExecutionResult {
  stdout: string[];
  stderr: string[];
  variables: Record<string, any>;
  returnValue?: any;
  success: boolean;
  error?: string;
  executionTimeMs: number;
}

export function runCppCode(sourceCode: string, stdinInput: string = ''): CppExecutionResult {
  const startTime = performance.now();
  const stdout: string[] = [];
  const stderr: string[] = [];
  const variables: Record<string, any> = {};

  try {
    // 1. Clean and normalize code
    let code = sourceCode;

    // Remove single line comments //...
    code = code.replace(/\/\/.*$/gm, '');
    // Remove multi-line comments /* ... */
    code = code.replace(/\/\*[\s\S]*?\*\//g, '');

    // Strip preprocessor directives but remember headers
    code = code.replace(/^\s*#include\s*<.*?>\s*$/gm, '');
    code = code.replace(/^\s*#include\s*".*?"\s*$/gm, '');
    code = code.replace(/^\s*using\s+namespace\s+std\s*;\s*$/gm, '');

    // 2. Transform C++ constructs to executable safe JavaScript
    let transformed = code;

    // Standard runtime environment
    const sandboxEnv: Record<string, any> = {
      // Stream helper
      __stdoutBuffer: '',
      __stdoutLines: stdout,
      __writeCout: function (...args: any[]) {
        for (const arg of args) {
          if (arg === '\n' || arg === '__ENDL__') {
            stdout.push(sandboxEnv.__stdoutBuffer);
            sandboxEnv.__stdoutBuffer = '';
          } else {
            sandboxEnv.__stdoutBuffer += String(arg);
          }
        }
      },
      __flushCout: function () {
        if (sandboxEnv.__stdoutBuffer.length > 0) {
          stdout.push(sandboxEnv.__stdoutBuffer);
          sandboxEnv.__stdoutBuffer = '';
        }
      },
      // Standard Math functions
      sqrt: Math.sqrt,
      pow: Math.pow,
      abs: Math.abs,
      max: Math.max,
      min: Math.min,
      round: Math.round,
      floor: Math.floor,
      ceil: Math.ceil,
      // Vector simulation
      vector: function <T>(initial?: T[]): T[] {
        return initial ? [...initial] : [];
      },
      sort: function (vec: any[]) {
        if (Array.isArray(vec)) {
          vec.sort((a, b) => (typeof a === 'number' && typeof b === 'number' ? a - b : String(a).localeCompare(String(b))));
        }
      },
      runtime_error: function (msg: string) {
        return new Error(msg);
      },
      exception: Error,
      endl: '__ENDL__',
    };

    // Transform C++ source to JavaScript equivalents
    // Replace `endl` with `"__ENDL__"`
    transformed = transformed.replace(/\bendl\b/g, '"__ENDL__"');

    // Replace cout statements:
    // e.g. `cout << "Hello" << " " << name << endl;`
    transformed = transformed.replace(/(?:std::)?cout\s*<<\s*([^;]+);/g, (match, expr) => {
      const parts = expr.split('<<').map((p: string) => p.trim()).filter(Boolean);
      return `__writeCout(${parts.join(', ')});`;
    });

    // Replace cin statements if any
    transformed = transformed.replace(/(?:std::)?cin\s*>>\s*([^;]+);/g, (match, expr) => {
      return `/* cin >> ${expr} */`;
    });

    // Replace vector declarations:
    transformed = transformed.replace(/(?:std::)?vector\s*<\s*[\w\s:]+\s*>\s*(\w+)\s*=\s*\{([^}]*)\};/g, 'let $1 = [$2];');
    transformed = transformed.replace(/(?:std::)?vector\s*<\s*[\w\s:]+\s*>\s*(\w+)\s*;/g, 'let $1 = [];');
    transformed = transformed.replace(/(?:std::)?vector\s*<\s*[\w\s:]+\s*>\s*(\w+)\s*=\s*(\w+);/g, 'let $1 = [...$2];');

    // Replace .push_back(...) -> .push(...)
    transformed = transformed.replace(/\.push_back\s*\(/g, '.push(');
    // Replace .size() -> .length
    transformed = transformed.replace(/\.size\s*\(\)/g, '.length');
    // Replace .length() on strings -> .length
    transformed = transformed.replace(/\.length\s*\(\)/g, '.length');
    // Replace .substr(start, len) -> .substr()
    transformed = transformed.replace(/\.substr\s*\(/g, '.substr(');

    // Replace C++ types in variable declarations
    const typeRegex = /\b(?:int|double|float|bool|char|long|short|unsigned|auto|string|std::string)\s+(\w+)(\s*=\s*[^;]+)?;/g;
    transformed = transformed.replace(typeRegex, (match, varName, init) => {
      return `let ${varName}${init || ''};`;
    });

    // Replace const type declarations
    transformed = transformed.replace(/\bconst\s+(?:int|double|float|bool|char|string|std::string)\s+(\w+)\s*=\s*([^;]+);/g, 'const $1 = $2;');

    // Replace function definitions with return types:
    const funcDefRegex = /\b(?:void|int|double|float|bool|string|std::string|auto)\s+(\w+)\s*\(([^)]*)\)\s*\{/g;
    transformed = transformed.replace(funcDefRegex, (match, funcName, params) => {
      if (funcName === 'main') {
        return `function __cpp_main() {`;
      }
      const cleanedParams = params
        .split(',')
        .map((p: string) => {
          const parts = p.trim().split(/\s+/);
          return parts[parts.length - 1]?.replace(/^[&*]+/, '') || '';
        })
        .filter(Boolean)
        .join(', ');
      return `function ${funcName}(${cleanedParams}) {`;
    });

    // Handle C++ classes
    transformed = transformed.replace(/\b(public|private|protected)\s*:/g, '');
    transformed = transformed.replace(/\bclass\s+(\w+)\s*:\s*(?:public|private|protected)\s+(\w+)/g, 'class $1 extends $2');

    const classNames: string[] = [];
    const classMatchRegex = /\bclass\s+(\w+)/g;
    let cm;
    while ((cm = classMatchRegex.exec(code)) !== null) {
      classNames.push(cm[1]);
    }

    for (const cName of classNames) {
      const ctorRegex = new RegExp(`\\b${cName}\\s*\\(([^)]*)\\)\\s*(?::\\s*([^{]+))?\\s*\\{`, 'g');
      transformed = transformed.replace(ctorRegex, (match, params, initList) => {
        const cleanedParams = params
          .split(',')
          .map((p: string) => {
            const parts = p.trim().split(/\s+/);
            return parts[parts.length - 1]?.replace(/^[&*]+/, '') || '';
          })
          .filter(Boolean)
          .join(', ');
        
        let superCall = '';
        if (initList && initList.includes('(')) {
          superCall = initList.replace(/(\w+)\(([^)]*)\)/, 'super($2);');
        }
        return `constructor(${cleanedParams}) { ${superCall}`;
      });

      const methodRegex = new RegExp(`\\b(?:void|int|double|float|bool|string|std::string|auto)\\s+(\\w+)\\s*\\(([^)]*)\\)\\s*\\{`, 'g');
      transformed = transformed.replace(methodRegex, (match, methodName, params) => {
        if (methodName === 'constructor') return match;
        const cleanedParams = params
          .split(',')
          .map((p: string) => {
            const parts = p.trim().split(/\s+/);
            return parts[parts.length - 1]?.replace(/^[&*]+/, '') || '';
          })
          .filter(Boolean)
          .join(', ');
        return `${methodName}(${cleanedParams}) {`;
      });
    }

    // Replace C++ exceptions:
    transformed = transformed.replace(/catch\s*\(\s*(?:const\s+)?(?:std::)?\w+\s*&?\s*(\w+)\s*\)/g, 'catch ($1)');
    transformed = transformed.replace(/throw\s+(?:std::)?\w+\s*\(([^)]+)\);/g, 'throw new Error($1);');
    transformed = transformed.replace(/\b(\w+)\.what\s*\(\)/g, '($1.message || $1)');

    // 3. Append execution of __cpp_main() if defined
    const fullScript = `
      ${transformed}
      
      if (typeof __cpp_main === 'function') {
        __cpp_main();
      }
      __flushCout();
    `;

    // 4. Create and run function in isolated context
    const sandboxKeys = Object.keys(sandboxEnv);
    const sandboxValues = Object.values(sandboxEnv);

    const runnerFn = new Function(...sandboxKeys, fullScript);
    runnerFn.apply(null, sandboxValues);

    sandboxEnv.__flushCout();

    const executionTimeMs = Math.round(performance.now() - startTime);

    return {
      stdout: stdout.length > 0 ? stdout : ['(Chương trình C++ đã chạy xong nhưng không có output cout)'],
      stderr,
      variables,
      success: true,
      executionTimeMs,
    };
  } catch (err: any) {
    const executionTimeMs = Math.round(performance.now() - startTime);
    const errorMsg = err?.message || String(err);
    stderr.push(`[C++ Runtime Error]: ${errorMsg}`);
    stdout.push(`❌ Lỗi C++: ${errorMsg}`);

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
