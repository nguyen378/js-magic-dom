import { Lesson } from '@/types/lesson';

export const lessonProj03: Lesson = {
  id: 'proj03-toast-message',
  title: 'P03. Hệ Thống Thông Báo Toast Message',
  shortDescription: 'Tạo hộp thông báo Toast Message tự động xuất hiện và biến mất sau 3 giây (F8 Project)',
  category: 'toast',
  track: 'capstone',
  difficulty: 'medium',
  xpReward: 115,
  order: 3,

  story: `**Toast Message (Thông báo nổi)** là thành phần phản hồi trực quan không thể thiếu khi người dùng thực hiện một hành động (như Lưu thành công, Đăng nhập lỗi, Nhận phần thưởng)! 🍞🔔

Quy trình tạo Toast:
1. Tạo thẻ \`div\` mới bằng \`document.createElement("div")\`.
2. Thêm class \`toast\` và cấu trúc HTML thông báo.
3. Gắn vào khung \`#toast-container\` bằng \`appendChild()\`.
4. Dùng \`setTimeout\` để tự động xóa (\`remove()\`) thông báo sau 3000ms (3 giây).
`,

  taskInstructions: [
    'Tạo hàm `function showToast(message)` nhận nội dung thông báo.',
    'Bên trong hàm, tạo thẻ `div` mới, gán `classList.add("toast")`, và `toast.innerHTML = "<span>✅</span> <span>" + message + "</span>";`.',
    'Gắn thẻ `toast` vào `#toast-container`.',
    'Dùng `setTimeout(function() { toast.remove(); }, 3000);` để tự động biến mất.',
    'Gắn sự kiện `click` cho nút `#btn-notify` để gọi `showToast("Nhận thưởng 500 Kim Cương thành công! 💎");`.'
  ],

  hints: {
    level1: 'Tạo thẻ bằng `document.createElement("div")`, gắn vào `#toast-container` và `setTimeout` để `toast.remove()`.',
    level2: `function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = \`<span>✅</span> <span>\${message}</span>\`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

document.getElementById("btn-notify").addEventListener("click", () => {
  showToast("Nhận thưởng 500 Kim Cương thành công! 💎");
});`,
    solution: `function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "<span>✅</span> <span>" + message + "</span>";
  container.appendChild(toast);

  setTimeout(function() {
    toast.remove();
  }, 3000);
}

document.getElementById("btn-notify").addEventListener("click", function() {
  showToast("Nhận thưởng 500 Kim Cương thành công! 💎");
});`
  },

  htmlContent: `
<div class="toast-preview-box">
  <div class="box-header">
    <h3>🔔 HỆ THỐNG THÔNG BÁO TOAST</h3>
    <p>Bấm nút bên dưới để kích hoạt thông báo nổi:</p>
  </div>

  <button id="btn-notify" class="btn-primary">
    🎁 Nhận Quà Đăng Nhập
  </button>

  <!-- Khung chứa các thông báo Toast bay vào -->
  <div id="toast-container" class="toast-container"></div>
</div>`,

  cssContent: `
.toast-preview-box {
  background: #0f172a;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  position: relative;
  min-height: 220px;
  border: 2px solid #3b82f6;
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
}
.box-header h3 {
  font-size: 15px;
  color: #60a5fa;
  margin-bottom: 4px;
}
.box-header p {
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 20px;
}
.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 800;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
  transition: transform 0.1s;
}
.btn-primary:active {
  transform: scale(0.96);
}
.toast-container {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
}
.toast {
  background: #1e293b;
  border-left: 4px solid #10b981;
  border-radius: 10px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #f8fafc;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  animation: slideIn 0.3s ease;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}`,

  initialJsCode: `// Nhiệm vụ: Xây dựng hàm showToast(message) và gắn sự kiện click cho #btn-notify!

// Bước 1: Khai báo hàm showToast(message)


// Bước 2: Lắng nghe click trên #btn-notify để gọi showToast(...)

`,

  solutionJsCode: `function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "<span>✅</span> <span>" + message + "</span>";
  container.appendChild(toast);

  setTimeout(function() {
    toast.remove();
  }, 3000);
}

document.getElementById("btn-notify").addEventListener("click", function() {
  showToast("Nhận thưởng 500 Kim Cương thành công! 💎");
});`,

  tests: [
    {
      id: 'toast_appears_on_click',
      description: 'Khi click vào #btn-notify, một thẻ .toast mới xuất hiện trong #toast-container',
      tester: async (doc) => {
        const btn = doc.getElementById('btn-notify');
        const container = doc.getElementById('toast-container');
        if (!btn || !container) return false;

        btn.click();
        await new Promise((r) => setTimeout(r, 50));

        const toast = container.querySelector('.toast');
        return toast !== null && toast.textContent!.includes('Kim Cương');
      }
    }
  ]
};
