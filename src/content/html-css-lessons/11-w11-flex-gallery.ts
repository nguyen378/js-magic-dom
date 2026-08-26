import { Lesson } from '@/types/lesson';

export const LESSON_W11: Lesson = {
  id: 'w11-flex-gallery',
  title: 'Tuần 11: Lưới Bộ Sưu Tập Ảnh Với Flex Wrap',
  shortDescription: 'Xây dựng khu vực "Bộ Sưu Tập / Dự Án": Dàn nhiều thẻ ảnh thành dạng lưới 2-3 cột linh hoạt và tự động xuống dòng với flex-wrap: wrap.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 120,
  order: 11,
  week: 11,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 11**! 🖼️

Khi có 4, 6 hay 8 tấm ảnh trong bộ sưu tập hoặc danh sách dự án, nếu để hàng ngang sẽ bị tràn khỏi màn hình. Làm sao để chúng tự động xuống dòng và xếp thành lưới?
- \`flex-wrap: wrap\`: Cho phép các phần tử tự động rớt xuống hàng tiếp theo khi hết chỗ trống.
- Đặt kích thước chiều rộng cho mỗi tấm thẻ (ví dụ: \`width: calc(50% - 10px)\` cho 2 cột hoặc \`width: calc(33.333% - 12px)\` cho 3 cột).`,

  taskInstructions: [
    'Đặt `display: flex`, `flex-wrap: wrap` và `gap: 16px` cho `.gallery-grid` để tạo lưới ảnh',
    'Đặt `width: calc(50% - 8px)` và `box-sizing: border-box` cho `.gallery-card` để chia thành 2 cột đều nhau',
    'Đặt `border-radius: 14px` và `overflow: hidden` cho `.gallery-card` để các góc ảnh bo tròn gọn gàng'
  ],

  hints: {
    level1: 'Sử dụng .gallery-grid { display: flex; flex-wrap: wrap; gap: 16px; } và .gallery-card { width: calc(50% - 8px); box-sizing: border-box; }',
    level2: 'Ví dụ:\n.gallery-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.gallery-card {\n  width: calc(50% - 8px);\n  box-sizing: border-box;\n  border-radius: 14px;\n  overflow: hidden;\n}',
    solution: '.gallery-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.gallery-card {\n  width: calc(50% - 8px);\n  box-sizing: border-box;\n  border-radius: 14px;\n  overflow: hidden;\n}'
  },

  htmlContent: `<div class="gallery-section">
  <h2>Dự Án & Khoảnh Khắc Của Tôi</h2>
  <div class="gallery-grid">
    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Dự án 1">
      <div class="info">
        <h4>Trang Web Đầu Tay</h4>
        <p>HTML & CSS Cơ Bản</p>
      </div>
    </div>
    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300" alt="Dự án 2">
      <div class="info">
        <h4>Game Đập Chuột</h4>
        <p>JavaScript DOM</p>
      </div>
    </div>
    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300" alt="Dự án 3">
      <div class="info">
        <h4>Ứng Dụng Ghi Chú</h4>
        <p>Local Storage & Form</p>
      </div>
    </div>
    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300" alt="Dự án 4">
      <div class="info">
        <h4>Trang Cá Nhân Hoàn Chỉnh</h4>
        <p>Đồ Án Tốt Nghiệp</p>
      </div>
    </div>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  padding: 30px 15px;
  margin: 0;
}
.gallery-section {
  max-width: 600px;
  margin: 0 auto;
}
h2 {
  text-align: center;
  color: #0f172a;
  margin-bottom: 24px;
}
.gallery-card {
  background: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  border: 1px solid #e2e8f0;
}
.gallery-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
}
.info {
  padding: 12px 14px;
}
.info h4 {
  margin: 0 0 4px;
  color: #1e293b;
  font-size: 15px;
}
.info p {
  margin: 0;
  color: #64748b;
  font-size: 12px;
}`,

  initialCssCode: `/* Tuần 11: Tạo lưới ảnh bằng display: flex, flex-wrap: wrap và tính toán chiều rộng */
.gallery-grid {

}

.gallery-card {

}
`,
  solutionCssCode: `.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.gallery-card {
  width: calc(50% - 8px);
  box-sizing: border-box;
  border-radius: 14px;
  overflow: hidden;
}
`,

  tests: [
    {
      id: 'w11-t1',
      description: '.gallery-grid có display là flex và flex-wrap là wrap',
      tester: (doc: Document, win: Window) => {
        const grid = doc.querySelector('.gallery-grid');
        if (!grid) return false;
        const style = win.getComputedStyle(grid);
        return style.display === 'flex' && style.flexWrap === 'wrap';
      }
    },
    {
      id: 'w11-t2',
      description: '.gallery-grid có thuộc tính gap: 16px',
      tester: (doc: Document, win: Window) => {
        const grid = doc.querySelector('.gallery-grid');
        if (!grid) return false;
        const style = win.getComputedStyle(grid);
        return style.gap === '16px' || style.columnGap === '16px';
      }
    },
    {
      id: 'w11-t3',
      description: '.gallery-card có bo góc border-radius',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.gallery-card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return parseInt(style.borderRadius) > 0;
      }
    }
  ]
};
