import { Lesson } from '@/types/lesson';
import { B01_LESSONS } from './01-b01-html-first-tags';
import { B02_LESSONS } from './02-b02-lists-links';
import { B03_LESSONS } from './03-b03-semantic-table';
import { B04_LESSONS } from './04-b04-html-forms';
import { B05_LESSONS } from './05-b05-css-basics';
import { B06_LESSONS } from './06-b06-box-model';
import { B07_LESSONS } from './07-b07-borders-hover';
import { B08_LESSONS } from './08-b08-position';
import { B09_LESSONS } from './09-b09-flexbox-basics';
import { B10_LESSONS } from './10-b10-flexbox-advanced';
import { B11_LESSONS } from './11-b11-responsive';
import { B12_LESSONS } from './12-b12-review-project-prep';
import { B13_LESSONS } from './13-b13-capstone-html';
import { B14_LESSONS } from './14-b14-capstone-css';
import { B15_LESSONS } from './15-b15-capstone-responsive';
import { B16_LESSONS } from './16-b16-capstone-final';

export {
  B01_LESSONS,
  B02_LESSONS,
  B03_LESSONS,
  B04_LESSONS,
  B05_LESSONS,
  B06_LESSONS,
  B07_LESSONS,
  B08_LESSONS,
  B09_LESSONS,
  B10_LESSONS,
  B11_LESSONS,
  B12_LESSONS,
  B13_LESSONS,
  B14_LESSONS,
  B15_LESSONS,
  B16_LESSONS,
};

// Giai đoạn 1: Nền tảng cấu trúc HTML5 (Buổi 1 - 4: 16 bài)
export const STAGE1_HTML_FOUNDATION: Lesson[] = [
  ...B01_LESSONS,
  ...B02_LESSONS,
  ...B03_LESSONS,
  ...B04_LESSONS,
];

// Giai đoạn 2: Tô màu & Định kiểu CSS Box Model (Buổi 5 - 8: 16 bài)
export const STAGE2_CSS_STYLING: Lesson[] = [
  ...B05_LESSONS,
  ...B06_LESSONS,
  ...B07_LESSONS,
  ...B08_LESSONS,
];

// Giai đoạn 3: Bố cục Flexbox & Thiết kế Responsive (Buổi 9 - 12: 16 bài)
export const STAGE3_FLEXBOX_RESPONSIVE: Lesson[] = [
  ...B09_LESSONS,
  ...B10_LESSONS,
  ...B11_LESSONS,
  ...B12_LESSONS,
];

// Giai đoạn 4: Dự án cuối khóa — Xây dựng Website Cá Nhân (Buổi 13 - 16: 8 bài)
export const STAGE4_CAPSTONE_PORTFOLIO: Lesson[] = [
  ...B13_LESSONS,
  ...B14_LESSONS,
  ...B15_LESSONS,
  ...B16_LESSONS,
];

// Toàn bộ 56 Bài tập HTML & CSS độc lập
export const HTML_CSS_LESSONS: Lesson[] = [
  ...STAGE1_HTML_FOUNDATION,
  ...STAGE2_CSS_STYLING,
  ...STAGE3_FLEXBOX_RESPONSIVE,
  ...STAGE4_CAPSTONE_PORTFOLIO,
];

// Aliases for compatibility
export const WEEK1_4_HTML_FOUNDATION = STAGE1_HTML_FOUNDATION;
export const WEEK5_8_CSS_STYLING = STAGE2_CSS_STYLING;
export const WEEK9_12_FLEXBOX_RESPONSIVE = STAGE3_FLEXBOX_RESPONSIVE;
export const WEEK13_16_CAPSTONE_PORTFOLIO = STAGE4_CAPSTONE_PORTFOLIO;
export const HTML_FOUNDATION_LESSONS = STAGE1_HTML_FOUNDATION;
export const CSS_FOUNDATION_LESSONS = STAGE2_CSS_STYLING;
export const CSS_LAYOUT_LESSONS = STAGE3_FLEXBOX_RESPONSIVE;
export const HTML_CSS_CAPSTONE_LESSONS = STAGE4_CAPSTONE_PORTFOLIO;
