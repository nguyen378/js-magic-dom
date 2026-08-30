import { Lesson } from '@/types/lesson';
import { lessonF01 } from './f01-variables';
import { lessonF02 } from './f02-data-types';
import { lessonF03 } from './f03-string-manipulation';
import { lessonF04 } from './f04-operators';
import { lessonF05 } from './f05-functions';
import { lessonF06 } from './f05-conditionals';
import { lessonF07 } from './f06-loops';
import { lessonF08 } from './f07-arrays';
import { lessonF09 } from './f09-array-methods';
import { lessonF10 } from './f08-objects';

import { lesson01 } from './01-select-element';
import { lesson02 } from './02-change-text';
import { lesson03 } from './03-change-style';
import { lesson04 } from './04-hide-show';
import { lesson05 } from './05-change-attribute';
import { lesson06 } from './06-click-event';
import { lesson07 } from './07-heart-counter';
import { lesson08 } from './08-toggle-class';
import { lesson09 } from './09-query-selector';
import { lesson10 } from './10-input-event';
import { lesson11 } from './11-remove-element';
import { lesson12 } from './12-create-element';

import { lessonAdv01 } from './adv01-es6-features';
import { lessonAdv02 } from './adv02-json-storage';
import { lessonAdv03 } from './adv03-promise';
import { lessonAdv04 } from './adv04-fetch-api';

import { lesson13 } from './13-todo-list';
import { lessonProj02 } from './proj02-tabs-ui';
import { lessonProj03 } from './proj03-toast-message';
import { lessonProj04 } from './proj04-form-validation';
import { lesson14 } from './14-mini-game';
import { lesson15 } from './15-whack-a-mole';

export const FOUNDATION_LESSONS: Lesson[] = [
  lessonF01,
  lessonF02,
  lessonF03,
  lessonF04,
  lessonF05,
  lessonF06,
  lessonF07,
  lessonF08,
  lessonF09,
  lessonF10,
];

export const DOM_LESSONS: Lesson[] = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
  lesson09,
  lesson10,
  lesson11,
  lesson12,
];

export const ADVANCED_LESSONS: Lesson[] = [
  lessonAdv01,
  lessonAdv02,
  lessonAdv03,
  lessonAdv04,
];

export const CAPSTONE_LESSONS: Lesson[] = [
  lesson13,
  lessonProj02,
  lessonProj03,
  lessonProj04,
  lesson14,
  lesson15,
];

import { 
  HTML_CSS_LESSONS, 
  WEEK1_4_HTML_FOUNDATION, 
  WEEK5_8_CSS_STYLING, 
  WEEK9_12_FLEXBOX_RESPONSIVE, 
  WEEK13_16_CAPSTONE_PORTFOLIO,
  HTML_FOUNDATION_LESSONS, 
  CSS_FOUNDATION_LESSONS, 
  CSS_LAYOUT_LESSONS, 
  HTML_CSS_CAPSTONE_LESSONS 
} from '../html-css-lessons';

import {
  MULTI_LANG_LESSONS,
  ML_STAGE1_FOUNDATION,
  ML_STAGE2_CONTROL_COLLECTIONS,
  ML_STAGE3_OOP_EXCEPTIONS,
  ML_STAGE4_CAPSTONE,
} from '../multi-lang-lessons';

export {
  HTML_CSS_LESSONS,
  WEEK1_4_HTML_FOUNDATION,
  WEEK5_8_CSS_STYLING,
  WEEK9_12_FLEXBOX_RESPONSIVE,
  WEEK13_16_CAPSTONE_PORTFOLIO,
  HTML_FOUNDATION_LESSONS,
  CSS_FOUNDATION_LESSONS,
  CSS_LAYOUT_LESSONS,
  HTML_CSS_CAPSTONE_LESSONS,
  MULTI_LANG_LESSONS,
  ML_STAGE1_FOUNDATION,
  ML_STAGE2_CONTROL_COLLECTIONS,
  ML_STAGE3_OOP_EXCEPTIONS,
  ML_STAGE4_CAPSTONE,
};

export const JAVASCRIPT_LESSONS: Lesson[] = [
  ...FOUNDATION_LESSONS,
  ...DOM_LESSONS,
  ...ADVANCED_LESSONS,
  ...CAPSTONE_LESSONS,
];

export const ALL_LESSONS: Lesson[] = [
  ...HTML_CSS_LESSONS,
  ...JAVASCRIPT_LESSONS,
  ...MULTI_LANG_LESSONS,
];

export function getLessonsByCourse(course: 'javascript' | 'html-css' | 'multi-lang'): Lesson[] {
  if (course === 'html-css') return HTML_CSS_LESSONS;
  if (course === 'multi-lang') return MULTI_LANG_LESSONS;
  return JAVASCRIPT_LESSONS;
}

export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

function getCourseLessonsForLesson(lesson?: Lesson): Lesson[] {
  if (!lesson) return JAVASCRIPT_LESSONS;
  if (lesson.course === 'multi-lang' || lesson.id.startsWith('ml')) {
    return MULTI_LANG_LESSONS;
  }
  if (
    lesson.course === 'html-css' ||
    lesson.id.startsWith('w') ||
    lesson.id.startsWith('b') ||
    lesson.id.startsWith('html') ||
    lesson.id.startsWith('css') ||
    lesson.id.startsWith('proj-html')
  ) {
    return HTML_CSS_LESSONS;
  }
  return JAVASCRIPT_LESSONS;
}

export function getNextLessonId(currentId: string): string | null {
  const currentLesson = getLessonById(currentId);
  const courseLessons = getCourseLessonsForLesson(currentLesson);

  const currentIndex = courseLessons.findIndex((l) => l.id === currentId);
  if (currentIndex !== -1 && currentIndex < courseLessons.length - 1) {
    return courseLessons[currentIndex + 1].id;
  }
  return null;
}

export function getPrevLessonId(currentId: string): string | null {
  const currentLesson = getLessonById(currentId);
  const courseLessons = getCourseLessonsForLesson(currentLesson);

  const currentIndex = courseLessons.findIndex((l) => l.id === currentId);
  if (currentIndex > 0) {
    return courseLessons[currentIndex - 1].id;
  }
  return null;
}

