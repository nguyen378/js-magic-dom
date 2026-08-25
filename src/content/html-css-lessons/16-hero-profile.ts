import { Lesson } from '@/types/lesson';

export const lessonHtml16: Lesson = {
  id: 'proj-html-css-01',
  title: 'P01. Đồ Án: Thẻ Hồ Sơ Dũng Sĩ (Hero Profile Card)',
  shortDescription: 'Xây dựng một thẻ card hồ sơ nhân vật hoàn chỉnh kết hợp HTML semantic, ảnh đại diện và nút bấm',
  category: 'html-css-project',
  course: 'html-css',
  track: 'html-css-capstone',
  editorLanguage: 'html',
  difficulty: 'hard',
  xpReward: 100,
  order: 16,

  story: `👑 **Đồ Án Thực Chiến 1: Thẻ Hồ Sơ Dũng Sĩ Hoàng Gia**

Chúc mừng bạn đã hoàn thành phần lớn kiến thức nền tảng HTML & CSS! Bây giờ là lúc tổng hợp mọi kỹ năng để tạo ra một thành phẩm thực tế: **Thẻ Hồ Sơ Dũng Sĩ (Profile Card)**.

Một thẻ Profile chuẩn gồm có:
1. Chiếc hộp bọc ngoài \`<div class="profile-card">\`.
2. Ảnh đại diện \`<img class="avatar" src="..." alt="...">\`.
3. Tên nhân vật \`<h2>Arthur Pendragon</h2>\`.
4. Danh hiệu \`<span class="badge">⚔️ Đại Hiệp Sĩ</span>\`.
5. Đoạn giới thiệu kỹ năng \`<p>\` và nút bấm kết bạn \`<button class="btn-connect">\`.
`,

  taskInstructions: [
    'Tạo một thẻ bọc `<div class="profile-card">`.',
    'Bên trong, thêm ảnh đại diện `<img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="Avatar" />`.',
    'Thêm thẻ `<h2>Arthur Pendragon</h2>`.',
    'Thêm nhãn danh hiệu `<span class="badge">⚔️ Đại Hiệp Sĩ Cấp 99</span>`.',
    'Thêm đoạn văn `<p class="bio">Bậc thầy kiếm thuật ánh sáng và người bảo vệ vương quốc.</p>`.',
    'Thêm nút bấm kết bạn `<button class="btn-connect">Kết Bạn Ngay 🤝</button>`.'
  ],

  hints: {
    level1: 'Xây dựng đầy đủ các phần tử theo đúng class được gợi ý trong task.',
    level2: `<div class="profile-card">\n  <img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="Avatar" />\n  <h2>Arthur Pendragon</h2>\n  <span class="badge">⚔️ Đại Hiệp Sĩ Cấp 99</span>\n  <p class="bio">Bậc thầy kiếm thuật ánh sáng và người bảo vệ vương quốc.</p>\n  <button class="btn-connect">Kết Bạn Ngay 🤝</button>\n</div>`,
    solution: `<div class="profile-card">
  <img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="Avatar" />
  <h2>Arthur Pendragon</h2>
  <span class="badge">⚔️ Đại Hiệp Sĩ Cấp 99</span>
  <p class="bio">Bậc thầy kiếm thuật ánh sáng và người bảo vệ vương quốc.</p>
  <button class="btn-connect">Kết Bạn Ngay 🤝</button>
</div>`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: linear-gradient(135deg, #090d16 0%, #1e1b4b 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.profile-card {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  max-width: 320px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 9999px;
  object-fit: cover;
  border: 3px solid #f59e0b;
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
  margin-bottom: 14px;
}

h2 {
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-bottom: 6px;
}

.badge {
  display: inline-block;
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
  font-size: 11px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 14px;
}

.bio {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-connect {
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-connect:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(99, 102, 241, 0.6);
}
`,

  initialHtmlCode: `<!-- Đồ án: Xây dựng cấu trúc Thẻ Hồ Sơ Dũng Sĩ -->

`,

  solutionHtmlCode: `<div class="profile-card">
  <img class="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="Avatar" />
  <h2>Arthur Pendragon</h2>
  <span class="badge">⚔️ Đại Hiệp Sĩ Cấp 99</span>
  <p class="bio">Bậc thầy kiếm thuật ánh sáng và người bảo vệ vương quốc.</p>
  <button class="btn-connect">Kết Bạn Ngay 🤝</button>
</div>`,

  tests: [
    {
      id: 'has_profile_card',
      description: 'Có thẻ chứa lớp profile-card',
      tester: (doc) => {
        return doc.querySelector('.profile-card') !== null;
      }
    },
    {
      id: 'has_avatar_img',
      description: 'Có thẻ <img> đại diện với thuộc tính src hợp lệ',
      tester: (doc) => {
        const img = doc.querySelector('img');
        return img !== null && Boolean(img.getAttribute('src'));
      }
    },
    {
      id: 'has_heading_and_badge',
      description: 'Có thẻ tiêu đề tên nhân vật và nhãn danh hiệu',
      tester: (doc) => {
        const h2 = doc.querySelector('h2');
        const badge = doc.querySelector('.badge') || doc.querySelector('span');
        return h2 !== null && badge !== null;
      }
    },
    {
      id: 'has_connect_button',
      description: 'Có nút bấm kết bạn <button>',
      tester: (doc) => {
        const btn = doc.querySelector('button');
        return btn !== null;
      }
    }
  ]
};
