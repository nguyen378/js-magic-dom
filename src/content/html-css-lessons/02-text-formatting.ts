import { Lesson } from '@/types/lesson';

export const lessonHtml02: Lesson = {
  id: 'html02-text-formatting',
  title: 'H02. Định Dạng Văn Bản',
  shortDescription: 'Làm chủ các thẻ in đậm strong, in nghiêng em, gạch chân u và highlight mark',
  category: 'html-format',
  course: 'html-css',
  track: 'html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 50,
  order: 2,

  story: `Trong văn bản HTML, bạn có thể biến đổi các từ ngữ trở nên nổi bật và ấn tượng hơn bằng các thẻ định dạng inline:

* \`<strong>...</strong>\`: **In đậm** và nhấn mạnh mức độ quan trọng.
* \`<em>...</em>\`: *In nghiêng* (emphasis - giọng điệu nhấn mạnh).
* \`<mark>...</mark>\`: <mark>Tô màu nền highlight</mark> như dùng bút dạ quang!
* \`<del>...</del>\`: Gạch ngang chữ (dùng cho giá cũ, đồ vật bị hủy).
* \`<u>...</u>\`: Gạch chân dưới từ ngữ.

Ví dụ:
\`\`\`html
<p>Vũ khí: Kiếm <strong>Excalibur</strong> huyền thoại!</p>
<p>Giá cũ: <del>500 vàng</del>, giá mới: <mark>250 vàng</mark>!</p>
\`\`\`
`,

  taskInstructions: [
    'Tạo một thẻ `<p>` giới thiệu dũng sĩ.',
    'Bên trong thẻ `<p>`, đặt tên `"Arthur"` trong thẻ `<strong>Arthur</strong>` để in đậm.',
    'Đặt chữ `"Dũng Cảm"` trong thẻ `<em>Dũng Cảm</em>` để in nghiêng.',
    'Tạo thêm một thẻ `<p>` thứ hai chứa từ `"Giảm Giá 50%"` nằm bên trong thẻ `<mark>Giảm Giá 50%</mark>`.'
  ],

  hints: {
    level1: 'Dùng thẻ <strong> cho in đậm, <em> cho in nghiêng và <mark> cho highlight.',
    level2: `<p>Hiệp sĩ <strong>Arthur</strong> vô cùng <em>Dũng Cảm</em>.</p>\n<p>Ưu đãi: <mark>Giảm Giá 50%</mark> cho trang bị!</p>`,
    solution: `<p>Hiệp sĩ <strong>Arthur</strong> vô cùng <em>Dũng Cảm</em>.</p>\n<p>Ưu đãi: <mark>Giảm Giá 50%</mark> cho trang bị!</p>`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: #0f172a;
  color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
  font-size: 18px;
  line-height: 1.8;
}
strong {
  color: #fbbf24;
  font-weight: 800;
}
em {
  color: #a78bfa;
  font-style: italic;
}
mark {
  background: #f43f5e;
  color: white;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: bold;
}
`,

  initialHtmlCode: `<!-- Nhiệm vụ: Tạo các đoạn văn bản sử dụng <strong>, <em> và <mark> -->

`,

  solutionHtmlCode: `<p>Hiệp sĩ <strong>Arthur</strong> vô cùng <em>Dũng Cảm</em>.</p>
<p>Ưu đãi: <mark>Giảm Giá 50%</mark> cho trang bị!</p>`,

  tests: [
    {
      id: 'has_strong',
      description: 'Có thẻ <strong> in đậm tên dũng sĩ "Arthur"',
      tester: (doc) => {
        const strong = doc.querySelector('strong');
        return strong !== null && strong.textContent?.trim().toLowerCase().includes('arthur') === true;
      }
    },
    {
      id: 'has_em',
      description: 'Có thẻ <em> in nghiêng chữ "Dũng Cảm"',
      tester: (doc) => {
        const em = doc.querySelector('em');
        return em !== null && em.textContent?.trim().toLowerCase().includes('dũng cảm') === true;
      }
    },
    {
      id: 'has_mark',
      description: 'Có thẻ <mark> highlight chữ "Giảm Giá 50%"',
      tester: (doc) => {
        const mark = doc.querySelector('mark');
        return mark !== null && mark.textContent?.trim().toLowerCase().includes('giảm giá 50%') === true;
      }
    }
  ]
};
