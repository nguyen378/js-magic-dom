import { Lesson } from '@/types/lesson';

export const LESSON_B10_01: Lesson = {
  id: 'b10-01',
  title: 'Bài 10.1 (Cơ bản): Xuống Dòng Tự Động Với Flex Wrap',
  shortDescription: 'Sử dụng flex-wrap: wrap để các phần tử tự động rớt xuống hàng tiếp theo khi hết chỗ.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 37,
  week: 10,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 10.1: Xuống dòng tự động với Flex Wrap**! 🖼️📦

Mặc định Flexbox sẽ cố gắng ép tất cả phần tử co cụm trên cùng 1 hàng. Thuộc tính \`flex-wrap: wrap;\` cho phép các phần tử tự động xuống hàng mới khi hết chỗ:
- \`display: flex;\`
- \`flex-wrap: wrap;\`
- \`gap: 10px;\``,

  taskInstructions: [
    'Thiết lập cho class `.gallery`: `display: flex;`',
    'Cho phép các ảnh tự động xuống dòng: `flex-wrap: wrap;`',
    'Đặt khoảng cách giữa các ảnh: `gap: 10px;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .gallery: display: flex; flex-wrap: wrap; gap: 10px;',
    level2: `.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}`,
    solution: `.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}`
  },

  htmlContent: `<div class="gallery">
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200" alt="1" style="width: 140px; height: 100px; object-fit: cover; border-radius: 8px;">
  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200" alt="2" style="width: 140px; height: 100px; object-fit: cover; border-radius: 8px;">
  <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200" alt="3" style="width: 140px; height: 100px; object-fit: cover; border-radius: 8px;">
  <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200" alt="4" style="width: 140px; height: 100px; object-fit: cover; border-radius: 8px;">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200" alt="5" style="width: 140px; height: 100px; object-fit: cover; border-radius: 8px;">
  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200" alt="6" style="width: 140px; height: 100px; object-fit: cover; border-radius: 8px;">
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 24px;
  background: #f8fafc;
}
.gallery {
  max-width: 480px;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}`,

  initialCssCode: `/* Bài 10.1: Thiết lập display: flex, flex-wrap: wrap và gap: 10px cho .gallery */
.gallery {

}
`,
  solutionCssCode: `.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
`,

  tests: [
    {
      id: 'b10-01-t1',
      description: '.gallery có display: flex, flex-wrap: wrap và gap: 10px',
      tester: (doc: Document, win: Window) => {
        const g = doc.querySelector('.gallery');
        if (!g) return false;
        const style = win.getComputedStyle(g);
        return style.display === 'flex' && style.flexWrap === 'wrap' && (style.gap === '10px' || style.rowGap === '10px');
      }
    }
  ]
};

