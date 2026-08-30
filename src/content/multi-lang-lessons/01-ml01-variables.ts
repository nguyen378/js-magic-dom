import { Lesson } from '@/types/lesson';

export const lessonML01: Lesson = {
  id: "ml01-variables",
  title: "ML01. Biến Số & Kiểu Dữ Liệu (JS • Python • C++)",
  shortDescription: "Làm quen với cách khai báo biến, hằng số và kiểu dữ liệu trong JavaScript, Python và C++",
  category: "ml-variables",
  course: 'multi-lang',
  track: "ml-foundation",
  difficulty: "easy",
  xpReward: 60,
  order: 1,
  week: 1,
  durationMinutes: 60,
  
  story: "Chào mừng bạn đến với **Khóa Học Lập Trình Cơ Bản Đa Ngôn Ngữ**! 🌐\n\nTrong khoa học máy tính, **Biến số (Variable)** là một vùng nhớ được đặt tên để lưu trữ dữ liệu. Dữ liệu có thể là số nguyên, số thực, chuỗi ký tự (text) hoặc giá trị đúng/sai (boolean).\n\nHãy cùng so sánh cách 3 ngôn ngữ hàng đầu khai báo biến:\n\n### 1. JavaScript (Web & Ứng dụng tương tác)\n```javascript\nconst heroName = \"Arthur\"; // Hằng số (không đổi)\nlet level = 1;              // Biến số có thể thay đổi\nlet isReady = true;         // Boolean (true/false)\nconsole.log(heroName, \"Level:\", level);\n```\n\n### 2. Python (Cú pháp ngắn gọn & Trực quan)\n```python\n# Python không cần từ khóa khai báo, chỉ cần gán tên!\nhero_name = \"Arthur\"\nlevel = 1\nis_ready = True  # Viết hoa chữ T\nprint(f\"{hero_name} Level: {level}\")\n```\n\n### 3. C++ (Hiệu năng cực cao & Định kiểu tĩnh)\n```cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    const string heroName = \"Arthur\"; // Bắt buộc định rõ kiểu string\n    int level = 1;                    // Kiểu số nguyên int\n    bool isReady = true;              // Kiểu boolean\n    cout << heroName << \" Level: \" << level << endl;\n    return 0;\n}\n```\n\n💡 **Bí kíp ghi nhớ**:\n* **JavaScript**: Dùng `const` / `let`, in bằng `console.log()`.\n* **Python**: Gán trực tiếp `ten = gia_tri`, in bằng `print()`.\n* **C++**: Khai báo rõ kiểu (`int`, `string`, `double`, `bool`), in bằng `std::cout`.\n",

  taskInstructions: [
  "Khai báo hằng số `heroName` có giá trị `\"Arthur\"`.",
  "Khai báo biến `level` ban đầu bằng `1`.",
  "Khai báo biến `diamonds` ban đầu bằng `100`.",
  "Tăng `level` lên 1 đơn vị (`level += 1` hoặc `level = level + 1`).",
  "In các biến ra Console bằng `console.log(heroName, level, diamonds)`."
],

  hints: {
    level1: "Dùng const cho heroName, let cho level và diamonds. Dùng level += 1 để tăng level.",
    level2: "const heroName = \"Arthur\";\nlet level = 1;\nlet diamonds = 100;\nlevel += 1;\nconsole.log(heroName, level, diamonds);",
    solution: "const heroName = \"Arthur\";\nlet level = 1;\nlet diamonds = 100;\n\nlevel += 1;\n\nconsole.log(heroName, level, diamonds);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 MODULE 01: BIẾN SỐ & KIỂU DỮ LIỆU</div>\n  <h2 class=\"ml-title\">Bảng Đối Chiếu Cú Pháp 3 Ngôn Ngữ</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>let level = 1;<br>const name = \"Arthur\";</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>level = 1<br>name = \"Arthur\"</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>int level = 1;<br>string name = \"Arthur\";</code></div>\n    </div>\n  </div>\n  <div class=\"status-box\">💡 Hãy chạy lệnh và xem kết quả xuất hiện tại Console bên dưới!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "// ML01: Thực hành khai báo biến và hằng số\n// 1. Khai báo const heroName = \"Arthur\";\n\n\n// 2. Khai báo let level = 1;\n\n\n// 3. Khai báo let diamonds = 100;\n\n\n// 4. Tăng level lên 1 đơn vị\n\n\n// 5. In kết quả ra Console\n",

  solutionJsCode: "const heroName = \"Arthur\";\nlet level = 1;\nlet diamonds = 100;\n\nlevel += 1;\n\nconsole.log(heroName, level, diamonds);",

  tests: [
    {
      id: "ml01_hero_name",
      description: "Khai báo hằng số heroName có giá trị \"Arthur\"",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).toLowerCase().includes('arthur')));
      }
    },
    {
      id: "ml01_level_val",
      description: "Biến level được tăng lên 2",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 2 || String(a).includes('2')));
      }
    },
    {
      id: "ml01_diamonds_val",
      description: "Biến diamonds có giá trị 100",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 100 || String(a).includes('100')));
      }
    }
  ]
};
