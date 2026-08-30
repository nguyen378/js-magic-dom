import { Lesson } from '@/types/lesson';

export const lessonML02_CONDITIONALS: Lesson = {
  id: "ml02-conditionals",
  title: "ML02. Cấu Trúc Rẽ Nhánh Điều Kiện (JS • Python • C++)",
  shortDescription: "Làm chủ câu lệnh if, else if, else và toán tử so sánh logic trên 3 ngôn ngữ",
  category: "ml-conditionals",
  course: 'multi-lang',
  track: "ml-foundation",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "easy",
  xpReward: 60,
  order: 2,
  week: 2,
  durationMinutes: 60,
  
  story: "Cấu trúc rẽ nhánh **if / else** cho phép máy tính đưa ra quyết định dựa trên điều kiện đúng (True) hoặc sai (False).\n\n### So Sánh Cú Pháp:\n* **JavaScript**: `if (hp <= 0) { ... } else if (hp < 30) { ... } else { ... }`\n* **Python**: `if hp <= 0: ... elif hp < 30: ... else: ...`\n* **C++**: `if (hp <= 0) { ... } else if (hp < 30) { ... } else { ... }`\n",

  taskInstructions: [
  "Khai báo biến `hp` bằng 25.",
  "Nếu `hp <= 0`: in ra `\"Defeated\"`.",
  "Ngược lại nếu `hp < 30`: in ra `\"Danger\"`.",
  "Ngược lại: in ra `\"Healthy\"`."
],

  hints: {
    level1: "Kiểm tra hp < 30 để in ra Danger.",
    level2: "JS: if (hp <= 0) console.log(\"Defeated\"); else if (hp < 30) console.log(\"Danger\"); else console.log(\"Healthy\");",
    solution: "let hp = 25;\n\nif (hp <= 0) {\n  console.log(\"Defeated\");\n} else if (hp < 30) {\n  console.log(\"Danger\");\n} else {\n  console.log(\"Healthy\");\n}"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML02: Cấu Trúc Rẽ Nhánh Điều Kiện (JS • Python • C++)</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "let hp = 25;\n\n// Viết cấu trúc if / else if / else kiểm tra hp\n",
  solutionJsCode: "let hp = 25;\n\nif (hp <= 0) {\n  console.log(\"Defeated\");\n} else if (hp < 30) {\n  console.log(\"Danger\");\n} else {\n  console.log(\"Healthy\");\n}",

  initialPyCode: "hp = 25\n\n# Viết cấu trúc if / elif / else kiểm tra hp\n",
  solutionPyCode: "hp = 25\n\nif hp <= 0:\n    print(\"Defeated\")\nelif hp < 30:\n    print(\"Danger\")\nelse:\n    print(\"Healthy\")",

  initialCppCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int hp = 25;\n    // Viết if / else if / else kiểm tra hp\n    \n    return 0;\n}\n",
  solutionCppCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int hp = 25;\n    if (hp <= 0) {\n        cout << \"Defeated\" << endl;\n    } else if (hp < 30) {\n        cout << \"Danger\" << endl;\n    } else {\n        cout << \"Healthy\" << endl;\n    }\n    return 0;\n}",

  tests: [
    {
      id: "ml02_danger",
      description: "Chương trình nhận diện chính xác trạng thái \"Danger\"",
      tester: (doc, win, context) => {
        const expected = "danger";
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
