import { Lesson } from '@/types/lesson';

export const LESSON_W01: Lesson = {
  id: 'w01-first-page',
  title: 'Buổi 1: Khám Phá Web & Thẻ HTML Đầu Tiên',
  shortDescription: 'Cấu trúc tài liệu HTML5 chuẩn, thẻ tiêu đề <h1>–<h6>, đoạn văn <p>, định dạng in đậm <b>, in nghiêng <i>, chèn ảnh <img> và đường kẻ <hr>.',
  category: 'html-basic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 100,
  order: 1,
  week: 1,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 1: Khám phá Web & Thẻ HTML đầu tiên**! 🌐

Mỗi trang web trên thế giới đều bắt đầu từ ngôn ngữ **HTML** (HyperText Markup Language) — bộ khung xương tạo nên nội dung cho website.
- **Thẻ tiêu đề \`<h1>\` đến \`<h6>\`**: Dùng cho các tiêu đề từ lớn nhất (\`<h1>\`) đến nhỏ nhất (\`<h6>\`).
- **Thẻ đoạn văn \`<p>\`**: Dùng để chứa các đoạn văn bản thông thường.
- **Định dạng chữ**: Thẻ \`<b>\` (hoặc \`<strong>\`) để in đậm, thẻ \`<i>\` (hoặc \`<em>\`) để in nghiêng.
- **Đường kẻ phân cách \`<hr>\`**: Tạo đường kẻ ngang ngăn cách các phần nội dung.
- **Thẻ hình ảnh \`<img>\`**: Chèn ảnh vào trang với \`src\` (đường dẫn), \`alt\` (mô tả dự phòng) và \`width\` (chiều rộng).`,

  taskInstructions: [
    '🟢 Bài 1.1: Viết 1 thẻ `<h1>` có nội dung "Trang web của tôi" và 1 thẻ `<p>` có nội dung "Tôi là học sinh lớp 8 đang học lập trình web."',
    '🟢 Bài 1.2: Dùng thẻ `<b>` in đậm từ "HTML", thẻ `<i>` in nghiêng từ "dễ học", và thêm thẻ `<hr>` bên dưới',
    '🟡 Bài 1.3: Dùng thẻ `<img>` chèn ảnh từ `https://via.placeholder.com/300x200` với `alt="Ảnh nhân vật"` và `width="300"`',
    '🟡 Bài 1.4: Tạo khối thẻ Profile gồm: `<h2>` (Tên nhân vật), `<img>` (Ảnh), `<p>` (Mô tả có chứa từ in đậm `<b>`), và đường kẻ `<hr>`'
  ],

  hints: {
    level1: 'Sử dụng các thẻ <h1>, <p>, <b>, <i>, <hr>, <img> và <h2> theo đúng thứ tự hướng dẫn.',
    level2: `<!-- Gợi ý cú pháp mẫu -->
<h1>Trang web của tôi</h1>
<p>Tôi là học sinh lớp 8 đang học lập trình web.</p>
<p>Học <b>HTML</b> rất <i>dễ học</i> và thú vị!</p>
<hr>
<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">
<h2>Hiệp Sĩ Code</h2>
<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">
<p>Nhân vật sở hữu sức mạnh <b>HTML vô địch</b>!</p>
<hr>`,
    solution: `<h1>Trang web của tôi</h1>
<p>Tôi là học sinh lớp 8 đang học lập trình web.</p>

<p>Học <b>HTML</b> cực kỳ <i>dễ học</i> và trực quan!</p>
<hr>

<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">

<h2>Hiệp Sĩ Code</h2>
<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">
<p>Đây là <b>nhân vật anh hùng</b> của thế giới web!</p>
<hr>`
  },

  htmlContent: `<!-- Hãy viết các thẻ HTML của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
  line-height: 1.6;
}
h1 {
  color: #4f46e5;
  font-size: 26px;
  margin-bottom: 8px;
}
h2 {
  color: #0284c7;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 8px;
}
p {
  color: #475569;
  font-size: 15px;
  margin-bottom: 12px;
}
b, strong {
  color: #ea580c;
}
i, em {
  color: #7c3aed;
}
hr {
  border: none;
  height: 2px;
  background: #e2e8f0;
  margin: 16px 0;
}
img {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: block;
  margin-bottom: 12px;
  max-width: 100%;
}`,

  initialHtmlCode: `<!-- Buổi 1: Thực hành các thẻ HTML đầu tiên theo 4 bài tập -->\n`,
  solutionHtmlCode: `<h1>Trang web của tôi</h1>
<p>Tôi là học sinh lớp 8 đang học lập trình web.</p>

<p>Học <b>HTML</b> cực kỳ <i>dễ học</i> và trực quan!</p>
<hr>

<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">

<h2>Hiệp Sĩ Code</h2>
<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">
<p>Đây là <b>nhân vật anh hùng</b> của thế giới web!</p>
<hr>`,

  tests: [
    {
      id: 'w01-t1',
      description: 'Bài 1.1: Có thẻ <h1> chứa "Trang web của tôi" và thẻ <p> chứa "Tôi là học sinh lớp 8 đang học lập trình web."',
      tester: (doc: Document) => {
        const h1 = doc.querySelector('h1');
        const ps = Array.from(doc.querySelectorAll('p'));
        const hasH1 = !!h1 && h1.textContent?.toLowerCase().includes('trang web của tôi') === true;
        const hasP = ps.some(p => p.textContent?.toLowerCase().includes('tôi là học sinh lớp 8 đang học lập trình web'));
        return hasH1 && hasP;
      }
    },
    {
      id: 'w01-t2',
      description: 'Bài 1.2: Dùng thẻ <b> in đậm từ "HTML", thẻ <i> in nghiêng từ "dễ học", và có thẻ <hr>',
      tester: (doc: Document) => {
        const b = doc.querySelector('b, strong');
        const i = doc.querySelector('i, em');
        const hr = doc.querySelector('hr');
        const hasB = !!b && b.textContent?.toLowerCase().includes('html') === true;
        const hasI = !!i && i.textContent?.toLowerCase().includes('dễ học') === true;
        return hasB && hasI && !!hr;
      }
    },
    {
      id: 'w01-t3',
      description: 'Bài 1.3: Thẻ <img> có src chứa placeholder, alt="Ảnh nhân vật" và width="300"',
      tester: (doc: Document) => {
        const imgs = Array.from(doc.querySelectorAll('img'));
        return imgs.some(img => {
          const src = img.getAttribute('src') || '';
          const alt = img.getAttribute('alt') || '';
          const width = img.getAttribute('width') || '';
          return (src.includes('placeholder') || src.length > 5) && alt.toLowerCase().includes('ảnh nhân vật') && width === '300';
        });
      }
    },
    {
      id: 'w01-t4',
      description: 'Bài 1.4: Có khối Profile gồm <h2>, <img>, <p> chứa <b>, và <hr>',
      tester: (doc: Document) => {
        const h2 = doc.querySelector('h2');
        const imgs = doc.querySelectorAll('img');
        const psWithB = Array.from(doc.querySelectorAll('p')).filter(p => p.querySelector('b, strong'));
        const hrs = doc.querySelectorAll('hr');
        return !!h2 && imgs.length >= 1 && psWithB.length >= 1 && hrs.length >= 1;
      }
    }
  ]
};
