import { Lesson } from '@/types/lesson';

export const lessonAdv04: Lesson = {
  id: 'adv04-fetch-api',
  title: 'ES04. Kéo Dữ Liệu API (Fetch & Mock Data)',
  shortDescription: 'Gửi yêu cầu HTTP Request với Fetch API để lấy dữ liệu từ xa và hiển thị lên giao diện',
  category: 'api',
  track: 'advanced',
  difficulty: 'hard',
  xpReward: 100,
  order: 4,

  story: `**Fetch API** là phương tiện mạnh mẽ nhất giúp trình duyệt kết nối với các máy chủ (Server/Backend) trên toàn cầu qua giao thức HTTP! 🌐🛰️

Cú pháp gọi Fetch:
\`\`\`javascript
fetch("https://api.example.com/heroes")
  .then(response => response.json()) // Chuyển phản hồi sang JSON
  .then(data => {
    console.log(data); // Mảng dữ liệu từ máy chủ
  });
\`\`\`
`,

  taskInstructions: [
    'Tạo hàm giả lập tải API `function fetchHeroList()` trả về một Promise có dữ liệu `["Aragorn", "Legolas", "Gimli"]`.',
    'Gọi `fetchHeroList().then(heroes => { ... })`.',
    'Bên trong `.then()`, tìm `#hero-list` và render các thẻ `<li class="hero-item">` cho mỗi dũng sĩ: `heroList.innerHTML = heroes.map(h => "<li>" + h + "</li>").join("");`.',
    'Đồng thời in mảng `heroes` ra console bằng `console.log(heroes)`.'
  ],

  hints: {
    level1: 'Sử dụng `.then(heroes => { heroList.innerHTML = ...; console.log(heroes); })`.',
    level2: `function fetchHeroList() {
  return Promise.resolve(["Aragorn", "Legolas", "Gimli"]);
}

const heroList = document.getElementById("hero-list");

fetchHeroList().then((heroes) => {
  heroList.innerHTML = heroes.map(h => "<li>" + h + "</li>").join("");
  console.log(heroes);
});`,
    solution: `function fetchHeroList() {
  return Promise.resolve(["Aragorn", "Legolas", "Gimli"]);
}

const heroList = document.getElementById("hero-list");

fetchHeroList().then(function(heroes) {
  heroList.innerHTML = heroes.map(function(h) {
    return "<li>" + h + "</li>";
  }).join("");
  console.log(heroes);
});`
  },

  htmlContent: `
<div class="network-station">
  <div class="station-badge">📡 TRẠM THU PHÁT DỮ LIỆU API</div>
  <div class="server-card">
    <div class="server-title">Danh Sách Dũng Sĩ Từ Máy Chủ:</div>
    <ul id="hero-list" class="hero-list">
      <li class="loading-state">Đang tải dữ liệu từ máy chủ...</li>
    </ul>
  </div>
  <p class="station-tip">Mã nguồn sẽ giải mã API và render danh sách dũng sĩ vào thẻ #hero-list!</p>
</div>`,

  cssContent: `
.network-station {
  background: linear-gradient(135deg, #042f2e 0%, #134e4a 100%);
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #14b8a6;
  box-shadow: 0 10px 25px -5px rgba(20, 184, 166, 0.3);
}
.station-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  color: #5eead4;
  background: rgba(20, 184, 166, 0.2);
  border: 1px solid #14b8a6;
  padding: 4px 12px;
  border-radius: 9999px;
  margin-bottom: 16px;
}
.server-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 14px;
  text-align: left;
}
.server-title {
  font-size: 13px;
  font-weight: 800;
  color: #2dd4bf;
  margin-bottom: 10px;
}
.hero-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.hero-list li {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #f0fdfa;
}
.hero-list li.loading-state {
  color: #99f6e4;
  font-style: italic;
}
.station-tip {
  font-size: 12px;
  color: #94a3b8;
}`,

  initialJsCode: `function fetchHeroList() {
  return Promise.resolve(["Aragorn", "Legolas", "Gimli"]);
}

const heroList = document.getElementById("hero-list");

// Nhiệm vụ:
// 1. Gọi fetchHeroList().then(heroes => { ... })
// 2. Cập nhật heroList.innerHTML bằng các thẻ <li> chứa tên dũng sĩ
// 3. In ra console.log(heroes)

`,

  solutionJsCode: `function fetchHeroList() {
  return Promise.resolve(["Aragorn", "Legolas", "Gimli"]);
}

const heroList = document.getElementById("hero-list");

fetchHeroList().then(function(heroes) {
  heroList.innerHTML = heroes.map(function(h) {
    return "<li>" + h + "</li>";
  }).join("");
  console.log(heroes);
});`,

  tests: [
    {
      id: 'api_rendered_to_dom',
      description: 'Danh sách dũng sĩ đã được render đầy đủ 3 thẻ <li> vào #hero-list',
      tester: async (doc) => {
        await new Promise((r) => setTimeout(r, 100));
        const heroList = doc.getElementById('hero-list');
        if (!heroList) return false;
        const items = heroList.querySelectorAll('li');
        return items.length === 3 && heroList.textContent!.includes('Aragorn');
      }
    },
    {
      id: 'heroes_logged_to_console',
      description: 'Lệnh console.log đã in mảng 3 dũng sĩ ra console',
      tester: (doc, win) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l) =>
          l.args && l.args.some((arg) => {
            const str = JSON.stringify(arg);
            return str.includes('Aragorn') && str.includes('Legolas') && str.includes('Gimli');
          })
        );
      }
    }
  ]
};
