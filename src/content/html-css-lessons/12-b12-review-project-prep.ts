import { Lesson } from '@/types/lesson';

export const LESSON_B12_01: Lesson = {
  id: 'b12-01',
  title: 'Bài 12.1 (Cơ bản): Sửa 3 Lỗi Cú Pháp HTML Thường Gặp',
  shortDescription: 'Rèn luyện kỹ năng phát hiện và sửa lỗi cú pháp HTML: quên đóng thẻ, sai tên thẻ và thẻ lồng nhau.',
  category: 'html-semantic',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 45,
  week: 12,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 12.1: Kỹ năng gỡ lỗi HTML (Debugging)**! 🔍🐞

Một lập trình viên giỏi luôn biết cách rà soát lỗi cú pháp:
1. Thiếu thẻ đóng \`</p>\` hoặc \`</b>\`.
2. Sai tên thẻ (ví dụ viết nhầm \`<imgg>\` thành \`<img>\`).
3. Thiếu dấu ngoặc nhọn hoặc đóng mở sai thứ tự.`,

  taskInstructions: [
    'Sửa thẻ tiêu đề sai chính tả `<h11>` thành `<h1>`',
    'Thêm thẻ đóng `</p>` cho đoạn văn bị quên đóng',
    'Sửa thẻ `<imgg>` thành `<img>` với thuộc tính `src` hợp lệ'
  ],

  hints: {
    level1: 'Sửa lại các thẻ: <h1>...</h1>, <p>...</p>, <img src="..." alt="...">' ,
    level2: `<h1>Trang Web Đã Được Sửa Lỗi</h1>
<p>Lập trình viên cần sự cẩn thận và tỉ mỉ trong từng dòng code.</p>
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Lap trinh" style="border-radius: 8px; width: 260px;">`,
    solution: `<h1>Trang Web Đã Được Sửa Lỗi</h1>
<p>Lập trình viên cần sự cẩn thận và tỉ mỉ trong từng dòng code.</p>
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Lap trinh" style="border-radius: 8px; width: 260px;">`
  },

  htmlContent: `<h11>Trang Web Đã Được Sửa Lỗi</h11>
<p>Lập trình viên cần sự cẩn thận và tỉ mỉ trong từng dòng code.
<imgg src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Lap trinh" style="border-radius: 8px; width: 260px;">`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
}
h1 {
  color: #4f46e5;
  font-size: 24px;
}
p {
  color: #475569;
  line-height: 1.6;
}`,

  initialHtmlCode: `<!-- Bài 12.1: Sửa 3 lỗi sai cú pháp HTML bên dưới -->
<h11>Trang Web Đã Được Sửa Lỗi</h11>
<p>Lập trình viên cần sự cẩn thận và tỉ mỉ trong từng dòng code.
<imgg src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Lap trinh" style="border-radius: 8px; width: 260px;">
`,
  solutionHtmlCode: `<h1>Trang Web Đã Được Sửa Lỗi</h1>
<p>Lập trình viên cần sự cẩn thận và tỉ mỉ trong từng dòng code.</p>
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Lap trinh" style="border-radius: 8px; width: 260px;">`,

  tests: [
    {
      id: 'b12-01-t1',
      description: 'Có thẻ <h1> hợp lệ (đã sửa từ <h11>)',
      tester: (doc: Document) => {
        const h1 = doc.querySelector('h1');
        return !!h1;
      }
    },
    {
      id: 'b12-01-t2',
      description: 'Thẻ <p> có nội dung và đóng thẻ đầy đủ',
      tester: (doc: Document) => {
        const p = doc.querySelector('p');
        return !!p && p.textContent?.includes('cẩn thận') === true;
      }
    },
    {
      id: 'b12-01-t3',
      description: 'Có thẻ <img> hợp lệ (đã sửa từ <imgg>)',
      tester: (doc: Document) => {
        const img = doc.querySelector('img');
        return !!img && !!img.getAttribute('src');
      }
    }
  ]
};

