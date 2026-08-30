import { Lesson } from '@/types/lesson';

export const lessonML02: Lesson = {
  id: "ml02-conditionals",
  title: "ML02. Cấu Trúc Rẽ Nhánh Điều Kiện (If • Else • Elif)",
  shortDescription: "Làm chủ quyết định luồng chương trình với câu lệnh điều kiện if-else trong JS, Python và C++",
  category: "ml-conditionals",
  course: 'multi-lang',
  track: "ml-foundation",
  difficulty: "easy",
  xpReward: 60,
  order: 2,
  week: 2,
  durationMinutes: 60,
  
  story: "Trong cuộc sống và lập trình, chúng ta liên tục phải đưa ra quyết định: *\"Nếu trời mưa thì mang ô, ngược lại thì không mang\"*.\n\nCấu trúc rẽ nhánh điều kiện giúp máy tính xử lý các tình huống khác nhau dựa trên biểu thức logic **Đúng (True)** hoặc **Sai (False)**.\n\n### So sánh câu lệnh Điều Kiện:\n\n#### 1. JavaScript (`if...else if...else`)\n```javascript\nlet score = 85;\nif (score >= 90) {\n  console.log(\"Xếp loại: Xuất sắc\");\n} else if (score >= 80) {\n  console.log(\"Xếp loại: Giỏi\");\n} else {\n  console.log(\"Xếp loại: Cần cố gắng\");\n}\n```\n\n#### 2. Python (`if...elif...else` — Dùng thụt đầu dòng Indentation)\n```python\nscore = 85\nif score >= 90:\n    print(\"Xếp loại: Xuất sắc\")\nelif score >= 80:\n    print(\"Xếp loại: Giỏi\")\nelse:\n    print(\"Xếp loại: Cần cố gắng\")\n```\n\n#### 3. C++ (`if...else if...else` & `switch...case`)\n```cpp\nint score = 85;\nif (score >= 90) {\n    cout << \"Xếp loại: Xuất sắc\" << endl;\n} else if (score >= 80) {\n    cout << \"Xếp loại: Giỏi\" << endl;\n} else {\n    cout << \"Xếp loại: Cần cố gắng\" << endl;\n}\n```\n\n📌 **Toán tử so sánh phổ biến**:\n* Bằng nhau: `===` (JS), `==` (Python, C++)\n* Lớn hơn/nhỏ hơn: `>`, `<`, `>=`, `<=`\n* Logic VÀ: `&&` (JS, C++), `and` (Python)\n* Logic HOẶC: `||` (JS, C++), `or` (Python)\n",

  taskInstructions: [
  "Khai báo biến điểm số `let score = 85;`.",
  "Viết cấu trúc `if (score >= 80)` để kiểm tra.",
  "Nếu `score >= 80`, in `\"Đạt chuẩn\"` ra console bằng `console.log(\"Đạt chuẩn\")`.",
  "Nếu ngược lại (`else`), in `\"Chưa đạt\"`.",
  "Kiểm tra thêm biến `let age = 15;`. Nếu `age >= 18` in `\"Đủ tuổi\"`, ngược lại in `\"Chưa đủ tuổi\"`."
],

  hints: {
    level1: "Dùng if (score >= 80) { ... } else { ... }",
    level2: "let score = 85;\nif (score >= 80) {\n  console.log(\"Đạt chuẩn\");\n} else {\n  console.log(\"Chưa đạt\");\n}\nlet age = 15;\nif (age >= 18) {\n  console.log(\"Đủ tuổi\");\n} else {\n  console.log(\"Chưa đủ tuổi\");\n}",
    solution: "let score = 85;\nif (score >= 80) {\n  console.log(\"Đạt chuẩn\");\n} else {\n  console.log(\"Chưa đạt\");\n}\n\nlet age = 15;\nif (age >= 18) {\n  console.log(\"Đủ tuổi\");\n} else {\n  console.log(\"Chưa đủ tuổi\");\n}"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">⚖️ MODULE 02: RẼ NHÁNH ĐIỀU KIỆN</div>\n  <h2 class=\"ml-title\">Kiểm Tra Điều Kiện Thông Minh</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>if (score >= 80) {<br>&nbsp;&nbsp;console.log(\"Giỏi\");<br>}</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>if score >= 80:<br>&nbsp;&nbsp;print(\"Giỏi\")</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>if (score >= 80) {<br>&nbsp;&nbsp;cout << \"Giỏi\";<br>}</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #8b5cf6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #c4b5fd; background: rgba(139, 92, 246, 0.15); border: 1px solid #8b5cf6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML02: Quyết định luồng điều kiện\n// 1. Khai báo let score = 85; và kiểm tra if (score >= 80)\n\n\n// 2. Khai báo let age = 15; và kiểm tra if (age >= 18)\n\n",

  solutionJsCode: "let score = 85;\nif (score >= 80) {\n  console.log(\"Đạt chuẩn\");\n} else {\n  console.log(\"Chưa đạt\");\n}\n\nlet age = 15;\nif (age >= 18) {\n  console.log(\"Đủ tuổi\");\n} else {\n  console.log(\"Chưa đủ tuổi\");\n}",

  tests: [
    {
      id: "ml02_score_check",
      description: "In \"Đạt chuẩn\" khi score = 85",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).includes('Đạt chuẩn')));
      }
    },
    {
      id: "ml02_age_check",
      description: "In \"Chưa đủ tuổi\" khi age = 15",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).includes('Chưa đủ tuổi')));
      }
    }
  ]
};
