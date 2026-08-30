import { TestCase, SandboxWindow, MultiLangTestContext } from '@/types/lesson';

export interface TestRunResult {
  passed: boolean;
  totalTests: number;
  passedTests: number;
  testDetails: {
    id: string;
    description: string;
    passed: boolean;
    error?: string;
  }[];
  consoleLogs: { type: 'log' | 'error' | 'warn' | 'info'; message: string }[];
  runtimeError?: string;
}

/**
 * Builds the complete HTML string for the iframe, injecting CSS, HTML,
 * console intercepter and student JS code safely.
 */
export function buildIframeHtml(
  htmlContent: string,
  cssContent: string,
  jsCode: string
): string {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    }
    body {
      padding: 16px;
      background: #f8fafc;
      color: #1e293b;
      line-height: 1.5;
    }
    ${cssContent}

    /* Magical element glowing highlight when logged or selected */
    .js-magic-highlight {
      outline: 3px solid #f59e0b !important;
      box-shadow: 0 0 25px rgba(245, 158, 11, 0.8) !important;
      transform: scale(1.03) !important;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
    }
  </style>
  <script>
    // Intercept console.log and error messages to parent
    (function() {
      window.__capturedLogs = [];
      const originalLog = console.log;
      const originalError = console.error;
      const originalWarn = console.warn;
      const originalInfo = console.info;

      function formatArg(arg) {
        if (arg === null) return 'null';
        if (arg === undefined) return 'undefined';
        if (arg && (arg instanceof Element || arg.nodeType === 1)) {
          const idStr = arg.id ? ' id="' + arg.id + '"' : '';
          const classStr = arg.className ? ' class="' + (typeof arg.className === 'string' ? arg.className : '') + '"' : '';
          const tag = (arg.tagName || '').toLowerCase();
          const textPreview = (arg.textContent || '').trim().slice(0, 25);
          return '<' + tag + idStr + classStr + '>' + textPreview + (textPreview ? '...' : '') + '</' + tag + '>';
        }
        if (typeof arg === 'object') {
          try {
            return JSON.stringify(arg);
          } catch(e) {
            return String(arg);
          }
        }
        return String(arg);
      }

      console.log = function(...args) {
        window.__capturedLogs.push({ level: 'log', args: args });
        
        // Highlight element in DOM visually when logged
        args.forEach(function(arg) {
          if (arg && (arg instanceof Element || arg.nodeType === 1)) {
            arg.classList.add('js-magic-highlight');
            setTimeout(function() {
              arg.classList.remove('js-magic-highlight');
            }, 2500);
          }
        });

        window.parent.postMessage({
          type: 'CONSOLE_MESSAGE',
          level: 'log',
          text: args.map(formatArg).join(' ')
        }, '*');
        originalLog.apply(console, args);
      };

      console.error = function(...args) {
        window.__capturedLogs.push({ level: 'error', args: args });
        window.parent.postMessage({
          type: 'CONSOLE_MESSAGE',
          level: 'error',
          text: args.map(formatArg).join(' ')
        }, '*');
        originalError.apply(console, args);
      };

      console.warn = function(...args) {
        window.__capturedLogs.push({ level: 'warn', args: args });
        window.parent.postMessage({
          type: 'CONSOLE_MESSAGE',
          level: 'warn',
          text: args.map(formatArg).join(' ')
        }, '*');
        originalWarn.apply(console, args);
      };

      console.info = function(...args) {
        window.__capturedLogs.push({ level: 'info', args: args });
        window.parent.postMessage({
          type: 'CONSOLE_MESSAGE',
          level: 'info',
          text: args.map(formatArg).join(' ')
        }, '*');
        originalInfo.apply(console, args);
      };

      window.addEventListener('error', function(e) {
        window.parent.postMessage({
          type: 'RUNTIME_ERROR',
          message: e.message + ' (Dòng ' + (e.lineno || '?') + ')'
        }, '*');
      });
    })();
  </script>
</head>
<body>
  ${htmlContent}

  <script>
    (function() {
      function runUserCode() {
        try {
          ${jsCode}
        } catch (err) {
          console.error('Lỗi khi thực thi mã: ' + err.message);
          window.parent.postMessage({
            type: 'RUNTIME_ERROR',
            message: err.message
          }, '*');
        }
      }

      runUserCode();
    })();
  </script>
</body>
</html>`;
}

/**
 * Runs student code and evaluates all test cases against the iframe DOM and multi-language context.
 */
export async function evaluateTests(
  iframe: HTMLIFrameElement | null,
  tests: TestCase[],
  context?: MultiLangTestContext
): Promise<TestRunResult> {
  const result: TestRunResult = {
    passed: true,
    totalTests: tests.length,
    passedTests: 0,
    testDetails: [],
    consoleLogs: [],
  };

  const doc = iframe?.contentDocument || (typeof document !== 'undefined' ? document : ({} as Document));
  const win = (iframe?.contentWindow as unknown as SandboxWindow) || (typeof window !== 'undefined' ? (window as unknown as SandboxWindow) : ({} as SandboxWindow));

  if (win && context) {
    win.__multiLangContext = context;
  }

  for (const test of tests) {
    try {
      const isPass = await test.tester(doc, win, context);
      if (isPass) {
        result.passedTests += 1;
        result.testDetails.push({
          id: test.id,
          description: test.description,
          passed: true,
        });
      } else {
        result.passed = false;
        result.testDetails.push({
          id: test.id,
          description: test.description,
          passed: false,
          error: 'Chưa đạt yêu cầu này. Hãy xem lại hướng dẫn nhé!',
        });
      }
    } catch (err: unknown) {
      result.passed = false;
      const errorMessage = err instanceof Error ? err.message : 'Gặp lỗi trong quá trình kiểm tra.';
      result.testDetails.push({
        id: test.id,
        description: test.description,
        passed: false,
        error: errorMessage,
      });
    }
  }

  return result;
}
