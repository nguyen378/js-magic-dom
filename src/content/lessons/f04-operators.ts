import { Lesson } from '@/types/lesson';

export const lessonF04: Lesson = {
  id: 'f04-operators',
  title: 'F04. Đấu Trường Toán Tử (Operators)',
  shortDescription: 'Tính toán số học và so sánh logic với +, -, *, /, ===, &&',
  category: 'operator',
  track: 'foundation',
  difficulty: 'easy',
  xpReward: 60,
  order: 4,
  
  story: `Chào mừng bạn đến với Đấu Trường Sức Mạnh! ⚔️

Để tính toán điểm số và lập trình logic chiến đấu, ta sử dụng 3 nhóm **Toán tử (Operators)**:

1. **Toán tử số học**:
   * \`+\` (Cộng), \`-\` (Trừ), \`*\` (Nhân), \`/\` (Chia), \`%\` (Chia lấy dư).
2. **Toán tử so sánh** (kết quả trả về \`true\` hoặc \`false\`):
   * \`===\` (Bằng nhau tuyệt đối), \`!==\` (Khác nhau), \`>\`, \`<\`, \`>=\`, \`<=\`.
3. **Toán tử logic**:
   * \`&&\` (VÀ - Cả hai điều kiện đều phải đúng).
   * \`||\` (HOẶC - Chỉ cần 1 trong 2 điều kiện đúng).

\`\`\`javascript
const baseDamage = 30;
const totalDamage = baseDamage * 2 + 10; // 30 * 2 + 10 = 70
const isStrong = totalDamage >= 50;      // true vì 70 >= 50
\`\`\`
`,

  taskInstructions: [
    'Khai báo `const baseDamage = 30;`.',
    'Tính tổng sát thương chí mạng: `const totalDamage = baseDamage * 2 + 10;`.',
    'Kiểm tra đòn đánh siêu cấp: `const isSuperAttack = totalDamage >= 50;`.',
    'In lần lượt `totalDamage` và `isSuperAttack` ra bảng điều khiển Console bằng `console.log()`.'
  ],

  hints: {
    level1: 'Tính toán biểu thức `baseDamage * 2 + 10` và so sánh `>= 50`.',
    level2: `const baseDamage = 30;
const totalDamage = baseDamage * 2 + 10;
const isSuperAttack = totalDamage >= 50;

console.log(totalDamage);
console.log(isSuperAttack);`,
    solution: `const baseDamage = 30;
const totalDamage = baseDamage * 2 + 10;
const isSuperAttack = totalDamage >= 50;

console.log(totalDamage);
console.log(isSuperAttack);`
  },

  htmlContent: `
<div class="arena-card">
  <div class="arena-top">
    <span>⚔️ MÁY TÍNH SÁT THƯƠNG CHIẾN ĐẤU</span>
  </div>
  <div class="damage-display">
    <div class="dmg-val">💥 70 DMG</div>
    <div class="dmg-status">TRẠNG THÁI: SIÊU ĐÒN ĐÁNH (TRUE)</div>
  </div>
  <div class="formula">Công thức: (30 × 2) + 10 = 70 Sát thương</div>
</div>`,

  cssContent: `
.arena-card {
  background: linear-gradient(135deg, #450a0a 0%, #1f2937 100%);
  border: 2px solid #ef4444;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.3);
}
.arena-top {
  font-size: 11px;
  font-weight: 800;
  color: #fca5a5;
  letter-spacing: 1px;
  margin-bottom: 16px;
}
.damage-display {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 12px;
}
.dmg-val {
  font-size: 28px;
  font-weight: 900;
  color: #f87171;
  text-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
  margin-bottom: 4px;
}
.dmg-status {
  font-size: 11px;
  font-weight: 800;
  color: #4ade80;
}
.formula {
  font-size: 12px;
  color: #cbd5e1;
}`,

  initialJsCode: `// Nhiệm vụ: Tính totalDamage, kiểm tra isSuperAttack và console.log kết quả!

// Bước 1: Khai báo const baseDamage = 30;


// Bước 2: Tính const totalDamage = baseDamage * 2 + 10;


// Bước 3: So sánh const isSuperAttack = totalDamage >= 50;


// Bước 4: In totalDamage và isSuperAttack ra console

`,

  solutionJsCode: `const baseDamage = 30;
const totalDamage = baseDamage * 2 + 10;
const isSuperAttack = totalDamage >= 50;

console.log(totalDamage);
console.log(isSuperAttack);`,

  tests: [
    {
      id: 'logged_total_damage',
      description: 'Lệnh console.log đã in đúng tổng sát thương là 70',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => 
          l.args && l.args.some((arg: any) => Number(arg) === 70 || String(arg).includes('70'))
        );
      }
    },
    {
      id: 'logged_super_attack_boolean',
      description: 'Lệnh console.log đã in đúng kết quả so sánh là true',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => 
          l.args && l.args.some((arg: any) => arg === true || String(arg) === 'true')
        );
      }
    }
  ]
};
