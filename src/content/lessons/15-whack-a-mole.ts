import { Lesson } from '@/types/lesson';

export const lesson15: Lesson = {
  id: '15-whack-a-mole',
  title: '15. Đồ Án Tối Thượng: Đập Quái Vật (Whack-A-Mole)',
  shortDescription: 'Tự lập trình trò chơi phản xạ đập quái vật tính điểm cực vui',
  category: 'capstone',
  difficulty: 'hard',
  xpReward: 120,
  order: 15,
  
  story: `Chào mừng bạn đến với thử thách đỉnh cao cuối cùng của vương quốc JavaScript: **Game Đập Quái Vật Tí Hon (Whack-A-Mole)**! 👾🔨

Để tạo nên trò chơi phản xạ vui nhộn này:
1. Tạo một biến ghi nhận điểm: \`let score = 0;\`
2. Lắng nghe người chơi click trúng quái vật \`#monster\`:
   - Tăng điểm: \`score++;\`
   - Cập nhật điểm lên màn hình: \`scoreCount.innerText = score;\`
   - Đổi biểu cảm quái vật sang bị đánh trúng: \`monster.innerText = "😵";\`
   - Dùng \`setTimeout\` để hồi phục lại biểu cảm \`"👾"\` sau 300ms:
   \`\`\`javascript
   setTimeout(function() {
     monster.innerText = "👾";
   }, 300);
   \`\`\`

Hãy hoàn thiện trò chơi và trở thành **Kỷ Lục Gia Game** nhé! 🏆
`,

  taskInstructions: [
    'Khai báo biến điểm `let score = 0;`.',
    'Tìm quái vật `#monster` và bảng điểm `#score-count`.',
    'Thêm sự kiện `click` cho `#monster`: Tăng `score` lên 1, cập nhật `scoreCount.innerText = score`, và đổi biểu cảm `monster.innerText = "😵"`.'
  ],

  hints: {
    level1: 'Tạo biến `let score = 0;` ở ngoài hàm click.',
    level2: `let score = 0;
monster.addEventListener("click", function() {
  score++;
  scoreCount.innerText = score;
  monster.innerText = "😵";
  setTimeout(function() {
    monster.innerText = "👾";
  }, 300);
});`,
    solution: `const monster = document.getElementById("monster");
const scoreCount = document.getElementById("score-count");
let score = 0;

monster.addEventListener("click", function() {
  score++;
  scoreCount.innerText = score;
  monster.innerText = "😵";
  setTimeout(function() {
    monster.innerText = "👾";
  }, 300);
});`
  },

  htmlContent: `
<div class="game-arena">
  <div class="arena-header">
    <span class="arena-title">🎯 ĐẬP QUÁI VẬT TÍ HON</span>
    <div class="score-display">
      <span>Điểm số:</span>
      <span id="score-count" class="score-val">0</span>
    </div>
  </div>

  <div class="hole-grid">
    <div class="mole-hole">
      <div id="monster" class="mole-monster">👾</div>
    </div>
  </div>

  <p class="game-instruction">Hãy click liên tục vào quái vật để ghi điểm cao nhất!</p>
</div>`,

  cssContent: `
.game-arena {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  border-radius: 24px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 3px solid #6366f1;
  box-shadow: 0 10px 30px -5px rgba(99, 102, 241, 0.4);
}
.arena-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 12px;
  margin-bottom: 20px;
}
.arena-title {
  font-size: 14px;
  font-weight: 900;
  color: #facc15;
  letter-spacing: 1px;
}
.score-display {
  background: rgba(0, 0, 0, 0.3);
  padding: 6px 14px;
  border-radius: 12px;
  border: 1px solid #facc15;
  font-weight: bold;
  font-size: 13px;
  display: flex;
  gap: 6px;
  align-items: center;
}
.score-val {
  color: #4ade80;
  font-size: 18px;
  font-weight: 900;
}
.hole-grid {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}
.mole-hole {
  width: 120px;
  height: 120px;
  background: #0f172a;
  border: 4px solid #4338ca;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 8px 16px rgba(0, 0, 0, 0.6);
  position: relative;
  overflow: hidden;
}
.mole-monster {
  font-size: 60px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: peek 1.8s infinite ease-in-out alternate;
}
.mole-monster:hover {
  transform: scale(1.15);
}
.mole-monster:active {
  transform: scale(0.85);
}
.game-instruction {
  font-size: 12px;
  color: #c7d2fe;
}
@keyframes peek {
  0% { transform: translateY(12px) scale(0.9); }
  100% { transform: translateY(-8px) scale(1.05); }
}`,

  initialJsCode: `// Nhiệm vụ: Bấm #monster thì tăng biến score lên 1, gán vào #score-count và đổi tạm icon thành "😵"!
const monster = document.getElementById("monster");
const scoreCount = document.getElementById("score-count");

// Bước 1: Khai báo biến điểm let score = 0;


// Bước 2: Thêm sự kiện click cho monster

`,

  solutionJsCode: `const monster = document.getElementById("monster");
const scoreCount = document.getElementById("score-count");
let score = 0;

monster.addEventListener("click", function() {
  score++;
  scoreCount.innerText = score;
  monster.innerText = "😵";
  setTimeout(function() {
    monster.innerText = "👾";
  }, 300);
});`,

  tests: [
    {
      id: 'score_increments_on_hit',
      description: 'Khi click vào #monster 3 lần, điểm #score-count phải tăng lên 3',
      tester: async (doc) => {
        const monster = doc.getElementById('monster');
        const score = doc.getElementById('score-count');
        if (!monster || !score) return false;
        
        monster.click();
        monster.click();
        monster.click();
        
        return score.innerText.trim() === '3';
      }
    }
  ]
};
