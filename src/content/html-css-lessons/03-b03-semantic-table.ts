import { Lesson } from '@/types/lesson';

export const LESSON_B03_01: Lesson = {
  id: 'b03-01',
  title: 'Bài 3.1 (Cơ bản): Chuyển Đổi Sang Thẻ Ngữ Nghĩa',
  shortDescription: 'Thay thế các thẻ <div> chung chung bằng các thẻ ngữ nghĩa <header>, <nav> và <footer>.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 9,
  week: 3,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 3.1: Thẻ ngữ nghĩa Semantic HTML5**! 🏛️

Thay vì đặt mọi thứ trong thẻ \`<div>\`, HTML5 cung cấp các thẻ ngữ nghĩa rõ ràng:
- \`<header>\`: Đại diện cho phần đầu của trang (chứa tiêu đề hoặc logo).
- \`<nav>\`: Đại diện cho thanh điều hướng liên kết.
- \`<footer>\`: Đại diện cho phần chân trang (chứa thông tin bản quyền, liên hệ).`,

  taskInstructions: [
    'Thay thế các thẻ `<div>` cho trước thành `<header>`, `<nav>`, `<footer>` tương ứng',
    'Không sử dụng bất kỳ thẻ `<div>` nào trong mã nguồn'
  ],

  hints: {
    level1: 'Thay <div class="header"> thành <header>, <div class="nav"> thành <nav>, và <div class="footer"> thành <footer>',
    level2: `<header>
  <h1>Trang Web Tin Tức</h1>
</header>
<nav>
  <a href="#">Trang chủ</a> | <a href="#">Giới thiệu</a>
</nav>
<footer>
  <p>© 2026 Bản quyền thuộc về tôi</p>
</footer>`,
    solution: `<header>
  <h1>Trang Web Tin Tức</h1>
</header>
<nav>
  <a href="#">Trang chủ</a> | <a href="#">Giới thiệu</a>
</nav>
<footer>
  <p>© 2026 Bản quyền thuộc về tôi</p>
</footer>`
  },

  htmlContent: `<div class="header">
  <h1>Trang Web Tin Tức</h1>
</div>
<div class="nav">
  <a href="#">Trang chủ</a> | <a href="#">Giới thiệu</a>
</div>
<div class="footer">
  <p>© 2026 Bản quyền thuộc về tôi</p>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
}
header, nav, footer {
  background: white;
  padding: 16px 20px;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
header h1 {
  margin: 0;
  color: #4f46e5;
  font-size: 20px;
}
nav a {
  color: #0ea5e9;
  text-decoration: none;
  font-weight: 600;
}
footer {
  text-align: center;
  color: #64748b;
  font-size: 13px;
}`,

  initialHtmlCode: `<div class="header">
  <h1>Trang Web Tin Tức</h1>
</div>
<div class="nav">
  <a href="#">Trang chủ</a> | <a href="#">Giới thiệu</a>
</div>
<div class="footer">
  <p>© 2026 Bản quyền thuộc về tôi</p>
</div>`,
  solutionHtmlCode: `<header>
  <h1>Trang Web Tin Tức</h1>
</header>
<nav>
  <a href="#">Trang chủ</a> | <a href="#">Giới thiệu</a>
</nav>
<footer>
  <p>© 2026 Bản quyền thuộc về tôi</p>
</footer>`,

  tests: [
    {
      id: 'b03-01-t1',
      description: 'Sử dụng đúng các thẻ <header>, <nav> và <footer>',
      tester: (doc: Document) => {
        const header = doc.querySelector('header');
        const nav = doc.querySelector('nav');
        const footer = doc.querySelector('footer');
        return !!header && !!nav && !!footer;
      }
    },
    {
      id: 'b03-01-t2',
      description: 'Không còn sử dụng thẻ <div> nào trong trang',
      tester: (doc: Document) => {
        const divs = doc.querySelectorAll('div');
        return divs.length === 0;
      }
    }
  ]
};

