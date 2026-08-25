'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ALL_LESSONS, FOUNDATION_LESSONS, DOM_LESSONS, ADVANCED_LESSONS, CAPSTONE_LESSONS } from '@/content/lessons';
import { useProgress } from '@/lib/storage';
import { Lesson } from '@/types/lesson';
import { Sparkles, CheckCircle2, Lock, ArrowRight, Star, Award, BookOpen, Layers, Zap, Code } from 'lucide-react';

interface Chapter {
  id: string;
  track: 'foundation' | 'dom' | 'advanced' | 'capstone';
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

const CHAPTERS: Chapter[] = [
  {
    id: 'f_ch1',
    track: 'foundation',
    title: 'Học Phần 1A: Khởi Đầu Pháp Thuật & Hàm',
    subtitle: 'Khai báo biến let/const, kiểu dữ liệu, chuỗi ký tự, đấu trường toán tử và cuộn giấy Hàm Function',
    icon: '📘',
    color: 'from-blue-500 to-indigo-600',
    lessons: FOUNDATION_LESSONS.slice(0, 5),
  },
  {
    id: 'f_ch2',
    track: 'foundation',
    title: 'Học Phần 1B: Bậc Thầy Logic, Mảng & Đối Tượng',
    subtitle: 'Rẽ nhánh if/else, vòng xoáy lặp lại, balo mảng Array, siêu phương thức Map/Filter và Object RPG',
    icon: '⚡',
    color: 'from-purple-500 to-indigo-600',
    lessons: FOUNDATION_LESSONS.slice(5, 10),
  },
  {
    id: 'dom_ch1',
    track: 'dom',
    title: 'Học Phần 2A: Tân Binh DOM & Style',
    subtitle: 'Cây DOM, chọn phần tử ID, đổi chữ, màu sắc, ẩn hiện và thuộc tính ảnh',
    icon: '🏰',
    color: 'from-teal-500 to-emerald-600',
    lessons: DOM_LESSONS.slice(0, 5),
  },
  {
    id: 'dom_ch2',
    track: 'dom',
    title: 'Học Phần 2B: Bậc Thầy Sự Kiện & Tương Tác',
    subtitle: 'Sự kiện click, đếm số, bật tắt class, querySelector, sự kiện input, xóa & tạo thẻ mới',
    icon: '🪄',
    color: 'from-indigo-500 to-purple-600',
    lessons: DOM_LESSONS.slice(5, 12),
  },
  {
    id: 'adv_ch1',
    track: 'advanced',
    title: 'Học Phần 3: Pháp Thuật ES6+ & Bất Đồng Bộ (Async API)',
    subtitle: 'Destructuring, Spread Operator, hộp lưu trữ JSON & LocalStorage, Promise và Fetch API',
    icon: '🚀',
    color: 'from-cyan-500 to-blue-600',
    lessons: ADVANCED_LESSONS,
  },
  {
    id: 'cap_ch1',
    track: 'capstone',
    title: 'Học Phần 4: Đồ Án Thực Chiến & Capstone Games',
    subtitle: 'Ứng dụng To-Do List, Tabs UI, Toast Message, Form Validator và Game Đập Quái Vật Whack-A-Mole',
    icon: '👑',
    color: 'from-amber-500 to-rose-600',
    lessons: CAPSTONE_LESSONS,
  },
];

export default function RoadmapPage() {
  const progress = useProgress();
  const [activeTab, setActiveTab] = useState<'all' | 'foundation' | 'dom' | 'advanced' | 'capstone'>('all');

  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.round((completedCount / ALL_LESSONS.length) * 100);

  const foundationCompleted = FOUNDATION_LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length;
  const domCompleted = DOM_LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length;
  const advancedCompleted = ADVANCED_LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length;
  const capstoneCompleted = CAPSTONE_LESSONS.filter((l) => progress.completedLessons.includes(l.id)).length;

  const filteredChapters = CHAPTERS.filter((ch) => {
    if (activeTab === 'all') return true;
    return ch.track === activeTab;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 mb-3">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span>Giáo Trình Toàn Diện: JS Căn Bản, HTML DOM, ES6+ & Đồ Án Thực Chiến</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Bản Đồ Phiêu Lưu JavaScript
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Học lập trình từ con số 0 qua 32 bài học & đồ án trực quan, tích lũy điểm kinh nghiệm XP, mở khóa 18 huy hiệu và chế tạo các ứng dụng thực tế!
          </p>
        </div>

        {/* Progress Stats Card */}
        <div className="mb-10 rounded-3xl border border-indigo-100 bg-white p-6 sm:p-8 shadow-xl shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Tiến độ hoàn thành</div>
              <div className="mt-1 flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{completedCount}</span>
                <span className="text-slate-500 font-semibold">/ {ALL_LESSONS.length} bài học</span>
              </div>
              {/* Progress Bar */}
              <div className="mt-3 h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-800 pt-4 sm:pt-0 sm:pl-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Tổng điểm kinh nghiệm</div>
              <div className="mt-1 flex items-center justify-center sm:justify-start gap-2 text-3xl font-black text-amber-500">
                <Star className="h-7 w-7 fill-amber-400" />
                <span>{progress.xp} XP</span>
              </div>
              <div className="mt-2 text-xs text-slate-500">
                {progress.xp >= 1500 ? '👑 Đại Pháp Sư Tối Thượng' : progress.xp >= 600 ? '🧙‍♂️ Pháp Sư Lành Nghề' : '🪄 Tân Binh Đang Luyện Tập'}
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-800 pt-4 sm:pt-0 sm:pl-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Huy hiệu đã đạt</div>
              <div className="mt-1 flex items-center justify-center sm:justify-start gap-2 text-3xl font-black text-purple-600 dark:text-purple-400">
                <Award className="h-7 w-7" />
                <span>{progress.badges.length} / 18</span>
              </div>
              <div className="mt-2 text-xs text-slate-500">
                {progress.badges.length === 18 ? '🏆 Đã mở khóa trọn bộ 18 huy hiệu!' : 'Còn nhiều huy hiệu đang chờ'}
              </div>
            </div>

          </div>
        </div>

        {/* Track Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Toàn Bộ ({ALL_LESSONS.length})</span>
            <span className="ml-1 rounded-full bg-white/20 px-1.5 py-0.2 text-[10px]">
              {completedCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('foundation')}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
              activeTab === 'foundation'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>📘 JS Căn Bản</span>
            <span className="ml-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 px-1.5 py-0.2 text-[10px]">
              {foundationCompleted}/{FOUNDATION_LESSONS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('dom')}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
              activeTab === 'dom'
                ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/25 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            <Zap className="h-3.5 w-3.5" />
            <span>🪄 HTML DOM</span>
            <span className="ml-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-200 px-1.5 py-0.2 text-[10px]">
              {domCompleted}/{DOM_LESSONS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('advanced')}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
              activeTab === 'advanced'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            <Code className="h-3.5 w-3.5" />
            <span>⚡ ES6+ & Async</span>
            <span className="ml-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 px-1.5 py-0.2 text-[10px]">
              {advancedCompleted}/{ADVANCED_LESSONS.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('capstone')}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
              activeTab === 'capstone'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/25 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>👑 Đồ Án & Game</span>
            <span className="ml-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 px-1.5 py-0.2 text-[10px]">
              {capstoneCompleted}/{CAPSTONE_LESSONS.length}
            </span>
          </button>
        </div>

        {/* Chapters & Lessons Roadmap */}
        <div className="space-y-12">
          {filteredChapters.map((chapter) => {
            const completedInChapter = chapter.lessons.filter((l) => progress.completedLessons.includes(l.id)).length;

            return (
              <div key={chapter.id} className="space-y-4">
                
                {/* Chapter Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{chapter.icon}</span>
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                        {chapter.title}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {chapter.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3 py-1 rounded-full self-start sm:self-auto">
                    {completedInChapter} / {chapter.lessons.length} hoàn thành
                  </div>
                </div>

                {/* Lesson Cards Grid */}
                <div className="space-y-3.5">
                  {chapter.lessons.map((lesson) => {
                    const globalIdx = ALL_LESSONS.findIndex((l) => l.id === lesson.id);
                    const isCompleted = progress.completedLessons.includes(lesson.id);
                    // Unlocked if first in track, or first overall, or previous lesson completed
                    const isUnlocked = 
                      globalIdx === 0 || 
                      lesson.id === '01-select-element' || 
                      lesson.id === 'adv01-es6-features' ||
                      lesson.id === '13-todo-list' ||
                      progress.completedLessons.includes(ALL_LESSONS[globalIdx - 1]?.id);

                    return (
                      <div
                        key={lesson.id}
                        className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border p-4 sm:p-5 transition-all ${
                          isCompleted
                            ? 'border-emerald-200 bg-white/90 shadow-sm dark:border-emerald-950 dark:bg-slate-900/90'
                            : isUnlocked
                            ? 'border-indigo-200 bg-white shadow-md shadow-indigo-500/5 hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900'
                            : 'border-slate-200 bg-slate-50/60 opacity-60 dark:border-slate-800 dark:bg-slate-900/40'
                        }`}
                      >
                        {/* Left side: Number & Info */}
                        <div className="flex items-start gap-3.5">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-black text-xs shadow-xs ${
                              isCompleted
                                ? 'bg-emerald-500 text-white'
                                : isUnlocked
                                ? 'bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-indigo-500/20'
                                : 'bg-slate-200 text-slate-400 dark:bg-slate-800'
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : isUnlocked ? (
                              <span>
                                {lesson.track === 'foundation' ? `F${lesson.order}` : lesson.track === 'advanced' ? `ES${lesson.order}` : lesson.track === 'capstone' ? `P${lesson.order}` : `D${lesson.order}`}
                              </span>
                            ) : (
                              <Lock className="h-4 w-4" />
                            )}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                                {lesson.title}
                              </h3>
                              {lesson.track === 'capstone' && (
                                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-black text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                                  👑 Đồ Án
                                </span>
                              )}
                              {lesson.track === 'advanced' && (
                                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-black text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                                  ⚡ ES6 & Async
                                </span>
                              )}
                              {lesson.track === 'foundation' && (
                                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-black text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                                  📘 Căn Bản
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-1 sm:line-clamp-none">
                              {lesson.shortDescription}
                            </p>
                            <div className="mt-2 flex items-center gap-3 text-xs text-slate-400">
                              <span className="flex items-center gap-1 text-amber-500 font-semibold">
                                <Sparkles className="h-3 w-3" /> +{lesson.xpReward} XP
                              </span>
                              <span>•</span>
                              <span>{lesson.taskInstructions.length} nhiệm vụ</span>
                            </div>
                          </div>
                        </div>

                        {/* Right side: Action Button */}
                        <div className="w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
                          {isUnlocked ? (
                            <Link
                              href={`/lesson/${lesson.id}`}
                              className={`flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition shadow-xs ${
                                isCompleted
                                  ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-300'
                                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20'
                              }`}
                            >
                              <span>{isCompleted ? 'Làm lại' : 'Bắt đầu học'}</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          ) : (
                            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 px-4 py-2">
                              <Lock className="h-3.5 w-3.5" />
                              <span>Khóa</span>
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