export const LESSON_B12_02: Lesson = {
  id: 'b12-02',
  title: 'Bài 12.2 (Cơ bản): Sửa 3 Lỗi Cú Pháp CSS Thường Gặp',
  shortDescription: 'Phát hiện và sửa các lỗi CSS: thiếu dấu chấm trước class, thiếu dấu chấm phẩy và sai tên thuộc tính.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 46,
  week: 12,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 12.2: Kỹ năng gỡ lỗi CSS**! 🔧🎨

Những lỗi CSS phổ biến làm giao diện không nhận màu:
1. Thiếu dấu chấm \`.\` trước tên class (\`btn\` -> \`.btn\`).
2. Quên dấu chấm phẩy \`;\` ở cuối dòng thuộc tính.
3. Viết sai tên thuộc tính (ví dụ \`bg-color\` -> \`background-color\` hoặc \`background\`).`,

  taskInstructions: [
    'Sửa bộ chọn `btn` thành `.btn` (thêm dấu chấm)',
    'Sửa thuộc tính `bg-color` thành `background-color` và thêm dấu chấm phẩy `;`',
    'Thêm dấu `;` sau dòng `color: white`'
  ],

  hints: {
    level1: 'Sửa lại thành: .btn { background-color: #4f46e5; color: white; border-radius: 8px; }',
    level2: `.btn {
  background-color: #4f46e5;
  color: white;
  border-radius: 8px;
}`,
    solution: `.btn {
  background-color: #4f46e5;
  color: white;
  border-radius: 8px;
}`
  },

  htmlContent: `<div style="text-align: center; padding: 40px 20px;">
  <button class="btn" style="border: none; padding: 12px 24px; font-weight: bold; cursor: pointer;">Nút Bấm Đã Sửa Lỗi</button>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  margin: 0;
}`,

  initialCssCode: `/* Bài 12.2: Sửa 3 lỗi sai cú pháp CSS bên dưới */
btn {
  bg-color: #4f46e5
  color: white
  border-radius: 8px;
}
`,
  solutionCssCode: `.btn {
  background-color: #4f46e5;
  color: white;
  border-radius: 8px;
}
`,

  tests: [
    {
      id: 'b12-02-t1',
      description: '.btn có background-color là #4f46e5 (hoặc rgb(79, 70, 229))',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        return style.backgroundColor === 'rgb(79, 70, 229)' || style.backgroundColor === '#4f46e5';
      }
    },
    {
      id: 'b12-02-t2',
      description: '.btn có color là white và border-radius: 8px',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        return (style.color === 'rgb(255, 255, 255)' || style.color === 'white') && style.borderRadius === '8px';
      }
    }
  ]
};

export const LESSON_B12_03: Lesson = {
  id: 'b12-03',
  title: 'Bài 12.3 (Nâng cao): Dựng Mini-Profile Hoàn Chỉnh',
  shortDescription: 'Kết hợp Flexbox căn giữa, Avatar tròn 50%, Card Box Model và hiệu ứng hover.',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 35,
  order: 47,
  week: 12,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 12.3: Dựng thành phần Mini-Profile**! 🪪✨

Hãy tổng hợp toàn bộ các kỹ thuật đã học:
- \`.profile-box\`: \`display: flex; flex-direction: column; align-items: center; padding: 24px; border-radius: 16px; margin: 0 auto;\`
- \`.avatar-mini\`: \`width: 100px; height: 100px; border-radius: 50%; object-fit: cover;\`
- \`.btn-hover\`: \`transition: 0.3s;\` và khi \`:hover\` đổi màu nền.`,

  taskInstructions: [
    'Thiết lập cho `.profile-box`: `display: flex; flex-direction: column; align-items: center;` và căn giữa `margin: 0 auto;`',
    'Thiết lập cho `.avatar-mini`: `width: 100px; height: 100px; border-radius: 50%; object-fit: cover;`',
    'Thiết lập cho `.btn-hover`: `transition: 0.3s;` và `.btn-hover:hover` đổi màu nền'
  ],

  hints: {
    level1: 'Viết luật CSS cho .profile-box, .avatar-mini, .btn-hover và .btn-hover:hover',
    level2: `.profile-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
}
.avatar-mini {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.btn-hover {
  transition: 0.3s;
  cursor: pointer;
}
.btn-hover:hover {
  background-color: #4338ca;
}`,
    solution: `.profile-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
}
.avatar-mini {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.btn-hover {
  transition: 0.3s;
  cursor: pointer;
}
.btn-hover:hover {
  background-color: #4338ca;
}`
  },

  htmlContent: `<div class="profile-box" style="background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
  <img class="avatar-mini" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar" style="border: 3px solid #4f46e5;">
  <h3 style="margin: 12px 0 4px; font-family: sans-serif;">Minh Anh</h3>
  <p style="margin: 0 0 16px; font-size: 14px; color: #64748b; font-family: sans-serif;">Học sinh lớp 8 • Sáng tạo Web</p>
  <button class="btn-hover" style="background: #4f46e5; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold;">Kết Nối Ngay</button>
</div>`,
  cssContent: `body {
  background: #f1f5f9;
  padding: 30px 10px;
  margin: 0;
}`,

  initialCssCode: `/* Bài 12.3: Định dạng Mini-Profile gồm .profile-box, .avatar-mini và .btn-hover */
.profile-box {

}

.avatar-mini {

}

.btn-hover {

}

.btn-hover:hover {

}
`,
  solutionCssCode: `.profile-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
}

.avatar-mini {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.btn-hover {
  transition: 0.3s;
  cursor: pointer;
}

.btn-hover:hover {
  background-color: #4338ca;
}
`,

  tests: [
    {
      id: 'b12-03-t1',
      description: '.profile-box dùng Flexbox dạng cột căn giữa',
      tester: (doc: Document, win: Window) => {
        const box = doc.querySelector('.profile-box');
        if (!box) return false;
        const style = win.getComputedStyle(box);
        return style.display === 'flex' && style.flexDirection === 'column';
      }
    },
    {
      id: 'b12-03-t2',
      description: '.avatar-mini có width 100px, height 100px và border-radius: 50%',
      tester: (doc: Document, win: Window) => {
        const img = doc.querySelector('.avatar-mini');
        if (!img) return false;
        const style = win.getComputedStyle(img);
        const isCircle = style.borderRadius.includes('50%') || parseInt(style.borderRadius) >= 50;
        return style.width === '100px' && isCircle;
      }
    },
    {
      id: 'b12-03-t3',
      description: '.btn-hover có transition và hiệu ứng :hover',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.btn-hover:hover');
      }
    }
  ]
};

