import { Lesson } from '@/types/lesson';

export const LESSON_B04_01: Lesson = {
  id: 'b04-01',
  title: 'Bài 4.1 (Cơ bản): Form Đăng Nhập Tài Khoản',
  shortDescription: 'Tạo biểu mẫu đăng nhập với ô nhập tên tài khoản, mật khẩu và nút gửi.',
  category: 'html-forms',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 13,
  week: 4,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 4.1: Biểu mẫu nhập liệu (HTML Forms)**! 📝

Biểu mẫu \`<form>\` là cầu nối giúp trang web tiếp nhận thông tin từ người dùng:
- \`<input type="text">\`: Ô nhập văn bản thông thường (tên đăng nhập).
- \`<input type="password">\`: Ô nhập mật khẩu (tự động che ký tự dạng dấu chấm tròn).
- \`<button type="submit">\`: Nút bấm gửi dữ liệu.`,

  taskInstructions: [
    'Tạo một thẻ `<form>`',
    'Bên trong form, tạo 1 ô `<input type="text" placeholder="Tên đăng nhập">`',
    'Tạo 1 ô `<input type="password" placeholder="Mật khẩu">`',
    'Tạo 1 nút `<button type="submit">Đăng nhập</button>`'
  ],

  hints: {
    level1: 'Đặt 2 ô input và nút submit vào bên trong thẻ <form>...</form>',
    level2: `<form>
  <input type="text" placeholder="Tên đăng nhập">
  <input type="password" placeholder="Mật khẩu">
  <button type="submit">Đăng nhập</button>
</form>`,
    solution: `<form>
  <input type="text" placeholder="Tên đăng nhập">
  <input type="password" placeholder="Mật khẩu">
  <button type="submit">Đăng nhập</button>
</form>`
  },

  htmlContent: `<!-- Hãy viết form đăng nhập của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
}
form {
  max-width: 320px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
input {
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  background: #4f46e5;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}`,

  initialHtmlCode: `<!-- Bài 4.1: Tạo form gồm input text, password và button submit -->\n`,
  solutionHtmlCode: `<form>
  <input type="text" placeholder="Tên đăng nhập">
  <input type="password" placeholder="Mật khẩu">
  <button type="submit">Đăng nhập</button>
</form>`,

  tests: [
    {
      id: 'b04-01-t1',
      description: 'Có thẻ <form> chứa input text và input password',
      tester: (doc: Document) => {
        const form = doc.querySelector('form');
        const text = form?.querySelector('input[type="text"]');
        const pass = form?.querySelector('input[type="password"]');
        return !!form && !!text && !!pass;
      }
    },
    {
      id: 'b04-01-t2',
      description: 'Có nút <button type="submit"> chứa chữ "Đăng nhập"',
      tester: (doc: Document) => {
        const btn = doc.querySelector('form button');
        return !!btn && btn.textContent?.toLowerCase().includes('đăng nhập') === true;
      }
    }
  ]
};

export const LESSON_B04_02: Lesson = {
  id: 'b04-02',
  title: 'Bài 4.2 (Cơ bản): Chọn Giới Tính Với Radio Button',
  shortDescription: 'Tạo nhóm nút lựa chọn duy nhất radio button bằng cách gán chung thuộc tính name="gender".',
  category: 'html-forms',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 14,
  week: 4,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 4.2: Nút chọn Radio button**! 🔘

Nút Radio \`<input type="radio">\` cho phép người dùng chọn **duy nhất 1** trong nhiều phương án.
- Để các nút radio hoạt động chung một nhóm (chọn cái này thì bỏ chọn cái kia), bạn bắt buộc phải đặt **cùng một giá trị \`name\`** (ví dụ: \`name="gender"\`).`,

  taskInstructions: [
    'Tạo 1 nút `<input type="radio" name="gender" value="male">` kèm nhãn Nam',
    'Tạo 1 nút `<input type="radio" name="gender" value="female">` kèm nhãn Nữ',
    'Cả 2 nút phải có chung thuộc tính `name="gender"`'
  ],

  hints: {
    level1: 'Sử dụng <input type="radio" name="gender"> Nam <input type="radio" name="gender"> Nữ',
    level2: `<p>Chọn giới tính của bạn:</p>
<label><input type="radio" name="gender" value="male"> Nam</label>
<label><input type="radio" name="gender" value="female"> Nữ</label>`,
    solution: `<label><input type="radio" name="gender" value="male"> Nam</label>
<label><input type="radio" name="gender" value="female"> Nữ</label>`
  },

  htmlContent: `<!-- Hãy viết 2 radio button của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
}
label {
  display: inline-block;
  margin-right: 16px;
  padding: 8px 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  cursor: pointer;
}`,

  initialHtmlCode: `<!-- Bài 4.2: Tạo 2 input type="radio" có chung name="gender" -->\n`,
  solutionHtmlCode: `<label><input type="radio" name="gender" value="male"> Nam</label>
<label><input type="radio" name="gender" value="female"> Nữ</label>`,

  tests: [
    {
      id: 'b04-02-t1',
      description: 'Có đúng 2 thẻ <input type="radio"> và đều có thuộc tính name="gender"',
      tester: (doc: Document) => {
        const radios = doc.querySelectorAll('input[type="radio"]');
        const hasSameName = Array.from(radios).every(r => r.getAttribute('name') === 'gender');
        return radios.length === 2 && hasSameName;
      }
    }
  ]
};

