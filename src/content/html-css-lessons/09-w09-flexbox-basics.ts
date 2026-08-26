import { Lesson } from '@/types/lesson';

export const LESSON_W09: Lesson = {
  id: 'w09-flexbox-basics',
  title: 'Tuần 9: Flexbox Cơ Bản - Dàn Hàng Ngang Linh Hoạt',
  shortDescription: 'Bắt đầu Giai đoạn 3: Làm quen với siêu công nghệ Flexbox. Xếp các thẻ sở thích, kỹ năng dàn hàng ngang đều nhau với display: flex và gap.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 120,
  order: 9,
  week: 9,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 9 — Khám phá sức mạnh Flexbox**! 📐

Mặc định các khối thẻ \`<div>\` luôn xếp chồng lên nhau thành hàng dọc. Làm sao để xếp chúng dàn hàng ngang như các website chuyên nghiệp?
- \`display: flex\`: Biến khối cha thành **Flex Container** và ngay lập tức dàn tất cả phần tử con thành **hàng ngang**!
- \`gap: 16px\`: Tự động tạo khoảng cách đều đặn giữa các cột mà không cần tính toán margin phức tạp.`,

  taskInstructions: [
    'Đặt `display: flex` cho `.skills-container` để các thẻ kỹ năng dàn thành hàng ngang',
    'Đặt `gap: 16px` cho `.skills-container` để các thẻ cách đều nhau',
    'Đặt `flex: 1` cho mỗi thẻ `.skill-item` để các thẻ có chiều rộng tự động co giãn bằng nhau'
  ],

  hints: {
    level1: 'Viết .skills-container { display: flex; gap: 16px; } và .skill-item { flex: 1; }',
    level2: 'Ví dụ:\n.skills-container {\n  display: flex;\n  gap: 16px;\n}\n.skill-item {\n  flex: 1;\n}',
    solution: '.skills-container {\n  display: flex;\n  gap: 16px;\n}\n.skill-item {\n  flex: 1;\n}'
  },

  htmlContent: `<div class="wrapper">
  <h2>Kỹ Năng Của Tôi</h2>
  <div class="skills-container">
    <div class="skill-item">
      <span class="badge">🌐</span>
      <h3>HTML5</h3>
      <p>Dựng khung web</p>
    </div>
    <div class="skill-item">
      <span class="badge">🎨</span>
      <h3>CSS3</h3>
      <p>Trang trí giao diện</p>
    </div>
    <div class="skill-item">
      <span class="badge">⚡</span>
      <h3>Logic</h3>
      <p>Tư duy lập trình</p>
    </div>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f1f5f9;
  padding: 40px 20px;
  margin: 0;
}
.wrapper {
  max-width: 600px;
  margin: 0 auto;
}
h2 {
  color: #0f172a;
  margin-bottom: 20px;
  text-align: center;
}
.skill-item {
  background: white;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
}
.badge {
  font-size: 28px;
  display: block;
  margin-bottom: 6px;
}
.skill-item h3 {
  margin: 0 0 4px;
  color: #3b82f6;
  font-size: 16px;
}
.skill-item p {
  margin: 0;
  color: #64748b;
  font-size: 13px;
}`,

  initialCssCode: `/* Tuần 9: Bật display: flex và gap cho .skills-container và flex: 1 cho .skill-item */
.skills-container {

}

.skill-item {

}
`,
  solutionCssCode: `.skills-container {
  display: flex;
  gap: 16px;
}

.skill-item {
  flex: 1;
}
`,

  tests: [
    {
      id: 'w09-t1',
      description: '.skills-container có display là flex',
      tester: (doc: Document, win: Window) => {
        const container = doc.querySelector('.skills-container');
        if (!container) return false;
        const style = win.getComputedStyle(container);
        return style.display === 'flex';
      }
    },
    {
      id: 'w09-t2',
      description: '.skills-container có thuộc tính gap: 16px',
      tester: (doc: Document, win: Window) => {
        const container = doc.querySelector('.skills-container');
        if (!container) return false;
        const style = win.getComputedStyle(container);
        return style.gap === '16px' || style.columnGap === '16px';
      }
    },
    {
      id: 'w09-t3',
      description: '.skill-item có flex-grow hoặc flex: 1',
      tester: (doc: Document, win: Window) => {
        const item = doc.querySelector('.skill-item');
        if (!item) return false;
        const style = win.getComputedStyle(item);
        return style.flexGrow === '1';
      }
    }
  ]
};
