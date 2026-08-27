import { Lesson } from '@/types/lesson';

export const LESSON_W07: Lesson = {
  id: 'w07-borders-hover',
  title: 'Buổi 7: Bo Góc, Đổ Bóng & Hiệu Ứng Rê Chuột (:hover)',
  shortDescription: 'Thuộc tính border-radius (bo góc, avatar tròn 50%), box-shadow (đổ bóng 3D), object-fit: cover, trạng thái :hover và transition chuyển động mượt mà.',
  category: 'css-effects',
  course: 'html-css',
  track: 'w-css-styling',
  editorLanguage: 'css',
  difficulty: 'easy',
  xpReward: 100,
  order: 7,
  week: 7,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 7: Bo góc, Đổ bóng 3D & Hiệu ứng Rê chuột (:hover)**! ✨

Để giao diện website có chiều sâu và tính tương tác sống động:
- **Bo góc \`border-radius\`**: Bo tròn góc hộp (\`border-radius: 16px;\`). Đặt \`border-radius: 50%;\` kết hợp ảnh vuông và \`object-fit: cover;\` sẽ biến ảnh thành **Avatar hình tròn hoàn hảo**.
- **Đổ bóng \`box-shadow\`**: Tạo hiệu ứng nổi khối 3D (\`box-shadow: 0 4px 8px rgba(0,0,0,0.1);\`).
- **Trạng thái rê chuột \`:hover\`**: Kích hoạt màu sắc hoặc chuyển động khi con trỏ chuột chạm vào.
- **Chuyển động mượt \`transition\`**: Giúp thay đổi diễn ra từ từ (\`transition: 0.3s;\`), kết hợp \`transform: translateY(-5px);\` để nhấc bổng thẻ lên trên mặt bàn.`,

  taskInstructions: [
    '🟢 Bài 7.1: Cài đặt ảnh `.avatar` có kích thước `120px x 120px`, `border-radius: 50%`, và `object-fit: cover`',
    '🟢 Bài 7.2: Bo tròn 4 góc của class `.card` bằng `border-radius: 16px` và ẩn phần tràn bằng `overflow: hidden`',
    '🟡 Bài 7.3: Cài đặt cho nút `.btn`: có `transition: 0.3s`, `cursor: pointer`. Khi `.btn:hover`, màu nền đổi sang `#27ae60`',
    '🟡 Bài 7.4: Thẻ `.product-card` có `box-shadow: 0 4px 8px rgba(0,0,0,0.1)`. Khi `.product-card:hover`, tăng bóng đổ `0 8px 16px rgba(0,0,0,0.2)` và nhấc thẻ bằng `transform: translateY(-5px)`'
  ],

  hints: {
    level1: 'Viết CSS cho .avatar, .card, .btn, .btn:hover, .product-card và .product-card:hover',
    level2: `/* Gợi ý cú pháp */
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.card {
  border-radius: 16px;
  overflow: hidden;
}

.btn {
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #27ae60;
}

.product-card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.product-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}`,
    solution: `.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.card {
  border-radius: 16px;
  overflow: hidden;
}

.btn {
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #27ae60;
}

.product-card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.product-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}`
  },

  htmlContent: `<div class="card product-card">
  <img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
  <h2>Khóa Học Web Hero</h2>
  <p>Làm chủ HTML, CSS và hiệu ứng tương tác hiện đại.</p>
  <button class="btn">Đăng Ký Ngay</button>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f1f5f9;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  margin: 0;
}
.card {
  background: white;
  padding: 24px;
  max-width: 320px;
  text-align: center;
  border: 1px solid #e2e8f0;
}
.avatar {
  display: block;
  margin: 0 auto 16px;
}
h2 {
  margin: 0 0 8px;
  color: #1e293b;
  font-size: 20px;
}
p {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 20px;
}
.btn {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: bold;
}`,

  initialCssCode: `/* Buổi 7: Thiết lập .avatar tròn, .card bo góc, .btn hover và .product-card 3D */
.avatar {

}

.card {

}

.btn {

}

.btn:hover {

}

.product-card {

}

.product-card:hover {

}
`,
  solutionCssCode: `.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.card {
  border-radius: 16px;
  overflow: hidden;
}

.btn {
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #27ae60;
}

.product-card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.product-card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}
`,

  tests: [
    {
      id: 'w07-t1',
      description: 'Bài 7.1: .avatar có width/height: 120px, border-radius: 50% và object-fit: cover',
      tester: (doc: Document, win: Window) => {
        const avatar = doc.querySelector('.avatar');
        if (!avatar) return false;
        const style = win.getComputedStyle(avatar);
        return style.width === '120px' && (style.borderRadius.includes('50%') || style.borderRadius.includes('60px') || parseInt(style.borderRadius) >= 50) && style.objectFit === 'cover';
      }
    },
    {
      id: 'w07-t2',
      description: 'Bài 7.2: .card có border-radius: 16px và overflow: hidden',
      tester: (doc: Document, win: Window) => {
        const card = doc.querySelector('.card');
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return style.borderRadius === '16px' && style.overflow === 'hidden';
      }
    },
    {
      id: 'w07-t3',
      description: 'Bài 7.3: .btn có transition, cursor: pointer và .btn:hover đổi sang màu xanh #27ae60',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.btn:hover') && (styles.includes('#27ae60') || styles.includes('rgb(39, 174, 96)'));
      }
    },
    {
      id: 'w07-t4',
      description: 'Bài 7.4: .product-card có box-shadow và .product-card:hover có transform: translateY(-5px)',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.product-card:hover') && styles.includes('translateY');
      }
    }
  ]
};
