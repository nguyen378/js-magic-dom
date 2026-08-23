import { Lesson } from '@/types/lesson';

export const lesson06: Lesson = {
  id: '06-click-event',
  title: '06. Nút Bấm Thần Kỳ',
  shortDescription: 'Lắng nghe tương tác người dùng với addEventListener click',
  category: 'event',
  difficulty: 'medium',
  xpReward: 60,
  order: 6,
  
  story: `Trang web sẽ rất nhàm chán nếu người dùng bấm vào nút mà không có gì xảy ra! 🚀

Để lắng nghe hành động của người dùng (như click chuột), ta dùng hàm **\`addEventListener\`**:

\`\`\`javascript
const nutBam = document.getElementById("ten-id-nut");

nutBam.addEventListener("click", function() {
  // Hành động xảy ra khi người dùng click vào nút!
  alert("Bạn vừa bấm nút!");
});
\`\`\`
`,

  taskInstructions: [
    'Tìm nút bấm có id `"btn-jump"` và chú ếch có id `"frog"`.',
    'Thêm sự kiện click vào nút `"btn-jump"`.',
    'Khi click, hãy đổi nội dung chữ (`innerText`) của chú ếch `#frog` thành `"🚀 Bay lên mặt trăng!"`.'
  ],

  hints: {
    level1: 'Dùng `btnJump.addEventListener("click", function() { ... })`.',
    level2: `btnJump.addEventListener("click", function() {\n  frog.innerText = "🚀 Bay lên mặt trăng!";\n});`,
    solution: `const btnJump = document.getElementById("btn-jump");\nconst frog = document.getElementById("frog");\n\nbtnJump.addEventListener("click", function() {\n  frog.innerText = "🚀 Bay lên mặt trăng!";\n});`
  },

  htmlContent: `
<div class="interactive-stage">
  <div id="frog" class="character">🐸 Ếch Nhỏ</div>
  <button id="btn-jump" class="btn">🚀 Bấm Để Phóng Đi!</button>
</div>`,

  cssContent: `
.interactive-stage {
  text-align: center;
  padding: 30px;
  background: #f0fdf4;
  border-radius: 16px;
  border: 2px solid #bbf7d0;
}
.character {
  font-size: 28px;
  font-weight: 700;
  color: #166534;
  margin-bottom: 24px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn {
  background: #22c55e;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(34, 197, 94, 0.4);
  transition: transform 0.1s, background-color 0.2s;
}
.btn:hover {
  background: #16a34a;
  transform: translateY(-2px);
}
.btn:active {
  transform: translateY(1px);
}`,

  initialJsCode: `// Nhiệm vụ: Bấm nút #btn-jump thì #frog đổi chữ thành "🚀 Bay lên mặt trăng!"
const btnJump = document.getElementById("btn-jump");
const frog = document.getElementById("frog");

// Viết addEventListener cho btnJump tại đây:

`,

  solutionJsCode: `const btnJump = document.getElementById("btn-jump");
const frog = document.getElementById("frog");

btnJump.addEventListener("click", function() {
  frog.innerText = "🚀 Bay lên mặt trăng!";
});`,

  tests: [
    {
      id: 'click_changes_text',
      description: 'Khi click vào #btn-jump, #frog phải đổi nội dung thành "🚀 Bay lên mặt trăng!"',
      tester: async (doc) => {
        const btn = doc.getElementById('btn-jump');
        const frog = doc.getElementById('frog');
        if (!btn || !frog) return false;
        
        // Simulate click
        btn.click();
        
        return frog.innerText.trim() === '🚀 Bay lên mặt trăng!';
      }
    }
  ]
};
