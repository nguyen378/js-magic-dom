import { Lesson } from '@/types/lesson';

export const LESSON_W12: Lesson = {
  id: 'w12-responsive-basic',
  title: 'Tuần 12: Thiết Kế Responsive - Đẹp Trên Điện Thoại',
  shortDescription: 'Cột mốc quan trọng kết thúc 12 tuần kỹ năng: Sử dụng CSS Media Query @media (max-width: 768px) để tự động chuyển layout từ hàng ngang (PC) sang hàng dọc (Mobile).',
  category: 'css-flexbox',
  course: 'html-css',
  track: 'w-flexbox-responsive',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 120,
  order: 12,
  week: 12,
  durationMinutes: 60,

  story: `Chúc mừng bạn đã hoàn thành **Tuần 12 — Chạm mốc làm chủ toàn bộ kỹ năng cốt lõi**! 📱💻

Hơn 60% người dùng xem website trên điện thoại di động. Kỹ năng **Responsive Web Design** sẽ giúp trang web của bạn tự biến hóa theo kích thước màn hình:
- Cú pháp Media Query: \`@media (max-width: 768px) { ... }\`
- Khi màn hình nhỏ hơn 768px (Điện thoại/Tablet): Đổi \`flex-direction: column;\` để các cột xếp dọc gọn gàng, và đổi \`width: 100%;\` cho các thẻ ảnh.`,

  taskInstructions: [
    'Tạo khối Media Query `@media (max-width: 768px)`',
    'Bên trong Media Query, đặt `flex-direction: column` cho `.hero-container` để ảnh và chữ xếp dọc trên điện thoại',
    'Bên trong Media Query, đặt `text-align: center` cho `.hero-text` và `width: 100%` cho `.btn-main`'
  ],

  hints: {
    level1: 'Viết @media (max-width: 768px) { .hero-container { flex-direction: column; } .hero-text { text-align: center; } .btn-main { width: 100%; } }',
    level2: 'Ví dụ:\n@media (max-width: 768px) {\n  .hero-container {\n    flex-direction: column;\n  }\n  .hero-text {\n    text-align: center;\n  }\n  .btn-main {\n    width: 100%;\n  }\n}',
    solution: '@media (max-width: 768px) {\n  .hero-container {\n    flex-direction: column;\n  }\n  .hero-text {\n    text-align: center;\n  }\n  .btn-main {\n    width: 100%;\n  }\n}'
  },

  htmlContent: `<div class="hero-container">
  <div class="hero-image">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" alt="Avatar lớn">
  </div>
  <div class="hero-text">
    <span class="badge">Sẵn Sàng Nhận Dự Án</span>
    <h1>Xin chào, tôi là Minh Anh</h1>
    <p>Tôi là một nhà sáng tạo trẻ với niềm yêu thích mãnh liệt dành cho thiết kế giao diện và lập trình web.</p>
    <button class="btn-main">Xem Hồ Sơ Của Tôi</button>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f8fafc;
  padding: 30px 20px;
  margin: 0;
}
.hero-container {
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 720px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
}
.hero-image img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #6366f1;
}
.badge {
  background: #e0e7ff;
  color: #4338ca;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
}
h1 {
  color: #0f172a;
  font-size: 26px;
  margin: 12px 0 8px;
}
p {
  color: #64748b;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
}
.btn-main {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}`,

  initialCssCode: `/* Tuần 12: Viết Media Query @media (max-width: 768px) để tối ưu hiển thị trên Mobile */
@media (max-width: 768px) {
  .hero-container {

  }

  .hero-text {

  }

  .btn-main {

  }
}
`,
  solutionCssCode: `@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
  }

  .hero-text {
    text-align: center;
  }

  .btn-main {
    width: 100%;
  }
}
`,

  tests: [
    {
      id: 'w12-t1',
      description: 'Có khai báo @media (max-width: 768px)',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('@media') && styles.includes('max-width');
      }
    },
    {
      id: 'w12-t2',
      description: 'Trong media query, .hero-container có flex-direction: column',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('flex-direction') && styles.includes('column');
      }
    },
    {
      id: 'w12-t3',
      description: 'Trong media query, .hero-text hoặc .btn-main được căn chỉnh responsive',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('text-align') || styles.includes('width');
      }
    }
  ]
};
