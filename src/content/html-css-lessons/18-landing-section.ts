import { Lesson } from '@/types/lesson';

export const lessonHtml18: Lesson = {
  id: 'proj-html-css-03',
  title: 'P03. Đồ Án: Hero Section Game Huyền Thoại',
  shortDescription: 'Xây dựng trang Hero Landing Section hoàn chỉnh gồm tiêu đề lớn, huy hiệu, nút CTA và giao diện banner',
  category: 'html-css-project',
  course: 'html-css',
  track: 'html-css-capstone',
  editorLanguage: 'html',
  difficulty: 'hard',
  xpReward: 120,
  order: 18,

  story: `👑 **Đồ Án Tối Thượng: Hero Section Game Phép Thuật**

Hero Section là phần xuất hiện đầu tiên trên màn hình khi người dùng truy cập trang web. Một Hero Section đỉnh cao sẽ lập tức thu hút sự chú ý của mọi game thủ!

Cấu trúc một Hero Section chuẩn bao gồm:
1. Thẻ bọc \`<section class="hero-section">\`.
2. Huy hiệu giới thiệu \`<div class="badge-pill">✨ Game Nhập Vai Số 1</div>\`.
3. Tiêu đề lớn \`<h1 class="hero-title">Hành Trình Pháp Thuật Bất Tận</h1>\`.
4. Đoạn mô tả \`<p class="hero-desc">\`.
5. Cụm nút hành động \`<div class="cta-group">\` chứa \`<button class="btn-primary">Chơi Miễn Phí 🚀</button>\` và \`<button class="btn-secondary">Xem Trailer 🎬</button>\`.
`,

  taskInstructions: [
    'Tạo thẻ `<section class="hero-section">`.',
    'Bên trong, tạo huy hiệu `<div class="badge-pill">✨ Game Nhập Vai Số 1</div>`.',
    'Tạo tiêu đề lớn `<h1 class="hero-title">Hành Trình Pháp Thuật Bất Tận</h1>`.',
    'Tạo đoạn văn `<p class="hero-desc">Khám phá thế giới mở kỳ diệu, học các bùa chú cổ xưa và chiến đấu cùng bạn bè.</p>`.',
    'Tạo cụm nút `<div class="cta-group">` chứa `<button class="btn-primary">Chơi Miễn Phí 🚀</button>` và `<button class="btn-secondary">Xem Trailer 🎬</button>`.'
  ],

  hints: {
    level1: 'Lồng ghép các phần tử theo đúng tên class được mô tả trong nhiệm vụ.',
    level2: `<section class="hero-section">\n  <div class="badge-pill">✨ Game Nhập Vai Số 1</div>\n  <h1 class="hero-title">Hành Trình Pháp Thuật Bất Tận</h1>\n  <p class="hero-desc">Khám phá thế giới mở kỳ diệu, học các bùa chú cổ xưa và chiến đấu cùng bạn bè.</p>\n  <div class="cta-group">\n    <button class="btn-primary">Chơi Miễn Phí 🚀</button>\n    <button class="btn-secondary">Xem Trailer 🎬</button>\n  </div>\n</section>`,
    solution: `<section class="hero-section">
  <div class="badge-pill">✨ Game Nhập Vai Số 1</div>
  <h1 class="hero-title">Hành Trình Pháp Thuật Bất Tận</h1>
  <p class="hero-desc">Khám phá thế giới mở kỳ diệu, học các bùa chú cổ xưa và chiến đấu cùng bạn bè.</p>
  <div class="cta-group">
    <button class="btn-primary">Chơi Miễn Phí 🚀</button>
    <button class="btn-secondary">Xem Trailer 🎬</button>
  </div>
</section>`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: radial-gradient(circle at top center, #1e1b4b 0%, #090d16 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.hero-section {
  max-width: 600px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid #6366f1;
  color: #a5b4fc;
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
}

.hero-title {
  font-size: 36px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #38bdf8 50%, #818cf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-desc {
  font-size: 15px;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 28px;
  max-width: 480px;
}

.cta-group {
  display: flex;
  gap: 14px;
  justify-content: center;
}

.btn-primary {
  padding: 14px 28px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #1e1b4b;
  font-weight: 800;
  font-size: 14px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(245, 158, 11, 0.6);
}

.btn-secondary {
  padding: 14px 28px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 700;
  font-size: 14px;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}
`,

  initialHtmlCode: `<!-- Đồ án Capstone: Xây dựng Hero Landing Section hoàn chỉnh -->

`,

  solutionHtmlCode: `<section class="hero-section">
  <div class="badge-pill">✨ Game Nhập Vai Số 1</div>
  <h1 class="hero-title">Hành Trình Pháp Thuật Bất Tận</h1>
  <p class="hero-desc">Khám phá thế giới mở kỳ diệu, học các bùa chú cổ xưa và chiến đấu cùng bạn bè.</p>
  <div class="cta-group">
    <button class="btn-primary">Chơi Miễn Phí 🚀</button>
    <button class="btn-secondary">Xem Trailer 🎬</button>
  </div>
</section>`,

  tests: [
    {
      id: 'has_section',
      description: 'Có thẻ <section> bọc cấu trúc với class hero-section',
      tester: (doc) => {
        return doc.querySelector('section') !== null;
      }
    },
    {
      id: 'has_title_and_badge',
      description: 'Có tiêu đề lớn <h1> và huy hiệu pill',
      tester: (doc) => {
        const h1 = doc.querySelector('h1');
        const badge = doc.querySelector('.badge-pill') || doc.querySelector('div');
        return h1 !== null && badge !== null;
      }
    },
    {
      id: 'has_two_buttons',
      description: 'Có ít nhất 2 nút bấm CTA (Chơi Miễn Phí & Xem Trailer)',
      tester: (doc) => {
        const btns = doc.querySelectorAll('button');
        return btns.length >= 2;
      }
    }
  ]
};
