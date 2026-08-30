import { Lesson } from '@/types/lesson';

export const lessonML06_STRINGS: Lesson = {
  id: "ml06-strings",
  title: "ML06. Xử Lý Chuỗi & Định Dạng (JS • Python • C++)",
  shortDescription: "Cắt ghép chuỗi, nối chuỗi và định dạng Template/F-Strings chuyên nghiệp",
  category: "ml-strings",
  course: 'multi-lang',
  track: "ml-control",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "medium",
  xpReward: 70,
  order: 6,
  week: 6,
  durationMinutes: 60,
  
  story: "Xử lý chuỗi ký tự String:\n* **JS**: `const msg = `Hi ${name}, rank ${rank}!`;`\n* **Python**: `msg = f\"Hi {name}, rank {rank}!\"`\n* **C++**: `string msg = \"Hi \" + name + \", rank \" + rank + \"!\";`\n",

  taskInstructions: [
  "Khai báo biến `name` bằng `\"Luna\"` và `rank` bằng `\"Master\"`.",
  "Tạo chuỗi thông báo định dạng `\"Player Luna has rank Master\"`.",
  "In chuỗi ra Console."
],

  hints: {
    level1: "Ghép name và rank vào câu thông báo.",
    level2: "JS: console.log(`Player ${name} has rank ${rank}`);",
    solution: "const name = \"Luna\";\nconst rank = \"Master\";\nconst message = `Player ${name} has rank ${rank}`;\nconsole.log(message);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML06: Xử Lý Chuỗi & Định Dạng (JS • Python • C++)</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "const name = \"Luna\";\nconst rank = \"Master\";\n// Tạo và in thông báo\n",
  solutionJsCode: "const name = \"Luna\";\nconst rank = \"Master\";\nconst message = `Player ${name} has rank ${rank}`;\nconsole.log(message);",

  initialPyCode: "name = \"Luna\"\nrank = \"Master\"\n# Tạo và in thông báo f-string\n",
  solutionPyCode: "name = \"Luna\"\nrank = \"Master\"\nmessage = f\"Player {name} has rank {rank}\"\nprint(message)",

  initialCppCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = \"Luna\";\n    string rank = \"Master\";\n    string message = \"Player \" + name + \" has rank \" + rank;\n    cout << message << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string name = \"Luna\";\n    string rank = \"Master\";\n    string message = \"Player \" + name + \" has rank \" + rank;\n    cout << message << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml06_str",
      description: "Chuỗi in ra chứa \"Player Luna has rank Master\"",
      tester: (doc, win, context) => {
        const expected = "player luna has rank master";
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
