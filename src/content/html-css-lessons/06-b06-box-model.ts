import { Lesson } from '@/types/lesson';

export const LESSON_B06_01: Lesson = {
  id: 'b06-01',
  title: 'Bài 6.1 (Cơ bản): Reset Box-Sizing & Viền Khung',
  shortDescription: 'Cài đặt * { box-sizing: border-box; } và thiết lập width, padding, border cho khối .box.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 21,
  week: 6,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 6.1: Mô hình hộp (CSS Box Model)**! 📦

Mỗi phần tử trên web là một chiếc hộp gồm: **Nội dung (Content)** -> **Đệm (Padding)** -> **Viền (Border)** -> **Lề (Margin)**.
- \`* { box-sizing: border-box; }\`: Cực kỳ quan trọng! Giúp chiều rộng \`width\` đã khai báo bao trọn cả padding và border mà không bị phình to vỡ layout.`,

  taskInstructions: [
    'Thêm luật toàn cục `* { box-sizing: border-box; }`',
    'Thiết lập cho class `.box`: `width: 200px;`',
    'Thêm viền: `border: 2px solid #333;`',
    'Thêm khoảng đệm bên trong: `padding: 20px;`'
  ],

  hints: {
    level1: 'Viết * { box-sizing: border-box; } và .box { width: 200px; border: 2px solid #333; padding: 20px; }',
    level2: `* {
  box-sizing: border-box;
}
.box {
  width: 200px;
  border: 2px solid #333;
  padding: 20px;
}`,
    solution: `* {
  box-sizing: border-box;
}
.box {
  width: 200px;
  border: 2px solid #333;
  padding: 20px;
}`
  },

  htmlContent: `<div class="box">
  Khối hộp chuẩn Box Model
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 30px;
  background: #f8fafc;
}
.box {
  background: white;
  border-radius: 8px;
  color: #1e293b;
  font-weight: 600;
  text-align: center;
}`,

  initialCssCode: `/* Bài 6.1: Cài đặt box-sizing border-box và định dạng cho .box */
* {

}

.box {

}
`,
  solutionCssCode: `* {
  box-sizing: border-box;
}

.box {
  width: 200px;
  border: 2px solid #333;
  padding: 20px;
}
`,

  tests: [
    {
      id: 'b06-01-t1',
      description: 'Có luật reset * { box-sizing: border-box; }',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('box-sizing') && styles.includes('border-box');
      }
    },
    {
      id: 'b06-01-t2',
      description: '.box có width: 200px, border và padding: 20px',
      tester: (doc: Document, win: Window) => {
        const box = doc.querySelector('.box');
        if (!box) return false;
        const style = win.getComputedStyle(box);
        return style.width === '200px' && style.padding === '20px';
      }
    }
  ]
};

export const LESSON_B06_02: Lesson = {
  id: 'b06-02',
  title: 'Bài 6.2 (Cơ bản): Khoảng Cách Lề Margin',
  shortDescription: 'Tạo khoảng cách thông thoáng giữa các đoạn văn bằng margin-bottom: 25px.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 22,
  week: 6,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 6.2: Khoảng cách lề ngoài (Margin)**! 📐

Margin tạo khoảng trống đẩy các phần tử lân cận ra xa:
- \`margin-bottom: 25px;\`: Đẩy phần tử phía dưới cách ra một khoảng 25px, giúp bố cục thông thoáng, dễ nhìn.`,

  taskInstructions: [
    'Thiết lập cho class `.paragraph` thuộc tính `margin-bottom: 25px;`'
  ],

  hints: {
    level1: 'Viết luật CSS: .paragraph { margin-bottom: 25px; }',
    level2: `.paragraph {
  margin-bottom: 25px;
}`,
    solution: `.paragraph {
  margin-bottom: 25px;
}`
  },

  htmlContent: `<div style="max-width: 500px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px;">
  <p class="paragraph">Đoạn văn 1: Kiến thức nền tảng HTML & CSS giúp bạn tự tin xây dựng mọi website.</p>
  <p class="paragraph">Đoạn văn 2: Khoảng cách margin hợp lý giúp trang web trở nên chuyên nghiệp và dễ đọc hơn.</p>
  <p class="paragraph">Đoạn văn 3: Chúc bạn có những giờ học lập trình thật vui vẻ và bổ ích!</p>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f1f5f9;
  padding: 30px;
}
.paragraph {
  background: #f8fafc;
  border-left: 4px solid #4f46e5;
  padding: 12px 16px;
  border-radius: 4px;
  color: #334155;
  margin: 0;
}`,

  initialCssCode: `/* Bài 6.2: Đặt margin-bottom: 25px cho .paragraph */
.paragraph {

}
`,
  solutionCssCode: `.paragraph {
  margin-bottom: 25px;
}
`,

  tests: [
    {
      id: 'b06-02-t1',
      description: '.paragraph có margin-bottom: 25px',
      tester: (doc: Document, win: Window) => {
        const p = doc.querySelector('.paragraph');
        if (!p) return false;
        const style = win.getComputedStyle(p);
        return style.marginBottom === '25px';
      }
    }
  ]
};

