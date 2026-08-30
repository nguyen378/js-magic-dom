import { Lesson } from '@/types/lesson';

export const lessonML06: Lesson = {
  id: "ml06-strings",
  title: "ML06. Xử Lý Chuỗi Ký Tự (String Manipulation & Slicing)",
  shortDescription: "Làm chủ nối chuỗi, định dạng hoa/thường, cắt chuỗi và đo độ dài chuỗi",
  category: "ml-strings",
  course: 'multi-lang',
  track: "ml-control",
  difficulty: "medium",
  xpReward: 65,
  order: 6,
  week: 6,
  durationMinutes: 60,
  
  story: "**Chuỗi ký tự (String)** là tập hợp các chữ cái, số hoặc biểu tượng được đặt trong dấu ngoặc kép hoặc đơn.\n\n### So sánh các thao tác xử lý chuỗi:\n\n#### 1. JavaScript (Template Literals `${}` & Methods)\n```javascript\nlet name = \"alice\";\nlet upper = name.toUpperCase(); // \"ALICE\"\nlet greeting = `Xin chào, ${upper}!`;\nlet sub = name.slice(0, 3);     // \"ali\" (cắt từ vị trí 0 đến 3)\n```\n\n#### 2. Python (F-strings `f\"\"` & Slicing)\n```python\nname = \"alice\"\nupper = name.upper()            # \"ALICE\"\ngreeting = f\"Xin chào, {upper}!\"\nsub = name[0:3]                 # \"ali\" (Cú pháp cắt chuỗi cực đẹp [start:stop])\n```\n\n#### 3. C++ (`std::string` & `substr`)\n```cpp\nstring name = \"alice\";\nstring greeting = \"Xin chào, \" + name + \"!\";\nstring sub = name.substr(0, 3); // (vị trí bắt đầu, độ dài cần lấy)\n```\n",

  taskInstructions: [
  "Khai báo biến `let rawName = \"nguyen van a\";`.",
  "Chuyển chuỗi thành chữ hoa: `let upperName = rawName.toUpperCase();`.",
  "Đo độ dài chuỗi bằng `rawName.length`.",
  "Tạo chuỗi chào mừng bằng Template string: `let message = `Xin chào: ${upperName}`;`.",
  "In `upperName` và `message` ra console."
],

  hints: {
    level1: "Dùng .toUpperCase() để đổi chữ hoa, dấu backtick `...${biến}...` để ghép chuỗi.",
    level2: "let rawName = \"nguyen van a\";\nlet upperName = rawName.toUpperCase();\nlet message = `Xin chào: ${upperName}`;\nconsole.log(upperName);\nconsole.log(message);",
    solution: "let rawName = \"nguyen van a\";\nlet upperName = rawName.toUpperCase();\nlet message = `Xin chào: ${upperName}`;\n\nconsole.log(upperName);\nconsole.log(message);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🔤 MODULE 06: XỬ LÝ CHUỖI KÝ TỰ</div>\n  <h2 class=\"ml-title\">Nối Chuỗi & Biến Đổi Văn Bản</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>str.toUpperCase()<br>`Hello ${name}`</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>str.upper()<br>f\"Hello {name}\"</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>str.substr(0, 3)<br>\"Hello \" + name</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #eab308; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #fde047; background: rgba(234, 179, 8, 0.15); border: 1px solid #eab308; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML06: Xử lý chuỗi ký tự\nlet rawName = \"nguyen van a\";\n\n// 1. Chuyển thành chữ in hoa\n\n\n// 2. Tạo chuỗi chào mừng\n\n\n// 3. In ra console\n",

  solutionJsCode: "let rawName = \"nguyen van a\";\nlet upperName = rawName.toUpperCase();\nlet message = `Xin chào: ${upperName}`;\n\nconsole.log(upperName);\nconsole.log(message);",

  tests: [
    {
      id: "ml06_upper_check",
      description: "Chuyển đổi thành \"NGUYEN VAN A\"",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).includes('NGUYEN VAN A')));
      }
    },
    {
      id: "ml06_msg_check",
      description: "In lời chào chứa \"Xin chào: NGUYEN VAN A\"",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).includes('Xin chào: NGUYEN VAN A')));
      }
    }
  ]
};
