import { Lesson } from '@/types/lesson';

export const lessonHtml09: Lesson = {
  id: 'css02-fonts-typography',
  title: 'C02. Kiểu Chữ & Căn Lề (font-size, text-align)',
  shortDescription: 'Làm chủ cỡ chữ font-size, độ đậm font-weight, căn lề text-align và khoảng cách dòng',
  category: 'css-typography',
  course: 'html-css',
  track: 'css-foundation',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 50,
  order: 9,

  story: `Chữ viết là cách trang web truyền đạt thông điệp tới người dùng. CSS cung cấp các công cụ mạnh mẽ để tùy biến chữ:

* **\`font-size\`**: Kích thước chữ (ví dụ: \`32px\`, \`16px\`, \`1.5rem\`).
* **\`font-weight\`**: Độ đậm nhạt của chữ (\`normal\`, \`bold\`, hoặc số \`400\`, \`700\`, \`900\`).
* **\`text-align\`**: Căn lề văn bản (\`center\` - căn giữa, \`left\` - căn trái, \`right\` - căn phải).
* **\`line-height\`**: Chiều cao dòng (giúp các dòng chữ cách nhau thoáng đãng, dễ đọc hơn).

Ví dụ:
\`\`\`css
.banner-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
}
\`\`\`
`,

  taskInstructions: [
    'Trong lớp `.quote-card`, thiết lập `text-align: center;` để căn giữa toàn bộ nội dung.',
    'Trong thẻ `h1`, đặt kích thước chữ `font-size: 28px;` và độ đậm `font-weight: 800;`.',
    'Trong thẻ `p`, đặt cỡ chữ `font-size: 16px;` và khoảng cách dòng `line-height: 1.8;`.'
  ],

  hints: {
    level1: 'Sử dụng các thuộc tính text-align, font-size, font-weight và line-height theo yêu cầu.',
    level2: `.quote-card {\n  text-align: center;\n}\nh1 {\n  font-size: 28px;\n  font-weight: 800;\n}\np {\n  font-size: 16px;\n  line-height: 1.8;\n}`,
    solution: `.quote-card {
  text-align: center;
}

h1 {
  font-size: 28px;
  font-weight: 800;
}

p {
  font-size: 16px;
  line-height: 1.8;
}`
  },

  htmlContent: `
<div class="container">
  <div class="quote-card">
    <h1>✨ Lời Sấm Truyền Cổ Đại ✨</h1>
    <p>Người làm chủ được dòng mã HTML và CSS sẽ nắm giữ chìa khóa mở ra cánh cổng của vương quốc kỹ thuật số vô tận!</p>
    <span class="author">— Đại Pháp Sư Merlin</span>
  </div>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Tinh chỉnh kiểu chữ và căn lề cho card */

.quote-card {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  color: white;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #4f46e5;
  /* Thêm text-align: center tại đây: */

}

h1 {
  color: #38bdf8;
  margin-bottom: 12px;
  /* Thêm font-size: 28px và font-weight: 800 tại đây: */

}

p {
  color: #cbd5e1;
  /* Thêm font-size: 16px và line-height: 1.8 tại đây: */

}

.author {
  display: block;
  margin-top: 16px;
  font-size: 13px;
  color: #fbbf24;
  font-weight: 700;
}
`,

  solutionCssCode: `.quote-card {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  color: white;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #4f46e5;
  text-align: center;
}

h1 {
  color: #38bdf8;
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 800;
}

p {
  color: #cbd5e1;
  font-size: 16px;
  line-height: 1.8;
}

.author {
  display: block;
  margin-top: 16px;
  font-size: 13px;
  color: #fbbf24;
  font-weight: 700;
}`,

  tests: [
    {
      id: 'text_align_center',
      description: 'Lớp .quote-card có thuộc tính text-align: center',
      tester: (doc, win) => {
        const card = doc.querySelector('.quote-card') as HTMLElement;
        if (!card) return false;
        return win.getComputedStyle(card).textAlign === 'center';
      }
    },
    {
      id: 'h1_typography',
      description: 'Thẻ h1 có font-size xấp xỉ 28px và font-weight đậm',
      tester: (doc, win) => {
        const h1 = doc.querySelector('h1') as HTMLElement;
        if (!h1) return false;
        const style = win.getComputedStyle(h1);
        const fSize = parseFloat(style.fontSize);
        const fWeight = parseInt(style.fontWeight, 10) || 700;
        return fSize >= 24 && fWeight >= 700;
      }
    },
    {
      id: 'p_line_height',
      description: 'Thẻ p có font-size 16px và line-height thoáng đãng',
      tester: (doc, win) => {
        const p = doc.querySelector('p') as HTMLElement;
        if (!p) return false;
        const style = win.getComputedStyle(p);
        const fSize = parseFloat(style.fontSize);
        return fSize >= 15;
      }
    }
  ]
};
