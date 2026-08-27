import { Lesson } from '@/types/lesson';

export const LESSON_W03: Lesson = {
  id: 'w03-semantic-layout',
  title: 'Buổi 3: Thẻ Ngữ Nghĩa Semantic HTML5',
  shortDescription: 'Phân chia bố cục trang web chuẩn quốc tế với <header>, <nav>, <main>, <section>, <article>, <aside>, <footer> và bảng dữ liệu <table>.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 100,
  order: 3,
  week: 3,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 3: Thẻ ngữ nghĩa Semantic HTML5 & Bảng dữ liệu**! 🏛️

Thay vì lạm dụng thẻ \`<div>\` vô nghĩa, các trang web hiện đại sử dụng thẻ ngữ nghĩa (**Semantic Tags**) để giúp công cụ tìm kiếm (Google) và người đọc hiểu cấu trúc trang:
- \`<header>\` & \`<nav>\`: Phần đầu trang và thanh điều hướng liên kết.
- \`<main>\`: Phần chứa nội dung trọng tâm của trang.
- \`<section>\`: Chia trang thành các khu vực nội dung riêng biệt.
- \`<article>\`: Một bài viết độc lập (tin tức, blog).
- \`<aside>\`: Thanh bên lề (thông tin tác giả, bài viết liên quan).
- \`<footer>\`: Phần chân trang cuối cùng (bản quyền).
- \`<table>\`, \`<tr>\`, \`<th>\`, \`<td>\`: Tạo bảng dữ liệu gọn gàng theo hàng và cột.`,

  taskInstructions: [
    '🟢 Bài 3.1: Sử dụng đúng cấu trúc các thẻ ngữ nghĩa `<header>`, `<nav>`, `<footer>` (không dùng thẻ div thay thế)',
    '🟢 Bài 3.2: Đặt nội dung vào thẻ `<main>`, bên trong chia 2 thẻ `<section>`, mỗi section có 1 thẻ `<h2>` và 1 thẻ `<p>`',
    '🟡 Bài 3.3: Dựng khung bài viết báo chí gồm `<article>` (chứa `<h2>`, ngày đăng `<small>`, nội dung `<p>`) và `<aside>` (thông tin tác giả)',
    '🟡 Bài 3.4: Tạo bảng `<table>` gồm hàng tiêu đề `<tr>` chứa các `<th>` (Thứ, Môn học) và ít nhất 2 hàng nội dung `<tr>` chứa các ô `<td>`'
  ],

  hints: {
    level1: 'Sử dụng cấu trúc: <header><nav>...</nav></header> <main><section>...</section></main> <article>...</article><aside>...</aside> <table>...</table> <footer>...</footer>',
    level2: `<!-- Cú pháp mẫu gợi ý -->
<header>
  <h1>Báo Tin Học Trẻ</h1>
  <nav>
    <a href="#">Trang chủ</a> | <a href="#">Tin tức</a>
  </nav>
</header>

<main>
  <section>
    <h2>Giới Thiệu</h2>
    <p>Chào mừng bạn đến với chuyên trang công nghệ học đường.</p>
  </section>
  <section>
    <h2>Hoạt Động</h2>
    <p>Các câu lạc bộ lập trình sinh hoạt định kỳ mỗi tuần.</p>
  </section>

  <article>
    <h2>Khám Phá Thế Giới Web</h2>
    <small>Ngày đăng: 27/08/2026</small>
    <p>HTML5 mang lại cuộc cách mạng lớn trong việc chuẩn hóa cấu trúc trang web.</p>
  </article>

  <aside>
    <h3>Tác Giả</h3>
    <p>Biên tập viên: CLB Tin Học Lớp 8</p>
  </aside>

  <table>
    <tr>
      <th>Thứ</th>
      <th>Môn học</th>
    </tr>
    <tr>
      <td>Thứ 2</td>
      <td>Lập trình Web</td>
    </tr>
    <tr>
      <td>Thứ 4</td>
      <td>Khoa học máy tính</td>
    </tr>
  </table>
</main>

<footer>
  <p>© 2026 Báo Tin Học Trẻ - Bản quyền thuộc về tác giả</p>
</footer>`,
    solution: `<header>
  <h1>Báo Tin Học Trẻ</h1>
  <nav>
    <a href="#">Trang chủ</a> | <a href="#">Tin tức</a>
  </nav>
</header>

<main>
  <section>
    <h2>Giới Thiệu</h2>
    <p>Chào mừng bạn đến với chuyên trang công nghệ học đường.</p>
  </section>
  <section>
    <h2>Hoạt Động</h2>
    <p>Các câu lạc bộ lập trình sinh hoạt định kỳ mỗi tuần.</p>
  </section>

  <article>
    <h2>Khám Phá Thế Giới Web</h2>
    <small>Ngày đăng: 27/08/2026</small>
    <p>HTML5 mang lại cuộc cách mạng lớn trong việc chuẩn hóa cấu trúc trang web.</p>
  </article>

  <aside>
    <h3>Tác Giả</h3>
    <p>Biên tập viên: CLB Tin Học Lớp 8</p>
  </aside>

  <table>
    <tr>
      <th>Thứ</th>
      <th>Môn học</th>
    </tr>
    <tr>
      <td>Thứ 2</td>
      <td>Lập trình Web</td>
    </tr>
    <tr>
      <td>Thứ 4</td>
      <td>Khoa học máy tính</td>
    </tr>
  </table>
</main>

<footer>
  <p>© 2026 Báo Tin Học Trẻ</p>
</footer>`
  },

  htmlContent: `<!-- Hãy xây dựng khung HTML Semantic và Bảng dữ liệu bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 20px;
  background: #f1f5f9;
  color: #0f172a;
}
header, footer, main, article, aside, section {
  background: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 14px;
}
header h1 {
  color: #4f46e5;
  font-size: 22px;
  margin: 0 0 8px;
}
h2 {
  color: #0284c7;
  font-size: 18px;
  margin: 0 0 6px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  border: 1px solid #cbd5e1;
  padding: 8px 12px;
  text-align: left;
  font-size: 14px;
}
th {
  background: #e2e8f0;
  color: #1e293b;
}
small {
  color: #64748b;
  display: block;
  margin-bottom: 6px;
}
footer {
  text-align: center;
  color: #64748b;
  font-size: 13px;
}`,

  initialHtmlCode: `<!-- Buổi 3: Xây dựng khung web semantic header, nav, main, section, article, aside, table, footer -->\n`,
  solutionHtmlCode: `<header>
  <h1>Báo Tin Học Trẻ</h1>
  <nav>
    <a href="#">Trang chủ</a> | <a href="#">Tin tức</a>
  </nav>
</header>

<main>
  <section>
    <h2>Giới Thiệu</h2>
    <p>Chào mừng bạn đến với chuyên trang công nghệ học đường.</p>
  </section>
  <section>
    <h2>Hoạt Động</h2>
    <p>Các câu lạc bộ lập trình sinh hoạt định kỳ mỗi tuần.</p>
  </section>

  <article>
    <h2>Khám Phá Thế Giới Web</h2>
    <small>Ngày đăng: 27/08/2026</small>
    <p>HTML5 mang lại cuộc cách mạng lớn trong việc chuẩn hóa cấu trúc trang web.</p>
  </article>

  <aside>
    <h3>Tác Giả</h3>
    <p>Biên tập viên: CLB Tin Học Lớp 8</p>
  </aside>

  <table>
    <tr>
      <th>Thứ</th>
      <th>Môn học</th>
    </tr>
    <tr>
      <td>Thứ 2</td>
      <td>Lập trình Web</td>
    </tr>
    <tr>
      <td>Thứ 4</td>
      <td>Khoa học máy tính</td>
    </tr>
  </table>
</main>

<footer>
  <p>© 2026 Báo Tin Học Trẻ</p>
</footer>`,

  tests: [
    {
      id: 'w03-t1',
      description: 'Bài 3.1: Sử dụng đúng các thẻ ngữ nghĩa <header>, <nav> và <footer>',
      tester: (doc: Document) => {
        const header = doc.querySelector('header');
        const nav = doc.querySelector('nav');
        const footer = doc.querySelector('footer');
        return !!header && !!nav && !!footer;
      }
    },
    {
      id: 'w03-t2',
      description: 'Bài 3.2: Thẻ <main> chứa ít nhất 2 thẻ <section>, mỗi section có <h2> và <p>',
      tester: (doc: Document) => {
        const main = doc.querySelector('main');
        if (!main) return false;
        const sections = Array.from(main.querySelectorAll('section'));
        const validSections = sections.filter(sec => sec.querySelector('h2') && sec.querySelector('p'));
        return validSections.length >= 2;
      }
    },
    {
      id: 'w03-t3',
      description: 'Bài 3.3: Có thẻ <article> (chứa <h2>, <small>, <p>) và thẻ <aside>',
      tester: (doc: Document) => {
        const article = doc.querySelector('article');
        const aside = doc.querySelector('aside');
        const hasArticleContent = !!article && !!article.querySelector('h2') && !!article.querySelector('p');
        return hasArticleContent && !!aside;
      }
    },
    {
      id: 'w03-t4',
      description: 'Bài 3.4: Bảng <table> có hàng tiêu đề <tr> chứa các <th> và ít nhất 2 hàng nội dung <tr> chứa các ô <td>',
      tester: (doc: Document) => {
        const table = doc.querySelector('table');
        if (!table) return false;
        const ths = table.querySelectorAll('th');
        const trs = table.querySelectorAll('tr');
        const tds = table.querySelectorAll('td');
        return ths.length >= 2 && trs.length >= 3 && tds.length >= 4;
      }
    }
  ]
};
