import { Lesson } from '@/types/lesson';

export const LESSON_B11_01: Lesson = {
  id: 'b11-01',
  title: 'Bài 11.1 (Cơ bản): Khai Báo Cú Pháp Media Query',
  shortDescription: 'Sử dụng @media (max-width: 768px) để đổi màu nền toàn trang khi xem trên màn hình nhỏ.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 41,
  week: 11,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 11.1: Thiết kế thích ứng (Responsive Web)**! 📱💻

Media Query cho phép bạn áp dụng các luật CSS riêng biệt khi màn hình đạt kích thước chỉ định:
\`\`\`css
@media (max-width: 768px) {
  body {
    background-color: #eef2f7;
  }
}
\`\`\``,

  taskInstructions: [
    'Khai báo khối truy vấn `@media (max-width: 768px)`',
    'Bên trong khối media query, đổi màu nền `body`: `background-color: #eef2f7;`'
  ],

  hints: {
    level1: 'Viết cú pháp @media (max-width: 768px) { body { background-color: #eef2f7; } }',
    level2: `@media (max-width: 768px) {
  body {
    background-color: #eef2f7;
  }
}`,
    solution: `@media (max-width: 768px) {
  body {
    background-color: #eef2f7;
  }
}`
  },

  htmlContent: `<div style="text-align: center; padding: 40px 20px;">
  <h2>Thử Nghiệm Media Query</h2>
  <p>Khi màn hình co lại nhỏ hơn hoặc bằng 768px, màu nền toàn trang sẽ tự động đổi sang màu xám lam #eef2f7!</p>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background-color: #ffffff;
  margin: 0;
  padding: 20px;
}`,

  initialCssCode: `/* Bài 11.1: Viết Media Query đổi màu nền body khi màn hình <= 768px */
@media (max-width: 768px) {
  body {

  }
}
`,
  solutionCssCode: `@media (max-width: 768px) {
  body {
    background-color: #eef2f7;
  }
}
`,

  tests: [
    {
      id: 'b11-01-t1',
      description: 'Có khai báo @media (max-width: 768px) và body { background-color: #eef2f7; }',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        const hasMedia = styles.includes('@media') && styles.includes('max-width') && styles.includes('768px');
        const hasColor = styles.includes('#eef2f7') || styles.includes('rgb(238, 242, 247)');
        return hasMedia && hasColor;
      }
    }
  ]
};

export const LESSON_B11_02: Lesson = {
  id: 'b11-02',
  title: 'Bài 11.2 (Cơ bản): Thu Nhỏ Tiêu Đề Và Ảnh Trên Mobile',
  shortDescription: 'Giảm kích cỡ chữ h1 xuống 22px và co giãn ảnh banner 100% khi xem trên thiết bị di động.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 42,
  week: 11,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 11.2: Tối ưu chữ và ảnh trên Mobile**! 📱🔤

Trên màn hình điện thoại nhỏ hẹp:
- Tiêu đề quá to sẽ gây tràn màn hình: cần giảm \`h1 { font-size: 22px; }\`.
- Ảnh banner cố định sẽ bị tràn ngang: cần đặt \`.banner-img { width: 100%; height: auto; }\`.`,

  taskInstructions: [
    'Bên trong `@media (max-width: 768px)`, thiết lập cho `h1`: `font-size: 22px;`',
    'Thiết lập cho `.banner-img`: `width: 100%; height: auto;`'
  ],

  hints: {
    level1: 'Đặt h1 { font-size: 22px; } và .banner-img { width: 100%; height: auto; } trong khối media query',
    level2: `@media (max-width: 768px) {
  h1 {
    font-size: 22px;
  }
  .banner-img {
    width: 100%;
    height: auto;
  }
}`,
    solution: `@media (max-width: 768px) {
  h1 {
    font-size: 22px;
  }
  .banner-img {
    width: 100%;
    height: auto;
  }
}`
  },

  htmlContent: `<div class="hero">
  <h1>Tiêu Đề Trang Web Cực Lớn Trên Máy Tính</h1>
  <img class="banner-img" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" alt="Banner" style="width: 500px; border-radius: 12px; display: block; margin: 16px auto;">
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 20px;
  margin: 0;
  background: #f8fafc;
}
h1 {
  font-size: 36px;
  color: #1e293b;
  text-align: center;
}`,

  initialCssCode: `/* Bài 11.2: Thu nhỏ h1 và co giãn .banner-img trên Mobile */
@media (max-width: 768px) {
  h1 {

  }

  .banner-img {

  }
}
`,
  solutionCssCode: `@media (max-width: 768px) {
  h1 {
    font-size: 22px;
  }

  .banner-img {
    width: 100%;
    height: auto;
  }
}
`,

  tests: [
    {
      id: 'b11-02-t1',
      description: 'Trong media query, h1 có font-size: 22px và .banner-img có width: 100%',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('22px') && styles.includes('banner-img') && styles.includes('100%');
      }
    }
  ]
};

