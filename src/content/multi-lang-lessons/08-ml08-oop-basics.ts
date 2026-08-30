import { Lesson } from '@/types/lesson';

export const lessonML08_OOP_BASICS: Lesson = {
  id: "ml08-oop-basics",
  title: "ML08. Lập Trình Hướng Đối Tượng: Class & Object",
  shortDescription: "Thiết kế lớp Hero và khởi tạo nhân vật trong JS, Python và C++",
  category: "ml-oop-basics",
  course: 'multi-lang',
  track: "ml-data-oop",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "medium",
  xpReward: 80,
  order: 8,
  week: 8,
  durationMinutes: 60,
  
  story: "Lập trình hướng đối tượng (OOP) mô hình hóa thế giới thực thành các Lớp (Class) và Đối tượng (Object).",

  taskInstructions: [
  "Tạo lớp `Hero` có 2 thuộc tính: `name` và `hp`.",
  "Tạo phương thức `getInfo()` trả về hoặc in ra chuỗi dạng: `\"{name} HP: {hp}\"`.",
  "Khởi tạo đối tượng `hero` với tên `\"Arthur\"`, `hp = 100` và gọi `getInfo()`."
],

  hints: {
    level1: "Class với constructor khởi tạo name và hp.",
    level2: "JS: class Hero { constructor(name, hp) { this.name = name; this.hp = hp; } getInfo() { return `${this.name} HP: ${this.hp}`; } }",
    solution: "class Hero {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n  getInfo() {\n    return `${this.name} HP: ${this.hp}`;\n  }\n}\n\nconst hero = new Hero(\"Arthur\", 100);\nconsole.log(hero.getInfo());"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML08: Lập Trình Hướng Đối Tượng: Class & Object</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "// Định nghĩa class Hero\n\n\n// Khởi tạo hero(\"Arthur\", 100) và in getInfo()\n",
  solutionJsCode: "class Hero {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n  getInfo() {\n    return `${this.name} HP: ${this.hp}`;\n  }\n}\n\nconst hero = new Hero(\"Arthur\", 100);\nconsole.log(hero.getInfo());",

  initialPyCode: "# Định nghĩa class Hero\n\n\n# Khởi tạo hero(\"Arthur\", 100) và in get_info()\n",
  solutionPyCode: "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n    def get_info(self):\n        return f\"{self.name} HP: {self.hp}\"\n\nhero = Hero(\"Arthur\", 100)\nprint(hero.get_info())",

  initialCppCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Hero {\npublic:\n    string name;\n    int hp;\n    Hero(string n, int h) {\n        name = n;\n        hp = h;\n    }\n    string getInfo() {\n        return name + \" HP: \" + to_string(hp);\n    }\n};\n\nint main() {\n    Hero hero(\"Arthur\", 100);\n    cout << hero.getInfo() << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Hero {\npublic:\n    string name;\n    int hp;\n    Hero(string n, int h) {\n        name = n;\n        hp = h;\n    }\n    string getInfo() {\n        return name + \" HP: \" + to_string(hp);\n    }\n};\n\nint main() {\n    Hero hero(\"Arthur\", 100);\n    cout << hero.getInfo() << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml08_hero",
      description: "Đối tượng Hero được tạo thành công với thông tin \"Arthur HP: 100\"",
      tester: (doc, win, context) => {
        const expected = "arthur hp: 100";
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