export const LESSON_B06_03: Lesson = {
  id: 'b06-03',
  title: 'Bài 6.3 (Nâng cao): Thiết Kế Nút Bấm Chuẩn UI',
  shortDescription: 'Kết hợp background-color, border: none, padding và border-radius để tạo nút bấm hiện đại.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 35,
  order: 23,
  week: 6,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 6.3: Thiết kế Nút bấm chuẩn UI**! 🔘✨

Một nút bấm đẹp mắt cần:
- Màu nền nổi bật (\`background-color: #2ecc71;\`).
- Chữ màu trắng dễ đọc (\`color: white;\`).
- Bỏ viền đen mặc định (\`border: none;\`).
- Khoảng đệm êm ái (\`padding: 10px 20px;\`).
- Bo góc hiện đại (\`border-radius: 6px;\`).`,

  taskInstructions: [
    'Thiết lập cho class `.btn`: `background-color: #2ecc71;`',
    'Đặt màu chữ: `color: white;` và bỏ viền: `border: none;`',
    'Đặt khoảng đệm: `padding: 10px 20px;` (10px trên/dưới, 20px trái/phải)',
    'Bo góc mềm mại: `border-radius: 6px;`'
  ],

  hints: {
    level1: 'Thiết lập 5 thuộc tính cho .btn: background-color, color, border, padding, border-radius',
    level2: `.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
}`,
    solution: `.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
}`
  },

  htmlContent: `<div style="text-align: center; padding: 40px; background: white; border-radius: 12px; max-width: 400px; margin: 30px auto; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
  <h3 style="margin-top: 0; font-family: sans-serif; color: #1e293b;">Trải Nghiệm Nút Bấm UI</h3>
  <button class="btn">Khám Phá Ngay</button>
</div>`,
  cssContent: `body {
  background: #f8fafc;
  padding: 20px;
}`,

  initialCssCode: `/* Bài 6.3: Thiết kế nút bấm .btn chuẩn UI */
.btn {

}
`,
  solutionCssCode: `.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
}
`,

  tests: [
    {
      id: 'b06-03-t1',
      description: '.btn có nền xanh #2ecc71 (hoặc rgb(46, 204, 113)) và chữ trắng',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        const isGreen = style.backgroundColor === 'rgb(46, 204, 113)' || style.backgroundColor === '#2ecc71';
        const isWhite = style.color === 'rgb(255, 255, 255)' || style.color === 'white';
        return isGreen && isWhite;
      }
    },
    {
      id: 'b06-03-t2',
      description: '.btn có padding: 10px 20px và border-radius: 6px',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        const hasPadding = style.paddingTop === '10px' && style.paddingRight === '20px';
        const hasRadius = style.borderRadius === '6px';
        return hasPadding && hasRadius;
      }
    }
  ]
};

export const LESSON_B06_04: Lesson = {
  id: 'b06-04',
  title: 'Bài 6.4 (Nâng cao): Căn Giữa Khối Thẻ Với Margin Auto',
  shortDescription: 'Sử dụng kỹ thuật kinh điển margin: 0 auto kết hợp max-width/width để căn giữa khối thẻ trên màn hình.',
  category: 'css-layout',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 40,
  order: 24,
  week: 6,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 6.4: Căn giữa khối thẻ với Margin Auto**! 🎯

Kỹ thuật căn giữa một phần tử dạng khối (\`block\` element):
1. Khai báo chiều rộng cố định: \`width: 320px;\`
2. Đặt lề tự động: \`margin: 0 auto;\` (Trên/dưới = 0, trái/phải = auto tự động chia đều).`,

  taskInstructions: [
    'Thiết lập cho class `.card`: `width: 320px;`',
    'Thêm khoảng đệm bên trong: `padding: 15px;`',
    'Căn giữa khối thẻ ra chính giữa trang: `margin: 0 auto;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .card: width: 320px; padding: 15px; margin: 0 auto;',
    level2: `.card {
  width: 320px;
  padding: 15px;
  margin: 0 auto;
}`,
    solution: `.card {
  width: 320px;
  padding: 15px;
  margin: 0 auto;
}`
  },

  htmlContent: `<div class="card">
  <h3 style="margin-top: 0; color: #4f46e5;">Thẻ Thông Tin</h3>
  <p style="color: #64748b; font-size: 14px; margin-bottom: 0;">Khối thẻ này đã được căn giữa hoàn hảo nhờ bí kíp margin: 0 auto!</p>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #0f172a;
  padding: 40px 10px;
}
.card {
  background: #1e293b;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  box-sizing: border-box;
}`,

  initialCssCode: `/* Bài 6.4: Thiết lập width, padding và căn giữa .card bằng margin: 0 auto */
.card {

}
`,
  solutionCssCode: `.card {
  width: 320px;
  padding: 15px;
  margin: 0 auto;
}
`,

  tests: [
    {
      id: 'b06-04-t1',
      description: '.card có width: 320px và padding: 15px',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return style.width === '320px' && style.padding === '15px';
      }
    },
    {
      id: 'b06-04-t2',
      description: '.card có margin: 0 auto (căn giữa khối)',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('margin') && styles.includes('auto');
      }
    }
  ]
};

export const B06_LESSONS: Lesson[] = [
  LESSON_B06_01,
  LESSON_B06_02,
  LESSON_B06_03,
  LESSON_B06_04,
];
