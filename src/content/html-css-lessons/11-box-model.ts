import { Lesson } from '@/types/lesson';

export const lessonHtml11: Lesson = {
  id: 'css04-box-model',
  title: 'C04. Bí Quyết Box Model (padding, margin, width)',
  shortDescription: 'Làm chủ khoảng cách bên trong padding, lề bên ngoài margin và kích thước width/height',
  category: 'css-boxmodel',
  course: 'html-css',
  track: 'css-foundation',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 50,
  order: 11,

  story: `Trong CSS, mọi phần tử trên trang web đều là một **chiếc hộp (Box)**! Khái niệm này gọi là **CSS Box Model**, bao gồm 4 lớp từ trong ra ngoài:

1. **Content**: Nội dung cốt lõi (văn bản, ảnh) - được kiểm soát bởi \`width\` và \`height\`.
2. **Padding (Vùng đệm)**: Khoảng trống từ nội dung đến đường viền bên trong hộp.
3. **Border (Đường viền)**: Khung bao bọc xung quanh padding.
4. **Margin (Khoảng cách lề)**: Khoảng cách đẩy chiếc hộp ra xa các phần tử lân cận bên ngoài.

💡 **Quy tắc vàng**: 
- \`margin: 20px auto;\` giúp căn giữa chiếc hộp có chiều rộng cố định!
- \`box-sizing: border-box;\` giữ nguyên kích thước tổng thể khi thêm padding.
`,

  taskInstructions: [
    'Trong lớp `.chest-box`, thiết lập chiều rộng `width: 320px;`.',
    'Thêm vùng đệm bên trong `padding: 24px;` để chữ và nút không bị dính sát vào viền.',
    'Thêm khoảng cách lề ngoài `margin: 20px auto;` để đẩy và căn giữa chiếc hộp.',
    'Thêm `box-sizing: border-box;` để kiểm soát kích thước chuẩn xác.'
  ],

  hints: {
    level1: 'Thiết lập width, padding, margin và box-sizing cho .chest-box.',
    level2: `.chest-box {\n  width: 320px;\n  padding: 24px;\n  margin: 20px auto;\n  box-sizing: border-box;\n}`,
    solution: `.chest-box {
  background: #1e1b4b;
  color: white;
  border-radius: 20px;
  border: 2px solid #6366f1;
  text-align: center;
  width: 320px;
  padding: 24px;
  margin: 20px auto;
  box-sizing: border-box;
}`
  },

  htmlContent: `
<div class="scene">
  <div class="chest-box">
    <div class="icon">🎁</div>
    <h3>Rương Báu Hoàng Gia</h3>
    <p>Chứa 1000 vàng và 5 bảo ngọc thần bí.</p>
  </div>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Tinh chỉnh Box Model cho .chest-box */

.chest-box {
  background: #1e1b4b;
  color: white;
  border-radius: 20px;
  border: 2px solid #6366f1;
  text-align: center;
  /* Thêm width, padding, margin và box-sizing tại đây: */

}

.icon {
  font-size: 48px;
  margin-bottom: 8px;
}

h3 {
  color: #fbbf24;
  font-size: 20px;
  margin-bottom: 6px;
}

p {
  color: #cbd5e1;
  font-size: 13px;
}
`,

  solutionCssCode: `.chest-box {
  background: #1e1b4b;
  color: white;
  border-radius: 20px;
  border: 2px solid #6366f1;
  text-align: center;
  width: 320px;
  padding: 24px;
  margin: 20px auto;
  box-sizing: border-box;
}

.icon {
  font-size: 48px;
  margin-bottom: 8px;
}

h3 {
  color: #fbbf24;
  font-size: 20px;
  margin-bottom: 6px;
}

p {
  color: #cbd5e1;
  font-size: 13px;
}`,

  tests: [
    {
      id: 'box_width',
      description: 'Lớp .chest-box có chiều rộng width xấp xỉ 320px',
      tester: (doc, win) => {
        const box = doc.querySelector('.chest-box') as HTMLElement;
        if (!box) return false;
        const width = parseFloat(win.getComputedStyle(box).width);
        return width > 250 && width <= 350;
      }
    },
    {
      id: 'box_padding',
      description: 'Lớp .chest-box có padding >= 16px',
      tester: (doc, win) => {
        const box = doc.querySelector('.chest-box') as HTMLElement;
        if (!box) return false;
        const pTop = parseFloat(win.getComputedStyle(box).paddingTop);
        return pTop >= 16;
      }
    },
    {
      id: 'box_margin_auto',
      description: 'Lớp .chest-box có margin căn lề',
      tester: (doc, win) => {
        const box = doc.querySelector('.chest-box') as HTMLElement;
        if (!box) return false;
        const mTop = parseFloat(win.getComputedStyle(box).marginTop);
        return mTop >= 10;
      }
    }
  ]
};
