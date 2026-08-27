import { Lesson } from '@/types/lesson';

export const LESSON_B08_01: Lesson = {
  id: 'b08-01',
  title: 'Bài 8.1 (Cơ bản): Ghim Thanh Menu Trên Đỉnh Trang',
  shortDescription: 'Sử dụng position: fixed, top: 0, left: 0 và width: 100% để cố định thanh điều hướng khi cuộn trang.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 29,
  week: 8,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 8.1: Định vị phần tử (CSS Position)**! 📌

Thuộc tính \`position: fixed;\` giúp ghim cố định một phần tử trên khung nhìn màn hình trình duyệt, không bao giờ bị trôi đi khi người dùng cuộn trang.`,

  taskInstructions: [
    'Thiết lập cho class `.navbar`: `position: fixed;`',
    'Ghim sát góc trên bên trái: `top: 0; left: 0;`',
    'Kéo dài thanh menu phủ hết chiều ngang: `width: 100%;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .navbar: position: fixed; top: 0; left: 0; width: 100%;',
    level2: `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}`,
    solution: `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}`
  },

  htmlContent: `<nav class="navbar">
  <div class="logo">🚀 Học Lập Trình Web</div>
</nav>

<div class="content" style="padding-top: 60px;">
  <p>Hãy cuộn thử trang để thấy thanh menu luôn được ghim cố định trên đỉnh!</p>
  <div style="height: 400px; background: linear-gradient(#cbd5e1, #f8fafc); border-radius: 8px; margin-top: 10px;"></div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  padding: 16px;
  background: #f8fafc;
}
.navbar {
  background: #4f46e5;
  color: white;
  padding: 14px 20px;
  box-sizing: border-box;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.logo {
  font-weight: bold;
}`,

  initialCssCode: `/* Bài 8.1: Ghim cố định .navbar trên đỉnh màn hình */
.navbar {

}
`,
  solutionCssCode: `.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
`,

  tests: [
    {
      id: 'b08-01-t1',
      description: '.navbar có position: fixed, top: 0, left: 0 và width: 100%',
      tester: (doc: Document, win: Window) => {
        const nav = doc.querySelector('.navbar');
        if (!nav) return false;
        const style = win.getComputedStyle(nav);
        return style.position === 'fixed' && style.top === '0px' && style.left === '0px';
      }
    }
  ]
};

export const LESSON_B08_02: Lesson = {
  id: 'b08-02',
  title: 'Bài 8.2 (Cơ bản): Nút Cuộn Lên Đầu Trang',
  shortDescription: 'Sử dụng position: fixed, bottom: 20px, right: 20px để ghim nút hỗ trợ ở góc dưới bên phải.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 30,
  week: 8,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 8.2: Nút cuộn lên đầu trang (Back to Top)**! ⬆️

Để người dùng dễ dàng trở lại đầu trang, một nút bấm hình tròn được ghim cố định ở góc dưới cùng bên phải màn hình:
- \`position: fixed;\`
- \`bottom: 20px; right: 20px;\``,

  taskInstructions: [
    'Thiết lập cho class `.btn-top`: `position: fixed;`',
    'Ghim ở góc dưới bên phải: `bottom: 20px; right: 20px;`'
  ],

  hints: {
    level1: 'Viết luật CSS: .btn-top { position: fixed; bottom: 20px; right: 20px; }',
    level2: `.btn-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`,
    solution: `.btn-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`
  },

  htmlContent: `<div class="main-page" style="padding: 20px; height: 350px;">
  <h3>Nội Dung Trang Dài</h3>
  <p>Khi trang web kéo dài, nút cuộn lên đầu luôn túc trực ở góc dưới bên phải màn hình.</p>
</div>
<button class="btn-top">⬆</button>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  margin: 0;
  background: #f1f5f9;
}
.btn-top {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #4f46e5;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(79,70,229,0.3);
}`,

  initialCssCode: `/* Bài 8.2: Ghim .btn-top ở góc dưới cùng bên phải */
.btn-top {

}
`,
  solutionCssCode: `.btn-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
`,

  tests: [
    {
      id: 'b08-02-t1',
      description: '.btn-top có position: fixed, bottom: 20px và right: 20px',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn-top');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        return style.position === 'fixed' && style.bottom === '20px' && style.right === '20px';
      }
    }
  ]
};

