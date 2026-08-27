import { Lesson } from '@/types/lesson';

export const LESSON_B15_01: Lesson = {
  id: 'b15-01',
  title: 'Bài 15.1 (Cơ bản): Tối Ưu Giao Diện Điện Thoại',
  shortDescription: 'Sử dụng @media (max-width: 768px) để chuyển đổi lưới dự án sang 1 cột và menu dạng dọc.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 50,
  order: 53,
  week: 15,
  durationMinutes: 30,

  story: `Chào mừng bạn đến với **Bài 15.1: Đồ Án Cuối Khóa — Tối Ưu Điện Thoại (1/2)**! 📱✨

Biến đổi website để xem mượt mà trên điện thoại:
\`\`\`css
@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }
  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}
\`\`\``,

  taskInstructions: [
    'Khai báo `@media (max-width: 768px)`',
    'Trong media query, đặt `.project-card`: `width: 100%;`',
    'Chuyển thanh menu `.nav-menu`: `flex-direction: column; text-align: center;`'
  ],

  hints: {
    level1: 'Viết các thay đổi bên trong khối @media (max-width: 768px) { ... }',
    level2: `@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }
  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}`,
    solution: `@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }
  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}`
  },

  htmlContent: `<nav style="padding: 16px 20px; background: white; margin-bottom: 20px; border-radius: 12px;">
  <ul class="nav-menu" style="display: flex; gap: 16px; list-style: none; margin: 0; padding: 0;">
    <li><a href="#" style="color: #4f46e5; text-decoration: none; font-weight: bold;">Trang Chủ</a></li>
    <li><a href="#" style="color: #64748b; text-decoration: none;">Dự Án</a></li>
    <li><a href="#" style="color: #64748b; text-decoration: none;">Liên Hệ</a></li>
  </ul>
</nav>

<div class="project-grid" style="display: flex; flex-wrap: wrap; gap: 16px;">
  <div class="project-card" style="width: calc(33.333% - 11px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box;">
    <h4>Card 1</h4>
  </div>
  <div class="project-card" style="width: calc(33.333% - 11px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box;">
    <h4>Card 2</h4>
  </div>
  <div class="project-card" style="width: calc(33.333% - 11px); background: white; padding: 16px; border-radius: 10px; box-sizing: border-box;">
    <h4>Card 3</h4>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f1f5f9;
}`,

  initialCssCode: `/* Bài 15.1: Viết Media Query @media (max-width: 768px) tối ưu hiển thị Mobile */
@media (max-width: 768px) {
  .project-card {

  }

  .nav-menu {

  }
}
`,
  solutionCssCode: `@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }

  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}
`,

  tests: [
    {
      id: 'b15-01-t1',
      description: 'Trong @media (max-width: 768px), .project-card có width: 100% và .nav-menu có flex-direction: column',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('@media') && styles.includes('100%') && styles.includes('column');
      }
    }
  ]
};

export const LESSON_B15_02: Lesson = {
  id: 'b15-02',
  title: 'Bài 15.2 (Nâng cao): Hiệu Ứng Tương Tác & Chuyển Động',
  shortDescription: 'Thêm hiệu ứng hover nâng thẻ 3D transform: translateY(-6px) và đổi màu nút bấm sinh động.',
  category: 'css-effects',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'css',
  difficulty: 'hard',
  xpReward: 60,
  order: 54,
  week: 15,
  durationMinutes: 30,

  story: `Chào mừng bạn đến với **Bài 15.2: Đồ Án Cuối Khóa — Hiệu Ứng Tương Tác (2/2)**! ✨🚀

Thổi hồn vào trang web bằng các chuyển động mượt mà:
- \`.project-card\`: \`transition: 0.3s;\`
- \`.project-card:hover\`: \`transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.15);\`
- \`.btn:hover\`: Đổi màu nền tương tác.`,

  taskInstructions: [
    'Thêm `transition: 0.3s;` cho `.project-card` và hiệu ứng `.project-card:hover` nâng thẻ `transform: translateY(-6px);`',
    'Thêm hiệu ứng `.btn:hover` đổi màu nền và `cursor: pointer;`'
  ],

  hints: {
    level1: 'Viết transition cho .project-card, .project-card:hover, .btn:hover',
    level2: `.project-card {
  transition: 0.3s;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
.btn {
  transition: 0.3s;
  cursor: pointer;
}
.btn:hover {
  background-color: #3730a3;
}`,
    solution: `.project-card {
  transition: 0.3s;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
.btn {
  transition: 0.3s;
  cursor: pointer;
}
.btn:hover {
  background-color: #3730a3;
}`
  },

  htmlContent: `<div class="project-grid" style="display: flex; gap: 20px; max-width: 680px; margin: 20px auto;">
  <div class="project-card" style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); flex: 1;">
    <h3 style="color: #4f46e5; margin-top: 0;">Dự Án Đồ Án</h3>
    <p style="color: #64748b; font-size: 14px;">Trang web của tôi đã có hiệu ứng mượt mà!</p>
    <button class="btn" style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px;">Xem Thêm</button>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 30px;
  background: #f8fafc;
}`,

  initialCssCode: `/* Bài 15.2: Thêm transition và hover 3D cho .project-card và .btn */
.project-card {

}

.project-card:hover {

}

.btn {

}

.btn:hover {

}
`,
  solutionCssCode: `.project-card {
  transition: 0.3s;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.btn {
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #3730a3;
}
`,

  tests: [
    {
      id: 'b15-02-t1',
      description: '.project-card có transition và .project-card:hover có transform: translateY',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.project-card:hover') && styles.includes('translateY');
      }
    },
    {
      id: 'b15-02-t2',
      description: '.btn:hover có thay đổi màu nền',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.btn:hover') && styles.includes('background');
      }
    }
  ]
};

export const B15_LESSONS: Lesson[] = [
  LESSON_B15_01,
  LESSON_B15_02,
];