export const LESSON_B10_02: Lesson = {
  id: 'b10-02',
  title: 'Bài 10.2 (Cơ bản): Lưới 2 Cột Đều Nhau',
  shortDescription: 'Tạo bố cục 2 cột cân xứng bằng display: flex, gap: 20px và flex: 1 cho các cột con.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 38,
  week: 10,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 10.2: Lưới 2 cột đều nhau**! ⚖️

Chia đôi giao diện thành 2 cột cân xứng:
- Thẻ cha: \`.two-columns { display: flex; gap: 20px; }\`
- Các cột con: \`.two-columns > div { flex: 1; }\` (Mỗi cột tự động chiếm 50% không gian).`,

  taskInstructions: [
    'Thiết lập cho khung cha `.two-columns`: `display: flex; gap: 20px;`',
    'Thiết lập cho 2 cột con `.col`: `flex: 1;` (hoặc `width: 50%;`)'
  ],

  hints: {
    level1: 'Viết luật CSS cho .two-columns và .col',
    level2: `.two-columns {
  display: flex;
  gap: 20px;
}
.col {
  flex: 1;
}`,
    solution: `.two-columns {
  display: flex;
  gap: 20px;
}
.col {
  flex: 1;
}`
  },

  htmlContent: `<div class="two-columns">
  <div class="col" style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #4f46e5;">Cột Trái: Lý Thuyết</h3>
    <p style="color: #64748b; font-size: 14px; margin-bottom: 0;">Flexbox giúp việc chia cột trở nên đơn giản hơn bao giờ hết.</p>
  </div>
  <div class="col" style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <h3 style="margin-top: 0; color: #0284c7;">Cột Phải: Thực Hành</h3>
    <p style="color: #64748b; font-size: 14px; margin-bottom: 0;">Áp dụng flex: 1 giúp 2 cột luôn tự động chia đôi bằng nhau.</p>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 30px 20px;
  background: #f1f5f9;
}`,

  initialCssCode: `/* Bài 10.2: Chia 2 cột bằng nhau với .two-columns và .col */
.two-columns {

}

.col {

}
`,
  solutionCssCode: `.two-columns {
  display: flex;
  gap: 20px;
}

.col {
  flex: 1;
}
`,

  tests: [
    {
      id: 'b10-02-t1',
      description: '.two-columns có display: flex và gap: 20px',
      tester: (doc: Document, win: Window) => {
        const el = doc.querySelector('.two-columns');
        if (!el) return false;
        const style = win.getComputedStyle(el);
        return style.display === 'flex';
      }
    },
    {
      id: 'b10-02-t2',
      description: '.col có flex: 1 (hoặc chiếm độ rộng 50%)',
      tester: (doc: Document, win: Window) => {
        const col = doc.querySelector('.col');
        if (!col) return false;
        const style = win.getComputedStyle(col);
        return style.flexGrow === '1' || style.width.includes('50%');
      }
    }
  ]
};

export const LESSON_B10_03: Lesson = {
  id: 'b10-03',
  title: 'Bài 10.3 (Nâng cao): Lưới Sản Phẩm 3 Cột Đều Nhau',
  shortDescription: 'Kết hợp flex-wrap và width: calc(33.333% - 14px) để tạo lưới 3 cột sản phẩm chuẩn responsive.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 35,
  order: 39,
  week: 10,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 10.3: Lưới sản phẩm 3 cột (Product Grid)**! 🛒🛍️

Công thức kinh điển để tạo lưới 3 cột đều tăm tắp:
- Khung lưới (\`.product-grid\`): \`display: flex; flex-wrap: wrap; gap: 20px;\`
- Mỗi thẻ (\`.product-card\`): \`width: calc(33.333% - 14px);\` (Hoặc \`calc((100% - 40px) / 3);\`).`,

  taskInstructions: [
    'Thiết lập cho `.product-grid`: `display: flex; flex-wrap: wrap; gap: 20px;`',
    'Thiết lập cho mỗi thẻ `.product-card`: `width: calc(33.333% - 14px);` (hoặc tương đương cho 3 cột)'
  ],

  hints: {
    level1: 'Viết luật CSS cho .product-grid và .product-card',
    level2: `.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product-card {
  width: calc(33.333% - 14px);
}`,
    solution: `.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product-card {
  width: calc(33.333% - 14px);
}`
  },

  htmlContent: `<div class="product-grid">
  <div class="product-card" style="background: white; padding: 16px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); box-sizing: border-box;">
    <h4 style="margin: 0 0 6px; color: #4f46e5;">Sản phẩm 1</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Khóa học HTML cơ bản.</p>
  </div>
  <div class="product-card" style="background: white; padding: 16px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); box-sizing: border-box;">
    <h4 style="margin: 0 0 6px; color: #4f46e5;">Sản phẩm 2</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Khóa học CSS Flexbox.</p>
  </div>
  <div class="product-card" style="background: white; padding: 16px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); box-sizing: border-box;">
    <h4 style="margin: 0 0 6px; color: #4f46e5;">Sản phẩm 3</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Khóa học JavaScript DOM.</p>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 30px;
  background: #f8fafc;
}`,

  initialCssCode: `/* Bài 10.3: Dàn layout lưới 3 cột sản phẩm cho .product-grid và .product-card */
.product-grid {

}

.product-card {

}
`,
  solutionCssCode: `.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  width: calc(33.333% - 14px);
}
`,

  tests: [
    {
      id: 'b10-03-t1',
      description: '.product-grid có display: flex, flex-wrap: wrap và gap: 20px',
      tester: (doc: Document, win: Window) => {
        const grid = doc.querySelector('.product-grid');
        if (!grid) return false;
        const style = win.getComputedStyle(grid);
        return style.display === 'flex' && style.flexWrap === 'wrap';
      }
    },
    {
      id: 'b10-03-t2',
      description: '.product-card có width dạng 3 cột (calc hoặc khoảng 30-33%)',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('product-card') && (styles.includes('33') || styles.includes('calc'));
      }
    }
  ]
};

