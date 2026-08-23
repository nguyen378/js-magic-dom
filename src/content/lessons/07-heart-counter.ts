import { Lesson } from '@/types/lesson';

export const lesson07: Lesson = {
  id: '07-heart-counter',
  title: '07. Thả Tim Bay Bổng',
  shortDescription: 'Xây dựng ứng dụng bộ đếm (Counter App) với biến số và sự kiện',
  category: 'event',
  difficulty: 'medium',
  xpReward: 60,
  order: 7,
  
  story: `Bạn có bao giờ thắc mắc nút "Like/Thả tim" trên TikTok hay Facebook hoạt động như thế nào chưa? ❤️

Chúng ta chỉ cần:
1. Tạo một biến đếm (ví dụ: \`let count = 0;\`).
2. Mỗi lần người dùng click nút, tăng biến đó lên 1 (\`count = count + 1;\` hoặc \`count++;\`).
3. Cập nhật con số mới vào giao diện (\`countElement.innerText = count;\`).
`,

  taskInstructions: [
    'Khai báo một biến đếm `let count = 0;`.',
    'Bắt sự kiện `click` trên nút `#heart-btn`.',
    'Trong hàm xử lý sự kiện: Tăng biến `count` lên 1 và gán vào `innerText` của `#heart-count`.'
  ],

  hints: {
    level1: 'Tạo biến `let count = 0;` ở bên ngoài hàm sự kiện.',
    level2: `let count = 0;\nheartBtn.addEventListener("click", function() {\n  count++;\n  heartCount.innerText = count;\n});`,
    solution: `const heartBtn = document.getElementById("heart-btn");\nconst heartCount = document.getElementById("heart-count");\nlet count = 0;\n\nheartBtn.addEventListener("click", function() {\n  count++;\n  heartCount.innerText = count;\n});`
  },

  htmlContent: `
<div class="post-card">
  <div class="post-header">
    <div class="author-avatar">🐱</div>
    <div>
      <div class="author-name">Mèo Múp Lập Trình</div>
      <div class="post-time">Vừa xong</div>
    </div>
  </div>
  <p class="post-content">
    Hôm nay mình vừa học xong DOM trong JavaScript, thấy vui và dễ hiểu ghê! Thả tim ủng hộ mình nhé các bạn ơi! ✨
  </p>
  <div class="action-row">
    <button id="heart-btn" class="heart-btn">
      <span class="heart-icon">❤️</span>
      <span>Thả Tim</span>
    </button>
    <div class="count-badge">
      <span id="heart-count">0</span> lượt tim
    </div>
  </div>
</div>`,

  cssContent: `
.post-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
}
.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.author-avatar {
  font-size: 28px;
  background: #fef3c7;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.author-name {
  font-weight: 700;
  font-size: 15px;
  color: #1e293b;
}
.post-time {
  font-size: 11px;
  color: #94a3b8;
}
.post-content {
  font-size: 14px;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 18px;
}
.action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f1f5f9;
  padding-top: 14px;
}
.heart-btn {
  background: #fee2e2;
  color: #ef4444;
  border: none;
  padding: 8px 16px;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}
.heart-btn:hover {
  background: #fecaca;
  transform: scale(1.05);
}
.heart-btn:active {
  transform: scale(0.95);
}
.count-badge {
  font-size: 13px;
  font-weight: 700;
  color: #64748b;
}
#heart-count {
  color: #ef4444;
  font-size: 16px;
  font-weight: 800;
}`,

  initialJsCode: `// Nhiệm vụ: Khi bấm #heart-btn, tăng biến count lên 1 và cập nhật vào #heart-count!
const heartBtn = document.getElementById("heart-btn");
const heartCount = document.getElementById("heart-count");

// Bước 1: Khai báo biến đếm let count = 0;


// Bước 2: Thêm addEventListener click cho heartBtn

`,

  solutionJsCode: `const heartBtn = document.getElementById("heart-btn");
const heartCount = document.getElementById("heart-count");
let count = 0;

heartBtn.addEventListener("click", function() {
  count++;
  heartCount.innerText = count;
});`,

  tests: [
    {
      id: 'increment_on_click',
      description: 'Khi click 3 lần vào #heart-btn, #heart-count phải hiển thị số 3',
      tester: async (doc) => {
        const btn = doc.getElementById('heart-btn');
        const counter = doc.getElementById('heart-count');
        if (!btn || !counter) return false;
        
        // Simulate 3 clicks
        btn.click();
        btn.click();
        btn.click();
        
        return counter.innerText.trim() === '3';
      }
    }
  ]
};
