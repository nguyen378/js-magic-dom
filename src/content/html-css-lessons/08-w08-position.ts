import { Lesson } from '@/types/lesson';

export const LESSON_W08: Lesson = {
  id: 'w08-position',
  title: 'Buổi 8: Định Vị Phần Tử (CSS Position)',
  shortDescription: 'Cố định thanh Menu trên đỉnh trang (position: fixed), gắn huy hiệu HOT lên góc ảnh (position: relative + absolute) và nút cuộn lên đầu trang.',
  category: 'css-boxmodel',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 100,
  order: 8,
  week: 8,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 8: Định vị phần tử (CSS Position)**! 📍

CSS Position cho phép bạn phá vỡ dòng chảy mặc định để ghim phần tử vào bất kỳ vị trí mong muốn nào:
- **\`position: fixed\`**: Ghim phần tử cố định theo khung nhìn màn hình (Viewport), khi người dùng cuộn trang thì phần tử vẫn đứng yên (như thanh Navbar ghim trên đỉnh hay nút Cuộn về đầu trang ở góc dưới).
- **Cặp bài trùng \`position: relative\` (cha) và \`position: absolute\` (con)**:
  - Khung cha được đặt \`position: relative\` làm điểm mốc tọa độ.
  - Thẻ con đặt \`position: absolute\` sẽ tự do bay đến các góc \`top\`, \`right\`, \`bottom\`, \`left\` so với khung cha (như gắn huy hiệu HOT lên góc ảnh hoặc đặt nút đóng [X] ở góc modal thoại).`,

  taskInstructions: [
    '🟢 Bài 8.1: Cài đặt cho thẻ `.navbar`: `position: fixed; top: 0; left: 0; width: 100%;` để ghim cố định trên đỉnh trang',
    '🟢 Bài 8.2: Tạo nút `.btn-top` ghim cố định ở góc dưới bên phải bằng `position: fixed; bottom: 20px; right: 20px;`',
    '🟡 Bài 8.3: Đặt khung cha `.img-box` là `position: relative;`. Nhãn con `.badge-hot` là `position: absolute; top: 10px; right: 10px;`, nền đỏ `#e74c3c`, chữ trắng',
    '🟡 Bài 8.4: Đặt khung thoại `.modal-box` là `position: relative;`. Đặt nút đóng `.btn-close` ở góc trên bên phải (`position: absolute; top: 8px; right: 8px;`)'
  ],

  hints: {
    level1: 'Viết CSS position fixed cho .navbar và .btn-top. Viết position relative cho cha (.img-box, .modal-box) và position absolute cho con (.badge-hot, .btn-close).',
    level2: `/* Gợi ý cú pháp */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.btn-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.img-box {
  position: relative;
}

.badge-hot {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
}

.modal-box {
  position: relative;
}

.btn-close {
  position: absolute;
  top: 8px;
  right: 8px;
}`,
    solution: `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.btn-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.img-box {
  position: relative;
}

.badge-hot {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c;
  color: white;
}

.modal-box {
  position: relative;
}

.btn-close {
  position: absolute;
  top: 8px;
  right: 8px;
}`
  },

  htmlContent: `<nav class="navbar">
  <span>🚀 Web Master 2026</span>
</nav>

<div class="content" style="padding-top: 60px;">
  <div class="img-box" style="width: 260px; margin: 20px auto;">
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Khóa học" style="width: 100%; border-radius: 12px; display: block;">
    <span class="badge-hot">HOT SALE</span>
  </div>

  <div class="modal-box" style="max-width: 300px; margin: 20px auto; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <button class="btn-close" style="border: none; background: #e2e8f0; border-radius: 50%; width: 24px; height: 24px; cursor: pointer;">✕</button>
    <h4>Hộp Thoại Thông Báo</h4>
    <p style="margin: 0; font-size: 13px; color: #64748b;">Bạn vừa nhận được 100 điểm kinh nghiệm!</p>
  </div>

  <button class="btn-top" style="background: #4f46e5; color: white; border: none; padding: 10px 16px; border-radius: 50px; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">⬆ Lên Đầu</button>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}
.navbar {
  background: #1e293b;
  color: white;
  padding: 14px 20px;
  box-sizing: border-box;
}`,

  initialCssCode: `/* Buổi 8: Thiết lập CSS Position cho .navbar, .btn-top, .img-box, .badge-hot, .modal-box, .btn-close */
.navbar {

}

.btn-top {

}

.img-box {

}

.badge-hot {

}

.modal-box {

}

.btn-close {

}
`,
  solutionCssCode: `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.btn-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.img-box {
  position: relative;
}

.badge-hot {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c;
  color: white;
}

.modal-box {
  position: relative;
}

.btn-close {
  position: absolute;
  top: 8px;
  right: 8px;
}
`,

  tests: [
    {
      id: 'w08-t1',
      description: 'Bài 8.1: .navbar có position: fixed, top: 0, left: 0, width: 100%',
      tester: (doc: Document, win: Window) => {
        const navbar = doc.querySelector('.navbar');
        if (!navbar) return false;
        const style = win.getComputedStyle(navbar);
        return style.position === 'fixed' && style.top === '0px' && style.left === '0px';
      }
    },
    {
      id: 'w08-t2',
      description: 'Bài 8.2: .btn-top có position: fixed, bottom: 20px, right: 20px',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn-top');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        return style.position === 'fixed' && style.bottom === '20px' && style.right === '20px';
      }
    },
    {
      id: 'w08-t3',
      description: 'Bài 8.3: .img-box có position: relative và .badge-hot có position: absolute, top: 10px, right: 10px, background đỏ, chữ trắng',
      tester: (doc: Document, win: Window) => {
        const box = doc.querySelector('.img-box');
        const badge = doc.querySelector('.badge-hot');
        if (!box || !badge) return false;
        const boxStyle = win.getComputedStyle(box);
        const badgeStyle = win.getComputedStyle(badge);
        const hasRelative = boxStyle.position === 'relative';
        const hasAbsolute = badgeStyle.position === 'absolute' && badgeStyle.top === '10px' && badgeStyle.right === '10px';
        return hasRelative && hasAbsolute;
      }
    },
    {
      id: 'w08-t4',
      description: 'Bài 8.4: .modal-box có position: relative và .btn-close có position: absolute, top: 8px, right: 8px',
      tester: (doc: Document, win: Window) => {
        const modal = doc.querySelector('.modal-box');
        const close = doc.querySelector('.btn-close');
        if (!modal || !close) return false;
        const modalStyle = win.getComputedStyle(modal);
        const closeStyle = win.getComputedStyle(close);
        return modalStyle.position === 'relative' && closeStyle.position === 'absolute' && closeStyle.top === '8px' && closeStyle.right === '8px';
      }
    }
  ]
};
