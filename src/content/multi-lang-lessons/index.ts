import { Lesson } from '@/types/lesson';
import { lessonML01 } from './01-ml01-variables';
import { lessonML02 } from './02-ml02-conditionals';
import { lessonML03 } from './03-ml03-loops';
import { lessonML04 } from './04-ml04-functions';
import { lessonML05 } from './05-ml05-collections';
import { lessonML06 } from './06-ml06-strings';
import { lessonML07 } from './07-ml07-io';
import { lessonML08 } from './08-ml08-oop-basics';
import { lessonML09 } from './09-ml09-oop-inheritance';
import { lessonML10 } from './10-ml10-exceptions';
import { lessonML11 } from './11-ml11-stdlib';
import { lessonML12 } from './12-ml12-capstone';

export const ML_STAGE1_FOUNDATION: Lesson[] = [
  lessonML01,
  lessonML02,
  lessonML03,
];

export const ML_STAGE2_CONTROL_COLLECTIONS: Lesson[] = [
  lessonML04,
  lessonML05,
  lessonML06,
];

export const ML_STAGE3_OOP_EXCEPTIONS: Lesson[] = [
  lessonML07,
  lessonML08,
  lessonML09,
  lessonML10,
];

export const ML_STAGE4_CAPSTONE: Lesson[] = [
  lessonML11,
  lessonML12,
];

export const MULTI_LANG_LESSONS: Lesson[] = [
  ...ML_STAGE1_FOUNDATION,
  ...ML_STAGE2_CONTROL_COLLECTIONS,
  ...ML_STAGE3_OOP_EXCEPTIONS,
  ...ML_STAGE4_CAPSTONE,
];

export {
  lessonML01,
  lessonML02,
  lessonML03,
  lessonML04,
  lessonML05,
  lessonML06,
  lessonML07,
  lessonML08,
  lessonML09,
  lessonML10,
  lessonML11,
  lessonML12,
};
