'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, ArrowRight, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { BADGES } from '@/content/badges';

interface CelebrationModalProps {
  xpEarned: number;
  isFirstTime: boolean;
  unlockedBadgeIds: string[];
  nextLessonId: string | null;
  onClose: () => void;
  onStay: () => void;
}

export function CelebrationModal({
  xpEarned,
  isFirstTime,
  unlockedBadgeIds,
  nextLessonId,
  onClose,
  onStay,
}: CelebrationModalProps) {
  useEffect(() => {
    // Launch fireworks confetti
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const interval: any = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        colors: ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const newBadges = BADGES.filter((b) => unlockedBadgeIds.includes(b.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in zoom-in-95 duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        
        {/* Animated Trophy Icon */}
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-500 to-pink-500 text-4xl text-white shadow-lg shadow-orange-500/30 animate-bounce">
          🎉
        </div>

        {/* Title */}
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Xuất Sắc! Hoàn Thành!
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Bạn đã hoàn thành chính xác toàn bộ yêu cầu của bài học!
        </p>

        {/* XP Reward Banner */}
        <div className="my-5 rounded-2xl bg-amber-50 p-4 border border-amber-200 dark:bg-amber-950/40 dark:border-amber-900/60">
          <div className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
            Phần thưởng kinh nghiệm
          </div>
          <div className="mt-1 flex items-center justify-center gap-2 text-3xl font-extrabold text-amber-600 dark:text-amber-400">
            <Sparkles className="h-7 w-7 text-amber-500 animate-spin" />
            <span>+{isFirstTime ? xpEarned : 0} XP</span>
          </div>
          {!isFirstTime && (
            <div className="text-[11px] text-amber-600/80 mt-1">
              (Bạn đã hoàn thành bài này trước đó rồi)
            </div>
          )}
        </div>

        {/* New Badges Unlocked (if any) */}
        {newBadges.length > 0 && (
          <div className="mb-5 rounded-2xl bg-purple-50 p-3.5 border border-purple-200 dark:bg-purple-950/40 dark:border-purple-900/60">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider mb-2">
              <Trophy className="h-4 w-4" /> Mở khóa Huy hiệu mới!
            </div>
            <div className="space-y-2">
              {newBadges.map((badge) => (
                <div key={badge.id} className="flex items-center gap-2.5 bg-white dark:bg-slate-800 p-2 rounded-xl border border-purple-100 dark:border-purple-900/40">
                  <span className="text-2xl">{badge.icon}</span>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{badge.title}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {nextLessonId ? (
            <Link
              href={`/lesson/${nextLessonId}`}
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-bold text-white shadow-md shadow-indigo-500/20 hover:opacity-95 transition"
            >
              <span>Bài tiếp theo</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          ) : (
            <Link
              href="/roadmap"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 font-bold text-white shadow-md hover:opacity-95 transition"
            >
              <span>Xem Bản Đồ & Nhận Chứng Nhận</span>
              <Trophy className="h-5 w-5" />
            </Link>
          )}

          <button
            onClick={onStay}
            className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 transition"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Ở lại nghịch tiếp</span>
          </button>
        </div>

      </div>
    </div>
  );
}
