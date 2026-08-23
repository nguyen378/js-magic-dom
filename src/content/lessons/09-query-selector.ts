import { Lesson } from '@/types/lesson';

export const lesson09: Lesson = {
  id: '09-query-selector',
  title: '09. Thợ Săn Đa Năng (querySelector)',
  shortDescription: 'Chọn nhiều phần tử bằng class và bộ chọn CSS với querySelectorAll',
  category: 'selector',
  difficulty: 'medium',
  xpReward: 60,
  order: 9,
  
  story: `Ngoài \`getElementById\`, các lập trình viên hiện đại thường dùng hai câu thần chú vạn năng:
* **\`document.querySelector(".class-name")\`**: Tìm **1 phần tử đầu tiên** khớp với bộ chọn CSS.
* **\`document.querySelectorAll(".class-name")\`**: Tìm **tất cả các phần tử** khớp với bộ chọn CSS và trả về một danh sách (NodeList).

Để tác động lên tất cả phần tử trong danh sách cùng lúc, ta có thể dùng vòng lặp **\`forEach\`**:
\`\`\`javascript
const cacVienNgoc = document.querySelectorAll(".gem");

cacVienNgoc.forEach(function(ngoc) {
  ngoc.classList.add("glow");
});
\`\`\`

Hãy đánh thức sức mạnh của toàn bộ 4 Viên Ngọc Vô Cực cùng một lúc nhé! 💎
`,

  taskInstructions: [
    'Dùng `document.querySelectorAll(".gem")` để lấy tất cả các viên ngọc và lưu vào biến `gems`.',
    'Dùng vòng lặp `gems.forEach(function(gem) { ... })` để duyệt qua từng viên ngọc.',
    'Bên trong hàm vòng lặp, thêm class `"glow"` cho mỗi viên ngọc bằng lệnh `gem.classList.add("glow")`.'
  ],

  hints: {
    level1: 'Sử dụng `document.querySelectorAll(".gem")` (nhớ dấu chấm trước tên class!).',
    level2: `const gems = document.querySelectorAll(".gem");
gems.forEach(function(gem) {
  gem.classList.add("glow");
});`,
    solution: `const gems = document.querySelectorAll(".gem");

gems.forEach(function(gem) {
  gem.classList.add("glow");
});`
  },

  htmlContent: `
<div class="gauntlet-box">
  <div class="gauntlet-icon">🧤</div>
  <h3>Găng Tay Vô Cực</h3>
  <p class="desc">Kích hoạt toàn bộ ngọc để bảo vệ vũ trụ!</p>
  
  <div class="gems-row">
    <div class="gem gem-blue">💎</div>
    <div class="gem gem-purple">🔮</div>
    <div class="gem gem-gold">🔶</div>
    <div class="gem gem-green">💚</div>
  </div>
</div>`,

  cssContent: `
.gauntlet-box {
  background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
  color: white;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #3f3f46;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
}
.gauntlet-icon {
  font-size: 40px;
  margin-bottom: 4px;
}
h3 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 4px;
}
.desc {
  font-size: 13px;
  color: #a1a1aa;
  margin-bottom: 20px;
}
.gems-row {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.gem {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: #3f3f46;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  border: 2px solid #52525b;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  opacity: 0.6;
}

/* Hiệu ứng phát sáng khi có class glow */
.gem.glow {
  opacity: 1;
  transform: scale(1.15) translateY(-4px);
  border-color: #f59e0b;
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.6);
  animation: pulse-gem 1.5s infinite alternate;
}

@keyframes pulse-gem {
  0% { filter: drop-shadow(0 0 5px #f59e0b); }
  100% { filter: drop-shadow(0 0 15px #ec4899); }
}`,

  initialJsCode: `// Nhiệm vụ: Lấy tất cả .gem bằng querySelectorAll và thêm class "glow" cho từng viên ngọc!

// Bước 1: Khai báo biến gems bằng document.querySelectorAll(".gem")
const gems = document.querySelectorAll(".gem");

// Bước 2: Dùng gems.forEach để thêm class "glow" cho từng viên ngọc

`,

  solutionJsCode: `const gems = document.querySelectorAll(".gem");

gems.forEach(function(gem) {
  gem.classList.add("glow");
});`,

  tests: [
    {
      id: 'all_gems_glowing',
      description: 'Tất cả các viên ngọc có class ".gem" đều phải được thêm class "glow"',
      tester: (doc) => {
        const gems = doc.querySelectorAll('.gem');
        if (gems.length === 0) return false;
        return Array.from(gems).every((g) => g.classList.contains('glow'));
      }
    }
  ]
};
