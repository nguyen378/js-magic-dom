import { Lesson } from '@/types/lesson';

export const LESSON_B13_01: Lesson = {
  id: 'b13-01',
  title: 'Bài 13.1 (Cơ bản): Dựng Khung HTML 3 Khối Chính',
  shortDescription: 'Xây dựng 3 khối nền tảng <header>, <main> và <footer> cho Website Cá Nhân.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 50,
  order: 49,
  week: 13,
  durationMinutes: 30,

  story: `Chào mừng bạn đến với **Bài 13.1: Đồ Án Cuối Khóa — Khởi động Khung HTML (1/2)**! 👑

Bắt đầu xây dựng trang web cá nhân của chính bạn với 3 khối cốt lõi:
- \`<header>\`: Chứa Logo tên bạn và thanh điều hướng \`<nav>\`.
- \`<main>\`: Khu vực trung tâm chứa nội dung giới thiệu bản thân.
- \`<footer>\`: Chân trang chứa dòng chữ bản quyền.`,

  taskInstructions: [
    'Tạo thẻ `<header>` chứa Logo và `<nav>`',
    'Tạo thẻ `<main>` chứa ít nhất 1 thẻ `<section>` giới thiệu',
    'Tạo thẻ `<footer>` chứa dòng chữ bản quyền'
  ],

  hints: {
    level1: 'Cấu trúc: <header><div class="logo">...</div><nav>...</nav></header><main><section>...</section></main><footer>...</footer>',
    level2: `<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Về Tôi</a>
  </nav>
</header>
<main>
  <section id="about">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 đam mê sáng tạo lập trình web.</p>
  </section>
</main>
<footer>
  <p>© 2026 Minh Anh</p>
</footer>`,
    solution: `<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Về Tôi</a>
  </nav>
</header>
<main>
  <section id="about">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 đam mê sáng tạo lập trình web.</p>
  </section>
</main>
<footer>
  <p>© 2026 Minh Anh</p>
</footer>`
  },

  htmlContent: `<!-- Hãy viết cấu trúc HTML 3 khối cho trang web của bạn bên dưới -->\n`,
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
  padding: 30px 20px;
  max-width: 600px;
  margin: 0 auto;
}
section {
  background: #1e293b;
  padding: 24px;
  border-radius: 12px;
}
h1 {
  color: #38bdf8;
  margin-top: 0;
}`,

  initialHtmlCode: `<!-- Bài 13.1: Dựng khung gồm header, main (chứa section) và footer -->\n`,
  solutionHtmlCode: `<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Về Tôi</a>
  </nav>
</header>
<main>
  <section id="about">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 đam mê sáng tạo lập trình web.</p>
  </section>
</main>
<footer>
  <p>© 2026 Minh Anh</p>
</footer>`,

  tests: [
    {
      id: 'b13-01-t1',
      description: 'Có đầy đủ 3 thẻ <header>, <main> và <footer>',
      tester: (doc: Document) => {
        const header = doc.querySelector('header');
        const main = doc.querySelector('main');
        const footer = doc.querySelector('footer');
        return !!header && !!main && !!footer;
      }
    }
  ]
};

export const LESSON_B13_02: Lesson = {
  id: 'b13-02',
  title: 'Bài 13.2 (Nâng cao): Khung HTML 5 Khối Hoàn Chỉnh',
  shortDescription: 'Hoàn thiện 5 khối: Header điều hướng, Hero Banner, Giới thiệu, Lưới dự án và Form liên hệ chuẩn validation.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'hard',
  xpReward: 60,
  order: 50,
  week: 13,
  durationMinutes: 30,

  story: `Chào mừng bạn đến với **Bài 13.2: Đồ Án Cuối Khóa — Khung HTML 5 Khối Hoàn Chỉnh (2/2)**! 🏛️🌟

