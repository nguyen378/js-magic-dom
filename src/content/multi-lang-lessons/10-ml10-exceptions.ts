import { Lesson } from '@/types/lesson';

export const lessonML10_EXCEPTIONS: Lesson = {
  id: "ml10-exceptions",
  title: "ML10. Xử Lý Ngoại Lệ: Try / Catch / Except",
  shortDescription: "Bẫy lỗi chia cho số 0 an toàn không làm dừng chương trình",
  category: "ml-exceptions",
  course: 'multi-lang',
  track: "ml-data-oop",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "hard",
  xpReward: 80,
  order: 10,
  week: 10,
  durationMinutes: 60,
  
  story: "Xử lý ngoại lệ (Exception Handling) giúp ứng dụng hoạt động ổn định kể cả khi có dữ liệu bất thường.",

  taskInstructions: [
  "Viết hàm `safeDivide(a, b)` chia `a` cho `b`.",
  "Nếu `b === 0`: ném lỗi hoặc bẫy ngoại lệ và in ra `\"Error: Cannot divide by zero\"`.",
  "Thực hiện gọi `safeDivide(10, 0)`."
],

  hints: {
    level1: "Dùng try...catch (JS/C++) hoặc try...except (Python).",
    level2: "JS: try { if (b === 0) throw new Error(\"Cannot divide by zero\"); } catch (e) { console.log(\"Error: \" + e.message); }",
    solution: "function safeDivide(a, b) {\n  try {\n    if (b === 0) {\n      throw new Error(\"Cannot divide by zero\");\n    }\n    console.log(a / b);\n  } catch (err) {\n    console.log(\"Error: \" + err.message);\n  }\n}\n\nsafeDivide(10, 0);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML10: Xử Lý Ngoại Lệ: Try / Catch / Except</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "// Định nghĩa safeDivide(a, b) với try/catch\n\n\nsafeDivide(10, 0);\n",
  solutionJsCode: "function safeDivide(a, b) {\n  try {\n    if (b === 0) {\n      throw new Error(\"Cannot divide by zero\");\n    }\n    console.log(a / b);\n  } catch (err) {\n    console.log(\"Error: \" + err.message);\n  }\n}\n\nsafeDivide(10, 0);",

  initialPyCode: "# Định nghĩa safe_divide(a, b) với try/except\n\n\nsafe_divide(10, 0)\n",
  solutionPyCode: "def safe_divide(a, b):\n    try:\n        if b == 0:\n            raise Exception(\"Cannot divide by zero\")\n        print(a / b)\n    except Exception as err:\n        print(f\"Error: {err}\")\n\nsafe_divide(10, 0)",

  initialCppCode: "#include <iostream>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nvoid safeDivide(int a, int b) {\n    try {\n        if (b == 0) {\n            throw runtime_error(\"Cannot divide by zero\");\n        }\n        cout << (a / b) << endl;\n    } catch (const exception& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n}\n\nint main() {\n    safeDivide(10, 0);\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\n#include <stdexcept>\n#include <string>\nusing namespace std;\n\nvoid safeDivide(int a, int b) {\n    try {\n        if (b == 0) {\n            throw runtime_error(\"Cannot divide by zero\");\n        }\n        cout << (a / b) << endl;\n    } catch (const exception& e) {\n        cout << \"Error: \" << e.what() << endl;\n    }\n}\n\nint main() {\n    safeDivide(10, 0);\n    return 0;\n}",

  tests: [
    {
      id: "ml10_catch",
      description: "Bẫy lỗi thành công thông báo \"Cannot divide by zero\"",
      tester: (doc, win, context) => {
        const expected = "cannot divide by zero";
        // Check multi-lang context stdout first (for Python / C++ / direct JS)
        if (context && context.stdout && context.stdout.length > 0) {
          const text = context.stdout.join(' ').toLowerCase();
          if (text.includes(expected)) return true;
        }
        // Check window captured logs (for iframe JS)
        const logs = win.__capturedLogs || [];
        return logs.some((l) =>
          l.args &&
          l.args.some((a) => String(a).toLowerCase().includes(expected))
        );
      }
    }
  ]
};
