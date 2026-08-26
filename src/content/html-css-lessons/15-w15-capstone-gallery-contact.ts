import { Lesson } from '@/types/lesson';

export const LESSON_W15: Lesson = {
  id: 'w15-capstone-gallery-contact',
  title: 'Tuần 15 (Đồ Án GĐ 3): "Bộ Sưu Tập" & "Form Liên Hệ"',
  shortDescription: 'Xây dựng phần kết của website cá nhân: Lưới trưng bày các sản phẩm/kỷ niệm yêu thích, Form gửi lời nhắn tương tác và Footer chân trang bản quyền.',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 150,
  order: 15,
  week: 15,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 15 — Đồ Án Giai Đoạn 3**! 📬

Để trang web của bạn có thể tương tác thật với bạn bè và thầy cô:
1. **Lưới Dự Án / Kỷ Niệm (Gallery Section)**: Nơi trưng bày các tác phẩm tự hào của bạn.
2. **Form Gửi Lời Nhắn (Contact Form)**: Cho phép mọi người nhập Tên, Email và Lời chúc/Góp ý gửi cho bạn.
3. **Footer**: Chân trang lưu dấu bản quyền và năm sáng tác.`,

  taskInstructions: [
    'Tạo thẻ `<section id="projects" class="projects-section">` chứa tiêu đề `<h2>Dự Án Của Tôi</h2>` và ít nhất 2 thẻ `<div class="project-card">`',
    'Tạo thẻ `<section id="contact" class="contact-section">` chứa Form gồm 1 ô `<input type="text" placeholder="Họ và tên của bạn...">`, 1 ô `<input type="email" placeholder="Email liên hệ...">` và 1 nút `<button type="submit">Gửi Tin Nhắn</button>`',
    'Tạo thẻ `<footer>` chứa dòng chữ bản quyền `© 2026 Tạo bởi tác giả website cá nhân`'
  ],

  hints: {
    level1: 'Sử dụng <section id="projects">...</section>, <section id="contact"><form>...</form></section> và <footer>...</footer>',
    level2: 'Ví dụ mẫu:\n<section id="projects" class="projects-section">\n  <h2>Dự Án Của Tôi</h2>\n  <div class="projects-grid">\n    <div class="project-card">\n      <h3>Trang Web Đầu Tiên</h3>\n      <p>Thực hành HTML & CSS</p>\n    </div>\n    <div class="project-card">\n      <h3>Trò Chơi DOM</h3>\n      <p>Mini game tương tác</p>\n    </div>\n  </div>\n</section>\n<section id="contact" class="contact-section">\n  <h2>Gửi Lời Nhắn Cho Tôi</h2>\n  <form class="contact-form">\n    <input type="text" placeholder="Họ và tên của bạn...">\n    <input type="email" placeholder="Email liên hệ...">\n    <button type="submit">Gửi Tin Nhắn</button>\n  </form>\n</section>\n<footer>\n  <p>© 2026 Tạo bởi tác giả website cá nhân</p>\n</footer>',
    solution: '<section id="projects" class="projects-section">\n  <h2>Dự Án Của Tôi</h2>\n  <div class="projects-grid">\n    <div class="project-card">\n      <h3>Trang Web Đầu Tiên</h3>\n      <p>Thực hành HTML & CSS</p>\n    </div>\n    <div class="project-card">\n      <h3>Trò Chơi DOM</h3>\n      <p>Mini game tương tác</p>\n    </div>\n  </div>\n</section>\n<section id="contact" class="contact-section">\n  <h2>Gửi Lời Nhắn Cho Tôi</h2>\n  <form class="contact-form">\n    <input type="text" placeholder="Họ và tên của bạn...">\n    <input type="email" placeholder="Email liên hệ...">\n    <button type="submit">Gửi Tin Nhắn</button>\n  </form>\n</section>\n<footer>\n  <p>© 2026 Tạo bởi tác giả website cá nhân</p>\n</footer>'
  },

  htmlContent: `<!-- Tuần 15: Xây dựng Section Dự Án, Form Liên Hệ và Footer bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  color: #1e293b;
  padding: 30px 20px;
  margin: 0;
}
section {
  max-width: 680px;
  margin: 0 auto 30px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}
h2 {
  color: #4f46e5;
  margin-top: 0;
  margin-bottom: 20px;
}
.projects-grid {
  display: flex;
  gap: 16px;
}
.project-card {
  flex: 1;
  background: #f1f5f9;
  padding: 20px;
  border-radius: 14px;
  border: 1px solid #cbd5e1;
}
.project-card h3 {
  margin: 0 0 8px;
  color: #1e293b;
  font-size: 16px;
}
.project-card p {
  margin: 0;
  color: #64748b;
  font-size: 13px;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.contact-form input {
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 14px;
}
.contact-form button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}
footer {
  text-align: center;
  color: #94a3b8;
  font-size: 13px;
  padding-bottom: 20px;
}`,

  initialHtmlCode: `<!-- Tuần 15: Xây dựng khối Dự Án, Form Liên Hệ và Footer -->\n`,
  solutionHtmlCode: `<section id="projects" class="projects-section">
  <h2>Dự Án Của Tôi</h2>
  <div class="projects-grid">
    <div class="project-card">
      <h3>Trang Web Đầu Tiên</h3>
      <p>Thực hành HTML & CSS</p>
    </div>
    <div class="project-card">
      <h3>Trò Chơi DOM</h3>
      <p>Mini game tương tác</p>
    </div>
  </div>
</section>
<section id="contact" class="contact-section">
  <h2>Gửi Lời Nhắn Cho Tôi</h2>
  <form class="contact-form">
    <input type="text" placeholder="Họ và tên của bạn...">
    <input type="email" placeholder="Email liên hệ...">
    <button type="submit">Gửi Tin Nhắn</button>
  </form>
</section>
<footer>
  <p>© 2026 Tạo bởi tác giả website cá nhân</p>
</footer>`,

  tests: [
    {
      id: 'w15-t1',
      description: 'Có thẻ <section id="projects"> chứa ít nhất 2 thẻ .project-card',
      tester: (doc: Document) => {
        const projects = doc.querySelector('section#projects');
        const cards = doc.querySelectorAll('.project-card');
        return !!projects && cards.length >= 2;
      }
    },
    {
      id: 'w15-t2',
      description: 'Có thẻ <section id="contact"> chứa Form với input text, email và nút button gửi',
      tester: (doc: Document) => {
        const contact = doc.querySelector('section#contact');
        const inputs = doc.querySelectorAll('section#contact input');
        const button = doc.querySelector('section#contact button');
        return !!contact && inputs.length >= 2 && !!button;
      }
    },
    {
      id: 'w15-t3',
      description: 'Có thẻ <footer> chứa dòng thông tin bản quyền',
      tester: (doc: Document) => {
        const footer = doc.querySelector('footer');
        return !!footer && (footer.textContent?.trim().length || 0) > 10;
      }
    }
  ]
};
