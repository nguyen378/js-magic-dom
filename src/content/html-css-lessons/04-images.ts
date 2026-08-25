import { Lesson } from '@/types/lesson';

export const lessonHtml04: Lesson = {
  id: 'html04-images',
  title: 'H04. Triệu Hồi Hình Ảnh (Thẻ img)',
  shortDescription: 'Hiển thị hình ảnh trên trang web với thẻ tự đóng img, thuộc tính src và alt',
  category: 'html-media',
  course: 'html-css',
  track: 'html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 50,
  order: 4,

  story: `Một trang web sinh động không thể thiếu hình ảnh minh họa!

Thẻ \`<img>\` là **thẻ tự đóng** (không có thẻ đóng \`</img>\`). Thẻ này bắt buộc cần có 2 thuộc tính quan trọng:
1. \`src\` (Source): Đường link URL hoặc đường dẫn tệp ảnh.
2. \`alt\` (Alternative text): Đoạn văn bản mô tả bức ảnh (rất quan trọng khi ảnh bị lỗi hoặc cho người khiếm thị sử dụng máy đọc màn hình).

Ví dụ:
\`\`\`html
<img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=300" alt="Bức tranh pháp thuật" />
\`\`\`
`,

  taskInstructions: [
    'Tạo một thẻ `<img>`.',
    'Gán thuộc tính `src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400"` (Hình ảnh dải ngân hà huyền bí).',
    'Gán thuộc tính `alt="Dải ngân hà phép thuật"`.'
  ],

  hints: {
    level1: 'Thẻ img tự đóng: <img src="..." alt="..." />',
    level2: `<img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400" alt="Dải ngân hà phép thuật" />`,
    solution: `<img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400" alt="Dải ngân hà phép thuật" />`
  },

  htmlContent: ``,
  cssContent: `
body {
  background: #090d16;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
img {
  width: 280px;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid #6366f1;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.05);
}
`,

  initialHtmlCode: `<!-- Nhiệm vụ: Tạo thẻ <img> với src và alt theo hướng dẫn -->

`,

  solutionHtmlCode: `<img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400" alt="Dải ngân hà phép thuật" />`,

  tests: [
    {
      id: 'has_img',
      description: 'Có thẻ <img> xuất hiện trong trang',
      tester: (doc) => {
        return doc.querySelector('img') !== null;
      }
    },
    {
      id: 'correct_src',
      description: 'Thẻ <img> có thuộc tính src hợp lệ chứa link ảnh',
      tester: (doc) => {
        const img = doc.querySelector('img');
        return img !== null && img.getAttribute('src')?.includes('unsplash.com') === true;
      }
    },
    {
      id: 'correct_alt',
      description: 'Thẻ <img> có thuộc tính alt mô tả ảnh',
      tester: (doc) => {
        const img = doc.querySelector('img');
        return img !== null && Boolean(img.getAttribute('alt')?.trim());
      }
    }
  ]
};
