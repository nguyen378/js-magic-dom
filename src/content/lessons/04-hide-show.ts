import { Lesson } from '@/types/lesson';

export const lesson04: Lesson = {
  id: '04-hide-show',
  title: '04. Tàng Hình Quái Vật',
  shortDescription: 'Ẩn hiện phần tử trang web với .style.display',
  category: 'style',
  difficulty: 'easy',
  xpReward: 50,
  order: 4,
  
  story: `Cứu nguy! 😱 Một con quái vật bóng đêm đang rình rập ngoài cửa. 
Bạn hãy dùng phép thuật tàng hình trong JavaScript để ẩn nó đi ngay lập tức!

Để ẩn hoàn toàn một phần tử khỏi trang web, ta thiết lập:
\`\`\`javascript
element.style.display = "none";
\`\`\`

Để hiện lại phần tử, ta có thể đổi thành:
\`\`\`javascript
element.style.display = "block"; // hoặc "flex", "inline"
\`\`\`
`,

  taskInstructions: [
    'Tìm quái vật có id là `"monster"`.',
    'Ẩn quái vật đi bằng cách gán `display` thành `"none"`.'
  ],

  hints: {
    level1: 'Dùng lệnh `document.getElementById("monster")`.',
    level2: 'Gán thuộc tính: `monster.style.display = "none";`',
    solution: `const monster = document.getElementById("monster");\nmonster.style.display = "none";`
  },

  htmlContent: `
<div class="dungeon">
  <div class="safe-zone">🏰 Lâu Đài An Toàn</div>
  <div id="monster" class="monster-box">
    <div class="monster-icon">👾</div>
    <div class="monster-name">Quái Vật Hắc Ám</div>
  </div>
</div>`,

  cssContent: `
.dungeon {
  background: #0f172a;
  padding: 24px;
  border-radius: 16px;
  text-align: center;
  color: white;
}
.safe-zone {
  font-weight: 700;
  color: #38bdf8;
  margin-bottom: 20px;
  font-size: 18px;
}
.monster-box {
  background: #dc2626;
  padding: 20px;
  border-radius: 12px;
  display: inline-block;
  animation: pulse 1.5s infinite;
}
.monster-icon {
  font-size: 56px;
}
.monster-name {
  font-weight: bold;
  margin-top: 6px;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`,

  initialJsCode: `// Nhiệm vụ: Tàng hình con quái vật #monster
const monster = document.getElementById("monster");

// Gán thuộc tính display thành "none" ở đây:

`,

  solutionJsCode: `const monster = document.getElementById("monster");
monster.style.display = "none";`,

  tests: [
    {
      id: 'monster_hidden',
      description: 'Quái vật #monster phải có thuộc tính display là "none"',
      tester: (doc) => {
        const el = doc.getElementById('monster');
        if (!el) return false;
        return el.style.display === 'none';
      }
    }
  ]
};
