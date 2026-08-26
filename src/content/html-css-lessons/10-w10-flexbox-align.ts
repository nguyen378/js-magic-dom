import { Lesson } from '@/types/lesson';

export const LESSON_W10: Lesson = {
  id: 'w10-flexbox-align',
  title: 'Tuần 10: Căn Chỉnh Trục & Thanh Điều Hướng (Navbar)',
  shortDescription: 'Tạo thanh điều hướng website chuyên nghiệp: Đẩy logo sang trái và menu sang phải với justify-content: space-between, căn giữa theo chiều dọc với align-items: center.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 120,
  order: 10,
  week: 10,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 10**! 🧭

Làm sao để tạo một thanh Menu (**Navbar**) chuẩn như Facebook hay Google: Logo nằm sát góc trái, Menu điều hướng nằm sát góc phải và tất cả đều thẳng hàng ở giữa?
- \`justify-content: space-between\`: Đẩy 2 đầu phần tử ra xa nhau tối đa.
- \`align-items: center\`: Căn giữa hoàn hảo tất cả các phần tử theo chiều cao dọc.`,

  taskInstructions: [
    'Đặt `display: flex`, `justify-content: space-between` và `align-items: center` cho thanh `.navbar`',
    'Đặt `display: flex`, `gap: 20px` và `list-style: none` cho danh sách `.nav-links`',
    'Đặt `align-items: center` và `gap: 10px` cho khối `.logo`'
  ],

  hints: {
    level1: 'Sử dụng display: flex, justify-content: space-between và align-items: center',
    level2: 'Ví dụ:\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav-links {\n  display: flex;\n  gap: 20px;\n  list-style: none;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}',
    solution: '.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav-links {\n  display: flex;\n  gap: 20px;\n  list-style: none;\n}\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}'
  },

  htmlContent: `<nav class="navbar">
  <div class="logo">
    <span class="logo-icon">🚀</span>
    <span class="logo-text">NamPortfolio</span>
  </div>
  <ul class="nav-links">
    <li><a href="#about">Về Tôi</a></li>
    <li><a href="#skills">Kỹ Năng</a></li>
    <li><a href="#projects">Dự Án</a></li>
    <li><a href="#contact" class="btn-nav">Liên Hệ</a></li>
  </ul>
</nav>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #0f172a;
  padding: 20px;
  margin: 0;
}
.navbar {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  padding: 14px 28px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
.logo-icon {
  font-size: 24px;
}
.logo-text {
  font-weight: 800;
  font-size: 18px;
  color: white;
}
.nav-links {
  margin: 0;
  padding: 0;
}
.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: color 0.2s;
}
.btn-nav {
  background: #6366f1;
  color: white !important;
  padding: 8px 16px;
  border-radius: 10px;
}`,

  initialCssCode: `/* Tuần 10: Xây dựng thanh Navbar dùng display: flex, justify-content và align-items */
.navbar {

}

.nav-links {

}

.logo {

}
`,
  solutionCssCode: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
`,

  tests: [
    {
      id: 'w10-t1',
      description: '.navbar có display là flex, justify-content: space-between và align-items: center',
      tester: (doc: Document, win: Window) => {
        const navbar = doc.querySelector('.navbar');
        if (!navbar) return false;
        const style = win.getComputedStyle(navbar);
        return style.display === 'flex' && style.justifyContent === 'space-between' && style.alignItems === 'center';
      }
    },
    {
      id: 'w10-t2',
      description: '.nav-links có display là flex và gap: 20px',
      tester: (doc: Document, win: Window) => {
        const links = doc.querySelector('.nav-links');
        if (!links) return false;
        const style = win.getComputedStyle(links);
        return style.display === 'flex' && (style.gap === '20px' || style.columnGap === '20px');
      }
    },
    {
      id: 'w10-t3',
      description: '.logo có display là flex và align-items: center',
      tester: (doc: Document, win: Window) => {
        const logo = doc.querySelector('.logo');
        if (!logo) return false;
        const style = win.getComputedStyle(logo);
        return style.display === 'flex' && style.alignItems === 'center';
      }
    }
  ]
};
