'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  Gamepad2, 
  Sparkles, 
  Palette, 
  Volume2, 
  VolumeX, 
  X, 
  Check, 
  Coins, 
  Terminal, 
  Coffee,
  Zap
} from 'lucide-react';
import { useAppTheme, AppTheme } from '@/context/theme-context';

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ThemeOption {
  id: AppTheme;
  name: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
  previewBg: string;
  previewBorder: string;
  previewText: string;
  accentColors: string[];
  tags: string[];
}

export function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
  const { theme, setTheme, soundEnabled, setSoundEnabled, playRetroSound } = useAppTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const themes: ThemeOption[] = [
    {
      id: 'pixel',
      name: 'Pixel Arcade 8-Bit',
      badge: '👾 RETRO GAMING',
      description: 'Đồ họa Pixel hoài niệm phong cách máy game Arcade! Viền hộp 3D khối, font 8-bit và âm thanh chiptune sinh động.',
      icon: <Gamepad2 className="h-5 w-5 text-amber-400" />,
      previewBg: 'bg-slate-900 border-2 border-amber-400 shadow-[3px_3px_0px_0px_#f59e0b]',
      previewBorder: 'border-amber-400',
      previewText: 'text-amber-300 font-mono text-xs',
      accentColors: ['#f59e0b', '#10b981', '#ef4444', '#06b6d4'],
      tags: ['Pixel Borders', '8-Bit Font', 'Chiptune Sounds', 'Chunky Buttons'],
    },
    {
      id: 'modern',
      name: 'Magic Modern',
      badge: '🪄 MẶC ĐỊNH',
      description: 'Giao diện hiện đại, bóng bẩy với phong cách Glassmorphism, bo góc tròn êm ái và dải màu gradient tím Indigo tinh tế.',
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      previewBg: 'bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-indigo-200 shadow-sm dark:bg-slate-900 dark:border-indigo-900',
      previewBorder: 'border-indigo-500',
      previewText: 'text-indigo-600 dark:text-indigo-400 text-xs font-semibold',
      accentColors: ['#6366f1', '#a855f7', '#ec4899', '#3b82f6'],
      tags: ['Glassmorphism', 'Smooth Corners', 'Gradients', 'Crisp Clean'],
    },
    {
      id: 'cyberpunk',
      name: 'Cyberpunk Neon',
      badge: '🌌 HACKER TECH',
      description: 'Giao diện tương lai công nghệ cao với viền phát sáng Neon Cyan và Magenta, bảng điều khiển đậm chất Cyber Matrix.',
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
      previewBg: 'bg-slate-950 border border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
      previewBorder: 'border-cyan-400',
      previewText: 'text-cyan-300 font-mono text-xs',
      accentColors: ['#06b6d4', '#ec4899', '#8b5cf6', '#10b981'],
      tags: ['Neon Glow', 'Cyberpunk Matrix', 'High Contrast', 'Sci-Fi'],
    },
    {
      id: 'cozy',
      name: 'Cozy Warm Paper',
      badge: '🍵 DỊU MẮT',
      description: 'Tông màu giấy ấm áp và pastel dịu dàng, tạo không gian học tập tĩnh lặng và bảo vệ mắt tối đa khi ngồi học lâu.',
      icon: <Coffee className="h-5 w-5 text-amber-700 dark:text-amber-300" />,
      previewBg: 'bg-amber-50/80 border border-amber-200/80 dark:bg-amber-950/30 dark:border-amber-900/50',
      previewBorder: 'border-amber-600',
      previewText: 'text-amber-800 dark:text-amber-200 text-xs font-serif',
      accentColors: ['#d97706', '#059669', '#ca8a04', '#b45309'],
      tags: ['Eye Protection', 'Warm Pastel', 'Cozy Reading', 'Soft Tones'],
    },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-3 sm:p-5 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl my-auto rounded-3xl bg-white p-5 sm:p-7 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            playRetroSound('click');
            onClose();
          }}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5 pr-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 text-white shadow-md shadow-orange-500/20">
            <Palette className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Tùy Chọn Giao Diện</span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                Custom Themes
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Chọn phong cách yêu thích để tạo cảm hứng lập trình mỗi ngày!
            </p>
          </div>
        </div>

        {/* Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {themes.map((t) => {
            const isSelected = theme === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`relative flex flex-col justify-between rounded-2xl p-4 transition-all cursor-pointer border-2 ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/40 dark:bg-indigo-950/30 dark:border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800/50 dark:hover:bg-slate-800'
                }`}
              >
                {/* Active check indicator */}
                {isSelected && (
                  <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xs">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="flex items-center gap-2 mb-2 pr-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-xs border border-slate-200/60 dark:border-slate-700">
                      {t.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {t.name}
                      </h4>
                      <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {t.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {t.description}
                  </p>
                </div>

                {/* Miniature UI Preview Box */}
                <div>
                  <div className={`rounded-xl p-2.5 mb-2.5 transition-all ${t.previewBg}`}>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-rose-500" />
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${t.previewText}`}>
                        {t.id === 'pixel' ? 'LVL 1 • 50 XP' : 'Bài 1.1 • DOM'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {t.accentColors.map((color, i) => (
                        <div
                          key={i}
                          className="h-2 flex-1 rounded-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1">
                    {t.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200/70 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 8-Bit Retro Audio Controls Box */}
        <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4 dark:border-amber-900/40 dark:bg-amber-950/20 mb-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
                {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-amber-950 dark:text-amber-200 uppercase tracking-wider">
                  Âm Thanh Retro 8-Bit Chiptune
                </h5>
                <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80">
                  Hiệu ứng âm thanh khi nhặt coin XP, pass test và nhấn nút arcade
                </p>
              </div>
            </div>

            {/* Sound Toggle and Preview buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => playRetroSound('coin')}
                className="flex items-center gap-1 rounded-xl bg-white px-2.5 py-1.5 text-xs font-bold text-amber-700 hover:bg-amber-100 dark:bg-slate-800 dark:text-amber-300 dark:hover:bg-slate-700 transition cursor-pointer border border-amber-200 dark:border-amber-800 shadow-2xs"
                title="Nghe thử tiếng Coin"
              >
                <Coins className="h-3.5 w-3.5 text-amber-500" />
                <span>Coin 🪙</span>
              </button>

              <button
                type="button"
                onClick={() => playRetroSound('success')}
                className="flex items-center gap-1 rounded-xl bg-white px-2.5 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 dark:bg-slate-800 dark:text-emerald-300 dark:hover:bg-slate-700 transition cursor-pointer border border-emerald-200 dark:border-emerald-800 shadow-2xs"
                title="Nghe thử tiếng Thắng"
              >
                <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
                <span>Thắng 🏆</span>
              </button>

              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer border ${
                  soundEnabled
                    ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                    : 'bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                }`}
              >
                {soundEnabled ? 'BẬT' : 'TẮT'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Giao diện được lưu tự động cho lần học tiếp theo ✨
          </span>
          <button
            type="button"
            onClick={() => {
              playRetroSound('click');
              onClose();
            }}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition cursor-pointer"
          >
            Áp dụng & Tiếp tục
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
}
