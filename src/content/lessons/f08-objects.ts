import { Lesson } from '@/types/lesson';

export const lessonF08: Lesson = {
  id: 'f08-objects',
  title: 'F08. Hồ Sơ Nhân Vật RPG (Đối Tượng - Object)',
  shortDescription: 'Mô tả thực thể với cấu trúc cặp key: value trong Đối Tượng (Object)',
  category: 'object',
  track: 'foundation',
  difficulty: 'medium',
  xpReward: 80,
  order: 8,
  
  story: `Trong thế giới lập trình, **Đối Tượng (Object)** là một trong những cấu trúc quan trọng nhất! 👑

Nếu Mảng \`[]\` lưu danh sách các phần tử theo số thứ tự, thì **Đối tượng \`{}\`** giúp bạn mô tả trọn vẹn một thực thể trong đời thực hoặc trong game (như một Nhân Vật RPG, một Đơn Hàng, một Học Sinh) bằng các cặp **\`tên_thuộc_tính: giá_trị\`**:

\`\`\`javascript
const hero = {
  name: "Chiến Binh Rồng",
  level: 10,
  hp: 100
};

// 1. Đọc thuộc tính bằng dấu chấm:
console.log(hero.name); // "Chiến Binh Rồng"

// 2. Cập nhật thuộc tính:
hero.hp = 80;

// 3. Thêm thuộc tính mới:
hero.weapon = "Rìu Sấm Sét";
\`\`\`
`,

  taskInstructions: [
    'Khai báo đối tượng `const hero = { name: "Chiến Binh Rồng", level: 10, hp: 100 };`.',
    'Cập nhật lượng máu của nhân vật còn 80: `hero.hp = 80;`.',
    'Thêm thuộc tính vũ khí mới: `hero.weapon = "Rìu Sấm Sét";`.',
    'In lần lượt `hero.name`, `hero.hp`, `hero.weapon` ra bảng điều khiển Console.'
  ],

  hints: {
    level1: 'Dùng dấu chấm `hero.hp = 80;` và `hero.weapon = "Rìu Sấm Sét";`.',
    level2: `const hero = {
  name: "Chiến Binh Rồng",
  level: 10,
  hp: 100
};

hero.hp = 80;
hero.weapon = "Rìu Sấm Sét";

console.log(hero.name);
console.log(hero.hp);
console.log(hero.weapon);`,
    solution: `const hero = {
  name: "Chiến Binh Rồng",
  level: 10,
  hp: 100
};

hero.hp = 80;
hero.weapon = "Rìu Sấm Sét";

console.log(hero.name);
console.log(hero.hp);
console.log(hero.weapon);`
  },

  htmlContent: `
<div class="rpg-card">
  <div class="rpg-header">
    <span class="rpg-avatar">🐉</span>
    <div class="rpg-main">
      <h3 class="rpg-name">Chiến Binh Rồng</h3>
      <span class="rpg-level">CẤP ĐỘ: 10</span>
    </div>
  </div>

  <div class="rpg-stats">
    <div class="stat-row">
      <span class="stat-lbl">❤️ MÁU (HP):</span>
      <span class="stat-val hp-val">80 / 100</span>
    </div>
    <div class="stat-row">
      <span class="stat-lbl">⚡ VŨ KHÍ:</span>
      <span class="stat-val weapon-val">Rìu Sấm Sét 🪓</span>
    </div>
  </div>
</div>`,

  cssContent: `
.rpg-card {
  background: linear-gradient(135deg, #1c1917 0%, #292524 100%);
  border: 2px solid #f59e0b;
  border-radius: 20px;
  padding: 24px;
  color: white;
  box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.3);
}
.rpg-header {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 16px;
  margin-bottom: 16px;
}
.rpg-avatar {
  font-size: 40px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 16px;
  border: 1px solid #f59e0b;
}
.rpg-name {
  font-size: 16px;
  font-weight: 900;
  color: #fef3c7;
  margin-bottom: 4px;
}
.rpg-level {
  font-size: 10px;
  font-weight: 800;
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.15);
  padding: 2px 8px;
  border-radius: 6px;
}
.rpg-stats {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.stat-row {
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.25);
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
}
.stat-lbl { color: #a8a29e; }
.hp-val { color: #ef4444; }
.weapon-val { color: #38bdf8; }`,

  initialJsCode: `// Nhiệm vụ: Tạo object hero, cập nhật hero.hp = 80, gán hero.weapon = "Rìu Sấm Sét" và in ra console!

// Bước 1: Khai báo const hero = { name: "Chiến Binh Rồng", level: 10, hp: 100 };


// Bước 2: Cập nhật hero.hp = 80;


// Bước 3: Thêm thuộc tính hero.weapon = "Rìu Sấm Sét";


// Bước 4: In hero.name, hero.hp, hero.weapon ra console

`,

  solutionJsCode: `const hero = {
  name: "Chiến Binh Rồng",
  level: 10,
  hp: 100
};

hero.hp = 80;
hero.weapon = "Rìu Sấm Sét";

console.log(hero.name);
console.log(hero.hp);
console.log(hero.weapon);`,

  tests: [
    {
      id: 'logged_hero_name',
      description: 'Lệnh console.log đã in đúng tên hero ("Chiến Binh Rồng")',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => String(arg).includes('Chiến Binh Rồng'))
        );
      }
    },
    {
      id: 'logged_updated_hp',
      description: 'Lệnh console.log đã in đúng lượng máu đã cập nhật (80)',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => Number(arg) === 80 || String(arg).includes('80'))
        );
      }
    },
    {
      id: 'logged_hero_weapon',
      description: 'Lệnh console.log đã in đúng thuộc tính vũ khí mới ("Rìu Sấm Sét")',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => String(arg).includes('Rìu Sấm Sét'))
        );
      }
    }
  ]
};
