import { Lesson } from '@/types/lesson';

export const lesson03: Lesson = {
  id: '03-change-style',
  title: '03. Hộp Quà Sắc Màu',
  shortDescription: 'Thay đổi màu sắc và giao diện qua thuộc tính .style',
  category: 'style',
  difficulty: 'easy',
  xpReward: 50,
  order: 3,
  
  story: `Bạn có thể biến hóa màu sắc của bất kỳ phần tử nào bằng JavaScript thông qua thuộc tính **\`.style\`**! 🎨

Trong CSS, ta viết \`background-color\`. Nhưng trong JavaScript, ta viết theo kiểu **camelCase**:
* \`element.style.backgroundColor = "gold";\`
* \`element.style.color = "crimson";\`
* \`element.style.borderRadius = "20px";\`

Hãy thử tài làm nhà thiết kế giao diện bằng cách tô điểm cho hộp quà bí mật nhé!
`,

  taskInstructions: [
    'Tìm hộp quà có id là `"gift-box"`.',
    'Đổi màu nền (`backgroundColor`) của hộp quà thành màu `"gold"`.',
    'Đổi màu chữ (`color`) của hộp quà thành màu `"crimson"`.'
  ],

  hints: {
    level1: 'Sử dụng `giftBox.style.backgroundColor` và `giftBox.style.color`.',
    level2: `const giftBox = document.getElementById("gift-box");\ngiftBox.style.backgroundColor = "gold";\ngiftBox.style.color = "crimson";`,
    solution: `const giftBox = document.getElementById("gift-box");\ngiftBox.style.backgroundColor = "gold";\ngiftBox.style.color = "crimson";`
  },

  htmlContent: `
<div class="gift-container">
  <div id="gift-box" class="gift-box">
    <div class="gift-emoji">🎁</div>
    <div class="gift-text">Hộp quà ma thuật</div>
  </div>
</div>`,

  cssContent: `
.gift-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
.gift-box {
  background-color: #334155;
  color: #ffffff;
  padding: 30px 40px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.5s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.gift-emoji {
  font-size: 56px;
  margin-bottom: 8px;
}
.gift-text {
  font-weight: 700;
  font-size: 18px;
}`,

  initialJsCode: `// Nhiệm vụ: Đổi màu nền thành "gold" và màu chữ thành "crimson"
const giftBox = document.getElementById("gift-box");

// 1. Đổi màu nền (backgroundColor) thành "gold"


// 2. Đổi màu chữ (color) thành "crimson"

`,

  solutionJsCode: `const giftBox = document.getElementById("gift-box");
giftBox.style.backgroundColor = "gold";
giftBox.style.color = "crimson";`,

  tests: [
    {
      id: 'find_gift_box',
      description: 'Phần tử #gift-box tồn tại trong DOM',
      tester: (doc) => {
        const el = doc.getElementById('gift-box');
        return el !== null;
      }
    },
    {
      id: 'bg_color_gold',
      description: 'Màu nền của #gift-box phải đổi thành gold',
      tester: (doc) => {
        const el = doc.getElementById('gift-box');
        if (!el) return false;
        const bg = el.style.backgroundColor.toLowerCase();
        // Browser converts "gold" to rgb(255, 215, 0) or "gold"
        return bg === 'gold' || bg === 'rgb(255, 215, 0)';
      }
    },
    {
      id: 'color_crimson',
      description: 'Màu chữ của #gift-box phải đổi thành crimson',
      tester: (doc) => {
        const el = doc.getElementById('gift-box');
        if (!el) return false;
        const color = el.style.color.toLowerCase();
        return color === 'crimson' || color === 'rgb(220, 20, 60)';
      }
    }
  ]
};