Xây dựng toàn diện 5 khối nội dung của Website Cá Nhân:
1. \`<header>\` & \`<nav>\`: Logo và link \`href="#about"\`, \`href="#projects"\`, \`href="#contact"\`.
2. \`<section class="hero">\`: Banner chào mừng kèm ảnh đại diện \`<img>\` và \`<h1>\`.
3. \`<section id="about">\`: Giới thiệu bản thân.
4. \`<section id="projects">\`: Lưới ít nhất 3 thẻ bài viết \`<article class="project-card">\`.
5. \`<section id="contact">\`: Biểu mẫu \`<form>\` có \`required\`, email, \`<textarea>\` và nút gửi.`,

  taskInstructions: [
    'Tạo `<header>` và `<nav>` có các liên kết nội bộ `href="#about"`, `href="#projects"`, `href="#contact"`',
    'Tạo khối Hero banner (chứa `<h1>`, `<p>`, `<img>` avatar) và `<section id="about">`',
    'Tạo `<section id="projects">` chứa ít nhất 3 thẻ `<article class="project-card">`',
    'Tạo `<section id="contact">` chứa `<form>` (có ô `required`, email, `<textarea>`, nút submit) và `<footer>`'
  ],

  hints: {
    level1: 'Sử dụng cấu trúc tuần tự: header, main (hero, #about, #projects, #contact), footer',
    level2: `<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>
<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
    <h1>Tôi là Minh Anh</h1>
    <p>Lập trình viên web tương lai</p>
  </section>
  <section id="about">
    <h2>Giới Thiệu</h2>
    <p>Đam mê công nghệ và sáng tạo.</p>
  </section>
  <section id="projects">
    <h2>Dự Án</h2>
    <article class="project-card"><h3>Dự án 1</h3><p>Website</p></article>
    <article class="project-card"><h3>Dự án 2</h3><p>Game</p></article>
    <article class="project-card"><h3>Dự án 3</h3><p>Báo</p></article>
  </section>
  <section id="contact">
    <h2>Liên Hệ</h2>
    <form>
      <input type="text" placeholder="Họ tên" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Tin nhắn"></textarea>
      <button type="submit">Gửi</button>
    </form>
  </section>
</main>
<footer><p>© 2026 Minh Anh</p></footer>`,
    solution: `<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>
<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
    <h1>Tôi là Minh Anh</h1>
    <p>Lập trình viên web tương lai</p>
  </section>
  <section id="about">
    <h2>Giới Thiệu</h2>
    <p>Đam mê công nghệ và sáng tạo.</p>
  </section>
  <section id="projects">
    <h2>Dự Án</h2>
    <article class="project-card"><h3>Dự án 1</h3><p>Website</p></article>
    <article class="project-card"><h3>Dự án 2</h3><p>Game</p></article>
    <article class="project-card"><h3>Dự án 3</h3><p>Báo</p></article>
  </section>
  <section id="contact">
    <h2>Liên Hệ</h2>
    <form>
      <input type="text" placeholder="Họ tên" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Tin nhắn"></textarea>
      <button type="submit">Gửi</button>
    </form>
  </section>
</main>
<footer><p>© 2026 Minh Anh</p></footer>`
  },

  htmlContent: `<!-- Hãy viết bộ khung HTML 5 khối của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  background: #0f172a;
  color: #f8fafc;
}
header, footer {
  background: #1e293b;
  padding: 16px 30px;
}
main {
  max-width: 680px;
  margin: 0 auto;
  padding: 30px 20px;
}
section {
  background: #1e293b;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}`,

  initialHtmlCode: `<!-- Bài 13.2: Xây dựng 5 khối HTML Semantic hoàn chỉnh -->\n`,
  solutionHtmlCode: `<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>
<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
    <h1>Tôi là Minh Anh</h1>
    <p>Lập trình viên web tương lai</p>
  </section>
  <section id="about">
    <h2>Giới Thiệu</h2>
    <p>Đam mê công nghệ và sáng tạo.</p>
  </section>
  <section id="projects">
    <h2>Dự Án</h2>
    <article class="project-card"><h3>Dự án 1</h3><p>Website</p></article>
    <article class="project-card"><h3>Dự án 2</h3><p>Game</p></article>
    <article class="project-card"><h3>Dự án 3</h3><p>Báo</p></article>
  </section>
  <section id="contact">
    <h2>Liên Hệ</h2>
    <form>
      <input type="text" placeholder="Họ tên" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Tin nhắn"></textarea>
      <button type="submit">Gửi</button>
    </form>
  </section>
</main>
<footer><p>© 2026 Minh Anh</p></footer>`,

  tests: [
    {
      id: 'b13-02-t1',
      description: 'Có Header & Nav điều hướng, Hero banner và Section #about',
      tester: (doc: Document) => {
        const header = doc.querySelector('header');
        const nav = doc.querySelector('nav');
        const about = doc.querySelector('#about');
        return !!header && !!nav && !!about;
      }
    },
    {
      id: 'b13-02-t2',
      description: 'Có Section #projects chứa ít nhất 3 thẻ bài viết .project-card',
      tester: (doc: Document) => {
        const cards = doc.querySelectorAll('#projects article, .project-card');
        return cards.length >= 3;
      }
    },
    {
      id: 'b13-02-t3',
      description: 'Có Section #contact chứa form (required, email, textarea, button submit) và footer',
      tester: (doc: Document) => {
        const form = doc.querySelector('#contact form');
        const req = form?.querySelector('[required]');
        const email = form?.querySelector('input[type="email"]');
        const footer = doc.querySelector('footer');
        return !!form && !!req && !!email && !!footer;
      }
    }
  ]
};

export const B13_LESSONS: Lesson[] = [
  LESSON_B13_01,
  LESSON_B13_02,
];
