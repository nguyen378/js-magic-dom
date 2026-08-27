import { Lesson } from '@/types/lesson';

export const LESSON_W04: Lesson = {
  id: 'w04-html-forms',
  title: 'Buổi 4: Biểu Mẫu Nhập Liệu (HTML Forms)',
  shortDescription: 'Thẻ <form>, các loại <input> (text, password, email, number, radio), menu <select>, khung <textarea>, nút submit và ràng buộc dữ liệu validation.',
  category: 'html-form',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 100,
  order: 4,
  week: 4,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 4: Biểu mẫu nhập liệu (HTML Forms)**! 📝

Biểu mẫu là cách trang web thu thập thông tin từ người dùng (đăng ký, bình luận, gửi tin nhắn):
- Thẻ \`<form>\`: Bao bọc toàn bộ các ô nhập dữ liệu.
- Các loại \`<input>\`:
  - \`type="text"\`: Ô nhập văn bản thông thường (họ tên).
  - \`type="password"\`: Ô nhập mật khẩu (ẩn dấu chấm tròn).
  - \`type="email"\`: Ô nhập email có kiểm tra định dạng @.
  - \`type="number"\`: Ô nhập số (kèm \`min\` và \`max\`).
  - \`type="radio"\`: Nút chọn 1 trong nhiều phương án (phải cùng \`name\`).
- Menu thả xuống \`<select>\` và các lựa chọn \`<option>\`.
- Khung văn bản nhiều dòng \`<textarea>\`.
- Ràng buộc dữ liệu: \`required\` (bắt buộc nhập), \`minlength="6"\` (độ dài tối thiểu).`,

  taskInstructions: [
    '🟢 Bài 4.1: Tạo `<form>` đăng nhập chứa ô nhập tên (`type="text"`), mật khẩu (`type="password"`), và nút `<button type="submit">Đăng nhập</button>`',
    '🟢 Bài 4.2: Tạo 2 ô chọn giới tính Nam và Nữ bằng `<input type="radio">` có cùng thuộc tính `name="gender"`',
    '🟡 Bài 4.3: Tạo Form khảo sát có ô Họ tên (`required`), menu `<select>` chọn lớp (8A, 8B, 8C), khung nhập ý kiến `<textarea>`, và nút Gửi',
    '🟡 Bài 4.4: Tạo form đăng ký có Email (`type="email"`), Tuổi (`type="number"` với `min="12"` và `max="15"`), Mật khẩu có `minlength="6"`'
  ],

  hints: {
    level1: 'Sử dụng các thẻ <form>, <input>, <select>, <option>, <textarea>, <button> kèm theo các thuộc tính type, name, required, min, max, minlength.',
    level2: `<!-- Gợi ý cú pháp mẫu -->
<!-- Bài 4.1 -->
<form>
  <input type="text" placeholder="Tên đăng nhập">
  <input type="password" placeholder="Mật khẩu">
  <button type="submit">Đăng nhập</button>
</form>

<!-- Bài 4.2 -->
<div>
  <label><input type="radio" name="gender" value="nam"> Nam</label>
  <label><input type="radio" name="gender" value="nu"> Nữ</label>
</div>

<!-- Bài 4.3 -->
<form>
  <input type="text" placeholder="Họ và tên" required>
  <select>
    <option value="8A">Lớp 8A</option>
    <option value="8B">Lớp 8B</option>
    <option value="8C">Lớp 8C</option>
  </select>
  <textarea placeholder="Ý kiến đóng góp"></textarea>
  <button type="submit">Gửi</button>
</form>

<!-- Bài 4.4 -->
<form>
  <input type="email" placeholder="Email của bạn">
  <input type="number" min="12" max="15" placeholder="Tuổi">
  <input type="password" minlength="6" placeholder="Mật khẩu (tối thiểu 6 ký tự)">
</form>`,
    solution: `<form>
  <h3>Đăng Nhập</h3>
  <input type="text" placeholder="Tên đăng nhập">
  <input type="password" placeholder="Mật khẩu">
  <button type="submit">Đăng nhập</button>
</form>

<div>
  <h3>Chọn Giới Tính</h3>
  <label><input type="radio" name="gender" value="nam"> Nam</label>
  <label><input type="radio" name="gender" value="nu"> Nữ</label>
</div>

<form>
  <h3>Khảo Sát Ý Kiến</h3>
  <input type="text" placeholder="Họ và tên" required>
  <select>
    <option value="8A">Lớp 8A</option>
    <option value="8B">Lớp 8B</option>
    <option value="8C">Lớp 8C</option>
  </select>
  <textarea placeholder="Ý kiến đóng góp"></textarea>
  <button type="submit">Gửi</button>
</form>

<form>
  <h3>Đăng Ký Thành Viên</h3>
  <input type="email" placeholder="Email học sinh">
  <input type="number" min="12" max="15" placeholder="Tuổi (12 - 15)">
  <input type="password" minlength="6" placeholder="Mật khẩu ít nhất 6 ký tự">
</form>`
  },

  htmlContent: `<!-- Hãy viết các biểu mẫu Form của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 20px;
  background: #f8fafc;
  color: #1e293b;
}
form, div {
  background: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 16px;
  max-width: 480px;
}
h3 {
  margin: 0 0 12px;
  color: #4f46e5;
  font-size: 16px;
}
input[type="text"], input[type="password"], input[type="email"], input[type="number"], select, textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 14px;
  box-sizing: border-box;
}
textarea {
  min-height: 70px;
  resize: vertical;
}
button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
label {
  margin-right: 16px;
  font-size: 14px;
  color: #334155;
  cursor: pointer;
}`,

  initialHtmlCode: `<!-- Buổi 4: Xây dựng các biểu mẫu Form theo 4 bài tập -->\n`,
  solutionHtmlCode: `<form>
  <h3>Đăng Nhập</h3>
  <input type="text" placeholder="Tên đăng nhập">
  <input type="password" placeholder="Mật khẩu">
  <button type="submit">Đăng nhập</button>
</form>

<div>
  <h3>Chọn Giới Tính</h3>
  <label><input type="radio" name="gender" value="nam"> Nam</label>
  <label><input type="radio" name="gender" value="nu"> Nữ</label>
</div>

<form>
  <h3>Khảo Sát Ý Kiến</h3>
  <input type="text" placeholder="Họ và tên" required>
  <select>
    <option value="8A">Lớp 8A</option>
    <option value="8B">Lớp 8B</option>
    <option value="8C">Lớp 8C</option>
  </select>
  <textarea placeholder="Ý kiến đóng góp"></textarea>
  <button type="submit">Gửi</button>
</form>

<form>
  <h3>Đăng Ký Thành Viên</h3>
  <input type="email" placeholder="Email học sinh">
  <input type="number" min="12" max="15" placeholder="Tuổi (12 - 15)">
  <input type="password" minlength="6" placeholder="Mật khẩu ít nhất 6 ký tự">
</form>`,

  tests: [
    {
      id: 'w04-t1',
      description: 'Bài 4.1: Có thẻ <form> chứa input text, input password và nút submit "Đăng nhập"',
      tester: (doc: Document) => {
        const forms = Array.from(doc.querySelectorAll('form'));
        return forms.some(f => {
          const hasText = !!f.querySelector('input[type="text"]');
          const hasPass = !!f.querySelector('input[type="password"]');
          const hasSubmit = !!f.querySelector('button[type="submit"], input[type="submit"]') || (f.querySelector('button')?.textContent?.toLowerCase().includes('đăng nhập') === true);
          return hasText && hasPass && hasSubmit;
        });
      }
    },
    {
      id: 'w04-t2',
      description: 'Bài 4.2: Có 2 ô input radio có cùng name="gender"',
      tester: (doc: Document) => {
        const radios = Array.from(doc.querySelectorAll('input[type="radio"][name="gender"]'));
        return radios.length >= 2;
      }
    },
    {
      id: 'w04-t3',
      description: 'Bài 4.3: Có input với thuộc tính required, menu <select> và khung <textarea>',
      tester: (doc: Document) => {
        const reqInput = doc.querySelector('input[required]');
        const select = doc.querySelector('select');
        const textarea = doc.querySelector('textarea');
        return !!reqInput && !!select && !!textarea;
      }
    },
    {
      id: 'w04-t4',
      description: 'Bài 4.4: Có input email, input number với min="12" max="15", và password có minlength="6"',
      tester: (doc: Document) => {
        const email = doc.querySelector('input[type="email"]');
        const number = doc.querySelector('input[type="number"][min="12"][max="15"]');
        const passMin = doc.querySelector('input[type="password"][minlength="6"]');
        return !!email && !!number && !!passMin;
      }
    }
  ]
};