export const LESSON_B12_04: Lesson = {
  id: 'b12-04',
  title: 'Bài 12.4 (Nâng cao): Khởi Tạo Biến Màu Sắc CSS (:root)',
  shortDescription: 'Khai báo các biến màu trong :root và áp dụng vào trang web thông qua hàm var().',
  category: 'css-colors',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 40,
  order: 48,
  week: 12,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 12.4: Biến màu sắc CSS (:root & var())**! 🎨🌐

Chuẩn bị bảng màu đồng nhất cho Đồ án Tốt nghiệp:
\`\`\`css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}

h1 {
  color: var(--primary-color);
}
\`\`\``,

  taskInstructions: [
    'Khai báo trong `:root` 3 biến màu: `--primary-color: #4f46e5;`, `--secondary-color: #06b6d4;`, `--text-color: #1e293b;`',
    'Đặt màu chữ cho thẻ `h1`: `color: var(--primary-color);`',
    'Đặt màu chữ cho thẻ `p`: `color: var(--text-color);`'
  ],

  hints: {
    level1: 'Khai báo biến trong :root { --ten-bien: gia_tri; } và dùng color: var(--ten-bien);',
    level2: `:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}
h1 {
  color: var(--primary-color);
}
p {
  color: var(--text-color);
}`,
    solution: `:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}
h1 {
  color: var(--primary-color);
}
p {
  color: var(--text-color);
}`
  },

  htmlContent: `<div style="max-width: 480px; margin: 20px auto; background: white; padding: 24px; border-radius: 12px; font-family: sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
  <h1>Tiêu Đề Dùng Biến Màu</h1>
  <p>Đoạn văn này được định dạng màu chữ thông qua biến màu CSS var(--text-color)!</p>
</div>`,
  cssContent: `body {
  background: #f1f5f9;
  padding: 20px;
}`,

  initialCssCode: `/* Bài 12.4: Khai báo biến trong :root và áp dụng qua hàm var() */
:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}

h1 {

}

p {

}
`,
  solutionCssCode: `:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}

h1 {
  color: var(--primary-color);
}

p {
  color: var(--text-color);
}
`,

  tests: [
    {
      id: 'b12-04-t1',
      description: 'Khai báo đúng :root với các biến màu CSS',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes(':root') && styles.includes('--primary-color') && styles.includes('--text-color');
      }
    },
    {
      id: 'b12-04-t2',
      description: 'Sử dụng hàm var() cho h1 và p',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('var(--primary-color)') && styles.includes('var(--text-color)');
      }
    }
  ]
};

export const B12_LESSONS: Lesson[] = [
  LESSON_B12_01,
  LESSON_B12_02,
  LESSON_B12_03,
  LESSON_B12_04,
];
