import { Lesson } from '@/types/lesson';

export const LESSON_W13: Lesson = {
  id: 'w13-capstone-hero',
  title: 'Tuần 13 (Đồ Án GĐ 1): Header & Hero Banner Giới Thiệu',
  shortDescription: 'Bắt đầu giai đoạn Đồ án Tốt nghiệp: Tự tay xây dựng phần đầu của Website Cá Nhân với thanh Navbar kính mờ và khu vực Hero Banner siêu ấn tượng.',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 150,
  order: 13,
  week: 13,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 13 — Khởi động Đồ Án Website Cá Nhân (Giai Đoạn 1)**! 👑

Trong 4 tuần tới, bạn sẽ tự tay ráp nối tất cả kiến thức đã học thành một trang web của riêng mình.
- **Thanh Header/Navbar**: Chứa thương hiệu cá nhân và menu điều hướng nhanh.
- **Hero Banner**: Nơi tạo ấn tượng đầu tiên với người xem bằng ảnh đại diện tròn chất lượng cao, tên tuổi, câu danh ngôn và nút kêu gọi hành động (CTA Button).`,

  taskInstructions: [
    'Xây dựng thanh `<header class="site-header">` chứa logo thương hiệu cá nhân và menu `<nav class="nav-menu">`',
    'Xây dựng khối `<section class="hero-section">`',
    'Bên trong Hero, thêm ảnh `<img class="hero-avatar">` với `src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"`',
    'Thêm tiêu đề `<h1>` tên của bạn, đoạn giới thiệu `<p class="hero-desc">` và 2 nút `<button class="btn-primary">Liên Hệ Tôi</button>` & `<button class="btn-secondary">Dự Án</button>`'
  ],

  hints: {
    level1: 'Sử dụng cấu trúc HTML semantic: <header><div class="logo">...</div><nav>...</nav></header> và <section class="hero-section">...</section>',
    level2: 'Ví dụ mẫu:\n<header class="site-header">\n  <div class="logo">⭐ NamPortfolio</div>\n  <nav class="nav-menu">\n    <a href="#about">Về Tôi</a>\n    <a href="#skills">Kỹ Năng</a>\n    <a href="#contact">Liên Hệ</a>\n  </nav>\n</header>\n<section class="hero-section">\n  <img class="hero-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" alt="Avatar">\n  <h1>Xin chào, tôi là Nguyễn Hoàng Nam</h1>\n  <p class="hero-desc">Học sinh đam mê công nghệ & thiết kế web sáng tạo.</p>\n  <div class="cta-group">\n    <button class="btn-primary">Liên Hệ Tôi</button>\n    <button class="btn-secondary">Xem Dự Án</button>\n  </div>\n</section>',
    solution: '<header class="site-header">\n  <div class="logo">⭐ NamPortfolio</div>\n  <nav class="nav-menu">\n    <a href="#about">Về Tôi</a>\n    <a href="#skills">Kỹ Năng</a>\n    <a href="#contact">Liên Hệ</a>\n  </nav>\n</header>\n<section class="hero-section">\n  <img class="hero-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" alt="Avatar">\n  <h1>Xin chào, tôi là Nguyễn Hoàng Nam</h1>\n  <p class="hero-desc">Học sinh đam mê công nghệ & thiết kế web sáng tạo.</p>\n  <div class="cta-group">\n    <button class="btn-primary">Liên Hệ Tôi</button>\n    <button class="btn-secondary">Xem Dự Án</button>\n  </div>\n</section>'
  },

  htmlContent: `<!-- Tuần 13: Hãy viết HTML cho phần Header và Hero Banner bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #0f172a;
  color: white;
  margin: 0;
  padding: 0;
}
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.logo {
  font-weight: 800;
  font-size: 20px;
  color: #38bdf8;
}
.nav-menu a {
  color: #cbd5e1;
  text-decoration: none;
  margin-left: 24px;
  font-weight: 600;
  font-size: 14px;
}
.hero-section {
  text-align: center;
  padding: 60px 20px;
  max-width: 680px;
  margin: 0 auto;
}
.hero-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #38bdf8;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
  margin-bottom: 20px;
}
.hero-section h1 {
  font-size: 32px;
  margin: 0 0 12px;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-desc {
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 28px;
}
.cta-group {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.btn-primary {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  padding: 12px 26px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}
.btn-secondary {
  background: transparent;
  color: white;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 12px 26px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}`,

  initialHtmlCode: `<!-- Tuần 13: Xây dựng Header và Hero Section của trang cá nhân -->\n`,
  solutionHtmlCode: `<header class="site-header">
  <div class="logo">⭐ NamPortfolio</div>
  <nav class="nav-menu">
    <a href="#about">Về Tôi</a>
    <a href="#skills">Kỹ Năng</a>
    <a href="#contact">Liên Hệ</a>
  </nav>
</header>
<section class="hero-section">
  <img class="hero-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" alt="Avatar">
  <h1>Xin chào, tôi là Nguyễn Hoàng Nam</h1>
  <p class="hero-desc">Học sinh đam mê công nghệ & thiết kế web sáng tạo.</p>
  <div class="cta-group">
    <button class="btn-primary">Liên Hệ Tôi</button>
    <button class="btn-secondary">Xem Dự Án</button>
  </div>
</section>`,

  tests: [
    {
      id: 'w13-t1',
      description: 'Có thẻ <header class="site-header"> chứa logo và menu',
      tester: (doc: Document) => {
        const header = doc.querySelector('header.site-header');
        return !!header;
      }
    },
    {
      id: 'w13-t2',
      description: 'Có thẻ <section class="hero-section"> chứa ảnh .hero-avatar',
      tester: (doc: Document) => {
        const hero = doc.querySelector('section.hero-section');
        const avatar = doc.querySelector('img.hero-avatar');
        return !!hero && !!avatar && !!avatar.getAttribute('src');
      }
    },
    {
      id: 'w13-t3',
      description: 'Có thẻ <h1> và các nút bấm hành động trong Hero Section',
      tester: (doc: Document) => {
        const h1 = doc.querySelector('.hero-section h1');
        const buttons = doc.querySelectorAll('.hero-section button');
        return !!h1 && buttons.length >= 2;
      }
    }
  ]
};
