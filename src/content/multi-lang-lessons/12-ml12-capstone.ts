import { Lesson } from '@/types/lesson';

export const lessonML12_CAPSTONE: Lesson = {
  id: "ml12-capstone",
  title: "ML12. Đồ Án Tốt Nghiệp Capstone: Quản Lý Nhiệm Vụ & Điểm Thưởng",
  shortDescription: "Xây dựng hoàn chỉnh hệ thống Task Manager & RPG Quest System",
  category: "ml-capstone",
  course: 'multi-lang',
  track: "ml-capstone",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "hard",
  xpReward: 100,
  order: 12,
  week: 12,
  durationMinutes: 60,
  
  story: "Chúc mừng bạn đã đến với **Đồ Án Tốt Nghiệp Capstone Đa Ngôn Ngữ**! 👑\n\nHãy tổng hợp toàn bộ kiến thức: Biến, Vòng lặp, Mảng/List/Vector, Hàm và Hướng đối tượng OOP để tạo nên một hệ thống Quản lý Nhiệm vụ Quest Manager hoàn chỉnh.",

  taskInstructions: [
  "Tạo lớp `TaskManager` với danh sách nhiệm vụ `tasks` rỗng.",
  "Phương thức `addTask(title, xp)` thêm nhiệm vụ mới.",
  "Phương thức `getTotalXP()` tính tổng điểm thưởng của tất cả nhiệm vụ.",
  "Thêm 2 nhiệm vụ: `(\"Defeat Dragon\", 100)` và `(\"Save Princess\", 200)`.",
  "In ra `\"Total Quest XP: 300\"`."
],

  hints: {
    level1: "Tổng điểm là 100 + 200 = 300.",
    level2: "JS: manager.addTask(\"Defeat Dragon\", 100); manager.addTask(\"Save Princess\", 200); console.log(\"Total Quest XP:\", manager.getTotalXP());",
    solution: "class TaskManager {\n  constructor() {\n    this.tasks = [];\n  }\n  addTask(title, xp) {\n    this.tasks.push({ title, xp });\n  }\n  getTotalXP() {\n    return this.tasks.reduce((sum, t) => sum + t.xp, 0);\n  }\n}\n\nconst manager = new TaskManager();\nmanager.addTask(\"Defeat Dragon\", 100);\nmanager.addTask(\"Save Princess\", 200);\nconsole.log(\"Total Quest XP:\", manager.getTotalXP());"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML12: Đồ Án Tốt Nghiệp Capstone: Quản Lý Nhiệm Vụ & Điểm Thưởng</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "// Xây dựng class TaskManager\n\n\n// Khởi tạo manager, thêm 2 quest và in Total Quest XP\n",
  solutionJsCode: "class TaskManager {\n  constructor() {\n    this.tasks = [];\n  }\n  addTask(title, xp) {\n    this.tasks.push({ title, xp });\n  }\n  getTotalXP() {\n    return this.tasks.reduce((sum, t) => sum + t.xp, 0);\n  }\n}\n\nconst manager = new TaskManager();\nmanager.addTask(\"Defeat Dragon\", 100);\nmanager.addTask(\"Save Princess\", 200);\nconsole.log(\"Total Quest XP:\", manager.getTotalXP());",

  initialPyCode: "# Xây dựng class TaskManager\n\n\n# Khởi tạo manager, thêm 2 quest và in Total Quest XP\n",
  solutionPyCode: "class TaskManager:\n    def __init__(self):\n        self.tasks = []\n    def add_task(self, title, xp):\n        self.tasks.append({\"title\": title, \"xp\": xp})\n    def get_total_xp(self):\n        return sum(t[\"xp\"] for t in self.tasks)\n\nmanager = TaskManager()\nmanager.add_task(\"Defeat Dragon\", 100)\nmanager.add_task(\"Save Princess\", 200)\nprint(\"Total Quest XP:\", manager.get_total_xp())",

  initialCppCode: "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstruct Task {\n    string title;\n    int xp;\n};\n\nclass TaskManager {\npublic:\n    vector<Task> tasks;\n    void addTask(string title, int xp) {\n        tasks.push_back({title, xp});\n    }\n    int getTotalXP() {\n        int sum = 0;\n        for (const auto& t : tasks) sum += t.xp;\n        return sum;\n    }\n};\n\nint main() {\n    TaskManager manager;\n    manager.addTask(\"Defeat Dragon\", 100);\n    manager.addTask(\"Save Princess\", 200);\n    cout << \"Total Quest XP: \" << manager.getTotalXP() << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstruct Task {\n    string title;\n    int xp;\n};\n\nclass TaskManager {\npublic:\n    vector<Task> tasks;\n    void addTask(string title, int xp) {\n        tasks.push_back({title, xp});\n    }\n    int getTotalXP() {\n        int sum = 0;\n        for (const auto& t : tasks) sum += t.xp;\n        return sum;\n    }\n};\n\nint main() {\n    TaskManager manager;\n    manager.addTask(\"Defeat Dragon\", 100);\n    manager.addTask(\"Save Princess\", 200);\n    cout << \"Total Quest XP: \" << manager.getTotalXP() << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml12_capstone",
      description: "Hệ thống tính chính xác tổng điểm thưởng \"Total Quest XP: 300\"",
      tester: (doc, win, context) => {
        const expected = "total quest xp: 300";
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
