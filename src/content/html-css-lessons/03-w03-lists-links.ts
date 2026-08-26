import { Lesson } from '@/types/lesson';

export const LESSON_W03: Lesson = {
  id: 'w03-lists-links',
  title: 'Tuần 3: Danh Sách Sở Thích & Siêu Liên Kết',
  shortDescription: 'Tạo danh sách sở thích với thẻ ul/ol và gắn link liên kết kết nối mạng xã hội, dự án yêu thích.',
  category: 'html-format',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 100,
  order: 3,
  week: 3,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 3**! 🔗

Một trang web cá nhân tuyệt vời luôn cần:
- **Danh sách không thứ tự \`<ul>\`**: Dùng cho các mục không phân biệt thứ hạng như danh sách Sở thích (mỗi mục là một \`<li>\`).
- **Danh sách có thứ tự \`<ol>\`**: Dùng cho các bước hoặc Top mục tiêu (1, 2, 3...).
- **Thẻ liên kết \`<a>\`**: Giúp chuyển hướng người dùng sang trang web khác với thuộc tính \`href\` và \`target="_blank"\` để mở tab mới.`,

  taskInstructions: [
    'Tạo danh sách \`<ul>\` gồm ít nhất 3 thẻ \`<li>\` liệt kê sở thích của bạn (VD: Lập trình, Chơi cờ, Đọc sách)',
    'Tạo một thẻ liên kết \`<a>\` với \`href="https://github.com"\`, \`target="_blank"\` và chữ hiển thị là \`Khám phá GitHub của tôi\`'
  ],

  hints: {
    level1: 'Sử dụng <ul><li>...</li></ul> và <a href="..." target="_blank">...</a>',
    level2: 'Ví dụ:\n<h3>Sở Thích Của Tôi</h3>\n<ul>\n  <li>Học lập trình web</li>\n  <li>Chơi cờ vua</li>\n  <li>Chụp ảnh phong cảnh</li>\n</ul>\n<a href="https://github.com" target="_blank">Khám phá GitHub của tôi</a>',
    solution: '<h3>Sở Thích Của Tôi</h3>\n<ul>\n  <li>Học lập trình web</li>\n  <li>Chơi cờ vua</li>\n  <li>Chụp ảnh phong cảnh</li>\n</ul>\n<a href="https://github.com" target="_blank">Khám phá GitHub của tôi</a>'
  },

  htmlContent: `<!-- Hãy tạo danh sách sở thích và liên kết của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 30px;
  background: #f8fafc;
  color: #0f172a;
}
h3 {
  color: #0f172a;
  font-size: 20px;
  margin-bottom: 12px;
}
ul {
  padding-left: 20px;
  margin-bottom: 24px;
}
li {
  padding: 6px 0;
  color: #475569;
  font-size: 15px;
}
a {
  display: inline-block;
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}`,

  initialHtmlCode: `<!-- Tuần 3: Tạo danh sách sở thích <ul><li> và link liên kết <a href="..." target="_blank"> -->\n`,
  solutionHtmlCode: `<h3>Sở Thích Của Tôi</h3>
<ul>
  <li>Học lập trình web</li>
  <li>Chơi cờ vua</li>
  <li>Chụp ảnh phong cảnh</li>
</ul>
<a href="https://github.com" target="_blank">Khám phá GitHub của tôi</a>`,

  tests: [
    {
      id: 'w03-t1',
      description: 'Có thẻ <ul> chứa ít nhất 3 thẻ <li>',
      tester: (doc: Document) => {
        const lis = doc.querySelectorAll('ul li');
        return lis.length >= 3;
      }
    },
    {
      id: 'w03-t2',
      description: 'Có thẻ <a> với thuộc tính href hợp lệ',
      tester: (doc: Document) => {
        const a = doc.querySelector('a');
        return !!a && !!a.getAttribute('href');
      }
    },
    {
      id: 'w03-t3',
      description: 'Thẻ <a> có thuộc tính target="_blank" và chữ hiển thị chứa "GitHub"',
      tester: (doc: Document) => {
        const a = doc.querySelector('a');
        return !!a && a.getAttribute('target') === '_blank' && a.textContent?.toLowerCase().includes('github') === true;
      }
    }
  ]
};
