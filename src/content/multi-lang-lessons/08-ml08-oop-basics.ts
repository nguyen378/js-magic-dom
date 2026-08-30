import { Lesson } from '@/types/lesson';

export const lessonML08: Lesson = {
  id: "ml08-oop-basics",
  title: "ML08. Lập Trình Hướng Đối Tượng (OOP 1) — Lớp & Đối Tượng",
  shortDescription: "Tìm hiểu khái niệm Class, Constructor, Thuộc tính và Phương thức trong OOP",
  category: "ml-oop-basics",
  course: 'multi-lang',
  track: "ml-data-oop",
  difficulty: "hard",
  xpReward: 75,
  order: 8,
  week: 8,
  durationMinutes: 60,
  
  story: "**Lập trình Hướng Đối Tượng (OOP - Object-Oriented Programming)** là mô hình thiết kế phần mềm xoay quanh các \"đối tượng\" thực tế.\n\n* **Lớp (Class)**: Giống như một **bản thiết kế ngôi nhà**.\n* **Đối tượng (Object / Instance)**: Ngôi nhà thực tế được xây dựng từ bản thiết kế đó.\n\n### So sánh cú pháp Class:\n\n#### 1. JavaScript (ES6 `class`)\n```javascript\nclass Player {\n  constructor(name, hp) {\n    this.name = name;\n    this.hp = hp;\n  }\n\n  takeDamage(dmg) {\n    this.hp -= dmg;\n  }\n}\n\nconst hero = new Player(\"Arthur\", 100);\nhero.takeDamage(20);\nconsole.log(hero.name, \"HP còn:\", hero.hp); // 80\n```\n\n#### 2. Python (`class` & `__init__`)\n```python\nclass Player:\n    def __init__(self, name, hp):\n        self.name = name\n        self.hp = hp\n\n    def take_damage(self, dmg):\n        self.hp -= dmg\n\nhero = Player(\"Arthur\", 100)\nhero.take_damage(20)\nprint(f\"{hero.name} HP còn: {hero.hp}\")\n```\n\n#### 3. C++ (`class` với `public:`)\n```cpp\nclass Player {\npublic:\n    string name;\n    int hp;\n\n    Player(string n, int h) : name(n), hp(h) {}\n\n    void takeDamage(int dmg) {\n        hp -= dmg;\n    }\n};\n\nint main() {\n    Player hero(\"Arthur\", 100);\n    hero.takeDamage(20);\n    cout << hero.name << \" HP: \" << hero.hp << endl;\n    return 0;\n}\n```\n",

  taskInstructions: [
  "Tạo class `Hero` với `constructor(name, power)`.",
  "Gán `this.name = name;` và `this.power = power;`.",
  "Tạo phương thức `boostPower(amount)` để tăng `this.power += amount;`.",
  "Khởi tạo đối tượng `const knight = new Hero(\"Lancelot\", 50);`.",
  "Gọi `knight.boostPower(30);` và in `knight.power` (Kết quả là 80) ra console."
],

  hints: {
    level1: "Dùng cú pháp class Hero { constructor(name, power) { ... } boostPower(amount) { ... } }",
    level2: "class Hero {\n  constructor(name, power) {\n    this.name = name;\n    this.power = power;\n  }\n  boostPower(amount) {\n    this.power += amount;\n  }\n}\nconst knight = new Hero(\"Lancelot\", 50);\nknight.boostPower(30);\nconsole.log(knight.power);",
    solution: "class Hero {\n  constructor(name, power) {\n    this.name = name;\n    this.power = power;\n  }\n\n  boostPower(amount) {\n    this.power += amount;\n  }\n}\n\nconst knight = new Hero(\"Lancelot\", 50);\nknight.boostPower(30);\n\nconsole.log(knight.power);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🏛️ MODULE 08: HƯỚNG ĐỐI TƯỢNG OOP</div>\n  <h2 class=\"ml-title\">Thiết Kế Lớp Class & Đối Tượng</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>class Player {<br>&nbsp;&nbsp;constructor() {}<br>}</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>class Player:<br>&nbsp;&nbsp;def __init__(self):</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>class Player {<br>public:<br>&nbsp;&nbsp;Player() {}<br>};</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #6366f1; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #a5b4fc; background: rgba(99, 102, 241, 0.15); border: 1px solid #6366f1; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML08: Tạo class Hero và phương thức boostPower\n// 1. Định nghĩa class Hero\n\n\n// 2. Khởi tạo knight = new Hero(\"Lancelot\", 50);\n\n\n// 3. Tăng sức mạnh và in ra console\n",

  solutionJsCode: "class Hero {\n  constructor(name, power) {\n    this.name = name;\n    this.power = power;\n  }\n\n  boostPower(amount) {\n    this.power += amount;\n  }\n}\n\nconst knight = new Hero(\"Lancelot\", 50);\nknight.boostPower(30);\n\nconsole.log(knight.power);",

  tests: [
    {
      id: "ml08_power_val",
      description: "Sức mạnh sau khi boost là 80",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 80 || String(a).includes('80')));
      }
    }
  ]
};
