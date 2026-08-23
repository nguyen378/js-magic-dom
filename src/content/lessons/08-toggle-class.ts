import { Lesson } from '@/types/lesson';

export const lesson08: Lesson = {
  id: '08-toggle-class',
  title: '08. Bật Tắt Đèn Phòng (Dark Mode)',
  shortDescription: 'Thay đổi giao diện chuyên nghiệp với classList.toggle',
  category: 'class',
  difficulty: 'medium',
  xpReward: 70,
  order: 8,
  
  story: `Thay vì đổi từng thuộc tính màu sắc một, các lập trình viên chuyên nghiệp thường định nghĩa sẵn một lớp CSS (class) và dùng **\`classList\`** để bật/tắt nó! 💡

* \`element.classList.add("dark")\` : Thêm class
* \`element.classList.remove("dark")\` : Bỏ class
* \`element.classList.toggle("dark")\` : Tự động đảo ngược (chưa có thì thêm, có rồi thì bỏ).

Hãy cùng lập trình công tắc bật/tắt đèn cho căn phòng nhé!
`,

  taskInstructions: [
    'Tìm căn phòng `#room` và công tắc đèn `#lamp-switch`.',
    'Thêm sự kiện `click` cho công tắc `#lamp-switch`.',
    'Khi click, dùng lệnh `room.classList.toggle("dark-mode")` để chuyển đổi chế độ phòng.'
  ],

  hints: {
    level1: 'Sử dụng `room.classList.toggle("dark-mode")` trong hàm sự kiện click.',
    level2: `switchBtn.addEventListener("click", function() {\n  room.classList.toggle("dark-mode");\n});`,
    solution: `const room = document.getElementById("room");\nconst switchBtn = document.getElementById("lamp-switch");\n\nswitchBtn.addEventListener("click", function() {\n  room.classList.toggle("dark-mode");\n});`
  },

  htmlContent: `
<div id="room" class="room-box">
  <div class="bulb-wrapper">
    <div id="light-bulb" class="bulb">💡</div>
  </div>
  <h3 id="room-status">Căn Phòng Đang Sáng Trưng</h3>
  <p class="room-desc">Bấm công tắc để bật chế độ ngủ đêm!</p>
  <button id="lamp-switch" class="switch-btn">🔘 Bật / Tắt Đèn</button>
</div>`,

  cssContent: `
.room-box {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  color: #1e293b;
  transition: all 0.4s ease;
}
.bulb-wrapper {
  margin-bottom: 12px;
}
.bulb {
  font-size: 50px;
  filter: drop-shadow(0 0 15px rgba(234, 179, 8, 0.8));
  transition: filter 0.4s ease;
}
h3 {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 6px;
}
.room-desc {
  font-size: 13px;
  color: #64748b;
  margin-bottom: 20px;
}
.switch-btn {
  background: #0ea5e9;
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(14, 165, 233, 0.3);
  transition: all 0.2s;
}
.switch-btn:hover {
  background: #0284c7;
  transform: translateY(-2px);
}

/* Khi có class dark-mode */
.room-box.dark-mode {
  background: #0f172a;
  border-color: #334155;
  color: #f8fafc;
}
.room-box.dark-mode .bulb {
  filter: grayscale(1) opacity(0.3);
}
.room-box.dark-mode .room-desc {
  color: #94a3b8;
}
.room-box.dark-mode .switch-btn {
  background: #f59e0b;
  color: #0f172a;
}`,

  initialJsCode: `// Nhiệm vụ: Bấm #lamp-switch thì gọi room.classList.toggle("dark-mode")
const room = document.getElementById("room");
const switchBtn = document.getElementById("lamp-switch");

// Thêm addEventListener cho switchBtn tại đây:

`,

  solutionJsCode: `const room = document.getElementById("room");
const switchBtn = document.getElementById("lamp-switch");

switchBtn.addEventListener("click", function() {
  room.classList.toggle("dark-mode");
});`,

  tests: [
    {
      id: 'toggle_dark_mode',
      description: 'Khi click vào #lamp-switch, #room phải được thêm class "dark-mode"',
      tester: async (doc) => {
        const room = doc.getElementById('room');
        const btn = doc.getElementById('lamp-switch');
        if (!room || !btn) return false;
        
        // Initial state should not have dark-mode
        const initial = room.classList.contains('dark-mode');
        
        // Click once -> should toggle
        btn.click();
        const afterOneClick = room.classList.contains('dark-mode');
        
        // Click again -> should untoggle
        btn.click();
        const afterSecondClick = room.classList.contains('dark-mode');
        
        return (!initial && afterOneClick && !afterSecondClick);
      }
    }
  ]
};
