import { Lesson } from '@/types/lesson';

export const LESSON_W08: Lesson = {
  id: 'w08-hover-transitions',
  title: 'Tuần 8: Hiệu Ứng Di Chuột Hover & Chuyển Động',
  shortDescription: 'Hoàn thành Giai đoạn 2: Tạo hiệu ứng di chuột :hover tương tác, chuyển động mượt mà với transition và hiệu ứng nảy nhẹ transform: scale.',
  category: 'css-effects',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 120,
  order: 8,
  week: 8,
  durationMinutes: 60,

  story: `Chúc mừng bạn đã đến với **Tuần 8 — Tuần cuối của Giai đoạn CSS Styling**! ✨

Một trang web hiện đại không thể thiếu các hiệu ứng tương tác vui mắt:
- \`:hover\`: Trạng thái khi người dùng rê chuột vào phần tử.
- \`transition: all 0.3s ease\`: Chuyển màu và kích thước một cách mượt mà, không bị giật cục.
- \`transform: scale(1.05)\`: Phóng to nhẹ 5% hoặc \`transform: translateY(-4px)\` để nhấc bổng thẻ lên trên mặt bàn.`,

  taskInstructions: [
    'Thêm `transition: all 0.3s ease` cho thẻ `.skill-card` để chuyển động mượt mà',
    'Thêm hiệu ứng `.skill-card:hover` với `transform: translateY(-6px)` và `box-shadow: 0 15px 30px rgba(99, 102, 241, 0.25)`',
    'Thêm hiệu ứng `.btn-contact:hover` với `background: #4338ca` và `transform: scale(1.05)`'
  ],

  hints: {
    level1: 'Sử dụng transition trên phần tử gốc và viết các thuộc tính mới trong bộ chọn :hover',
    level2: 'Ví dụ:\n.skill-card {\n  transition: all 0.3s ease;\n}\n.skill-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.25);\n}\n.btn-contact:hover {\n  background: #4338ca;\n  transform: scale(1.05);\n}',
    solution: '.skill-card {\n  transition: all 0.3s ease;\n}\n.skill-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.25);\n}\n.btn-contact:hover {\n  background: #4338ca;\n  transform: scale(1.05);\n}'
  },

  htmlContent: `<div class="wrapper">
  <h2>Kỹ Năng Nổi Bật</h2>
  <div class="skill-card">
    <span class="icon">💻</span>
    <h3>Lập Trình Web HTML & CSS</h3>
    <p>Biết dựng khung giao diện và tô màu chuyên nghiệp</p>
  </div>
  <button class="btn-contact">Liên Hệ Với Tôi</button>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  padding: 40px 20px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.wrapper {
  max-width: 360px;
  text-align: center;
}
h2 {
  color: #0f172a;
  margin-bottom: 24px;
}
.skill-card {
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 24px;
  cursor: pointer;
}
.icon {
  font-size: 36px;
  display: block;
  margin-bottom: 8px;
}
.skill-card h3 {
  margin: 0 0 8px;
  color: #4f46e5;
  font-size: 18px;
}
.skill-card p {
  margin: 0;
  color: #64748b;
  font-size: 14px;
}
.btn-contact {
  background: #6366f1;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
}`,

  initialCssCode: `/* Tuần 8: Thêm transition và hiệu ứng :hover cho .skill-card và .btn-contact */
.skill-card {

}

.skill-card:hover {

}

.btn-contact:hover {

}
`,
  solutionCssCode: `.skill-card {
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.25);
}

.btn-contact:hover {
  background: #4338ca;
  transform: scale(1.05);
}
`,

  tests: [
    {
      id: 'w08-t1',
      description: '.skill-card có transition chuyển động',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.skill-card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return style.transitionProperty.length > 0 && style.transitionDuration !== '0s';
      }
    },
    {
      id: 'w08-t2',
      description: 'Quy tắc CSS cho .skill-card:hover có thuộc tính transform hoặc box-shadow',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.skill-card:hover') && (styles.includes('translateY') || styles.includes('box-shadow'));
      }
    },
    {
      id: 'w08-t3',
      description: 'Quy tắc CSS cho .btn-contact:hover có thuộc tính transform: scale hoặc background',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.btn-contact:hover') && (styles.includes('scale') || styles.includes('background'));
      }
    }
  ]
};
