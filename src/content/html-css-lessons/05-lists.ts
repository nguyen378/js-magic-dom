import { Lesson } from '@/types/lesson';

export const lessonHtml05: Lesson = {
  id: 'html05-lists',
  title: 'H05. Danh Sách Trang Bị (ul, ol, li)',
  shortDescription: 'Tổ chức danh sách không thứ tự ul và có thứ tự ol bằng các thẻ li',
  category: 'html-basic',
  course: 'html-css',
  track: 'html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 50,
  order: 5,

  story: `Khi dũng sĩ chuẩn bị lên đường săn boss, bạn cần liệt kê danh sách trang bị vào balo!

Trong HTML có 2 loại danh sách phổ biến:
1. **\`<ul>\` (Unordered List)**: Danh sách có dấu chấm đầu dòng (dùng khi thứ tự không quan trọng).
2. **\`<ol>\` (Ordered List)**: Danh sách đánh số thứ tự 1, 2, 3... (dùng cho các bước tuần tự).

Bên trong \`<ul>\` hoặc \`<ol>\`, mỗi mục luôn được bọc bằng thẻ **\`<li>\` (List Item)**:

\`\`\`html
<ul>
  <li>🗡️ Kiếm Ánh Sáng</li>
  <li>🛡️ Khiên Thần Kiếm</li>
  <li>🧪 Thuốc Hồi Máu</li>
</ul>
\`\`\`
`,

  taskInstructions: [
    'Tạo một thẻ danh sách không thứ tự `<ul>`.',
    'Bên trong thẻ `<ul>`, tạo đúng 3 thẻ `<li>` lần lượt chứa 3 món trang bị: `"🗡️ Kiếm Ánh Sáng"`, `"🛡️ Khiên Thần Kiếm"` và `"🧪 Thuốc Hồi Máu"`.',
    'Đóng đầy đủ các thẻ `</li>` và `</ul>`.'
  ],

  hints: {
    level1: 'Bọc các thẻ <li> bên trong cặp thẻ <ul>...</ul>',
    level2: `<ul>\n  <li>🗡️ Kiếm Ánh Sáng</li>\n  <li>🛡️ Khiên Thần Kiếm</li>\n  <li>🧪 Thuốc Hồi Máu</li>\n</ul>`,
    solution: `<ul>\n  <li>🗡️ Kiếm Ánh Sáng</li>\n  <li>🛡️ Khiên Thần Kiếm</li>\n  <li>🧪 Thuốc Hồi Máu</li>\n</ul>`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: #0f172a;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
ul {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 24px 36px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
li {
  font-size: 16px;
  font-weight: 600;
  color: #f1f5f9;
  margin-bottom: 12px;
  transition: transform 0.2s;
}
li:last-child {
  margin-bottom: 0;
}
li:hover {
  transform: translateX(6px);
  color: #38bdf8;
}
`,

  initialHtmlCode: `<!-- Nhiệm vụ: Tạo thẻ <ul> chứa 3 thẻ <li> trang bị -->

`,

  solutionHtmlCode: `<ul>
  <li>🗡️ Kiếm Ánh Sáng</li>
  <li>🛡️ Khiên Thần Kiếm</li>
  <li>🧪 Thuốc Hồi Máu</li>
</ul>`,

  tests: [
    {
      id: 'has_ul',
      description: 'Có thẻ danh sách <ul> trong trang',
      tester: (doc) => {
        return doc.querySelector('ul') !== null;
      }
    },
    {
      id: 'has_3_li',
      description: 'Có ít nhất 3 thẻ <li> bên trong danh sách',
      tester: (doc) => {
        const lis = doc.querySelectorAll('ul li');
        return lis.length >= 3;
      }
    },
    {
      id: 'correct_content',
      description: 'Nội dung danh sách có chứa "Kiếm" hoặc "Khiên"',
      tester: (doc) => {
        const text = doc.querySelector('ul')?.textContent?.toLowerCase() || '';
        return text.includes('kiếm') || text.includes('khiên');
      }
    }
  ]
};
