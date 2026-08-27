import { Lesson } from '@/types/lesson';

export const LESSON_W09: Lesson = {
  id: 'w09-flexbox-basics',
  title: 'Buổi 9: Bố Cục Flexbox Cơ Bản (1 Chiều)',
  shortDescription: 'Làm quen display: flex dàn hàng ngang, căn ngang justify-content (center, space-between), căn dọc align-items và khoảng cách tự động gap.',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 120,
  order: 9,
  week: 9,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 9: Bố cục Flexbox cơ bản (1 chiều)**! 📐

Flexbox là công nghệ dàn trang mạnh mẽ và quan trọng nhất của lập trình web hiện đại:
- **\`display: flex\`**: Bật chế độ Flexbox cho khung cha (Flex Container), biến toàn bộ các phần tử con thành hàng ngang ngay lập tức.
- **Căn chỉnh trục chính (Ngang) \`justify-content\`**:
  - \`center\`: Đưa toàn bộ nội dung vào chính giữa.
  - \`space-between\`: Đẩy 2 đầu phần tử dạt về 2 phía mép khung (dành cho Logo bên trái, Menu bên phải).
- **Căn chỉnh trục phụ (Dọc) \`align-items: center\`**: Canh thẳng hàng các phần tử theo chiều cao dọc.
- **Khoảng cách tự động \`gap\`**: Tạo khoảng cách đều đặn giữa các nút hay cột mà không cần margin.`,

  taskInstructions: [
    '🟢 Bài 9.1: Đặt `display: flex` cho `.container` để 3 thẻ con tự động dàn thành hàng ngang',
    '🟢 Bài 9.2: Đặt cho khung `.banner`: `display: flex; justify-content: center; align-items: center; height: 250px;` để căn giữa tiêu đề',
    '🟡 Bài 9.3: Cài đặt cho khung `.header`: `display: flex; justify-content: space-between; align-items: center;` để đẩy Logo sang trái, Menu sang phải',
    '🟡 Bài 9.4: Đặt `display: flex` và `gap: 15px` cho `.button-group` tạo khoảng cách đều giữa các nút'
  ],

  hints: {
    level1: 'Viết các thuộc tính Flexbox cho .container, .banner, .header, và .button-group.',
    level2: `/* Gợi ý cú pháp */
.container {
  display: flex;
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
  gap: 15px;
}`,
    solution: `.container {
  display: flex;
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
  gap: 15px;
}`
  },

  htmlContent: `<div class="header">
  <div class="logo">🚀 MyBrand</div>
  <nav class="nav-menu">
    <a href="#">Trang chủ</a> • <a href="#">Dự án</a> • <a href="#">Liên hệ</a>
  </nav>
</div>

<div class="banner">
  <h2>Chào Mừng Đến Với Thế Giới Flexbox</h2>
</div>

<h3>Các khối hộp ngang:</h3>
<div class="container">
  <div class="box">Khối 1</div>
  <div class="box">Khối 2</div>
  <div class="box">Khối 3</div>
</div>

<h3>Hàng nút bấm:</h3>
<div class="button-group">
  <button class="btn">Nút 1</button>
  <button class="btn">Nút 2</button>
  <button class="btn">Nút 3</button>
  <button class="btn">Nút 4</button>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  padding: 20px;
  margin: 0;
}
.header {
  background: white;
  padding: 14px 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.logo {
  font-weight: bold;
  color: #4f46e5;
}
.banner {
  background: linear-gradient(135deg, #6366f1, #3b82f6);
  color: white;
  border-radius: 16px;
  margin-bottom: 20px;
  text-align: center;
}
.box {
  background: white;
  padding: 16px 24px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  margin-right: 8px;
}
.btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}`,

  initialCssCode: `/* Buổi 9: Thực hành Flexbox cho .container, .banner, .header và .button-group */
.container {

}

.banner {

}

.header {

}

.button-group {

}
`,
  solutionCssCode: `.container {
  display: flex;
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
  gap: 15px;
}
`,

  tests: [
    {
      id: 'w09-t1',
      description: 'Bài 9.1: .container có display: flex',
      tester: (doc: Document, win: Window) => {
        const container = doc.querySelector('.container');
        if (!container) return false;
        const style = win.getComputedStyle(container);
        return style.display === 'flex';
      }
    },
    {
      id: 'w09-t2',
      description: 'Bài 9.2: .banner có display: flex, justify-content: center, align-items: center và height: 250px',
      tester: (doc: Document, win: Window) => {
        const banner = doc.querySelector('.banner');
        if (!banner) return false;
        const style = win.getComputedStyle(banner);
        return style.display === 'flex' && style.justifyContent === 'center' && style.alignItems === 'center' && style.height === '250px';
      }
    },
    {
      id: 'w09-t3',
      description: 'Bài 9.3: .header có display: flex, justify-content: space-between và align-items: center',
      tester: (doc: Document, win: Window) => {
        const header = doc.querySelector('.header');
        if (!header) return false;
        const style = win.getComputedStyle(header);
        return style.display === 'flex' && style.justifyContent === 'space-between' && style.alignItems === 'center';
      }
    },
    {
      id: 'w09-t4',
      description: 'Bài 9.4: .button-group có display: flex và gap: 15px',
      tester: (doc: Document, win: Window) => {
        const group = doc.querySelector('.button-group');
        if (!group) return false;
        const style = win.getComputedStyle(group);
        return style.display === 'flex' && (style.gap === '15px' || style.columnGap === '15px');
      }
    }
  ]
};
