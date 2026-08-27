import { Lesson } from '@/types/lesson';

export const LESSON_W02: Lesson = {
  id: 'w02-lists-links',
  title: 'Buổi 2: Danh Sách & Siêu Liên Kết (Lists & Links)',
  shortDescription: 'Danh sách có thứ tự <ol>, không thứ tự <ul>, thẻ liên kết <a> mở tab mới target="_blank" và liên kết nội bộ bookmark (href="#id").',
  category: 'html-format',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 100,
  order: 2,
  week: 2,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 2: Danh sách & Siêu liên kết (Lists & Links)**! 🔗

Một trang web không chỉ có chữ và ảnh mà còn kết nối với thế giới xung quanh qua danh sách và liên kết:
- **Danh sách có thứ tự \`<ol>\` (Ordered List)**: Đánh số tự động 1, 2, 3... cho các bảng xếp hạng hay các bước thực hiện.
- **Danh sách không thứ tự \`<ul>\` (Unordered List)**: Sử dụng các dấu chấm tròn đầu dòng cho danh sách sở thích hay kỹ năng.
- **Thẻ liên kết \`<a>\` (Anchor Link)**: Chuyển hướng người dùng với thuộc tính \`href\` (địa chỉ URL). Thêm \`target="_blank"\` để mở trong tab mới.
- **Liên kết nội bộ trang (Bookmark Link)**: Dùng \`<a href="#ten-id">\` để nhảy nhanh tới một phần tử có \`id="ten-id"\` trên cùng trang web!`,

  taskInstructions: [
    '🟢 Bài 2.1: Dùng `<ol>` và đúng 3 thẻ `<li>` tạo danh sách xếp hạng 3 môn học yêu thích (Toán, Tin học, Tiếng Anh)',
    '🟢 Bài 2.2: Dùng `<ul>` và đúng 3 thẻ `<li>` liệt kê 3 sở thích cá nhân',
    '🟡 Bài 2.3: Tạo danh sách `<ul>` gồm 2 liên kết `<a>` trong `<li>`: https://google.com (chữ "Tìm kiếm") và https://f8.edu.vn (chữ "Học lập trình"), đều có `target="_blank"`',
    '🟡 Bài 2.4: Tạo liên kết `<a href="#bai-viet">Xem bài viết</a>` nhảy tới thẻ `<h2 id="bai-viet">Nội dung bài viết</h2>` ở phía dưới'
  ],

  hints: {
    level1: 'Sử dụng <ol><li>...</li></ol>, <ul><li>...</li></ul>, <a href="..." target="_blank"> và <a href="#bai-viet"> kết hợp <h2 id="bai-viet">.',
    level2: `<!-- Cú pháp gợi ý -->
<ol>
  <li>Tin học</li>
  <li>Toán học</li>
  <li>Tiếng Anh</li>
</ol>

<ul>
  <li>Lập trình web</li>
  <li>Đọc sách</li>
  <li>Chơi cờ vua</li>
</ul>

<ul>
  <li><a href="https://google.com" target="_blank">Tìm kiếm</a></li>
  <li><a href="https://f8.edu.vn" target="_blank">Học lập trình</a></li>
</ul>

<a href="#bai-viet">Xem bài viết</a>
<div style="height: 100px;"></div>
<h2 id="bai-viet">Nội dung bài viết</h2>`,
    solution: `<ol>
  <li>Tin học</li>
  <li>Toán học</li>
  <li>Tiếng Anh</li>
</ol>

<ul>
  <li>Lập trình web</li>
  <li>Đọc sách</li>
  <li>Chơi cờ vua</li>
</ul>

<ul>
  <li><a href="https://google.com" target="_blank">Tìm kiếm</a></li>
  <li><a href="https://f8.edu.vn" target="_blank">Học lập trình</a></li>
</ul>

<a href="#bai-viet">Xem bài viết</a>
<h2 id="bai-viet">Nội dung bài viết</h2>`
  },

  htmlContent: `<!-- Hãy viết các thẻ Danh Sách và Liên Kết của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
  line-height: 1.6;
}
ol, ul {
  padding-left: 24px;
  margin-bottom: 20px;
}
li {
  margin-bottom: 6px;
  color: #334155;
  font-size: 15px;
}
a {
  color: #4f46e5;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}
a:hover {
  color: #4338ca;
  text-decoration: underline;
}
h2 {
  color: #0ea5e9;
  margin-top: 24px;
  font-size: 20px;
}`,

  initialHtmlCode: `<!-- Buổi 2: Thực hành Danh sách có/không thứ tự và Siêu liên kết -->\n`,
  solutionHtmlCode: `<ol>
  <li>Tin học</li>
  <li>Toán học</li>
  <li>Tiếng Anh</li>
</ol>

<ul>
  <li>Lập trình web</li>
  <li>Đọc sách</li>
  <li>Chơi cờ vua</li>
</ul>

<ul>
  <li><a href="https://google.com" target="_blank">Tìm kiếm</a></li>
  <li><a href="https://f8.edu.vn" target="_blank">Học lập trình</a></li>
</ul>

<a href="#bai-viet">Xem bài viết</a>
<h2 id="bai-viet">Nội dung bài viết</h2>`,

  tests: [
    {
      id: 'w02-t1',
      description: 'Bài 2.1: Có thẻ <ol> chứa đúng hoặc ít nhất 3 thẻ <li>',
      tester: (doc: Document) => {
        const ol = doc.querySelector('ol');
        const lis = ol ? ol.querySelectorAll('li') : [];
        return !!ol && lis.length >= 3;
      }
    },
    {
      id: 'w02-t2',
      description: 'Bài 2.2: Có thẻ <ul> chứa các thẻ <li> liệt kê sở thích',
      tester: (doc: Document) => {
        const uls = Array.from(doc.querySelectorAll('ul'));
        return uls.some(ul => {
          const lis = ul.querySelectorAll('li');
          return lis.length >= 3 && !ul.querySelector('a');
        }) || uls.length >= 1;
      }
    },
    {
      id: 'w02-t3',
      description: 'Bài 2.3: Thẻ <a> trong <li> có link google.com ("Tìm kiếm"), f8.edu.vn ("Học lập trình") và target="_blank"',
      tester: (doc: Document) => {
        const links = Array.from(doc.querySelectorAll('a'));
        const googleLink = links.find(a => (a.getAttribute('href') || '').includes('google.com') && a.getAttribute('target') === '_blank');
        const f8Link = links.find(a => (a.getAttribute('href') || '').includes('f8.edu.vn') && a.getAttribute('target') === '_blank');
        return !!googleLink && !!f8Link;
      }
    },
    {
      id: 'w02-t4',
      description: 'Bài 2.4: Thẻ <a> có href="#bai-viet" và thẻ <h2> có id="bai-viet"',
      tester: (doc: Document) => {
        const a = doc.querySelector('a[href="#bai-viet"]');
        const h2 = doc.querySelector('h2#bai-viet');
        return !!a && !!h2;
      }
    }
  ]
};
