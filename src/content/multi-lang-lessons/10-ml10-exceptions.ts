import { Lesson } from '@/types/lesson';

export const lessonML10: Lesson = {
  id: "ml10-exceptions",
  title: "ML10. Xử Lý Lỗi & Bẫy Ngoại Lệ (Exception Handling)",
  shortDescription: "Bảo vệ chương trình không bị sập (crash) với khối try-catch và try-except",
  category: "ml-exceptions",
  course: 'multi-lang',
  track: "ml-data-oop",
  difficulty: "hard",
  xpReward: 75,
  order: 10,
  week: 10,
  durationMinutes: 60,
  
  story: "Trong lập trình thực tế, lỗi có thể xảy ra bất cứ lúc nào: chia cho số 0, đọc file không tồn tại, hoặc mất kết nối mạng.\n\nKhối **Try-Catch / Try-Except** giúp bẫy lỗi an toàn để chương trình tiếp tục hoạt động mượt mà!\n\n### So sánh cơ chế Xử lý Ngoại lệ:\n\n#### 1. JavaScript (`try...catch...finally`)\n```javascript\ntry {\n  let result = JSON.parse(\"chuỗi lỗi không phải json\");\n} catch (error) {\n  console.error(\"Bắt được lỗi:\", error.message);\n} finally {\n  console.log(\"Luôn luôn chạy khối này!\");\n}\n```\n\n#### 2. Python (`try...except...finally`)\n```python\ntry:\n    num = 10 / 0  # Lỗi ZeroDivisionError\nexcept ZeroDivisionError as e:\n    print(f\"Bắt được lỗi chia cho 0: {e}\")\nfinally:\n    print(\"Hoàn tất tiến trình.\")\n```\n\n#### 3. C++ (`try...catch`)\n```cpp\ntry {\n    throw runtime_error(\"Lỗi kết nối máy chủ!\");\n} catch (const exception& e) {\n    cout << \"Bắt được lỗi: \" << e.what() << endl;\n}\n```\n",

  taskInstructions: [
  "Viết hàm `function safeDivide(a, b)` an toàn.",
  "Nếu `b === 0`, ném ngoại lệ bằng `throw new Error(\"Không thể chia cho 0\");`.",
  "Nếu không, trả về `a / b;`.",
  "Bọc lệnh gọi `safeDivide(10, 0)` trong khối `try...catch(err)`.",
  "Trong khối catch, in `err.message` ra console."
],

  hints: {
    level1: "Dùng if (b === 0) throw new Error(\"Không thể chia cho 0\"); và bọc trong try { safeDivide(10, 0); } catch(err) { console.log(err.message); }",
    level2: "function safeDivide(a, b) {\n  if (b === 0) {\n    throw new Error(\"Không thể chia cho 0\");\n  }\n  return a / b;\n}\ntry {\n  safeDivide(10, 0);\n} catch (err) {\n  console.log(err.message);\n}",
    solution: "function safeDivide(a, b) {\n  if (b === 0) {\n    throw new Error(\"Không thể chia cho 0\");\n  }\n  return a / b;\n}\n\ntry {\n  safeDivide(10, 0);\n} catch (err) {\n  console.log(err.message);\n}"
  },

  htmlContent: "\n<div class=\"ml-card\">\n  <div class=\"ml-badge\">🛡️ MODULE 10: XỬ LÝ LỖI & NGOẠI LỆ</div>\n  <h2 class=\"ml-title\">Bẫy Lỗi An Toàn (Exception Handling)</h2>\n  <div class=\"lang-grid\">\n    <div class=\"lang-box js\">\n      <div class=\"lang-tag\">JavaScript</div>\n      <div class=\"code-snippet\"><code>try { ... }<br>catch (err) { ... }</code></div>\n    </div>\n    <div class=\"lang-box py\">\n      <div class=\"lang-tag\">Python</div>\n      <div class=\"code-snippet\"><code>try:<br>&nbsp;&nbsp;...<br>except Exception:</code></div>\n    </div>\n    <div class=\"lang-box cpp\">\n      <div class=\"lang-tag\">C++</div>\n      <div class=\"code-snippet\"><code>try { ... }<br>catch (exception& e)</code></div>\n    </div>\n  </div>\n</div>",

  cssContent: "\n.ml-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #ef4444; border-radius: 20px; padding: 20px; color: white; text-align: center; }\n.ml-badge { display: inline-block; font-size: 11px; font-weight: 800; color: #fca5a5; background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px; }\n.ml-title { font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #f8fafc; }\n.lang-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.lang-box { background: rgba(255, 255, 255, 0.04); border-radius: 12px; padding: 12px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.08); }\n.lang-box.js { border-top: 3px solid #f59e0b; }\n.lang-box.py { border-top: 3px solid #10b981; }\n.lang-box.cpp { border-top: 3px solid #06b6d4; }\n.lang-tag { font-size: 11px; font-weight: bold; margin-bottom: 6px; color: #94a3b8; }\n.code-snippet code { font-family: monospace; font-size: 11px; color: #e2e8f0; }",

  initialJsCode: "// ML10: Bắt ngoại lệ chia cho 0\n// 1. Viết hàm safeDivide(a, b)\n\n\n// 2. Bọc trong khối try...catch và in thông báo lỗi\n",

  solutionJsCode: "function safeDivide(a, b) {\n  if (b === 0) {\n    throw new Error(\"Không thể chia cho 0\");\n  }\n  return a / b;\n}\n\ntry {\n  safeDivide(10, 0);\n} catch (err) {\n  console.log(err.message);\n}",

  tests: [
    {
      id: "ml10_catch_error",
      description: "Bắt được thông báo lỗi \"Không thể chia cho 0\"",
      tester: (doc, win) => {
        const logs = win.__capturedLogs || [];
        return logs.some((l) => l.args && l.args.some((a) => String(a).includes('Không thể chia cho 0')));
      }
    }
  ]
};