export const LESSON_B10_04: Lesson = {
  id: 'b10-04',
  title: 'Bài 10.4 (Nâng cao): Thẻ Card Căn Đều Nút Ở Đáy (Equal Height)',
  shortDescription: 'Sử dụng flex-direction: column và justify-content: space-between để nút bấm luôn dính sát đáy thẻ dù nội dung dài ngắn khác nhau.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 40,
  order: 40,
  week: 10,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 10.4: Thẻ Card Equal Height căn nút dính đáy**! 📐⚓

Khi 2 thẻ Card có độ dài văn bản khác nhau, làm sao để các nút "Mua Ngay" luôn thẳng hàng ở đáy thẻ?
- Biến thẻ Card thành Flexbox dạng cột: \`display: flex; flex-direction: column; justify-content: space-between;\``,

  taskInstructions: [
    'Thiết lập cho class `.card`: `display: flex;`',
    'Đổi trục chính sang chiều dọc: `flex-direction: column;`',
    'Căn phần tử đầu ở đỉnh và nút bấm dạt sát đáy: `justify-content: space-between;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .card: display: flex; flex-direction: column; justify-content: space-between;',
    level2: `.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`,
    solution: `.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`
  },

  htmlContent: `<div style="display: flex; gap: 20px; max-width: 600px; margin: 0 auto;">
  <div class="card" style="background: white; padding: 20px; border-radius: 12px; flex: 1; min-height: 220px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); box-sizing: border-box;">
    <div>
      <h4 style="margin: 0 0 8px; color: #4f46e5;">Gói Cơ Bản</h4>
      <p style="margin: 0; color: #64748b; font-size: 13px;">Mô tả ngắn gọn chỉ 1 dòng.</p>
    </div>
    <button style="background: #4f46e5; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer; width: 100%;">Đăng Ký</button>
  </div>
  <div class="card" style="background: white; padding: 20px; border-radius: 12px; flex: 1; min-height: 220px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); box-sizing: border-box;">
    <div>
      <h4 style="margin: 0 0 8px; color: #0284c7;">Gói Chuyên Sâu</h4>
      <p style="margin: 0; color: #64748b; font-size: 13px;">Mô tả rất dài gồm nhiều dòng thông tin chi tiết về các dự án thực tế và lộ trình bài học 16 tuần.</p>
    </div>
    <button style="background: #0284c7; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer; width: 100%;">Đăng Ký</button>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 30px;
  background: #f1f5f9;
}`,

  initialCssCode: `/* Bài 10.4: Biến .card thành flexbox cột và dạt đều đỉnh - đáy bằng space-between */
.card {

}
`,
  solutionCssCode: `.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`,

  tests: [
    {
      id: 'b10-04-t1',
      description: '.card có display: flex, flex-direction: column và justify-content: space-between',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return style.display === 'flex' && style.flexDirection === 'column' && style.justifyContent === 'space-between';
      }
    }
  ]
};

export const B10_LESSONS: Lesson[] = [
  LESSON_B10_01,
  LESSON_B10_02,
  LESSON_B10_03,
  LESSON_B10_04,
];
