import { Lesson } from '@/types/lesson';

export const LESSON_W01: Lesson = {
  id: 'w01-first-page',
  title: 'Tuần 1: Lời Chào Đầu Tiên & Thẻ Tiêu Đề',
  shortDescription: 'Khởi đầu hành trình: Tự tay viết cấu trúc HTML, thẻ tiêu đề H1-H2 và đoạn văn giới thiệu bản thân.',
  category: 'html-basic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 100,
  order: 1,
  week: 1,
  durationMinutes: 60,

  story: `Chào mừng bạn đến với **Tuần 1: Hành trình 16 tuần tự tay xây dựng Website Cá Nhân**! 🌐

Mỗi trang web trên thế giới đều bắt đầu từ ngôn ngữ **HTML** (HyperText Markup Language) — bộ khung xương tạo nên nội dung cho website.
- Thẻ \`<h1>\` là tiêu đề lớn nhất và quan trọng nhất trang web (mỗi trang nên có 1 thẻ H1).
- Các thẻ \`<h2>\`, \`<h3>\` dùng cho tiêu đề nhỏ hơn.
- Thẻ \`<p>\` (paragraph) dùng để viết đoạn văn bản thông thường.`,

  taskInstructions: [
    'Tạo một thẻ `<h1>` với nội dung: `Xin chào, tôi là Web Developer tương lai!`',
    'Tạo một thẻ `<h2>` làm tiêu đề phụ với nội dung: `Hành Trình Xây Dựng Trang Cá Nhân`',
    'Tạo một thẻ `<p>` giới thiệu ngắn về bản thân (ít nhất 10 ký tự).'
  ],

  hints: {
    level1: 'Sử dụng cú pháp thẻ mở và thẻ đóng: <h1>Nội dung</h1>, <h2>Nội dung</h2> và <p>Nội dung</p>',
    level2: 'Ví dụ:\n<h1>Xin chào, tôi là Web Developer tương lai!</h1>\n<h2>Hành Trình Xây Dựng Trang Cá Nhân</h2>\n<p>Tôi rất hào hứng bắt đầu học HTML & CSS!</p>',
    solution: '<h1>Xin chào, tôi là Web Developer tương lai!</h1>\n<h2>Hành Trình Xây Dựng Trang Cá Nhân</h2>\n<p>Tôi rất hào hứng bắt đầu hành trình tự xây dựng website cá nhân của mình!</p>'
  },

  htmlContent: `<!-- Hãy viết các thẻ HTML của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 30px;
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
  color: #1e293b;
}
h1 {
  color: #4f46e5;
  font-size: 28px;
  margin-bottom: 8px;
}
h2 {
  color: #0ea5e9;
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 16px;
}
p {
  line-height: 1.6;
  color: #475569;
  font-size: 16px;
}`,

  initialHtmlCode: `<!-- Tuần 1: Viết thẻ h1, h2 và p đầu tiên của bạn -->\n`,
  solutionHtmlCode: `<h1>Xin chào, tôi là Web Developer tương lai!</h1>
<h2>Hành Trình Xây Dựng Trang Cá Nhân</h2>
<p>Tôi rất hào hứng bắt đầu hành trình tự xây dựng website cá nhân của mình!</p>`,

  tests: [
    {
      id: 'w01-t1',
      description: 'Có thẻ <h1> chứa nội dung chính xác "Xin chào, tôi là Web Developer tương lai!"',
      tester: (doc: Document) => {
        const h1 = doc.querySelector('h1');
        return !!h1 && h1.textContent?.trim().toLowerCase().includes('xin chào, tôi là web developer');
      }
    },
    {
      id: 'w01-t2',
      description: 'Có thẻ <h2> chứa tiêu đề phụ "Hành Trình Xây Dựng Trang Cá Nhân"',
      tester: (doc: Document) => {
        const h2 = doc.querySelector('h2');
        return !!h2 && h2.textContent?.trim().toLowerCase().includes('hành trình');
      }
    },
    {
      id: 'w01-t3',
      description: 'Có thẻ <p> chứa đoạn văn giới thiệu bản thân (ít nhất 10 ký tự)',
      tester: (doc: Document) => {
        const p = doc.querySelector('p');
        return !!p && (p.textContent?.trim().length || 0) >= 10;
      }
    }
  ]
};
