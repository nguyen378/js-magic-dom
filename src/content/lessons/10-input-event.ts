import { Lesson } from '@/types/lesson';

export const lesson10: Lesson = {
  id: '10-input-event',
  title: '10. Thẻ Căn Cước Siêu Anh Hùng',
  shortDescription: 'Lắng nghe sự kiện gõ bàn phím và lấy dữ liệu với input.value',
  category: 'input',
  difficulty: 'medium',
  xpReward: 60,
  order: 10,
  
  story: `Làm sao để khi người dùng gõ phím vào ô nhập liệu (\`<input>\`), trang web lập tức cập nhật thông tin hiển thị ngay tức thì? ⌨️

Bí quyết nằm ở sự kiện **\`input\`** và thuộc tính **\`value\`**:
* **\`inputElement.value\`**: Đọc đoạn chữ hiện tại mà người dùng đã gõ trong ô.
* **\`inputElement.addEventListener("input", function() { ... })\`**: Sự kiện sẽ kích hoạt mỗi khi có 1 ký tự được gõ hoặc xóa!

\`\`\`javascript
const oNhap = document.getElementById("ten-input");
const theTen = document.getElementById("the-ten");

oNhap.addEventListener("input", function() {
  theTen.innerText = oNhap.value;
});
\`\`\`

Hãy lập trình chiếc Thẻ Căn Cước Siêu Anh Hùng tự động in tên này nhé!
`,

  taskInstructions: [
    'Tìm ô nhập liệu `#hero-input` và thẻ hiển thị tên `#badge-name`.',
    'Thêm sự kiện `"input"` cho `#hero-input`.',
    'Trong hàm xử lý sự kiện: Gán `badgeName.innerText = heroInput.value || "Ẩn Danh";` để tên hiển thị đổi theo những gì người dùng gõ.'
  ],

  hints: {
    level1: 'Dùng `heroInput.addEventListener("input", function() { ... })`.',
    level2: `heroInput.addEventListener("input", function() {
  badgeName.innerText = heroInput.value || "Ẩn Danh";
});`,
    solution: `const heroInput = document.getElementById("hero-input");
const badgeName = document.getElementById("badge-name");

heroInput.addEventListener("input", function() {
  badgeName.innerText = heroInput.value || "Ẩn Danh";
});`
  },

  htmlContent: `
<div class="id-wrapper">
  <!-- Thẻ Căn Cước -->
  <div class="id-card">
    <div class="id-header">
      <span>🛡️ AVENGERS ACADEMY</span>
      <span class="id-chip">💳 CHIP VIP</span>
    </div>
    <div class="id-body">
      <div class="id-avatar">⚡</div>
      <div class="id-info">
        <div class="id-label">BÍ DANH ĐẶC VỤ:</div>
        <div id="badge-name" class="id-name">Ẩn Danh</div>
        <div class="id-rank">CẤP ĐỘ: S-CLASS</div>
      </div>
    </div>
  </div>

  <!-- Ô Nhập Liệu -->
  <div class="input-box">
    <label for="hero-input">Gõ bí danh siêu anh hùng của bạn:</label>
    <input type="text" id="hero-input" placeholder="Ví dụ: Người Sắt, Thor..." />
  </div>
</div>`,

  cssContent: `
.id-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.id-card {
  width: 100%;
  max-width: 320px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border: 2px solid #38bdf8;
  border-radius: 18px;
  padding: 18px;
  color: white;
  box-shadow: 0 10px 25px -5px rgba(56, 189, 248, 0.3);
}
.id-header {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  font-weight: 800;
  color: #38bdf8;
  border-bottom: 1px solid #334155;
  padding-bottom: 8px;
  margin-bottom: 14px;
}
.id-body {
  display: flex;
  gap: 14px;
  align-items: center;
}
.id-avatar {
  font-size: 32px;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: #1e293b;
  border: 2px dashed #38bdf8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.id-label {
  font-size: 9px;
  color: #94a3b8;
  font-weight: bold;
}
.id-name {
  font-size: 18px;
  font-weight: 900;
  color: #facc15;
  min-height: 26px;
  text-shadow: 0 0 10px rgba(250, 204, 21, 0.4);
}
.id-rank {
  font-size: 10px;
  color: #4ade80;
  font-weight: bold;
  margin-top: 2px;
}
.input-box {
  width: 100%;
  max-width: 320px;
  text-align: left;
}
.input-box label {
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: #475569;
  margin-bottom: 6px;
}
.input-box input {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 10px;
  border: 2px solid #cbd5e1;
  background: white;
  outline: none;
  transition: border-color 0.2s;
}
.input-box input:focus {
  border-color: #0284c7;
}`,

  initialJsCode: `// Nhiệm vụ: Lắng nghe sự kiện "input" trên #hero-input và gán giá trị vào #badge-name!
const heroInput = document.getElementById("hero-input");
const badgeName = document.getElementById("badge-name");

// Thêm sự kiện "input" cho heroInput tại đây:

`,

  solutionJsCode: `const heroInput = document.getElementById("hero-input");
const badgeName = document.getElementById("badge-name");

heroInput.addEventListener("input", function() {
  badgeName.innerText = heroInput.value || "Ẩn Danh";
});`,

  tests: [
    {
      id: 'input_updates_name',
      description: 'Khi gõ "Người Nhện" vào #hero-input, thẻ #badge-name phải cập nhật thành "Người Nhện"',
      tester: async (doc) => {
        const input = doc.getElementById('hero-input') as HTMLInputElement;
        const badge = doc.getElementById('badge-name');
        if (!input || !badge) return false;
        
        // Simulate typing
        input.value = 'Người Nhện';
        input.dispatchEvent(new Event('input'));
        
        return badge.innerText.trim() === 'Người Nhện';
      }
    }
  ]
};
