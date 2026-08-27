import { Lesson } from '@/types/lesson';

export const LESSON_B14_01: Lesson = {
  id: 'b14-01',
  title: 'Bài 14.1 (Cơ bản): CSS Màu Sắc & Box Model Dự Án',
  shortDescription: 'Khởi tạo bảng màu :root, thiết lập font-family và áp dụng reset box-sizing cho toàn bộ website.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 50,
  order: 51,
  week: 14,
  durationMinutes: 30,

  story: `Chào mừng bạn đến với **Bài 14.1: Đồ Án Cuối Khóa — Thiết Kế CSS Cơ Bản (1/2)**! 🎨✨

Trước khi dựng bố cục, ta thiết lập bộ nhận diện màu sắc và font chữ chuẩn:
- Biến màu trong \`:root\`: \`--primary-color: #4f46e5;\`, \`--bg-color: #f8fafc;\`, \`--text-color: #1e293b;\`
- Reset \`* { box-sizing: border-box; }\`
- Font chữ và màu nền \`body\`.`,

  taskInstructions: [
    'Khai báo `:root` với 3 biến màu: `--primary-color: #4f46e5;`, `--bg-color: #f8fafc;`, `--text-color: #1e293b;`',
    'Thêm luật reset `* { box-sizing: border-box; }`',
    'Thiết lập cho `body`: `background-color: var(--bg-color); color: var(--text-color);`'
  ],

  hints: {
    level1: 'Viết :root { ... }, * { box-sizing: border-box; } và body { ... }',
    level2: `:root {
  --primary-color: #4f46e5;
  --bg-color: #f8fafc;
  --text-color: #1e293b;
}
* {
  box-sizing: border-box;
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: 'Segoe UI', system-ui, sans-serif;
}`,
    solution: `:root {
  --primary-color: #4f46e5;
  --bg-color: #f8fafc;
  --text-color: #1e293b;
}
* {
  box-sizing: border-box;
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: 'Segoe UI', system-ui, sans-serif;
}`
  },

  htmlContent: `<header style="padding: 16px 20px; background: white; margin-bottom: 20px; border-radius: 10px;">
  <h3 style="margin: 0; color: #4f46e5;">🚀 Website Cá Nhân</h3>
</header>
<main style="max-width: 600px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px;">
  <h2>Khởi Đầu Thiết Kế</h2>
  <p>Hệ thống biến màu sắc CSS giúp trang web đồng bộ và dễ bảo trì.</p>
</main>`,
  cssContent: `body {
  margin: 0;
  padding: 20px;
}`,

  initialCssCode: `/* Bài 14.1: Khai báo :root, box-sizing và style cho body */
:root {
  --primary-color: #4f46e5;
  --bg-color: #f8fafc;
  --text-color: #1e293b;
}

* {

}

body {

}
`,
  solutionCssCode: `:root {
  --primary-color: #4f46e5;
  --bg-color: #f8fafc;
  --text-color: #1e293b;
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: 'Segoe UI', system-ui, sans-serif;
}
`,

  tests: [
    {
      id: 'b14-01-t1',
      description: 'Khai báo đúng :root với các biến màu và * { box-sizing: border-box; }',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes(':root') && styles.includes('--primary-color') && styles.includes('box-sizing');
      }
    }
  ]
};

