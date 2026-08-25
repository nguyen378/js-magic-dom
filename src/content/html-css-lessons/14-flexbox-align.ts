import { Lesson } from '@/types/lesson';

export const lessonHtml14: Lesson = {
  id: 'css07-flexbox-align',
  title: 'C07. Căn Giữa Hoàn Hảo (align-items, flex-direction)',
  shortDescription: 'Căn giữa theo trục dọc align-items, đổi hướng trục flex-direction và xếp dòng flex-wrap',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'css-layout',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 60,
  order: 14,

  story: `Trong lịch sử thiết kế web, việc "căn giữa một phần tử theo cả chiều dọc lẫn chiều ngang" từng là thử thách khó nhất!

Nhưng với Flexbox hiện đại, bạn chỉ cần 3 dòng lệnh thần thánh:
\`\`\`css
.parent-container {
  display: flex;
  justify-content: center; /* Căn giữa theo trục ngang */
  align-items: center;     /* Căn giữa theo trục dọc */
}
\`\`\`

Ngoài ra:
- **\`flex-direction: column;\`**: Đổi hướng xếp từ hàng ngang (row) sang cột dọc (column).
- **\`flex-wrap: wrap;\`**: Tự động rớt dòng khi hết khoảng trống màn hình (rất quan trọng trên điện thoại di động).
`,

  taskInstructions: [
    'Trong lớp `.navbar-bar`, đặt `display: flex;`.',
    'Thêm `justify-content: space-between;` để logo dạt sang trái và menu dạt sang phải.',
    'Thêm `align-items: center;` để mọi phần tử thẳng hàng hoàn hảo theo chiều dọc.',
    'Trong lớp `.menu-links`, đặt `display: flex;` và `gap: 20px;`.'
  ],

  hints: {
    level1: 'Sử dụng display: flex, justify-content: space-between và align-items: center cho .navbar-bar.',
    level2: `.navbar-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.menu-links {\n  display: flex;\n  gap: 20px;\n}`,
    solution: `.navbar-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-links {
  display: flex;
  gap: 20px;
}`
  },

  htmlContent: `
<div class="preview-window">
  <nav class="navbar-bar">
    <div class="logo">
      <span class="icon">🪄</span>
      <span class="brand">Magic Academy</span>
    </div>
    <div class="menu-links">
      <a href="#">Trang Chủ</a>
      <a href="#">Bùa Chú</a>
      <a href="#">Xếp Hạng</a>
    </div>
  </nav>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Xây dựng thanh Navbar chuẩn bằng Flexbox */

.preview-window {
  background: #090d16;
  padding: 24px;
  border-radius: 20px;
}

.navbar-bar {
  background: #1e1b4b;
  border: 1px solid #3730a3;
  padding: 14px 24px;
  border-radius: 16px;
  color: white;
  /* Thêm display: flex, justify-content: space-between và align-items: center tại đây: */

}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 16px;
  color: #38bdf8;
}

.menu-links {
  /* Thêm display: flex và gap: 20px tại đây: */

}

.menu-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: color 0.2s;
}

.menu-links a:hover {
  color: #fbbf24;
}
`,

  solutionCssCode: `.preview-window {
  background: #090d16;
  padding: 24px;
  border-radius: 20px;
}

.navbar-bar {
  background: #1e1b4b;
  border: 1px solid #3730a3;
  padding: 14px 24px;
  border-radius: 16px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 16px;
  color: #38bdf8;
}

.menu-links {
  display: flex;
  gap: 20px;
}

.menu-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: color 0.2s;
}

.menu-links a:hover {
  color: #fbbf24;
}`,

  tests: [
    {
      id: 'navbar_flex',
      description: 'Thanh .navbar-bar có display: flex và justify-content: space-between',
      tester: (doc, win) => {
        const nav = doc.querySelector('.navbar-bar') as HTMLElement;
        if (!nav) return false;
        const style = win.getComputedStyle(nav);
        return style.display === 'flex' && style.justifyContent === 'space-between';
      }
    },
    {
      id: 'navbar_align_center',
      description: 'Thanh .navbar-bar có align-items: center',
      tester: (doc, win) => {
        const nav = doc.querySelector('.navbar-bar') as HTMLElement;
        if (!nav) return false;
        return win.getComputedStyle(nav).alignItems === 'center';
      }
    },
    {
      id: 'menu_flex_gap',
      description: 'Khối .menu-links có display: flex và khoảng cách gap >= 10px',
      tester: (doc, win) => {
        const menu = doc.querySelector('.menu-links') as HTMLElement;
        if (!menu) return false;
        const style = win.getComputedStyle(menu);
        return style.display === 'flex' && parseFloat(style.gap) >= 10;
      }
    }
  ]
};
