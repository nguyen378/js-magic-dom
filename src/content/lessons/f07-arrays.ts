import { Lesson } from '@/types/lesson';

export const lessonF07: Lesson = {
  id: 'f07-arrays',
  title: 'F07. Balo Thần Kỳ (Mảng - Array)',
  shortDescription: 'Tập hợp danh sách vật phẩm với mảng Array, push(), length và chỉ số index',
  category: 'array',
  track: 'foundation',
  difficulty: 'medium',
  xpReward: 70,
  order: 7,
  
  story: `Khi dũng sĩ lên đường phiêu lưu, bạn cần một chiếc Balo ma thuật để chứa nhiều vật phẩm cùng lúc. 🎒

Trong JavaScript, danh sách các món đồ được lưu trữ trong **Mảng (Array)** được bao bọc bởi cặp ngoặc vuông **\`[ ... ]\`**:

1. **Chỉ số vị trí (Index - Bắt đầu từ số 0)**:
   * Món đồ đầu tiên nằm ở vị trí \`[0]\`.
   * Món đồ thứ hai nằm ở vị trí \`[1]\`.
2. **\`mảng.length\`**: Cho biết trong balo đang có tổng cộng bao nhiêu món đồ.
3. **\`mảng.push(vật_phẩm)\`**: Nhặt thêm một món đồ mới bỏ vào balo!

\`\`\`javascript
const inventory = ["🗡️ Kiếm Sắt", "🛡️ Khiên Gỗ"];

// Nhặt thêm bình thuốc đỏ
inventory.push("🧪 Thuốc Đỏ");

console.log(inventory[0]);      // "🗡️ Kiếm Sắt"
console.log(inventory.length);  // 3
\`\`\`
`,

  taskInstructions: [
    'Khai báo mảng `const inventory = ["🗡️ Kiếm Sắt", "🛡️ Khiên Gỗ"];`.',
    'Dùng lệnh `inventory.push("🧪 Thuốc Đỏ");` để nhặt thêm bình thuốc vào balo.',
    'Dùng `console.log(inventory[0])` để in món đồ đầu tiên ra Console.',
    'Dùng `console.log(inventory.length)` để in tổng số lượng món đồ trong balo (kết quả là 3).'
  ],

  hints: {
    level1: 'Món đầu tiên là `inventory[0]`, và nhặt thêm bằng `inventory.push("🧪 Thuốc Đỏ")`.',
    level2: `const inventory = ["🗡️ Kiếm Sắt", "🛡️ Khiên Gỗ"];
inventory.push("🧪 Thuốc Đỏ");

console.log(inventory[0]);
console.log(inventory.length);`,
    solution: `const inventory = ["🗡️ Kiếm Sắt", "🛡️ Khiên Gỗ"];
inventory.push("🧪 Thuốc Đỏ");

console.log(inventory[0]);
console.log(inventory.length);`
  },

  htmlContent: `
<div class="backpack-card">
  <div class="backpack-header">
    <span>🎒 BALO NHÀ THÁM HIỂM</span>
    <span class="slots-badge">3 / 8 Ô ĐỒ</span>
  </div>
  <div class="inventory-grid">
    <div class="slot slot-filled">
      <span class="slot-idx">#0</span>
      <span class="item-icon">🗡️</span>
      <span class="item-name">Kiếm Sắt</span>
    </div>
    <div class="slot slot-filled">
      <span class="slot-idx">#1</span>
      <span class="item-icon">🛡️</span>
      <span class="item-name">Khiên Gỗ</span>
    </div>
    <div class="slot slot-filled slot-new">
      <span class="slot-idx">#2</span>
      <span class="item-icon">🧪</span>
      <span class="item-name">Thuốc Đỏ</span>
    </div>
    <div class="slot slot-empty">
      <span class="slot-idx">#3</span>
      <span class="empty-text">Trống</span>
    </div>
  </div>
</div>`,

  cssContent: `
.backpack-card {
  background: linear-gradient(135deg, #2e1065 0%, #172554 100%);
  border: 2px solid #a855f7;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.3);
}
.backpack-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 800;
  color: #e9d5ff;
  letter-spacing: 1px;
  margin-bottom: 18px;
}
.slots-badge {
  background: rgba(168, 85, 247, 0.3);
  border: 1px solid #a855f7;
  padding: 3px 8px;
  border-radius: 6px;
  color: #f5d0fe;
}
.inventory-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.slot {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.slot-idx {
  position: absolute;
  top: 4px;
  left: 6px;
  font-size: 8px;
  color: #a1a1aa;
  font-weight: bold;
}
.item-icon {
  font-size: 24px;
  margin: 4px 0 2px;
}
.item-name {
  font-size: 9px;
  font-weight: bold;
  color: #cbd5e1;
}
.slot-new {
  border-color: #38bdf8;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
}
.slot-empty {
  border-style: dashed;
  opacity: 0.4;
  justify-content: center;
}
.empty-text {
  font-size: 10px;
  color: #94a3b8;
  margin-top: 14px;
}`,

  initialJsCode: `// Nhiệm vụ: Khai báo mảng inventory, push thêm "🧪 Thuốc Đỏ" và in ra console!

// Bước 1: Khai báo const inventory = ["🗡️ Kiếm Sắt", "🛡️ Khiên Gỗ"];


// Bước 2: Dùng inventory.push("🧪 Thuốc Đỏ");


// Bước 3: In món đầu tiên inventory[0] và độ dài inventory.length ra console

`,

  solutionJsCode: `const inventory = ["🗡️ Kiếm Sắt", "🛡️ Khiên Gỗ"];
inventory.push("🧪 Thuốc Đỏ");

console.log(inventory[0]);
console.log(inventory.length);`,

  tests: [
    {
      id: 'logged_first_item',
      description: 'Lệnh console.log đã in đúng món đồ đầu tiên inventory[0] ("Kiếm Sắt")',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => String(arg).includes('Kiếm Sắt'))
        );
      }
    },
    {
      id: 'logged_array_length',
      description: 'Lệnh console.log đã in đúng độ dài của mảng là 3',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) => 
          l.args && l.args.some((arg) => Number(arg) === 3 || String(arg).includes('3'))
        );
      }
    }
  ]
};
