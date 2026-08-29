import { Lesson } from '@/types/lesson';

export const lesson01: Lesson = {
  id: '01-select-element',
  title: '01. Tìm Phần Tử Đầu Tiên',
  shortDescription: 'Làm quen với DOM và cách chọn một phần tử bằng ID',
  category: 'selector',
  difficulty: 'easy',
  xpReward: 50,
  order: 1,
  
  story: `Chào mừng bạn đến với **Xứ Sở Diệu Kỳ JavaScript**! 🏰

Khi lướt web, trình duyệt biến toàn bộ mã HTML thành một cây các đối tượng gọi là **DOM (Document Object Model)**. 

Để điều khiển hoặc thay đổi bất cứ thứ gì trên trang web, câu thần chú đầu tiên bạn cần học là **chọn đúng phần tử**.

Hàm thông dụng nhất để tìm một phần tử có \`id\` cụ thể là:
\`\`\`javascript
const phanTu = document.getElementById("ten-id-cua-phan-tu");
\`\`\`

💡 **Hiệu ứng đặc biệt**: Khi bạn dùng \`console.log(phanTu)\`, phần tử đó trên màn hình sẽ **phát sáng viền vàng**, và thẻ HTML của nó sẽ hiện ra trong **Bảng Điều Khiển Console** ở góc dưới!
`,

  taskInstructions: [
    'Tìm phần tử tiêu đề có id là `"magic-title"` bằng lệnh `document.getElementById("magic-title")`.',
    'Lưu phần tử đó vào một biến có tên là `titleElement`.',
    'Dùng `console.log(titleElement)` để in phần tử vừa tìm được ra bảng điều khiển Console.'
  ],

  hints: {
    level1: 'Sử dụng lệnh `document.getElementById("magic-title")`.',
    level2: 'Khai báo biến: `const titleElement = document.getElementById("magic-title");`',
    solution: `const titleElement = document.getElementById("magic-title");\nconsole.log(titleElement);`
  },

  htmlContent: `
<div class="card text-center">
  <h1 id="magic-title" class="title">✨ Chiếc Cúp Phép Thuật ✨</h1>
  <p class="subtitle">Hãy dùng JavaScript để đánh thức chiếc cúp này nhé!</p>
  <div class="trophy">🏆</div>
</div>`,

  cssContent: `
.card {
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  padding: 30px;
  border-radius: 16px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
}
.title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
  transition: all 0.3s;
}
.subtitle {
  font-size: 14px;
  opacity: 0.9;
}
.trophy {
  font-size: 64px;
  margin-top: 14px;
  animation: float 2s ease-in-out infinite alternate;
}
@keyframes float {
  from { transform: translateY(0); }
  to { transform: translateY(-8px); }
}`,

  initialJsCode: `// Nhiệm vụ: Tìm phần tử có id "magic-title" và in ra bảng điều khiển Console!

// Bước 1: Khai báo biến titleElement và lấy phần tử bằng document.getElementById
const titleElement = document.getElementById("magic-title");

// Bước 2: In biến titleElement ra console bằng console.log()
console.log(titleElement);
`,

  solutionJsCode: `const titleElement = document.getElementById("magic-title");
console.log(titleElement);`,

  tests: [
    {
      id: 'find_element',
      description: 'Phần tử tiêu đề có id "magic-title" tồn tại trong DOM',
      tester: (doc) => {
        const el = doc.getElementById('magic-title');
        return el !== null;
      }
    },
    {
      id: 'select_element',
      description: 'Đã tìm phần tử #magic-title và lưu vào biến titleElement',
      tester: (doc, win) => {
        const el = doc.getElementById('magic-title');
        const capturedLogs = win.__capturedLogs || [];
        const hasLogged = capturedLogs.some((l) => 
          l.args && l.args.some((arg) => {
            if (arg && typeof arg === 'object') {
              const elArg = arg as { id?: string; nodeType?: number };
              if (elArg.id === 'magic-title') return true;
            }
            if (typeof arg === 'string' && (arg.includes('magic-title') || arg.includes('Chiếc Cúp'))) {
              return true;
            }
            return false;
          })
        );
        return Boolean(el !== null && (hasLogged || (el && el.classList.contains('js-magic-highlight'))));
      }
    },
    {
      id: 'logged_title_element',
      description: 'Lệnh console.log đã in đúng phần tử #magic-title ra bảng điều khiển Console',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        const hasLoggedTitle = capturedLogs.some((l) => 
          l.args && l.args.some((arg) => {
            if (arg && typeof arg === 'object') {
              const el = arg as { id?: string; nodeType?: number };
              if (el.id === 'magic-title') return true;
            }
            if (typeof arg === 'string' && (arg.includes('magic-title') || arg.includes('Chiếc Cúp'))) {
              return true;
            }
            return false;
          })
        );
        const el = doc.getElementById('magic-title');
        return Boolean(hasLoggedTitle || (el !== null && el.classList.contains('js-magic-highlight')));
      }
    }
  ]
};