export const LESSON_B03_02: Lesson = {
  id: 'b03-02',
  title: 'Bài 3.2 (Cơ bản): Phân Chia Nội Dung Với Section',
  shortDescription: 'Tổ chức nội dung chính vào thẻ <main> và chia nhỏ thành các phân đoạn bằng thẻ <section>.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 10,
  week: 3,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 3.2: Phân chia nội dung với Section**! 📑

- Thẻ \`<main>\`: Chứa toàn bộ nội dung trọng tâm của trang web.
- Thẻ \`<section>\`: Chia trang thành các khu vực nội dung riêng biệt có chủ đề rõ ràng (mỗi section thường có một tiêu đề \`<h2>\` và nội dung \`<p>\`).`,

  taskInstructions: [
    'Đặt toàn bộ nội dung vào bên trong thẻ `<main>`',
    'Bên trong `<main>`, tạo 2 thẻ `<section>`',
    'Mỗi `<section>` phải chứa ít nhất 1 thẻ `<h2>` và 1 thẻ `<p>`'
  ],

  hints: {
    level1: 'Cấu trúc: <main><section><h2>...</h2><p>...</p></section><section><h2>...</h2><p>...</p></section></main>',
    level2: `<main>
  <section>
    <h2>Giới Thiệu</h2>
    <p>Chào mừng bạn đến với lớp học lập trình web trực tuyến.</p>
  </section>
  <section>
    <h2>Lợi Ích Của Khóa Học</h2>
    <p>Giúp học sinh rèn luyện tư duy logic và kỹ năng công nghệ.</p>
  </section>
</main>`,
    solution: `<main>
  <section>
    <h2>Giới Thiệu</h2>
    <p>Chào mừng bạn đến với lớp học lập trình web trực tuyến.</p>
  </section>
  <section>
    <h2>Lợi Ích Của Khóa Học</h2>
    <p>Giúp học sinh rèn luyện tư duy logic và kỹ năng công nghệ.</p>
  </section>
</main>`
  },

  htmlContent: `<!-- Hãy viết cấu trúc main và section của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f1f5f9;
}
main {
  max-width: 600px;
  margin: 0 auto;
}
section {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
h2 {
  color: #4f46e5;
  margin-top: 0;
  font-size: 18px;
}
p {
  color: #475569;
  line-height: 1.6;
  margin-bottom: 0;
}`,

  initialHtmlCode: `<!-- Bài 3.2: Tạo thẻ main chứa 2 thẻ section (mỗi section có h2 và p) -->\n`,
  solutionHtmlCode: `<main>
  <section>
    <h2>Giới Thiệu</h2>
    <p>Chào mừng bạn đến với lớp học lập trình web trực tuyến.</p>
  </section>
  <section>
    <h2>Lợi Ích Của Khóa Học</h2>
    <p>Giúp học sinh rèn luyện tư duy logic và kỹ năng công nghệ.</p>
  </section>
</main>`,

  tests: [
    {
      id: 'b03-02-t1',
      description: 'Có thẻ <main> chứa ít nhất 2 thẻ <section>',
      tester: (doc: Document) => {
        const main = doc.querySelector('main');
        const sections = main?.querySelectorAll('section');
        return !!main && (sections?.length || 0) >= 2;
      }
    },
    {
      id: 'b03-02-t2',
      description: 'Mỗi <section> đều có chứa <h2> và <p>',
      tester: (doc: Document) => {
        const sections = Array.from(doc.querySelectorAll('main section'));
        return sections.length >= 2 && sections.every(sec => !!sec.querySelector('h2') && !!sec.querySelector('p'));
      }
    }
  ]
};

export const LESSON_B03_03: Lesson = {
  id: 'b03-03',
  title: 'Bài 3.3 (Nâng cao): Dựng Khung Bài Viết Báo Chí',
  shortDescription: 'Sử dụng thẻ <article> cho nội dung bài viết độc lập và thẻ <aside> cho thông tin tác giả bên lề.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 35,
  order: 11,
  week: 3,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 3.3: Dựng khung bài viết báo chí**! 📰

- Thẻ \`<article>\`: Dùng để chứa một bài viết độc lập có thể phân phối hoặc đọc riêng biệt (như bài báo, bài đăng blog). Bên trong có thể có tiêu đề \`<h2>\`, ngày đăng \`<small>\` và nội dung \`<p>\`.
- Thẻ \`<aside>\`: Dùng cho nội dung phụ bên lề bài viết (như hộp thông tin tác giả hoặc liên kết xem thêm).`,

  taskInstructions: [
    'Tạo thẻ `<article>` chứa tiêu đề `<h2>`, ngày đăng bằng thẻ `<small>` và đoạn nội dung `<p>`',
    'Tạo thẻ `<aside>` chứa thông tin tác giả bài viết'
  ],

  hints: {
    level1: 'Cấu trúc: <article><h2>...</h2><small>...</small><p>...</p></article> <aside><h3>Tác giả</h3><p>...</p></aside>',
    level2: `<article>
  <h2>Công Nghệ AI Thay Đổi Thế Giới Học Đường</h2>
  <small>Ngày đăng: 27/08/2026</small>
  <p>Trí tuệ nhân tạo đang giúp học sinh tiếp cận kiến thức một cách cá nhân hóa và trực quan hơn bao giờ hết.</p>
</article>

<aside>
  <h3>Thông Tin Tác Giả</h3>
  <p>Bài viết được thực hiện bởi CLB Tin Học Lớp 8.</p>
</aside>`,
    solution: `<article>
  <h2>Công Nghệ AI Thay Đổi Thế Giới Học Đường</h2>
  <small>Ngày đăng: 27/08/2026</small>
  <p>Trí tuệ nhân tạo đang giúp học sinh tiếp cận kiến thức một cách cá nhân hóa và trực quan hơn bao giờ hết.</p>
</article>

<aside>
  <h3>Thông Tin Tác Giả</h3>
  <p>Bài viết được thực hiện bởi CLB Tin Học Lớp 8.</p>
</aside>`
  },

  htmlContent: `<!-- Hãy viết thẻ article và aside của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
}
article {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  margin-bottom: 16px;
}
article h2 {
  color: #0f172a;
  margin-top: 0;
  font-size: 20px;
}
small {
  color: #64748b;
  display: block;
  margin-bottom: 12px;
}
aside {
  background: #e0f2fe;
  border-left: 4px solid #0284c7;
  padding: 16px 20px;
  border-radius: 8px;
}
aside h3 {
  margin: 0 0 6px;
  color: #0369a1;
  font-size: 16px;
}`,

  initialHtmlCode: `<!-- Bài 3.3: Dựng bài viết gồm article (h2, small, p) và aside (thông tin tác giả) -->\n`,
  solutionHtmlCode: `<article>
  <h2>Công Nghệ AI Thay Đổi Thế Giới Học Đường</h2>
  <small>Ngày đăng: 27/08/2026</small>
  <p>Trí tuệ nhân tạo đang giúp học sinh tiếp cận kiến thức một cách cá nhân hóa và trực quan hơn bao giờ hết.</p>
</article>

<aside>
  <h3>Thông Tin Tác Giả</h3>
  <p>Bài viết được thực hiện bởi CLB Tin Học Lớp 8.</p>
</aside>`,

  tests: [
    {
      id: 'b03-03-t1',
      description: 'Có thẻ <article> chứa thẻ <h2>, <small> và <p>',
      tester: (doc: Document) => {
        const article = doc.querySelector('article');
        return !!article && !!article.querySelector('h2') && !!article.querySelector('small') && !!article.querySelector('p');
      }
    },
    {
      id: 'b03-03-t2',
      description: 'Có thẻ <aside> chứa thông tin tác giả',
      tester: (doc: Document) => {
        const aside = doc.querySelector('aside');
        return !!aside && (aside.textContent?.trim().length || 0) > 5;
      }
    }
  ]
};

