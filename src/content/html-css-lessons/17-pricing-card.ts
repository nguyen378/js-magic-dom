import { Lesson } from '@/types/lesson';

export const lessonHtml17: Lesson = {
  id: 'proj-html-css-02',
  title: 'P02. Đồ Án: Bảng Giá Phép Thuật (Pricing Cards)',
  shortDescription: 'Sử dụng Flexbox hiện đại để bố cục bảng giá 3 gói dịch vụ, làm nổi bật gói VIP',
  category: 'html-css-project',
  course: 'html-css',
  track: 'html-css-capstone',
  editorLanguage: 'css',
  difficulty: 'hard',
  xpReward: 100,
  order: 17,

  story: `👑 **Đồ Án Thực Chiến 2: Bảng Giá Dịch Vụ Phép Thuật (Pricing Table)**

Hầu như mọi trang web sản phẩm (SaaS, Game, Khóa học) đều có phần Bảng Giá (Pricing Table).

Nhiệm vụ của bạn là sử dụng **CSS Flexbox** và **Box Styling** để:
1. Dàn hàng ngang 3 gói dịch vụ (.pricing-container).
2. Tạo kiểu cho các gói thường và làm **gói VIP (.card-vip)** phóng to nổi bật hơn, viền vàng rực rỡ!
`,

  taskInstructions: [
    'Trong lớp `.pricing-container`, đặt `display: flex;`, `justify-content: center;`, `align-items: center;` và `gap: 20px;`.',
    'Trong lớp `.price-card`, đặt `border-radius: 20px;`, `padding: 24px;` và `background-color: #1e1b4b;`.',
    'Trong lớp `.card-vip`, làm nổi bật với viền `border: 2px solid #f59e0b;` và phóng to nhẹ `transform: scale(1.05);`.'
  ],

  hints: {
    level1: 'Áp dụng display: flex cho container và style các card với border-radius, padding, transform.',
    level2: `.pricing-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n.price-card {\n  background-color: #1e1b4b;\n  border-radius: 20px;\n  padding: 24px;\n}\n.card-vip {\n  border: 2px solid #f59e0b;\n  transform: scale(1.05);\n}`,
    solution: `.pricing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.price-card {
  background-color: #1e1b4b;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  width: 180px;
  border: 1px solid #3730a3;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.card-vip {
  border: 2px solid #f59e0b;
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(245, 158, 11, 0.4);
}`
  },

  htmlContent: `
<div class="pricing-wrapper">
  <h2 class="title">💎 Gói Thuê Bao Pháp Thuật</h2>
  <div class="pricing-container">
    <div class="price-card">
      <h3>Tân Binh</h3>
      <div class="price">0 🪙</div>
      <p>5 bùa chú cơ bản</p>
      <button class="btn">Bắt Đầu</button>
    </div>

    <div class="price-card card-vip">
      <div class="tag">HOT 🔥</div>
      <h3>Phù Thủy</h3>
      <div class="price price-vip">99 🪙</div>
      <p>Mọi bùa chú tối thượng</p>
      <button class="btn btn-vip">Nâng Cấp</button>
    </div>

    <div class="price-card">
      <h3>Đại Sư</h3>
      <div class="price">299 🪙</div>
      <p>Hỗ trợ 1-1 riêng</p>
      <button class="btn">Liên Hệ</button>
    </div>
  </div>
</div>
`,

  cssContent: ``,

  initialCssCode: `/* Nhiệm vụ: Sử dụng Flexbox để tạo bảng giá 3 cột và highlight gói VIP */

.pricing-wrapper {
  background: #090d16;
  padding: 30px 16px;
  border-radius: 24px;
  text-align: center;
}

.title {
  color: #38bdf8;
  font-size: 24px;
  margin-bottom: 24px;
}

.pricing-container {
  /* Thêm display: flex, justify-content: center, align-items: center và gap: 20px tại đây: */

}

.price-card {
  color: white;
  text-align: center;
  width: 180px;
  border: 1px solid #3730a3;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  position: relative;
  /* Thêm background-color: #1e1b4b, border-radius: 20px, padding: 24px tại đây: */

}

.card-vip {
  /* Thêm border: 2px solid #f59e0b và transform: scale(1.05) tại đây: */

}

.tag {
  position: absolute;
  top: -10px;
  right: 12px;
  background: #f59e0b;
  color: #1e1b4b;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 9999px;
}

h3 { font-size: 16px; margin-bottom: 8px; }
.price { font-size: 24px; font-weight: 800; color: #38bdf8; margin-bottom: 8px; }
.price-vip { color: #fbbf24; }
p { font-size: 11px; color: #94a3b8; margin-bottom: 16px; }

.btn {
  width: 100%;
  padding: 8px 12px;
  background: #3730a3;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
}

.btn-vip {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #1e1b4b;
}
`,

  solutionCssCode: `.pricing-wrapper {
  background: #090d16;
  padding: 30px 16px;
  border-radius: 24px;
  text-align: center;
}

.title {
  color: #38bdf8;
  font-size: 24px;
  margin-bottom: 24px;
}

.pricing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.price-card {
  background-color: #1e1b4b;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  width: 180px;
  border: 1px solid #3730a3;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  position: relative;
}

.card-vip {
  border: 2px solid #f59e0b;
  transform: scale(1.05);
}

.tag {
  position: absolute;
  top: -10px;
  right: 12px;
  background: #f59e0b;
  color: #1e1b4b;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 9999px;
}

h3 { font-size: 16px; margin-bottom: 8px; }
.price { font-size: 24px; font-weight: 800; color: #38bdf8; margin-bottom: 8px; }
.price-vip { color: #fbbf24; }
p { font-size: 11px; color: #94a3b8; margin-bottom: 16px; }

.btn {
  width: 100%;
  padding: 8px 12px;
  background: #3730a3;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
}

.btn-vip {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #1e1b4b;
}`,

  tests: [
    {
      id: 'container_flex',
      description: 'Lớp .pricing-container sử dụng display: flex và gap',
      tester: (doc, win) => {
        const c = doc.querySelector('.pricing-container') as HTMLElement;
        if (!c) return false;
        const style = win.getComputedStyle(c);
        return style.display === 'flex' && parseFloat(style.gap) >= 10;
      }
    },
    {
      id: 'cards_styled',
      description: 'Các .price-card có border-radius và padding đầy đủ',
      tester: (doc, win) => {
        const card = doc.querySelector('.price-card') as HTMLElement;
        if (!card) return false;
        const style = win.getComputedStyle(card);
        return parseFloat(style.borderRadius) >= 12 && parseFloat(style.paddingTop) >= 16;
      }
    },
    {
      id: 'vip_highlight',
      description: 'Gói .card-vip có viền nổi bật (border vàng hoặc hiệu ứng scale)',
      tester: (doc, win) => {
        const vip = doc.querySelector('.card-vip') as HTMLElement;
        if (!vip) return false;
        const style = win.getComputedStyle(vip);
        const bWidth = parseFloat(style.borderTopWidth);
        return bWidth >= 2 || style.transform !== 'none';
      }
    }
  ]
};
