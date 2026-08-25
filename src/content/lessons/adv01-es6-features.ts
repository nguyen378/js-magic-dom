import { Lesson } from '@/types/lesson';

export const lessonAdv01: Lesson = {
  id: 'adv01-es6-features',
  title: 'ES01. Pháp Thuật ES6+ (Destructuring & Spread)',
  shortDescription: 'Viết code JavaScript ngắn gọn và chuyên nghiệp với Destructuring và Spread Operator',
  category: 'es6',
  track: 'advanced',
  difficulty: 'medium',
  xpReward: 85,
  order: 1,

  story: `**ECMAScript 6 (ES6+)** mang đến những cú pháp hiện đại giúp lập trình viên viết code ngắn gọn, thanh lịch hơn gấp nhiều lần! ⚡

1. **Destructuring (Phân rã đối tượng/mảng)**:
\`\`\`javascript
const player = { name: "Goku", power: 9000 };
// Thay vì: const name = player.name; const power = player.power;
const { name, power } = player;
\`\`\`

2. **Spread Operator (\`...\`) (Trải rộng phần tử)**:
\`\`\`javascript
const defaultSkills = ["Đấm", "Đá"];
const allSkills = [...defaultSkills, "Chưởng Kamehameha"];
// allSkills = ["Đấm", "Đá", "Chưởng Kamehameha"]
\`\`\`
`,

  taskInstructions: [
    'Cho trước đối tượng: `const hero = { heroName: "Shadow Ninja", rank: "S", stars: 5 };`.',
    'Sử dụng Destructuring để trích xuất `heroName` và `rank` từ `hero`: `const { heroName, rank } = hero;`.',
    'Tạo mảng trang bị mới bằng Spread Operator: `const baseItems = ["Kiếm Đen", "Phi Tiêu"];` và `const fullInventory = [...baseItems, "Bùa Tàng Hình"];`.',
    'In lần lượt `heroName` và `fullInventory` ra console bằng `console.log()`.'
  ],

  hints: {
    level1: 'Dùng cú pháp `const { heroName, rank } = hero;` và `const fullInventory = [...baseItems, "Bùa Tàng Hình"];`.',
    level2: `const hero = { heroName: "Shadow Ninja", rank: "S", stars: 5 };
const { heroName, rank } = hero;

const baseItems = ["Kiếm Đen", "Phi Tiêu"];
const fullInventory = [...baseItems, "Bùa Tàng Hình"];

console.log(heroName);
console.log(fullInventory);`,
    solution: `const hero = { heroName: "Shadow Ninja", rank: "S", stars: 5 };
const { heroName, rank } = hero;

const baseItems = ["Kiếm Đen", "Phi Tiêu"];
const fullInventory = [...baseItems, "Bùa Tàng Hình"];

console.log(heroName);
console.log(fullInventory);`
  },

  htmlContent: `
<div class="ninja-scroll">
  <div class="ninja-badge">📜 MẬT TỊCH ES6+ SHADOW NINJA</div>
  <div class="ninja-profile">
    <div class="avatar">🥷</div>
    <div class="details">
      <div id="ninja-name" class="name">Shadow Ninja (Hạng S)</div>
      <div id="ninja-items" class="items">🎒 Balo: Kiếm Đen, Phi Tiêu, Bùa Tàng Hình</div>
    </div>
  </div>
  <p class="ninja-tip">Mẹo: Kết quả trích xuất Destructuring & Spread sẽ xuất hiện ở Console bên dưới!</p>
</div>`,

  cssContent: `
.ninja-scroll {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #38bdf8;
  box-shadow: 0 10px 25px -5px rgba(56, 189, 248, 0.3);
}
.ninja-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  color: #7dd3fc;
  background: rgba(56, 189, 248, 0.2);
  border: 1px solid #38bdf8;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
}
.ninja-profile {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
  text-align: left;
}
.avatar {
  font-size: 44px;
}
.name {
  font-size: 15px;
  font-weight: 800;
  color: #f8fafc;
}
.items {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 4px;
}
.ninja-tip {
  font-size: 12px;
  color: #cbd5e1;
}`,

  initialJsCode: `const hero = { heroName: "Shadow Ninja", rank: "S", stars: 5 };
const baseItems = ["Kiếm Đen", "Phi Tiêu"];

// Bước 1: Dùng Destructuring trích xuất { heroName, rank } từ hero


// Bước 2: Dùng Spread Operator (...) tạo fullInventory gồm baseItems và "Bùa Tàng Hình"


// Bước 3: In heroName và fullInventory ra console

`,

  solutionJsCode: `const hero = { heroName: "Shadow Ninja", rank: "S", stars: 5 };
const { heroName, rank } = hero;

const baseItems = ["Kiếm Đen", "Phi Tiêu"];
const fullInventory = [...baseItems, "Bùa Tàng Hình"];

console.log(heroName);
console.log(fullInventory);`,

  tests: [
    {
      id: 'destructuring_logged',
      description: 'Lệnh console.log đã in đúng tên nhân vật trích xuất "Shadow Ninja"',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => String(arg).includes('Shadow Ninja'))
        );
      }
    },
    {
      id: 'spread_array_logged',
      description: 'Lệnh console.log đã in đúng mảng balo trải rộng có chứa "Bùa Tàng Hình"',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => {
            const str = JSON.stringify(arg);
            return str.includes('Kiếm Đen') && str.includes('Phi Tiêu') && str.includes('Bùa Tàng Hình');
          })
        );
      }
    }
  ]
};