export const LESSON_B04_03: Lesson = {
  id: 'b04-03',
  title: 'Bài 4.3 (Nâng cao): Form Khảo Sát Ý Kiến Hoàn Chỉnh',
  shortDescription: 'Kết hợp thuộc tính required, thẻ danh sách chọn <select> và khung nhập văn bản nhiều dòng <textarea>.',
  category: 'html-forms',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 35,
  order: 15,
  week: 4,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 4.3: Form khảo sát ý kiến**! 📋

- Thuộc tính \`required\`: Bắt buộc người dùng phải điền thông tin trước khi gửi.
- Thẻ \`<select>\` & \`<option>\`: Tạo menu thả xuống (Dropdown) để người dùng chọn một mục.
- Thẻ \`<textarea>\`: Ô nhập văn bản dài nhiều dòng (cho ý kiến đóng góp, tin nhắn).`,

  taskInstructions: [
    'Tạo 1 ô `<input type="text" placeholder="Họ và tên" required>`',
    'Tạo 1 thẻ `<select>` chứa ít nhất 3 thẻ `<option>` (Ví dụ: Lớp 8A, Lớp 8B, Lớp 8C)',
    'Tạo 1 thẻ `<textarea placeholder="Ý kiến đóng góp"></textarea>`',
    'Tạo 1 nút `<button type="submit">Gửi khảo sát</button>`'
  ],

  hints: {
    level1: 'Đặt input (có required), select (có 3 option), textarea và button vào form',
    level2: `<form>
  <input type="text" placeholder="Họ và tên" required>
  <select>
    <option value="8A">Lớp 8A</option>
    <option value="8B">Lớp 8B</option>
    <option value="8C">Lớp 8C</option>
  </select>
  <textarea placeholder="Ý kiến đóng góp"></textarea>
  <button type="submit">Gửi khảo sát</button>
</form>`,
    solution: `<form>
  <input type="text" placeholder="Họ và tên" required>
  <select>
    <option value="8A">Lớp 8A</option>
    <option value="8B">Lớp 8B</option>
    <option value="8C">Lớp 8C</option>
  </select>
  <textarea placeholder="Ý kiến đóng góp"></textarea>
  <button type="submit">Gửi khảo sát</button>
</form>`
  },

  htmlContent: `<!-- Hãy viết form khảo sát của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
}
form {
  max-width: 360px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
input, select, textarea {
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-sizing: border-box;
}
textarea {
  height: 80px;
  resize: vertical;
}
button {
  width: 100%;
  background: #0284c7;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}`,

  initialHtmlCode: `<!-- Bài 4.3: Tạo form khảo sát gồm input required, select (3 option), textarea và button -->\n`,
  solutionHtmlCode: `<form>
  <input type="text" placeholder="Họ và tên" required>
  <select>
    <option value="8A">Lớp 8A</option>
    <option value="8B">Lớp 8B</option>
    <option value="8C">Lớp 8C</option>
  </select>
  <textarea placeholder="Ý kiến đóng góp"></textarea>
  <button type="submit">Gửi khảo sát</button>
</form>`,

  tests: [
    {
      id: 'b04-03-t1',
      description: 'Có ô input có thuộc tính required',
      tester: (doc: Document) => {
        const req = doc.querySelector('input[required]');
        return !!req;
      }
    },
    {
      id: 'b04-03-t2',
      description: 'Có thẻ <select> chứa ít nhất 3 thẻ <option>',
      tester: (doc: Document) => {
        const select = doc.querySelector('select');
        const options = select?.querySelectorAll('option');
        return !!select && (options?.length || 0) >= 3;
      }
    },
    {
      id: 'b04-03-t3',
      description: 'Có thẻ <textarea> và nút submit',
      tester: (doc: Document) => {
        const textarea = doc.querySelector('textarea');
        const btn = doc.querySelector('button');
        return !!textarea && !!btn;
      }
    }
  ]
};

