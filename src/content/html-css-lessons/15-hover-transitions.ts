import { Lesson } from '@/types/lesson';

export const lessonHtml15: Lesson = {
  id: 'css08-hover-transitions',
  title: 'C08. Hiệu Ứng Di Chuột (:hover, transition)',
  shortDescription: 'Tạo hiệu ứng chuyển động mượt mà khi rê chuột bằng pseudo-class :hover và transform',
  category: 'css-effects',
  course: 'html-css',
  track: 'css-layout',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 60,
  order: 15,

  story: `Trang web sẽ trở nên vô cùng cuốn hút khi các nút bấm và thẻ bài "phản hồi" lại cử chỉ của người dùng!

CSS cung cấp các công cụ tạo hiệu ứng tương tác cực mạnh:
1. **Pseudo-class \`:hover\`**: Kích hoạt bộ kiểu dáng khi người dùng di chuột lên phần tử.
2. **\`transition\`**: Tạo độ trễ và chuyển động êm ái (thay vì đổi đột ngột).
   - Ví dụ: \`transition: all 0.3s ease;\` (chuyển động êm trong 0.3 giây).
3. **\`transform\`**: Biến đổi hình học phần tử:
   - \`transform: translateY(-8px);\` (nhấc thẻ bay lên trên 8px).
   - \`transform: scale(1.08);\` (phóng to thẻ 1.08 lần).
`,

  taskInstructions: [
    'Trong lớp `.action-btn`, thêm thuộc tính `transition: all 0.3s ease;`.',
    'Tạo một selector `.action-btn:hover` khi di chuột.',
    'Bên trong `.action-btn:hover`, thiết lập `transform: translateY(-4px);` và `background-color: #4338ca;`.'
  ],

  hints: {
    level1: 'Thêm transition vào .action-btn, sau đó tạo khối .action-btn:hover với transform và background-color.',
    level2: `.action-btn {\n  transition: all 0.3s ease;\n}\n.action-btn:hover {\n  transform: translateY(-4px);\n  background-color: #4338ca;\n}`,
    solution: `.action-btn {
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-4px);
  background-color: #4338ca;
}`
  },

  htmlContent: `
<div class="interactive-stage">
  <div class="card-box">
    <div class="sparkle">✨</div>
    <h2>Thần Chú Chuyển Động</h2>
    <p>Hãy rê chuột vào nút bên dưới để xem hiệu ứng kỳ diệu!</p>
    <button class="action-btn">Kích Hoạt Phép Thuật</button>
  </div>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Thêm hiệu ứng transition và :hover cho .action-btn */

.interactive-stage {
  background: #0f172a;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
}

.sparkle { font-size: 40px; margin-bottom: 8px; }
h2 { color: #38bdf8; margin-bottom: 8px; font-size: 20px; }
p { color: #94a3b8; font-size: 13px; margin-bottom: 20px; }

.action-btn {
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  /* Thêm transition tại đây: */

}

/* Viết bộ chọn .action-btn:hover tại đây: */

`,

  solutionCssCode: `.interactive-stage {
  background: #0f172a;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
}

.sparkle { font-size: 40px; margin-bottom: 8px; }
h2 { color: #38bdf8; margin-bottom: 8px; font-size: 20px; }
p { color: #94a3b8; font-size: 13px; margin-bottom: 20px; }

.action-btn {
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-4px);
  background-color: #4338ca;
}`,

  tests: [
    {
      id: 'has_transition',
      description: 'Nút .action-btn có thuộc tính transition chuyển động',
      tester: (doc, win) => {
        const btn = doc.querySelector('.action-btn') as HTMLElement;
        if (!btn) return false;
        const trans = win.getComputedStyle(btn).transitionDuration;
        return trans !== '0s' && Boolean(trans);
      }
    },
    {
      id: 'hover_rules_exist',
      description: 'Quy tắc :hover cho nút .action-btn được khai báo đầy đủ',
      tester: (doc) => {
        // Check stylesheets for :hover rule
        const sheets = doc.styleSheets;
        for (let i = 0; i < sheets.length; i++) {
          try {
            const rules = sheets[i].cssRules;
            for (let j = 0; j < rules.length; j++) {
              if (rules[j].cssText.includes(':hover') && rules[j].cssText.includes('action-btn')) {
                return true;
              }
            }
          } catch {
            // Ignore cross-origin stylesheet errors
          }
        }
        return true;
      }
    }
  ]
};
