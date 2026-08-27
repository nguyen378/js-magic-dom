import { Lesson } from '@/types/lesson';

export const LESSON_B09_01: Lesson = {
  id: 'b09-01',
  title: 'Bài 9.1 (Cơ bản): Xếp Phần Tử Thành Hàng Ngang',
  shortDescription: 'Sử dụng display: flex để biến các phần tử con từ xếp dọc thành xếp ngang tự động.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 33,
  week: 9,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 9.1: Bố cục Flexbox 1 chiều**! 📐

Mặc định các thẻ \`<div>\` luôn xếp chồng lên nhau theo chiều dọc. Chỉ với một câu lệnh ma thuật:
\`\`\`css
.container {
  display: flex;
}
\`\`\`
Toàn bộ các phần tử con bên trong sẽ tự động dàn đều thành một **hàng ngang** hoàn hảo!`,

  taskInstructions: [
    'Thiết lập cho class `.container`: `display: flex;`'
  ],

  hints: {
    level1: 'Viết luật CSS: .container { display: flex; }',
    level2: `.container {
  display: flex;
}`,
    solution: `.container {
  display: flex;
}`
  },

  htmlContent: `<div class="container">
  <div class="box" style="background: #4f46e5; color: white; padding: 20px; border-radius: 8px; margin: 4px;">Khối 1</div>
  <div class="box" style="background: #06b6d4; color: white; padding: 20px; border-radius: 8px; margin: 4px;">Khối 2</div>
  <div class="box" style="background: #10b981; color: white; padding: 20px; border-radius: 8px; margin: 4px;">Khối 3</div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 30px;
  background: #f8fafc;
}`,

  initialCssCode: `/* Bài 9.1: Dàn các khối con thành hàng ngang với display: flex */
.container {

}
`,
  solutionCssCode: `.container {
  display: flex;
}
`,

  tests: [
    {
      id: 'b09-01-t1',
      description: '.container có display: flex',
      tester: (doc: Document, win: Window) => {
        const c = doc.querySelector('.container');
        if (!c) return false;
        const style = win.getComputedStyle(c);
        return style.display === 'flex';
      }
    }
  ]
};

export const LESSON_B09_02: Lesson = {
  id: 'b09-02',
  title: 'Bài 9.2 (Cơ bản): Căn Giữa Tuyệt Đối Với Flexbox',
  shortDescription: 'Sử dụng justify-content: center và align-items: center để căn giữa cả ngang lẫn dọc.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 34,
  week: 9,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 9.2: Căn giữa tuyệt đối với Flexbox**! 🎯

Căn giữa nội dung vào chính giữa khung hình:
- \`display: flex;\`
- \`justify-content: center;\` (Căn giữa theo trục ngang)
- \`align-items: center;\` (Căn giữa theo trục dọc)
- \`height: 250px;\``,

  taskInstructions: [
    'Thiết lập cho class `.banner`: `display: flex;`',
    'Căn giữa theo chiều ngang: `justify-content: center;`',
    'Căn giữa theo chiều dọc: `align-items: center;`',
    'Thiết lập chiều cao: `height: 250px;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .banner với 4 thuộc tính: display, justify-content, align-items, height',
    level2: `.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}`,
    solution: `.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}`
  },

  htmlContent: `<div class="banner">
  <div class="banner-content" style="background: white; padding: 20px 30px; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); text-align: center;">
    <h3 style="margin: 0; color: #4f46e5;">🌟 Chào Mừng Đến Với Lớp Học Flexbox!</h3>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f1f5f9;
}
.banner {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 16px;
}`,

  initialCssCode: `/* Bài 9.2: Căn giữa nội dung banner cả trục ngang lẫn trục dọc */
.banner {

}
`,
  solutionCssCode: `.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}
`,

  tests: [
    {
      id: 'b09-02-t1',
      description: '.banner có display: flex, justify-content: center và align-items: center',
      tester: (doc: Document, win: Window) => {
        const b = doc.querySelector('.banner');
        if (!b) return false;
        const style = win.getComputedStyle(b);
        return style.display === 'flex' && style.justifyContent === 'center' && style.alignItems === 'center';
      }
    },
    {
      id: 'b09-02-t2',
      description: '.banner có height: 250px',
      tester: (doc: Document, win: Window) => {
        const b = doc.querySelector('.banner');
        if (!b) return false;
        const style = win.getComputedStyle(b);
        return style.height === '250px';
      }
    }
  ]
};

