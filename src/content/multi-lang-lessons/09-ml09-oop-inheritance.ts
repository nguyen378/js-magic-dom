import { Lesson } from '@/types/lesson';

export const lessonML09_OOP_INHERITANCE: Lesson = {
  id: "ml09-oop-inheritance",
  title: "ML09. OOP Nâng Cao: Kế Thừa & Đa Hình",
  shortDescription: "Xây dựng lớp Mage kế thừa từ Hero với thuộc tính năng lượng MP",
  category: "ml-oop-inheritance",
  course: 'multi-lang',
  track: "ml-data-oop",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "hard",
  xpReward: 80,
  order: 9,
  week: 9,
  durationMinutes: 60,
  
  story: "Kế thừa (Inheritance) cho phép lớp con tái sử dụng toàn bộ thuộc tính và phương thức từ lớp cha.",

  taskInstructions: [
  "Tạo lớp `Hero` với `name` và `hp`.",
  "Tạo lớp `Mage` kế thừa `Hero` và bổ sung thêm thuộc tính `mp`.",
  "Khởi tạo pháp sư `\"Merlin\"`, `hp = 80`, `mp = 200` và in ra `\"{name} HP: {hp} MP: {mp}\"`."
],

  hints: {
    level1: "Sử dụng extends (JS/C++) hoặc Class(Parent) (Python).",
    level2: "JS: class Mage extends Hero { constructor(name, hp, mp) { super(name, hp); this.mp = mp; } }",
    solution: "class Hero {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n}\n\nclass Mage extends Hero {\n  constructor(name, hp, mp) {\n    super(name, hp);\n    this.mp = mp;\n  }\n  getInfo() {\n    return `${this.name} HP: ${this.hp} MP: ${this.mp}`;\n  }\n}\n\nconst mage = new Mage(\"Merlin\", 80, 200);\nconsole.log(mage.getInfo());"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML09: OOP Nâng Cao: Kế Thừa & Đa Hình</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "// Định nghĩa class Hero và class Mage extends Hero\n",
  solutionJsCode: "class Hero {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n}\n\nclass Mage extends Hero {\n  constructor(name, hp, mp) {\n    super(name, hp);\n    this.mp = mp;\n  }\n  getInfo() {\n    return `${this.name} HP: ${this.hp} MP: ${this.mp}`;\n  }\n}\n\nconst mage = new Mage(\"Merlin\", 80, 200);\nconsole.log(mage.getInfo());",

  initialPyCode: "# Định nghĩa class Hero và class Mage(Hero)\n",
  solutionPyCode: "class Hero:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\nclass Mage(Hero):\n    def __init__(self, name, hp, mp):\n        super().__init__(name, hp)\n        self.mp = mp\n    def get_info(self):\n        return f\"{self.name} HP: {self.hp} MP: {self.mp}\"\n\nmage = Mage(\"Merlin\", 80, 200)\nprint(mage.get_info())",

  initialCppCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Hero {\npublic:\n    string name;\n    int hp;\n    Hero(string n, int h) : name(n), hp(h) {}\n};\n\nclass Mage : public Hero {\npublic:\n    int mp;\n    Mage(string n, int h, int m) : Hero(n, h), mp(m) {}\n    string getInfo() {\n        return name + \" HP: \" + to_string(hp) + \" MP: \" + to_string(mp);\n    }\n};\n\nint main() {\n    Mage mage(\"Merlin\", 80, 200);\n    cout << mage.getInfo() << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Hero {\npublic:\n    string name;\n    int hp;\n    Hero(string n, int h) : name(n), hp(h) {}\n};\n\nclass Mage : public Hero {\npublic:\n    int mp;\n    Mage(string n, int h, int m) : Hero(n, h), mp(m) {}\n    string getInfo() {\n        return name + \" HP: \" + to_string(hp) + \" MP: \" + to_string(mp);\n    }\n};\n\nint main() {\n    Mage mage(\"Merlin\", 80, 200);\n    cout << mage.getInfo() << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml09_mage",
      description: "Lớp Mage khởi tạo đúng Merlin với HP 80 và MP 200",
      tester: (doc, win, context) => {
        const expected = "merlin hp: 80 mp: 200";
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
