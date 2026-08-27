import { Lesson } from '@/types/lesson';

export const LESSON_B01_01: Lesson = {
  id: 'b01-01',
  title: 'Bài 1.1 (Cơ bản): Tiêu Đề Và Đoạn Văn',
  shortDescription: 'Tạo thẻ tiêu đề chính <h1> và thẻ đoạn văn <p> đầu tiên trên trang web.',
  category: 'html-basic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 1,
  week: 1,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 1.1: Tiêu đề và Đoạn văn**! 🌐

Mỗi trang web đều bắt đầu từ các khối nội dung cơ bản:
- **Thẻ tiêu đề \`<h1>\`**: Dùng cho tiêu đề chính, quan trọng nhất của trang.
- **Thẻ đoạn văn \`<p>\`**: Dùng để viết các câu văn, đoạn giới thiệu thông thường.`,

  taskInstructions: [
    'Tạo 1 thẻ `<h1>` có nội dung chính xác: `Trang web của tôi`',
    'Tạo 1 thẻ `<p>` có nội dung: `Tôi là học sinh lớp 8 đang học lập trình web.`'
  ],

  hints: {
    level1: 'Sử dụng cú pháp thẻ mở và thẻ đóng: <h1>Nội dung</h1> và <p>Nội dung</p>',
    level2: 'Ví dụ:\n<h1>Trang web của tôi</h1>\n<p>Tôi là học sinh lớp 8 đang học lập trình web.</p>',
    solution: '<h1>Trang web của tôi</h1>\n<p>Tôi là học sinh lớp 8 đang học lập trình web.</p>'
  },

  htmlContent: `<!-- Hãy viết thẻ h1 và p của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
}
h1 {
  color: #4f46e5;
  font-size: 26px;
  margin-bottom: 12px;
}
p {
  color: #475569;
  font-size: 16px;
  line-height: 1.6;
}`,

  initialHtmlCode: `<!-- Bài 1.1: Viết 1 thẻ h1 và 1 thẻ p -->\n`,
  solutionHtmlCode: `<h1>Trang web của tôi</h1>
<p>Tôi là học sinh lớp 8 đang học lập trình web.</p>`,

  tests: [
    {
      id: 'b01-01-t1',
      description: 'Có thẻ <h1> chứa nội dung "Trang web của tôi"',
      tester: (doc: Document) => {
        const h1 = doc.querySelector('h1');
        return !!h1 && h1.textContent?.trim().toLowerCase().includes('trang web của tôi') === true;
      }
    },
    {
      id: 'b01-01-t2',
      description: 'Có thẻ <p> chứa nội dung "Tôi là học sinh lớp 8 đang học lập trình web."',
      tester: (doc: Document) => {
        const p = doc.querySelector('p');
        return !!p && p.textContent?.trim().toLowerCase().includes('tôi là học sinh lớp 8 đang học lập trình web') === true;
      }
    }
  ]
};

export const LESSON_B01_02: Lesson = {
  id: 'b01-02',
  title: 'Bài 1.2 (Cơ bản): Định Dạng In Đậm & In Nghiêng',
  shortDescription: 'Sử dụng thẻ <b> để in đậm, thẻ <i> để in nghiêng và thẻ <hr> để tạo đường kẻ ngang phân cách.',
  category: 'html-basic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'easy',
  xpReward: 30,
  order: 2,
  week: 1,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 1.2: Định dạng văn bản với In đậm & In nghiêng**! ✍️

Để nhấn mạnh các từ khóa quan trọng trong đoạn văn:
- Thẻ \`<b>\` (hoặc \`<strong>\`): In đậm từ khóa nổi bật.
- Thẻ \`<i>\` (hoặc \`<em>\`): In nghiêng từ ngữ giàu cảm xúc.
- Thẻ \`<hr>\`: Tạo đường kẻ ngang (Horizontal Rule) ngăn cách giữa các đoạn.`,

  taskInstructions: [
    'Dùng thẻ `<b>` để in đậm từ "HTML"',
    'Dùng thẻ `<i>` để in nghiêng từ "dễ học"',
    'Thêm thẻ đường kẻ `<hr>` ở dưới đoạn văn'
  ],

  hints: {
    level1: 'Đặt từ cần in đậm vào giữa <b>...</b>, từ cần in nghiêng vào giữa <i>...</i> và thêm thẻ tự đóng <hr>',
    level2: 'Ví dụ:\n<p>Học <b>HTML</b> rất <i>dễ học</i> và trực quan.</p>\n<hr>',
    solution: '<p>Học <b>HTML</b> rất <i>dễ học</i> và trực quan.</p>\n<hr>'
  },

  htmlContent: `<p>Học HTML rất dễ học và trực quan.</p>`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
  color: #1e293b;
  font-size: 16px;
}
b, strong {
  color: #ea580c;
}
i, em {
  color: #7c3aed;
}
hr {
  border: none;
  height: 2px;
  background: #cbd5e1;
  margin-top: 20px;
}`,

  initialHtmlCode: `<p>Học HTML rất dễ học và trực quan.</p>\n`,
  solutionHtmlCode: `<p>Học <b>HTML</b> rất <i>dễ học</i> và trực quan.</p>
