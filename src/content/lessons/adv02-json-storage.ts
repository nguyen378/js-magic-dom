import { Lesson } from '@/types/lesson';

export const lessonAdv02: Lesson = {
  id: 'adv02-json-storage',
  title: 'ES02. Hộp Lưu Trữ JSON & LocalStorage',
  shortDescription: 'Làm việc với định dạng dữ liệu JSON.stringify, JSON.parse và lưu trữ dữ liệu vĩnh viễn',
  category: 'storage',
  track: 'advanced',
  difficulty: 'medium',
  xpReward: 90,
  order: 2,

  story: `**JSON (JavaScript Object Notation)** là ngôn ngữ giao tiếp dữ liệu chuẩn quốc tế giữa trình duyệt và máy chủ. 📦🌐

1. **\`JSON.stringify(object)\`**: Đóng gói đối tượng JavaScript thành chuỗi văn bản JSON (để gửi qua mạng hoặc lưu vào LocalStorage).
\`\`\`javascript
const user = { name: "An", age: 14 };
const jsonString = JSON.stringify(user); // '{"name":"An","age":14}'
\`\`\`

2. **\`JSON.parse(jsonString)\`**: Mở gói chuỗi JSON trở lại thành đối tượng JavaScript thực tế.
\`\`\`javascript
const parsedObj = JSON.parse(jsonString); // { name: "An", age: 14 }
\`\`\`
`,

  taskInstructions: [
    'Cho sẵn hồ sơ người chơi: `const gameData = { username: "CyberKnight", highscore: 950 };`.',
    'Chuyển đổi `gameData` sang chuỗi JSON: `const savedString = JSON.stringify(gameData);`.',
    'Giải mã chuỗi `savedString` ngược lại thành đối tượng: `const restoredData = JSON.parse(savedString);`.',
    'In `restoredData.username` và `restoredData.highscore` ra console bằng `console.log()`.'
  ],

  hints: {
    level1: 'Dùng `JSON.stringify(gameData)` rồi `JSON.parse(savedString)`.',
    level2: `const gameData = { username: "CyberKnight", highscore: 950 };
const savedString = JSON.stringify(gameData);
const restoredData = JSON.parse(savedString);

console.log(restoredData.username);
console.log(restoredData.highscore);`,
    solution: `const gameData = { username: "CyberKnight", highscore: 950 };
const savedString = JSON.stringify(gameData);
const restoredData = JSON.parse(savedString);

console.log(restoredData.username);
console.log(restoredData.highscore);`
  },

  htmlContent: `
<div class="storage-vault">
  <div class="vault-badge">💾 KÉT SẮT LƯU TRỮ JSON DATA</div>
  <div class="vault-screen">
    <div class="vault-icon">🗄️</div>
    <div id="vault-status" class="vault-status">Dữ liệu đã được mã hóa JSON & sẵn sàng lưu trữ!</div>
  </div>
  <p class="vault-tip">Kết quả JSON.parse sẽ được trích xuất tại Console bên dưới!</p>
</div>`,

  cssContent: `
.storage-vault {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #0ea5e9;
  box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.3);
}
.vault-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  color: #7dd3fc;
  background: rgba(14, 165, 233, 0.2);
  border: 1px solid #0ea5e9;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
}
.vault-screen {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}
.vault-icon {
  font-size: 44px;
}
.vault-status {
  font-size: 13px;
  font-weight: 700;
  color: #38bdf8;
}
.vault-tip {
  font-size: 12px;
  color: #94a3b8;
}`,

  initialJsCode: `const gameData = { username: "CyberKnight", highscore: 950 };

// Bước 1: Dùng JSON.stringify(gameData) lưu vào biến savedString


// Bước 2: Dùng JSON.parse(savedString) giải mã vào biến restoredData


// Bước 3: In restoredData.username và restoredData.highscore ra console

`,

  solutionJsCode: `const gameData = { username: "CyberKnight", highscore: 950 };
const savedString = JSON.stringify(gameData);
const restoredData = JSON.parse(savedString);

console.log(restoredData.username);
console.log(restoredData.highscore);`,

  tests: [
    {
      id: 'json_parse_logged',
      description: 'Lệnh console.log đã in đúng username "CyberKnight" và highscore 950 sau khi giải mã JSON',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        const hasUsername = capturedLogs.some((l) =>
          l.args && l.args.some((arg) => String(arg).includes('CyberKnight'))
        );
        const hasScore = capturedLogs.some((l) =>
          l.args && l.args.some((arg) => Number(arg) === 950 || String(arg).includes('950'))
        );
        return hasUsername && hasScore;
      }
    }
  ]
};
