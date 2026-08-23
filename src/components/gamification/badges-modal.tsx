'use client';

import React from 'react';
import { X, Lock, CheckCircle2 } from 'lucide-react';
import { BADGES } from '@/content/badges';

interface BadgesModalProps {
  unlockedBadgeIds: string[];
  onClose: () => void;
}

export function BadgesModal({ unlockedBadgeIds, onClose }: BadgesModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400 mb-2">
            🏆
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Bộ Sưu Tập Huy Hiệu
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Bạn đã mở khóa <span className="font-bold text-purple-600">{unlockedBadgeIds.length}</span> / {BADGES.length} huy hiệu!
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {BADGES.map((badge) => {
            const isUnlocked = unlockedBadgeIds.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`relative flex items-start gap-3.5 rounded-xl p-3.5 border transition-all ${
                  isUnlocked
                    ? 'border-purple-200 bg-purple-50/50 dark:border-purple-900/50 dark:bg-purple-950/20 shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/30 opacity-60'
                }`}
              >
                {/* Badge Icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl shadow-xs ${
                    isUnlocked
                      ? 'bg-gradient-to-tr from-purple-500 to-indigo-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 grayscale'
                  }`}
                >
                  {isUnlocked ? badge.icon : <Lock className="h-5 w-5" />}
                </div>

                {/* Badge Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 truncate">
                      {badge.title}
                    </h3>
                    {isUnlocked && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-2">
                    {badge.description}
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                    🎯 {badge.requirement}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer button */}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-slate-900 py-2.5 font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
