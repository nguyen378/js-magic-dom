import { Lesson } from '@/types/lesson';
import { lessonML01_VARIABLES } from './01-ml01-variables';
import { lessonML02_CONDITIONALS } from './02-ml02-conditionals';
import { lessonML03_LOOPS } from './03-ml03-loops';
import { lessonML04_FUNCTIONS } from './04-ml04-functions';
import { lessonML05_COLLECTIONS } from './05-ml05-collections';
import { lessonML06_STRINGS } from './06-ml06-strings';
import { lessonML07_IO } from './07-ml07-io';
import { lessonML08_OOP_BASICS } from './08-ml08-oop-basics';
import { lessonML09_OOP_INHERITANCE } from './09-ml09-oop-inheritance';
import { lessonML10_EXCEPTIONS } from './10-ml10-exceptions';
import { lessonML11_STDLIB } from './11-ml11-stdlib';
import { lessonML12_CAPSTONE } from './12-ml12-capstone';

export {
  lessonML01_VARIABLES,
  lessonML02_CONDITIONALS,
  lessonML03_LOOPS,
  lessonML04_FUNCTIONS,
  lessonML05_COLLECTIONS,
  lessonML06_STRINGS,
  lessonML07_IO,
  lessonML08_OOP_BASICS,
  lessonML09_OOP_INHERITANCE,
  lessonML10_EXCEPTIONS,
  lessonML11_STDLIB,
  lessonML12_CAPSTONE,
};

export const MULTI_LANG_LESSONS: Lesson[] = [
  lessonML01_VARIABLES,
  lessonML02_CONDITIONALS,
  lessonML03_LOOPS,
  lessonML04_FUNCTIONS,
  lessonML05_COLLECTIONS,
  lessonML06_STRINGS,
  lessonML07_IO,
  lessonML08_OOP_BASICS,
  lessonML09_OOP_INHERITANCE,
  lessonML10_EXCEPTIONS,
  lessonML11_STDLIB,
  lessonML12_CAPSTONE,
];

export const ML_STAGE1_FOUNDATION: Lesson[] = MULTI_LANG_LESSONS.slice(0, 3);
export const ML_STAGE2_CONTROL_COLLECTIONS: Lesson[] = MULTI_LANG_LESSONS.slice(3, 6);
export const ML_STAGE3_OOP_EXCEPTIONS: Lesson[] = MULTI_LANG_LESSONS.slice(6, 10);
export const ML_STAGE4_CAPSTONE: Lesson[] = MULTI_LANG_LESSONS.slice(10, 12);
