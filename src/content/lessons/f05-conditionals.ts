import { Lesson } from '@/types/lesson';

export const lessonF05: Lesson = {
  id: 'f05-conditionals',
  title: 'F05. Ngã Rẽ Quyết Định (if...else)',
  shortDescription: 'Ra quyết định thông minh trong chương trình với câu lệnh if, else if, else',
  category: 'condition',
  track: 'foundation',
  difficulty: 'easy',
  xpReward: 60,
  order: 5,
  
  story: `Trong cuộc sống và trò chơi, chúng ta luôn phải đưa ra các quyết định: 
*"NẾU đủ điểm kinh nghiệm THÌ lên cấp, NGƯỢC LẠI THÌ tiếp tục luyện tập!"* 🚪

Trong JavaScript, câu lệnh điều khiển rẽ nhánh kinh điển là **\`if ... else\`**:

\`\`\`javascript
const mana = 80;
let status = "";

if (mana >= 50) {
  status = "MỞ CỔNG THÀNH CÔNG";
} else {
  status = "KHÔNG ĐỦ NĂNG LƯỢNG";
}

console.log(status);
\`\`\`

Hãy kiểm tra năng lượng mana của pháp sư để mở Cánh Cổng Bí Mật nhé!
`,

  taskInstructions: [
    'Khai báo `const mana = 80;`.',
    'Khai báo biến `let status = "";`.',
    'Dùng `if (mana >= 50)`: Gán `status = "MỞ CỔNG THÀNH CÔNG";`, `else`: Gán `status = "KHÔNG ĐỦ NĂNG LƯỢNG";`.',
    'In biến `status` ra bảng điều khiển Console bằng `console.log(status)`.'
  ],

  hints: {
    level1: 'Dùng cú pháp `if (mana >= 50) { ... } else { ... }`.',
    level2: `const mana = 80;
let status = "";

if (mana >= 50) {
  status = "MỞ CỔNG THÀNH CÔNG";
} else {
  status = "KHÔNG ĐỦ NĂNG LƯỢNG";
}

console.log(status);`,
    solution: `const mana = 80;
let status = "";

if (mana >= 50) {
  status = "MỞ CỔNG THÀNH CÔNG";
} else {
  status = "KHÔNG ĐỦ NĂNG LƯỢNG";
}

console.log(status);`
  },

  htmlContent: `
<div class="gate-wrapper">
  <div class="gate-door">
    <div class="door-status">🟢 CỔNG MA THUẬT: ĐÃ MỞ</div>
    <div class="mana-bar">
      <span>Năng lượng: 80 / 100 MANA (Đủ điều kiện ≥ 50)</span>
    </div>
  </div>
</div>`,

  cssContent: `
.gate-wrapper {
  background: linear-gradient(135deg, #064e3b 0%, #022c22 100%);
  border: 2px solid #10b981;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.3);
}
.gate-door {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  padding: 20px;
  border: 2px dashed #34d399;
}
.door-status {
  font-size: 16px;
  font-weight: 900;
  color: #6ee7b7;
  letter-spacing: 1px;
  margin-bottom: 8px;
}
.mana-bar {
  font-size: 12px;
  color: #a7f3d0;
  font-weight: bold;
}`,

  initialJsCode: `// Nhiệm vụ: Viết cấu trúc if/else kiểm tra mana >= 50 và in status ra console!

const mana = 80;
let status = "";

// Viết lệnh if (mana >= 50) { ... } else { ... } tại đây:


// In status ra console:

`,

  solutionJsCode: `const mana = 80;
let status = "";

if (mana >= 50) {
  status = "MỞ CỔNG THÀNH CÔNG";
} else {
  status = "KHÔNG ĐỦ NĂNG LƯỢNG";
}

console.log(status);`,

  tests: [
    {
      id: 'logged_correct_gate_status',
      description: 'Lệnh console.log đã in đúng trạng thái "MỞ CỔNG THÀNH CÔNG"',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => String(arg).toUpperCase().includes('MỞ CỔNG THÀNH CÔNG'))
        );
      }
    }
  ]
};
