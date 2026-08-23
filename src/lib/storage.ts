import { useSyncExternalStore } from 'react';
import { UserProgress } from '@/types/lesson';

const STORAGE_KEY = 'js_magic_dom_progress_v1';

let cachedProgress: UserProgress | null = null;
let cachedRawString: string | null = null;

export const DEFAULT_PROGRESS: UserProgress = {
  xp: 0,
  completedLessons: [],
  currentStreak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  badges: [],
  customCode: {},
};

export const StorageService = {
  getProgress(): UserProgress {
    if (typeof window === 'undefined') return DEFAULT_PROGRESS;
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        cachedProgress = DEFAULT_PROGRESS;
        cachedRawString = null;
        return DEFAULT_PROGRESS;
      }
      if (data === cachedRawString && cachedProgress) {
        return cachedProgress;
      }
      const parsed: UserProgress = JSON.parse(data);
      cachedProgress = {
        ...DEFAULT_PROGRESS,
        ...parsed,
        badges: parsed.badges || [],
        customCode: parsed.customCode || {},
      };
      cachedRawString = data;
      return cachedProgress;
    } catch {
      return DEFAULT_PROGRESS;
    }
  },

  saveProgress(progress: UserProgress): void {
    if (typeof window === 'undefined') return;
    try {
      const serialized = JSON.stringify(progress);
      localStorage.setItem(STORAGE_KEY, serialized);
      cachedProgress = progress;
      cachedRawString = serialized;
      window.dispatchEvent(new Event('storage_updated'));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  },

  completeLesson(lessonId: string, xpReward: number, code: string): { 
    progress: UserProgress; 
    newBadges: string[];
    isFirstTime: boolean;
  } {
    const current = this.getProgress();
    const isFirstTime = !current.completedLessons.includes(lessonId);
    
    // Update streak
    const today = new Date().toISOString().split('T')[0];
    let newStreak = current.currentStreak;
    if (current.lastActiveDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      if (current.lastActiveDate === yesterdayStr) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }
    }

    const updatedCompleted = isFirstTime 
      ? [...current.completedLessons, lessonId] 
      : current.completedLessons;
      
    const updatedXP = isFirstTime ? current.xp + xpReward : current.xp;
    
    const updatedCustomCode = {
      ...current.customCode,
      [lessonId]: code,
    };

    // Check for badge unlocks
    const newBadges: string[] = [];
    const currentBadges = new Set(current.badges);

    if (updatedCompleted.length >= 1 && !currentBadges.has('first_step')) {
      newBadges.push('first_step');
      currentBadges.add('first_step');
    }
    if ((updatedCompleted.includes('01-select-element') || updatedCompleted.includes('09-query-selector')) && !currentBadges.has('eagle_eye')) {
      newBadges.push('eagle_eye');
      currentBadges.add('eagle_eye');
    }
    if ((updatedCompleted.includes('03-change-style') || updatedCompleted.includes('04-hide-show') || updatedCompleted.includes('05-change-attribute')) && !currentBadges.has('color_wizard')) {
      newBadges.push('color_wizard');
      currentBadges.add('color_wizard');
    }
    if ((updatedCompleted.includes('06-click-event') || updatedCompleted.includes('07-heart-counter') || updatedCompleted.includes('08-toggle-class')) && !currentBadges.has('event_master')) {
      newBadges.push('event_master');
      currentBadges.add('event_master');
    }
    if (updatedCompleted.includes('10-input-event') && !currentBadges.has('keyboard_hero')) {
      newBadges.push('keyboard_hero');
      currentBadges.add('keyboard_hero');
    }
    if (updatedCompleted.includes('11-remove-element') && !currentBadges.has('cleanup_master')) {
      newBadges.push('cleanup_master');
      currentBadges.add('cleanup_master');
    }
    if ((updatedCompleted.includes('12-create-element') || updatedCompleted.includes('13-todo-list')) && !currentBadges.has('dom_builder')) {
      newBadges.push('dom_builder');
      currentBadges.add('dom_builder');
    }
    if (updatedCompleted.includes('14-mini-game') && !currentBadges.has('game_master')) {
      newBadges.push('game_master');
      currentBadges.add('game_master');
    }
    if (updatedCompleted.includes('15-whack-a-mole') && !currentBadges.has('legendary_gamer')) {
      newBadges.push('legendary_gamer');
      currentBadges.add('legendary_gamer');
    }
    if ((updatedCompleted.includes('f01-variables') || updatedCompleted.includes('f02-data-types')) && !currentBadges.has('var_collector')) {
      newBadges.push('var_collector');
      currentBadges.add('var_collector');
    }
    if ((updatedCompleted.includes('f03-string-manipulation') || updatedCompleted.includes('f04-operators')) && !currentBadges.has('string_operator_master')) {
      newBadges.push('string_operator_master');
      currentBadges.add('string_operator_master');
    }
    if ((updatedCompleted.includes('f05-conditionals') || updatedCompleted.includes('f06-loops')) && !currentBadges.has('loop_logic_king')) {
      newBadges.push('loop_logic_king');
      currentBadges.add('loop_logic_king');
    }
    if ((updatedCompleted.includes('f07-arrays') || updatedCompleted.includes('f08-objects')) && !currentBadges.has('data_structure_pro')) {
      newBadges.push('data_structure_pro');
      currentBadges.add('data_structure_pro');
    }

    const newProgress: UserProgress = {
      xp: updatedXP,
      completedLessons: updatedCompleted,
      currentStreak: newStreak,
      lastActiveDate: today,
      badges: Array.from(currentBadges),
      customCode: updatedCustomCode,
    };

    this.saveProgress(newProgress);

    return {
      progress: newProgress,
      newBadges,
      isFirstTime,
    };
  },

  saveCode(lessonId: string, code: string): void {
    const current = this.getProgress();
    const updated: UserProgress = {
      ...current,
      customCode: {
        ...current.customCode,
        [lessonId]: code,
      },
    };
    this.saveProgress(updated);
  },

  getCode(lessonId: string, defaultCode: string): string {
    const current = this.getProgress();
    return current.customCode[lessonId] || defaultCode;
  },

  resetAllProgress(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    cachedProgress = DEFAULT_PROGRESS;
    cachedRawString = null;
    window.dispatchEvent(new Event('storage_updated'));
  },
};

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage_updated', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('storage_updated', callback);
    window.removeEventListener('storage', callback);
  };
}

export function useProgress(): UserProgress {
  return useSyncExternalStore(
    subscribe,
    () => StorageService.getProgress(),
    () => DEFAULT_PROGRESS
  );
}
