import { Lesson } from '@/types/lesson';

export const lessonML04: Lesson = {
  id: "ml04-functions",
  title: "ML04. Hàm & Tái Sử Dụng Mã Nguồn (Functions & Return)",
  shortDescription: "Học cách định nghĩa hàm, truyền tham số và trả về kết quả trong JS, Python và C++",
  category: "ml-functions",
  course: 'multi-lang',
  track: "ml-control",
  difficulty: "medium",
  xpReward: 65,
  order: 4,
  week: 4,
  durationMinutes: 60,
  
  story: "**Hàm (Function)** là khối mã thực hiện một nhiệm vụ cụ thể. Khi đã viết hàm, bạn có thể gọi hàm nhiều lần mà không cần viết lại mã từ đầu!\n\n### So sánh cách viết Hàm:\n\n#### 1. JavaScript (`function` hoặc Arrow Function `=>`)\n```javascript\nfunction calculateDamage(baseAttack, bonus) {\n  return baseAttack * 2 + bonus;\n}\n\nconst finalDamage = calculateDamage(50, 10); // 110\nconsole.log(\"Sát thương:\", finalDamage);\n```\n\n#### 2. Python (`def` — define)\n```python\ndef calculate_damage(base_attack, bonus):\n    return base_attack * 2 + bonus\n\nfinal_damage = calculate_damage(50, 10)\nprint(f\"Sát thương: {final_damage}\")\n```\n\n#### 3. C++ (Bắt buộc khai báo kiểu trả về và kiểu tham số)\n```cpp\nint calculateDamage(int baseAttack, int bonus) {\n    return baseAttack * 2 + bonus;\n}\n\nint main() {\n    int finalDamage = calculateDamage(50, 10);\n    cout << \"Sát thương: \" << finalDamage << endl;\n    return 0;\n}\n```\n\n💡 **Từ khóa cốt lõi**:\n* `return`: Trả về kết quả sau khi hàm tính toán xong.\n* **Tham số (Parameters)**: Biến số nhận dữ liệu đầu vào khi hàm được gọi.\n",

  taskInstructions: [
  "Định nghĩa hàm `function multiply(a, b) { return a * b; }`.",
  "Định nghĩa hàm `function calculateTax(price, rate) { return price * rate; }`.",
  "Gọi hàm `multiply(6, 7)` và lưu kết quả vào biến `let product`.",
  "Gọi hàm `calculateTax(100, 0.1)` và lưu vào biến `let tax`.",
  "In `product` (42) và `tax` (10) ra console."
],

  hints: {
    level1: "Tạo 2 hàm dùng từ khóa function và từ khóa return để trả về kết quả nhân.",
    level2: "function multiply(a, b) {\n  return a * b;\n}\nfunction calculateTax(price, rate) {\n  return price * rate;\n}\nlet product = multiply(6, 7);\nlet tax = calculateTax(100, 0.1);\nconsole.log(product, tax);",
    solution: "function multiply(a, b) {\n  return a * b;\n}\n\nfunction calculateTax(price, rate) {\n  return price * rate;\n}\n\nlet product = multiply(6, 7);\nlet tax = calculateTax(100, 0.1);\n\nconsole.log(product, tax);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">📜 MODULE 04: HÀM & THAM SỐ</div>\n  <h2 class=\"ml-title\">Định Nghĩa Hàm Trong 3 Ngôn Ngữ</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>function add(a, b) {<br>&nbsp;&nbsp;return a + b;<br>}</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>def add(a, b):<br>&nbsp;&nbsp;return a + b</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>int add(int a, int b) {<br>&nbsp;&nbsp;return a + b;<br>}</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #06b6d4; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #67e8f9; background: rgba(6, 182, 212, 0.15); border: 1px solid #06b6d4; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML04: Định nghĩa và gọi hàm\n// 1. Hàm multiply(a, b)\n\n\n// 2. Hàm calculateTax(price, rate)\n\n\n// 3. Gọi hàm và in kết quả ra console\n",

  solutionJsCode: "function multiply(a, b) {\n  return a * b;\n}\n\nfunction calculateTax(price, rate) {\n  return price * rate;\n}\n\nlet product = multiply(6, 7);\nlet tax = calculateTax(100, 0.1);\n\nconsole.log(product, tax);",

  tests: [
    {
      id: "ml04_product_val",
      description: "Hàm multiply(6, 7) trả về 42",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 42 || String(a).includes('42')));
      }
    },
    {
      id: "ml04_tax_val",
      description: "Hàm calculateTax(100, 0.1) trả về 10",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 10 || String(a).includes('10')));
      }
    }
  ]
};
