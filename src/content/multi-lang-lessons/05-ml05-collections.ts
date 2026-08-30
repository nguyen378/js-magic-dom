import { Lesson } from '@/types/lesson';

export const lessonML05_COLLECTIONS: Lesson = {
  id: "ml05-collections",
  title: "ML05. Cấu Trúc Tập Hợp: Array • List • Vector",
  shortDescription: "Quản lý kho đồ Balo RPG với Array (JS), List (Python) và std::vector (C++)",
  category: "ml-collections",
  course: 'multi-lang',
  track: "ml-control",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "medium",
  xpReward: 70,
  order: 5,
  week: 5,
  durationMinutes: 60,
  
  story: "Cấu trúc danh sách lưu trữ nhiều phần tử theo thứ tự:\n* **JS**: `let items = [\"Sword\", \"Shield\"]; items.push(\"Potion\");`\n* **Python**: `items = [\"Sword\", \"Shield\"]; items.append(\"Potion\")`\n* **C++**: `vector<string> items = {\"Sword\", \"Shield\"}; items.push_back(\"Potion\");`\n",

  taskInstructions: [
  "Tạo danh sách `items` chứa 2 món: `\"Sword\"` và `\"Shield\"`.",
  "Thêm món `\"Potion\"` vào cuối danh sách.",
  "In ra độ dài danh sách (kết quả: 3) và in món đầu tiên (kết quả: Sword)."
],

  hints: {
    level1: "Thêm phần tử và lấy độ dài .length / len() / .size().",
    level2: "JS: items.push(\"Potion\"); console.log(items.length, items[0]);",
    solution: "const items = [\"Sword\", \"Shield\"];\nitems.push(\"Potion\");\nconsole.log(\"Count:\", items.length);\nconsole.log(\"First item:\", items[0]);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML05: Cấu Trúc Tập Hợp: Array • List • Vector</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "const items = [\"Sword\", \"Shield\"];\n// 1. Thêm Potion\n\n// 2. In số lượng và món đầu tiên\n",
  solutionJsCode: "const items = [\"Sword\", \"Shield\"];\nitems.push(\"Potion\");\nconsole.log(\"Count:\", items.length);\nconsole.log(\"First item:\", items[0]);",

  initialPyCode: "items = [\"Sword\", \"Shield\"]\n# 1. Thêm Potion\n\n# 2. In số lượng và món đầu tiên\n",
  solutionPyCode: "items = [\"Sword\", \"Shield\"]\nitems.append(\"Potion\")\nprint(\"Count:\", len(items))\nprint(\"First item:\", items[0])",

  initialCppCode: "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<string> items = {\"Sword\", \"Shield\"};\n    items.push_back(\"Potion\");\n    cout << \"Count: \" << items.size() << endl;\n    cout << \"First item: \" << items[0] << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint main() {\n    vector<string> items = {\"Sword\", \"Shield\"};\n    items.push_back(\"Potion\");\n    cout << \"Count: \" << items.size() << endl;\n    cout << \"First item: \" << items[0] << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml05_count",
      description: "Danh sách có đúng 3 phần tử",
      tester: (doc, win, context) => {
        const expected = "3";
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
      id: "ml05_item",
      description: "Món đồ đầu tiên là Sword",
      tester: (doc, win, context) => {
        const expected = "sword";
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
