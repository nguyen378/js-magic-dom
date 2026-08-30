/**
 * Unified Multi-Language Code Runner
 * Dispatches code execution to the appropriate runtime engine based on language:
 * - 'javascript': In-browser JS execution sandbox
 * - 'python': Python in-browser runner (Pyodide Wasm + CPython simulator)
 * - 'cpp': C++ in-browser runtime engine
 * - 'html' / 'css': DOM sandbox rendering
 */

import { EditorLanguage } from '@/types/lesson';
import { runPythonCode, PythonExecutionResult } from './python-runner';
import { runCppCode, CppExecutionResult } from './cpp-runner';

export interface CodeExecutionOutput {
  language: EditorLanguage;
  stdout: string[];
  stderr: string[];
  success: boolean;
  error?: string;
  executionTimeMs: number;
  variables?: Record<string, any>;
}

export function executeMultiLangCode(
  language: EditorLanguage,
  code: string,
  stdin: string = ''
): CodeExecutionOutput {
  const startTime = performance.now();

  if (language === 'python') {
    const res = runPythonCode(code);
    return {
      language: 'python',
      stdout: res.stdout,
      stderr: res.stderr,
      success: res.success,
      error: res.error,
      executionTimeMs: res.executionTimeMs,
      variables: res.variables,
    };
  }

  if (language === 'cpp') {
    const res = runCppCode(code, stdin);
    return {
      language: 'cpp',
      stdout: res.stdout,
      stderr: res.stderr,
      success: res.success,
      error: res.error,
      executionTimeMs: res.executionTimeMs,
      variables: res.variables,
    };
  }

  // JavaScript execution
  const stdout: string[] = [];
  const stderr: string[] = [];
  try {
    const customConsole = {
      log: (...args: any[]) => {
        stdout.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      },
      warn: (...args: any[]) => {
        stdout.push('⚠️ ' + args.map((a) => String(a)).join(' '));
      },
      error: (...args: any[]) => {
        stderr.push(args.map((a) => String(a)).join(' '));
        stdout.push('❌ ' + args.map((a) => String(a)).join(' '));
      },
    };

    const runner = new Function('console', code);
    runner(customConsole);

    return {
      language: 'javascript',
      stdout: stdout.length > 0 ? stdout : ['(Chương trình JS đã chạy xong)'],
      stderr,
      success: true,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  } catch (err: any) {
    const errorMsg = err?.message || String(err);
    stderr.push(errorMsg);
    stdout.push(`❌ Lỗi JS: ${errorMsg}`);
    return {
      language: 'javascript',
      stdout,
      stderr,
      success: false,
      error: errorMsg,
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  }
}
