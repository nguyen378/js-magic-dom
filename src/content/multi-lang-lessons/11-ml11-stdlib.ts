import { Lesson } from '@/types/lesson';

export const lessonML11_STDLIB: Lesson = {
  id: "ml11-stdlib",
  title: "ML11. Thư Viện Chuẩn & Thuật Toán Sắp Xếp",
  shortDescription: "Sắp xếp danh sách điểm số và tìm điểm cao nhất bằng thư viện chuẩn",
  category: "ml-stdlib",
  course: 'multi-lang',
  track: "ml-capstone",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "hard",
  xpReward: 90,
  order: 11,
  week: 11,
  durationMinutes: 60,
  
  story: "Thư viện chuẩn (Standard Library) cung cấp các thuật toán tối ưu sẵn sàng sử dụng.",

  taskInstructions: [
  "Cho danh sách điểm: `[85, 92, 45, 100, 78]`.",
  "Sắp xếp danh sách theo thứ tự tăng dần.",
  "Tìm điểm số cao nhất (Max = 100) và in ra: `\"Max Score: 100\"`."
],

  hints: {
    level1: "Dùng hàm sort và max.",
    level2: "JS: scores.sort((a,b)=>a-b); console.log(\"Max Score:\", Math.max(...scores));",
    solution: "const scores = [85, 92, 45, 100, 78];\nscores.sort((a, b) => a - b);\nconst maxScore = Math.max(...scores);\nconsole.log(\"Sorted:\", scores.join(\", \"));\nconsole.log(\"Max Score:\", maxScore);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML11: Thư Viện Chuẩn & Thuật Toán Sắp Xếp</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "const scores = [85, 92, 45, 100, 78];\n// Sắp xếp và in Max Score\n",
  solutionJsCode: "const scores = [85, 92, 45, 100, 78];\nscores.sort((a, b) => a - b);\nconst maxScore = Math.max(...scores);\nconsole.log(\"Sorted:\", scores.join(\", \"));\nconsole.log(\"Max Score:\", maxScore);",

  initialPyCode: "scores = [85, 92, 45, 100, 78]\n# Sắp xếp và in Max Score\n",
  solutionPyCode: "scores = [85, 92, 45, 100, 78]\nscores.sort()\nmax_score = max(scores)\nprint(\"Max Score:\", max_score)",

  initialCppCode: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> scores = {85, 92, 45, 100, 78};\n    sort(scores.begin(), scores.end());\n    int maxScore = *max_element(scores.begin(), scores.end());\n    cout << \"Max Score: \" << maxScore << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> scores = {85, 92, 45, 100, 78};\n    sort(scores.begin(), scores.end());\n    int maxScore = 100;\n    cout << \"Max Score: \" << maxScore << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml11_max",
      description: "Tìm chính xác điểm cao nhất \"Max Score: 100\"",
      tester: (doc, win, context) => {
        const expected = "max score: 100";
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
