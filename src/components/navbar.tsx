'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Flame, Trophy, Map, RotateCcw, Star, MessageSquareHeart, Gamepad2, Palette } from 'lucide-react';
import { StorageService, useProgress } from '@/lib/storage';
import { useAppTheme } from '@/context/theme-context';
import { BadgesModal } from '@/components/gamification/badges-modal';
import { FeedbackModal } from '@/components/feedback/feedback-modal';
import { ThemeModal } from '@/components/theme/theme-modal';
import { UserMenu } from '@/components/auth/user-menu';

export function Navbar() {
  const progress = useProgress();
  const { theme, playRetroSound } = useAppTheme();
  const [showBadges, setShowBadges] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  const handleReset = () => {
    if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ điểm số và bài học đã làm không?')) {
      StorageService.resetAllProgress();
    }
  };

  const getThemeBadge = () => {
    switch (theme) {
      case 'pixel':
        return { label: 'Pixel', icon: <Gamepad2 className="h-4 w-4 text-amber-500 animate-pulse" />, color: 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300' };
      case 'cyberpunk':
        return { label: 'Cyber', icon: <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />, color: 'bg-cyan-50 text-cyan-700 border-cyan-300 dark:bg-cyan-950/60 dark:text-cyan-300' };
      case 'cozy':
        return { label: 'Cozy', icon: <Palette className="h-4 w-4 text-amber-700 dark:text-amber-400" />, color: 'bg-orange-50 text-orange-800 border-orange-200 dark:bg-orange-950/60 dark:text-orange-300' };
      default:
        return { label: 'Theme', icon: <Palette className="h-4 w-4 text-indigo-500" />, color: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300' };
    }
  };

  const themeBadge = getThemeBadge();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 shadow-xs">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-105">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 text-white shadow-md shadow-orange-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                JS Magic DOM
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                Cấp 2
              </span>
            </div>
          </Link>

          {/* Gamification Stats & Auth */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Streak */}
            <div 
              title={`Chuỗi ${progress.currentStreak} ngày học liên tiếp`}
              className="flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-bold text-orange-600 dark:bg-orange-950/50 dark:text-orange-400 border border-orange-200 dark:border-orange-900"
            >
              <Flame className="h-4 w-4 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{progress.currentStreak}</span>
            </div>

            {/* XP Points */}
            <div 
              title="Tổng điểm kinh nghiệm XP"
              className="flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-bold text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-900"
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-500" />
              <span>{progress.xp} XP</span>
            </div>

            {/* Badges Button */}
            <button
              onClick={() => {
                playRetroSound('click');
                setShowBadges(true);
              }}
              className="flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-bold text-purple-600 hover:bg-purple-100 dark:bg-purple-950/50 dark:text-purple-400 dark:hover:bg-purple-900/50 transition-colors border border-purple-200 dark:border-purple-900 cursor-pointer"
            >
              <Trophy className="h-4 w-4 text-purple-500" />
              <span className="hidden md:inline">Huy hiệu</span>
              <span className="rounded-full bg-purple-200 px-1.5 py-0.2 text-xs text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                {progress.badges.length}
              </span>
            </button>

            {/* Theme Switcher Button */}
            <button
              onClick={() => {
                playRetroSound('click');
                setShowThemeModal(true);
              }}
              title="Tùy chọn giao diện (Pixel, Cyberpunk, Modern...)"
              className={`flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-bold border transition-all cursor-pointer shadow-2xs ${themeBadge.color}`}
            >
              {themeBadge.icon}
              <span className="hidden md:inline">{themeBadge.label}</span>
            </button>

            {/* Feedback Button */}
            <button
              onClick={() => {
                playRetroSound('click');
                setShowFeedback(true);
              }}
              title="Gửi góp ý & phản hồi cho hệ thống"
              className="flex items-center gap-1.5 rounded-full bg-pink-50 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-bold text-pink-600 hover:bg-pink-100 dark:bg-pink-950/50 dark:text-pink-400 dark:hover:bg-pink-900/50 transition-colors border border-pink-200 dark:border-pink-900 cursor-pointer shadow-2xs"
            >
              <MessageSquareHeart className="h-4 w-4 text-pink-500" />
              <span className="hidden md:inline">Góp ý</span>
            </button>

            {/* Roadmap Link */}
            <Link
              href="/roadmap"
              onClick={() => playRetroSound('click')}
              className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700 transition shadow-xs"
            >
              <Map className="h-4 w-4" />
              <span className="hidden sm:inline">Bản đồ</span>
            </Link>

            {/* User Auth Menu */}
            <UserMenu />

            {/* Reset Button */}
            <button
              onClick={handleReset}
              title="Đặt lại tiến độ"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

          </div>

        </div>
      </header>

      {/* Badges Modal */}
      {showBadges && (
        <BadgesModal
          unlockedBadgeIds={progress.badges}
          onClose={() => setShowBadges(false)}
        />
      )}

      {/* Theme Selector Modal */}
      <ThemeModal
        isOpen={showThemeModal}
        onClose={() => setShowThemeModal(false)}
      />

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
      />
    </>
  );
}