export const LESSON_B14_02: Lesson = {
  id: 'b14-02',
  title: 'Bài 14.2 (Nâng cao): Layout Flexbox Máy Tính & Card UI',
  shortDescription: 'Dàn layout Header ngang với space-between, lưới 3 cột dự án, đổ bóng Card và bo góc nút bấm.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'css',
  difficulty: 'hard',
  xpReward: 60,
  order: 52,
  week: 14,
  durationMinutes: 30,

  story: `Chào mừng bạn đến với **Bài 14.2: Đồ Án Cuối Khóa — Dàn Layout Flexbox (2/2)**! 📐💻

Dàn trang giao diện trên máy tính chuẩn UI/UX:
- \`header\`: \`display: flex; justify-content: space-between; align-items: center;\`
- \`.project-grid\`: \`display: flex; flex-wrap: wrap; gap: 20px;\`
- \`.project-card\`: \`width: calc(33.333% - 14px); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);\`
- \`.btn\`: Nền màu chính, chữ trắng, bo góc.`,

  taskInstructions: [
    'Cài đặt cho `header`: `display: flex; justify-content: space-between; align-items: center;`',
    'Cài đặt cho `.project-grid`: `display: flex; flex-wrap: wrap; gap: 20px;`',
    'Cài đặt cho mỗi thẻ `.project-card`: `width: calc(33.333% - 14px); border-radius: 12px; box-shadow: ...`',
    'Định dạng cho nút `.btn`: màu nền, chữ trắng, bo góc'
  ],

  hints: {
    level1: 'Viết luật cho header, .project-grid, .project-card, .btn',
    level2: `header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.project-card {
  width: calc(33.333% - 14px);
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}`,
    solution: `header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.project-card {
  width: calc(33.333% - 14px);
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}`
  },

  htmlContent: `<header style="padding: 16px 24px; background: white; margin-bottom: 20px; border-radius: 12px;">
  <div class="logo" style="font-weight: bold; color: #4f46e5;">🚀 MinhAnh Portfolio</div>
  <nav style="display: flex; gap: 16px;">
    <a href="#" style="text-decoration: none; color: #475569;">Trang Chủ</a>
    <a href="#" style="text-decoration: none; color: #475569;">Dự Án</a>
    <a href="#" style="text-decoration: none; color: #475569;">Liên Hệ</a>
  </nav>
</header>

<main style="max-width: 900px; margin: 0 auto;">
  <h2>Dự Án Nổi Bật</h2>
  <div class="project-grid">
    <div class="project-card" style="padding: 20px; box-sizing: border-box;">
      <h3 style="margin-top: 0; color: #4f46e5;">1. Website Portfolio</h3>
      <p style="font-size: 14px; color: #64748b;">Trang web giới thiệu cá nhân.</p>
      <button class="btn">Chi Tiết</button>
    </div>
    <div class="project-card" style="padding: 20px; box-sizing: border-box;">
      <h3 style="margin-top: 0; color: #4f46e5;">2. Mini Game Web</h3>
      <p style="font-size: 14px; color: #64748b;">Game tương tác DOM.</p>
      <button class="btn">Chi Tiết</button>
    </div>
    <div class="project-card" style="padding: 20px; box-sizing: border-box;">
      <h3 style="margin-top: 0; color: #4f46e5;">3. Bảng Tin Sinh Hoạt</h3>
      <p style="font-size: 14px; color: #64748b;">Trang tin tức học đường.</p>
      <button class="btn">Chi Tiết</button>
    </div>
  </div>
</main>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f8fafc;
}`,

  initialCssCode: `/* Bài 14.2: Dàn Header ngang, lưới 3 cột .project-grid và Card UI */
header {

}

.project-grid {

}

.project-card {

}

.btn {

}
`,
  solutionCssCode: `header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.project-card {
  width: calc(33.333% - 14px);
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}
`,

  tests: [
    {
      id: 'b14-02-t1',
      description: 'header có display: flex, justify-content: space-between',
      tester: (doc: Document, win: Window) => {
        const header = doc.querySelector('header');
        if (!header) return false;
        const style = win.getComputedStyle(header);
        return style.display === 'flex' && style.justifyContent === 'space-between';
      }
    },
    {
      id: 'b14-02-t2',
      description: '.project-grid có display: flex, flex-wrap: wrap và .project-card có border-radius: 12px, box-shadow',
      tester: (doc: Document, win: Window) => {
        const grid = doc.querySelector('.project-grid');
        const card = doc.querySelector('.project-card');
        if (!grid || !card) return false;
        const gridStyle = win.getComputedStyle(grid);
        const cardStyle = win.getComputedStyle(card);
        return gridStyle.display === 'flex' && cardStyle.borderRadius === '12px';
      }
    }
  ]
};

export const B14_LESSONS: Lesson[] = [
  LESSON_B14_01,
  LESSON_B14_02,
];
