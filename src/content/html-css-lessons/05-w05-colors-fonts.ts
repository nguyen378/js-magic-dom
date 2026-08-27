import { Lesson } from '@/types/lesson';

export const LESSON_W05: Lesson = {
  id: 'w05-colors-fonts',
  title: 'Buổi 5: Nhập Môn CSS — Bộ Chọn & Màu Sắc',
  shortDescription: 'Cú pháp CSS, màu nền background-color, màu chữ color, Typography (font-family, font-size, text-align), selector class, id và Specificity.',
  category: 'css-basic',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 100,
  order: 5,
  week: 5,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 5: Nhập môn CSS — Bộ chọn, Màu sắc & Typography**! 🎨

CSS (Cascading Style Sheets) là cây cọ thần kỳ giúp trang điểm cho bộ khung HTML:
- **Cú pháp CSS**: \`bộ_chọn { thuộc_tính: giá_trị; }\`
- **Màu sắc**: \`background-color\` (màu nền), \`color\` (màu chữ).
- **Typography**: \`font-family\` (kiểu chữ), \`font-size\` (cỡ chữ), \`text-align\` (căn lề văn bản).
- **Các loại bộ chọn (Selectors)**:
  - Bộ chọn thẻ: \`body\`, \`h1\`, \`p\`...
  - Bộ chọn class: \`.text-highlight\`, \`.text-note\` (dùng dấu chấm \`.\`).
  - Bộ chọn ID: \`#first\` (dùng dấu thăng \`#\`).
- **Độ ưu tiên (Specificity)**: ID (\`#first\`) luôn có độ ưu tiên cao hơn Class (\`.intro\`), và Class cao hơn Thẻ (\`p\`).`,

  taskInstructions: [
    '🟢 Bài 5.1: Đổi màu nền toàn trang `body` thành `#f5f5f5`, đổi màu chữ của thẻ `<h1>` thành `blue`',
    '🟢 Bài 5.2: Định dạng thẻ `<p>`: `font-family: Arial, sans-serif;`, `font-size: 16px;`, và `text-align: center;`',
    '🟡 Bài 5.3: Tạo class `.text-highlight` có màu chữ `#e74c3c` và `font-weight: bold;`; class `.text-note` có màu chữ `#7f8c8d` và `font-style: italic;`',
    '🟡 Bài 5.4: Viết các luật CSS cho thẻ `p`, class `.intro`, và ID `#first` để màu chữ của ID `#first` (ví dụ: `#9b59b6` hoặc `purple`) được ưu tiên áp dụng hiển thị'
  ],

  hints: {
    level1: 'Viết các khối luật CSS: body { ... }, h1 { ... }, p { ... }, .text-highlight { ... }, .text-note { ... }, #first { ... }',
    level2: `/* Gợi ý cú pháp */
body {
  background-color: #f5f5f5;
}

h1 {
  color: blue;
}

p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
}

.text-highlight {
  color: #e74c3c;
  font-weight: bold;
}

.text-note {
  color: #7f8c8d;
  font-style: italic;
}

.intro {
  color: green;
}

#first {
  color: #9b59b6;
}`,
    solution: `body {
  background-color: #f5f5f5;
}

h1 {
  color: blue;
}

p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
}

.text-highlight {
  color: #e74c3c;
  font-weight: bold;
}

.text-note {
  color: #7f8c8d;
  font-style: italic;
}

.intro {
  color: #27ae60;
}

#first {
  color: #9b59b6;
}`
  },

  htmlContent: `<div class="content-box">
  <h1>Lập Trình Web Cùng CSS</h1>
  <p id="first" class="intro">Đoạn văn này có cả thẻ p, class .intro và ID #first để thử độ ưu tiên.</p>
  <p class="text-highlight">Đây là dòng chữ quan trọng cần được làm nổi bật!</p>
  <p class="text-note">Ghi chú nhỏ: CSS giúp website sống động và rực rỡ hơn.</p>
</div>`,
  cssContent: ``,

  initialCssCode: `/* Buổi 5: Viết CSS cho body, h1, p, .text-highlight, .text-note, .intro và #first */
body {

}

h1 {

}

p {

}

.text-highlight {

}

.text-note {

}

.intro {

}

#first {

}
`,
  solutionCssCode: `body {
  background-color: #f5f5f5;
}

h1 {
  color: blue;
}

p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
}

.text-highlight {
  color: #e74c3c;
  font-weight: bold;
}

.text-note {
  color: #7f8c8d;
  font-style: italic;
}

.intro {
  color: #27ae60;
}

#first {
  color: #9b59b6;
}
`,

  tests: [
    {
      id: 'w05-t1',
      description: 'Bài 5.1: body có background-color là #f5f5f5 (hoặc rgb(245, 245, 245)) và h1 có color: blue',
      tester: (doc: Document, win: Window) => {
        const bodyStyle = win.getComputedStyle(doc.body);
        const h1 = doc.querySelector('h1');
        const h1Style = h1 ? win.getComputedStyle(h1) : null;
        const hasBg = bodyStyle.backgroundColor.includes('245, 245, 245') || bodyStyle.backgroundColor.includes('rgb(245, 245, 245)');
        const hasH1Color = !!h1Style && (h1Style.color === 'rgb(0, 0, 255)' || h1Style.color === 'blue');
        return hasBg && hasH1Color;
      }
    },
    {
      id: 'w05-t2',
      description: 'Bài 5.2: Thẻ p có font-family: Arial, font-size: 16px và text-align: center',
      tester: (doc: Document, win: Window) => {
        const p = doc.querySelector('p');
        if (!p) return false;
        const style = win.getComputedStyle(p);
        return style.fontFamily.toLowerCase().includes('arial') && style.fontSize === '16px' && style.textAlign === 'center';
      }
    },
    {
      id: 'w05-t3',
      description: 'Bài 5.3: .text-highlight có font-weight: bold (hoặc 700) và .text-note có font-style: italic',
      tester: (doc: Document, win: Window) => {
        const highlight = doc.querySelector('.text-highlight');
        const note = doc.querySelector('.text-note');
        if (!highlight || !note) return false;
        const hStyle = win.getComputedStyle(highlight);
        const nStyle = win.getComputedStyle(note);
        const isBold = hStyle.fontWeight === 'bold' || parseInt(hStyle.fontWeight) >= 700;
        const isItalic = nStyle.fontStyle === 'italic';
        return isBold && isItalic;
      }
    },
    {
      id: 'w05-t4',
      description: 'Bài 5.4: ID #first được áp dụng màu chữ thành công nhờ độ ưu tiên Specificity',
      tester: (doc: Document, win: Window) => {
        const first = doc.querySelector('#first');
        if (!first) return false;
        const style = win.getComputedStyle(first);
        return style.color !== 'rgb(0, 0, 255)' && style.color !== 'rgb(30, 41, 59)' && style.color !== 'rgb(0, 0, 0)';
      }
    }
  ]
};
