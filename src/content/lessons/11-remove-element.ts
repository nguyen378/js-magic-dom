import { Lesson } from '@/types/lesson';

export const lesson11: Lesson = {
  id: '11-remove-element',
  title: '11. Vệ Sinh Không Gian (Xóa Phần Tử)',
  shortDescription: 'Xóa vĩnh viễn một phần tử khỏi cây DOM bằng element.remove()',
  category: 'removal',
  difficulty: 'medium',
  xpReward: 60,
  order: 11,
  
  story: `Cảnh báo va chạm! 🚨 Một khối thiên thạch khổng lồ đang chắn ngang quỹ đạo của tàu vũ trụ!

Khi bạn muốn xóa bỏ một phần tử hoàn toàn khỏi trang web (ví dụ: xóa công việc trong To-Do List, xóa một bình luận, hay tiêu diệt chướng ngại vật trong game), JavaScript cung cấp lệnh:

\`\`\`javascript
const phanTuCanXoa = document.getElementById("ten-id");
phanTuCanXoa.remove();
\`\`\`

Chỉ một dòng lệnh ngắn gọn, phần tử đó sẽ biến mất vĩnh viễn khỏi cây DOM! Hãy nhấn nút kích hoạt pháo la-ze để phá hủy thiên thạch nhé! 💥
`,

  taskInstructions: [
    'Tìm khối thiên thạch `#meteor` và nút bắn `#laser-btn`.',
    'Thêm sự kiện `click` cho nút `#laser-btn`.',
    'Trong hàm sự kiện, gọi lệnh `meteor.remove()` để thổi bay thiên thạch khỏi không gian.'
  ],

  hints: {
    level1: 'Dùng `laserBtn.addEventListener("click", function() { ... })`.',
    level2: `laserBtn.addEventListener("click", function() {
  meteor.remove();
});`,
    solution: `const meteor = document.getElementById("meteor");
const laserBtn = document.getElementById("laser-btn");

laserBtn.addEventListener("click", function() {
  meteor.remove();
});`
  },

  htmlContent: `
<div class="space-cockpit">
  <div class="radar-screen">
    <div id="meteor" class="meteor-box">
      <span class="meteor-icon">☄️</span>
      <span class="meteor-text">Thiên Thạch Nguy Hiểm</span>
    </div>
    <div class="ship-box">
      <span>🚀 Phi Thuyền Thám Hiểm</span>
    </div>
  </div>
  
  <div class="control-panel">
    <button id="laser-btn" class="laser-btn">💥 Kích Hoạt Pháo La-ze</button>
  </div>
</div>`,

  cssContent: `
.space-cockpit {
  background: #020617;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #1e293b;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
}
.radar-screen {
  height: 180px;
  background: radial-gradient(circle, #0f172a 0%, #020617 100%);
  border-radius: 14px;
  border: 2px dashed #334155;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}
.meteor-box {
  background: rgba(239, 68, 68, 0.2);
  border: 2px solid #ef4444;
  padding: 8px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: float 2s infinite ease-in-out alternate;
}
.meteor-icon {
  font-size: 24px;
}
.meteor-text {
  font-size: 13px;
  font-weight: bold;
  color: #fca5a5;
}
.ship-box {
  background: rgba(56, 189, 248, 0.2);
  border: 1px solid #38bdf8;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: bold;
  color: #7dd3fc;
}
.laser-btn {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
  transition: all 0.2s;
}
.laser-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(239, 68, 68, 0.7);
}
.laser-btn:active {
  transform: scale(0.95);
}
@keyframes float {
  from { transform: translateY(-4px); }
  to { transform: translateY(4px); }
}`,

  initialJsCode: `// Nhiệm vụ: Khi bấm #laser-btn, xóa khối thiên thạch #meteor khỏi cây DOM!
const meteor = document.getElementById("meteor");
const laserBtn = document.getElementById("laser-btn");

// Thêm sự kiện click cho laserBtn tại đây:

`,

  solutionJsCode: `const meteor = document.getElementById("meteor");
const laserBtn = document.getElementById("laser-btn");

laserBtn.addEventListener("click", function() {
  meteor.remove();
});`,

  tests: [
    {
      id: 'meteor_removed_on_click',
      description: 'Khi click vào #laser-btn, phần tử #meteor phải bị xóa khỏi DOM (null)',
      tester: async (doc) => {
        const btn = doc.getElementById('laser-btn');
        if (!btn) return false;
        
        // Simulate click
        btn.click();
        
        const meteor = doc.getElementById('meteor');
        return meteor === null;
      }
    }
  ]
};
