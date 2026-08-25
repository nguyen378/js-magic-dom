export type Difficulty = 'easy' | 'medium' | 'hard';

export type Category = 
  | 'variable'
  | 'datatype'
  | 'string'
  | 'operator'
  | 'function'
  | 'condition'
  | 'loop'
  | 'array'
  | 'array-methods'
  | 'object'
  | 'selector'
  | 'text'
  | 'style'
  | 'attribute'
  | 'event'
  | 'input'
  | 'class'
  | 'creation'
  | 'removal'
  | 'es6'
  | 'storage'
  | 'async'
  | 'api'
  | 'tabs'
  | 'toast'
  | 'form-validation'
  | 'capstone';

export interface SandboxLog {
  level: string;
  args: unknown[];
}

export interface SandboxWindow extends Window {
  __capturedLogs?: SandboxLog[];
  [key: string]: unknown;
}

export interface TestCase {
  id: string;
  description: string;
  // Function evaluated against document and window of iframe
  tester: (doc: Document, win: SandboxWindow) => boolean | Promise<boolean>;
}

export interface Lesson {
  id: string;
  title: string;
  shortDescription: string;
  category: Category;
  track?: 'foundation' | 'dom' | 'advanced' | 'capstone';
  difficulty: Difficulty;
  xpReward: number;
  order: number;
  
  // Lesson story & instructions
  story: string;
  taskInstructions: string[];
  
  // Progressive hints
  hints: {
    level1: string; // Gợi ý khái niệm
    level2: string; // Cú pháp mẫu
    solution: string; // Đáp án hoàn chỉnh
  };

  // Initial code template for sandbox
  htmlContent: string;
  cssContent: string;
  initialJsCode: string;
  solutionJsCode: string;

  // Validation tests
  tests: TestCase[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: string;
}

export interface UserProgress {
  xp: number;
  completedLessons: string[]; // List of lesson IDs
  currentStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  badges: string[]; // List of badge IDs
  customCode: Record<string, string>; // Saved code per lesson ID
}
