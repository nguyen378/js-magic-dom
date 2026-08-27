import { Lesson } from '@/types/lesson';

export const LESSON_B16_01: Lesson = {
  id: 'b16-01',
  title: 'Bài 16.1 (Cơ bản): Kiểm Thử Toàn Diện Mã Nguồn',
  shortDescription: 'Rà soát cấu trúc HTML Semantic đầy đủ các khối và xác nhận giao diện không bị lỗi.',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 60,
  order: 55,
  week: 16,
  durationMinutes: 30,

  story: `🎉 CHÚC MỪNG BẠN ĐÃ ĐẾN VỚI **BUỔI 16 — TỔNG KẾT KHÓA HỌC (1/2)**! 🏆

Hãy thực hiện bài kiểm tra chất lượng (QA Testing) cuối cùng:
1. Đầy đủ các thẻ semantic: \`<header>\`, \`<nav>\`, \`<main>\`, \`<section class="hero">\`, \`<section id="about">\`, \`<section id="projects">\`, \`<section id="contact">\`, \`<footer>\`.
2. Không còn link hỏng hoặc thiếu thẻ đóng.`,

  taskInstructions: [
    'Rà soát cấu trúc HTML Semantic hoàn chỉnh: Đủ `<header>`, `<nav>`, `<main>`, các `<section>` và `<footer>`',
    'Xác nhận có đủ các thẻ bài viết `.project-card` và form liên hệ'
  ],

  hints: {
    level1: 'Kiểm tra xem trang web đã có đủ cấu trúc 5 khối semantic hoàn chỉnh',
    level2: `<header>
  <div class="logo">⭐ MinhAnh Portfolio</div>
  <nav>
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>
<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
  </section>
  <section id="about"><h2>Về Bản Thân</h2><p>Học sinh lớp 8.</p></section>
  <section id="projects">
    <h2>Dự Án</h2>
    <article class="project-card"><h3>Website</h3></article>
    <article class="project-card"><h3>Game</h3></article>
    <article class="project-card"><h3>Blog</h3></article>
  </section>
  <section id="contact">
    <h2>Liên Hệ</h2>
    <form><input type="email" required><textarea></textarea><button type="submit">Gửi</button></form>
  </section>
</main>
<footer><p>© 2026 Minh Anh</p></footer>`,
    solution: `<header>
  <div class="logo">⭐ MinhAnh Portfolio</div>
  <nav>
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>
<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
  </section>
  <section id="about"><h2>Về Bản Thân</h2><p>Học sinh lớp 8.</p></section>
  <section id="projects">
    <h2>Dự Án</h2>
    <article class="project-card"><h3>Website</h3></article>
    <article class="project-card"><h3>Game</h3></article>
    <article class="project-card"><h3>Blog</h3></article>
  </section>
  <section id="contact">
    <h2>Liên Hệ</h2>
    <form><input type="email" required><textarea></textarea><button type="submit">Gửi</button></form>
  </section>
</main>
<footer><p>© 2026 Minh Anh</p></footer>`
  },

  htmlContent: `<!-- Hãy viết và rà soát mã nguồn hoàn chỉnh của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  background: #0f172a;
  color: #f8fafc;
}
header, footer {
  background: #1e293b;
  padding: 16px 24px;
}
main {
  max-width: 680px;
  margin: 0 auto;
  padding: 24px 20px;
}
section {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}`,

  initialHtmlCode: `<!-- Bài 16.1: Rà soát và hoàn thiện mã nguồn HTML Semantic của website -->\n`,
  solutionHtmlCode: `<header>
  <div class="logo">⭐ MinhAnh Portfolio</div>
  <nav>
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>
<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
  </section>
  <section id="about"><h2>Về Bản Thân</h2><p>Học sinh lớp 8.</p></section>
  <section id="projects">
    <h2>Dự Án</h2>
    <article class="project-card"><h3>Website</h3></article>
    <article class="project-card"><h3>Game</h3></article>
    <article class="project-card"><h3>Blog</h3></article>
  </section>
  <section id="contact">
    <h2>Liên Hệ</h2>
    <form><input type="email" required><textarea></textarea><button type="submit">Gửi</button></form>
  </section>
</main>
<footer><p>© 2026 Minh Anh</p></footer>`,

  tests: [
    {
      id: 'b16-01-t1',
      description: 'Có đầy đủ cấu trúc Semantic: Header, Hero, About, Projects, Contact, Footer',
      tester: (doc: Document) => {
        const header = doc.querySelector('header');
        const hero = doc.querySelector('.hero, section');
        const about = doc.querySelector('#about');
        const projects = doc.querySelector('#projects');
        const contact = doc.querySelector('#contact');
        const footer = doc.querySelector('footer');
        return !!header && !!hero && !!about && !!projects && !!contact && !!footer;
      }
    }
  ]
};