export const LESSON_B03_04: Lesson = {
  id: 'b03-04',
  title: 'Bài 3.4 (Nâng cao): Bảng Lịch Sinh Hoạt CLB',
  shortDescription: 'Sử dụng thẻ <table>, <tr>, <th> và <td> để thiết kế bảng dữ liệu dạng lưới.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 40,
  order: 12,
  week: 3,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 3.4: Bảng dữ liệu (HTML Tables)**! 📊

Bảng dữ liệu giúp sắp xếp thông tin theo hàng và cột gọn gàng:
- \`<table>\`: Thẻ bọc toàn bộ bảng.
- \`<tr>\` (Table Row): Một hàng dữ liệu ngang.
- \`<th>\` (Table Header): Ô tiêu đề cột (chữ in đậm tự nhiên).
- \`<td>\` (Table Data): Ô dữ liệu thông thường.`,

  taskInstructions: [
    'Tạo một thẻ `<table>`',
    'Tạo hàng tiêu đề `<tr>` chứa 2 thẻ `<th>` (Ví dụ: `Thứ` và `Môn học`)',
    'Tạo ít nhất 2 hàng nội dung `<tr>`, mỗi hàng chứa 2 thẻ `<td>`'
  ],

  hints: {
    level1: 'Cấu trúc: <table><tr><th>...</th><th>...</th></tr><tr><td>...</td><td>...</td></tr><tr><td>...</td><td>...</td></tr></table>',
    level2: `<table>
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
</table>`,
    solution: `<table>
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
</table>`
  },

  htmlContent: `<!-- Hãy viết bảng dữ liệu table của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
}
table {
  width: 100%;
  max-width: 480px;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
th, td {
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  text-align: left;
}
th {
  background: #4f46e5;
  color: white;
  font-weight: 600;
}
td {
  color: #334155;
}`,

  initialHtmlCode: `<!-- Bài 3.4: Tạo bảng table có hàng tiêu đề tr/th và 2 hàng nội dung tr/td -->\n`,
  solutionHtmlCode: `<table>
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
</table>`,

  tests: [
    {
      id: 'b03-04-t1',
      description: 'Có thẻ <table> và hàng tiêu đề chứa các thẻ <th>',
      tester: (doc: Document) => {
        const table = doc.querySelector('table');
        const ths = table?.querySelectorAll('th');
        return !!table && (ths?.length || 0) >= 2;
      }
    },
    {
      id: 'b03-04-t2',
      description: 'Bảng có ít nhất 3 hàng <tr> và chứa các ô <td>',
      tester: (doc: Document) => {
        const table = doc.querySelector('table');
        const trs = table?.querySelectorAll('tr');
        const tds = table?.querySelectorAll('td');
        return !!table && (trs?.length || 0) >= 3 && (tds?.length || 0) >= 4;
      }
    }
  ]
};

export const B03_LESSONS: Lesson[] = [
  LESSON_B03_01,
  LESSON_B03_02,
  LESSON_B03_03,
  LESSON_B03_04,
];
