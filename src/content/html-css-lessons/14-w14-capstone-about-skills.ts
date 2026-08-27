import { Lesson } from '@/types/lesson';

export const LESSON_W14: Lesson = {
  id: 'w14-capstone-about-skills',
  title: 'Buổi 14: Dự Án Cuối Khóa (2/4) — Thiết Kế CSS & Bố Cục Flexbox',
  shortDescription: 'Thiết kế giao diện CSS & Dàn layout Flexbox trên màn hình máy tính: Bảng màu :root, Header ngang space-between, Lưới 3 cột sản phẩm/dự án, Đổ bóng Card 3D và Bo góc nút bấm chuẩn UI.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 150,
  order: 14,
  week: 14,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 14: Dự án cuối khóa (2/4) — Thiết kế CSS & Bố cục Flexbox**! 🎨📐

Hôm nay chúng ta sẽ trang điểm toàn bộ giao diện và dàn layout máy tính chuyên nghiệp:
- **Biến màu sắc \`:root\`**: Định nghĩa hệ thống màu đồng nhất (\`--primary-color\`, \`--bg-color\`, \`--card-bg\`, \`--text-color\`).
- **Header ngang**: Sử dụng \`display: flex; justify-content: space-between; align-items: center;\`.
- **Lưới 3 cột dự án**: Sử dụng \`display: flex; flex-wrap: wrap; gap: 20px;\` kết hợp \`width: calc(33.333% - 14px);\`.
- **Card UI**: Bo góc mềm mại \`border-radius: 12px;\`, đổ bóng nhẹ \`box-shadow: 0 4px 12px rgba(0,0,0,0.1);\`.`,

  taskInstructions: [
    '🟢 Nhiệm vụ 1: Khai báo `:root` với các biến màu (`--primary-color`, `--bg-color`, `--card-bg`, `--text-color`) và đặt `* { box-sizing: border-box; }`',
    '🟢 Nhiệm vụ 2: Cài đặt cho `header` hoặc `.navbar`: `display: flex; justify-content: space-between; align-items: center;`',
    '🟡 Nhiệm vụ 3: Dàn layout `.project-grid`: `display: flex; flex-wrap: wrap; gap: 20px;` và mỗi thẻ `.project-card` có `width: calc(33.333% - 14px);` (hoặc tương đương cho 3 cột)',
    '🟡 Nhiệm vụ 4: Định dạng cho `.project-card` có `background: var(--card-bg)`, `border-radius: 12px;`, `box-shadow` và nút `.btn` có nền `var(--primary-color)`, chữ trắng, bo góc'
  ],

  hints: {
    level1: 'Sử dụng :root, header, .project-grid, .project-card, .btn',
    level2: `/* Gợi ý cú pháp */
:root {
  --primary-color: #4f46e5;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-color: #1e293b;
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

header {
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
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}`,
    solution: `:root {
  --primary-color: #4f46e5;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-color: #1e293b;
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

header {
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
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
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
    <div class="project-card" style="padding: 20px;">
      <h3 style="margin-top: 0; color: #4f46e5;">1. Website Portfolio</h3>
      <p style="font-size: 14px; color: #64748b;">Trang web giới thiệu năng lực cá nhân viết bằng HTML và CSS.</p>
      <button class="btn">Xem Dự Án</button>
    </div>
    <div class="project-card" style="padding: 20px;">
      <h3 style="margin-top: 0; color: #4f46e5;">2. Mini Game Web</h3>
      <p style="font-size: 14px; color: #64748b;">Game tương tác thú vị kết hợp hiệu ứng âm thanh và DOM.</p>
      <button class="btn">Xem Dự Án</button>
    </div>
    <div class="project-card" style="padding: 20px;">
      <h3 style="margin-top: 0; color: #4f46e5;">3. Bảng Tin Sinh Hoạt</h3>
      <p style="font-size: 14px; color: #64748b;">Trang tin tức học tập dành cho học sinh câu lạc bộ tin học.</p>
      <button class="btn">Xem Dự Án</button>
    </div>
  </div>
</main>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
}`,

  initialCssCode: `/* Buổi 14: Thiết lập bảng màu :root, dàn Header ngang, Lưới 3 cột .project-grid và Card UI */
:root {
  --primary-color: #4f46e5;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-color: #1e293b;
}

* {

}

body {

}

header {

}

.project-grid {

}

.project-card {

}

.btn {

}
`,
  solutionCssCode: `:root {
  --primary-color: #4f46e5;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-color: #1e293b;
}

* {
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

header {
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
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
`,

  tests: [
    {
      id: 'w14-t1',
      description: 'Nhiệm vụ 1: Có khai báo :root với các biến màu và * { box-sizing: border-box; }',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes(':root') && styles.includes('--primary-color') && styles.includes('box-sizing');
      }
    },
    {
      id: 'w14-t2',
      description: 'Nhiệm vụ 2: header có display: flex, justify-content: space-between và align-items: center',
      tester: (doc: Document, win: Window) => {
        const header = doc.querySelector('header');
        if (!header) return false;
        const style = win.getComputedStyle(header);
        return style.display === 'flex' && style.justifyContent === 'space-between' && style.alignItems === 'center';
      }
    },
    {
      id: 'w14-t3',
      description: 'Nhiệm vụ 3: .project-grid có display: flex, flex-wrap: wrap và gap: 20px',
      tester: (doc: Document, win: Window) => {
        const grid = doc.querySelector('.project-grid');
        if (!grid) return false;
        const style = win.getComputedStyle(grid);
        return style.display === 'flex' && style.flexWrap === 'wrap';
      }
    },
    {
      id: 'w14-t4',
      description: 'Nhiệm vụ 4: .project-card có border-radius: 12px, box-shadow và .btn có màu nền, bo góc',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.project-card');
        const btn = doc.querySelector('.btn');
        if (!card || !btn) return false;
        const cardStyle = win.getComputedStyle(card);
        const btnStyle = win.getComputedStyle(btn);
        const hasCardStyle = cardStyle.borderRadius === '12px' && cardStyle.boxShadow !== 'none';
        const hasBtnStyle = btnStyle.borderRadius === '8px' || parseInt(btnStyle.borderRadius) > 0;
        return hasCardStyle && hasBtnStyle;
      }
    }
  ]
};
