import { Lesson } from '@/types/lesson';

export const LESSON_W10: Lesson = {
  id: 'w10-flexbox-advanced',
  title: 'Buổi 10: Flexbox Nâng Cao & Lưới Đa Cột (Wrap & Gap)',
  shortDescription: 'Xuống dòng tự động flex-wrap: wrap, dựng lưới 2-3 cột sản phẩm/bài viết, xử lý căn đều chiều cao thẻ card (Equal Height).',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 120,
  order: 10,
  week: 10,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 10: Flexbox nâng cao & Lưới đa cột (Wrap & Gap)**! 🛍️

Khi xây dựng các trang web thương mại điện tử (như Shopee, Tiki) hay bộ sưu tập nhiều bài viết:
- **Xuống dòng \`flex-wrap: wrap\`**: Cho phép các phần tử con tự động rớt dòng khi hết khoảng trống trên một hàng.
- **Dựng lưới đa cột**:
  - Lưới 2 cột: Sử dụng \`flex: 1\` hoặc \`width: calc(50% - 10px)\`.
  - Lưới 3 cột: Đặt \`width: calc(33.333% - 14px)\` kết hợp \`gap: 20px\`.
- **Kỹ thuật căn đều nút đáy (Equal Height Card)**:
  - Khi nội dung các thẻ dài ngắn khác nhau, đặt \`display: flex; flex-direction: column; justify-content: space-between;\` cho thẻ \`.card\` sẽ giúp nút bấm luôn nằm thẳng hàng sát mép đáy!`,

  taskInstructions: [
    '🟢 Bài 10.1: Thiết lập cho `.gallery`: `display: flex; flex-wrap: wrap; gap: 10px;` để ảnh tự động rớt dòng khi hết chỗ',
    '🟢 Bài 10.2: Cho khung `.two-columns` có `display: flex; gap: 20px;`, đặt cho mỗi thẻ con chiếm `width: 50%` (hoặc `flex: 1`)',
    '🟡 Bài 10.3: Dựng danh sách trong `.product-grid` với `display: flex; flex-wrap: wrap; gap: 20px;` và mỗi thẻ `.product-card` có `width: calc(33.333% - 14px);` (hoặc tương đương cho lưới 3 cột)',
    '🟡 Bài 10.4: Cài đặt thẻ `.card`: `display: flex; flex-direction: column; justify-content: space-between;` để nút bấm luôn dính sát mép dưới đáy thẻ'
  ],

  hints: {
    level1: 'Viết CSS cho .gallery, .two-columns, .two-columns > div, .product-grid, .product-card và .card',
    level2: `/* Gợi ý cú pháp */
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.two-columns {
  display: flex;
  gap: 20px;
}

.two-columns > div {
  flex: 1;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  width: calc(33.333% - 14px);
  box-sizing: border-box;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`,
    solution: `.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.two-columns {
  display: flex;
  gap: 20px;
}

.two-columns > div {
  flex: 1;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  width: calc(33.333% - 14px);
  box-sizing: border-box;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`
  },

  htmlContent: `<h3>Bộ sưu tập ảnh tự rớt dòng:</h3>
<div class="gallery">
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200" alt="1" width="100" height="70" style="border-radius: 8px;">
  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200" alt="2" width="100" height="70" style="border-radius: 8px;">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200" alt="3" width="100" height="70" style="border-radius: 8px;">
  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200" alt="4" width="100" height="70" style="border-radius: 8px;">
</div>

<h3>Khung 2 cột đều nhau:</h3>
<div class="two-columns">
  <div style="background: white; padding: 15px; border-radius: 8px;">Cột Trái (50%)</div>
  <div style="background: white; padding: 15px; border-radius: 8px;">Cột Phải (50%)</div>
</div>

<h3>Lưới 3 cột sản phẩm & Card căn đều nút đáy:</h3>
<div class="product-grid">
  <div class="product-card card" style="background: white; padding: 15px; border-radius: 10px; min-height: 180px;">
    <div>
      <h4>Sản phẩm 1</h4>
      <p style="font-size: 13px; color: #64748b;">Mô tả ngắn gọn.</p>
    </div>
    <button style="background: #4f46e5; color: white; border: none; padding: 6px 12px; border-radius: 6px;">Chi tiết</button>
  </div>
  <div class="product-card card" style="background: white; padding: 15px; border-radius: 10px; min-height: 180px;">
    <div>
      <h4>Sản phẩm 2</h4>
      <p style="font-size: 13px; color: #64748b;">Mô tả chi tiết rất dài nhằm thử nghiệm chiều cao thẻ khác biệt.</p>
    </div>
    <button style="background: #4f46e5; color: white; border: none; padding: 6px 12px; border-radius: 6px;">Chi tiết</button>
  </div>
  <div class="product-card card" style="background: white; padding: 15px; border-radius: 10px; min-height: 180px;">
    <div>
      <h4>Sản phẩm 3</h4>
      <p style="font-size: 13px; color: #64748b;">Mô tả vừa phải.</p>
    </div>
    <button style="background: #4f46e5; color: white; border: none; padding: 6px 12px; border-radius: 6px;">Chi tiết</button>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  padding: 20px;
  margin: 0;
}
h3 {
  color: #1e293b;
  margin-top: 20px;
  margin-bottom: 10px;
}`,

  initialCssCode: `/* Buổi 10: Thực hành Flex Wrap, Lưới 2 cột, Lưới 3 cột .product-grid và Equal Height .card */
.gallery {

}

.two-columns {

}

.two-columns > div {

}

.product-grid {

}

.product-card {

}

.card {

}
`,
  solutionCssCode: `.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.two-columns {
  display: flex;
  gap: 20px;
}

.two-columns > div {
  flex: 1;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  width: calc(33.333% - 14px);
  box-sizing: border-box;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
`,

  tests: [
    {
      id: 'w10-t1',
      description: 'Bài 10.1: .gallery có display: flex, flex-wrap: wrap và gap: 10px',
      tester: (doc: Document, win: Window) => {
        const gallery = doc.querySelector('.gallery');
        if (!gallery) return false;
        const style = win.getComputedStyle(gallery);
        return style.display === 'flex' && style.flexWrap === 'wrap';
      }
    },
    {
      id: 'w10-t2',
      description: 'Bài 10.2: .two-columns có display: flex, gap: 20px và chia 2 cột đều nhau',
      tester: (doc: Document, win: Window) => {
        const cols = doc.querySelector('.two-columns');
        if (!cols) return false;
        const style = win.getComputedStyle(cols);
        return style.display === 'flex';
      }
    },
    {
      id: 'w10-t3',
      description: 'Bài 10.3: .product-grid có flex-wrap: wrap, gap: 20px và .product-card có độ rộng phù hợp cho lưới 3 cột',
      tester: (doc: Document, win: Window) => {
        const grid = doc.querySelector('.product-grid');
        const card = doc.querySelector('.product-card');
        if (!grid || !card) return false;
        const gridStyle = win.getComputedStyle(grid);
        return gridStyle.display === 'flex' && gridStyle.flexWrap === 'wrap';
      }
    },
    {
      id: 'w10-t4',
      description: 'Bài 10.4: .card có flex-direction: column và justify-content: space-between',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return style.flexDirection === 'column' && style.justifyContent === 'space-between';
      }
    }
  ]
};
