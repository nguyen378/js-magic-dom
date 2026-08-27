import { Lesson } from '@/types/lesson';

export const LESSON_W13: Lesson = {
  id: 'w13-capstone-hero',
  title: 'Buổi 13: Dự Án Cuối Khóa (1/4) — Bộ Khung HTML Semantic',
  shortDescription: 'Xây dựng bộ khung HTML Semantic hoàn chỉnh cho Website Cá Nhân gồm 5 khối: Header điều hướng, Hero Banner, Giới thiệu, Lưới dự án và Form liên hệ chuẩn validation.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 150,
  order: 13,
  week: 13,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 13: Dự án cuối khóa (1/4) — Xây dựng bộ khung HTML Semantic**! 👑

Trong 4 buổi đồ án cuối khóa (Buổi 13 đến 16), bạn sẽ hoàn thành một Website Cá Nhân hoàn chỉnh:
- **Buổi 13**: Dựng bộ khung HTML Semantic chuẩn 5 khối:
  1. \`<header>\` & \`<nav>\`: Logo thương hiệu và liên kết điều hướng nội bộ (\`href="#about"\`, \`href="#projects"\`, \`href="#contact"\`).
  2. \`<section class="hero">\`: Banner chào mừng với avatar \`<img>\`, tiêu đề \`<h1>\` và câu slogan.
  3. \`<section id="about">\`: Đoạn văn giới thiệu bản thân và danh sách sở thích/kỹ năng \`<ul>\`.
  4. \`<section id="projects">\`: Lưới các dự án tâm đắc (ít nhất 3 thẻ \`<article class="project-card">\`).
  5. \`<section id="contact">\`: Biểu mẫu liên hệ \`<form>\` có kiểm tra ràng buộc \`required\`, email và nút submit.
  6. \`<footer>\`: Dòng chữ bản quyền tác giả.`,

  taskInstructions: [
    '🟢 Nhiệm vụ 1: Xây dựng `<header>` chứa Logo thương hiệu và thanh `<nav>` có các liên kết nội bộ `href="#about"`, `href="#projects"`, `href="#contact"`',
    '🟢 Nhiệm vụ 2: Xây dựng khối `<section class="hero">` (chứa `<h1>`, `<p>`, `<img>` avatar) và `<section id="about">` giới thiệu bản thân',
    '🟡 Nhiệm vụ 3: Xây dựng `<section id="projects">` chứa ít nhất 3 thẻ bài viết `<article class="project-card">` (mỗi card có tiêu đề và mô tả)',
    '🟡 Nhiệm vụ 4: Xây dựng `<section id="contact">` chứa `<form>` liên hệ (input text, input email có `required`, `textarea`, nút submit) và thẻ `<footer>`'
  ],

  hints: {
    level1: 'Sử dụng các thẻ HTML semantic: <header>, <nav>, <section>, <article>, <form>, <footer> theo thứ tự.',
    level2: `<!-- Gợi ý khung HTML mẫu -->
<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Giới Thiệu</a> |
    <a href="#projects">Dự Án</a> |
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>

<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar" class="avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 • Đam mê sáng tạo công nghệ & lập trình web</p>
  </section>

  <section id="about">
    <h2>Về Bản Thân</h2>
    <p>Tôi bắt đầu học lập trình web từ con số 0 và đã tự tay tạo nên trang web này.</p>
  </section>

  <section id="projects">
    <h2>Dự Án Của Tôi</h2>
    <div class="project-grid">
      <article class="project-card">
        <h3>Trang Web Cá Nhân</h3>
        <p>Xây dựng bằng HTML5 & CSS3 chuẩn Responsive.</p>
      </article>
      <article class="project-card">
        <h3>Game Đập Chuột</h3>
        <p>Ứng dụng tương tác DOM cực kỳ vui nhộn.</p>
      </article>
      <article class="project-card">
        <h3>Bảng Tin Học Đường</h3>
        <p>Website chia sẻ kinh nghiệm học tập trực tuyến.</p>
      </article>
    </div>
  </section>

  <section id="contact">
    <h2>Liên Hệ Với Tôi</h2>
    <form>
      <input type="text" placeholder="Họ và tên của bạn" required>
      <input type="email" placeholder="Email của bạn" required>
      <textarea placeholder="Nội dung lời nhắn" required></textarea>
      <button type="submit">Gửi Tin Nhắn</button>
    </form>
  </section>
</main>

<footer>
  <p>© 2026 Bản quyền thuộc về Minh Anh</p>
</footer>`,
    solution: `<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Giới Thiệu</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>

<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar" class="avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 • Đam mê sáng tạo công nghệ & lập trình web</p>
  </section>

  <section id="about">
    <h2>Về Bản Thân</h2>
    <p>Tôi bắt đầu học lập trình web từ con số 0 và đã tự tay tạo nên trang web này.</p>
  </section>

  <section id="projects">
    <h2>Dự Án Của Tôi</h2>
    <div class="project-grid">
      <article class="project-card">
        <h3>Trang Web Cá Nhân</h3>
        <p>Xây dựng bằng HTML5 & CSS3 chuẩn Responsive.</p>
      </article>
      <article class="project-card">
        <h3>Game Đập Chuột</h3>
        <p>Ứng dụng tương tác DOM cực kỳ vui nhộn.</p>
      </article>
      <article class="project-card">
        <h3>Bảng Tin Học Đường</h3>
        <p>Website chia sẻ kinh nghiệm học tập trực tuyến.</p>
      </article>
    </div>
  </section>

  <section id="contact">
    <h2>Liên Hệ Với Tôi</h2>
    <form>
      <input type="text" placeholder="Họ và tên của bạn" required>
      <input type="email" placeholder="Email của bạn" required>
      <textarea placeholder="Nội dung lời nhắn" required></textarea>
      <button type="submit">Gửi Tin Nhắn</button>
    </form>
  </section>
</main>

<footer>
  <p>© 2026 Bản quyền thuộc về Minh Anh</p>
</footer>`
  },

  htmlContent: `<!-- Buổi 13: Hãy xây dựng bộ khung HTML Semantic 5 khối của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #0f172a;
  color: #f8fafc;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  background: #1e293b;
  border-bottom: 1px solid #334155;
}
header .logo {
  font-weight: 800;
  font-size: 18px;
  color: #38bdf8;
}
nav a {
  color: #94a3b8;
  text-decoration: none;
  margin-left: 16px;
  font-weight: 600;
  font-size: 14px;
}
main {
  max-width: 720px;
  margin: 0 auto;
  padding: 30px 20px;
}
section {
  background: #1e293b;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 24px;
  border: 1px solid #334155;
}
.hero {
  text-align: center;
}
.avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 3px solid #38bdf8;
  object-fit: cover;
  margin-bottom: 12px;
}
h1 {
  font-size: 26px;
  color: #38bdf8;
  margin: 0 0 8px;
}
h2 {
  color: #818cf8;
  font-size: 20px;
  margin-top: 0;
}
.project-card {
  background: #0f172a;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 12px;
  border: 1px solid #334155;
}
.project-card h3 {
  margin: 0 0 6px;
  color: #38bdf8;
  font-size: 16px;
}
input, textarea {
  width: 100%;
  padding: 8px 12px;
  background: #0f172a;
  border: 1px solid #334155;
  color: white;
  border-radius: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
button {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
footer {
  text-align: center;
  padding: 20px;
  color: #64748b;
  font-size: 13px;
}`,

  initialHtmlCode: `<!-- Buổi 13: Xây dựng toàn bộ bộ khung HTML Semantic cho Website Cá Nhân -->\n`,
  solutionHtmlCode: `<header>
  <div class="logo">🚀 MinhAnh Dev</div>
  <nav>
    <a href="#about">Giới Thiệu</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>

<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar" class="avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 • Đam mê sáng tạo công nghệ & lập trình web</p>
  </section>

  <section id="about">
    <h2>Về Bản Thân</h2>
    <p>Tôi bắt đầu học lập trình web từ con số 0 và đã tự tay tạo nên trang web này.</p>
  </section>

  <section id="projects">
    <h2>Dự Án Của Tôi</h2>
    <div class="project-grid">
      <article class="project-card">
        <h3>Trang Web Cá Nhân</h3>
        <p>Xây dựng bằng HTML5 & CSS3 chuẩn Responsive.</p>
      </article>
      <article class="project-card">
        <h3>Game Đập Chuột</h3>
        <p>Ứng dụng tương tác DOM cực kỳ vui nhộn.</p>
      </article>
      <article class="project-card">
        <h3>Bảng Tin Học Đường</h3>
        <p>Website chia sẻ kinh nghiệm học tập trực tuyến.</p>
      </article>
    </div>
  </section>

  <section id="contact">
    <h2>Liên Hệ Với Tôi</h2>
    <form>
      <input type="text" placeholder="Họ và tên của bạn" required>
      <input type="email" placeholder="Email của bạn" required>
      <textarea placeholder="Nội dung lời nhắn" required></textarea>
      <button type="submit">Gửi Tin Nhắn</button>
    </form>
  </section>
</main>

<footer>
  <p>© 2026 Bản quyền thuộc về Minh Anh</p>
</footer>`,

  tests: [
    {
      id: 'w13-t1',
      description: 'Nhiệm vụ 1: Có thẻ <header> và <nav> chứa các link liên kết nội bộ #about, #projects, #contact',
      tester: (doc: Document) => {
        const header = doc.querySelector('header');
        const nav = doc.querySelector('nav');
        const links = Array.from(doc.querySelectorAll('nav a'));
        const hasAbout = links.some(a => (a.getAttribute('href') || '').includes('about'));
        const hasProjects = links.some(a => (a.getAttribute('href') || '').includes('projects'));
        const hasContact = links.some(a => (a.getAttribute('href') || '').includes('contact'));
        return !!header && !!nav && hasAbout && hasProjects && hasContact;
      }
    },
    {
      id: 'w13-t2',
      description: 'Nhiệm vụ 2: Có khối Hero (<h1>, <p>, <img>) và <section id="about">',
      tester: (doc: Document) => {
        const hero = doc.querySelector('section.hero, .hero');
        const about = doc.querySelector('section#about, #about');
        const h1 = doc.querySelector('h1');
        const img = doc.querySelector('img');
        return !!hero && !!about && !!h1 && !!img;
      }
    },
    {
      id: 'w13-t3',
      description: 'Nhiệm vụ 3: Có <section id="projects"> chứa ít nhất 3 thẻ bài viết <article class="project-card">',
      tester: (doc: Document) => {
        const projectsSec = doc.querySelector('#projects');
        const articles = doc.querySelectorAll('#projects article, .project-card');
        return !!projectsSec && articles.length >= 3;
      }
    },
    {
      id: 'w13-t4',
      description: 'Nhiệm vụ 4: Có <section id="contact"> chứa <form> (có required, email, textarea, button submit) và <footer>',
      tester: (doc: Document) => {
        const contact = doc.querySelector('#contact');
        const form = doc.querySelector('#contact form');
        const reqInput = form?.querySelector('[required]');
        const emailInput = form?.querySelector('input[type="email"]');
        const textarea = form?.querySelector('textarea');
        const button = form?.querySelector('button, input[type="submit"]');
        const footer = doc.querySelector('footer');
        return !!contact && !!form && !!reqInput && !!emailInput && !!textarea && !!button && !!footer;
      }
    }
  ]
};