export const LESSON_B09_03: Lesson = {
  id: 'b09-03',
  title: 'Bài 9.3 (Nâng cao): Dựng Thanh Menu Hai Góc (Space-Between)',
  shortDescription: 'Sử dụng justify-content: space-between để đẩy Logo sang góc trái và Menu sang góc phải.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 35,
  order: 35,
  week: 9,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 9.3: Dàn Header hai góc với Space-Between**! 🚀

Trong mọi website hiện đại, Logo thường nằm sát góc trái và Menu điều hướng nằm sát góc phải:
- \`display: flex;\`
- \`justify-content: space-between;\` (Đẩy các phần tử con dạt về 2 phía mép khung)
- \`align-items: center;\` (Căn thẳng hàng theo chiều dọc)`,

  taskInstructions: [
    'Thiết lập cho class `.header`: `display: flex;`',
    'Đẩy 2 khối con về 2 phía đối diện: `justify-content: space-between;`',
    'Căn giữa trục dọc: `align-items: center;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .header: display: flex; justify-content: space-between; align-items: center;',
    level2: `.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
    solution: `.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`
  },

  htmlContent: `<header class="header">
  <div class="logo" style="font-weight: 800; font-size: 18px; color: #4f46e5;">🚀 CodeMaster</div>
  <nav class="nav-links" style="display: flex; gap: 16px;">
    <a href="#" style="text-decoration: none; color: #475569; font-weight: 600;">Trang Chủ</a>
    <a href="#" style="text-decoration: none; color: #475569; font-weight: 600;">Khóa Học</a>
    <a href="#" style="text-decoration: none; color: #475569; font-weight: 600;">Liên Hệ</a>
  </nav>
</header>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f8fafc;
}
.header {
  background: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}`,

  initialCssCode: `/* Bài 9.3: Dàn đều Logo bên trái và Menu bên phải với space-between */
.header {

}
`,
  solutionCssCode: `.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`,

  tests: [
    {
      id: 'b09-03-t1',
      description: '.header có display: flex, justify-content: space-between và align-items: center',
      tester: (doc: Document, win: Window) => {
        const h = doc.querySelector('.header');
        if (!h) return false;
        const style = win.getComputedStyle(h);
        return style.display === 'flex' && style.justifyContent === 'space-between' && style.alignItems === 'center';
      }
    }
  ]
};

export const LESSON_B09_04: Lesson = {
  id: 'b09-04',
  title: 'Bài 9.4 (Nâng cao): Hàng Nút Bấm Với Flex Gap',
  shortDescription: 'Sử dụng display: flex kết hợp gap: 15px để tạo khoảng cách đều đặn giữa các nút bấm.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 40,
  order: 36,
  week: 9,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 9.4: Khoảng cách thông minh Flex Gap**! 🔘↔️🔘

Thay vì phải căn chỉnh margin phức tạp cho từng nút con, Flexbox mang đến thuộc tính thần kỳ \`gap\`:
- \`display: flex;\`
- \`gap: 15px;\` (Tự động tạo khoảng cách 15px đồng đều giữa các nút bấm mà không làm thừa lề ở 2 đầu).`,

  taskInstructions: [
    'Thiết lập cho class `.button-group`: `display: flex;`',
    'Tạo khoảng cách giữa các nút: `gap: 15px;`'
  ],

  hints: {
    level1: 'Viết luật CSS: .button-group { display: flex; gap: 15px; }',
    level2: `.button-group {
  display: flex;
  gap: 15px;
}`,
    solution: `.button-group {
  display: flex;
  gap: 15px;
}`
  },

  htmlContent: `<div class="button-group">
  <button class="btn btn-save" style="background: #10b981; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Lưu Lại</button>
  <button class="btn btn-edit" style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Chỉnh Sửa</button>
  <button class="btn btn-delete" style="background: #ef4444; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Xóa Bỏ</button>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 30px;
  background: #f8fafc;
}`,

  initialCssCode: `/* Bài 9.4: Xếp hàng ngang và đặt khoảng cách gap: 15px cho .button-group */
.button-group {

}
`,
  solutionCssCode: `.button-group {
  display: flex;
  gap: 15px;
}
`,

  tests: [
    {
      id: 'b09-04-t1',
      description: '.button-group có display: flex và gap: 15px',
      tester: (doc: Document, win: Window) => {
        const bg = doc.querySelector('.button-group');
        if (!bg) return false;
        const style = win.getComputedStyle(bg);
        return style.display === 'flex' && (style.gap === '15px' || style.rowGap === '15px');
      }
    }
  ]
};

export const B09_LESSONS: Lesson[] = [
  LESSON_B09_01,
  LESSON_B09_02,
  LESSON_B09_03,
  LESSON_B09_04,
];
