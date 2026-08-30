import { Lesson } from '@/types/lesson';

export const lessonML03_LOOPS: Lesson = {
  id: "ml03-loops",
  title: "ML03. Vòng Lặp & Tự Động Hóa (JS • Python • C++)",
  shortDescription: "Lặp lại tự động với for, while và tính tổng các số từ 1 đến 5",
  category: "ml-loops",
  course: 'multi-lang',
  track: "ml-foundation",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "easy",
  xpReward: 60,
  order: 3,
  week: 3,
  durationMinutes: 60,
  
  story: "Vòng lặp giúp máy tính thực hiện hàng ngàn phép tính lặp đi lặp lại chỉ với vài dòng mã.\n\n### So Sánh Vòng Lặp:\n* **JS**: `for (let i = 1; i <= 5; i++) { sum += i; }`\n* **Python**: `for i in range(1, 6): sum += i`\n* **C++**: `for (int i = 1; i <= 5; i++) { sum += i; }`\n",

  taskInstructions: [
  "Khai báo biến `total` ban đầu bằng 0.",
  "Sử dụng vòng lặp duyệt từ 1 đến 5 và cộng dồn vào `total`.",
  "In kết quả `total` ra Console (kết quả mong đợi: 15)."
],

  hints: {
    level1: "1 + 2 + 3 + 4 + 5 = 15.",
    level2: "JS: let total = 0; for (let i = 1; i <= 5; i++) total += i; console.log(total);",
    solution: "let total = 0;\nfor (let i = 1; i <= 5; i++) {\n  total += i;\n}\nconsole.log(\"Total:\", total);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML03: Vòng Lặp & Tự Động Hóa (JS • Python • C++)</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "let total = 0;\n\n// Vòng lặp từ 1 đến 5\n\n\n// In total\n",
  solutionJsCode: "let total = 0;\nfor (let i = 1; i <= 5; i++) {\n  total += i;\n}\nconsole.log(\"Total:\", total);",

  initialPyCode: "total = 0\n\n# Vòng lặp for i in range(1, 6):\n\n\n# In total\n",
  solutionPyCode: "total = 0\nfor i in range(1, 6):\n    total += i\nprint(\"Total:\", total)",

  initialCppCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 5; i++) {\n        total += i;\n    }\n    cout << \"Total: \" << total << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 5; i++) {\n        total += i;\n    }\n    cout << \"Total: \" << total << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml03_sum",
      description: "Tổng cộng dồn từ 1 đến 5 đạt 15",
      tester: (doc, win, context) => {
        const expected = "15";
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
