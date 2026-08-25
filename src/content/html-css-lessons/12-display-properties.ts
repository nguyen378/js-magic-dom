import { Lesson } from '@/types/lesson';

export const lessonHtml12: Lesson = {
  id: 'css05-display-properties',
  title: 'C05. Thuộc Tính Hiển Thị (display: inline, block)',
  shortDescription: 'Hiểu rõ sự khác biệt giữa phần tử khối block, phần tử nội dòng inline và inline-block',
  category: 'css-boxmodel',
  course: 'html-css',
  track: 'css-layout',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 60,
  order: 12,

  story: `Trong thế giới web, mỗi phần tử có một cơ chế hiển thị mặc định:

1. **\`display: block\`** (như \`<div>\`, \`<p>\`, \`<h1>\`): Chiếm trọn 100% chiều ngang của dòng, luôn tự động ngắt xuống dòng mới. Cho phép chỉnh \`width\`, \`height\`, \`padding\`, \`margin\`.
2. **\`display: inline\`** (như \`<span>\`, \`<a>\`, \`<strong>\`): Nằm trên cùng một dòng với các chữ khác, chỉ rộng vừa đủ ôm lấy nội dung. Không thể chỉnh \`width\`, \`height\`.
3. **\`display: inline-block\`**: Sự kết hợp hoàn hảo! Vẫn nằm trên cùng 1 hàng như inline nhưng lại có thể chỉnh \`width\`, \`height\`, \`padding\` như block!

Ví dụ biến các thẻ link \`<a>\` thành các nút bấm nằm cùng hàng:
\`\`\`css
a.btn {
  display: inline-block;
  padding: 10px 20px;
  width: 140px;
  text-align: center;
}
\`\`\`
`,

  taskInstructions: [
    'Trong lớp `.tag-item`, đặt thuộc tính `display: inline-block;` để các nhãn nằm cạnh nhau trên cùng một hàng.',
    'Thêm `padding: 8px 16px;` vào `.tag-item`.',
    'Thêm khoảng cách `margin: 6px;` để các nhãn không dính vào nhau.'
  ],

  hints: {
    level1: 'Thiết lập display: inline-block, padding và margin cho lớp .tag-item.',
    level2: `.tag-item {\n  display: inline-block;\n  padding: 8px 16px;\n  margin: 6px;\n}`,
    solution: `.tag-item {
  display: inline-block;
  padding: 8px 16px;
  margin: 6px;
}`
  },

  htmlContent: `
<div class="container">
  <div class="tags-card">
    <h3>🏷️ Kỹ Năng Pháp Sư</h3>
    <div class="tags-list">
      <span class="tag-item tag-fire">🔥 Lửa Thần</span>
      <span class="tag-item tag-ice">❄️ Băng Giá</span>
      <span class="tag-item tag-thunder">⚡ Sấm Sét</span>
      <span class="tag-item tag-earth">🌿 Đất Mẹ</span>
    </div>
  </div>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Biến các span .tag-item thành các nhãn inline-block đẹp mắt */

.tags-card {
  background: #0f172a;
  color: white;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #334155;
}

h3 {
  color: #38bdf8;
  margin-bottom: 16px;
}

.tag-item {
  color: white;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 13px;
  background: #1e293b;
  border: 1px solid #475569;
  /* Thêm display: inline-block, padding và margin tại đây: */

}

.tag-fire { border-color: #f43f5e; color: #fda4af; }
.tag-ice { border-color: #38bdf8; color: #bae6fd; }
.tag-thunder { border-color: #fbbf24; color: #fde68a; }
.tag-earth { border-color: #34d399; color: #a7f3d0; }
`,

  solutionCssCode: `.tags-card {
  background: #0f172a;
  color: white;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #334155;
}

h3 {
  color: #38bdf8;
  margin-bottom: 16px;
}

.tag-item {
  color: white;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 13px;
  background: #1e293b;
  border: 1px solid #475569;
  display: inline-block;
  padding: 8px 16px;
  margin: 6px;
}

.tag-fire { border-color: #f43f5e; color: #fda4af; }
.tag-ice { border-color: #38bdf8; color: #bae6fd; }
.tag-thunder { border-color: #fbbf24; color: #fde68a; }
.tag-earth { border-color: #34d399; color: #a7f3d0; }`,

  tests: [
    {
      id: 'display_inline_block',
      description: 'Lớp .tag-item có thuộc tính display là inline-block (hoặc inline-flex)',
      tester: (doc, win) => {
        const tag = doc.querySelector('.tag-item') as HTMLElement;
        if (!tag) return false;
        const d = win.getComputedStyle(tag).display;
        return d === 'inline-block' || d === 'inline-flex';
      }
    },
    {
      id: 'tag_padding',
      description: 'Lớp .tag-item có padding >= 6px',
      tester: (doc, win) => {
        const tag = doc.querySelector('.tag-item') as HTMLElement;
        if (!tag) return false;
        const pLeft = parseFloat(win.getComputedStyle(tag).paddingLeft);
        return pLeft >= 6;
      }
    },
    {
      id: 'tag_margin',
      description: 'Lớp .tag-item có margin khoảng cách lề',
      tester: (doc, win) => {
        const tag = doc.querySelector('.tag-item') as HTMLElement;
        if (!tag) return false;
        const m = parseFloat(win.getComputedStyle(tag).marginRight);
        return m >= 4;
      }
    }
  ]
};
