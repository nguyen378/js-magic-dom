import { Lesson } from '@/types/lesson';

export const lessonF03: Lesson = {
  id: 'f03-string-manipulation',
  title: 'F03. Phù Phép Chuỗi Ký Tự (String)',
  shortDescription: 'Nối chuỗi với Template Literals và thao tác chuỗi với .toUpperCase(), .length',
  category: 'string',
  track: 'foundation',
  difficulty: 'easy',
  xpReward: 50,
  order: 3,
  
  story: `Thao tác với văn bản và chữ viết (String) là một trong những phép thuật mạnh mẽ nhất trong JavaScript! ✨

1. **Template Literals (Dấu backtick \`...\`)**: Cách nối chuỗi hiện đại nhất! Thay vì dùng dấu cộng \`+\` rườm rà, bạn có thể nhúng thẳng biến vào bên trong bằng cú pháp **\`\${tên_biến}\`**.
2. **\`chuỗi.length\`**: Đếm xem chuỗi có bao nhiêu ký tự (độ dài).
3. **\`chuỗi.toUpperCase()\`**: Biến toàn bộ các chữ cái thành **CHỮ IN HOA**.
4. **\`chuỗi.toLowerCase()\`**: Biến toàn bộ thành chữ in thường.

\`\`\`javascript
const hero = "naruto";
const upper = hero.toUpperCase(); // "NARUTO"
const len = hero.length;          // 6 ký tự
const loiChao = \`Chào mừng Ninja \${upper}!\`;
\`\`\`
`,

  taskInstructions: [
    'Khai báo hằng số `const hero = "naruto";`.',
    'Tạo biến `const upperHero = hero.toUpperCase();` để chuyển thành chữ in hoa "NARUTO".',
    'Tạo lời chào dùng template string: `const greeting = \\`Chào mừng dũng sĩ \${upperHero}!\\`;`.',
    'Dùng `console.log(greeting)` và `console.log(hero.length)` để in ra Console.'
  ],

  hints: {
    level1: 'Dùng dấu phím backtick ` (cạnh phím số 1) và cú pháp `${upperHero}`.',
    level2: `const hero = "naruto";
const upperHero = hero.toUpperCase();
const greeting = \`Chào mừng dũng sĩ \${upperHero}!\`;

console.log(greeting);
console.log(hero.length);`,
    solution: `const hero = "naruto";
const upperHero = hero.toUpperCase();
const greeting = \`Chào mừng dũng sĩ \${upperHero}!\`;

console.log(greeting);
console.log(hero.length);`
  },

  htmlContent: `
<div class="tavern-sign">
  <div class="sign-wood">
    <div class="chain chain-left">⛓️</div>
    <div class="chain chain-right">⛓️</div>
    <div class="sign-content">
      <div class="sign-badge">📜 BẢNG HIỆU PHÉP THUẬT</div>
      <h3 id="sign-title">CHÀO MỪNG DŨNG SĨ NARUTO!</h3>
      <div class="sign-meta">Độ dài tên gốc: 6 chữ cái</div>
    </div>
  </div>
</div>`,

  cssContent: `
.tavern-sign {
  display: flex;
  justify-content: center;
  padding: 10px;
}
.sign-wood {
  position: relative;
  background: linear-gradient(135deg, #78350f 0%, #451a03 100%);
  border: 3px solid #b45309;
  border-radius: 18px;
  padding: 24px 30px;
  color: white;
  text-align: center;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
  max-width: 380px;
  width: 100%;
}
.chain {
  position: absolute;
  top: -16px;
  font-size: 16px;
}
.chain-left { left: 30px; }
.chain-right { right: 30px; }
.sign-badge {
  font-size: 10px;
  font-weight: 800;
  color: #fde68a;
  margin-bottom: 8px;
  letter-spacing: 1px;
}
h3 {
  font-size: 16px;
  font-weight: 900;
  color: #fef08a;
  text-shadow: 0 0 12px rgba(250, 204, 21, 0.4);
  margin-bottom: 8px;
}
.sign-meta {
  font-size: 11px;
  color: #fcd34d;
}`,

  initialJsCode: `// Nhiệm vụ: Khai báo hero, chuyển in hoa upperHero, tạo template string greeting và in ra console!

// Bước 1: Khai báo const hero = "naruto";


// Bước 2: Khai báo const upperHero = hero.toUpperCase();


// Bước 3: Tạo template string const greeting = \`Chào mừng dũng sĩ \${upperHero}!\`;


// Bước 4: In greeting và hero.length ra console

`,

  solutionJsCode: `const hero = "naruto";
const upperHero = hero.toUpperCase();
const greeting = \`Chào mừng dũng sĩ \${upperHero}!\`;

console.log(greeting);
console.log(hero.length);`,

  tests: [
    {
      id: 'logged_greeting_uppercase',
      description: 'Lệnh console.log đã in đúng lời chào chứa tên in hoa "NARUTO"',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => 
          l.args && l.args.some((arg: any) => String(arg).includes('NARUTO'))
        );
      }
    },
    {
      id: 'logged_string_length',
      description: 'Lệnh console.log đã in đúng độ dài của tên hero là 6',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => 
          l.args && l.args.some((arg: any) => Number(arg) === 6 || String(arg).includes('6'))
        );
      }
    }
  ]
};
