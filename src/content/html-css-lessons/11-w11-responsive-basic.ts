import { Lesson } from '@/types/lesson';

export const LESSON_W11: Lesson = {
  id: 'w11-responsive-basic',
  title: 'Buổi 11: Thiết Kế Thích Ứng (Responsive Web)',
  shortDescription: 'Cú pháp Media Query @media (max-width: 768px), chuyển đổi layout đa cột thành 1 cột trên điện thoại, thu nhỏ font chữ và chuyển menu dọc.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 120,
  order: 11,
  week: 11,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 11: Thiết kế thích ứng (Responsive Web)**! 📱💻

Hơn 60% người dùng truy cập web bằng điện thoại thông minh. Thiết kế Responsive giúp giao diện tự động biến đổi linh hoạt:
- **Thẻ meta Viewport**: \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` giúp trình duyệt di động hiển thị đúng tỉ lệ 100%.
- **Cú pháp Media Query**: \`@media (max-width: 768px) { ... }\` (Áp dụng các luật CSS riêng khi màn hình nhỏ hơn hoặc bằng 768px).
- **Các biến đổi kinh điển trên Mobile**:
  - Giảm cỡ chữ tiêu đề (\`h1 { font-size: 22px; }\`).
  - Đặt ảnh co giãn \`.banner-img { width: 100%; height: auto; }\`.
  - Chuyển lưới nhiều cột thành 1 cột chiếm trọn màn hình (\`.product-card { width: 100%; }\`).
  - Chuyển thanh Menu ngang thành cột dọc (\`.nav-menu { flex-direction: column; }\`).`,

  taskInstructions: [
    '🟢 Bài 11.1: Viết cú pháp `@media (max-width: 768px)` để đổi màu nền toàn trang `body` thành `#eef2f7` khi xem trên màn hình nhỏ',
    '🟢 Bài 11.2: Trong `@media (max-width: 768px)`, giảm cỡ chữ `h1` xuống `22px` và đặt ảnh `.banner-img` có `width: 100%; height: auto;`',
    '🟡 Bài 11.3: Trong `@media (max-width: 768px)`, đổi chiều rộng mỗi thẻ `.product-card` thành `width: 100%;` khi xem trên điện thoại',
    '🟡 Bài 11.4: Trong `@media (max-width: 768px)`, chuyển đổi thanh `.nav-menu` từ hàng ngang thành hàng dọc bằng `flex-direction: column; text-align: center;`'
  ],

  hints: {
    level1: 'Viết toàn bộ các thay đổi vào bên trong khối @media (max-width: 768px) { ... }',
    level2: `/* Gợi ý cú pháp */
@media (max-width: 768px) {
  body {
    background-color: #eef2f7;
  }

  h1 {
    font-size: 22px;
  }

  .banner-img {
    width: 100%;
    height: auto;
  }

  .product-card {
    width: 100%;
  }

  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}`,
    solution: `@media (max-width: 768px) {
  body {
    background-color: #eef2f7;
  }

  h1 {
    font-size: 22px;
  }

  .banner-img {
    width: 100%;
    height: auto;
  }

  .product-card {
    width: 100%;
  }

  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}`
  },

  htmlContent: `<nav class="navbar" style="background: white; padding: 12px 20px; border-radius: 12px; margin-bottom: 20px;">
  <ul class="nav-menu" style="display: flex; gap: 16px; list-style: none; margin: 0; padding: 0;">
    <li><a href="#" style="color: #4f46e5; text-decoration: none; font-weight: bold;">Trang chủ</a></li>
    <li><a href="#" style="color: #64748b; text-decoration: none;">Sản phẩm</a></li>
    <li><a href="#" style="color: #64748b; text-decoration: none;">Liên hệ</a></li>
  </ul>
</nav>

<div class="hero">
  <h1>Trang Web Tương Thích Mọi Thiết Bị</h1>
  <img class="banner-img" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" alt="Banner" style="width: 500px; border-radius: 14px; display: block; margin-bottom: 20px;">
</div>

<div class="product-grid" style="display: flex; flex-wrap: wrap; gap: 15px;">
  <div class="product-card" style="width: calc(33.333% - 10px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box;">
    <h4>Card 1</h4>
    <p style="font-size: 13px; color: #64748b;">Nội dung card.</p>
  </div>
  <div class="product-card" style="width: calc(33.333% - 10px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box;">
    <h4>Card 2</h4>
    <p style="font-size: 13px; color: #64748b;">Nội dung card.</p>
  </div>
  <div class="product-card" style="width: calc(33.333% - 10px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box;">
    <h4>Card 3</h4>
    <p style="font-size: 13px; color: #64748b;">Nội dung card.</p>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #ffffff;
  padding: 20px;
  margin: 0;
}
h1 {
  font-size: 32px;
  color: #1e293b;
}`,

  initialCssCode: `/* Buổi 11: Viết Media Query @media (max-width: 768px) để responsive giao diện */
@media (max-width: 768px) {
  body {

  }

  h1 {

  }

  .banner-img {

  }

  .product-card {

  }

  .nav-menu {

  }
}
`,
  solutionCssCode: `@media (max-width: 768px) {
  body {
    background-color: #eef2f7;
  }

  h1 {
    font-size: 22px;
  }

  .banner-img {
    width: 100%;
    height: auto;
  }

  .product-card {
    width: 100%;
  }

  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}
`,

  tests: [
    {
      id: 'w11-t1',
      description: 'Bài 11.1: Có khai báo @media (max-width: 768px) và đổi màu nền body thành #eef2f7',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('@media') && styles.includes('max-width') && (styles.includes('#eef2f7') || styles.includes('rgb(238, 242, 247)'));
      }
    },
    {
      id: 'w11-t2',
      description: 'Bài 11.2: Trong media query, h1 có font-size: 22px và .banner-img có width: 100%',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('22px') && styles.includes('banner-img') && styles.includes('100%');
      }
    },
    {
      id: 'w11-t3',
      description: 'Bài 11.3: Trong media query, .product-card có width: 100%',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('product-card') && styles.includes('100%');
      }
    },
    {
      id: 'w11-t4',
      description: 'Bài 11.4: Trong media query, .nav-menu có flex-direction: column và text-align: center',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('nav-menu') && styles.includes('column');
      }
    }
  ]
};
