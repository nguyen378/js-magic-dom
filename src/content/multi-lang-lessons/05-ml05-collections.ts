import { Lesson } from '@/types/lesson';

export const lessonML05: Lesson = {
  id: "ml05-collections",
  title: "ML05. Cấu Trúc Tập Hợp (Array • List • Vector)",
  shortDescription: "Làm việc với danh sách phần tử, thêm/xóa và truy xuất theo chỉ số index",
  category: "ml-collections",
  course: 'multi-lang',
  track: "ml-control",
  difficulty: "medium",
  xpReward: 65,
  order: 5,
  week: 5,
  durationMinutes: 60,
  
  story: "Khi cần lưu danh sách 100 học sinh hoặc các món đồ trong balo, ta sử dụng **Cấu trúc Tập hợp (Collections)**.\n\n### So sánh cách quản lý Tập hợp:\n\n#### 1. JavaScript — `Array`\n```javascript\nconst items = [\"Sword\", \"Shield\", \"Potion\"];\nitems.push(\"Helmet\");     // Thêm vào cuối\nconsole.log(items[0]);     // \"Sword\" (Chỉ số index bắt đầu từ 0)\nconsole.log(items.length); // 4 phần tử\n```\n\n#### 2. Python — `List`\n```python\nitems = [\"Sword\", \"Shield\", \"Potion\"]\nitems.append(\"Helmet\")    # Dùng append thay vì push\nprint(items[0])           # \"Sword\"\nprint(len(items))         # Dùng hàm len() để lấy độ dài\n```\n\n#### 3. C++ — `std::vector`\n```cpp\n#include <vector>\n#include <string>\n\nvector<string> items = {\"Sword\", \"Shield\", \"Potion\"};\nitems.push_back(\"Helmet\"); // Dùng push_back\ncout << items[0] << endl;  // \"Sword\"\ncout << items.size() << endl; // 4\n```\n\n💡 **Quy tắc vàng**:\n* Mọi ngôn ngữ hiện đại đều đánh chỉ số từ **`0`** (Zero-based indexing).\n* Phần tử đầu tiên là `[0]`, phần tử thứ hai là `[1]`.\n",

  taskInstructions: [
  "Khai báo mảng `const heroes = [\"Arthur\", \"Lancelot\", \"Merlin\"];`.",
  "Thêm dũng sĩ `\"Galahad\"` vào cuối mảng bằng `heroes.push(\"Galahad\");`.",
  "In ra console phần tử đầu tiên `heroes[0]`.",
  "In ra console độ dài của mảng `heroes.length` (Sau khi push là 4)."
],

  hints: {
    level1: "Khai báo mảng bằng ngoặc vuông [], push để thêm, [0] để lấy phần tử đầu, .length để lấy độ dài.",
    level2: "const heroes = [\"Arthur\", \"Lancelot\", \"Merlin\"];\nheroes.push(\"Galahad\");\nconsole.log(heroes[0]);\nconsole.log(heroes.length);",
    solution: "const heroes = [\"Arthur\", \"Lancelot\", \"Merlin\"];\nheroes.push(\"Galahad\");\n\nconsole.log(heroes[0]);\nconsole.log(heroes.length);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🎒 MODULE 05: CẤU TRÚC TẬP HỢP</div>\n  <h2 class=\"ml-title\">Quản Lý Danh Sách & Balo Đồ</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript Array</div>\n      <div class=\"code-snippet\"><code>arr.push(x);<br>len = arr.length;</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python List</div>\n      <div class=\"code-snippet\"><code>arr.append(x)<br>len = len(arr)</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++ Vector</div>\n      <div class=\"code-snippet\"><code>v.push_back(x);<br>len = v.size();</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #ec4899; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #f472b6; background: rgba(236, 72, 153, 0.15); border: 1px solid #ec4899; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML05: Mảng và thao tác tập hợp\n// 1. Khai báo mảng heroes\n\n\n// 2. Thêm \"Galahad\" vào cuối\n\n\n// 3. In heroes[0] và heroes.length ra console\n",

  solutionJsCode: "const heroes = [\"Arthur\", \"Lancelot\", \"Merlin\"];\nheroes.push(\"Galahad\");\n\nconsole.log(heroes[0]);\nconsole.log(heroes.length);",

  tests: [
    {
      id: "ml05_first_elem",
      description: "In chính xác phần tử đầu tiên \"Arthur\"",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).toLowerCase().includes('arthur')));
      }
    },
    {
      id: "ml05_array_len",
      description: "Độ dài mảng sau khi push là 4",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 4 || String(a).includes('4')));
      }
    }
  ]
};
