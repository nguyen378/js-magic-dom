'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type AppTheme = 'modern' | 'pixel' | 'cyberpunk' | 'cozy';

interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  playRetroSound: (type: 'coin' | 'click' | 'success' | 'jump' | 'error' | 'powerup') => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'modern',
  setTheme: () => {},
  soundEnabled: true,
  setSoundEnabled: () => {},
  playRetroSound: () => {},
});

const THEME_STORAGE_KEY = 'js_magic_dom_theme_v1';
const SOUND_STORAGE_KEY = 'js_magic_dom_sound_v1';

// Web Audio API Chiptune Synth
function playChiptuneSound(type: 'coin' | 'click' | 'success' | 'jump' | 'error' | 'powerup') {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    if (type === 'coin') {
      // Classic 8-bit coin sound (B5 -> E6)
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';

      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'click') {
      // Short retro blip
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'success' || type === 'powerup') {
      // Triumphant 8-bit arpeggio: C5 -> E5 -> G5 -> C6
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const now = ctx.currentTime + idx * 0.08;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      });
    } else if (type === 'jump') {
      // 8-bit jump sound (glide up)
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'error') {
      // 8-bit low buzz
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.setValueAtTime(120, now + 0.08);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  } catch {
    // Ignore audio context errors
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<AppTheme>('modern');
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as AppTheme;
      if (savedTheme && ['modern', 'pixel', 'cyberpunk', 'cozy'].includes(savedTheme)) {
        setThemeState(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        document.documentElement.setAttribute('data-theme', 'modern');
      }

      const savedSound = localStorage.getItem(SOUND_STORAGE_KEY);
      if (savedSound !== null) {
        setSoundEnabledState(savedSound === 'true');
      }
    } catch {
      // Storage fallback
    }
    setMounted(true);
  }, []);

  const setTheme = useCallback((newTheme: AppTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      window.dispatchEvent(new CustomEvent('theme_changed', { detail: newTheme }));
    } catch {
      // Storage fallback
    }
    if (newTheme === 'pixel') {
      playChiptuneSound('powerup');
    } else {
      playChiptuneSound('click');
    }
  }, []);

  const setSoundEnabled = useCallback((enabled: boolean) => {
    setSoundEnabledState(enabled);
    try {
      localStorage.setItem(SOUND_STORAGE_KEY, String(enabled));
    } catch {
      // Storage fallback
    }
    if (enabled) {
      playChiptuneSound('coin');
    }
  }, []);

  const playRetroSound = useCallback((type: 'coin' | 'click' | 'success' | 'jump' | 'error' | 'powerup') => {
    if (soundEnabled) {
      playChiptuneSound(type);
    }
  }, [soundEnabled]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, soundEnabled, setSoundEnabled, playRetroSound }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeContext);
