import { Lesson } from '@/types/lesson';

export const lesson02: Lesson = {
  id: '02-change-text',
  title: '02. Phù Phép Câu Chữ',
  shortDescription: 'Thay đổi nội dung văn bản với innerText và textContent',
  category: 'text',
  difficulty: 'easy',
  xpReward: 50,
  order: 2,
  
  story: `Bạn đã biết cách tìm phần tử! Giờ là lúc phù phép thay đổi nội dung chữ trên màn hình. 🪄

Mỗi phần tử văn bản trong HTML đều có thuộc tính **\`innerText\`** (hoặc **\`textContent\`**). 
Chúng ta có thể đọc hoặc gán nội dung mới cho nó rất dễ dàng:

\`\`\`javascript
const tieuDe = document.getElementById("ten-id");
tieuDe.innerText = "Nội dung chữ mới!";
\`\`\`
`,

  taskInstructions: [
    'Tìm chiếc rương bí mật có id là `"chest-message"`.',
    'Thay đổi `innerText` của nó thành `"Vừng ơi mở ra!"` để mở khóa rương báu.'
  ],

  hints: {
    level1: 'Dùng `document.getElementById("chest-message")` để chọn chiếc rương.',
    level2: 'Gán nội dung: `chest.innerText = "Vừng ơi mở ra!";`',
    solution: `const chest = document.getElementById("chest-message");\nchest.innerText = "Vừng ơi mở ra!";`
  },

  htmlContent: `
<div class="chest-card">
  <div class="chest-icon">📦</div>
  <h2>Chiếc Rương Khóa Chặt</h2>
  <div id="chest-message" class="message-box">Đang bị khóa... Cần câu thần chú!</div>
</div>`,

  cssContent: `
.chest-card {
  background: #ffffff;
  border: 3px dashed #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.chest-icon {
  font-size: 64px;
  margin-bottom: 8px;
}
h2 {
  color: #334155;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}
.message-box {
  background: #f1f5f9;
  color: #64748b;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 10px;
  display: inline-block;
  font-size: 16px;
  border: 1px solid #cbd5e1;
  transition: all 0.3s;
}`,

  initialJsCode: `// Nhiệm vụ: Đổi dòng chữ trong chiếc rương thành "Vừng ơi mở ra!"
const chest = document.getElementById("chest-message");

// Viết lệnh thay đổi innerText dưới đây:

`,

  solutionJsCode: `const chest = document.getElementById("chest-message");
chest.innerText = "Vừng ơi mở ra!";`,

  tests: [
    {
      id: 'find_chest',
      description: 'Phần tử #chest-message tồn tại trong DOM',
      tester: (doc) => {
        const el = doc.getElementById('chest-message');
        return el !== null;
      }
    },
    {
      id: 'text_changed',
      description: 'Nội dung của phần tử id "chest-message" phải là "Vừng ơi mở ra!"',
      tester: (doc) => {
        const el = doc.getElementById('chest-message');
        if (!el) return false;
        return el.innerText.trim() === 'Vừng ơi mở ra!';
      }
    }
  ]
};
