import { Lesson } from '@/types/lesson';

export const LESSON_W16: Lesson = {
  id: 'w16-capstone-final',
  title: 'Tuần 16 (Đồ Án GĐ 4): Hoàn Thiện, Responsive & Xuất Bản',
  shortDescription: 'Chạm đỉnh vinh quang: Tinh chỉnh hiệu ứng hover mượt mà, tối ưu Responsive trên điện thoại 100%, hoàn thiện trọn vẹn Trang Web Cá Nhân và mở khóa Huy Hiệu Tốt Nghiệp!',
  category: 'html-css-project',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'css',
  difficulty: 'hard',
  xpReward: 200,
  order: 16,
  week: 16,
  durationMinutes: 60,

  story: `🎉 **CHÚC MỪNG BẠN ĐÃ ĐẾN VỚI TUẦN 16 — BUỔI HỌC VỀ ĐÍCH CỦA KHÓA HỌC!** 🏆

Hôm nay là tiết học cuối cùng, bạn sẽ hoàn thiện những nét vẽ tinh tế nhất cho Website Cá Nhân của mình:
1. Thêm hiệu ứng hover cho tất cả các thẻ dự án và nút bấm.
2. Tối ưu Media Query trên màn hình điện thoại (chuyển các hàng ngang sang hàng dọc, canh chỉnh kích thước hoàn hảo).
3. Hoàn tất sản phẩm để sẵn sàng xuất bản và báo cáo trước lớp!`,

  taskInstructions: [
    'Thêm hiệu ứng `.project-card:hover` với `transform: translateY(-6px)` và `box-shadow: 0 12px 24px rgba(79, 70, 229, 0.2)`',
    'Thêm hiệu ứng `.btn-send:hover` với `background: #4338ca` và `transform: scale(1.03)`',
    'Thêm Media Query `@media (max-width: 768px)` để chuyển `.projects-grid` thành `flex-direction: column` trên màn hình điện thoại'
  ],

  hints: {
    level1: 'Viết .project-card:hover { transform: translateY(-6px); } và @media (max-width: 768px) { .projects-grid { flex-direction: column; } }',
    level2: 'Ví dụ mẫu:\n.project-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.2);\n}\n.btn-send:hover {\n  background: #4338ca;\n  transform: scale(1.03);\n}\n@media (max-width: 768px) {\n  .projects-grid {\n    flex-direction: column;\n  }\n}',
    solution: '.project-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.2);\n}\n.btn-send:hover {\n  background: #4338ca;\n  transform: scale(1.03);\n}\n@media (max-width: 768px) {\n  .projects-grid {\n    flex-direction: column;\n  }\n}'
  },

  htmlContent: `<div class="portfolio-page">
  <header class="navbar">
    <div class="brand">🌟 NamDev</div>
    <nav><a href="#contact" class="btn-small">Liên Hệ</a></nav>
  </header>

  <section class="hero">
    <img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Avatar">
    <h1>Nguyễn Hoàng Nam</h1>
    <p>Nhà sáng tạo web trẻ tuổi đầy nhiệt huyết</p>
  </section>

  <section class="projects">
    <h2>Dự Án Tiêu Biểu</h2>
    <div class="projects-grid">
      <div class="project-card">
        <h3>Game Vui Nhộn</h3>
        <p>Ứng dụng mini game tương tác</p>
      </div>
      <div class="project-card">
        <h3>Web Cá Nhân</h3>
        <p>Sản phẩm tốt nghiệp HTML CSS</p>
      </div>
    </div>
  </section>

  <section class="contact">
    <h2>Liên Hệ Với Tôi</h2>
    <button class="btn-send">Gửi Tin Nhắn Nhanh</button>
  </section>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #0f172a;
  color: white;
  margin: 0;
  padding: 20px;
}
.portfolio-page {
  max-width: 680px;
  margin: 0 auto;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: rgba(30, 41, 59, 0.7);
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 24px;
}
.brand {
  font-weight: bold;
  color: #38bdf8;
}
.btn-small {
  background: #6366f1;
  color: white;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
}
.hero {
  text-align: center;
  background: rgba(30, 41, 59, 0.5);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 24px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #38bdf8;
  object-fit: cover;
  margin-bottom: 12px;
}
.hero h1 {
  margin: 0 0 6px;
  color: white;
}
.hero p {
  color: #94a3b8;
  margin: 0;
}
.projects {
  background: rgba(30, 41, 59, 0.5);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 24px;
}
.projects h2, .contact h2 {
  color: #38bdf8;
  margin-top: 0;
  margin-bottom: 16px;
}
.projects-grid {
  display: flex;
  gap: 16px;
}
.project-card {
  flex: 1;
  background: #1e293b;
  padding: 20px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}
.project-card h3 {
  margin: 0 0 6px;
  color: white;
  font-size: 16px;
}
.project-card p {
  margin: 0;
  color: #94a3b8;
  font-size: 13px;
}
.contact {
  text-align: center;
  background: rgba(30, 41, 59, 0.5);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.08);
}
.btn-send {
  background: #6366f1;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}`,

  initialCssCode: `/* Tuần 16: Tinh chỉnh hiệu ứng hover và Media Query Responsive */
.project-card:hover {

}

.btn-send:hover {

}

@media (max-width: 768px) {
  .projects-grid {

  }
}
`,
  solutionCssCode: `.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.2);
}

.btn-send:hover {
  background: #4338ca;
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .projects-grid {
    flex-direction: column;
  }
}
`,

  tests: [
    {
      id: 'w16-t1',
      description: 'Quy tắc .project-card:hover có transform hoặc box-shadow',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.project-card:hover') && (styles.includes('translateY') || styles.includes('box-shadow'));
      }
    },
    {
      id: 'w16-t2',
      description: 'Quy tắc .btn-send:hover có transform hoặc background',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.btn-send:hover') && (styles.includes('scale') || styles.includes('background'));
      }
    },
    {
      id: 'w16-t3',
      description: 'Có Media Query @media (max-width: 768px) xử lý .projects-grid flex-direction: column',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('@media') && styles.includes('max-width') && styles.includes('column');
      }
    }
  ]
};
