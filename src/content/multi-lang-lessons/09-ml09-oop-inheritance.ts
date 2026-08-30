import { Lesson } from '@/types/lesson';

export const lessonML09: Lesson = {
  id: "ml09-oop-inheritance",
  title: "ML09. OOP Nâng Cao — Kế Thừa & Đa Hình (Inheritance & Polymorphism)",
  shortDescription: "Kế thừa thuộc tính từ lớp cha và ghi đè phương thức (Override) trong 3 ngôn ngữ",
  category: "ml-oop-inheritance",
  course: 'multi-lang',
  track: "ml-data-oop",
  difficulty: "hard",
  xpReward: 75,
  order: 9,
  week: 9,
  durationMinutes: 60,
  
  story: "**Kế thừa (Inheritance)** cho phép một lớp con kế thừa toàn bộ thuộc tính và phương thức từ lớp cha mà không cần viết lại mã.\n\n### So sánh Kế thừa & Đa hình:\n\n#### 1. JavaScript (`extends` & `super`)\n```javascript\nclass Animal {\n  speak() { return \"Âm thanh động vật\"; }\n}\n\nclass Dog extends Animal {\n  speak() { return \"Gâu gâu!\"; } // Ghi đè phương thức (Override)\n}\n```\n\n#### 2. Python (`class Con(Cha):`)\n```python\nclass Animal:\n    def speak(self):\n        return \"Âm thanh động vật\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Gâu gâu!\"\n```\n\n#### 3. C++ (`class Con : public Cha`)\n```cpp\nclass Animal {\npublic:\n    virtual string speak() { return \"Âm thanh động vật\"; }\n};\n\nclass Dog : public Animal {\npublic:\n    string speak() override { return \"Gâu gâu!\"; }\n};\n```\n",

  taskInstructions: [
  "Tạo class cha `Vehicle` có phương thức `getType() { return \"Phương tiện chung\"; }`.",
  "Tạo class con `Car extends Vehicle`.",
  "Trong `Car`, ghi đè phương thức `getType() { return \"Ô tô bốn bánh\"; }`.",
  "Khởi tạo `const myCar = new Car();`.",
  "In ra console kết quả của `myCar.getType()`."
],

  hints: {
    level1: "Dùng cú pháp class Car extends Vehicle { getType() { return \"Ô tô bốn bánh\"; } }",
    level2: "class Vehicle {\n  getType() { return \"Phương tiện chung\"; }\n}\nclass Car extends Vehicle {\n  getType() { return \"Ô tô bốn bánh\"; }\n}\nconst myCar = new Car();\nconsole.log(myCar.getType());",
    solution: "class Vehicle {\n  getType() {\n    return \"Phương tiện chung\";\n  }\n}\n\nclass Car extends Vehicle {\n  getType() {\n    return \"Ô tô bốn bánh\";\n  }\n}\n\nconst myCar = new Car();\nconsole.log(myCar.getType());"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🧬 MODULE 09: KẾ THỪA & ĐA HÌNH</div>\n  <h2 class=\"ml-title\">Kế Thừa Lớp Cha Sang Lớp Con</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>class Dog extends Animal {}</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>class Dog(Animal):</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>class Dog : public Animal {}</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #a855f7; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #d8b4fe; background: rgba(168, 85, 247, 0.15); border: 1px solid #a855f7; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML09: Kế thừa và ghi đè phương thức\n// 1. Tạo class Vehicle\n\n\n// 2. Tạo class Car kế thừa Vehicle\n\n\n// 3. Khởi tạo myCar và in myCar.getType()\n",

  solutionJsCode: "class Vehicle {\n  getType() {\n    return \"Phương tiện chung\";\n  }\n}\n\nclass Car extends Vehicle {\n  getType() {\n    return \"Ô tô bốn bánh\";\n  }\n}\n\nconst myCar = new Car();\nconsole.log(myCar.getType());",

  tests: [
    {
      id: "ml09_car_type",
      description: "Phương thức getType() của Car trả về \"Ô tô bốn bánh\"",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).includes('Ô tô bốn bánh')));
      }
    }
  ]
};
