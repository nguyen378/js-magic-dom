import { Lesson } from '@/types/lesson';

export const LESSON_W16: Lesson = {
  id: 'w16-capstone-final',
  title: 'Buổi 16: Dự Án Cuối Khóa (4/4) — Hoàn Thiện & Tổng Kết',
  shortDescription: 'Kiểm thử toàn diện, chuẩn hóa Clean Code, hoàn thiện bài thuyết trình giới thiệu website cá nhân và xuất sắc nhận Huy Hiệu Tốt Nghiệp!',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'hard',
  xpReward: 200,
  order: 16,
  week: 16,
  durationMinutes: 60,

  story: `🎉 CHÚC MỪNG BẠN ĐÃ CHẠM TỚI **BUỔI 16 — BUỔI TỐT NGHIỆP KHÓA HỌC HTML & CSS**! 🏆

Trải qua hành trình 16 tuần từ con số 0:
1. Bạn đã làm chủ ngôn ngữ **HTML5** để tạo nên bộ khung xương vững chắc.
2. Bạn đã trở thành phù thủy sắc màu với **CSS3**, **Box Model**, **CSS Position**.
3. Bạn đã làm chủ công nghệ bố cục hiện đại **Flexbox** và kỹ thuật **Responsive Web Design**.
4. Bạn đã tự tay hoàn thiện một **Website Cá Nhân** chuẩn chỉnh từ A đến Z!

Hôm nay là buổi kiểm tra toàn diện lần cuối để tự tin xuất bản sản phẩm và báo cáo thuyết trình trước lớp!`,

  taskInstructions: [
    '🟢 Nhiệm vụ 1: Rà soát cấu trúc HTML Semantic hoàn chỉnh: Đủ `<header>`, `<nav>`, `<main>`, `<section class="hero">`, `<section id="about">`, `<section id="projects">`, `<section id="contact">`, `<footer>`',
    '🟢 Nhiệm vụ 2: Rà soát CSS: Bảng biến màu `:root`, `box-sizing: border-box`, Flexbox dàn Navbar và Lưới dự án',
    '🟡 Nhiệm vụ 3: Rà soát Responsive: Cú pháp `@media (max-width: 768px)` giúp website hiển thị hoàn hảo trên điện thoại',
    '🟡 Nhiệm vụ 4: Kiểm tra Clean Code & Tự tin hoàn thành khóa học để nhận Huy Hiệu Tốt Nghiệp "Tác Giả Website Cá Nhân"!'
  ],

  hints: {
    level1: 'Kiểm tra xem file HTML và CSS đã chứa đầy đủ tất cả các thành phần của một trang web hoàn chỉnh.',
    level2: `<!-- Cấu trúc toàn diện mẫu cho Buổi 16 -->
<header>
  <div class="logo">⭐ MinhAnh Portfolio</div>
  <nav class="nav-menu">
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>

<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar" class="avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 • Lập trình viên Web tương lai</p>
    <button class="btn">Kết Nối Với Tôi</button>
  </section>

  <section id="about">
    <h2>Giới Thiệu Bản Thân</h2>
    <p>Tôi đam mê công nghệ và đã tự tay hoàn thành khóa học lập trình web 16 tuần.</p>
  </section>

  <section id="projects">
    <h2>Dự Án Đã Thực Hiện</h2>
    <div class="project-grid">
      <article class="project-card">
        <h3>Trang Web Cá Nhân</h3>
        <p>Website hoàn thiện bằng HTML & CSS.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
      <article class="project-card">
        <h3>Mini Game DOM</h3>
        <p>Game tương tác vui nhộn.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
      <article class="project-card">
        <h3>Báo Tin Học</h3>
        <p>Trang tin tức học đường.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
    </div>
  </section>

  <section id="contact">
    <h2>Liên Hệ</h2>
    <form>
      <input type="text" placeholder="Họ tên" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Tin nhắn"></textarea>
      <button type="submit" class="btn">Gửi Lời Nhắn</button>
    </form>
  </section>
</main>

<footer>
  <p>© 2026 Bản quyền thuộc về Minh Anh</p>
</footer>`,
    solution: `<header>
  <div class="logo">⭐ MinhAnh Portfolio</div>
  <nav class="nav-menu">
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>

<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar" class="avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 • Lập trình viên Web tương lai</p>
    <button class="btn">Kết Nối Với Tôi</button>
  </section>

  <section id="about">
    <h2>Giới Thiệu Bản Thân</h2>
    <p>Tôi đam mê công nghệ và đã tự tay hoàn thành khóa học lập trình web 16 tuần.</p>
  </section>

  <section id="projects">
    <h2>Dự Án Đã Thực Hiện</h2>
    <div class="project-grid">
      <article class="project-card">
        <h3>Trang Web Cá Nhân</h3>
        <p>Website hoàn thiện bằng HTML & CSS.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
      <article class="project-card">
        <h3>Mini Game DOM</h3>
        <p>Game tương tác vui nhộn.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
      <article class="project-card">
        <h3>Báo Tin Học</h3>
        <p>Trang tin tức học đường.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
    </div>
  </section>

  <section id="contact">
    <h2>Liên Hệ</h2>
    <form>
      <input type="text" placeholder="Họ tên" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Tin nhắn"></textarea>
      <button type="submit" class="btn">Gửi Lời Nhắn</button>
    </form>
  </section>
</main>

<footer>
  <p>© 2026 Bản quyền thuộc về Minh Anh</p>
</footer>`
  },

  htmlContent: `<!-- Buổi 16: Rà soát và hoàn thiện mã nguồn toàn diện cho website cá nhân -->\n`,
  cssContent: `:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --bg-color: #0f172a;
  --card-bg: #1e293b;
  --text-color: #f8fafc;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  background: var(--card-bg);
  border-bottom: 1px solid #334155;
}
.logo {
  font-weight: 800;
  font-size: 18px;
  color: var(--secondary-color);
}
.nav-menu {
  display: flex;
  gap: 16px;
}
.nav-menu a {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
}
section {
  background: var(--card-bg);
  padding: 28px;
  border-radius: 16px;
  margin-bottom: 24px;
  border: 1px solid #334155;
}
.hero {
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid var(--secondary-color);
  object-fit: cover;
  margin-bottom: 14px;
}
h1 {
  font-size: 28px;
  color: var(--secondary-color);
  margin: 0 0 8px;
}
h2 {
  color: #818cf8;
  margin-top: 0;
}
.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.project-card {
  width: calc(33.333% - 11px);
  background: #0f172a;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #334155;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: 0.3s;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.2);
}
.project-card h3 {
  margin: 0 0 6px;
  color: var(--secondary-color);
  font-size: 15px;
}
input, textarea {
  width: 100%;
  padding: 10px 14px;
  background: #0f172a;
  border: 1px solid #334155;
  color: white;
  border-radius: 8px;
  margin-bottom: 12px;
  box-sizing: border-box;
}
.btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  background: #4338ca;
}
footer {
  text-align: center;
  padding: 24px;
  color: #64748b;
  font-size: 13px;
}
@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }
  .nav-menu {
    flex-direction: column;
  }
}`,

  initialHtmlCode: `<!-- Buổi 16: Tổng duyệt toàn bộ HTML Semantic của Website Cá Nhân -->\n`,
  solutionHtmlCode: `<header>
  <div class="logo">⭐ MinhAnh Portfolio</div>
  <nav class="nav-menu">
    <a href="#about">Về Tôi</a>
    <a href="#projects">Dự Án</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>

<main>
  <section class="hero">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar" class="avatar">
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Học sinh lớp 8 • Lập trình viên Web tương lai</p>
    <button class="btn">Kết Nối Với Tôi</button>
  </section>

  <section id="about">
    <h2>Giới Thiệu Bản Thân</h2>
    <p>Tôi đam mê công nghệ và đã tự tay hoàn thành khóa học lập trình web 16 tuần.</p>
  </section>

  <section id="projects">
    <h2>Dự Án Đã Thực Hiện</h2>
    <div class="project-grid">
      <article class="project-card">
        <h3>Trang Web Cá Nhân</h3>
        <p>Website hoàn thiện bằng HTML & CSS.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
      <article class="project-card">
        <h3>Mini Game DOM</h3>
        <p>Game tương tác vui nhộn.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
      <article class="project-card">
        <h3>Báo Tin Học</h3>
        <p>Trang tin tức học đường.</p>
        <button class="btn">Xem Chi Tiết</button>
      </article>
    </div>
  </section>

  <section id="contact">
    <h2>Liên Hệ</h2>
    <form>
      <input type="text" placeholder="Họ tên" required>
      <input type="email" placeholder="Email" required>
      <textarea placeholder="Tin nhắn"></textarea>
      <button type="submit" class="btn">Gửi Lời Nhắn</button>
    </form>
  </section>
</main>

<footer>
  <p>© 2026 Bản quyền thuộc về Minh Anh</p>
</footer>`,

  tests: [
    {
      id: 'w16-t1',
      description: 'Nhiệm vụ 1: Cấu trúc HTML Semantic hoàn chỉnh (Header, Hero, About, Projects, Contact, Footer)',
      tester: (doc: Document) => {
        const header = doc.querySelector('header');
        const hero = doc.querySelector('.hero');
        const about = doc.querySelector('#about');
        const projects = doc.querySelector('#projects');
        const contact = doc.querySelector('#contact');
        const footer = doc.querySelector('footer');
        return !!header && !!hero && !!about && !!projects && !!contact && !!footer;
      }
    },
    {
      id: 'w16-t2',
      description: 'Nhiệm vụ 2: Có đầy đủ các dự án (.project-card) và nút bấm tương tác (.btn)',
      tester: (doc: Document) => {
        const cards = doc.querySelectorAll('.project-card');
        const btns = doc.querySelectorAll('.btn, button');
        return cards.length >= 3 && btns.length >= 2;
      }
    },
    {
      id: 'w16-t3',
      description: 'Nhiệm vụ 3: Form liên hệ có các ô input, email, textarea và nút submit',
      tester: (doc: Document) => {
        const form = doc.querySelector('form');
        const email = form?.querySelector('input[type="email"]');
        const textarea = form?.querySelector('textarea');
        return !!form && !!email && !!textarea;
      }
    },
    {
      id: 'w16-t4',
      description: 'Nhiệm vụ 4: Kiểm tra toàn bộ mã nguồn hợp lệ, sẵn sàng báo cáo thuyết trình và nhận Huy Hiệu Tốt Nghiệp',
      tester: (doc: Document) => {
        const h1 = doc.querySelector('h1');
        const avatar = doc.querySelector('.avatar');
        return !!h1 && !!avatar;
      }
    }
  ]
};
