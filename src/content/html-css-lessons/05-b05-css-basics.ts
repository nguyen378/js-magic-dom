import { Lesson } from '@/types/lesson';

export const LESSON_B05_01: Lesson = {
  id: 'b05-01',
  title: 'Bài 5.1 (Cơ bản): Đổi Màu Chữ Và Màu Nền',
  shortDescription: 'Sử dụng thuộc tính background-color cho body và color cho tiêu đề h1.',
  category: 'css-colors',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 17,
  week: 5,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 5.1: Nhập môn CSS — Màu sắc**! 🎨

CSS (Cascading Style Sheets) giúp bạn trang trí màu sắc cho ngôi nhà HTML:
- \`background-color\`: Đổi màu nền.
- \`color\`: Đổi màu chữ.
- Cú pháp: \`selector { property: value; }\``,

  taskInstructions: [
    'Chọn thẻ `body` và đổi màu nền `background-color: #f5f5f5;` (hoặc rgb(245, 245, 245))',
    'Chọn thẻ `h1` và đổi màu chữ `color: blue;` (hoặc #0000ff)'
  ],

  hints: {
    level1: 'Viết luật CSS cho body { background-color: #f5f5f5; } và h1 { color: blue; }',
    level2: `body {
  background-color: #f5f5f5;
}
h1 {
  color: blue;
}`,
    solution: `body {
  background-color: #f5f5f5;
}
h1 {
  color: blue;
}`
  },

  htmlContent: `<h1>Chào Mừng Đến Với Thế Giới CSS</h1>
<p>CSS giúp giao diện trang web trở nên sống động và rực rỡ sắc màu.</p>`,
  cssContent: `p {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 16px;
  color: #334155;
}`,

  initialCssCode: `/* Bài 5.1: Đổi màu nền cho body và màu chữ cho h1 */
body {

}

h1 {

}
`,
  solutionCssCode: `body {
  background-color: #f5f5f5;
}

h1 {
  color: blue;
}
`,

  tests: [
    {
      id: 'b05-01-t1',
      description: 'Thẻ body có background-color là #f5f5f5 (hoặc rgb(245, 245, 245))',
      tester: (doc: Document, win: Window) => {
        const body = doc.querySelector('body');
        if (!body) return false;
        const style = win.getComputedStyle(body);
        return style.backgroundColor === 'rgb(245, 245, 245)' || style.backgroundColor === '#f5f5f5';
      }
    },
    {
      id: 'b05-01-t2',
      description: 'Thẻ h1 có color là blue (hoặc rgb(0, 0, 255))',
      tester: (doc: Document, win: Window) => {
        const h1 = doc.querySelector('h1');
        if (!h1) return false;
        const style = win.getComputedStyle(h1);
        return style.color === 'rgb(0, 0, 255)' || style.color === 'blue';
      }
    }
  ]
};

export const LESSON_B05_02: Lesson = {
  id: 'b05-02',
  title: 'Bài 5.2 (Cơ bản): Định Dạng Typography Cơ Bản',
  shortDescription: 'Thiết lập font-family, font-size và text-align cho đoạn văn p.',
  category: 'css-colors',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 18,
  week: 5,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 5.2: Định dạng văn bản (Typography)**! 🔤

Để chữ viết trên trang web dễ đọc và chuyên nghiệp:
- \`font-family\`: Kiểu phông chữ (ví dụ: \`Arial, sans-serif\`).
- \`font-size\`: Kích thước chữ (ví dụ: \`16px\`).
- \`text-align\`: Căn lề văn bản (\`left\`, \`center\`, \`right\`).`,

  taskInstructions: [
    'Đặt kiểu chữ cho thẻ `p`: `font-family: Arial, sans-serif;`',
    'Đặt kích thước chữ cho thẻ `p`: `font-size: 16px;`',
    'Căn giữa đoạn văn: `text-align: center;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho thẻ p với 3 thuộc tính: font-family, font-size, text-align',
    level2: `p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
}`,
    solution: `p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
}`
  },

  htmlContent: `<div class="card" style="background: white; padding: 24px; border-radius: 12px; max-width: 480px; margin: 20px auto; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
  <p>Lập trình web mở ra cánh cửa sáng tạo vô hạn cho mọi bạn học sinh.</p>
</div>`,
  cssContent: `body {
  background: #f1f5f9;
  padding: 20px;
}`,

  initialCssCode: `/* Bài 5.2: Định dạng typography cho thẻ p */
p {

}
`,
  solutionCssCode: `p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
}
`,

  tests: [
    {
      id: 'b05-02-t1',
      description: 'Thẻ p có font-size: 16px và text-align: center',
      tester: (doc: Document, win: Window) => {
        const p = doc.querySelector('p');
        if (!p) return false;
        const style = win.getComputedStyle(p);
        return style.fontSize === '16px' && style.textAlign === 'center';
      }
    },
    {
      id: 'b05-02-t2',
      description: 'Thẻ p có font-family chứa Arial',
      tester: (doc: Document, win: Window) => {
        const p = doc.querySelector('p');
        if (!p) return false;
        const style = win.getComputedStyle(p);
        return style.fontFamily.toLowerCase().includes('arial');
      }
    }
  ]
};

