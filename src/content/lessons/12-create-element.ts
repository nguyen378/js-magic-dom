import { Lesson } from '@/types/lesson';

export const lesson12: Lesson = {
  id: '12-create-element',
  title: '12. Vườn Cây Phép Thuật (createElement)',
  shortDescription: 'Tạo mới và gắn phần tử HTML với createElement & appendChild',
  category: 'creation',
  difficulty: 'hard',
  xpReward: 80,
  order: 12,
  
  story: `Bạn đã học cách sửa đổi, ẩn hiện và xóa phần tử. Giờ là đỉnh cao của DOM: **Tự tay tạo ra phần tử hoàn toàn mới!** 🌱

Để sinh ra một phần tử và đưa nó vào trang web, ta trải qua 3 bước:
1. **Tạo phần tử**: \`const hoa = document.createElement("span");\`
2. **Trang trí**: \`hoa.innerText = "🌸"; hoa.className = "flower";\`
3. **Gắn vào cha**: \`vuonCay.appendChild(hoa);\`

Hãy biến khu đất trống thành một vườn hoa rực rỡ nhé!
`,

  taskInstructions: [
    'Tìm khu vườn có id `"garden"` và nút trồng hoa `#plant-btn`.',
    'Thêm sự kiện `click` cho nút `#plant-btn`.',
    'Mỗi lần click: Tạo một thẻ `span`, gán `innerText = "🌸"`, gán `className = "flower"`, rồi dùng `garden.appendChild(flower)` để gắn vào khu vườn.'
  ],

  hints: {
    level1: 'Dùng `document.createElement("span")` rồi gán `flower.innerText = "🌸"` và `flower.className = "flower"`.',
    level2: `plantBtn.addEventListener("click", function() {
  const flower = document.createElement("span");
  flower.innerText = "🌸";
  flower.className = "flower";
  garden.appendChild(flower);
});`,
    solution: `const garden = document.getElementById("garden");
const plantBtn = document.getElementById("plant-btn");

plantBtn.addEventListener("click", function() {
  const flower = document.createElement("span");
  flower.innerText = "🌸";
  flower.className = "flower";
  garden.appendChild(flower);
});`
  },

  htmlContent: `
<div class="garden-box">
  <h2>🌱 Khu Vườn Thần Tiên</h2>
  <p class="garden-subtitle">Bấm nút để trồng thêm hoa vào vườn nhé!</p>
  
  <div id="garden" class="garden-field">
    <!-- Những bông hoa sinh ra bằng JS sẽ xuất hiện ở đây -->
  </div>

  <button id="plant-btn" class="plant-btn">🌸 Gieo Mầm Nở Hoa</button>
</div>`,

  cssContent: `
.garden-box {
  background: #f0fdf4;
  border: 2px dashed #86efac;
  border-radius: 20px;
  padding: 24px;
  text-align: center;
}
h2 {
  color: #15803d;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 4px;
}
.garden-subtitle {
  color: #16a34a;
  font-size: 13px;
  margin-bottom: 20px;
}
.garden-field {
  min-height: 100px;
  background: #ffffff;
  border-radius: 16px;
  border: 2px solid #bbf7d0;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}
.flower {
  font-size: 32px;
  animation: bloom 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: inline-block;
}
@keyframes bloom {
  from { transform: scale(0) rotate(-45deg); opacity: 0; }
  to { transform: scale(1) rotate(0deg); opacity: 1; }
}
.plant-btn {
  background: #16a34a;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(22, 163, 74, 0.3);
  transition: all 0.2s;
}
.plant-btn:hover {
  background: #15803d;
  transform: scale(1.05);
}
.plant-btn:active {
  transform: scale(0.95);
}`,

  initialJsCode: `// Nhiệm vụ: Bấm #plant-btn thì tạo thẻ <span> hoa 🌸 và appendChild vào #garden
const garden = document.getElementById("garden");
const plantBtn = document.getElementById("plant-btn");

plantBtn.addEventListener("click", function() {
  // 1. Tạo thẻ: const flower = document.createElement("span");
  
  // 2. Gán nội dung hoa.innerText = "🌸" và hoa.className = "flower"
  
  // 3. appendChild vào garden
  
});
`,

  solutionJsCode: `const garden = document.getElementById("garden");
const plantBtn = document.getElementById("plant-btn");

plantBtn.addEventListener("click", function() {
  const flower = document.createElement("span");
  flower.innerText = "🌸";
  flower.className = "flower";
  garden.appendChild(flower);
});`,

  tests: [
    {
      id: 'create_and_append',
      description: 'Khi click nút trồng hoa 2 lần, khu vườn #garden phải có 2 bông hoa 🌸',
      tester: async (doc) => {
        const garden = doc.getElementById('garden');
        const btn = doc.getElementById('plant-btn');
        if (!garden || !btn) return false;
        
        btn.click();
        btn.click();
        
        const flowers = garden.querySelectorAll('.flower, span');
        return flowers.length >= 2 && Array.from(flowers).some(f => f.textContent?.includes('🌸'));
      }
    }
  ]
};
