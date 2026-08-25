import { Lesson } from '@/types/lesson';

export const lessonHtml01: Lesson = {
  id: 'html01-first-tags',
  title: 'H01. Thẻ Tiêu Đề & Đoạn Văn',
  shortDescription: 'Làm quen với thẻ mở, thẻ đóng h1 và thẻ đoạn văn p trong HTML',
  category: 'html-basic',
  course: 'html-css',
  track: 'html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 50,
  order: 1,

  story: `Chào mừng bạn đến với **Lộ Trình Học HTML & CSS Căn Bản**! 🌐

**HTML (HyperText Markup Language)** là bộ xương sống của mọi trang web trên thế giới. Nhờ có HTML, trình duyệt mới biết đâu là tiêu đề, đâu là hình ảnh và đoạn văn bản!

Trong HTML, phần lớn các thẻ đều đi theo cặp:
- **Thẻ mở**: \`<h1>\` hoặc \`<p>\`
- **Nội dung bên trong**: Văn bản bạn muốn hiển thị
- **Thẻ đóng**: có thêm dấu gạch chéo \`/\`, ví dụ \`</h1>\` hoặc \`</p>\`

Ví dụ:
\`\`\`html
<h1>Vương Quốc Phép Thuật</h1>
<p>Chào mừng hiệp sĩ bước vào thế giới lập trình web!</p>
\`\`\`

Trong đó:
- \`<h1>\`: Tiêu đề lớn nhất và quan trọng nhất trang web (Heading 1).
- \`<p>\`: Đoạn văn bản thông thường (Paragraph).
`,

  taskInstructions: [
    'Tạo một thẻ tiêu đề lớn nhất `<h1>` với nội dung `"Vương Quốc Phép Thuật"`.',
    'Tạo một thẻ đoạn văn `<p>` với nội dung `"Chào mừng bạn đến với thế giới HTML!"` ngay bên dưới tiêu đề.',
    'Nhớ đóng đầy đủ thẻ `</h1>` và `</p>` nhé!'
  ],

  hints: {
    level1: 'Sử dụng cặp thẻ <h1>...</h1> cho tiêu đề và <p>...</p> cho đoạn văn.',
    level2: `<h1>Vương Quốc Phép Thuật</h1>\n<p>Chào mừng bạn đến với thế giới HTML!</p>`,
    solution: `<h1>Vương Quốc Phép Thuật</h1>\n<p>Chào mừng bạn đến với thế giới HTML!</p>`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
}
h1 {
  font-size: 28px;
  font-weight: 800;
  color: #38bdf8;
  text-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
  margin-bottom: 12px;
}
p {
  font-size: 16px;
  color: #cbd5e1;
  max-width: 480px;
  line-height: 1.6;
}
`,

  initialHtmlCode: `<!-- Nhiệm vụ: Tạo thẻ <h1> và thẻ <p> bên dưới -->

`,

  solutionHtmlCode: `<h1>Vương Quốc Phép Thuật</h1>
<p>Chào mừng bạn đến với thế giới HTML!</p>`,

  tests: [
    {
      id: 'has_h1',
      description: 'Có thẻ <h1> chứa đúng nội dung "Vương Quốc Phép Thuật"',
      tester: (doc) => {
        const h1 = doc.querySelector('h1');
        return h1 !== null && h1.textContent?.trim().toLowerCase().includes('vương quốc phép thuật') === true;
      }
    },
    {
      id: 'has_p',
      description: 'Có thẻ <p> chứa nội dung "thế giới HTML"',
      tester: (doc) => {
        const p = doc.querySelector('p');
        return p !== null && p.textContent?.trim().toLowerCase().includes('thế giới html') === true;
      }
    }
  ]
};