export const LESSON_B05_03: Lesson = {
  id: 'b05-03',
  title: 'Bài 5.3 (Nâng cao): Định Dạng Theo Bộ Chọn Class',
  shortDescription: 'Tạo và áp dụng các lớp .text-highlight và .text-note để định kiểu có chọn lọc.',
  category: 'css-colors',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 35,
  order: 19,
  week: 5,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 5.3: Bộ chọn Class trong CSS**! 🎯

Bộ chọn Class (\`.ten-class\`) cho phép bạn áp dụng phong cách riêng cho các phần tử cụ thể:
- \`.text-highlight\`: Nổi bật văn bản với màu đỏ \`#e74c3c\` và in đậm \`font-weight: bold;\`.
- \`.text-note\`: Ghi chú nhẹ nhàng với màu xám \`#7f8c8d\` và in nghiêng \`font-style: italic;\`.`,

  taskInstructions: [
    'Tạo class `.text-highlight` có màu chữ `#e74c3c` và `font-weight: bold;` (hoặc 700)',
    'Tạo class `.text-note` có màu chữ `#7f8c8d` và `font-style: italic;`'
  ],

  hints: {
    level1: 'Sử dụng dấu chấm (.) phía trước tên class trong CSS',
    level2: `.text-highlight {
  color: #e74c3c;
  font-weight: bold;
}
.text-note {
  color: #7f8c8d;
  font-style: italic;
}`,
    solution: `.text-highlight {
  color: #e74c3c;
  font-weight: bold;
}
.text-note {
  color: #7f8c8d;
  font-style: italic;
}`
  },

  htmlContent: `<div style="background: white; padding: 24px; border-radius: 12px; max-width: 480px; margin: 20px auto; font-family: sans-serif;">
  <p class="text-highlight">Thông báo quan trọng: Kỳ thi lập trình sẽ diễn ra vào tuần tới.</p>
  <p class="text-note">Lưu ý: Học sinh vui lòng chuẩn bị máy tính xách tay đầy đủ pin.</p>
</div>`,
  cssContent: `body {
  background: #f8fafc;
  padding: 20px;
}`,

  initialCssCode: `/* Bài 5.3: Viết luật CSS cho .text-highlight và .text-note */
.text-highlight {

}

.text-note {

}
`,
  solutionCssCode: `.text-highlight {
  color: #e74c3c;
  font-weight: bold;
}

.text-note {
  color: #7f8c8d;
  font-style: italic;
}
`,

  tests: [
    {
      id: 'b05-03-t1',
      description: '.text-highlight có màu đỏ #e74c3c và font-weight bold',
      tester: (doc: Document, win: Window) => {
        const el = doc.querySelector('.text-highlight');
        if (!el) return false;
        const style = win.getComputedStyle(el);
        const isRed = style.color === 'rgb(231, 76, 60)' || style.color === '#e74c3c';
        const isBold = style.fontWeight === 'bold' || parseInt(style.fontWeight) >= 700;
        return isRed && isBold;
      }
    },
    {
      id: 'b05-03-t2',
      description: '.text-note có màu xám #7f8c8d và font-style italic',
      tester: (doc: Document, win: Window) => {
        const el = doc.querySelector('.text-note');
        if (!el) return false;
        const style = win.getComputedStyle(el);
        const isGray = style.color === 'rgb(127, 140, 141)' || style.color === '#7f8c8d';
        const isItalic = style.fontStyle === 'italic';
        return isGray && isItalic;
      }
    }
  ]
};

export const LESSON_B05_04: Lesson = {
  id: 'b05-04',
  title: 'Bài 5.4 (Nâng cao): Ứng Dụng Độ Ưu Tiên (Specificity)',
  shortDescription: 'Hiểu và áp dụng thứ tự ưu tiên của bộ chọn: Thẻ (Element) < Lớp (Class) < Định danh (ID).',
  category: 'css-colors',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 40,
  order: 20,
  week: 5,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 5.4: Độ ưu tiên Specificity trong CSS**! 🏆

Khi nhiều bộ chọn cùng nhắm vào một phần tử, CSS quyết định áp dụng màu theo thứ bậc ưu tiên:
\`Thẻ (p)\` **<** \`Lớp (.intro)\` **<** \`ID (#first)\`
ID luôn có độ ưu tiên cao nhất, chiến thắng mọi class và thẻ!`,

  taskInstructions: [
    'Thiết lập cho thẻ `p`: `color: black;` (Màu mặc định)',
    'Thiết lập cho class `.intro`: `color: blue;` (Ghi đè thẻ)',
    'Thiết lập cho ID `#first`: `color: green;` (Ưu tiên cao nhất)'
  ],

  hints: {
    level1: 'Viết lần lượt 3 luật CSS: p { color: black; }, .intro { color: blue; }, #first { color: green; }',
    level2: `p {
  color: black;
}
.intro {
  color: blue;
}
#first {
  color: green;
}`,
    solution: `p {
  color: black;
}
.intro {
  color: blue;
}
#first {
  color: green;
}`
  },

  htmlContent: `<div style="background: white; padding: 24px; border-radius: 12px; max-width: 480px; margin: 20px auto; font-family: sans-serif;">
  <p id="first" class="intro">Đoạn 1: Mang cả thẻ p, class .intro và ID #first (Sẽ có màu xanh lá do ID thắng!).</p>
  <p class="intro">Đoạn 2: Mang thẻ p và class .intro (Sẽ có màu xanh dương do Class thắng!).</p>
  <p>Đoạn 3: Thẻ p thông thường (Sẽ có màu đen).</p>
</div>`,
  cssContent: `body {
  background: #f1f5f9;
  padding: 20px;
}`,

  initialCssCode: `/* Bài 5.4: Thiết lập màu cho thẻ p, class .intro và ID #first */
p {

}

.intro {

}

#first {

}
`,
  solutionCssCode: `p {
  color: black;
}

.intro {
  color: blue;
}

#first {
  color: green;
}
`,

  tests: [
    {
      id: 'b05-04-t1',
      description: 'Đoạn văn #first hiển thị màu green (do ID có độ ưu tiên cao nhất)',
      tester: (doc: Document, win: Window) => {
        const el = doc.querySelector('#first');
        if (!el) return false;
        const style = win.getComputedStyle(el);
        return style.color === 'rgb(0, 128, 0)' || style.color === 'green';
      }
    },
    {
      id: 'b05-04-t2',
      description: 'Đoạn văn .intro thứ 2 hiển thị màu blue',
      tester: (doc: Document, win: Window) => {
        const intros = doc.querySelectorAll('.intro');
        if (intros.length < 2) return false;
        const style = win.getComputedStyle(intros[1]);
        return style.color === 'rgb(0, 0, 255)' || style.color === 'blue';
      }
    }
  ]
};

export const B05_LESSONS: Lesson[] = [
  LESSON_B05_01,
  LESSON_B05_02,
  LESSON_B05_03,
  LESSON_B05_04,
];
