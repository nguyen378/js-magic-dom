import { Lesson } from '@/types/lesson';

export const lessonAdv03: Lesson = {
  id: 'adv03-promise',
  title: 'ES03. Lời Hứa Bất Đồng Bộ (Promise)',
  shortDescription: 'Xử lý các tác vụ bất đồng bộ (Async) dễ dàng với Promise, resolve() và .then()',
  category: 'async',
  track: 'advanced',
  difficulty: 'hard',
  xpReward: 95,
  order: 3,

  story: `Trong lập trình web, có những tác vụ cần thời gian chờ đợi (tải ảnh, lấy dữ liệu mạng). Để trang web không bị đơ giật, JavaScript sử dụng **Bất đồng bộ (Asynchronous)**! ⏳⚡

**Promise (Lời Hứa)** đại diện cho một kết quả trong tương lai:
1. **Khởi tạo Promise**:
\`\`\`javascript
const taskPromise = new Promise((resolve, reject) => {
  // Khi hoàn thành thành công:
  resolve("Dữ liệu đã tải xong!");
});
\`\`\`

2. **Hứng kết quả bằng \`.then()\`**:
\`\`\`javascript
taskPromise.then((data) => {
  console.log(data); // "Dữ liệu đã tải xong!"
});
\`\`\`
`,

  taskInstructions: [
    'Tạo một Promise: `const summonDragon = new Promise((resolve) => { resolve("Rồng Thần đã thức tỉnh! 🐉"); });`.',
    'Sử dụng `.then()` để nhận kết quả và in ra console: `summonDragon.then((msg) => { console.log(msg); });`.'
  ],

  hints: {
    level1: 'Dùng `new Promise((resolve) => resolve(...))` và `.then(...)`.',
    level2: `const summonDragon = new Promise((resolve) => {
  resolve("Rồng Thần đã thức tỉnh! 🐉");
});

summonDragon.then((msg) => {
  console.log(msg);
});`,
    solution: `const summonDragon = new Promise(function(resolve) {
  resolve("Rồng Thần đã thức tỉnh! 🐉");
});

summonDragon.then(function(msg) {
  console.log(msg);
});`
  },

  htmlContent: `
<div class="altar-container">
  <div class="altar-badge">🔮 BÀN THỜ TRIỆU HỒI PROMISE</div>
  <div class="dragon-egg">
    <div class="egg-icon">🥚</div>
    <div id="egg-status" class="egg-status">Đang tích tụ năng lượng triệu hồi...</div>
  </div>
  <p class="altar-tip">Khi Promise được giải quyết (Resolve), lời nhắn của Rồng Thần sẽ hiện ở Console!</p>
</div>`,

  cssContent: `
.altar-container {
  background: linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%);
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #a855f7;
  box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.4);
}
.altar-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  color: #e9d5ff;
  background: rgba(168, 85, 247, 0.2);
  border: 1px solid #a855f7;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
}
.dragon-egg {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}
.egg-icon {
  font-size: 48px;
  animation: pulse 2s infinite ease-in-out;
}
.egg-status {
  font-size: 13px;
  font-weight: bold;
  color: #c084fc;
}
.altar-tip {
  font-size: 12px;
  color: #cbd5e1;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`,

  initialJsCode: `// Nhiệm vụ: Tạo Promise summonDragon giải quyết với "Rồng Thần đã thức tỉnh! 🐉" và hứng bằng .then()

// Bước 1: Khai báo summonDragon với new Promise((resolve) => { resolve(...); })


// Bước 2: Gọi summonDragon.then(...) và console.log(msg)

`,

  solutionJsCode: `const summonDragon = new Promise(function(resolve) {
  resolve("Rồng Thần đã thức tỉnh! 🐉");
});

summonDragon.then(function(msg) {
  console.log(msg);
});`,

  tests: [
    {
      id: 'promise_resolved_and_logged',
      description: 'Lệnh console.log bên trong .then() đã in đúng lời triệu hồi Rồng Thần',
      tester: async (doc, win) => {
        // Allow microtask queue to process
        await new Promise((r) => setTimeout(r, 100));
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) =>
          l.args && l.args.some((arg) => {
            const str = String(arg);
            return str.includes('Rồng Thần') || str.includes('thức tỉnh');
          })
        );
      }
    }
  ]
};
