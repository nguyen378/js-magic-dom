import { Lesson } from '@/types/lesson';

export const lessonML11: Lesson = {
  id: "ml11-stdlib",
  title: "ML11. Thư Viện Chuẩn & Thuật Toán (Standard Libraries & Math)",
  shortDescription: "Tận dụng các thư viện có sẵn để tính toán toán học, sinh số ngẫu nhiên và sắp xếp",
  category: "ml-stdlib",
  course: 'multi-lang',
  track: "ml-capstone",
  difficulty: "hard",
  xpReward: 80,
  order: 11,
  week: 11,
  durationMinutes: 60,
  
  story: "Mỗi ngôn ngữ lập trình đều cung cấp một **Thư viện chuẩn (Standard Library)** chứa hàng nghìn hàm tiện ích tối ưu sẵn.\n\n### So sánh các hàm Toán học & Ngẫu nhiên phổ biến:\n\n#### 1. JavaScript (`Math`)\n```javascript\nconst squareRoot = Math.sqrt(64); // 8 (Căn bậc 2)\nconst power = Math.pow(2, 3);      // 8 (2 lũy thừa 3)\nconst round = Math.round(4.7);     // 5 (Làm tròn)\nconst random = Math.floor(Math.random() * 10) + 1; // Số ngẫu nhiên từ 1 đến 10\n```\n\n#### 2. Python (`import math`, `import random`)\n```python\nimport math\nimport random\n\nsquare_root = math.sqrt(64)       # 8.0\npower = math.pow(2, 3)            # 8.0\nrand_num = random.randint(1, 10)  # Sinh số ngẫu nhiên từ 1 đến 10\n```\n\n#### 3. C++ (`<cmath>`, `<algorithm>`)\n```cpp\n#include <cmath>\n#include <algorithm>\n#include <vector>\n\ndouble squareRoot = sqrt(64); // 8.0\ndouble power = pow(2, 3);     // 8.0\n\nvector<int> nums = {5, 2, 8, 1};\nsort(nums.begin(), nums.end()); // Sắp xếp tăng dần: {1, 2, 5, 8}\n```\n",

  taskInstructions: [
  "Tính căn bậc hai của 81 bằng `Math.sqrt(81)` và lưu vào `let sq`.",
  "Tính 2 lũy thừa 4 bằng `Math.pow(2, 4)` và lưu vào `let pw`.",
  "Sắp xếp mảng số `let numbers = [50, 10, 40, 20];` tăng dần bằng `numbers.sort((a, b) => a - b);`.",
  "In `sq` (9), `pw` (16) và phần tử đầu tiên sau sắp xếp `numbers[0]` (10) ra console."
],

  hints: {
    level1: "Dùng Math.sqrt(81), Math.pow(2, 4) và numbers.sort((a, b) => a - b).",
    level2: "let sq = Math.sqrt(81);\nlet pw = Math.pow(2, 4);\nlet numbers = [50, 10, 40, 20];\nnumbers.sort((a, b) => a - b);\nconsole.log(sq, pw, numbers[0]);",
    solution: "let sq = Math.sqrt(81);\nlet pw = Math.pow(2, 4);\nlet numbers = [50, 10, 40, 20];\nnumbers.sort((a, b) => a - b);\n\nconsole.log(sq, pw, numbers[0]);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">⚡ MODULE 11: THƯ VIỆN CHUẨN</div>\n  <h2 class=\"ml-title\">Hàm Tiện Ích & Toán Học Có Sẵn</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>Math.sqrt(81)<br>Math.pow(2, 4)</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>math.sqrt(81)<br>math.pow(2, 4)</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>sqrt(81);<br>pow(2, 4);</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #0284c7; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #38bdf8; background: rgba(2, 132, 199, 0.15); border: 1px solid #0284c7; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML11: Sử dụng thư viện Math và sắp xếp\n// 1. Tính căn bậc 2 và lũy thừa\n\n\n// 2. Sắp xếp mảng số\n\n\n// 3. In kết quả ra console\n",

  solutionJsCode: "let sq = Math.sqrt(81);\nlet pw = Math.pow(2, 4);\nlet numbers = [50, 10, 40, 20];\nnumbers.sort((a, b) => a - b);\n\nconsole.log(sq, pw, numbers[0]);",

  tests: [
    {
      id: "ml11_sqrt_check",
      description: "Căn bậc hai của 81 là 9",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 9 || String(a).includes('9')));
      }
    },
    {
      id: "ml11_pow_check",
      description: "2 lũy thừa 4 là 16",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 16 || String(a).includes('16')));
      }
    },
    {
      id: "ml11_sort_check",
      description: "Phần tử nhỏ nhất sau sắp xếp là 10",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 10 || String(a).includes('10')));
      }
    }
  ]
};
