import { Lesson } from '@/types/lesson';
import { lessonHtml01 } from './01-first-tags';
import { lessonHtml02 } from './02-text-formatting';
import { lessonHtml03 } from './03-links-anchor';
import { lessonHtml04 } from './04-images';
import { lessonHtml05 } from './05-lists';
import { lessonHtml06 } from './06-buttons-inputs';
import { lessonHtml07 } from './07-semantic-layout';

import { lessonHtml08 } from './08-color-background';
import { lessonHtml09 } from './09-fonts-typography';
import { lessonHtml10 } from './10-borders-radius';
import { lessonHtml11 } from './11-box-model';

import { lessonHtml12 } from './12-display-properties';
import { lessonHtml13 } from './13-flexbox-basics';
import { lessonHtml14 } from './14-flexbox-align';
import { lessonHtml15 } from './15-hover-transitions';

import { lessonHtml16 } from './16-hero-profile';
import { lessonHtml17 } from './17-pricing-card';
import { lessonHtml18 } from './18-landing-section';

export const HTML_FOUNDATION_LESSONS: Lesson[] = [
  lessonHtml01,
  lessonHtml02,
  lessonHtml03,
  lessonHtml04,
  lessonHtml05,
  lessonHtml06,
  lessonHtml07,
];

export const CSS_FOUNDATION_LESSONS: Lesson[] = [
  lessonHtml08,
  lessonHtml09,
  lessonHtml10,
  lessonHtml11,
];

export const CSS_LAYOUT_LESSONS: Lesson[] = [
  lessonHtml12,
  lessonHtml13,
  lessonHtml14,
  lessonHtml15,
];

export const HTML_CSS_CAPSTONE_LESSONS: Lesson[] = [
  lessonHtml16,
  lessonHtml17,
  lessonHtml18,
];

export const HTML_CSS_LESSONS: Lesson[] = [
  ...HTML_FOUNDATION_LESSONS,
  ...CSS_FOUNDATION_LESSONS,
  ...CSS_LAYOUT_LESSONS,
  ...HTML_CSS_CAPSTONE_LESSONS,
];
