import { Lesson } from '@/types/lesson';

export const lessonProj02: Lesson = {
  id: 'proj02-tabs-ui',
  title: 'P02. Xây Dựng Thành Phần Tabs UI Động',
  shortDescription: 'Tự tay lập trình thành phần chuyển Tab nội dung giao diện mượt mà (F8 Project)',
  category: 'tabs',
  track: 'capstone',
  difficulty: 'medium',
  xpReward: 110,
  order: 2,

  story: `**Tabs UI (Thành phần chuyển thẻ nội dung)** là một trong những thành phần giao diện phổ biến nhất trên mọi website hiện đại (Facebook, Youtube, Shopee)! 📑✨

Nguyên lý hoạt động của Tabs UI:
1. Lấy danh sách tất cả các nút tab \`.tab-item\` và các khung nội dung \`.tab-pane\`.
2. Lắng nghe sự kiện click trên từng nút tab:
   - Xóa class \`active\` khỏi tab và pane cũ.
   - Thêm class \`active\` vào tab vừa bấm và pane tương ứng.
`,

  taskInstructions: [
    'Chọn tất cả các nút tab bằng `const tabs = document.querySelectorAll(".tab-item");` và các nội dung `const panes = document.querySelectorAll(".tab-pane");`.',
    'Duyệt qua từng tab bằng `tabs.forEach((tab, index) => { ... })`.',
    'Gắn sự kiện `click` cho mỗi tab: Khi click, xóa class `active` ở nút tab/pane đang active, sau đó thêm class `active` vào `tab` và `panes[index]`.'
  ],

  hints: {
    level1: 'Sử dụng `document.querySelector(".tab-item.active").classList.remove("active")` trước khi thêm `active` mới.',
    level2: `const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    tab.classList.add("active");
    panes[index].classList.add("active");
  });
});`,
    solution: `const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach(function(tab, index) {
  tab.addEventListener("click", function() {
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    tab.classList.add("active");
    panes[index].classList.add("active");
  });
});`
  },

  htmlContent: `
<div class="tabs-container">
  <div class="tabs-header">
    <button class="tab-item active">⚔️ Kỹ Năng</button>
    <button class="tab-item">🛡️ Giáp Trụ</button>
    <button class="tab-item">📜 Tiểu Sử</button>
  </div>

  <div class="tabs-body">
    <div class="tab-pane active">
      <h3>Kỹ Năng Chiến Đấu:</h3>
      <p>⚡ Chém Bão Táp (Lv.5) - Gây 250 Sát thương diện rộng.</p>
    </div>
    <div class="tab-pane">
      <h3>Trang Bị Giáp:</h3>
      <p>🛡️ Áo Giáp Kim Cương - Giảm 40% sát thương nhận vào.</p>
    </div>
    <div class="tab-pane">
      <h3>Tiểu Sử Nhân Vật:</h3>
      <p>👑 Dũng sĩ huyền thoại đến từ vương quốc JavaScript Magic.</p>
    </div>
  </div>
</div>`,

  cssContent: `
.tabs-container {
  background: #0f172a;
  border-radius: 20px;
  padding: 20px;
  color: white;
  border: 2px solid #6366f1;
  box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.3);
}
.tabs-header {
  display: flex;
  gap: 8px;
  border-bottom: 2px solid #334155;
  padding-bottom: 8px;
}
.tab-item {
  background: transparent;
  border: none;
  color: #94a3b8;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.tab-item:hover {
  color: white;
  background: rgba(255, 255, 255, 0.05);
}
.tab-item.active {
  color: white;
  background: #6366f1;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}
.tabs-body {
  padding-top: 16px;
}
.tab-pane {
  display: none;
  animation: fadeIn 0.3s ease;
}
.tab-pane.active {
  display: block;
}
.tab-pane h3 {
  font-size: 15px;
  color: #a5b4fc;
  margin-bottom: 6px;
}
.tab-pane p {
  font-size: 13px;
  color: #cbd5e1;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}`,

  initialJsCode: `// Nhiệm vụ: Lập trình Tabs UI hoạt động khi click vào từng tab!
const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

// Bước 1: Dùng tabs.forEach((tab, index) => { ... })


// Bước 2: Thêm sự kiện click cho tab, gỡ class active cũ và thêm active vào tab & pane mới

`,

  solutionJsCode: `const tabs = document.querySelectorAll(".tab-item");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach(function(tab, index) {
  tab.addEventListener("click", function() {
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    tab.classList.add("active");
    panes[index].classList.add("active");
  });
});`,

  tests: [
    {
      id: 'tab_switching_works',
      description: 'Khi click vào Tab 2 ("Giáp Trụ"), Tab 2 và Pane 2 phải có class "active"',
      tester: async (doc) => {
        const tabs = doc.querySelectorAll('.tab-item');
        const panes = doc.querySelectorAll('.tab-pane');
        if (tabs.length < 2 || panes.length < 2) return false;

        const secondTab = tabs[1] as HTMLElement;
        secondTab.click();

        await new Promise((r) => setTimeout(r, 50));

        const isTab2Active = secondTab.classList.contains('active');
        const isPane2Active = panes[1].classList.contains('active');
        const isPane1Hidden = !panes[0].classList.contains('active');

        return isTab2Active && isPane2Active && isPane1Hidden;
      }
    }
  ]
};
