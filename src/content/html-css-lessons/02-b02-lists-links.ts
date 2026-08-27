import { Lesson } from '@/types/lesson';

export const LESSON_B02_01: Lesson = {
  id: 'b02-01',
  title: 'Bài 2.1 (Cơ bản): Danh Sách Có Thứ Tự Top 3 Môn Học',
  shortDescription: 'Sử dụng thẻ <ol> và <li> để tạo danh sách xếp hạng có thứ tự từ 1 đến 3.',
  category: 'html-format',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 5,
  week: 2,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 2.1: Danh sách có thứ tự (Ordered List)**! 🔢

Thẻ \`<ol>\` (Ordered List) giúp bạn liệt kê các mục theo thứ tự tự động tăng dần 1, 2, 3... Mỗi mục bên trong được đặt trong một thẻ \`<li>\` (List Item).`,

  taskInstructions: [
    'Tạo một thẻ `<ol>`',
    'Bên trong `<ol>`, tạo đúng 3 thẻ `<li>` liệt kê 3 môn học bạn yêu thích nhất (Ví dụ: Tin học, Toán, Tiếng Anh)'
  ],

  hints: {
    level1: 'Cú pháp: <ol><li>Môn 1</li><li>Môn 2</li><li>Môn 3</li></ol>',
    level2: '<ol>\n  <li>Tin học</li>\n  <li>Toán học</li>\n  <li>Tiếng Anh</li>\n</ol>',
    solution: '<ol>\n  <li>Tin học</li>\n  <li>Toán học</li>\n  <li>Tiếng Anh</li>\n</ol>'
  },

  htmlContent: `<!-- Hãy viết danh sách ol của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
}
ol {
  background: white;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
li {
  margin-bottom: 8px;
  font-weight: 600;
  color: #4f46e5;
}`,

  initialHtmlCode: `<!-- Bài 2.1: Tạo thẻ ol chứa 3 thẻ li -->\n`,
  solutionHtmlCode: `<ol>
  <li>Tin học</li>
  <li>Toán học</li>
  <li>Tiếng Anh</li>
</ol>`,

  tests: [
    {
      id: 'b02-01-t1',
      description: 'Có thẻ <ol> và bên trong có đúng 3 thẻ <li>',
      tester: (doc: Document) => {
        const ol = doc.querySelector('ol');
        const lis = ol?.querySelectorAll('li');
        return !!ol && lis?.length === 3;
      }
    }
  ]
};

export const LESSON_B02_02: Lesson = {
  id: 'b02-02',
  title: 'Bài 2.2 (Cơ bản): Danh Sách Không Thứ Tự Các Sở Thích',
  shortDescription: 'Sử dụng thẻ <ul> và <li> để tạo danh sách sở thích cá nhân bằng dấu chấm tròn.',
  category: 'html-format',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 6,
  week: 2,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 2.2: Danh sách không thứ tự (Unordered List)**! 🌟

Thẻ \`<ul>\` (Unordered List) dùng để liệt kê các mục không phân biệt thứ tự (như danh sách sở thích, kỹ năng). Mỗi mục nằm trong một thẻ \`<li>\`.`,

  taskInstructions: [
    'Tạo một thẻ `<ul>`',
    'Bên trong `<ul>`, tạo đúng 3 thẻ `<li>` liệt kê 3 sở thích của bạn (Ví dụ: Lập trình, Chơi cờ, Đọc sách)'
  ],

  hints: {
    level1: 'Cú pháp: <ul><li>Sở thích 1</li><li>Sở thích 2</li><li>Sở thích 3</li></ul>',
    level2: '<ul>\n  <li>Học lập trình web</li>\n  <li>Chơi cờ vua</li>\n  <li>Đọc sách khoa học</li>\n</ul>',
    solution: '<ul>\n  <li>Học lập trình web</li>\n  <li>Chơi cờ vua</li>\n  <li>Đọc sách khoa học</li>\n</ul>'
  },

  htmlContent: `<!-- Hãy viết danh sách ul của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
}
ul {
  background: white;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
li {
  margin-bottom: 8px;
  color: #0284c7;
  font-size: 15px;
}`,

  initialHtmlCode: `<!-- Bài 2.2: Tạo thẻ ul chứa 3 thẻ li -->\n`,
  solutionHtmlCode: `<ul>
  <li>Học lập trình web</li>
  <li>Chơi cờ vua</li>
  <li>Đọc sách khoa học</li>
</ul>`,

  tests: [
    {
      id: 'b02-02-t1',
      description: 'Có thẻ <ul> và bên trong có đúng 3 thẻ <li>',
      tester: (doc: Document) => {
        const ul = doc.querySelector('ul');
        const lis = ul?.querySelectorAll('li');
        return !!ul && lis?.length === 3;
      }
    }
  ]
};

