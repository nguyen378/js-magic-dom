import { Lesson } from '@/types/lesson';

export const lessonHtml13: Lesson = {
  id: 'css06-flexbox-basics',
  title: 'C06. Bố Cục Hàng Ngang Linh Hoạt (display: flex)',
  shortDescription: 'Làm quen với CSS Flexbox, dàn hàng ngang justify-content và khoảng cách gap',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'css-layout',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 60,
  order: 13,

  story: `**CSS Flexbox** là phát minh vĩ đại nhất giúp việc dàn trang và bố cục giao diện trở nên dễ như ăn kẹo!

Chỉ cần đặt \`display: flex;\` cho thẻ cha (Flex Container), tất cả các thẻ con (Flex Items) bên trong sẽ ngay lập tức xếp thành một hàng ngang ngăn nắp!

Các thuộc tính thần thánh của Flex Container:
1. **\`display: flex\`**: Kích hoạt chế độ dàn hàng linh hoạt.
2. **\`justify-content\`**: Căn chỉnh các phần tử theo trục ngang:
   - \`center\`: Căn giữa hàng.
   - \`space-between\`: Đẩy 2 phần tử ra 2 đầu mép, khoảng trống dồn vào giữa (rất hợp làm Navbar!).
   - \`space-around\` / \`space-evenly\`: Chia đều khoảng trống.
3. **\`gap\`**: Tạo khoảng cách đều nhau giữa các phần tử con (ví dụ: \`gap: 16px;\`).
`,

  taskInstructions: [
    'Trong lớp `.items-container`, kích hoạt `display: flex;`.',
    'Thêm `justify-content: center;` để đưa toàn bộ 3 hộp vật phẩm vào chính giữa.',
    'Thêm `gap: 16px;` để tạo khoảng cách 16px giữa các hộp vật phẩm.'
  ],

  hints: {
    level1: 'Thiết lập display: flex, justify-content: center và gap: 16px trong .items-container.',
    level2: `.items-container {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}`,
    solution: `.items-container {
  display: flex;
  justify-content: center;
  gap: 16px;
}`
  },

  htmlContent: `
<div class="scene">
  <h2 class="title">🎒 Balo Đồ Chơi Ma Thuật</h2>
  <div class="items-container">
    <div class="item-card item-1">
      <div class="emoji">🔮</div>
      <span>Quả Cầu</span>
    </div>
    <div class="item-card item-2">
      <div class="emoji">📜</div>
      <span>Cuộn Giấy</span>
    </div>
    <div class="item-card item-3">
      <div class="emoji">🗝️</div>
      <span>Chìa Khóa</span>
    </div>
  </div>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Sử dụng Flexbox để xếp các item thành hàng ngang căn giữa */

.scene {
  background: #0f172a;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
}

.title {
  color: #fbbf24;
  font-size: 22px;
  margin-bottom: 20px;
}

.items-container {
  /* Thêm display: flex, justify-content: center và gap: 16px tại đây: */

}

.item-card {
  background: #1e293b;
  border: 1px solid #334155;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  min-width: 90px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.emoji {
  font-size: 32px;
  margin-bottom: 6px;
}

.item-card span {
  font-size: 12px;
  font-weight: 700;
  color: #94a3b8;
}
`,

  solutionCssCode: `.scene {
  background: #0f172a;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
}

.title {
  color: #fbbf24;
  font-size: 22px;
  margin-bottom: 20px;
}

.items-container {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.item-card {
  background: #1e293b;
  border: 1px solid #334155;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  min-width: 90px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.emoji {
  font-size: 32px;
  margin-bottom: 6px;
}

.item-card span {
  font-size: 12px;
  font-weight: 700;
  color: #94a3b8;
}`,

  tests: [
    {
      id: 'is_flex_container',
      description: 'Lớp .items-container có display: flex',
      tester: (doc, win) => {
        const container = doc.querySelector('.items-container') as HTMLElement;
        if (!container) return false;
        return win.getComputedStyle(container).display === 'flex';
      }
    },
    {
      id: 'is_justify_centered',
      description: 'Lớp .items-container có justify-content: center',
      tester: (doc, win) => {
        const container = doc.querySelector('.items-container') as HTMLElement;
        if (!container) return false;
        return win.getComputedStyle(container).justifyContent === 'center';
      }
    },
    {
      id: 'has_flex_gap',
      description: 'Lớp .items-container có thuộc tính gap >= 10px',
      tester: (doc, win) => {
        const container = doc.querySelector('.items-container') as HTMLElement;
        if (!container) return false;
        const gap = parseFloat(win.getComputedStyle(container).gap);
        return gap >= 10;
      }
    }
  ]
};
