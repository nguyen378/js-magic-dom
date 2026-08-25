import { Lesson } from '@/types/lesson';

export const lessonProj04: Lesson = {
  id: 'proj04-form-validation',
  title: 'P04. Hệ Thống Kiểm Tra Biểu Mẫu (Form Validation)',
  shortDescription: 'Xây dựng bộ kiểm tra dữ liệu form đăng ký: email hợp lệ, mật khẩu tối thiểu 6 ký tự (F8 Project)',
  category: 'form-validation',
  track: 'capstone',
  difficulty: 'hard',
  xpReward: 120,
  order: 4,

  story: `**Form Validation (Kiểm tra dữ liệu biểu mẫu)** là kỹ năng thực chiến quan trọng bậc nhất của lập trình viên Front-End để bảo vệ hệ thống khỏi dữ liệu rỗng và không hợp lệ! 🛡️📝

Nguyên tắc Validation:
1. Lắng nghe sự kiện \`submit\` của form: Dùng \`e.preventDefault()\` để ngăn trình duyệt tự tải lại trang.
2. Kiểm tra các trường:
   - Email rỗng hoặc không có ký tự \`@\`: Hiển thị lỗi \`#email-error\`.
   - Mật khẩu < 6 ký tự: Hiển thị lỗi \`#pass-error\`.
3. Nếu tất cả hợp lệ, hiển thị thông báo thành công!
`,

  taskInstructions: [
    'Lấy form `#register-form`, ô `#email-input`, ô `#password-input` và các nhãn báo lỗi `#email-error`, `#password-error`.',
    'Thêm sự kiện `submit` cho `#register-form`: Gọi `e.preventDefault()`.',
    'Nếu giá trị email không chứa ký tự `"@"`: Đặt `emailError.innerText = "Email không hợp lệ!";`, ngược lại xóa thông báo lỗi `emailError.innerText = "";`.',
    'Nếu độ dài mật khẩu < 6: Đặt `passwordError.innerText = "Mật khẩu phải từ 6 ký tự trở lên!";`, ngược lại xóa lỗi `passwordError.innerText = "";`.'
  ],

  hints: {
    level1: 'Sử dụng `e.preventDefault()` trong sự kiện submit và kiểm tra `emailInput.value.includes("@")` cùng `passwordInput.value.length < 6`.',
    level2: `const form = document.getElementById("register-form");
const emailInput = document.getElementById("email-input");
const passInput = document.getElementById("password-input");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("password-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (!emailInput.value.includes("@")) {
    emailError.innerText = "Email không hợp lệ!";
  } else {
    emailError.innerText = "";
  }

  if (passInput.value.length < 6) {
    passError.innerText = "Mật khẩu phải từ 6 ký tự trở lên!";
  } else {
    passError.innerText = "";
  }
});`,
    solution: `const form = document.getElementById("register-form");
const emailInput = document.getElementById("email-input");
const passInput = document.getElementById("password-input");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("password-error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!emailInput.value.includes("@")) {
    emailError.innerText = "Email không hợp lệ!";
  } else {
    emailError.innerText = "";
  }

  if (passInput.value.length < 6) {
    passError.innerText = "Mật khẩu phải từ 6 ký tự trở lên!";
  } else {
    passError.innerText = "";
  }
});`
  },

  htmlContent: `
<div class="auth-card">
  <div class="auth-title">🔐 ĐĂNG KÝ TÀI KHOẢN PHÁP SƯ</div>
  
  <form id="register-form" class="auth-form">
    <div class="form-group">
      <label>Địa chỉ Email:</label>
      <input id="email-input" type="text" placeholder="vidu@magic.com" />
      <span id="email-error" class="error-msg"></span>
    </div>

    <div class="form-group">
      <label>Mật khẩu (tối thiểu 6 ký tự):</label>
      <input id="password-input" type="password" placeholder="••••••" />
      <span id="password-error" class="error-msg"></span>
    </div>

    <button id="btn-submit" type="submit" class="btn-submit">
      Tạo Tài Khoản
    </button>
  </form>
</div>`,

  cssContent: `
.auth-card {
  background: #0f172a;
  border-radius: 20px;
  padding: 24px;
  color: white;
  border: 2px solid #ec4899;
  box-shadow: 0 10px 25px -5px rgba(236, 72, 153, 0.3);
  max-width: 400px;
  margin: 0 auto;
}
.auth-title {
  font-size: 14px;
  font-weight: 800;
  color: #f472b6;
  text-align: center;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
}
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}
.form-group label {
  font-size: 11px;
  font-weight: 700;
  color: #cbd5e1;
}
.form-group input {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 8px 12px;
  color: white;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;
}
.form-group input:focus {
  border-color: #ec4899;
}
.error-msg {
  font-size: 11px;
  color: #f87171;
  font-weight: 600;
  min-height: 16px;
}
.btn-submit {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
  border: none;
  padding: 10px;
  font-size: 13px;
  font-weight: 800;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(219, 39, 119, 0.4);
  margin-top: 6px;
}`,

  initialJsCode: `// Nhiệm vụ: Bắt sự kiện submit của #register-form, kiểm tra email và password!
const form = document.getElementById("register-form");
const emailInput = document.getElementById("email-input");
const passInput = document.getElementById("password-input");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("password-error");

// Lắng nghe sự kiện submit:

`,

  solutionJsCode: `const form = document.getElementById("register-form");
const emailInput = document.getElementById("email-input");
const passInput = document.getElementById("password-input");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("password-error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!emailInput.value.includes("@")) {
    emailError.innerText = "Email không hợp lệ!";
  } else {
    emailError.innerText = "";
  }

  if (passInput.value.length < 6) {
    passError.innerText = "Mật khẩu phải từ 6 ký tự trở lên!";
  } else {
    passError.innerText = "";
  }
});`,

  tests: [
    {
      id: 'validation_triggers_on_invalid_input',
      description: 'Khi submit với email sai và mật khẩu ngắn, các thông báo lỗi phải xuất hiện chính xác',
      tester: async (doc) => {
        const form = doc.getElementById('register-form') as HTMLFormElement;
        const emailInput = doc.getElementById('email-input') as HTMLInputElement;
        const passInput = doc.getElementById('password-input') as HTMLInputElement;
        const emailError = doc.getElementById('email-error');
        const passError = doc.getElementById('password-error');

        if (!form || !emailInput || !passInput || !emailError || !passError) return false;

        emailInput.value = 'invalid_email';
        passInput.value = '123';

        form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

        await new Promise((r) => setTimeout(r, 50));

        const hasEmailError = emailError.innerText.length > 0;
        const hasPassError = passError.innerText.length > 0;

        return hasEmailError && hasPassError;
      }
    }
  ]
};
