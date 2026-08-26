import { Lesson } from '@/types/lesson';

export const LESSON_W06: Lesson = {
  id: 'w06-borders-shadow',
  title: 'Tuần 6: Khung Viền, Bo Tròn Avatar & Đổ Bóng',
  shortDescription: 'Tạo thẻ Profile Card cá tính: Biến ảnh đại diện thành hình tròn hoàn hảo với border-radius: 50%, tạo khung viền border và bóng đổ 3D box-shadow.',
  category: 'css-boxmodel',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 100,
  order: 6,
  week: 6,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 6**! 🖼️

Hôm nay chúng ta sẽ làm quen với 3 bảo bối trang trí:
- \`border\`: Tạo đường viền bảo vệ xung quanh phần tử (ví dụ: \`3px solid #6366f1\`).
- \`border-radius: 50%\`: Bí kíp biến một ảnh hình vuông thành **hình tròn avatar** hoàn hảo!
- \`box-shadow\`: Tạo bóng đổ nổi khối 3D sống động (ví dụ: \`0 10px 25px rgba(0,0,0,0.15)\`).`,

  taskInstructions: [
    'Đặt `border-radius: 50%` và `border: 4px solid #6366f1` cho ảnh `.avatar` để tạo avatar tròn có viền tím',
    'Đặt `border-radius: 20px` và `box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15)` cho `.profile-card` để thẻ nổi 3D đẹp mắt',
    'Đặt `border-radius: 10px` cho nút `.btn-follow`'
  ],

  hints: {
    level1: 'Sử dụng .avatar { border-radius: 50%; border: 4px solid #6366f1; } và .profile-card { border-radius: 20px; box-shadow: ...; }',
    level2: 'Ví dụ:\n.avatar {\n  border-radius: 50%;\n  border: 4px solid #6366f1;\n}\n.profile-card {\n  border-radius: 20px;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);\n}\n.btn-follow {\n  border-radius: 10px;\n}',
    solution: '.avatar {\n  border-radius: 50%;\n  border: 4px solid #6366f1;\n}\n.profile-card {\n  border-radius: 20px;\n  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);\n}\n.btn-follow {\n  border-radius: 10px;\n}'
  },

  htmlContent: `<div class="profile-card">
  <img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar" width="120" height="120">
  <h2>Minh Anh</h2>
  <p class="tag">@minhanh_coder</p>
  <p class="status">Đang chinh phục lập trình web cùng JS Magic DOM!</p>
  <button class="btn-follow">Kết Bạn Ngay</button>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #e0e7ff;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  margin: 0;
}
.profile-card {
  background: white;
  padding: 30px;
  max-width: 320px;
  text-align: center;
}
.avatar {
  display: block;
  margin: 0 auto 16px;
  object-fit: cover;
}
h2 {
  margin: 0 0 4px;
  color: #1e1b4b;
}
.tag {
  margin: 0 0 12px;
  color: #6366f1;
  font-weight: 600;
  font-size: 14px;
}
.status {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.btn-follow {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 24px;
  font-weight: bold;
  cursor: pointer;
}`,

  initialCssCode: `/* Tuần 6: Trang trí .avatar tròn, .profile-card bóng đổ và .btn-follow bo góc */
.avatar {

}

.profile-card {

}

.btn-follow {

}
`,
  solutionCssCode: `.avatar {
  border-radius: 50%;
  border: 4px solid #6366f1;
}

.profile-card {
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.btn-follow {
  border-radius: 10px;
}
`,

  tests: [
    {
      id: 'w06-t1',
      description: '.avatar có border-radius là 50% và có border viền',
      tester: (doc: Document, win: Window) => {
        const avatar = doc.querySelector('.avatar');
        if (!avatar) return false;
        const style = win.getComputedStyle(avatar);
        return style.borderRadius.includes('50%') || style.borderRadius.includes('60px') || parseInt(style.borderRadius) >= 50;
      }
    },
    {
      id: 'w06-t2',
      description: '.profile-card có border-radius: 20px và có box-shadow bóng đổ',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.profile-card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return style.borderRadius === '20px' && style.boxShadow !== 'none';
      }
    },
    {
      id: 'w06-t3',
      description: '.btn-follow có border-radius: 10px',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn-follow');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        return style.borderRadius === '10px';
      }
    }
  ]
};
