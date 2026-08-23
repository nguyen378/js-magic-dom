import { Lesson } from '@/types/lesson';

export const lesson14: Lesson = {
  id: '14-mini-game',
  title: '14. Đồ Án: Game Đoán Số Bí Mật',
  shortDescription: 'Kết hợp toàn bộ kiến thức DOM xây dựng game hoàn chỉnh',
  category: 'capstone',
  difficulty: 'hard',
  xpReward: 100,
  order: 14,
  
  story: `Chào mừng bạn đến với thử thách Đồ Án Game Đoán Số! 👑

Nhiệm vụ: Hãy hoàn thiện game **"Đoán Số Bí Mật (1 đến 20)"**!

Trong game này:
1. Máy tính đã chọn sẵn số bí mật: \`const secretNumber = 7;\`
2. Khi người chơi nhập số vào ô \`#guess-input\` và bấm \`#check-btn\`:
   - Lấy giá trị số nhập vào: \`const guess = Number(document.getElementById("guess-input").value);\`
   - So sánh:
     - Nếu \`guess === secretNumber\`: Đổi \`#message\` thành \`"🎉 Chính xác! Bạn đã thắng!"\` và đổi nền \`#game-container\` thành \`"#22c55e"\`.
     - Nếu \`guess > secretNumber\`: Đổi \`#message\` thành \`"📈 Quá cao rồi!"\`.
     - Nếu \`guess < secretNumber\`: Đổi \`#message\` thành \`"📉 Quá thấp rồi!"\`.
`,

  taskInstructions: [
    'Lấy giá trị từ ô `#guess-input` và chuyển sang số bằng `Number(...)`.',
    'So sánh với biến `secretNumber`.',
    'Cập nhật thông báo tương ứng vào `#message` ("🎉 Chính xác! Bạn đã thắng!", "📈 Quá cao rồi!", "📉 Quá thấp rồi!").'
  ],

  hints: {
    level1: 'Dùng cấu trúc `if (guess === secretNumber) { ... } else if (guess > secretNumber) { ... } else { ... }`.',
    level2: `const guess = Number(guessInput.value);
if (guess === secretNumber) {
  message.innerText = "🎉 Chính xác! Bạn đã thắng!";
  gameContainer.style.backgroundColor = "#22c55e";
} else if (guess > secretNumber) {
  message.innerText = "📈 Quá cao rồi!";
} else {
  message.innerText = "📉 Quá thấp rồi!";
}`,
    solution: `const secretNumber = 7;
const checkBtn = document.getElementById("check-btn");
const guessInput = document.getElementById("guess-input");
const message = document.getElementById("message");
const gameContainer = document.getElementById("game-container");

checkBtn.addEventListener("click", function() {
  const guess = Number(guessInput.value);
  
  if (guess === secretNumber) {
    message.innerText = "🎉 Chính xác! Bạn đã thắng!";
    gameContainer.style.backgroundColor = "#22c55e";
  } else if (guess > secretNumber) {
    message.innerText = "📈 Quá cao rồi!";
  } else {
    message.innerText = "📉 Quá thấp rồi!";
  }
});`
  },

  htmlContent: `
<div id="game-container" class="game-box">
  <h2>🎯 Đoán Số Bí Mật (1 - 20)</h2>
  <p id="message" class="hint-text">Hãy nhập một số và bấm Kiểm Tra!</p>
  
  <div class="input-group">
    <input type="number" id="guess-input" min="1" max="20" placeholder="Số của bạn" />
    <button id="check-btn" class="btn-check">Kiểm Tra</button>
  </div>
</div>`,

  cssContent: `
.game-box {
  background: #1e293b;
  color: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  transition: background-color 0.5s ease;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
}
h2 {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 12px;
}
.hint-text {
  font-size: 16px;
  color: #94a3b8;
  margin-bottom: 24px;
  min-height: 24px;
  font-weight: 600;
}
.input-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}
input {
  width: 130px;
  padding: 10px 14px;
  font-size: 18px;
  border-radius: 10px;
  border: 2px solid #475569;
  background: #0f172a;
  color: white;
  text-align: center;
  outline: none;
}
input:focus {
  border-color: #38bdf8;
}
.btn-check {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-check:hover {
  background: #0ea5e9;
  transform: translateY(-2px);
}`,

  initialJsCode: `const secretNumber = 7;
const checkBtn = document.getElementById("check-btn");
const guessInput = document.getElementById("guess-input");
const message = document.getElementById("message");
const gameContainer = document.getElementById("game-container");

checkBtn.addEventListener("click", function() {
  const guess = Number(guessInput.value);
  
  // Viết logic so sánh if / else if / else tại đây:
  
});
`,

  solutionJsCode: `const secretNumber = 7;
const checkBtn = document.getElementById("check-btn");
const guessInput = document.getElementById("guess-input");
const message = document.getElementById("message");
const gameContainer = document.getElementById("game-container");

checkBtn.addEventListener("click", function() {
  const guess = Number(guessInput.value);
  
  if (guess === secretNumber) {
    message.innerText = "🎉 Chính xác! Bạn đã thắng!";
    gameContainer.style.backgroundColor = "#22c55e";
  } else if (guess > secretNumber) {
    message.innerText = "📈 Quá cao rồi!";
  } else {
    message.innerText = "📉 Quá thấp rồi!";
  }
});`,

  tests: [
    {
      id: 'test_low_guess',
      description: 'Khi đoán số 3 (thấp hơn 7), thông báo phải chứa "thấp"',
      tester: async (doc) => {
        const input = doc.getElementById('guess-input') as HTMLInputElement;
        const btn = doc.getElementById('check-btn');
        const msg = doc.getElementById('message');
        if (!input || !btn || !msg) return false;
        
        input.value = '3';
        btn.click();
        return msg.innerText.toLowerCase().includes('thấp');
      }
    },
    {
      id: 'test_high_guess',
      description: 'Khi đoán số 15 (cao hơn 7), thông báo phải chứa "cao"',
      tester: async (doc) => {
        const input = doc.getElementById('guess-input') as HTMLInputElement;
        const btn = doc.getElementById('check-btn');
        const msg = doc.getElementById('message');
        if (!input || !btn || !msg) return false;
        
        input.value = '15';
        btn.click();
        return msg.innerText.toLowerCase().includes('cao');
      }
    },
    {
      id: 'test_exact_guess',
      description: 'Khi đoán đúng số 7, thông báo phải là chiến thắng và nền đổi sang màu xanh',
      tester: async (doc) => {
        const input = doc.getElementById('guess-input') as HTMLInputElement;
        const btn = doc.getElementById('check-btn');
        const msg = doc.getElementById('message');
        const container = doc.getElementById('game-container');
        if (!input || !btn || !msg || !container) return false;
        
        input.value = '7';
        btn.click();
        return msg.innerText.toLowerCase().includes('thắng') || msg.innerText.includes('Chính xác');
      }
    }
  ]
};
