import { Lesson } from '@/types/lesson';

export const lessonHtml03: Lesson = {
  id: 'html03-links-anchor',
  title: 'H03. Siêu Liên Kết Dẫn Lối (Thẻ a)',
  shortDescription: 'Tạo liên kết chuyển trang bằng thẻ a với thuộc tính href và target',
  category: 'html-basic',
  course: 'html-css',
  track: 'html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 50,
  order: 3,

  story: `Trang web sẽ trở nên vô nghĩa nếu không có các đường liên kết kết nối thế giới lại với nhau!

Thẻ \`<a>\` (viết tắt của Anchor) dùng để tạo **Siêu liên kết (Hyperlink)**. Thẻ này cần có thuộc tính \`href\` (Hypertext Reference) chỉ định địa chỉ trang web đích:

\`\`\`html
<a href="https://google.com">Tìm kiếm trên Google</a>
\`\`\`

💡 **Mẹo hữu ích**: Muốn khi bấm vào liên kết, trình duyệt mở một tab mới hoàn toàn thay vì đè lên trang cũ? Hãy thêm thuộc tính \`target="_blank"\`:
\`\`\`html
<a href="https://google.com" target="_blank">Mở tab mới 🚀</a>
\`\`\`
`,

  taskInstructions: [
    'Tạo một thẻ `<a>` có chữ hiển thị là `"Khám Phá Học Viện Lập Trình"`.',
    'Thêm thuộc tính `href="https://developer.mozilla.org"` vào thẻ `<a>`.',
    'Thêm thuộc tính `target="_blank"` để mở liên kết trong tab mới.'
  ],

  hints: {
    level1: 'Cú pháp mẫu: <a href="DIA_CHI_WEB" target="_blank">NOI_DUNG_HIEN_THI</a>',
    level2: `<a href="https://developer.mozilla.org" target="_blank">Khám Phá Học Viện Lập Trình</a>`,
    solution: `<a href="https://developer.mozilla.org" target="_blank">Khám Phá Học Viện Lập Trình</a>`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: #1e1b4b;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  text-decoration: none;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 9999px;
  box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
  font-size: 16px;
}
a:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px -5px rgba(99, 102, 241, 0.7);
}
`,

  initialHtmlCode: `<!-- Nhiệm vụ: Tạo thẻ <a> dẫn đến https://developer.mozilla.org với target="_blank" -->

`,

  solutionHtmlCode: `<a href="https://developer.mozilla.org" target="_blank">Khám Phá Học Viện Lập Trình</a>`,

  tests: [
    {
      id: 'has_a_tag',
      description: 'Có thẻ <a> với nội dung chứa chữ "Học Viện Lập Trình"',
      tester: (doc) => {
        const a = doc.querySelector('a');
        return a !== null && a.textContent?.trim().toLowerCase().includes('học viện') === true;
      }
    },
    {
      id: 'correct_href',
      description: 'Thẻ <a> có thuộc tính href="https://developer.mozilla.org"',
      tester: (doc) => {
        const a = doc.querySelector('a');
        return a !== null && a.getAttribute('href')?.includes('developer.mozilla.org') === true;
      }
    },
    {
      id: 'correct_target',
      description: 'Thẻ <a> có thuộc tính target="_blank"',
      tester: (doc) => {
        const a = doc.querySelector('a');
        return a !== null && a.getAttribute('target') === '_blank';
      }
    }
  ]
};
