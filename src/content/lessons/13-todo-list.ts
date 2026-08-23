import { Lesson } from '@/types/lesson';

export const lesson13: Lesson = {
  id: '13-todo-list',
  title: '13. Bảng Nhiệm Vụ Ma Thuật (To-Do List)',
  shortDescription: 'Tạo ứng dụng danh sách công việc hoàn chỉnh kết hợp Input và createElement',
  category: 'creation',
  difficulty: 'hard',
  xpReward: 90,
  order: 13,
  
  story: `Chào mừng bạn đến với đồ án thực tế kinh điển: **Ứng Dụng Danh Sách Nhiệm Vụ (To-Do List)**! 📝

Đây là lúc kết hợp tất cả các kỹ năng bạn đã học:
1. Đọc văn bản người dùng vừa nhập: \`const text = taskInput.value;\`
2. Tạo một thẻ \`<li>\` mới: \`const li = document.createElement("li");\`
3. Gán nội dung chữ cho thẻ: \`li.innerText = text;\`
4. Gắn thẻ mới vào danh sách \`#task-list\`: \`taskList.appendChild(li);\`
5. Xóa trắng ô nhập liệu để sẵn sàng cho lần gõ tiếp theo: \`taskInput.value = "";\`

Hãy cùng bắt tay vào xây dựng bảng nhiệm vụ ma thuật này nhé!
`,

  taskInstructions: [
    'Tìm ô nhập `#task-input`, nút thêm `#add-btn`, và danh sách `#task-list`.',
    'Thêm sự kiện `click` cho nút `#add-btn`.',
    'Trong hàm xử lý sự kiện: Tạo thẻ `li`, gán `li.innerText = taskInput.value`, dùng `taskList.appendChild(li)` để thêm vào danh sách, và đặt `taskInput.value = ""`.'
  ],

  hints: {
    level1: 'Kiểm tra nếu `taskInput.value` có chữ thì tạo `document.createElement("li")` rồi `taskList.appendChild(li)`.',
    level2: `addBtn.addEventListener("click", function() {
  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});`,
    solution: `const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function() {
  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});`
  },

  htmlContent: `
<div class="todo-app">
  <div class="app-header">
    <span class="app-icon">📜</span>
    <h3>Nhiệm Vụ Phù Thủy</h3>
  </div>

  <div class="input-row">
    <input type="text" id="task-input" placeholder="Viết nhiệm vụ mới..." />
    <button id="add-btn" class="add-btn">➕ Thêm</button>
  </div>

  <ul id="task-list" class="task-list">
    <!-- Thẻ li sẽ xuất hiện tại đây -->
  </ul>
</div>`,

  cssContent: `
.todo-app {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
}
.app-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}
.app-icon {
  font-size: 28px;
}
h3 {
  font-size: 18px;
  font-weight: 800;
  color: #1e293b;
}
.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}
#task-input {
  flex: 1;
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 12px;
  border: 2px solid #cbd5e1;
  outline: none;
  transition: border-color 0.2s;
}
#task-input:focus {
  border-color: #6366f1;
}
.add-btn {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
}
.add-btn:hover {
  background: #4f46e5;
  transform: translateY(-1px);
}
.task-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 80px;
}
.task-list li {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  color: #334155;
  font-weight: 600;
  display: flex;
  align-items: center;
  animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.task-list li::before {
  content: "✨";
  margin-right: 8px;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}`,

  initialJsCode: `// Nhiệm vụ: Khi bấm #add-btn, lấy chữ từ #task-input, tạo thẻ <li> mới, append vào #task-list và xóa ô nhập!
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Viết addEventListener cho addBtn tại đây:

`,

  solutionJsCode: `const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function() {
  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});`,

  tests: [
    {
      id: 'add_task_to_list',
      description: 'Khi nhập "Học phép thuật" và bấm nút #add-btn, thẻ <li> chứa "Học phép thuật" phải xuất hiện trong #task-list',
      tester: async (doc) => {
        const input = doc.getElementById('task-input') as HTMLInputElement;
        const btn = doc.getElementById('add-btn');
        const list = doc.getElementById('task-list');
        if (!input || !btn || !list) return false;
        
        input.value = 'Học phép thuật';
        btn.click();
        
        const items = list.querySelectorAll('li');
        return Array.from(items).some((item) => item.innerText.includes('Học phép thuật'));
      }
    },
    {
      id: 'clear_input_after_add',
      description: 'Sau khi thêm nhiệm vụ, ô nhập #task-input phải được xóa trắng',
      tester: async (doc) => {
        const input = doc.getElementById('task-input') as HTMLInputElement;
        if (!input) return false;
        return input.value === '';
      }
    }
  ]
};
