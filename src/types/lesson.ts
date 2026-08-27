export type Difficulty = 'easy' | 'medium' | 'hard';

export type CourseType = 'javascript' | 'html-css';

export type EditorLanguage = 'javascript' | 'html' | 'css';

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
  | 'capstone'
  // HTML & CSS categories
  | 'html-basic'
  | 'html-format'
  | 'html-media'
  | 'html-form'
  | 'html-forms'
  | 'html-semantic'
  | 'css-basic'
  | 'css-colors'
  | 'css-typography'
  | 'css-boxmodel'
  | 'css-layout'
  | 'css-position'
  | 'css-flexbox'
  | 'css-effects'
  | 'html-css-project';

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
  course?: CourseType; // 'javascript' | 'html-css'
  track?: 
    | 'foundation' 
    | 'dom' 
    | 'advanced' 
    | 'capstone' 
    | 'html-foundation' 
    | 'css-foundation' 
    | 'css-layout' 
    | 'html-css-capstone'
    | 'w-html-foundation'
    | 'w-css-styling'
    | 'w-flexbox-responsive'
    | 'w-capstone-portfolio';
  editorLanguage?: EditorLanguage; // 'javascript' (default) | 'html' | 'css'
  difficulty: Difficulty;
  xpReward: number;
  order: number;
  week?: number; // Tuần học (1 - 16)
  durationMinutes?: number; // 60 phút
  
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
  initialJsCode?: string;
  solutionJsCode?: string;

  // For HTML / CSS lessons
  initialHtmlCode?: string;
  solutionHtmlCode?: string;
  initialCssCode?: string;
  solutionCssCode?: string;

  // Validation tests
  tests: TestCase[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: string;
  course?: CourseType;
}

export interface UserProgress {
  xp: number;
  completedLessons: string[]; // List of lesson IDs
  currentStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  badges: string[]; // List of badge IDs
  customCode: Record<string, string>; // Saved code per lesson ID
}
