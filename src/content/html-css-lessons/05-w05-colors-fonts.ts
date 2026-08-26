import { Lesson } from '@/types/lesson';

export const LESSON_W05: Lesson = {
  id: 'w05-colors-fonts',
  title: 'Tuần 5: Nhuộm Màu Giao Diện Với CSS',
  shortDescription: 'Bước sang Giai đoạn 2: Tự tay phối màu chữ color, màu nền background-color, cỡ chữ font-size và căn giữa text-align.',
  category: 'css-basic',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 100,
  order: 5,
  week: 5,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 5 — Bắt đầu Giai đoạn Tô màu & Thiết kế CSS**! 🎨

CSS (Cascading Style Sheets) là cây cọ thần kỳ giúp trang điểm cho khung xương HTML:
- \`color\`: Đổi màu chữ (ví dụ: \`#4f46e5\`, \`white\`, \`#0f172a\`).
- \`background-color\`: Đổi màu nền của hộp hoặc toàn trang web.
- \`font-size\`: Kích thước chữ (ví dụ: \`28px\`, \`16px\`).
- \`text-align: center\`: Căn giữa dòng chữ ngay ngắn.`,

  taskInstructions: [
    'Đặt màu nền `background-color: #0f172a` (màu xanh than huyền bí) cho `body`',
    'Đặt màu chữ `color: #f8fafc` cho toàn bộ văn bản trong `body`',
    'Đặt màu chữ `color: #38bdf8` (xanh ngọc sáng) và `text-align: center` cho thẻ `h1`',
    'Đặt kích thước chữ `font-size: 16px` và `text-align: center` cho đoạn văn `.bio`'
  ],

  hints: {
    level1: 'Sử dụng cú pháp bộ chọn CSS: body { ... }, h1 { ... }, .bio { ... }',
    level2: 'Ví dụ:\nbody {\n  background-color: #0f172a;\n  color: #f8fafc;\n}\nh1 {\n  color: #38bdf8;\n  text-align: center;\n}\n.bio {\n  font-size: 16px;\n  text-align: center;\n}',
    solution: 'body {\n  background-color: #0f172a;\n  color: #f8fafc;\n}\nh1 {\n  color: #38bdf8;\n  text-align: center;\n}\n.bio {\n  font-size: 16px;\n  text-align: center;\n}'
  },

  htmlContent: `<div class="card">
  <h1>Nguyễn Hoàng Nam</h1>
  <p class="role">Học sinh đam mê công nghệ</p>
  <p class="bio">Chào mừng bạn đến với góc sáng tạo nhỏ của tôi trên internet!</p>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 40px 20px;
  margin: 0;
}
.card {
  max-width: 420px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(30, 41, 59, 0.7);
}
.role {
  text-align: center;
  color: #94a3b8;
  font-weight: 500;
  margin-top: -10px;
}`,

  initialCssCode: `/* Tuần 5: Viết CSS phối màu cho body, h1 và .bio */
body {

}

h1 {

}

.bio {

}
`,
  solutionCssCode: `body {
  background-color: #0f172a;
  color: #f8fafc;
}

h1 {
  color: #38bdf8;
  text-align: center;
}

.bio {
  font-size: 16px;
  text-align: center;
}
`,

  tests: [
    {
      id: 'w05-t1',
      description: 'body có background-color là #0f172a hoặc màu tối (rgb(15, 23, 42))',
      tester: (doc: Document, win: Window) => {
        const bodyStyle = win.getComputedStyle(doc.body);
        return bodyStyle.backgroundColor.includes('15, 23, 42') || bodyStyle.backgroundColor.includes('rgba(15, 23, 42');
      }
    },
    {
      id: 'w05-t2',
      description: 'h1 có text-align: center và màu chữ color là xanh sáng (rgb(56, 189, 248))',
      tester: (doc: Document, win: Window) => {
        const h1 = doc.querySelector('h1');
        if (!h1) return false;
        const style = win.getComputedStyle(h1);
        return style.textAlign === 'center' && (style.color.includes('56, 189, 248') || style.color.includes('56,189,248'));
      }
    },
    {
      id: 'w05-t3',
      description: '.bio có text-align: center và font-size: 16px',
      tester: (doc: Document, win: Window) => {
        const bio = doc.querySelector('.bio');
        if (!bio) return false;
        const style = win.getComputedStyle(bio);
        return style.textAlign === 'center' && style.fontSize === '16px';
      }
    }
  ]
};