<hr>`,

  tests: [
    {
      id: 'b01-02-t1',
      description: 'Từ "HTML" nằm trong thẻ <b> hoặc <strong>',
      tester: (doc: Document) => {
        const b = doc.querySelector('b, strong');
        return !!b && b.textContent?.trim().toLowerCase().includes('html') === true;
      }
    },
    {
      id: 'b01-02-t2',
      description: 'Từ "dễ học" nằm trong thẻ <i> hoặc <em>',
      tester: (doc: Document) => {
        const i = doc.querySelector('i, em');
        return !!i && i.textContent?.trim().toLowerCase().includes('dễ học') === true;
      }
    },
    {
      id: 'b01-02-t3',
      description: 'Có thẻ đường kẻ <hr>',
      tester: (doc: Document) => {
        const hr = doc.querySelector('hr');
        return !!hr;
      }
    }
  ]
};

export const LESSON_B01_03: Lesson = {
  id: 'b01-03',
  title: 'Bài 1.3 (Nâng cao): Chèn Hình Ảnh Kèm Thuộc Tính',
  shortDescription: 'Sử dụng thẻ <img> với 3 thuộc tính src, alt và width.',
  category: 'html-media',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 35,
  order: 3,
  week: 1,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 1.3: Chèn hình ảnh kèm thuộc tính**! 🖼️

Thẻ \`<img>\` là thẻ đơn (không có thẻ đóng), dùng để nhúng ảnh vào trang web:
- \`src\`: Đường dẫn tới file ảnh (URL).
- \`alt\`: Văn bản mô tả dự phòng khi ảnh bị lỗi mạng.
- \`width\`: Độ rộng của ảnh (ví dụ: \`width="300"\`).`,

  taskInstructions: [
    'Dùng thẻ `<img>` chèn ảnh từ URL: `https://via.placeholder.com/300x200`',
    'Thêm thuộc tính mô tả: `alt="Ảnh nhân vật"`',
    'Thêm thuộc tính chiều rộng: `width="300"`'
  ],

  hints: {
    level1: 'Cú pháp: <img src="URL" alt="Mô tả" width="300">',
    level2: '<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">',
    solution: '<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">'
  },

  htmlContent: `<!-- Hãy viết thẻ img của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #f8fafc;
}
img {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: block;
}`,

  initialHtmlCode: `<!-- Bài 1.3: Chèn ảnh img kèm src, alt, width -->\n`,
  solutionHtmlCode: `<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">`,

  tests: [
    {
      id: 'b01-03-t1',
      description: 'Thẻ <img> có thuộc tính src hợp lệ và alt="Ảnh nhân vật"',
      tester: (doc: Document) => {
        const img = doc.querySelector('img');
        if (!img) return false;
        const src = img.getAttribute('src') || '';
        const alt = img.getAttribute('alt') || '';
        return src.length > 5 && alt.toLowerCase().includes('ảnh nhân vật');
      }
    },
    {
      id: 'b01-03-t2',
      description: 'Thẻ <img> có thuộc tính width="300"',
      tester: (doc: Document) => {
        const img = doc.querySelector('img');
        return !!img && img.getAttribute('width') === '300';
      }
    }
  ]
};

