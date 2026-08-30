import { Lesson } from '@/types/lesson';

export const lessonML07_IO: Lesson = {
  id: "ml07-io",
  title: "ML07. Nhập / Xuất Dữ Liệu & Console I/O",
  shortDescription: "Làm chủ các luồng xuất dữ liệu chuẩn và định dạng nhiều dòng",
  category: "ml-io",
  course: 'multi-lang',
  track: "ml-data-oop",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "medium",
  xpReward: 70,
  order: 7,
  week: 7,
  durationMinutes: 60,
  
  story: "Khám phá các phương thức xuất dữ liệu chuẩn ra màn hình Console.",

  taskInstructions: [
  "In ra dòng 1: `\"=== GAME MENU ===\"`.",
  "In ra dòng 2: `\"1. Start Game\"`.",
  "In ra dòng 3: `\"2. Settings\"`.",
  "In ra dòng 4: `\"3. Exit\"`."
],

  hints: {
    level1: "In 4 dòng menu lần lượt.",
    level2: "JS: console.log(\"=== GAME MENU ===\"); ...",
    solution: "console.log(\"=== GAME MENU ===\");\nconsole.log(\"1. Start Game\");\nconsole.log(\"2. Settings\");\nconsole.log(\"3. Exit\");"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML07: Nhập / Xuất Dữ Liệu & Console I/O</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "// In 4 dòng menu ra console\n",
  solutionJsCode: "console.log(\"=== GAME MENU ===\");\nconsole.log(\"1. Start Game\");\nconsole.log(\"2. Settings\");\nconsole.log(\"3. Exit\");",

  initialPyCode: "# In 4 dòng menu ra console\n",
  solutionPyCode: "print(\"=== GAME MENU ===\")\nprint(\"1. Start Game\")\nprint(\"2. Settings\")\nprint(\"3. Exit\")",

  initialCppCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"=== GAME MENU ===\" << endl;\n    cout << \"1. Start Game\" << endl;\n    cout << \"2. Settings\" << endl;\n    cout << \"3. Exit\" << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"=== GAME MENU ===\" << endl;\n    cout << \"1. Start Game\" << endl;\n    cout << \"2. Settings\" << endl;\n    cout << \"3. Exit\" << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml07_menu",
      description: "Menu hiển thị đầy đủ \"Start Game\", \"Settings\", \"Exit\"",
      tester: (doc, win, context) => {
        const expected = "start game";
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
