import { Lesson } from '@/types/lesson';

export const lessonF02: Lesson = {
  id: 'f02-data-types',
  title: 'F02. Thế Giới Kiểu Dữ Liệu (Data Types)',
  shortDescription: 'Nhận diện number, string, boolean và kiểm tra với toán tử typeof',
  category: 'datatype',
  track: 'foundation',
  difficulty: 'easy',
  xpReward: 50,
  order: 2,
  
  story: `Trong thế giới JavaScript, mọi giá trị đều thuộc về một **Kiểu Dữ Liệu (Data Type)** cụ thể:

1. **\`string\` (Chuỗi ký tự)**: Chữ cái, từ ngữ, câu văn được bọc trong dấu nháy kép hoặc đơn. Ví dụ: \`"Merlin"\`, \`'Học sinh giỏi'\`.
2. **\`number\` (Số học)**: Các con số để tính toán (số nguyên hoặc số thập phân). Ví dụ: \`20\`, \`3.14\`, \`-5\`.
3. **\`boolean\` (Logic Đúng/Sai)**: Chỉ nhận 1 trong 2 giá trị: **\`true\`** (Đúng) hoặc **\`false\`** (Sai).
4. **\`typeof\`**: Câu thần chú tra cứu kiểu dữ liệu của bất kỳ biến nào!

\`\`\`javascript
const ten = "Merlin";
const level = 20;
const isWizard = true;

console.log(typeof ten);      // "string"
console.log(typeof level);    // "number"
console.log(typeof isWizard); // "boolean"
\`\`\`
`,

  taskInstructions: [
    'Khai báo hằng số `const heroName = "Merlin";` (kiểu string).',
    'Khai báo hằng số `const level = 20;` (kiểu number).',
    'Khai báo hằng số `const isWizard = true;` (kiểu boolean).',
    'Dùng `console.log(typeof heroName)` để in ra kiểu của heroName (kết quả là "string").',
    'Dùng `console.log(typeof isWizard)` để in ra kiểu của isWizard (kết quả là "boolean").'
  ],

  hints: {
    level1: 'Dùng cú pháp `typeof tenBien` để kiểm tra kiểu dữ liệu.',
    level2: `const heroName = "Merlin";
const level = 20;
const isWizard = true;

console.log(typeof heroName);
console.log(typeof isWizard);`,
    solution: `const heroName = "Merlin";
const level = 20;
const isWizard = true;

console.log(typeof heroName);
console.log(typeof isWizard);`
  },

  htmlContent: `
<div class="card-sheet">
  <div class="sheet-header">
    <span>🧙‍♂️ HỒ SƠ PHÁP SƯ TỐI CAO</span>
  </div>
  <div class="data-types-grid">
    <div class="data-card">
      <span class="badge badge-str">STRING</span>
      <div class="val">"Merlin"</div>
      <div class="desc">Chuỗi chữ</div>
    </div>
    <div class="data-card">
      <span class="badge badge-num">NUMBER</span>
      <div class="val">20</div>
      <div class="desc">Số nguyên</div>
    </div>
    <div class="data-card">
      <span class="badge badge-bool">BOOLEAN</span>
      <div class="val">true</div>
      <div class="desc">Đúng / Sai</div>
    </div>
  </div>
</div>`,

  cssContent: `
.card-sheet {
  background: #1e1b4b;
  border-radius: 20px;
  padding: 24px;
  color: white;
  text-align: center;
  border: 2px solid #818cf8;
}
.sheet-header {
  font-size: 13px;
  font-weight: 800;
  color: #c7d2fe;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
.data-types-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.data-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px 8px;
  border-radius: 14px;
}
.badge {
  font-size: 9px;
  font-weight: 900;
  padding: 3px 8px;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 8px;
}
.badge-str { background: #3b82f6; color: white; }
.badge-num { background: #10b981; color: white; }
.badge-bool { background: #f59e0b; color: #1e1b4b; }
.val {
  font-size: 15px;
  font-weight: 800;
  color: #f8fafc;
  margin-bottom: 4px;
}
.desc {
  font-size: 10px;
  color: #94a3b8;
}`,

  initialJsCode: `// Nhiệm vụ: Khai báo heroName, level, isWizard và in ra typeof!

// Bước 1: Khai báo const heroName = "Merlin";


// Bước 2: Khai báo const level = 20;


// Bước 3: Khai báo const isWizard = true;


// Bước 4: In ra typeof heroName và typeof isWizard

`,

  solutionJsCode: `const heroName = "Merlin";
const level = 20;
const isWizard = true;

console.log(typeof heroName);
console.log(typeof isWizard);`,

  tests: [
    {
      id: 'logged_string_type',
      description: 'Lệnh console.log đã in đúng kiểu dữ liệu "string"',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => 
          l.args && l.args.some((arg: any) => String(arg).toLowerCase().includes('string'))
        );
      }
    },
    {
      id: 'logged_boolean_type',
      description: 'Lệnh console.log đã in đúng kiểu dữ liệu "boolean"',
      tester: (doc, win: any) => {
        const capturedLogs = win.__capturedLogs || [];
        return capturedLogs.some((l: any) => 
          l.args && l.args.some((arg: any) => String(arg).toLowerCase().includes('boolean'))
        );
      }
    }
  ]
};
