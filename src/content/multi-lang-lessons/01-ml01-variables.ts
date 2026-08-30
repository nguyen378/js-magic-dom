import { Lesson } from '@/types/lesson';

export const lessonML01_VARIABLES: Lesson = {
  id: "ml01-variables",
  title: "ML01. Biến Số & Kiểu Dữ Liệu (JS • Python • C++)",
  shortDescription: "Làm quen với cách khai báo biến, hằng số và kiểu dữ liệu trong JavaScript, Python và C++",
  category: "ml-variables",
  course: 'multi-lang',
  track: "ml-foundation",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "easy",
  xpReward: 60,
  order: 1,
  week: 1,
  durationMinutes: 60,
  
  story: "Chào mừng bạn đến với **Khóa Học Lập Trình Cơ Bản Đa Ngôn Ngữ**! 🌐\n\nTrong khoa học máy tính, **Biến số (Variable)** là một vùng nhớ được đặt tên để lưu trữ dữ liệu. Dữ liệu có thể là số nguyên, số thực, chuỗi ký tự (text) hoặc giá trị đúng/sai (boolean).\n\n### So Sánh Cú Pháp 3 Ngôn Ngữ:\n\n#### 1. JavaScript (Web & Ứng dụng tương tác)\n```javascript\nconst heroName = \"Arthur\"; // Hằng số\nlet level = 1;              // Biến số\nlet diamonds = 100;\nlevel += 1;\nconsole.log(heroName, level, diamonds);\n```\n\n#### 2. Python (Ngắn gọn & Dễ học)\n```python\nhero_name = \"Arthur\"\nlevel = 1\ndiamonds = 100\nlevel += 1\nprint(hero_name, level, diamonds)\n```\n\n#### 3. C++ (Hiệu năng cực cao & Định kiểu tĩnh)\n```cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    const string heroName = \"Arthur\";\n    int level = 1;\n    int diamonds = 100;\n    level += 1;\n    cout << heroName << \" \" << level << \" \" << diamonds << endl;\n    return 0;\n}\n```\n",

  taskInstructions: [
  "Khai báo tên hiệp sĩ `Arthur`.",
  "Khai báo biến `level` ban đầu bằng 1, sau đó tăng lên 1 đơn vị (`level += 1`).",
  "Khai báo biến `diamonds` bằng 100.",
  "In các biến ra Console (console.log / print / cout)."
],

  hints: {
    level1: "Sử dụng biến số và toán tử += 1 để tăng level lên 2, sau đó in ra màn hình.",
    level2: "JS: const heroName = \"Arthur\"; let level = 1; let diamonds = 100; level += 1; console.log(heroName, level, diamonds);\nPython: hero_name = \"Arthur\"\nlevel = 1\ndiamonds = 100\nlevel += 1\nprint(hero_name, level, diamonds)\nC++: const string heroName = \"Arthur\"; int level = 1; int diamonds = 100; level += 1; cout << heroName << \" \" << level << \" \" << diamonds << endl;",
    solution: "const heroName = \"Arthur\";\nlet level = 1;\nlet diamonds = 100;\n\nlevel += 1;\n\nconsole.log(heroName, level, diamonds);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML01: Biến Số & Kiểu Dữ Liệu (JS • Python • C++)</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "// 1. Khai báo const heroName = \"Arthur\";\n\n// 2. Khai báo let level = 1; let diamonds = 100;\n\n// 3. Tăng level += 1;\n\n// 4. In ra console.log(heroName, level, diamonds);\n",
  solutionJsCode: "const heroName = \"Arthur\";\nlet level = 1;\nlet diamonds = 100;\n\nlevel += 1;\n\nconsole.log(heroName, level, diamonds);",

  initialPyCode: "# 1. Khai báo hero_name = \"Arthur\"\n\n# 2. Khai báo level = 1 và diamonds = 100\n\n# 3. Tăng level += 1\n\n# 4. In ra print(hero_name, level, diamonds)\n",
  solutionPyCode: "hero_name = \"Arthur\"\nlevel = 1\ndiamonds = 100\n\nlevel += 1\n\nprint(hero_name, level, diamonds)",

  initialCppCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // 1. Khai báo const string heroName = \"Arthur\";\n    \n    // 2. Khai báo int level = 1; int diamonds = 100;\n    \n    // 3. Tăng level += 1;\n    \n    // 4. In ra cout << heroName << \" \" << level << \" \" << diamonds << endl;\n    \n    return 0;\n}\n",
  solutionCppCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    const string heroName = \"Arthur\";\n    int level = 1;\n    int diamonds = 100;\n    \n    level += 1;\n    \n    cout << heroName << \" \" << level << \" \" << diamonds << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml01_name",
      description: "Tên hiệp sĩ \"Arthur\" được xuất ra màn hình",
      tester: (doc, win, context) => {
        const expected = "arthur";
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
    },
    {
      id: "ml01_level",
      description: "Cấp độ level sau khi tăng có giá trị là 2",
      tester: (doc, win, context) => {
        const expected = "2";
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
    },
    {
      id: "ml01_diamonds",
      description: "Số kim cương diamonds có giá trị 100",
      tester: (doc, win, context) => {
        const expected = "100";
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
