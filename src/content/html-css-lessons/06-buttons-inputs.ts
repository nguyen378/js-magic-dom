import { Lesson } from '@/types/lesson';

export const lessonHtml06: Lesson = {
  id: 'html06-buttons-inputs',
  title: 'H06. Nút Bấm & Nhập Liệu (button, input)',
  shortDescription: 'Tạo nút bấm tương tác và ô nhập dữ liệu văn bản với placeholder',
  category: 'html-form',
  course: 'html-css',
  track: 'html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 50,
  order: 6,

  story: `Một trang web thực tế luôn cần người dùng nhập thông tin và nhấn nút!

1. **\`<button>...</button>\`**: Thẻ tạo nút bấm.
2. **\`<input>\`**: Thẻ tự đóng tạo ô nhập liệu.
   - Thuộc tính \`type="text"\`: Ô nhập chữ thông thường.
   - Thuộc tính \`placeholder="..."\`: Dòng chữ gợi ý mờ mờ khi ô chưa có dữ liệu.

Ví dụ:
\`\`\`html
<input type="text" placeholder="Nhập tên nhân vật..." />
<button>Gia Nhập Vương Quốc</button>
\`\`\`
`,

  taskInstructions: [
    'Tạo một ô nhập liệu `<input>` với `type="text"`.',
    'Thêm thuộc tính `placeholder="Nhập câu thần chú..."` vào thẻ `<input>`.',
    'Tạo một nút bấm `<button>` có nội dung là `"Phóng Phép Thuật ✨"` ngay cạnh ô nhập.'
  ],

  hints: {
    level1: 'Tạo thẻ input tự đóng và thẻ button có nội dung chữ bên trong.',
    level2: `<input type="text" placeholder="Nhập câu thần chú..." />\n<button>Phóng Phép Thuật ✨</button>`,
    solution: `<input type="text" placeholder="Nhập câu thần chú..." />\n<button>Phóng Phép Thuật ✨</button>`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: linear-gradient(135deg, #090d16 0%, #1e1b4b 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 12px;
}
input {
  width: 260px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #4338ca;
  background: #1e1b4b;
  color: white;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
input:focus {
  border-color: #818cf8;
  box-shadow: 0 0 15px rgba(129, 140, 248, 0.4);
}
button {
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
}
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.6);
}
`,

  initialHtmlCode: `<!-- Nhiệm vụ: Tạo thẻ <input> và thẻ <button> theo yêu cầu -->

`,

  solutionHtmlCode: `<input type="text" placeholder="Nhập câu thần chú..." />
<button>Phóng Phép Thuật ✨</button>`,

  tests: [
    {
      id: 'has_input',
      description: 'Có thẻ <input type="text"> với placeholder hợp lệ',
      tester: (doc) => {
        const input = doc.querySelector('input');
        return input !== null && (input.getAttribute('type') === 'text' || !input.getAttribute('type')) && Boolean(input.getAttribute('placeholder'));
      }
    },
    {
      id: 'has_button',
      description: 'Có thẻ <button> với nội dung chứa chữ "Phép Thuật" hoặc "Phóng"',
      tester: (doc) => {
        const btn = doc.querySelector('button');
        return btn !== null && btn.textContent?.toLowerCase().includes('phép thuật') === true;
      }
    }
  ]
};