export const LESSON_B11_03: Lesson = {
  id: 'b11-03',
  title: 'Bài 11.3 (Nâng cao): Chuyển Lưới 3 Cột Sang 1 Cột Trên Mobile',
  shortDescription: 'Viết Media Query để chuyển các thẻ sản phẩm từ độ rộng 33% thành 100% khi xem trên màn hình nhỏ.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 35,
  order: 43,
  week: 11,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 11.3: Chuyển đổi lưới 3 cột thành 1 cột**! 📱📐

Trên máy tính, lưới 3 cột hiển thị rất đẹp. Nhưng trên màn hình điện thoại hẹp, mỗi cột cần mở rộng trọn vẹn màn hình:
\`\`\`css
@media (max-width: 768px) {
  .product-card {
    width: 100%;
  }
}
\`\`\``,

  taskInstructions: [
    'Trong khối `@media (max-width: 768px)`, thiết lập cho `.product-card`: `width: 100%;`'
  ],

  hints: {
    level1: 'Viết luật: @media (max-width: 768px) { .product-card { width: 100%; } }',
    level2: `@media (max-width: 768px) {
  .product-card {
    width: 100%;
  }
}`,
    solution: `@media (max-width: 768px) {
  .product-card {
    width: 100%;
  }
}`
  },

  htmlContent: `<div class="product-grid" style="display: flex; flex-wrap: wrap; gap: 15px;">
  <div class="product-card" style="width: calc(33.333% - 10px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <h4 style="margin-top: 0; color: #4f46e5;">Thẻ Dự Án 1</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Nội dung dự án 1.</p>
  </div>
  <div class="product-card" style="width: calc(33.333% - 10px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <h4 style="margin-top: 0; color: #4f46e5;">Thẻ Dự Án 2</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Nội dung dự án 2.</p>
  </div>
  <div class="product-card" style="width: calc(33.333% - 10px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <h4 style="margin-top: 0; color: #4f46e5;">Thẻ Dự Án 3</h4>
    <p style="margin: 0; color: #64748b; font-size: 13px;">Nội dung dự án 3.</p>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f1f5f9;
}`,

  initialCssCode: `/* Bài 11.3: Chuyển .product-card thành width 100% trên Mobile */
@media (max-width: 768px) {
  .product-card {

  }
}
`,
  solutionCssCode: `@media (max-width: 768px) {
  .product-card {
    width: 100%;
  }
}
`,

  tests: [
    {
      id: 'b11-03-t1',
      description: 'Trong media query, .product-card có width: 100%',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('@media') && styles.includes('product-card') && styles.includes('100%');
      }
    }
  ]
};

export const LESSON_B11_04: Lesson = {
  id: 'b11-04',
  title: 'Bài 11.4 (Nâng cao): Chuyển Menu Ngang Thành Dọc Trên Mobile',
  shortDescription: 'Sử dụng flex-direction: column và text-align: center để xếp chồng các liên kết menu trên điện thoại.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 40,
  order: 44,
  week: 11,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 11.4: Chuyển đổi Menu ngang thành Menu dọc**! 🍔📱

Trên máy tính các liên kết menu nằm ngang (\`row\`). Khi sang điện thoại, chúng ta chuyển thành hàng dọc:
\`\`\`css
@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}
\`\`\``,

  taskInstructions: [
    'Trong `@media (max-width: 768px)`, thiết lập cho `.nav-menu`: `flex-direction: column;`',
    'Căn giữa chữ: `text-align: center;`'
  ],

  hints: {
    level1: 'Viết luật trong media query: .nav-menu { flex-direction: column; text-align: center; }',
    level2: `@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}`,
    solution: `@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}`
  },

  htmlContent: `<nav class="navbar" style="background: white; padding: 14px 20px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
  <ul class="nav-menu" style="display: flex; gap: 16px; list-style: none; margin: 0; padding: 0;">
    <li><a href="#" style="color: #4f46e5; text-decoration: none; font-weight: bold;">Trang Chủ</a></li>
    <li><a href="#" style="color: #64748b; text-decoration: none; font-weight: 600;">Dự Án</a></li>
    <li><a href="#" style="color: #64748b; text-decoration: none; font-weight: 600;">Liên Hệ</a></li>
  </ul>
</nav>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f8fafc;
}`,

  initialCssCode: `/* Bài 11.4: Chuyển .nav-menu thành cột dọc trên Mobile */
@media (max-width: 768px) {
  .nav-menu {

  }
}
`,
  solutionCssCode: `@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}
`,

  tests: [
    {
      id: 'b11-04-t1',
      description: 'Trong media query, .nav-menu có flex-direction: column và text-align: center',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('@media') && styles.includes('nav-menu') && styles.includes('column');
      }
    }
  ]
};

export const B11_LESSONS: Lesson[] = [
  LESSON_B11_01,
  LESSON_B11_02,
  LESSON_B11_03,
  LESSON_B11_04,
];
