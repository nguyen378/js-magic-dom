import { Lesson } from '@/types/lesson';

export const lessonML07: Lesson = {
  id: "ml07-io",
  title: "ML07. Nhập/Xuất Dữ Liệu & Console I/O (Input & Output)",
  shortDescription: "Khám phá cách đọc dữ liệu đầu vào và in dữ liệu ra luồng đầu ra trong 3 ngôn ngữ",
  category: "ml-io",
  course: 'multi-lang',
  track: "ml-data-oop",
  difficulty: "medium",
  xpReward: 70,
  order: 7,
  week: 7,
  durationMinutes: 60,
  
  story: "Mọi chương trình máy tính đều hoạt động theo mô hình **IPO (Input → Process → Output)**:\n1. **Input (Nhập)**: Nhận thông tin từ bàn phím, file hoặc mạng.\n2. **Process (Xử lý)**: Tính toán logic, điều kiện, vòng lặp.\n3. **Output (Xuất)**: In kết quả ra màn hình console hoặc lưu vào file.\n\n### So sánh cơ chế I/O:\n\n#### 1. JavaScript (Browser & Node.js)\n```javascript\n// Xuất dữ liệu\nconsole.log(\"Xin chào thế giới!\");\nconsole.warn(\"Cảnh báo!\");\nconsole.error(\"Báo lỗi!\");\n```\n\n#### 2. Python (`input()` & `print()`)\n```python\n# Nhập chuỗi từ bàn phím\nuser_name = input(\"Nhập tên của bạn: \")\nage = int(input(\"Nhập tuổi: \")) # Ép kiểu sang số nguyên int\n\n# Xuất ra màn hình\nprint(\"Chào mừng:\", user_name, \"Tuổi:\", age)\n```\n\n#### 3. C++ (`cin` & `cout` từ `<iostream>`)\n```cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string userName;\n    int age;\n    cout << \"Nhập tên: \";\n    cin >> userName; // Luồng đọc dữ liệu cin\n    cout << \"Chào mừng \" << userName << endl;\n    return 0;\n}\n```\n",

  taskInstructions: [
  "Viết hàm mô phỏng định dạng đầu ra `function formatUserLog(name, role)`.",
  "Bên trong hàm, trả về chuỗi `\"[USER] \" + name + \" - \" + role`.",
  "Gọi hàm `formatUserLog(\"Admin\", \"Superuser\")` và lưu vào biến `let result`.",
  "In `result` ra console bằng `console.log(result)`."
],

  hints: {
    level1: "Định nghĩa function formatUserLog(name, role) { return \"[USER] \" + name + \" - \" + role; }",
    level2: "function formatUserLog(name, role) {\n  return `[USER] ${name} - ${role}`;\n}\nlet result = formatUserLog(\"Admin\", \"Superuser\");\nconsole.log(result);",
    solution: "function formatUserLog(name, role) {\n  return `[USER] ${name} - ${role}`;\n}\n\nlet result = formatUserLog(\"Admin\", \"Superuser\");\nconsole.log(result);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">📥 MODULE 07: NHẬP XUẤT I/O</div>\n  <h2 class=\"ml-title\">Luồng Dữ Liệu Input / Output</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>console.log(data);<br>prompt(\"Nhập:\");</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>print(data)<br>x = input(\"Nhập: \")</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>cout << data;<br>cin >> x;</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #14b8a6; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #5eead4; background: rgba(20, 184, 166, 0.15); border: 1px solid #14b8a6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML07: Định dạng I/O log\n// 1. Viết hàm formatUserLog(name, role)\n\n\n// 2. Gọi hàm và in ra console\n",

  solutionJsCode: "function formatUserLog(name, role) {\n  return `[USER] ${name} - ${role}`;\n}\n\nlet result = formatUserLog(\"Admin\", \"Superuser\");\nconsole.log(result);",

  tests: [
    {
      id: "ml07_formatted_output",
      description: "In chính xác \"[USER] Admin - Superuser\"",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).includes('[USER] Admin - Superuser')));
      }
    }
  ]
};
