import { Lesson } from '@/types/lesson';

export const LESSON_B07_01: Lesson = {
  id: 'b07-01',
  title: 'Bài 7.1 (Cơ bản): Avatar Hình Tròn Hoàn Hảo',
  shortDescription: 'Tạo ảnh đại diện tròn xoe bằng thuộc tính border-radius: 50% và object-fit: cover.',
  category: 'css-effects',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 25,
  week: 7,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 7.1: Avatar tròn hoàn hảo**! 👤⭕

Bí kíp tạo ảnh đại diện hình tròn không bị méo hình:
1. Chiều rộng và chiều cao bằng nhau: \`width: 120px; height: 120px;\`
2. Bo góc tuyệt đối: \`border-radius: 50%;\`
3. Cắt gọn ảnh vừa khung: \`object-fit: cover;\``,

  taskInstructions: [
    'Thiết lập cho class `.avatar`: `width: 120px; height: 120px;`',
    'Bo tròn hoàn hảo: `border-radius: 50%;`',
    'Giữ tỉ lệ ảnh không bị biến dạng: `object-fit: cover;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .avatar với width, height, border-radius, object-fit',
    level2: `.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}`,
    solution: `.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}`
  },

  htmlContent: `<div style="text-align: center; padding: 30px; background: white; border-radius: 16px; max-width: 320px; margin: 20px auto; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
  <img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
  <h4 style="margin: 12px 0 4px; font-family: sans-serif;">Minh Hoàng</h4>
  <p style="margin: 0; color: #64748b; font-size: 13px; font-family: sans-serif;">Lập trình viên nhí</p>
</div>`,
  cssContent: `body {
  background: #f1f5f9;
  padding: 20px;
}
.avatar {
  border: 3px solid #4f46e5;
  display: inline-block;
}`,

  initialCssCode: `/* Bài 7.1: Tạo avatar hình tròn 120x120 */
.avatar {

}
`,
  solutionCssCode: `.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}
`,

  tests: [
    {
      id: 'b07-01-t1',
      description: '.avatar có width: 120px và height: 120px',
      tester: (doc: Document, win: Window) => {
        const img = doc.querySelector('.avatar');
        if (!img) return false;
        const style = win.getComputedStyle(img);
        return style.width === '120px' && style.height === '120px';
      }
    },
    {
      id: 'b07-01-t2',
      description: '.avatar có border-radius: 50% và object-fit: cover',
      tester: (doc: Document, win: Window) => {
        const img = doc.querySelector('.avatar');
        if (!img) return false;
        const style = win.getComputedStyle(img);
        const isCircle = style.borderRadius.includes('50%') || style.borderRadius.includes('60px') || parseInt(style.borderRadius) >= 60;
        return isCircle && style.objectFit === 'cover';
      }
    }
  ]
};

export const LESSON_B07_02: Lesson = {
  id: 'b07-02',
  title: 'Bài 7.2 (Cơ bản): Bo Góc Khung Card',
  shortDescription: 'Sử dụng border-radius: 16px và overflow: hidden để bo tròn góc thẻ card chứa ảnh banner.',
  category: 'css-effects',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 30,
  order: 26,
  week: 7,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 7.2: Bo góc khung thẻ (Card Border Radius)**! 🎴

Khi thẻ Card chứa ảnh bìa tràn ra ngoài, bạn cần:
- \`border-radius: 16px;\`: Bo tròn góc mềm mại cho khung thẻ.
- \`overflow: hidden;\`: Tự động cắt gọt ảnh bìa bên trong khớp với các góc đã bo tròn.`,

  taskInstructions: [
    'Thiết lập cho class `.card`: `border-radius: 16px;`',
    'Thêm thuộc tính ẩn góc ảnh tràn viền: `overflow: hidden;`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .card: border-radius: 16px; overflow: hidden;',
    level2: `.card {
  border-radius: 16px;
  overflow: hidden;
}`,
    solution: `.card {
  border-radius: 16px;
  overflow: hidden;
}`
  },

  htmlContent: `<div class="card">
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500" alt="Banner" style="width: 100%; height: 140px; object-fit: cover; display: block;">
  <div style="padding: 16px;">
    <h4 style="margin: 0 0 8px; font-family: sans-serif; color: #1e293b;">Khóa Học Lập Trình</h4>
    <p style="margin: 0; color: #64748b; font-size: 14px; font-family: sans-serif;">Trải nghiệm giao diện bo góc mượt mà và sang trọng.</p>
  </div>
</div>`,
  cssContent: `body {
  background: #f8fafc;
  padding: 30px;
}
.card {
  background: white;
  max-width: 320px;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}`,

  initialCssCode: `/* Bài 7.2: Bo góc 16px và ẩn tràn viền cho .card */
.card {

}
`,
  solutionCssCode: `.card {
  border-radius: 16px;
  overflow: hidden;
}
`,

  tests: [
    {
      id: 'b07-02-t1',
      description: '.card có border-radius: 16px và overflow: hidden',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return style.borderRadius === '16px' && style.overflow === 'hidden';
      }
    }
  ]
};

