import { Lesson } from '@/types/lesson';

export const lessonHtml07: Lesson = {
  id: 'html07-semantic-layout',
  title: 'H07. Bố Cục Thẻ Khối (div, header, main, footer)',
  shortDescription: 'Tổ chức khung sườn trang web chuyên nghiệp bằng thẻ khối div và thẻ ngữ nghĩa',
  category: 'html-semantic',
  course: 'html-css',
  track: 'html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 50,
  order: 7,

  story: `Khi trang web có nhiều thành phần, ta cần các thẻ đóng vai trò như những chiếc **hộp chứa (container)** để gom nhóm chúng lại:

1. **\`<div>...</div>\`**: Thẻ khối vạn năng (Division) dùng để gom nhóm các phần tử và tạo kiểu dáng.
2. **\`<header>...</header>\`**: Phần đầu trang (logo, tên trang, menu).
3. **\`<main>...</main>\`**: Phần thân chính chứa nội dung cốt lõi.
4. **\`<footer>...</footer>\`**: Phần chân trang (bản quyền, tác giả).

Ví dụ:
\`\`\`html
<header>
  <h2>Học Viện Phù Thủy</h2>
</header>
<main>
  <p>Nội dung bài học ma thuật hôm nay...</p>
</main>
<footer>
  <p>© 2026 Bản quyền thuộc về Pháp Sư</p>
</footer>
\`\`\`
`,

  taskInstructions: [
    'Tạo một thẻ `<header>` bên trong có chứa thẻ `<h2>` với nội dung `"Học Viện Phù Thủy"`.',
    'Tạo một thẻ `<main>` bên trong có chứa thẻ `<p>` với nội dung `"Chào mừng đến với đại sảnh đường ma thuật!"`.',
    'Tạo một thẻ `<footer>` bên trong có chứa thẻ `<p>` với nội dung `"Bản quyền © 2026"`.',
    'Bọc toàn bộ cấu trúc trên trong một thẻ `<div class="web-card">...</div>`.'
  ],

  hints: {
    level1: 'Bọc header, main, footer bên trong một thẻ <div class="web-card">',
    level2: `<div class="web-card">\n  <header>\n    <h2>Học Viện Phù Thủy</h2>\n  </header>\n  <main>\n    <p>Chào mừng đến với đại sảnh đường ma thuật!</p>\n  </main>\n  <footer>\n    <p>Bản quyền © 2026</p>\n  </footer>\n</div>`,
    solution: `<div class="web-card">
  <header>
    <h2>Học Viện Phù Thủy</h2>
  </header>
  <main>
    <p>Chào mừng đến với đại sảnh đường ma thuật!</p>
  </main>
  <footer>
    <p>Bản quyền © 2026</p>
  </footer>
</div>`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: #0b0f19;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.web-card {
  width: 100%;
  max-width: 420px;
  background: #1e293b;
  border-radius: 20px;
  border: 1px solid #334155;
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
  overflow: hidden;
}
header {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  padding: 18px 24px;
  text-align: center;
}
header h2 {
  font-size: 20px;
  font-weight: 800;
  color: white;
}
main {
  padding: 24px;
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.6;
}
footer {
  background: #0f172a;
  padding: 12px 24px;
  text-align: center;
  color: #64748b;
  font-size: 12px;
  border-top: 1px solid #334155;
}
`,

  initialHtmlCode: `<!-- Nhiệm vụ: Xây dựng cấu trúc layout bằng div, header, main, footer -->

`,

  solutionHtmlCode: `<div class="web-card">
  <header>
    <h2>Học Viện Phù Thủy</h2>
  </header>
  <main>
    <p>Chào mừng đến với đại sảnh đường ma thuật!</p>
  </main>
  <footer>
    <p>Bản quyền © 2026</p>
  </footer>
</div>`,

  tests: [
    {
      id: 'has_container_div',
      description: 'Có thẻ div bọc ngoài (chứa class "web-card")',
      tester: (doc) => {
        return doc.querySelector('div') !== null;
      }
    },
    {
      id: 'has_header',
      description: 'Có thẻ <header> chứa thẻ tiêu đề h2 "Học Viện Phù Thủy"',
      tester: (doc) => {
        const headerH2 = doc.querySelector('header h2') || doc.querySelector('header');
        return headerH2 !== null && headerH2.textContent?.toLowerCase().includes('học viện') === true;
      }
    },
    {
      id: 'has_main_and_footer',
      description: 'Có thẻ <main> và <footer> với nội dung đầy đủ',
      tester: (doc) => {
        const main = doc.querySelector('main');
        const footer = doc.querySelector('footer');
        return main !== null && footer !== null;
      }
    }
  ]
};
