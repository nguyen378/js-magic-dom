import { Lesson } from '@/types/lesson';

export const lessonF05: Lesson = {
  id: 'f05-functions',
  title: 'F05. Cuộn Giấy Thần Chú (Hàm Function)',
  shortDescription: 'Tạo và tái sử dụng các khối lệnh với hàm, tham số và từ khóa return',
  category: 'function',
  track: 'foundation',
  difficulty: 'easy',
  xpReward: 65,
  order: 5,

  story: `Hãy tưởng tượng **Hàm (Function)** giống như một cuộn giấy thần chú đã được ghi sẵn các bước niệm phép. Mỗi khi cần thực hiện, bạn chỉ việc gọi tên cuộn giấy thay vì phải viết lại từng dòng từ đầu! 📜✨

Trong JavaScript:
* **Khai báo hàm**: Dùng từ khóa \`function\` cùng tên hàm.
* **Tham số (Parameters)**: Biến số nhận dữ liệu đầu vào.
* **Giá trị trả về (\`return\`)**: Kết quả phép thuật sau khi tính toán xong.

\`\`\`javascript
function calculateDamage(basePower, bonus) {
  return basePower + bonus;
}

const total = calculateDamage(50, 20); // total = 70
\`\`\`
`,

  taskInstructions: [
    'Tạo hàm `function createPotion(name, healAmount)` nhận 2 tham số.',
    'Bên trong hàm, trả về chuỗi kết quả: `return "Đã pha chế " + name + " hồi phục " + healAmount + " HP!";` (hoặc dùng template string).',
    'Gọi hàm với tham số: `const potion = createPotion("Thuốc Tiên", 100);`.',
    'In kết quả `potion` ra console bằng `console.log(potion)`.'
  ],

  hints: {
    level1: 'Sử dụng cú pháp `function createPotion(name, healAmount) { return ... }`.',
    level2: `function createPotion(name, healAmount) {
  return \`Đã pha chế \${name} hồi phục \${healAmount} HP!\`;
}
const potion = createPotion("Thuốc Tiên", 100);
console.log(potion);`,
    solution: `function createPotion(name, healAmount) {
  return "Đã pha chế " + name + " hồi phục " + healAmount + " HP!";
}

const potion = createPotion("Thuốc Tiên", 100);
console.log(potion);`
  },

  htmlContent: `
<div class="alchemist-lab">
  <div class="lab-badge">⚗️ PHÒNG THÍ NGHIỆM GIẢ KIM</div>
  <div class="potion-display">
    <div class="potion-bottle">🧪</div>
    <div id="potion-info" class="potion-info">Chưa có bình thuốc nào được chế tạo...</div>
  </div>
  <p class="lab-tip">Kết quả gọi hàm của bạn sẽ hiển thị tại Console bên dưới!</p>
</div>`,

  cssContent: `
.alchemist-lab {
  background: linear-gradient(135deg, #064e3b 0%, #022c22 100%);
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #10b981;
  box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.3);
}
.lab-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  color: #6ee7b7;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid #10b981;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
}
.potion-display {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.potion-bottle {
  font-size: 48px;
  filter: drop-shadow(0 0 10px rgba(52, 211, 153, 0.6));
}
.potion-info {
  font-size: 14px;
  font-weight: 700;
  color: #a7f3d0;
}
.lab-tip {
  font-size: 12px;
  color: #94a3b8;
}`,

  initialJsCode: `// Nhiệm vụ: Tạo hàm createPotion(name, healAmount), gọi hàm và in ra console!

// Bước 1: Khai báo hàm createPotion có 2 tham số name và healAmount


// Bước 2: Gọi hàm với ("Thuốc Tiên", 100) và gán vào biến potion


// Bước 3: In biến potion ra console

`,

  solutionJsCode: `function createPotion(name, healAmount) {
  return "Đã pha chế " + name + " hồi phục " + healAmount + " HP!";
}

const potion = createPotion("Thuốc Tiên", 100);
console.log(potion);`,

  tests: [
    {
      id: 'function_created_and_executed',
      description: 'Lệnh console.log đã in đúng kết quả chế tạo Thuốc Tiên hồi phục 100 HP',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => {
            const str = String(arg).toLowerCase();
            return str.includes('thuốc tiên') && str.includes('100');
          })
        );
      }
    }
  ]
};
