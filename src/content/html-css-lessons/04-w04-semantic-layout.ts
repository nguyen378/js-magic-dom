import { Lesson } from '@/types/lesson';

export const LESSON_W04: Lesson = {
  id: 'w04-semantic-layout',
  title: 'Tuần 4: Nút Bấm & Cấu Trúc Khung Web Semantic',
  shortDescription: 'Hoàn thiện khung xương HTML hoàn chỉnh với thẻ nút bấm, ô nhập và các khối ngữ nghĩa header, main, section, footer.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 100,
  order: 4,
  week: 4,
  durationMinutes: 60,

  story: `Chúc mừng bạn đã đến với **Tuần 4 — Tuần cuối của Giai đoạn Khung Xương HTML**! 🏛️

Một trang web chuẩn quốc tế cần được phân chia bố cục rõ ràng bằng các thẻ ngữ nghĩa (**HTML5 Semantic Elements**):
- \`<header>\`: Phần đầu trang (Logo, Tên website).
- \`<main>\`: Phần nội dung chính.
- \`<section>\`: Các phân đoạn riêng biệt (Giới thiệu, Liên hệ).
- \`<button>\`: Nút bấm hành động tương tác.
- \`<footer>\`: Phần chân trang (Bản quyền tác giả).`,

  taskInstructions: [
    'Tạo thẻ `<header>` chứa tiêu đề `<h1>` tên của bạn',
    'Tạo thẻ `<main>` bên trong chứa ít nhất 1 thẻ `<section>`',
    'Trong `<section>`, tạo 1 ô `<input type="text" placeholder="Nhập lời nhắn...">` và 1 nút `<button>` chứa chữ `Gửi Lời Nhắn`',
    'Tạo thẻ `<footer>` chứa dòng chữ bản quyền `© 2026 Bản quyền thuộc về tôi`'
  ],

  hints: {
    level1: 'Sử dụng cấu trúc: <header>...</header> <main><section>...</section></main> <footer>...</footer>',
    level2: 'Ví dụ:\n<header>\n  <h1>Nguyễn Văn A</h1>\n</header>\n<main>\n  <section>\n    <input type="text" placeholder="Nhập lời nhắn...">\n    <button>Gửi Lời Nhắn</button>\n  </section>\n</main>\n<footer>\n  <p>© 2026 Bản quyền thuộc về tôi</p>\n</footer>',
    solution: '<header>\n  <h1>Trang Web Của Tôi</h1>\n</header>\n<main>\n  <section>\n    <input type="text" placeholder="Nhập lời nhắn...">\n    <button>Gửi Lời Nhắn</button>\n  </section>\n</main>\n<footer>\n  <p>© 2026 Bản quyền thuộc về tôi</p>\n</footer>'
  },

  htmlContent: `<!-- Hãy xây dựng bộ khung HTML Semantic hoàn chỉnh bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f1f5f9;
  color: #0f172a;
}
header {
  background: white;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}
header h1 {
  margin: 0;
  font-size: 24px;
  color: #4f46e5;
}
main {
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}
input {
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  margin-right: 8px;
}
button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}
footer {
  text-align: center;
  color: #64748b;
  font-size: 13px;
}`,

  initialHtmlCode: `<!-- Tuần 4: Xây dựng khung web semantic header, main, section, input, button, footer -->\n`,
  solutionHtmlCode: `<header>
  <h1>Trang Web Của Tôi</h1>
</header>
<main>
  <section>
    <input type="text" placeholder="Nhập lời nhắn...">
    <button>Gửi Lời Nhắn</button>
  </section>
</main>
<footer>
  <p>© 2026 Bản quyền thuộc về tôi</p>
</footer>`,

  tests: [
    {
      id: 'w04-t1',
      description: 'Có thẻ <header> và bên trong có thẻ <h1>',
      tester: (doc: Document) => {
        const headerH1 = doc.querySelector('header h1');
        return !!headerH1;
      }
    },
    {
      id: 'w04-t2',
      description: 'Có thẻ <main> chứa thẻ <section>, bên trong có <input> và <button>',
      tester: (doc: Document) => {
        const section = doc.querySelector('main section');
        const input = doc.querySelector('main section input');
        const button = doc.querySelector('main section button');
        return !!section && !!input && !!button && button.textContent?.toLowerCase().includes('gửi') === true;
      }
    },
    {
      id: 'w04-t3',
      description: 'Có thẻ <footer> chứa nội dung bản quyền',
      tester: (doc: Document) => {
        const footer = doc.querySelector('footer');
        return !!footer && (footer.textContent?.trim().length || 0) > 5;
      }
    }
  ]
};