export const LESSON_B01_04: Lesson = {
  id: 'b01-04',
  title: 'Bài 1.4 (Nâng cao): Thẻ Profile Nhân Vật Mini',
  shortDescription: 'Tập hợp các thẻ <h2>, <img>, <p> in đậm và <hr> để tạo khối hồ sơ nhân vật hoàn chỉnh.',
  category: 'html-basic',
  course: 'html-css',
  track: 'w-html-foundation',
  editorLanguage: 'html',
  difficulty: 'medium',
  xpReward: 40,
  order: 4,
  week: 1,
  durationMinutes: 15,

  story: `Chào mừng bạn đến với **Bài 1.4: Thẻ Profile nhân vật mini**! 🦸‍♂️

Hãy tổng hợp toàn bộ các thẻ HTML bạn vừa học trong Buổi 1 để tạo một tấm thẻ hồ sơ nhân vật đại diện cho chính mình!`,

  taskInstructions: [
    'Tạo 1 thẻ `<h2>` chứa tên nhân vật (Ví dụ: `Hiệp Sĩ Code`)',
    'Tạo 1 thẻ `<img>` với `src="https://via.placeholder.com/300x200"`, `alt="Ảnh nhân vật"` và `width="300"`',
    'Tạo 1 thẻ `<p>` mô tả có chứa ít nhất một từ in đậm bằng thẻ `<b>`',
    'Thêm 1 thẻ `<hr>` ngăn cách ở dưới cùng'
  ],

  hints: {
    level1: 'Tạo lần lượt: <h2>...</h2>, <img ...>, <p>...<b>...</b>...</p>, <hr>',
    level2: `<!-- Gợi ý cấu trúc -->
<h2>Hiệp Sĩ Code</h2>
<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">
<p>Nhân vật sở hữu sức mạnh <b>HTML siêu đẳng</b> và tinh thần học hỏi không ngừng.</p>
<hr>`,
    solution: `<h2>Hiệp Sĩ Code</h2>
<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">
<p>Nhân vật sở hữu sức mạnh <b>HTML siêu đẳng</b> và tinh thần học hỏi không ngừng.</p>
<hr>`
  },

  htmlContent: `<!-- Hãy xây dựng khối Profile nhân vật của bạn bên dưới -->\n`,
  cssContent: `body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  padding: 24px;
  background: #0f172a;
  color: #f8fafc;
}
h2 {
  color: #38bdf8;
  font-size: 22px;
  margin-top: 0;
}
img {
  border-radius: 12px;
  border: 3px solid #38bdf8;
  margin-bottom: 12px;
  display: block;
}
p {
  color: #94a3b8;
  line-height: 1.6;
}
b, strong {
  color: #f59e0b;
}
hr {
  border: none;
  height: 2px;
  background: #334155;
  margin-top: 20px;
}`,

  initialHtmlCode: `<!-- Bài 1.4: Tạo khối hồ sơ gồm h2, img, p (chứa b) và hr -->\n`,
  solutionHtmlCode: `<h2>Hiệp Sĩ Code</h2>
<img src="https://via.placeholder.com/300x200" alt="Ảnh nhân vật" width="300">
<p>Nhân vật sở hữu sức mạnh <b>HTML siêu đẳng</b> và tinh thần học hỏi không ngừng.</p>
<hr>`,

  tests: [
    {
      id: 'b01-04-t1',
      description: 'Có thẻ <h2> chứa tên nhân vật',
      tester: (doc: Document) => {
        const h2 = doc.querySelector('h2');
        return !!h2 && (h2.textContent?.trim().length || 0) > 0;
      }
    },
    {
      id: 'b01-04-t2',
      description: 'Có thẻ <img> với thuộc tính src, alt và width',
      tester: (doc: Document) => {
        const img = doc.querySelector('img');
        return !!img && !!img.getAttribute('src') && !!img.getAttribute('alt');
      }
    },
    {
      id: 'b01-04-t3',
      description: 'Có thẻ <p> chứa từ in đậm <b> hoặc <strong>',
      tester: (doc: Document) => {
        const p = doc.querySelector('p');
        const b = p?.querySelector('b, strong');
        return !!p && !!b && (b.textContent?.trim().length || 0) > 0;
      }
    },
    {
      id: 'b01-04-t4',
      description: 'Có thẻ đường kẻ <hr>',
      tester: (doc: Document) => {
        const hr = doc.querySelector('hr');
        return !!hr;
      }
    }
  ]
};

export const B01_LESSONS: Lesson[] = [
  LESSON_B01_01,
  LESSON_B01_02,
  LESSON_B01_03,
  LESSON_B01_04,
];