export const LESSON_B07_03: Lesson = {
  id: 'b07-03',
  title: 'Bài 7.3 (Nâng cao): Hiệu Ứng Hover Đổi Màu Nút Bấm',
  shortDescription: 'Tạo hiệu ứng chuyển màu mượt mà khi rê chuột vào nút bấm với transition: 0.3s và :hover.',
  category: 'css-effects',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 35,
  order: 27,
  week: 7,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 7.3: Hiệu ứng di chuột (:hover)**! ✨

Để nút bấm tương tác sinh động khi người dùng rê chuột vào:
- \`.btn { transition: 0.3s; cursor: pointer; }\`: Tạo hiệu ứng đổi màu mượt mà trong 0.3 giây và hiện con trỏ bàn tay.
- \`.btn:hover { background-color: #27ae60; }\`: Màu nền mới khi chuột chạm vào nút.`,

  taskInstructions: [
    'Thêm vào `.btn`: `transition: 0.3s;` và `cursor: pointer;`',
    'Tạo bộ chọn giả `.btn:hover` với `background-color: #27ae60;`'
  ],

  hints: {
    level1: 'Viết luật cho .btn và luật cho .btn:hover',
    level2: `.btn {
  transition: 0.3s;
  cursor: pointer;
}
.btn:hover {
  background-color: #27ae60;
}`,
    solution: `.btn {
  transition: 0.3s;
  cursor: pointer;
}
.btn:hover {
  background-color: #27ae60;
}`
  },

  htmlContent: `<div style="text-align: center; padding: 40px; background: white; border-radius: 16px; max-width: 320px; margin: 30px auto; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
  <button class="btn">Rê Chuột Vào Tôi!</button>
</div>`,
  cssContent: `body {
  background: #f1f5f9;
  padding: 20px;
}
.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 15px;
}`,

  initialCssCode: `/* Bài 7.3: Thêm transition, cursor cho .btn và hiệu ứng hover đổi màu nền */
.btn {

}

.btn:hover {

}
`,
  solutionCssCode: `.btn {
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #27ae60;
}
`,

  tests: [
    {
      id: 'b07-03-t1',
      description: '.btn có transition: 0.3s và cursor: pointer',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.btn') && (styles.includes('transition') || styles.includes('0.3s')) && styles.includes('pointer');
      }
    },
    {
      id: 'b07-03-t2',
      description: 'Có luật .btn:hover đổi background-color sang #27ae60',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.btn:hover') && (styles.includes('#27ae60') || styles.includes('rgb(39, 174, 96)'));
      }
    }
  ]
};

export const LESSON_B07_04: Lesson = {
  id: 'b07-04',
  title: 'Bài 7.4 (Nâng cao): Thẻ Card 3D Nổi Lên Khi Hover',
  shortDescription: 'Kết hợp box-shadow và transform: translateY(-5px) để tạo hiệu ứng thẻ nổi 3D.',
  category: 'css-effects',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 40,
  order: 28,
  week: 7,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 7.4: Hiệu ứng thẻ Card 3D nổi lên**! 🚀

Tạo cảm giác chân thực như thẻ bay bổng khi rê chuột:
- Ban đầu: \`.product-card { box-shadow: 0 4px 12px rgba(0,0,0,0.08); transition: 0.3s; }\`
- Khi hover: \`.product-card:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }\``,

  taskInstructions: [
    'Thiết lập cho `.product-card`: `box-shadow: 0 4px 12px rgba(0,0,0,0.08);` và `transition: 0.3s;`',
    'Thiết lập cho `.product-card:hover`: `transform: translateY(-5px);` và tăng `box-shadow: 0 12px 24px rgba(0,0,0,0.15);`'
  ],

  hints: {
    level1: 'Viết luật CSS cho .product-card và .product-card:hover',
    level2: `.product-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}`,
    solution: `.product-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}`
  },

  htmlContent: `<div class="product-card">
  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400" alt="Tech" style="width: 100%; height: 140px; object-fit: cover; display: block; border-radius: 12px 12px 0 0;">
  <div style="padding: 18px;">
    <h3 style="margin: 0 0 6px; font-family: sans-serif; color: #1e293b;">Thiết Kế 3D Tương Tác</h3>
    <p style="margin: 0; font-family: sans-serif; color: #64748b; font-size: 14px;">Hãy thử rê chuột vào chiếc thẻ này để thấy nó nhấc bổng lên!</p>
  </div>
</div>`,
  cssContent: `body {
  background: #f8fafc;
  padding: 40px 20px;
}
.product-card {
  background: white;
  border-radius: 12px;
  max-width: 320px;
  margin: 0 auto;
}`,

  initialCssCode: `/* Bài 7.4: Thiết lập box-shadow, transition và hiệu ứng nổi 3D cho .product-card */
.product-card {

}

.product-card:hover {

}
`,
  solutionCssCode: `.product-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
`,

  tests: [
    {
      id: 'b07-04-t1',
      description: '.product-card có box-shadow và transition: 0.3s',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.product-card') && styles.includes('box-shadow') && styles.includes('transition');
      }
    },
    {
      id: 'b07-04-t2',
      description: '.product-card:hover có transform: translateY(-5px)',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.product-card:hover') && styles.includes('translateY');
      }
    }
  ]
};

export const B07_LESSONS: Lesson[] = [
  LESSON_B07_01,
  LESSON_B07_02,
  LESSON_B07_03,
  LESSON_B07_04,
];
