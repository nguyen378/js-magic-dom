import { Lesson } from '@/types/lesson';

export const LESSON_W14: Lesson = {
  id: 'w14-capstone-about-skills',
  title: 'Tuần 14 (Đồ Án GĐ 2): Khối "Về Tôi" & "Kỹ Năng"',
  shortDescription: 'Xây dựng phần thân trang web cá nhân: Thiết kế khối giới thiệu bản thân 2 cột và lưới huy hiệu kỹ năng/sở thích sinh động với Flexbox.',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 150,
  order: 14,
  week: 14,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 14 — Đồ Án Giai Đoạn 2**! 🌟

Hôm nay chúng ta sẽ tiếp tục xây dựng 2 phần nội dung cốt lõi của website cá nhân:
1. **Section "Về Tôi" (About Me)**: Kể câu chuyện, ước mơ và điểm mạnh của bản thân.
2. **Section "Kỹ Năng & Sở Thích" (Skills & Badges)**: Dùng Flexbox để xếp các thẻ kỹ năng thành hàng/lưới linh hoạt với các icon sinh động.`,

  taskInstructions: [
    'Tạo thẻ `<section id="about" class="about-section">` chứa tiêu đề `<h2>Về Tôi</h2>` và 2 đoạn văn `<p>` giới thiệu câu chuyện của bạn',
    'Tạo thẻ `<section id="skills" class="skills-section">` chứa tiêu đề `<h2>Kỹ Năng & Điểm Mạnh</h2>`',
    'Bên trong Skills, tạo khối `<div class="skills-grid">` chứa ít nhất 3 thẻ `<div class="skill-badge">` (gồm Icon, Tên kỹ năng và mô tả ngắn)'
  ],

  hints: {
    level1: 'Sử dụng <section id="about">...</section> và <section id="skills"><div class="skills-grid"><div class="skill-badge">...</div></div></section>',
    level2: 'Ví dụ mẫu:\n<section id="about" class="about-section">\n  <h2>Về Tôi</h2>\n  <p>Tôi là một học sinh luôn tò mò về cách các ứng dụng công nghệ hoạt động.</p>\n  <p>Mục tiêu của tôi là tạo ra các trang web hữu ích phục vụ cộng đồng.</p>\n</section>\n<section id="skills" class="skills-section">\n  <h2>Kỹ Năng & Điểm Mạnh</h2>\n  <div class="skills-grid">\n    <div class="skill-badge">💻 <strong>HTML5 & CSS3</strong> (Dựng giao diện)</div>\n    <div class="skill-badge">⚡ <strong>Tư Duy Logic</strong> (Thuật toán)</div>\n    <div class="skill-badge">🎨 <strong>Sáng Tạo UI</strong> (Màu sắc & Bố cục)</div>\n  </div>\n</section>',
    solution: '<section id="about" class="about-section">\n  <h2>Về Tôi</h2>\n  <p>Tôi là một học sinh luôn tò mò về cách các ứng dụng công nghệ hoạt động.</p>\n  <p>Mục tiêu của tôi là tạo ra các trang web hữu ích phục vụ cộng đồng.</p>\n</section>\n<section id="skills" class="skills-section">\n  <h2>Kỹ Năng & Điểm Mạnh</h2>\n  <div class="skills-grid">\n    <div class="skill-badge">💻 <strong>HTML5 & CSS3</strong> (Dựng giao diện)</div>\n    <div class="skill-badge">⚡ <strong>Tư Duy Logic</strong> (Thuật toán)</div>\n    <div class="skill-badge">🎨 <strong>Sáng Tạo UI</strong> (Màu sắc & Bố cục)</div>\n  </div>\n</section>'
  },

  htmlContent: `<!-- Tuần 14: Viết HTML cho section About Me và Skills Grid bên dưới -->\n`,
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
  margin-bottom: 16px;
  font-size: 22px;
}
p {
  color: #475569;
  line-height: 1.7;
}
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}
.skill-badge {
  background: #f1f5f9;
  padding: 12px 18px;
  border-radius: 12px;
  color: #334155;
  border: 1px solid #cbd5e1;
  font-size: 14px;
  flex: 1 1 calc(50% - 12px);
  box-sizing: border-box;
}
.skill-badge strong {
  color: #4f46e5;
}`,

  initialHtmlCode: `<!-- Tuần 14: Xây dựng khối Về Tôi và Kỹ Năng / Sở Thích -->\n`,
  solutionHtmlCode: `<section id="about" class="about-section">
  <h2>Về Tôi</h2>
  <p>Tôi là một học sinh luôn tò mò về cách các ứng dụng công nghệ hoạt động.</p>
  <p>Mục tiêu của tôi là tạo ra các trang web hữu ích phục vụ cộng đồng.</p>
</section>
<section id="skills" class="skills-section">
  <h2>Kỹ Năng & Điểm Mạnh</h2>
  <div class="skills-grid">
    <div class="skill-badge">💻 <strong>HTML5 & CSS3</strong> (Dựng giao diện)</div>
    <div class="skill-badge">⚡ <strong>Tư Duy Logic</strong> (Thuật toán)</div>
    <div class="skill-badge">🎨 <strong>Sáng Tạo UI</strong> (Màu sắc & Bố cục)</div>
  </div>
</section>`,

  tests: [
    {
      id: 'w14-t1',
      description: 'Có thẻ <section id="about"> chứa tiêu đề <h2> và đoạn văn giới thiệu',
      tester: (doc: Document) => {
        const about = doc.querySelector('section#about');
        const h2 = doc.querySelector('section#about h2');
        const p = doc.querySelector('section#about p');
        return !!about && !!h2 && !!p;
      }
    },
    {
      id: 'w14-t2',
      description: 'Có thẻ <section id="skills"> chứa danh sách hoặc lưới kỹ năng',
      tester: (doc: Document) => {
        const skills = doc.querySelector('section#skills');
        return !!skills;
      }
    },
    {
      id: 'w14-t3',
      description: 'Có ít nhất 3 thẻ .skill-badge liệt kê các kỹ năng / sở thích',
      tester: (doc: Document) => {
        const badges = doc.querySelectorAll('.skill-badge');
        return badges.length >= 3;
      }
    }
  ]
};
