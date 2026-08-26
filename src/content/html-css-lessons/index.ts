import { Lesson } from '@/types/lesson';
import { LESSON_W01 } from './01-w01-first-page';
import { LESSON_W02 } from './02-w02-text-image';
import { LESSON_W03 } from './03-w03-lists-links';
import { LESSON_W04 } from './04-w04-semantic-layout';
import { LESSON_W05 } from './05-w05-colors-fonts';
import { LESSON_W06 } from './06-w06-borders-shadow';
import { LESSON_W07 } from './07-w07-box-model';
import { LESSON_W08 } from './08-w08-hover-transitions';
import { LESSON_W09 } from './09-w09-flexbox-basics';
import { LESSON_W10 } from './10-w10-flexbox-align';
import { LESSON_W11 } from './11-w11-flex-gallery';
import { LESSON_W12 } from './12-w12-responsive-basic';
import { LESSON_W13 } from './13-w13-capstone-hero';
import { LESSON_W14 } from './14-w14-capstone-about-skills';
import { LESSON_W15 } from './15-w15-capstone-gallery-contact';
import { LESSON_W16 } from './16-w16-capstone-final';

// Giai đoạn 1: Khởi đầu & Xây dựng Khung xương Nội dung với HTML (Tuần 1 - 4)
export const WEEK1_4_HTML_FOUNDATION: Lesson[] = [
  LESSON_W01,
  LESSON_W02,
  LESSON_W03,
  LESSON_W04,
];

// Giai đoạn 2: Tô màu & Thiết kế Giao diện với CSS Cơ bản (Tuần 5 - 8)
export const WEEK5_8_CSS_STYLING: Lesson[] = [
  LESSON_W05,
  LESSON_W06,
  LESSON_W07,
  LESSON_W08,
];

// Giai đoạn 3: Bố cục Hiện đại Flexbox & Tối ưu Giao diện (Tuần 9 - 12)
export const WEEK9_12_FLEXBOX_RESPONSIVE: Lesson[] = [
  LESSON_W09,
  LESSON_W10,
  LESSON_W11,
  LESSON_W12,
];

// Giai đoạn 4: Đồ Án Tốt Nghiệp - Xây Dựng Website Cá Nhân Hoàn Chỉnh (Tuần 13 - 16)
export const WEEK13_16_CAPSTONE_PORTFOLIO: Lesson[] = [
  LESSON_W13,
  LESSON_W14,
  LESSON_W15,
  LESSON_W16,
];

// Toàn bộ 16 Tuần học HTML & CSS
export const HTML_CSS_LESSONS: Lesson[] = [
  ...WEEK1_4_HTML_FOUNDATION,
  ...WEEK5_8_CSS_STYLING,
  ...WEEK9_12_FLEXBOX_RESPONSIVE,
  ...WEEK13_16_CAPSTONE_PORTFOLIO,
];

// Aliases for compatibility
export const HTML_FOUNDATION_LESSONS = WEEK1_4_HTML_FOUNDATION;
export const CSS_FOUNDATION_LESSONS = WEEK5_8_CSS_STYLING;
export const CSS_LAYOUT_LESSONS = WEEK9_12_FLEXBOX_RESPONSIVE;
export const HTML_CSS_CAPSTONE_LESSONS = WEEK13_16_CAPSTONE_PORTFOLIO;
