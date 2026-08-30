import { Lesson } from '@/types/lesson';

export const lessonML03: Lesson = {
  id: "ml03-loops",
  title: "ML03. Vòng Lặp & Tự Động Hóa (For • While • Range)",
  shortDescription: "Làm chủ vòng lặp for, while để lặp lại thao tác xử lý trong JS, Python và C++",
  category: "ml-loops",
  course: 'multi-lang',
  track: "ml-foundation",
  difficulty: "medium",
  xpReward: 60,
  order: 3,
  week: 3,
  durationMinutes: 60,
  
  story: "Nếu bạn cần in 1.000 dòng chữ hoặc tính tổng 100 số, bạn sẽ không viết 100 dòng lệnh riêng lẻ. Đó là lúc **Vòng lặp (Loops)** phát huy sức mạnh!\n\n### 1. Vòng lặp `for` trong 3 ngôn ngữ:\n\n#### JavaScript:\n```javascript\n// Lặp từ 1 đến 5\nfor (let i = 1; i <= 5; i++) {\n  console.log(\"Số:\", i);\n}\n```\n\n#### Python (`range(start, stop)`):\n```python\n# Trong Python, range(1, 6) sẽ sinh dãy 1, 2, 3, 4, 5 (dừng trước 6)\nfor i in range(1, 6):\n    print(f\"Số: {i}\")\n```\n\n#### C++:\n```cpp\nfor (int i = 1; i <= 5; i++) {\n    cout << \"Số: \" << i << endl;\n}\n```\n\n### 2. Vòng lặp `while` (Lặp khi điều kiện còn đúng):\n* **JS**: `while (count < 3) { count++; }`\n* **Python**: `while count < 3: count += 1`\n* **C++**: `while (count < 3) { count++; }`\n",

  taskInstructions: [
  "Khai báo biến tổng `let totalSum = 0;`.",
  "Dùng vòng lặp `for (let i = 1; i <= 5; i++)` để tính tổng các số từ 1 đến 5.",
  "Bên trong vòng lặp, cộng dồn: `totalSum += i;`.",
  "In ra console giá trị của `totalSum` sau khi kết thúc vòng lặp (Kết quả là 15: 1+2+3+4+5)."
],

  hints: {
    level1: "Khởi tạo let totalSum = 0, chạy vòng lặp for từ 1 đến 5 và cộng dồn totalSum += i.",
    level2: "let totalSum = 0;\nfor (let i = 1; i <= 5; i++) {\n  totalSum += i;\n}\nconsole.log(\"Tổng là:\", totalSum);",
    solution: "let totalSum = 0;\nfor (let i = 1; i <= 5; i++) {\n  totalSum += i;\n}\n\nconsole.log(totalSum);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🔄 MODULE 03: VÒNG LẶP TỰ ĐỘNG</div>\n  <h2 class=\"ml-title\">Tính Tổng Tự Động Bằng Vòng Lặp</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>for (let i = 1; i <= 5; i++) {<br>&nbsp;&nbsp;total += i;<br>}</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>for i in range(1, 6):<br>&nbsp;&nbsp;total += i</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>for (int i = 1; i <= 5; i++) {<br>&nbsp;&nbsp;total += i;<br>}</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #10b981; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #6ee7b7; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML03: Vòng lặp tính tổng từ 1 đến 5\nlet totalSum = 0;\n\n// Viết vòng lặp for ở đây:\n\n\n// In kết quả:\n",

  solutionJsCode: "let totalSum = 0;\nfor (let i = 1; i <= 5; i++) {\n  totalSum += i;\n}\n\nconsole.log(totalSum);",

  tests: [
    {
      id: "ml03_total_sum",
      description: "Vòng lặp tính chính xác tổng từ 1 đến 5 là 15",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 15 || String(a).includes('15')));
      }
    }
  ]
};
