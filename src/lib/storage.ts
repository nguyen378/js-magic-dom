import { useSyncExternalStore } from 'react';
import { UserProgress } from '@/types/lesson';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const STORAGE_KEY = 'js_magic_dom_progress_v1';

let cachedProgress: UserProgress | null = null;
let cachedRawString: string | null = null;
let cloudSyncDebounceTimer: ReturnType<typeof setTimeout> | null = null;

export async function syncToCloud(progress: UserProgress, immediate = false): Promise<void> {
  if (typeof window === 'undefined') return;
  const user = auth.currentUser;
  if (!user) return;

  const executeSync = async () => {
    try {
      window.dispatchEvent(new CustomEvent('cloud_sync_start'));
      const progressRef = doc(db, 'user_progress', user.uid);
      const sanitized = JSON.parse(JSON.stringify(progress, (k, v) => (v === undefined ? null : v)));
      await setDoc(
        progressRef,
        {
          ...sanitized,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      window.dispatchEvent(new CustomEvent('cloud_sync_success'));
    } catch (err) {
      console.warn('Auto cloud sync failed:', err);
      window.dispatchEvent(new CustomEvent('cloud_sync_error', { detail: err }));
    }
  };

  if (immediate) {
    if (cloudSyncDebounceTimer) {
      clearTimeout(cloudSyncDebounceTimer);
      cloudSyncDebounceTimer = null;
    }
    await executeSync();
  } else {
    if (cloudSyncDebounceTimer) {
      clearTimeout(cloudSyncDebounceTimer);
    }
    cloudSyncDebounceTimer = setTimeout(executeSync, 1000);
  }
}

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

  // Save progress locally only (used when syncing FROM cloud to prevent echo loops)
  saveProgressLocalOnly(progress: UserProgress): void {
    if (typeof window === 'undefined') return;
    try {
      const serialized = JSON.stringify(progress);
      localStorage.setItem(STORAGE_KEY, serialized);
      cachedProgress = progress;
      cachedRawString = serialized;
      window.dispatchEvent(new Event('storage_updated'));
    } catch (e) {
      console.error('Failed to save progress locally', e);
    }
  },

  // Regular save: updates local storage AND triggers background auto-sync to Firebase
  saveProgress(progress: UserProgress, immediateSync = false): void {
    if (typeof window === 'undefined') return;
    try {
      const serialized = JSON.stringify(progress);
      localStorage.setItem(STORAGE_KEY, serialized);
      cachedProgress = progress;
      cachedRawString = serialized;
      window.dispatchEvent(new Event('storage_updated'));
      // Automatic background Cloud Firestore sync
      syncToCloud(progress, immediateSync);
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
    if (updatedCompleted.includes('f05-functions') && !currentBadges.has('function_wizard')) {
      newBadges.push('function_wizard');
      currentBadges.add('function_wizard');
    }
    if ((updatedCompleted.includes('f03-string-manipulation') || updatedCompleted.includes('f04-operators')) && !currentBadges.has('string_operator_master')) {
      newBadges.push('string_operator_master');
      currentBadges.add('string_operator_master');
    }
    if ((updatedCompleted.includes('f06-conditionals') || updatedCompleted.includes('f07-loops')) && !currentBadges.has('loop_logic_king')) {
      newBadges.push('loop_logic_king');
      currentBadges.add('loop_logic_king');
    }
    if ((updatedCompleted.includes('f08-arrays') || updatedCompleted.includes('f10-objects')) && !currentBadges.has('data_structure_pro')) {
      newBadges.push('data_structure_pro');
      currentBadges.add('data_structure_pro');
    }
    if (updatedCompleted.includes('f09-array-methods') && !currentBadges.has('array_transformer')) {
      newBadges.push('array_transformer');
      currentBadges.add('array_transformer');
    }
    if ((updatedCompleted.includes('adv01-es6-features') || updatedCompleted.includes('adv02-json-storage')) && !currentBadges.has('es6_master')) {
      newBadges.push('es6_master');
      currentBadges.add('es6_master');
    }
    if ((updatedCompleted.includes('adv03-promise') || updatedCompleted.includes('adv04-fetch-api')) && !currentBadges.has('async_sorcerer')) {
      newBadges.push('async_sorcerer');
      currentBadges.add('async_sorcerer');
    }
    if ((updatedCompleted.includes('proj02-tabs-ui') || updatedCompleted.includes('proj03-toast-message') || updatedCompleted.includes('proj04-form-validation')) && !currentBadges.has('ui_component_architect')) {
      newBadges.push('ui_component_architect');
      currentBadges.add('ui_component_architect');
    }

    // HTML & CSS 16-Week Badges
    if ((updatedCompleted.some(id => id.startsWith('b01') || id.startsWith('b02') || id.startsWith('b03') || id.startsWith('b04') || id.startsWith('w01') || id.startsWith('w02') || id.startsWith('w03') || id.startsWith('w04'))) && !currentBadges.has('html_starter')) {
      newBadges.push('html_starter');
      currentBadges.add('html_starter');
    }
    if ((updatedCompleted.some(id => id.startsWith('b05') || id.startsWith('b06') || id.startsWith('w05') || id.startsWith('w06'))) && !currentBadges.has('css_color_wizard')) {
      newBadges.push('css_color_wizard');
      currentBadges.add('css_color_wizard');
    }
    if ((updatedCompleted.some(id => id.startsWith('b07') || id.startsWith('b08') || id.startsWith('w07') || id.startsWith('w08'))) && !currentBadges.has('box_model_master')) {
      newBadges.push('box_model_master');
      currentBadges.add('box_model_master');
    }
    if ((updatedCompleted.some(id => id.startsWith('b09') || id.startsWith('b10') || id.startsWith('w09') || id.startsWith('w10'))) && !currentBadges.has('flexbox_ninja')) {
      newBadges.push('flexbox_ninja');
      currentBadges.add('flexbox_ninja');
    }
    if ((updatedCompleted.some(id => id.startsWith('b11') || id.startsWith('b12') || id.startsWith('w11') || id.startsWith('w12'))) && !currentBadges.has('responsive_engineer')) {
      newBadges.push('responsive_engineer');
      currentBadges.add('responsive_engineer');
    }
    if ((updatedCompleted.some(id => id.startsWith('b13') || id.startsWith('b14') || id.startsWith('b15') || id.startsWith('b16') || id.startsWith('w13') || id.startsWith('w14') || id.startsWith('w15') || id.startsWith('w16'))) && !currentBadges.has('personal_web_author')) {
      newBadges.push('personal_web_author');
      currentBadges.add('personal_web_author');
    }

    // Multi-Language Course Badges
    if (updatedCompleted.includes('ml01-variables') && !currentBadges.has('polyglot_starter')) {
      newBadges.push('polyglot_starter');
      currentBadges.add('polyglot_starter');
    }
    if ((updatedCompleted.includes('ml02-conditionals') || updatedCompleted.includes('ml03-loops')) && !currentBadges.has('control_flow_master')) {
      newBadges.push('control_flow_master');
      currentBadges.add('control_flow_master');
    }
    if ((updatedCompleted.includes('ml04-functions') || updatedCompleted.includes('ml05-collections') || updatedCompleted.includes('ml06-strings')) && !currentBadges.has('function_collection_guru')) {
      newBadges.push('function_collection_guru');
      currentBadges.add('function_collection_guru');
    }
    if ((updatedCompleted.includes('ml08-oop-basics') || updatedCompleted.includes('ml09-oop-inheritance')) && !currentBadges.has('oop_polyglot_architect')) {
      newBadges.push('oop_polyglot_architect');
      currentBadges.add('oop_polyglot_architect');
    }
    if ((updatedCompleted.includes('ml10-exceptions') || updatedCompleted.includes('ml11-stdlib')) && !currentBadges.has('error_hunter_pro')) {
      newBadges.push('error_hunter_pro');
      currentBadges.add('error_hunter_pro');
    }
    if (updatedCompleted.includes('ml12-capstone') && !currentBadges.has('polyglot_legend')) {
      newBadges.push('polyglot_legend');
      currentBadges.add('polyglot_legend');
    }

    const newProgress: UserProgress = {
      xp: updatedXP,
      completedLessons: updatedCompleted,
      currentStreak: newStreak,
      lastActiveDate: today,
      badges: Array.from(currentBadges),
      customCode: updatedCustomCode,
    };

    // Save with immediate cloud sync upon completing a lesson
    this.saveProgress(newProgress, true);

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
    // Debounced cloud sync when typing code
    this.saveProgress(updated, false);
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
    // Also reset Firestore in background if logged in
    syncToCloud(DEFAULT_PROGRESS, true);
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
