export type Difficulty = 'easy' | 'medium' | 'hard';

export type CourseType = 'javascript' | 'html-css' | 'multi-lang';

export type EditorLanguage = 'javascript' | 'html' | 'css' | 'python' | 'cpp';

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
  | 'html-css-project'
  // Multi-Language Programming categories
  | 'ml-variables'
  | 'ml-conditionals'
  | 'ml-loops'
  | 'ml-functions'
  | 'ml-collections'
  | 'ml-strings'
  | 'ml-io'
  | 'ml-oop-basics'
  | 'ml-oop-inheritance'
  | 'ml-exceptions'
  | 'ml-stdlib'
  | 'ml-capstone';

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

export interface MultiLangSnippet {
  js: string;
  python: string;
  cpp: string;
}

export interface Lesson {
  id: string;
  title: string;
  shortDescription: string;
  category: Category;
  course?: CourseType; // 'javascript' | 'html-css' | 'multi-lang'
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
    | 'w-capstone-portfolio'
    | 'ml-foundation'
    | 'ml-control'
    | 'ml-data-oop'
    | 'ml-capstone';
  editorLanguage?: EditorLanguage; // 'javascript' (default) | 'html' | 'css' | 'python' | 'cpp'
  difficulty: Difficulty;
  xpReward: number;
  order: number;
  week?: number; // Tuần / Buổi học
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

  // For Multi-language (Python / C++)
  initialPyCode?: string;
  solutionPyCode?: string;
  initialCppCode?: string;
  solutionCppCode?: string;
  multiLangSnippets?: MultiLangSnippet;

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