export const LESSON_B08_03: Lesson = {
  id: 'b08-03',
  title: 'Bài 8.3 (Nâng cao): Gắn Huy Hiệu HOT Trên Góc Ảnh',
  shortDescription: 'Kết hợp position: relative ở khung cha và position: absolute ở phần tử con để gắn nhãn nổi bật.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 35,
  order: 31,
  week: 8,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 8.3: Cặp đôi vàng Relative & Absolute**! 🔥🏷️

Nguyên lý định vị con theo cha:
1. Thẻ cha (\`.img-box\`): Cần đặt \`position: relative;\` để làm hệ quy chiếu (làm cột mốc).
2. Thẻ con (\`.badge-hot\`): Đặt \`position: absolute; top: 10px; right: 10px;\` để bám sát theo góc của cha.`,

  taskInstructions: [
    'Thiết lập cho khung cha `.img-box`: `position: relative;`',
    'Thiết lập cho huy hiệu `.badge-hot`: `position: absolute; top: 10px; right: 10px;`'
  ],

  hints: {
    level1: 'Đặt position: relative cho .img-box và position: absolute; top: 10px; right: 10px; cho .badge-hot',
    level2: `.img-box {
  position: relative;
}
.badge-hot {
  position: absolute;
  top: 10px;
  right: 10px;
}`,
    solution: `.img-box {
  position: relative;
}
.badge-hot {
  position: absolute;
  top: 10px;
  right: 10px;
}`
  },

  htmlContent: `<div class="img-box">
  <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400" alt="Game" style="width: 100%; height: 180px; object-fit: cover; display: block; border-radius: 12px;">
  <span class="badge-hot">🔥 HOT</span>
</div>`,
  cssContent: `body {
  background: #f8fafc;
  padding: 30px;
}
.img-box {
  max-width: 300px;
  margin: 0 auto;
}
.badge-hot {
  background: #ef4444;
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  font-family: sans-serif;
}`,

  initialCssCode: `/* Bài 8.3: Thiết lập cha relative và con absolute cho huy hiệu HOT */
.img-box {

}

.badge-hot {

}
`,
  solutionCssCode: `.img-box {
  position: relative;
}

.badge-hot {
  position: absolute;
  top: 10px;
  right: 10px;
}
`,

  tests: [
    {
      id: 'b08-03-t1',
      description: '.img-box có position: relative',
      tester: (doc: Document, win: Window) => {
        const box = doc.querySelector('.img-box');
        if (!box) return false;
        const style = win.getComputedStyle(box);
        return style.position === 'relative';
      }
    },
    {
      id: 'b08-03-t2',
      description: '.badge-hot có position: absolute, top: 10px và right: 10px',
      tester: (doc: Document, win: Window) => {
        const badge = doc.querySelector('.badge-hot');
        if (!badge) return false;
        const style = win.getComputedStyle(badge);
        return style.position === 'absolute' && style.top === '10px' && style.right === '10px';
      }
    }
  ]
};

export const LESSON_B08_04: Lesson = {
  id: 'b08-04',
  title: 'Bài 8.4 (Nâng cao): Nút Đóng [X] Trên Góc Hộp Thoại',
  shortDescription: 'Gắn nút đóng hộp thoại [X] vào góc trên cùng bên phải bằng kỹ thuật position absolute.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 40,
  order: 32,
  week: 8,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 8.4: Nút đóng [X] hộp thoại Modal**! ❌🪟

Trong các popup thông báo, nút đóng \`[X]\` luôn được neo chặt ở góc trên bên phải của khung popup:
- Khung hộp thoại (\`.modal-box\`): \`position: relative;\`
- Nút đóng (\`.btn-close\`): \`position: absolute; top: 8px; right: 8px;\``,

  taskInstructions: [
    'Thiết lập cho khung `.modal-box`: `position: relative;`',
    'Thiết lập cho nút `.btn-close`: `position: absolute; top: 8px; right: 8px;`'
  ],

  hints: {
    level1: 'Viết luật CSS: .modal-box { position: relative; } và .btn-close { position: absolute; top: 8px; right: 8px; }',
    level2: `.modal-box {
  position: relative;
}
.btn-close {
  position: absolute;
  top: 8px;
  right: 8px;
}`,
    solution: `.modal-box {
  position: relative;
}
.btn-close {
  position: absolute;
  top: 8px;
  right: 8px;
}`
  },

  htmlContent: `<div class="modal-box">
  <button class="btn-close">✕</button>
  <h4 style="margin: 0 0 8px; color: #1e293b;">Thông Báo Hệ Thống</h4>
  <p style="margin: 0; color: #64748b; font-size: 14px;">Chúc mừng bạn đã hoàn thành xuất sắc các bài tập định vị phần tử!</p>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #0f172a;
  padding: 40px 20px;
}
.modal-box {
  background: white;
  padding: 24px 20px;
  border-radius: 12px;
  max-width: 360px;
  margin: 0 auto;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}
.btn-close {
  background: #f1f5f9;
  border: none;
  color: #64748b;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
}`,

  initialCssCode: `/* Bài 8.4: Định vị nút .btn-close ở góc trên bên phải của .modal-box */
.modal-box {

}

.btn-close {

}
`,
  solutionCssCode: `.modal-box {
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
      id: 'b08-04-t1',
      description: '.modal-box có position: relative',
      tester: (doc: Document, win: Window) => {
        const modal = doc.querySelector('.modal-box');
        if (!modal) return false;
        const style = win.getComputedStyle(modal);
        return style.position === 'relative';
      }
    },
    {
      id: 'b08-04-t2',
      description: '.btn-close có position: absolute, top: 8px và right: 8px',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn-close');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        return style.position === 'absolute' && style.top === '8px' && style.right === '8px';
      }
    }
  ]
};

export const B08_LESSONS: Lesson[] = [
  LESSON_B08_01,
  LESSON_B08_02,
  LESSON_B08_03,
  LESSON_B08_04,
];