export const LESSON_B16_02: Lesson = {
  id: 'b16-02',
  title: 'Bài 16.2 (Nâng cao): Clean Code & Thuyết Trình Tốt Nghiệp',
  shortDescription: 'Hoàn thiện bài thuyết trình sản phẩm website cá nhân và xuất sắc nhận Huy Hiệu Tốt Nghiệp!',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'hard',
  xpReward: 100,
  order: 56,
  week: 16,
  durationMinutes: 30,

  story: `👑 **BÀI TẬP CUỐI CÙNG — BÁO CÁO THUYẾT TRÌNH TỐT NGHIỆP**! 🎓🌟

Bạn đã chính thức chinh phục toàn bộ lộ trình 16 tuần từ con số 0:
- HTML5 Foundation
- CSS Styling & Box Model
- CSS Position & Effects
- Flexbox & Responsive Mobile
- Đồ án Website Cá Nhân Hoàn Chỉnh!

Hãy hoàn thành bài tập cuối cùng để nhận danh hiệu **Tác Giả Website Cá Nhân**!`,

  taskInstructions: [
    'Thêm phần giới thiệu bài thuyết trình (Tên tác giả, mục tiêu sản phẩm, điểm tâm đắc nhất)',
    'Nhấn nút Gửi Bài & Nhận Huy Hiệu Tốt Nghiệp Khóa Học!'
  ],

  hints: {
    level1: 'Viết lời giới thiệu báo cáo của bạn trong thẻ <section class="presentation">',
    level2: `<section class="presentation">
  <h2>Bài Thuyết Trình: Website Cá Nhân Của Tôi</h2>
  <p>Tác giả: Nguyễn Minh Anh - Lớp 8A</p>
  <p>Công nghệ: HTML5 Semantic, CSS3 Flexbox, Responsive Web Design.</p>
  <p>Điểm tâm đắc: Website tương thích mọi thiết bị di động và có hiệu ứng hover 3D bắt mắt.</p>
</section>`,
    solution: `<section class="presentation">
  <h2>Bài Thuyết Trình: Website Cá Nhân Của Tôi</h2>
  <p>Tác giả: Nguyễn Minh Anh - Lớp 8A</p>
  <p>Công nghệ: HTML5 Semantic, CSS3 Flexbox, Responsive Web Design.</p>
  <p>Điểm tâm đắc: Website tương thích mọi thiết bị di động và có hiệu ứng hover 3D bắt mắt.</p>
</section>`
  },

  htmlContent: `<!-- Hãy viết nội dung bài thuyết trình của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 30px 20px;
  background: #0f172a;
  color: #f8fafc;
}
.presentation {
  max-width: 600px;
  margin: 0 auto;
  background: #1e293b;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #334155;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
h2 {
  color: #38bdf8;
  margin-top: 0;
}
p {
  color: #94a3b8;
  line-height: 1.6;
}`,

  initialHtmlCode: `<!-- Bài 16.2: Viết nội dung bài báo cáo thuyết trình tốt nghiệp của bạn -->\n`,
  solutionHtmlCode: `<section class="presentation">
  <h2>Bài Thuyết Trình: Website Cá Nhân Của Tôi</h2>
  <p>Tác giả: Nguyễn Minh Anh - Lớp 8A</p>
  <p>Công nghệ: HTML5 Semantic, CSS3 Flexbox, Responsive Web Design.</p>
  <p>Điểm tâm đắc: Website tương thích mọi thiết bị di động và có hiệu ứng hover 3D bắt mắt.</p>
</section>`,

  tests: [
    {
      id: 'b16-02-t1',
      description: 'Có nội dung bài thuyết trình với tiêu đề và các đoạn văn mô tả',
      tester: (doc: Document) => {
        const h2 = doc.querySelector('h2');
        const ps = doc.querySelectorAll('p');
        return !!h2 && ps.length >= 2;
      }
    }
  ]
};

export const B16_LESSONS: Lesson[] = [
  LESSON_B16_01,
  LESSON_B16_02,
];
