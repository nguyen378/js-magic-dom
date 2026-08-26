'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Globe, Zap, Code2, Trophy } from 'lucide-react';
import { HTML_CSS_LESSONS, JAVASCRIPT_LESSONS } from '@/content/lessons';

export default function HomePage() {
  const [previewCourse, setPreviewCourse] = useState<'html-css' | 'javascript'>('html-css');
  const previewLessons = previewCourse === 'html-css' ? HTML_CSS_LESSONS : JAVASCRIPT_LESSONS;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-slate-50 dark:bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-tr from-orange-500/15 via-indigo-500/20 to-pink-500/15 blur-3xl -z-10" />

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-indigo-700 backdrop-blur-md shadow-xs dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300 mb-6 animate-in fade-in">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Nền Tảng Thực Hành Lập Trình Web Trực Quan Dành Cho Học Sinh</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl dark:text-white leading-tight">
            Học Lập Trình Web <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-orange-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-orange-400 dark:via-purple-400 dark:to-indigo-400">
              Trực Quan & Hứng Thú
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Khám phá 2 lộ trình học tập chuyên biệt: từ kiến tạo khung xương và trang trí giao diện với <strong>HTML & CSS</strong> đến phù phép tương tác và tạo game kỳ diệu với <strong>JavaScript DOM</strong>!
          </p>

          {/* 2 Dedicated Course Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
            
            {/* Course 1: HTML & CSS */}
            <div className="relative group rounded-3xl border-2 border-orange-200 bg-white p-6 shadow-xl shadow-orange-500/5 hover:border-orange-400 hover:shadow-orange-500/15 transition-all dark:border-orange-950 dark:bg-slate-900">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400 text-2xl shadow-inner">
                  🌐
                </div>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-700 dark:bg-orange-950/60 dark:text-orange-300 border border-orange-200 dark:border-orange-900">
                  Lộ Trình 1 (16 Tuần Học)
                </span>
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                HTML & CSS: Xây Dựng Website Cá Nhân
              </h2>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Thiết kế chuẩn 1 tiết 60 phút/tuần: 12 tuần rèn luyện kỹ năng cốt lõi (Thẻ HTML, tô màu, Box Model, Flexbox, Responsive) + 4 tuần hoàn thiện Website Cá Nhân!
              </p>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-400">12 tuần học + 4 tuần đồ án</span>
                <Link
                  href="/lesson/w01-first-page"
                  className="flex items-center gap-1.5 rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/25 hover:bg-orange-600 transition"
                >
                  <span>Vào Tuần 1</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Course 2: JavaScript & DOM */}
            <div className="relative group rounded-3xl border-2 border-indigo-200 bg-white p-6 shadow-xl shadow-indigo-500/5 hover:border-indigo-400 hover:shadow-indigo-500/15 transition-all dark:border-indigo-950 dark:bg-slate-900">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 text-2xl shadow-inner">
                  🪄
                </div>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900">
                  Lộ Trình 2 (32 bài)
                </span>
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                JavaScript & Magic DOM
              </h2>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Khai phá tư duy logic: Biến số, hàm, vòng lặp, tương tác cây DOM trực quan, sự kiện click, ES6+ và chế tạo Mini-Game Capstone!
              </p>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-400">Tương tác & Logic</span>
                <Link
                  href="/lesson/01-select-element"
                  className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-indigo-500/25 hover:bg-indigo-700 transition"
                >
                  <span>Học Bài 1</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Key Metric Highlights */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <div className="text-2xl sm:text-3xl font-black text-orange-500">48+</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Bài Học & Đồ Án</div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Chấm Điểm Tự Động</div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <div className="text-2xl sm:text-3xl font-black text-amber-500">24</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Huy Hiệu Danh Dự</div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <div className="text-2xl sm:text-3xl font-black text-indigo-500">16 Tuần</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Tự Làm Web Riêng</div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="border-t border-slate-200/60 bg-white py-16 dark:border-slate-800/80 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Tại Sao Học Sinh Yêu Thích Nền Tảng?
            </h2>
            <p className="mt-2 text-sm text-slate-500">Phương pháp học lập trình thế hệ mới: Thấy là tin - Làm là hiểu!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400 mb-4 text-2xl">
                🌐
              </div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">
                Trực Quan Tức Thì (Live Sandbox)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Mỗi dòng HTML, CSS hoặc JS bạn gõ ngay lập tức biến đổi giao diện thẻ bài, màu sắc và chuyển động trong khung xem thử bên cạnh.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400 mb-4 text-2xl">
                💡
              </div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">
                Hệ Thống Gợi Ý 3 Cấp Độ
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Gặp khó khăn? Không sao cả! Mở gợi ý từ ý tưởng, cú pháp mẫu đến đáp án hoàn chỉnh để không bao giờ bị bế tắc.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400 mb-4 text-2xl">
                🎉
              </div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">
                Phần Thưởng & Gamification
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Bắn pháo hoa mỗi khi vượt ải thành công, tích lũy điểm XP, duy trì chuỗi ngày liên tiếp và khoe bộ sưu tập 24 huy hiệu độc đáo!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Curriculum Preview Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Khám Phá Danh Sách Bài Học
              </h2>
              <p className="text-xs text-slate-500 mt-1">Xem trước nội dung của từng lộ trình học tập</p>
            </div>
            
            {/* Switch preview course */}
            <div className="flex items-center gap-2">
              <div className="flex rounded-xl bg-slate-200 dark:bg-slate-800 p-1 text-xs font-bold">
                <button
                  onClick={() => setPreviewCourse('html-css')}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    previewCourse === 'html-css'
                      ? 'bg-white dark:bg-slate-900 text-orange-600 dark:text-orange-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  HTML & CSS ({HTML_CSS_LESSONS.length})
                </button>
                <button
                  onClick={() => setPreviewCourse('javascript')}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    previewCourse === 'javascript'
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  JavaScript ({JAVASCRIPT_LESSONS.length})
                </button>
              </div>

              <Link
                href="/roadmap"
                className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 ml-2"
              >
                <span>Xem bản đồ</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {previewLessons.slice(0, 9).map((lesson) => (
              <Link
                key={lesson.id}
                href={`/lesson/${lesson.id}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-indigo-300 hover:shadow-md hover:scale-[1.02] transition-all dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">
                      {lesson.course === 'html-css' || lesson.id.startsWith('html') || lesson.id.startsWith('css') || lesson.id.startsWith('proj-html')
                        ? `Bài ${lesson.order}`
                        : `Bài ${lesson.order}`}
                    </span>
                    <span className="font-semibold text-amber-500">+{lesson.xpReward} XP</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 line-clamp-2">
                    {lesson.shortDescription}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span>Học ngay</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {previewLessons.length > 9 && (
            <div className="mt-8 text-center">
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 transition"
              >
                <span>Xem thêm {previewLessons.length - 9} bài học còn lại</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950">
        <p className="font-semibold text-slate-700 dark:text-slate-300">
          JS Magic DOM © 2026 - Nền tảng học HTML, CSS & JavaScript tương tác cho học sinh
        </p>
        <p className="mt-1 text-slate-400">
          Được thiết kế đặc biệt giúp việc học lập trình web trở nên dễ hiểu, trực quan và tràn ngập niềm vui.
        </p>
      </footer>

    </div>
  );
}