export const LESSON_B02_03: Lesson = {
  id: 'b02-03',
  title: 'Bài 2.3 (Nâng cao): Danh Sách Liên Kết Mở Tab Mới',
  shortDescription: 'Kết hợp thẻ <ul>, <li> và thẻ liên kết <a> có thuộc tính target="_blank" để mở trang web trong tab mới.',
  category: 'html-format',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 35,
  order: 7,
  week: 2,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 2.3: Danh sách liên kết mở Tab mới**! 🔗

Thẻ \`<a>\` (Anchor) tạo siêu liên kết kết nối trang web của bạn với thế giới:
- Thuộc tính \`href\`: Địa chỉ URL cần chuyển tới.
- Thuộc tính \`target="_blank"\`: Yêu cầu trình duyệt mở liên kết trong một **Tab mới**, không làm mất trang web hiện tại.`,

  taskInstructions: [
    'Tạo thẻ `<ul>` gồm 2 thẻ `<li>`',
    'Thẻ `<li>` thứ nhất chứa liên kết `<a>` tới `https://google.com` với chữ hiển thị là `Tìm kiếm` và có `target="_blank"`',
    'Thẻ `<li>` thứ hai chứa liên kết `<a>` tới `https://f8.edu.vn` với chữ hiển thị là `Học lập trình` và có `target="_blank"`'
  ],

  hints: {
    level1: 'Đặt thẻ <a href="..." target="_blank">...</a> vào bên trong từng thẻ <li>',
    level2: `<ul>
  <li><a href="https://google.com" target="_blank">Tìm kiếm</a></li>
  <li><a href="https://f8.edu.vn" target="_blank">Học lập trình</a></li>
</ul>`,
    solution: `<ul>
  <li><a href="https://google.com" target="_blank">Tìm kiếm</a></li>
  <li><a href="https://f8.edu.vn" target="_blank">Học lập trình</a></li>
</ul>`
  },

  htmlContent: `<!-- Hãy viết danh sách liên kết của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
a {
  display: inline-block;
  background: #4f46e5;
  color: white;
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(79, 70, 229, 0.3);
}`,

  initialHtmlCode: `<!-- Bài 2.3: Tạo danh sách 2 liên kết target="_blank" -->\n`,
  solutionHtmlCode: `<ul>
  <li><a href="https://google.com" target="_blank">Tìm kiếm</a></li>
  <li><a href="https://f8.edu.vn" target="_blank">Học lập trình</a></li>
</ul>`,

  tests: [
    {
      id: 'b02-03-t1',
      description: 'Có liên kết tới https://google.com với chữ "Tìm kiếm" và target="_blank"',
      tester: (doc: Document) => {
        const link = doc.querySelector('a[href="https://google.com"], a[href="https://google.com/"]');
        return !!link && link.getAttribute('target') === '_blank' && link.textContent?.toLowerCase().includes('tìm kiếm') === true;
      }
    },
    {
      id: 'b02-03-t2',
      description: 'Có liên kết tới https://f8.edu.vn với chữ "Học lập trình" và target="_blank"',
      tester: (doc: Document) => {
        const link = doc.querySelector('a[href="https://f8.edu.vn"], a[href="https://f8.edu.vn/"]');
        return !!link && link.getAttribute('target') === '_blank' && link.textContent?.toLowerCase().includes('học lập trình') === true;
      }
    }
  ]
};

export const LESSON_B02_04: Lesson = {
  id: 'b02-04',
  title: 'Bài 2.4 (Nâng cao): Điều Hướng Nội Bộ Trang (Bookmark Link)',
  shortDescription: 'Sử dụng liên kết neo Bookmark <a href="#id"> để cuộn nhảy tới một phần tử mang thuộc tính id cụ thể.',
  category: 'html-format',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 40,
  order: 8,
  week: 2,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 2.4: Điều hướng nội bộ trang (Bookmark Link)**! 📍

Khi trang web dài, bạn có thể tạo một liên kết neo để người dùng nhấn vào là tự động cuộn đến phần nội dung tương ứng:
- Đặt thuộc tính định danh duy nhất \`id="ten-id"\` cho phần tử đích (ví dụ: \`<h2 id="bai-viet">\`).
- Tạo thẻ liên kết với dấu thăng: \`<a href="#bai-viet">Xem bài viết</a>\`.`,

  taskInstructions: [
    'Tạo một thẻ liên kết `<a href="#bai-viet">Xem bài viết</a>`',
    'Tạo thẻ tiêu đề `<h2 id="bai-viet">Nội dung bài viết</h2>` ở phía dưới'
  ],

  hints: {
    level1: 'Thẻ <a> có href="#bai-viet" và thẻ <h2> có id="bai-viet"',
    level2: '<a href="#bai-viet">Xem bài viết</a>\n<div style="height: 60px;"></div>\n<h2 id="bai-viet">Nội dung bài viết</h2>',
    solution: '<a href="#bai-viet">Xem bài viết</a>\n<h2 id="bai-viet">Nội dung bài viết</h2>'
  },

  htmlContent: `<!-- Hãy viết liên kết bookmark và thẻ h2 của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
}
a {
  display: inline-block;
  background: #0284c7;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 30px;
}
h2 {
  color: #4f46e5;
  font-size: 22px;
  padding-top: 20px;
  border-top: 2px dashed #cbd5e1;
}`,

  initialHtmlCode: `<!-- Bài 2.4: Tạo thẻ a href="#bai-viet" và thẻ h2 id="bai-viet" -->\n`,
  solutionHtmlCode: `<a href="#bai-viet">Xem bài viết</a>
<h2 id="bai-viet">Nội dung bài viết</h2>`,

  tests: [
    {
      id: 'b02-04-t1',
      description: 'Có thẻ <a> với thuộc tính href="#bai-viet" và chứa chữ "Xem bài viết"',
      tester: (doc: Document) => {
        const a = doc.querySelector('a[href="#bai-viet"]');
        return !!a && a.textContent?.toLowerCase().includes('xem bài viết') === true;
      }
    },
    {
      id: 'b02-04-t2',
      description: 'Có thẻ <h2> với id="bai-viet" và chứa chữ "Nội dung bài viết"',
      tester: (doc: Document) => {
        const h2 = doc.querySelector('h2#bai-viet');
        return !!h2 && h2.textContent?.toLowerCase().includes('nội dung bài viết') === true;
      }
    }
  ]
};

export const B02_LESSONS: Lesson[] = [
  LESSON_B02_01,
  LESSON_B02_02,
  LESSON_B02_03,
  LESSON_B02_04,
];
