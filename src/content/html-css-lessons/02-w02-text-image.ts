import { Lesson } from '@/types/lesson';

export const LESSON_W02: Lesson = {
  id: 'w02-text-image',
  title: 'Tuần 2: Định Dạng Chữ & Ảnh Đại Diện',
  shortDescription: 'Làm nổi bật thông tin với thẻ in đậm, in nghiêng, highlight và chèn ảnh avatar đại diện cho trang cá nhân.',
  category: 'html-media',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 100,
  order: 2,
  week: 2,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 2**! 🖼️

Để trang cá nhân trông sinh động và chuyên nghiệp hơn, chúng ta cần:
- **Định dạng văn bản**: Thẻ \`<strong>\` để in đậm từ khóa quan trọng, \`<em>\` để in nghiêng cảm xúc, \`<mark>\` để tô vàng nổi bật.
- **Thẻ hình ảnh \`<img>\`**: Không có thẻ đóng, sử dụng thuộc tính \`src\` (đường dẫn ảnh), \`alt\` (mô tả dự phòng) và \`width\` (chiều rộng).`,

  taskInstructions: [
    'Thêm một thẻ ảnh `<img>` với `src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"` và `alt="Ảnh đại diện của tôi"`',
    'Trong đoạn văn, dùng thẻ `<strong>` để in đậm cụm từ `Kỹ sư phần mềm tương lai`',
    'Dùng thẻ `<em>` để in nghiêng câu slogan `Đam mê sáng tạo không ngừng`'
  ],

  hints: {
    level1: 'Sử dụng <img src="..." alt="...">, <strong>Chữ in đậm</strong> và <em>Chữ in nghiêng</em>',
    level2: 'Ví dụ:\n<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Ảnh đại diện của tôi" width="160">\n<p>Ước mơ của tôi là trở thành <strong>Kỹ sư phần mềm tương lai</strong> với tinh thần <em>Đam mê sáng tạo không ngừng</em>.</p>',
    solution: '<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Ảnh đại diện của tôi" width="160">\n<p>Ước mơ của tôi là trở thành <strong>Kỹ sư phần mềm tương lai</strong> với tinh thần <em>Đam mê sáng tạo không ngừng</em>.</p>'
  },

  htmlContent: `<!-- Hãy chèn ảnh đại diện và viết đoạn văn định dạng bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 30px;
  background: #f8fafc;
  color: #0f172a;
}
img {
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
  display: block;
  margin-bottom: 20px;
  max-width: 160px;
}
p {
  font-size: 16px;
  line-height: 1.8;
}
strong {
  color: #6366f1;
}
em {
  color: #0284c7;
}`,

  initialHtmlCode: `<!-- Tuần 2: Thêm ảnh đại diện và định dạng văn bản strong, em -->\n`,
  solutionHtmlCode: `<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" alt="Ảnh đại diện của tôi" width="160">
<p>Ước mơ của tôi là trở thành <strong>Kỹ sư phần mềm tương lai</strong> với tinh thần <em>Đam mê sáng tạo không ngừng</em>.</p>`,

  tests: [
    {
      id: 'w02-t1',
      description: 'Có thẻ <img> với thuộc tính src và alt hợp lệ',
      tester: (doc: Document) => {
        const img = doc.querySelector('img');
        return !!img && !!img.getAttribute('src') && !!img.getAttribute('alt');
      }
    },
    {
      id: 'w02-t2',
      description: 'Có thẻ <strong> chứa nội dung "Kỹ sư phần mềm tương lai"',
      tester: (doc: Document) => {
        const strong = doc.querySelector('strong');
        return !!strong && strong.textContent?.toLowerCase().includes('kỹ sư phần mềm tương lai') === true;
      }
    },
    {
      id: 'w02-t3',
      description: 'Có thẻ <em> chứa nội dung "Đam mê sáng tạo không ngừng"',
      tester: (doc: Document) => {
        const em = doc.querySelector('em');
        return !!em && em.textContent?.toLowerCase().includes('đam mê sáng tạo không ngừng') === true;
      }
    }
  ]
};
