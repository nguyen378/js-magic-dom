import { Lesson } from '@/types/lesson';

export const lesson05: Lesson = {
  id: '05-change-attribute',
  title: '05. Chiếc Gương Biến Hình',
  shortDescription: 'Thay đổi thuộc tính thẻ HTML với element.src và setAttribute',
  category: 'attribute',
  difficulty: 'easy',
  xpReward: 50,
  order: 5,
  
  story: `Chào mừng bạn đến với Phòng Thử Đồ Siêu Anh Hùng! 🦸‍♂️

Ngoài nội dung chữ và màu sắc, các thẻ HTML còn có các **thuộc tính (attributes)** rất quan trọng:
* Thẻ \`<img>\` có thuộc tính **\`src\`** chứa đường link ảnh.
* Thẻ \`<a>\` có thuộc tính **\`href\`** chứa đường link trang web.

Trong JavaScript, bạn có thể thay đổi ảnh đại diện hoặc thuộc tính rất dễ dàng:
\`\`\`javascript
const hinhAnh = document.getElementById("avatar");
hinhAnh.src = "https://example.com/anh-moi.png";
\`\`\`

Hãy dùng câu thần chú JavaScript để biến nhân vật của chúng ta thành **Siêu Anh Hùng** nhé!
`,

  taskInstructions: [
    'Tìm thẻ hình ảnh có id là `"hero-avatar"`.',
    'Đổi thuộc tính `src` của nó thành `"https://api.iconify.design/noto:superhero.svg"`.',
    'Tìm thẻ trạng thái có id là `"hero-status"` và đổi `innerText` thành `"Trạng thái: Siêu Anh Hùng!"`.'
  ],

  hints: {
    level1: 'Dùng `document.getElementById("hero-avatar")` và gán thuộc tính `.src`.',
    level2: `const avatar = document.getElementById("hero-avatar");
avatar.src = "https://api.iconify.design/noto:superhero.svg";
const status = document.getElementById("hero-status");
status.innerText = "Trạng thái: Siêu Anh Hùng!";`,
    solution: `const avatar = document.getElementById("hero-avatar");
avatar.src = "https://api.iconify.design/noto:superhero.svg";

const status = document.getElementById("hero-status");
status.innerText = "Trạng thái: Siêu Anh Hùng!";`
  },

  htmlContent: `
<div class="hero-card">
  <div class="avatar-wrapper">
    <img id="hero-avatar" class="avatar-img" src="https://api.iconify.design/noto:boy.svg" alt="Avatar Nhân Vật" />
  </div>
  <h3 id="hero-name" class="hero-name">Cậu Bé Bình Thường</h3>
  <p id="hero-status" class="hero-status">Trạng thái: Chưa biến hình</p>
</div>`,

  cssContent: `
.hero-card {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  color: white;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(49, 46, 129, 0.4);
}
.avatar-wrapper {
  width: 110px;
  height: 110px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 4px solid #f59e0b;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
}
.avatar-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.hero-name {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 6px;
}
.hero-status {
  font-size: 14px;
  color: #cbd5e1;
  font-weight: 600;
}`,

  initialJsCode: `// Nhiệm vụ: Đổi ảnh hero-avatar và cập nhật dòng chữ hero-status!

// Bước 1: Lấy thẻ ảnh hero-avatar và đổi .src
const avatar = document.getElementById("hero-avatar");


// Bước 2: Lấy thẻ hero-status và đổi .innerText thành "Trạng thái: Siêu Anh Hùng!"

`,

  solutionJsCode: `const avatar = document.getElementById("hero-avatar");
avatar.src = "https://api.iconify.design/noto:superhero.svg";

const status = document.getElementById("hero-status");
status.innerText = "Trạng thái: Siêu Anh Hùng!";`,

  tests: [
    {
      id: 'find_avatar',
      description: 'Phần tử ảnh #hero-avatar tồn tại trong DOM',
      tester: (doc) => {
        const el = doc.getElementById('hero-avatar');
        return el !== null;
      }
    },
    {
      id: 'avatar_src_changed',
      description: 'Ảnh #hero-avatar đã được đổi src thành siêu anh hùng (chứa superhero.svg)',
      tester: (doc) => {
        const img = doc.getElementById('hero-avatar') as HTMLImageElement;
        if (!img) return false;
        return (img.src && img.src.includes('superhero')) || (img.getAttribute('src')?.includes('superhero') ?? false);
      }
    },
    {
      id: 'status_text_updated',
      description: 'Dòng chữ #hero-status đã đổi thành "Trạng thái: Siêu Anh Hùng!"',
      tester: (doc) => {
        const status = doc.getElementById('hero-status');
        if (!status) return false;
        return status.innerText.includes('Siêu Anh Hùng');
      }
    }
  ]
};
