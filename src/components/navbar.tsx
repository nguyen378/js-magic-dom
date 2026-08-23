'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Flame, Trophy, Map, RotateCcw, Star } from 'lucide-react';
import { StorageService, DEFAULT_PROGRESS } from '@/lib/storage';
import { UserProgress } from '@/types/lesson';
import { BadgesModal } from '@/components/gamification/badges-modal';

export function Navbar() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [showBadges, setShowBadges] = useState(false);

  const loadProgress = () => {
    setProgress(StorageService.getProgress());
  };

  useEffect(() => {
    loadProgress();
    // Listen for progress update events
    window.addEventListener('storage_updated', loadProgress);
    return () => window.removeEventListener('storage_updated', loadProgress);
  }, []);

  const handleReset = () => {
    if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ điểm số và bài học đã làm không?')) {
      StorageService.resetAllProgress();
      window.dispatchEvent(new Event('storage_updated'));
      window.location.reload();
    }
  };

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

          {/* Gamification Stats */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Streak */}
            <div 
              title={`Chuỗi ${progress.currentStreak} ngày học liên tiếp`}
              className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-sm font-bold text-orange-600 dark:bg-orange-950/50 dark:text-orange-400 border border-orange-200 dark:border-orange-900"
            >
              <Flame className="h-4 w-4 fill-orange-500 text-orange-500 animate-pulse" />
              <span>{progress.currentStreak} ngày</span>
            </div>

            {/* XP Points */}
            <div 
              title="Tổng điểm kinh nghiệm XP"
              className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-900"
            >
              <Star className="h-4 w-4 fill-amber-400 text-amber-500" />
              <span>{progress.xp} XP</span>
            </div>

            {/* Badges Button */}
            <button
              onClick={() => setShowBadges(true)}
              className="flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-sm font-bold text-purple-600 hover:bg-purple-100 dark:bg-purple-950/50 dark:text-purple-400 dark:hover:bg-purple-900/50 transition-colors border border-purple-200 dark:border-purple-900 cursor-pointer"
            >
              <Trophy className="h-4 w-4 text-purple-500" />
              <span className="hidden sm:inline">Huy hiệu</span>
              <span className="rounded-full bg-purple-200 px-1.5 py-0.2 text-xs text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                {progress.badges.length}
              </span>
            </button>

            {/* Roadmap Link */}
            <Link
              href="/roadmap"
              className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700 transition shadow-sm"
            >
              <Map className="h-4 w-4" />
              <span className="hidden sm:inline">Bản đồ</span>
            </Link>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              title="Đặt lại tiến độ"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition"
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
    </>
  );
}
