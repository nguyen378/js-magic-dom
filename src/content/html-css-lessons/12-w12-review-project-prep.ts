import { Lesson } from '@/types/lesson';

export const LESSON_W12: Lesson = {
  id: 'w12-review-project-prep',
  title: 'Buổi 12: Tổng Ôn Kỹ Thuật & Chuẩn Bị Dự Án',
  shortDescription: 'Rà soát và sửa lỗi cú pháp HTML/CSS, dựng component Mini-Profile hoàn chỉnh với Flexbox và thiết lập bảng biến màu sắc CSS (:root) cho dự án cuối khóa.',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 120,
  order: 12,
  week: 12,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 12: Tổng ôn kỹ thuật & Chuẩn bị Dự án cuối khóa**! 🛠️

Trước khi bước vào giai đoạn thực hiện Đồ án Tốt nghiệp (Xây dựng Website Cá Nhân Hoàn Chỉnh từ Buổi 13 đến 16):
- **Sửa lỗi cú pháp (Debugging)**: Rèn luyện kỹ năng phát hiện lỗi HTML (quên thẻ đóng, sai tên thẻ) và CSS (thiếu dấu chấm class, thiếu dấu chấm phẩy \`;\`).
- **Dựng component Mini-Profile**: Kết hợp Avatar tròn, Box Model, Box Shadow, Flexbox và hiệu ứng Hover.
- **Biến màu sắc CSS (:root & var())**: Khai báo bảng màu dùng chung cho toàn bộ dự án:
  \`\`\`css
  :root {
    --primary-color: #4f46e5;
    --secondary-color: #06b6d4;
    --text-color: #1e293b;
  }
  h1 { color: var(--primary-color); }
  \`\`\``,

  taskInstructions: [
    '🟢 Bài 12.1: Sửa đúng các lỗi cú pháp HTML trong cấu trúc trang (thẻ đóng </p>, thẻ heading đúng cú pháp)',
    '🟢 Bài 12.2: Sửa đúng các lỗi cú pháp CSS (dấu `.` trước class, dấu `;` cuối dòng thuộc tính)',
    '🟡 Bài 12.3: Dựng hoàn chỉnh `.profile-box`: căn giữa với Flexbox, ảnh `.avatar-mini` tròn 50%, nút `.btn-hover` có `:hover` đổi màu',
    '🟡 Bài 12.4: Khai báo trong `:root` 3 biến màu (`--primary-color`, `--secondary-color`, `--text-color`) và áp dụng qua hàm `var()`'
  ],

  hints: {
    level1: 'Sử dụng :root { --primary-color: #4f46e5; --secondary-color: #06b6d4; --text-color: #1e293b; } và các bộ chọn .profile-box, .avatar-mini, .btn-hover',
    level2: `/* Gợi ý cú pháp */
:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}

body {
  color: var(--text-color);
}

.profile-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: white;
  border-radius: 16px;
  max-width: 320px;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.avatar-mini {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--secondary-color);
}

.btn-hover {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-hover:hover {
  background-color: #4338ca;
}`,
    solution: `:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}

body {
  color: var(--text-color);
}

.profile-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: white;
  border-radius: 16px;
  max-width: 320px;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.avatar-mini {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--secondary-color);
}

.btn-hover {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-hover:hover {
  background-color: #4338ca;
}`
  },

  htmlContent: `<div class="wrapper">
  <div class="profile-box">
    <img class="avatar-mini" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Mini Avatar">
    <h3 style="margin: 12px 0 4px;">Nguyễn Minh Anh</h3>
    <p style="margin: 0 0 16px; font-size: 14px;">Học sinh lớp 8 • Nhà sáng tạo Web</p>
    <button class="btn-hover">Kết Nối Ngay</button>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f1f5f9;
  padding: 30px 10px;
  margin: 0;
}`,

  initialCssCode: `/* Buổi 12: Thiết lập :root biến màu sắc và style cho .profile-box, .avatar-mini, .btn-hover */
:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}

.profile-box {

}

.avatar-mini {

}

.btn-hover {

}

.btn-hover:hover {

}
`,
  solutionCssCode: `:root {
  --primary-color: #4f46e5;
  --secondary-color: #06b6d4;
  --text-color: #1e293b;
}

body {
  color: var(--text-color);
}

.profile-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: white;
  border-radius: 16px;
  max-width: 320px;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.avatar-mini {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--secondary-color);
}

.btn-hover {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-hover:hover {
  background-color: #4338ca;
}
`,

  tests: [
    {
      id: 'w12-t1',
      description: 'Bài 12.1: Cấu trúc HTML hợp lệ, không chứa lỗi thẻ đóng hay cú pháp sai',
      tester: (doc: Document) => {
        const box = doc.querySelector('.profile-box');
        const img = doc.querySelector('.avatar-mini');
        const btn = doc.querySelector('.btn-hover');
        return !!box && !!img && !!btn;
      }
    },
    {
      id: 'w12-t2',
      description: 'Bài 12.2: Cú pháp CSS hợp lệ, không chứa lỗi thiếu dấu chấm class hay thiếu chấm phẩy',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.profile-box') && styles.includes('.avatar-mini') && styles.includes('.btn-hover');
      }
    },
    {
      id: 'w12-t3',
      description: 'Bài 12.3: .profile-box dùng Flexbox căn giữa, .avatar-mini bo tròn 50% và .btn-hover có hiệu ứng :hover',
      tester: (doc: Document, win: Window) => {
        const box = doc.querySelector('.profile-box');
        const avatar = doc.querySelector('.avatar-mini');
        if (!box || !avatar) return false;
        const boxStyle = win.getComputedStyle(box);
        const avStyle = win.getComputedStyle(avatar);
        const isFlex = boxStyle.display === 'flex';
        const isCircle = avStyle.borderRadius.includes('50%') || avStyle.borderRadius.includes('50px') || parseInt(avStyle.borderRadius) >= 50;
        return isFlex && isCircle;
      }
    },
    {
      id: 'w12-t4',
      description: 'Bài 12.4: Khai báo đúng :root với các biến màu (--primary-color, --secondary-color, --text-color) và dùng hàm var()',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        const hasRoot = styles.includes(':root') && styles.includes('--primary-color');
        const hasVar = styles.includes('var(--');
        return hasRoot && hasVar;
      }
    }
  ]
};
