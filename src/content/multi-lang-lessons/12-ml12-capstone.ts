import { Lesson } from '@/types/lesson';

export const lessonML12: Lesson = {
  id: "ml12-capstone",
  title: "ML12. Đồ Án Cuối Khóa: Ứng Dụng Quản Lý Task & Điểm Số (Polyglot Capstone)",
  shortDescription: "Áp dụng toàn diện kiến thức Biến, Vòng lặp, Hàm, Mảng và Class OOP để hoàn thiện đồ án Capstone",
  category: "ml-capstone",
  course: 'multi-lang',
  track: "ml-capstone",
  difficulty: "hard",
  xpReward: 100,
  order: 12,
  week: 12,
  durationMinutes: 60,
  
  story: "🎉 **CHÚC MỪNG BẠN ĐÃ ĐẾN VỚI ĐỒ ÁN TỐT NGHIỆP CAPSTONE!** 👑\n\nTrong đồ án này, bạn sẽ tổng hợp toàn bộ các kỹ năng lập trình cốt lõi đã học:\n1. **Class OOP**: Thiết kế lớp `TaskManager` quản lý danh sách công việc.\n2. **Mảng & Tập hợp**: Thêm và duyệt danh sách task.\n3. **Điều kiện & Vòng lặp**: Đếm số lượng task đã hoàn thành và tính điểm thưởng.\n4. **Hàm & Xử lý Chuỗi**: Định dạng báo cáo tiến độ.\n\n### Cấu trúc lớp `TaskManager`:\n```javascript\nclass TaskManager {\n  constructor() {\n    this.tasks = [];\n  }\n\n  addTask(title, xp) {\n    this.tasks.push({ title, xp, done: false });\n  }\n\n  completeTask(index) {\n    if (this.tasks[index]) {\n      this.tasks[index].done = true;\n    }\n  }\n\n  getTotalXp() {\n    let sum = 0;\n    for (const t of this.tasks) {\n      if (t.done) sum += t.xp;\n    }\n    return sum;\n  }\n}\n```\n",

  taskInstructions: [
  "Khởi tạo class `TaskManager` với `this.tasks = [];`.",
  "Viết phương thức `addTask(title, xp)` để đẩy object `{ title, xp, done: false }` vào `this.tasks`.",
  "Viết phương thức `completeTask(index)` đổi `this.tasks[index].done = true;`.",
  "Viết phương thức `getTotalXp()` dùng vòng lặp tính tổng `xp` của các task có `done === true`.",
  "Tạo đối tượng `const app = new TaskManager();`.",
  "Thêm 2 task: `app.addTask(\"Học JS\", 50);` và `app.addTask(\"Học Python\", 60);`.",
  "Hoàn thành task đầu tiên `app.completeTask(0);`.",
  "In ra console kết quả `app.getTotalXp()` (Kết quả là 50)."
],

  hints: {
    level1: "Hoàn thành class TaskManager theo đúng hướng dẫn và gọi app.getTotalXp()",
    level2: "class TaskManager {\n  constructor() { this.tasks = []; }\n  addTask(title, xp) { this.tasks.push({ title, xp, done: false }); }\n  completeTask(index) { if (this.tasks[index]) this.tasks[index].done = true; }\n  getTotalXp() {\n    let sum = 0;\n    for (let t of this.tasks) { if (t.done) sum += t.xp; }\n    return sum;\n  }\n}\nconst app = new TaskManager();\napp.addTask(\"Học JS\", 50);\napp.addTask(\"Học Python\", 60);\napp.completeTask(0);\nconsole.log(app.getTotalXp());",
    solution: "class TaskManager {\n  constructor() {\n    this.tasks = [];\n  }\n\n  addTask(title, xp) {\n    this.tasks.push({ title, xp, done: false });\n  }\n\n  completeTask(index) {\n    if (this.tasks[index]) {\n      this.tasks[index].done = true;\n    }\n  }\n\n  getTotalXp() {\n    let sum = 0;\n    for (const t of this.tasks) {\n      if (t.done) {\n        sum += t.xp;\n      }\n    }\n    return sum;\n  }\n}\n\nconst app = new TaskManager();\napp.addTask(\"Học JS\", 50);\napp.addTask(\"Học Python\", 60);\napp.completeTask(0);\n\nconsole.log(app.getTotalXp());"
  },

  htmlContent: "\n<div class=\"ml-card capstone\">\n  <div class=\"ml-badge\">👑 ĐỒ ÁN TỐT NGHIỆP CAPSTONE</div>\n  <h2 class=\"ml-title\">Ứng Dụng Quản Lý Tiến Độ Đa Năng</h2>\n  <div class=\"capstone-preview\">\n    <div class=\"task-item done\">\n      <span>✅ Học JS (50 XP)</span>\n      <span class=\"status-tag\">Hoàn thành</span>\n    </div>\n    <div class=\"task-item\">\n      <span>⏳ Học Python (60 XP)</span>\n      <span class=\"status-tag\">Đang làm</span>\n    </div>\n  </div>\n  <div class=\"status-box\">🌟 Chúc mừng bạn đã chinh phục toàn bộ 12 Module Lập Trình Đa Ngôn Ngữ!</div>\n</div>",

  cssContent: "\n.ml-card.capstone { background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%); border: 2px solid #fbbf24; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 15px 30px -5px rgba(251, 191, 36, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #fde68a; background: rgba(251, 191, 36, 0.2); border: 1px solid #fbbf24; padding: 4px 14px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 18px; font-weight: 800; margin-bottom: 16px; color: #fef3c7; }\n.capstone-preview { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; text-align: left; }\n.task-item { background: rgba(255, 255, 255, 0.08); padding: 10px 14px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; }\n.task-item.done { border-left: 3px solid #10b981; }\n.status-tag { font-size: 10px; font-weight: bold; background: rgba(255, 255, 255, 0.15); padding: 2px 8px; border-radius: 9999px; }\n.status-box { background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.3); padding: 12px; border-radius: 12px; font-size: 12px; color: #fef08a; font-weight: bold; }",

  initialJsCode: "// ML12: Đồ án Capstone TaskManager\n// 1. Tạo class TaskManager\n\n\n// 2. Tạo instance app, thêm 2 task và completeTask(0)\n\n\n// 3. In app.getTotalXp() ra console\n",

  solutionJsCode: "class TaskManager {\n  constructor() {\n    this.tasks = [];\n  }\n\n  addTask(title, xp) {\n    this.tasks.push({ title, xp, done: false });\n  }\n\n  completeTask(index) {\n    if (this.tasks[index]) {\n      this.tasks[index].done = true;\n    }\n  }\n\n  getTotalXp() {\n    let sum = 0;\n    for (const t of this.tasks) {\n      if (t.done) {\n        sum += t.xp;\n      }\n    }\n    return sum;\n  }\n}\n\nconst app = new TaskManager();\napp.addTask(\"Học JS\", 50);\napp.addTask(\"Học Python\", 60);\napp.completeTask(0);\n\nconsole.log(app.getTotalXp());",

  tests: [
    {
      id: "ml12_capstone_xp",
      description: "Tổng điểm XP sau khi hoàn thành task 1 là 50",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => Number(a) === 50 || String(a).includes('50')));
      }
    }
  ]
};
