import { Lesson } from '@/types/lesson';

export const lessonHtml08: Lesson = {
  id: 'css01-color-background',
  title: 'C01. Nhuộm Màu Sắc & Nền (color, background)',
  shortDescription: 'Làm chủ thuộc tính đổi màu chữ color và màu nền background trong CSS',
  category: 'css-basic',
  course: 'html-css',
  track: 'css-foundation',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 50,
  order: 8,

  story: `Chào mừng bạn bước vào thế giới **CSS (Cascading Style Sheets)**! 🎨

Nếu HTML là bộ khung xương thì CSS chính là làn da, trang phục và màu sắc rực rỡ biến trang web trở nên lộng lẫy.

Hai thuộc tính ma thuật cơ bản nhất trong CSS:
1. **\`color\`**: Đổi màu của chữ (text).
2. **\`background-color\`**: Đổi màu nền của hộp hoặc trang web.
3. **Màu sắc trong CSS**: Bạn có thể dùng tên màu tiếng Anh (\`gold\`, \`white\`, \`crimson\`), mã HEX (\`#6366f1\`) hoặc mã RGB (\`rgb(99, 102, 241)\`).

Ví dụ:
\`\`\`css
.magic-card {
  background-color: #4f46e5; /* Màu tím đậm */
  color: #ffffff;            /* Chữ màu trắng */
}

h2 {
  color: #fbbf24;            /* Tiêu đề màu vàng kim */
}
\`\`\`
`,

  taskInstructions: [
    'Chọn lớp `.hero-box` và đặt `background-color: #1e1b4b;` (màu tím bóng đêm).',
    'Đặt `color: #ffffff;` cho `.hero-box` để toàn bộ chữ chuyển sang màu trắng.',
    'Chọn thẻ `h2` bên trong và đặt `color: #f59e0b;` (màu vàng kim bảo rực rỡ).'
  ],

  hints: {
    level1: 'Viết CSS cho .hero-box và h2 với các thuộc tính color và background-color.',
    level2: `.hero-box {\n  background-color: #1e1b4b;\n  color: #ffffff;\n}\nh2 {\n  color: #f59e0b;\n}`,
    solution: `.hero-box {
  background-color: #1e1b4b;
  color: #ffffff;
}

h2 {
  color: #f59e0b;
}`
  },

  htmlContent: `
<div class="container">
  <div class="hero-box">
    <h2>⚔️ Dũng Sĩ Phép Thuật</h2>
    <p>Hãy dùng CSS để nhuộm màu trang phục và làm rực sáng danh hiệu hiệp sĩ này nhé!</p>
    <div class="badge">Cấp độ 99</div>
  </div>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Viết CSS cho .hero-box và h2 theo hướng dẫn */

.hero-box {
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #4338ca;
  /* Thêm background-color và color tại đây: */

}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  /* Thêm color cho tiêu đề tại đây: */

}

.badge {
  display: inline-block;
  margin-top: 15px;
  padding: 6px 16px;
  background: #f59e0b;
  color: #1e1b4b;
  font-weight: 800;
  border-radius: 9999px;
  font-size: 12px;
}
`,

  solutionCssCode: `.hero-box {
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  border: 2px solid #4338ca;
  background-color: #1e1b4b;
  color: #ffffff;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #f59e0b;
}

.badge {
  display: inline-block;
  margin-top: 15px;
  padding: 6px 16px;
  background: #f59e0b;
  color: #1e1b4b;
  font-weight: 800;
  border-radius: 9999px;
  font-size: 12px;
}`,

  tests: [
    {
      id: 'box_background_color',
      description: 'Lớp .hero-box có màu nền tối (background-color dạng #1e1b4b hoặc tương đương)',
      tester: (doc, win) => {
        const el = doc.querySelector('.hero-box') as HTMLElement;
        if (!el) return false;
        const bg = win.getComputedStyle(el).backgroundColor;
        // rgb(30, 27, 75) is #1e1b4b
        return bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent';
      }
    },
    {
      id: 'box_text_color',
      description: 'Lớp .hero-box có màu chữ màu sáng/trắng (color: #ffffff hoặc rgb(255, 255, 255))',
      tester: (doc, win) => {
        const el = doc.querySelector('.hero-box') as HTMLElement;
        if (!el) return false;
        const color = win.getComputedStyle(el).color;
        return color.includes('255') || color.includes('rgb');
      }
    },
    {
      id: 'h2_gold_color',
      description: 'Tiêu đề h2 có màu vàng kim rực rỡ (color: #f59e0b hoặc tương đương)',
      tester: (doc, win) => {
        const h2 = doc.querySelector('h2') as HTMLElement;
        if (!h2) return false;
        const color = win.getComputedStyle(h2).color;
        // #f59e0b is rgb(245, 158, 11)
        return color.includes('245') || color.includes('251') || color !== win.getComputedStyle(doc.body).color;
      }
    }
  ]
};
