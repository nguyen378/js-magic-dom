import { Lesson } from '@/types/lesson';

export const lessonML04_FUNCTIONS: Lesson = {
  id: "ml04-functions",
  title: "ML04. Hàm & Tái Sử Dụng Mã Nguồn (JS • Python • C++)",
  shortDescription: "Xây dựng hàm tính toán sức mạnh chiến đấu (Combat Power)",
  category: "ml-functions",
  course: 'multi-lang',
  track: "ml-control",
  editorLanguage: 'javascript',
  availableLanguages: ['javascript', 'python', 'cpp'],
  difficulty: "medium",
  xpReward: 70,
  order: 4,
  week: 4,
  durationMinutes: 60,
  
  story: "Hàm (Function) là khối lệnh đóng gói có thể tái sử dụng nhiều lần với các tham số đầu vào khác nhau.\n\n* **JS**: `function calcPower(atk, def) { return atk * 2 + def; }`\n* **Python**: `def calc_power(atk, def): return atk * 2 + def`\n* **C++**: `int calcPower(int atk, int def) { return atk * 2 + def; }`\n",

  taskInstructions: [
  "Định nghĩa hàm `calcPower` nhận 2 tham số: `atk` và `def`.",
  "Hàm trả về giá trị: `atk * 2 + def`.",
  "Gọi hàm với `atk = 10, def = 5` và in kết quả ra Console (kết quả: 25)."
],

  hints: {
    level1: "10 * 2 + 5 = 25.",
    level2: "JS: function calcPower(atk, def) { return atk * 2 + def; } console.log(calcPower(10, 5));",
    solution: "function calcPower(atk, def) {\n  return atk * 2 + def;\n}\n\nconst power = calcPower(10, 5);\nconsole.log(\"Power:\", power);"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🌐 ML04: Hàm & Tái Sử Dụng Mã Nguồn (JS • Python • C++)</div>\n  <h2 class=\"ml-title\">Chạy Trực Tiếp Đa Ngôn Ngữ (JS • Python • C++)</h2>\n  <div class=\"status-box\">💡 Chọn tab ngôn ngữ bạn muốn học (JavaScript, Python hoặc C++), viết mã và nhấn \"Chạy thử\" để xem output Console!</div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; color: white; text-align: center; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3); }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #60a5fa; background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 16px; font-weight: 800; margin-bottom: 14px; color: #f8fafc; }\n.status-box { background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 10px; font-size: 12px; color: #93c5fd; }",

  initialJsCode: "// Định nghĩa hàm calcPower(atk, def)\n\n\n// Gọi hàm với (10, 5) và in kết quả\n",
  solutionJsCode: "function calcPower(atk, def) {\n  return atk * 2 + def;\n}\n\nconst power = calcPower(10, 5);\nconsole.log(\"Power:\", power);",

  initialPyCode: "# Định nghĩa hàm calc_power(atk, def)\n\n\n# Gọi hàm với (10, 5) và in kết quả\n",
  solutionPyCode: "def calc_power(atk, def):\n    return atk * 2 + def\n\npower = calc_power(10, 5)\nprint(\"Power:\", power)",

  initialCppCode: "#include <iostream>\nusing namespace std;\n\nint calcPower(int atk, int def) {\n    return atk * 2 + def;\n}\n\nint main() {\n    int power = calcPower(10, 5);\n    cout << \"Power: \" << power << endl;\n    return 0;\n}",
  solutionCppCode: "#include <iostream>\nusing namespace std;\n\nint calcPower(int atk, int def) {\n    return atk * 2 + def;\n}\n\nint main() {\n    int power = calcPower(10, 5);\n    cout << \"Power: \" << power << endl;\n    return 0;\n}",

  tests: [
    {
      id: "ml04_power",
      description: "Hàm tính chính xác sức mạnh Power = 25",
      tester: (doc, win, context) => {
        const expected = "25";
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