export const LESSON_B04_04: Lesson = {
  id: 'b04-04',
  title: 'Bài 4.4 (Nâng cao): Ràng Buộc Dữ Liệu Nâng Cao',
  shortDescription: 'Sử dụng type="email", type="number" có min/max và thuộc tính minlength cho mật khẩu.',
  category: 'html-forms',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 40,
  order: 16,
  week: 4,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 4.4: Ràng buộc dữ liệu nâng cao**! 🛡️

Trình duyệt có thể tự động kiểm tra tính hợp lệ của dữ liệu trước khi gửi đi:
- \`type="email"\`: Bắt buộc nhập đúng định dạng có dấu \`@\` và tên miền.
- \`type="number" min="12" max="15"\`: Chỉ cho phép nhập số trong khoảng từ 12 đến 15.
- \`minlength="6"\`: Bắt buộc chuỗi nhập vào phải có ít nhất 6 ký tự.`,

  taskInstructions: [
    'Tạo 1 ô `<input type="email" placeholder="Email của bạn">`',
    'Tạo 1 ô `<input type="number" min="12" max="15" placeholder="Tuổi (12-15)">`',
    'Tạo 1 ô `<input type="password" minlength="6" placeholder="Mật khẩu (ít nhất 6 ký tự)">`',
    'Tạo 1 nút `<button type="submit">Hoàn tất</button>`'
  ],

  hints: {
    level1: 'Tạo form chứa: input type="email", input type="number" min="12" max="15", input type="password" minlength="6"',
    level2: `<form>
  <input type="email" placeholder="Email của bạn">
  <input type="number" min="12" max="15" placeholder="Tuổi">
  <input type="password" minlength="6" placeholder="Mật khẩu">
  <button type="submit">Hoàn tất</button>
</form>`,
    solution: `<form>
  <input type="email" placeholder="Email của bạn">
  <input type="number" min="12" max="15" placeholder="Tuổi">
  <input type="password" minlength="6" placeholder="Mật khẩu">
  <button type="submit">Hoàn tất</button>
</form>`
  },

  htmlContent: `<!-- Hãy viết form có các ràng buộc nâng cao bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
}
form {
  max-width: 360px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
input {
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  background: #10b981;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}`,

  initialHtmlCode: `<!-- Bài 4.4: Tạo form gồm input email, number (min 12 max 15), password (minlength 6) và button -->\n`,
  solutionHtmlCode: `<form>
  <input type="email" placeholder="Email của bạn">
  <input type="number" min="12" max="15" placeholder="Tuổi">
  <input type="password" minlength="6" placeholder="Mật khẩu">
  <button type="submit">Hoàn tất</button>
</form>`,

  tests: [
    {
      id: 'b04-04-t1',
      description: 'Có ô input type="email"',
      tester: (doc: Document) => {
        const email = doc.querySelector('input[type="email"]');
        return !!email;
      }
    },
    {
      id: 'b04-04-t2',
      description: 'Có ô input type="number" với min="12" và max="15"',
      tester: (doc: Document) => {
        const num = doc.querySelector('input[type="number"]');
        return !!num && num.getAttribute('min') === '12' && num.getAttribute('max') === '15';
      }
    },
    {
      id: 'b04-04-t3',
      description: 'Có ô input type="password" với thuộc tính minlength="6"',
      tester: (doc: Document) => {
        const pass = doc.querySelector('input[type="password"]');
        return !!pass && pass.getAttribute('minlength') === '6';
      }
    }
  ]
};

export const B04_LESSONS: Lesson[] = [
  LESSON_B04_01,
  LESSON_B04_02,
  LESSON_B04_03,
  LESSON_B04_04,
];
