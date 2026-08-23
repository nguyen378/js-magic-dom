import { Lesson } from '@/types/lesson';

export const lessonF01: Lesson = {
  id: 'f01-variables',
  title: 'F01. Hộp Chứa Phép Thuật (Biến Số)',
  shortDescription: 'Làm quen với khai báo biến let và hằng số const trong JavaScript',
  category: 'variable',
  track: 'foundation',
  difficulty: 'easy',
  xpReward: 50,
  order: 1,
  
  story: `Chào mừng bạn đến với **Lớp Học Pháp Thuật JavaScript Căn Bản**! 🏰

Hãy tưởng tượng một **Biến số (Variable)** giống như một chiếc hộp ma thuật có dán nhãn tên bên ngoài. Bạn có thể cất giữ dữ liệu (chữ, số) vào trong hộp và gọi tên chiếc hộp để lấy dữ liệu ra bất kỳ lúc nào!

Trong JavaScript hiện đại, ta có 2 câu thần chú tạo hộp:
* **\`const\` (Constant - Hằng số)**: Dùng cho dữ liệu **cố định không bao giờ thay đổi** (như Tên nhân vật, Ngày sinh).
* **\`let\`**: Dùng cho dữ liệu **có thể thay đổi linh hoạt** (như Điểm số, Số máu HP, Kim cương).

\`\`\`javascript
const heroName = "Arthur"; // Hằng số cố định
let diamonds = 10;         // Biến số ban đầu là 10
diamonds = diamonds + 5;   // Nhặt thêm 5 viên, giờ diamonds là 15!
\`\`\`
`,

  taskInstructions: [
    'Khai báo hằng số `const heroName = "Arthur";`.',
    'Khai báo biến số `let diamonds = 10;`.',
    'Tăng số lượng kim cương thêm 5: `diamonds = diamonds + 5;` (hoặc `diamonds += 5;`).',
    'In lần lượt `heroName` và `diamonds` ra bảng điều khiển Console bằng `console.log()`.'
  ],

  hints: {
    level1: 'Dùng `const` cho `heroName` và `let` cho `diamonds`.',
    level2: `const heroName = "Arthur";
let diamonds = 10;
diamonds = diamonds + 5;
console.log(heroName);
console.log(diamonds);`,
    solution: `const heroName = "Arthur";
let diamonds = 10;
diamonds = diamonds + 5;

console.log(heroName);
console.log(diamonds);`
  },

  htmlContent: `
<div class="chest-container">
  <div class="chest-badge">📦 RƯƠNG KHO BÁU PHÉP THUẬT</div>
  <div class="chest-card">
    <div class="hero-box">
      <span class="label">Tên Dũng Sĩ:</span>
      <span id="hero-display" class="val">Arthur</span>
    </div>
    <div class="gem-box">
      <span class="label">Kim Cương:</span>
      <span id="diamond-display" class="val val-gem">💎 15</span>
    </div>
  </div>
  <p class="chest-tip">Mẹo: Kết quả các dòng lệnh <code>console.log</code> sẽ hiện ở Console bên dưới!</p>
</div>`,

  cssContent: `
.chest-container {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #6366f1;
  box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.3);
}
.chest-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  color: #a5b4fc;
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid #6366f1;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
}
.chest-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 18px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 14px;
}
.label {
  display: block;
  font-size: 11px;
  color: #94a3b8;
  font-weight: bold;
  margin-bottom: 4px;
}
.val {
  font-size: 18px;
  font-weight: 800;
  color: #f8fafc;
}
.val-gem {
  color: #38bdf8;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}
.chest-tip {
  font-size: 12px;
  color: #cbd5e1;
}`,

  initialJsCode: `// Nhiệm vụ: Khai báo heroName, diamonds, tăng 5 kim cương và console.log!

// Bước 1: Khai báo const heroName = "Arthur";


// Bước 2: Khai báo let diamonds = 10;


// Bước 3: Tăng diamonds thêm 5


// Bước 4: In ra console bằng console.log()

`,

  solutionJsCode: `const heroName = "Arthur";
let diamonds = 10;
diamonds = diamonds + 5;

console.log(heroName);
console.log(diamonds);`,

  tests: [
    {
      id: 'logged_hero_name',
      description: 'Lệnh console.log đã in đúng tên dũng sĩ "Arthur"',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => 
          l.args && l.args.some((arg: any) => String(arg).toLowerCase().includes('arthur'))
        );
      }
    },
    {
      id: 'logged_diamonds_count',
      description: 'Lệnh console.log đã in đúng số kim cương sau khi tăng là 15',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => 
          l.args && l.args.some((arg: any) => Number(arg) === 15 || String(arg).includes('15'))
        );
      }
    }
  ]
};
