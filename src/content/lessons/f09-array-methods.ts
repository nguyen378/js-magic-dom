import { Lesson } from '@/types/lesson';

export const lessonF09: Lesson = {
  id: 'f09-array-methods',
  title: 'F09. Siêu Phương Thức Mảng (Map & Filter)',
  shortDescription: 'Làm chủ các phương thức biến đổi mảng hiện đại: map(), filter() và includes()',
  category: 'array-methods',
  track: 'foundation',
  difficulty: 'medium',
  xpReward: 80,
  order: 9,

  story: `Trong JavaScript chuyên nghiệp, chúng ta hiếm khi dùng vòng lặp for truyền thống để duyệt mảng, mà thay vào đó là các **Siêu Phương Thức (Array Methods)** mạnh mẽ! 🪄

1. **\`map()\`**: Biến đổi từng phần tử trong mảng thành một giá trị mới (kích thước mảng không đổi).
\`\`\`javascript
const scores = [10, 20, 30];
const doubleScores = scores.map(score => score * 2); // [20, 40, 60]
\`\`\`

2. **\`filter()\`**: Lọc ra các phần tử thỏa mãn một điều kiện nhất định.
\`\`\`javascript
const passed = scores.filter(score => score >= 20); // [20, 30]
\`\`\`
`,

  taskInstructions: [
    'Cho sẵn mảng quái vật: `const monsters = [ { name: "Slime", level: 5 }, { name: "Dragon", level: 50 }, { name: "Goblin", level: 12 } ];`.',
    'Dùng `.filter()` để lọc ra các quái vật cấp cao (level >= 10): `const bossMonsters = monsters.filter(m => m.level >= 10);`.',
    'Dùng `.map()` để lấy ra danh sách tên của các Boss: `const bossNames = bossMonsters.map(m => m.name);`.',
    'In `bossNames` ra console bằng `console.log(bossNames)`.'
  ],

  hints: {
    level1: 'Kết hợp `.filter(m => m.level >= 10)` rồi `.map(m => m.name)`.',
    level2: `const monsters = [
  { name: "Slime", level: 5 },
  { name: "Dragon", level: 50 },
  { name: "Goblin", level: 12 }
];

const bossMonsters = monsters.filter(m => m.level >= 10);
const bossNames = bossMonsters.map(m => m.name);
console.log(bossNames);`,
    solution: `const monsters = [
  { name: "Slime", level: 5 },
  { name: "Dragon", level: 50 },
  { name: "Goblin", level: 12 }
];

const bossMonsters = monsters.filter(function(m) {
  return m.level >= 10;
});

const bossNames = bossMonsters.map(function(m) {
  return m.name;
});

console.log(bossNames);`
  },

  htmlContent: `
<div class="dungeon-container">
  <div class="dungeon-badge">⚔️ HẦM NGỤC THỬ THÁCH QUÁI VẬT</div>
  <div class="monster-cards">
    <div class="monster-card">
      <span class="m-icon">🟢</span>
      <span class="m-name">Slime (Lv.5)</span>
    </div>
    <div class="monster-card boss">
      <span class="m-icon">🐉</span>
      <span class="m-name">Dragon (Lv.50) [BOSS]</span>
    </div>
    <div class="monster-card boss">
      <span class="m-icon">👺</span>
      <span class="m-name">Goblin (Lv.12) [BOSS]</span>
    </div>
  </div>
  <p class="dungeon-tip">Dùng .filter() và .map() để chọn lọc quái vật cấp cao hiển thị ở Console!</p>
</div>`,

  cssContent: `
.dungeon-container {
  background: linear-gradient(135deg, #1e1b4b 0%, #31104b 100%);
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #8b5cf6;
  box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.3);
}
.dungeon-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  color: #c4b5fd;
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid #8b5cf6;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
}
.monster-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 14px;
}
.monster-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.monster-card.boss {
  border-color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}
.m-icon {
  font-size: 28px;
}
.m-name {
  font-size: 11px;
  font-weight: bold;
}
.dungeon-tip {
  font-size: 12px;
  color: #cbd5e1;
}`,

  initialJsCode: `const monsters = [
  { name: "Slime", level: 5 },
  { name: "Dragon", level: 50 },
  { name: "Goblin", level: 12 }
];

// Nhiệm vụ:
// 1. Dùng .filter() để lọc ra quái vật có level >= 10
// 2. Dùng .map() để lấy danh sách tên của các Boss
// 3. In ra console bằng console.log(bossNames)

`,

  solutionJsCode: `const monsters = [
  { name: "Slime", level: 5 },
  { name: "Dragon", level: 50 },
  { name: "Goblin", level: 12 }
];

const bossMonsters = monsters.filter(m => m.level >= 10);
const bossNames = bossMonsters.map(m => m.name);

console.log(bossNames);`,

  tests: [
    {
      id: 'filter_and_map_bosses',
      description: 'Lệnh console.log đã in đúng mảng tên Boss ["Dragon", "Goblin"]',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => {
          const str = JSON.stringify(l.args);
          return str.includes('Dragon') && str.includes('Goblin') && !str.includes('Slime');
        });
      }
    }
  ]
};
