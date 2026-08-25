import { Lesson } from '@/types/lesson';

export const lessonHtml10: Lesson = {
  id: 'css03-borders-radius',
  title: 'C03. Khung Viền & Bo Góc (border, border-radius)',
  shortDescription: 'Tạo viền khung sắc sảo, bo tròn góc thẻ mềm mại và đổ bóng phát sáng box-shadow',
  category: 'css-basic',
  course: 'html-css',
  track: 'css-foundation',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 50,
  order: 10,

  story: `Một chiếc hộp góc vuông sắc nhọn trông sẽ rất thô cứng. Hãy dùng phép thuật CSS để bo tròn các góc và tạo đường viền phát sáng lấp lánh!

1. **\`border\`**: Đường viền của phần tử.
   - Cú pháp: \`border: <độ_dày> <kiểu_viền> <màu_sắc>;\`
   - Ví dụ: \`border: 2px solid #6366f1;\` (\`solid\` là nét liền, \`dashed\` là nét đứt).
2. **\`border-radius\`**: Độ bo tròn các góc.
   - Ví dụ: \`border-radius: 20px;\` (bo tròn mềm mại) hoặc \`border-radius: 9999px;\` (hình viên thuốc hoặc hình tròn hoàn hảo).
3. **\`box-shadow\`**: Đổ bóng và tạo hiệu ứng hào quang phát sáng.
   - Ví dụ: \`box-shadow: 0 10px 25px rgba(99, 102, 241, 0.5);\`
`,

  taskInstructions: [
    'Trong lớp `.gem-card`, thêm đường viền `border: 3px solid #38bdf8;` (viền xanh băng tuyết).',
    'Thêm bo góc `border-radius: 24px;` để làm mềm mại 4 góc của thẻ.',
    'Thêm đổ bóng phát sáng `box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);`.'
  ],

  hints: {
    level1: 'Thêm các thuộc tính border, border-radius, box-shadow vào trong khối .gem-card.',
    level2: `.gem-card {\n  border: 3px solid #38bdf8;\n  border-radius: 24px;\n  box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);\n}`,
    solution: `.gem-card {
  background: #0f172a;
  color: white;
  padding: 30px;
  text-align: center;
  border: 3px solid #38bdf8;
  border-radius: 24px;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);
}`
  },

  htmlContent: `
<div class="container">
  <div class="gem-card">
    <div class="gem-icon">💎</div>
    <h2>Viên Ngọc Băng Giá</h2>
    <p>Chứa đựng năng lượng ma pháp vô tận của vùng núi tuyết phương Bắc.</p>
  </div>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Thêm border, border-radius và box-shadow cho .gem-card */

.gem-card {
  background: #0f172a;
  color: white;
  padding: 30px;
  text-align: center;
  /* Thêm thuộc tính border, border-radius và box-shadow tại đây: */

}

.gem-icon {
  font-size: 54px;
  margin-bottom: 12px;
  animation: float 2s ease-in-out infinite alternate;
}

h2 {
  color: #38bdf8;
  font-size: 22px;
  margin-bottom: 8px;
}

p {
  color: #94a3b8;
  font-size: 14px;
}

@keyframes float {
  from { transform: translateY(0); }
  to { transform: translateY(-8px); }
}
`,

  solutionCssCode: `.gem-card {
  background: #0f172a;
  color: white;
  padding: 30px;
  text-align: center;
  border: 3px solid #38bdf8;
  border-radius: 24px;
  box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);
}

.gem-icon {
  font-size: 54px;
  margin-bottom: 12px;
  animation: float 2s ease-in-out infinite alternate;
}

h2 {
  color: #38bdf8;
  font-size: 22px;
  margin-bottom: 8px;
}

p {
  color: #94a3b8;
  font-size: 14px;
}

@keyframes float {
  from { transform: translateY(0); }
  to { transform: translateY(-8px); }
}`,

  tests: [
    {
      id: 'card_has_border',
      description: 'Lớp .gem-card có đường viền border (độ dày >= 2px)',
      tester: (doc, win) => {
        const card = doc.querySelector('.gem-card') as HTMLElement;
        if (!card) return false;
        const bWidth = parseFloat(win.getComputedStyle(card).borderTopWidth);
        return bWidth >= 2;
      }
    },
    {
      id: 'card_border_radius',
      description: 'Lớp .gem-card có bo góc border-radius >= 16px',
      tester: (doc, win) => {
        const card = doc.querySelector('.gem-card') as HTMLElement;
        if (!card) return false;
        const bRadius = parseFloat(win.getComputedStyle(card).borderTopLeftRadius);
        return bRadius >= 16;
      }
    },
    {
      id: 'card_box_shadow',
      description: 'Lớp .gem-card có hiệu ứng bóng phát sáng box-shadow',
      tester: (doc, win) => {
        const card = doc.querySelector('.gem-card') as HTMLElement;
        if (!card) return false;
        const shadow = win.getComputedStyle(card).boxShadow;
        return shadow !== 'none' && shadow.length > 5;
      }
    }
  ]
};
