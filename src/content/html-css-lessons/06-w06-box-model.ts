import { Lesson } from '@/types/lesson';

export const LESSON_W06: Lesson = {
  id: 'w06-box-model',
  title: 'Buổi 6: Mô Hình Hộp (CSS Box Model)',
  shortDescription: 'Reset box-sizing: border-box, các thành phần Padding, Border, Margin, căn giữa khối thẻ với margin: 0 auto và thiết kế nút bấm chuẩn UI.',
  category: 'css-boxmodel',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 100,
  order: 6,
  week: 6,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 6: Mô hình hộp (CSS Box Model)**! 📦

Trong CSS, mọi phần tử trên màn hình đều được tính toán như một chiếc hộp gồm 4 lớp từ trong ra ngoài:
1. **Content**: Nội dung chữ, hình ảnh bên trong.
2. **Padding**: Khoảng cách vùng đệm từ nội dung tới đường viền.
3. **Border**: Đường viền bao quanh chiếc hộp.
4. **Margin**: Khoảng cách từ đường viền ra ngoài các phần tử xung quanh.

- 💡 **Quy tắc vàng**: Khai báo \`* { box-sizing: border-box; }\` ở đầu file để chiều rộng của hộp không bị phình to khi thêm padding và border.
- 🎯 **Căn giữa khối**: Sử dụng \`margin: 0 auto;\` trên một phần tử có \`width\` cụ thể sẽ giúp phần tử tự động căn chính giữa trang web!`,

  taskInstructions: [
    '🟢 Bài 6.1: Khai báo `* { box-sizing: border-box; }` và đặt cho class `.box`: `width: 200px;`, `border: 2px solid #333;`, `padding: 20px;`',
    '🟢 Bài 6.2: Thiết lập cho class `.paragraph` có `margin-bottom: 25px;` để tạo khoảng cách giữa các đoạn văn',
    '🟡 Bài 6.3: Định dạng class `.btn`: nền xanh `#2ecc71`, chữ trắng, không viền (`border: none;`), `padding: 10px 20px;`, `border-radius: 6px;`',
    '🟡 Bài 6.4: Tạo khung `.card` có `width: 320px;`, nền trắng, `padding: 15px;`, căn giữa bằng `margin: 0 auto;`'
  ],

  hints: {
    level1: 'Viết các luật CSS: * { box-sizing: border-box; }, .box { ... }, .paragraph { ... }, .btn { ... }, .card { ... }',
    level2: `/* Gợi ý cú pháp */
* {
  box-sizing: border-box;
}

.box {
  width: 200px;
  border: 2px solid #333;
  padding: 20px;
}

.paragraph {
  margin-bottom: 25px;
}

.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.card {
  width: 320px;
  background-color: white;
  padding: 15px;
  margin: 0 auto;
  border: 1px solid #e2e8f0;
}`,
    solution: `* {
  box-sizing: border-box;
}

.box {
  width: 200px;
  border: 2px solid #333;
  padding: 20px;
}

.paragraph {
  margin-bottom: 25px;
}

.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.card {
  width: 320px;
  background-color: white;
  padding: 15px;
  margin: 0 auto;
  border: 1px solid #e2e8f0;
}`
  },

  htmlContent: `<div class="card">
  <h2>Thẻ Học Sinh Lớp 8</h2>
  <div class="box">
    Khối Box kiểm tra Box-Sizing
  </div>
  <p class="paragraph">Đoạn văn thứ nhất có khoảng cách lề dưới margin-bottom.</p>
  <p class="paragraph">Đoạn văn thứ hai cách đoạn một ngăn nắp.</p>
  <button class="btn">Nhấn Vào Đây</button>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f1f5f9;
  padding: 30px 10px;
  margin: 0;
}`,

  initialCssCode: `/* Buổi 6: Thực hành Box Model, Margin Bottom, Nút bấm .btn và Căn giữa .card */
* {

}

.box {

}

.paragraph {

}

.btn {

}

.card {

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

.paragraph {
  margin-bottom: 25px;
}

.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.card {
  width: 320px;
  background-color: white;
  padding: 15px;
  margin: 0 auto;
  border: 1px solid #e2e8f0;
}
`,

  tests: [
    {
      id: 'w06-t1',
      description: 'Bài 6.1: Khai báo * { box-sizing: border-box; } và .box có width: 200px, padding: 20px',
      tester: (doc: Document, win: Window) => {
        const box = doc.querySelector('.box');
        if (!box) return false;
        const style = win.getComputedStyle(box);
        return style.boxSizing === 'border-box' && style.width === '200px' && style.paddingTop === '20px';
      }
    },
    {
      id: 'w06-t2',
      description: 'Bài 6.2: .paragraph có margin-bottom: 25px',
      tester: (doc: Document, win: Window) => {
        const p = doc.querySelector('.paragraph');
        if (!p) return false;
        const style = win.getComputedStyle(p);
        return style.marginBottom === '25px';
      }
    },
    {
      id: 'w06-t3',
      description: 'Bài 6.3: .btn có nền xanh rgb(46, 204, 113) / #2ecc71, không viền, padding: 10px 20px và border-radius: 6px',
      tester: (doc: Document, win: Window) => {
        const btn = doc.querySelector('.btn');
        if (!btn) return false;
        const style = win.getComputedStyle(btn);
        const hasBg = style.backgroundColor.includes('46, 204, 113') || style.backgroundColor.includes('rgb(46, 204, 113)');
        const hasPadding = style.paddingTop === '10px' && style.paddingLeft === '20px';
        const hasRadius = style.borderRadius === '6px';
        return hasBg && hasPadding && hasRadius;
      }
    },
    {
      id: 'w06-t4',
      description: 'Bài 6.4: .card có width: 320px, padding: 15px và căn giữa margin: 0 auto',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return style.width === '320px' && style.paddingTop === '15px';
      }
    }
  ]
};
