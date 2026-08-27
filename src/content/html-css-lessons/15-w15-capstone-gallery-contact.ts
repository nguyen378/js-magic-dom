import { Lesson } from '@/types/lesson';

export const LESSON_W15: Lesson = {
  id: 'w15-capstone-gallery-contact',
  title: 'Buổi 15: Dự Án Cuối Khóa (3/4) — Tối Ưu Responsive & Hiệu Ứng',
  shortDescription: 'Tối ưu giao diện Responsive trên điện thoại (@media max-width: 768px) và thêm hiệu ứng :hover, transition chuyển động mượt mà cho thẻ dự án và nút bấm.',
  category: 'css-effects',
  course: 'html-css',
  track: 'w-capstone-portfolio',
  editorLanguage: 'css',
  difficulty: 'medium',
  xpReward: 150,
  order: 15,
  week: 15,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Buổi 15: Dự án cuối khóa (3/4) — Tối ưu Responsive & Hiệu ứng tương tác**! 📱✨

Hôm nay là lúc chúng ta thổi hồn vào trang web cá nhân bằng các hiệu ứng chuyển động mượt mà và tối ưu hóa trải nghiệm trên mọi kích thước màn hình:
- **Hiệu ứng Hover Card**: Thêm \`transition: 0.3s;\` và khi \`.project-card:hover\` sẽ nâng nhẹ thẻ lên (\`transform: translateY(-6px);\`) cùng tăng bóng đổ 3D.
- **Hover nút bấm**: Đổi màu nền khi rê chuột vào \`.btn:hover\`.
- **Tối ưu Mobile**: Viết \`@media (max-width: 768px)\` để chuyển đổi lưới 3 cột thành 1 cột dọc (\`.project-card { width: 100%; }\`) và menu dọc (\`.nav-menu { flex-direction: column; }\`).`,

  taskInstructions: [
    '🟢 Nhiệm vụ 1: Thêm `transition: 0.3s;` cho `.project-card` và hiệu ứng `.project-card:hover` có `transform: translateY(-6px);` và tăng `box-shadow`',
    '🟢 Nhiệm vụ 2: Thêm hiệu ứng `.btn:hover` với màu nền mới và `cursor: pointer;`',
    '🟡 Nhiệm vụ 3: Khai báo `@media (max-width: 768px)` và đặt `.project-card { width: 100%; }` để hiển thị 1 cột hoàn hảo trên điện thoại',
    '🟡 Nhiệm vụ 4: Trong `@media (max-width: 768px)`, chuyển đổi thanh `.nav-menu` thành cột dọc `flex-direction: column; text-align: center;`'
  ],

  hints: {
    level1: 'Viết transition và :hover ở phần CSS chung, sau đó viết các luật responsive bên trong @media (max-width: 768px) { ... }',
    level2: `/* Gợi ý cú pháp */
.project-card {
  transition: 0.3s;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.btn {
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #312e81;
}

@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }

  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}`,
    solution: `.project-card {
  transition: 0.3s;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.btn {
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #312e81;
}

@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }

  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}`
  },

  htmlContent: `<nav class="site-nav" style="padding: 16px 20px; background: white; margin-bottom: 20px; border-radius: 12px;">
  <ul class="nav-menu" style="display: flex; gap: 20px; list-style: none; margin: 0; padding: 0;">
    <li><a href="#" style="text-decoration: none; color: #4f46e5; font-weight: bold;">Trang Chủ</a></li>
    <li><a href="#" style="text-decoration: none; color: #475569;">Dự Án</a></li>
    <li><a href="#" style="text-decoration: none; color: #475569;">Liên Hệ</a></li>
  </ul>
</nav>

<div class="project-grid" style="display: flex; flex-wrap: wrap; gap: 20px;">
  <div class="project-card" style="width: calc(33.333% - 14px); background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); box-sizing: border-box;">
    <h3>Dự án 1</h3>
    <p style="font-size: 14px; color: #64748b;">Trang web Responsive chuẩn UI.</p>
    <button class="btn" style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px;">Chi tiết</button>
  </div>
  <div class="project-card" style="width: calc(33.333% - 14px); background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); box-sizing: border-box;">
    <h3>Dự án 2</h3>
    <p style="font-size: 14px; color: #64748b;">Game tương tác JavaScript.</p>
    <button class="btn" style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px;">Chi tiết</button>
  </div>
  <div class="project-card" style="width: calc(33.333% - 14px); background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); box-sizing: border-box;">
    <h3>Dự án 3</h3>
    <p style="font-size: 14px; color: #64748b;">Ứng dụng ghi chú cá nhân.</p>
    <button class="btn" style="background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px;">Chi tiết</button>
  </div>
</div>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: #f1f5f9;
  padding: 20px;
  margin: 0;
}`,

  initialCssCode: `/* Buổi 15: Thêm hiệu ứng :hover cho .project-card, .btn và Media Query @media (max-width: 768px) */
.project-card {

}

.project-card:hover {

}

.btn {

}

.btn:hover {

}

@media (max-width: 768px) {
  .project-card {

  }

  .nav-menu {

  }
}
`,
  solutionCssCode: `.project-card {
  transition: 0.3s;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.btn {
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: #312e81;
}

@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }

  .nav-menu {
    flex-direction: column;
    text-align: center;
  }
}
`,

  tests: [
    {
      id: 'w15-t1',
      description: 'Nhiệm vụ 1: .project-card có transition và .project-card:hover có transform: translateY',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.project-card:hover') && styles.includes('translateY');
      }
    },
    {
      id: 'w15-t2',
      description: 'Nhiệm vụ 2: .btn:hover có thay đổi màu nền background-color',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('.btn:hover') && styles.includes('background');
      }
    },
    {
      id: 'w15-t3',
      description: 'Nhiệm vụ 3: Trong @media (max-width: 768px), .project-card có width: 100%',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('@media') && styles.includes('max-width') && styles.includes('100%');
      }
    },
    {
      id: 'w15-t4',
      description: 'Nhiệm vụ 4: Trong @media (max-width: 768px), .nav-menu có flex-direction: column',
      tester: (doc: Document) => {
        const styles = Array.from(doc.querySelectorAll('style')).map((s) => s.textContent).join('\n');
        return styles.includes('nav-menu') && styles.includes('column');
      }
    }
  ]
};
