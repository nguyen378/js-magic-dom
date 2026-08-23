import { Lesson } from '@/types/lesson';

export const lessonF06: Lesson = {
  id: 'f06-loops',
  title: 'F06. Vòng Xoáy Lặp Lại (for & while)',
  shortDescription: 'Tự động hóa công việc lặp đi lặp lại với vòng lặp for và while',
  category: 'loop',
  track: 'foundation',
  difficulty: 'medium',
  xpReward: 70,
  order: 6,
  
  story: `Nếu bạn cần triệu hồi 100 chú Robot hoặc tính điểm cho 1000 người chơi, bạn sẽ không muốn ngồi gõ 1000 dòng code thủ công! 🔄

Đó là lúc **Vòng Lặp (Loops)** thể hiện sức mạnh tối thượng: Tự động lặp lại một khối lệnh nhiều lần theo ý muốn.

Cú pháp vòng lặp **\`for\`**:
\`\`\`javascript
// 1. Khởi tạo: i = 1
// 2. Điều kiện lặp: i <= 5
// 3. Bước nhảy: i++ (tăng i lên 1 sau mỗi lần)
for (let i = 1; i <= 5; i++) {
  console.log(\`Triệu hồi lần thứ \${i}\`);
}
\`\`\`

Hãy dùng vòng lặp \`for\` để tự động triệu hồi một tiểu đội 5 Chú Robot \`🤖\` nhé!
`,

  taskInstructions: [
    'Khai báo biến chuỗi rỗng: `let army = "";`.',
    'Dùng vòng lặp `for (let i = 1; i <= 5; i++)` chạy 5 lần.',
    'Bên trong vòng lặp: Nối thêm `"🤖 "` vào biến `army` (bằng lệnh `army += "🤖 ";`).',
    'Sau khi kết thúc vòng lặp: In biến `army` ra Console bằng `console.log(army)`.'
  ],

  hints: {
    level1: 'Dùng cú pháp `for (let i = 1; i <= 5; i++) { army += "🤖 "; }`.',
    level2: `let army = "";
for (let i = 1; i <= 5; i++) {
  army += "🤖 ";
}
console.log(army);`,
    solution: `let army = "";

for (let i = 1; i <= 5; i++) {
  army += "🤖 ";
}

console.log(army);`
  },

  htmlContent: `
<div class="barracks-card">
  <div class="barracks-header">
    <span>🏭 NHÀ MÁY CHẾ TẠO ROBOT TỰ ĐỘNG</span>
  </div>
  <div class="robot-line">
    <div class="bot">🤖</div>
    <div class="bot">🤖</div>
    <div class="bot">🤖</div>
    <div class="bot">🤖</div>
    <div class="bot">🤖</div>
  </div>
  <div class="barracks-status">Đã sản xuất xong: Tiểu đội 5 Robot chiến đấu</div>
</div>`,

  cssContent: `
.barracks-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 2px solid #38bdf8;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(56, 189, 248, 0.3);
}
.barracks-header {
  font-size: 11px;
  font-weight: 800;
  color: #7dd3fc;
  letter-spacing: 1px;
  margin-bottom: 18px;
}
.robot-line {
  display: flex;
  justify-content: center;
  gap: 10px;
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 14px;
}
.bot {
  font-size: 32px;
  animation: botBounce 1s infinite alternate ease-in-out;
}
.bot:nth-child(2) { animation-delay: 0.15s; }
.bot:nth-child(3) { animation-delay: 0.3s; }
.bot:nth-child(4) { animation-delay: 0.45s; }
.bot:nth-child(5) { animation-delay: 0.6s; }

@keyframes botBounce {
  from { transform: translateY(0); }
  to { transform: translateY(-6px); }
}
.barracks-status {
  font-size: 12px;
  color: #bae6fd;
  font-weight: bold;
}`,

  initialJsCode: `// Nhiệm vụ: Dùng vòng lặp for 5 lần để tạo chuỗi 5 chú robot và in ra console!

let army = "";

// Viết vòng lặp for (let i = 1; i <= 5; i++) tại đây:


// In army ra console:

`,

  solutionJsCode: `let army = "";

for (let i = 1; i <= 5; i++) {
  army += "🤖 ";
}

console.log(army);`,

  tests: [
    {
      id: 'logged_five_robots',
      description: 'Lệnh console.log đã in đúng chuỗi chứa 5 chú robot "🤖"',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => {
          const str = (l.args || []).map(String).join(' ');
          const count = (str.match(/🤖/g) || []).length;
          return count >= 5;
        });
      }
    }
  ]
};
