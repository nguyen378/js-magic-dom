import { Lesson } from '@/types/lesson';

export const LESSON_W07: Lesson = {
  id: 'w07-box-model',
  title: 'Tuần 7: Khoảng Cách Đệm Padding & Lề Margin',
  shortDescription: 'Làm chủ bí mật CSS Box Model: Tạo vùng đệm padding êm ái bên trong, khoảng cách margin bên ngoài và căn giữa khối với margin: 0 auto.',
  category: 'css-boxmodel',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 100,
  order: 7,
  week: 7,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 7**! 📦

Trong CSS, mọi phần tử đều là một **chiếc hộp chữ nhật (Box Model)**:
1. **Content**: Nội dung chữ, ảnh.
2. **Padding**: Khoảng cách từ nội dung tới mép viền bên trong (vùng đệm tạo sự thông thoáng).
3. **Border**: Đường viền của chiếc hộp.
4. **Margin**: Khoảng cách từ mép viền ra các phần tử xung quanh bên ngoài.
- 💡 **Bí kíp kinh điển**: Đặt \`max-width: 500px;\` kết hợp \`margin: 0 auto;\` sẽ giúp chiếc hộp luôn tự động căn giữa màn hình!`,

  taskInstructions: [
    'Đặt `padding: 24px` cho `.container` để nội dung không bị dính sát mép viền',
    'Đặt `margin: 0 auto` và `max-width: 480px` cho `.container` để căn giữa hộp vào giữa trang web',
    'Đặt `margin-bottom: 16px` cho mỗi thẻ `.info-box` để các khối tách nhau ra gọn gàng'
  ],

  hints: {
    level1: 'Viết .container { padding: 24px; margin: 0 auto; max-width: 480px; } và .info-box { margin-bottom: 16px; }',
    level2: 'Ví dụ:\n.container {\n  padding: 24px;\n  margin: 0 auto;\n  max-width: 480px;\n}\n.info-box {\n  margin-bottom: 16px;\n}',
    solution: '.container {\n  padding: 24px;\n  margin: 0 auto;\n  max-width: 480px;\n}\n.info-box {\n  margin-bottom: 16px;\n}'
  },

  htmlContent: `<div class="container">
  <h2>Thông Tin Cá Nhân</h2>
  <div class="info-box">
    <strong>🎓 Trường học:</strong> THCS Ngôi Sao Sáng
  </div>
  <div class="info-box">
    <strong>🚀 Mục tiêu:</strong> Tự làm website game đầu tay
  </div>
  <div class="info-box">
    <strong>💡 Phương châm:</strong> Không ngừng học hỏi mỗi ngày
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  padding: 30px 15px;
  margin: 0;
}
.container {
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
}
h2 {
  color: #0f172a;
  margin-top: 0;
  margin-bottom: 20px;
}
.info-box {
  background: #f1f5f9;
  padding: 14px 18px;
  border-radius: 12px;
  color: #334155;
  border-left: 4px solid #3b82f6;
}`,

  initialCssCode: `/* Tuần 7: Căn chỉnh padding, margin và căn giữa cho .container và .info-box */
.container {

}

.info-box {

}
`,
  solutionCssCode: `.container {
  padding: 24px;
  margin: 0 auto;
  max-width: 480px;
}

.info-box {
  margin-bottom: 16px;
}
`,

  tests: [
    {
      id: 'w07-t1',
      description: '.container có padding là 24px',
      tester: (doc: Document, win: Window) => {
        const container = doc.querySelector('.container');
        if (!container) return false;
        const style = win.getComputedStyle(container);
        return style.paddingTop === '24px' && style.paddingBottom === '24px';
      }
    },
    {
      id: 'w07-t2',
      description: '.container có max-width là 480px và được căn giữa với margin auto',
      tester: (doc: Document, win: Window) => {
        const container = doc.querySelector('.container');
        if (!container) return false;
        const style = win.getComputedStyle(container);
        return style.maxWidth === '480px';
      }
    },
    {
      id: 'w07-t3',
      description: '.info-box có margin-bottom là 16px',
      tester: (doc: Document, win: Window) => {
        const box = doc.querySelector('.info-box');
        if (!box) return false;
        const style = win.getComputedStyle(box);
        return style.marginBottom === '16px';
      }
    }
  ]
};
