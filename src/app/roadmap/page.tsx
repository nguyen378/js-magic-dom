'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ALL_LESSONS, 
  JAVASCRIPT_LESSONS, 
  FOUNDATION_LESSONS, 
  DOM_LESSONS, 
  ADVANCED_LESSONS, 
  CAPSTONE_LESSONS,
  HTML_CSS_LESSONS,
  WEEK1_4_HTML_FOUNDATION,
  WEEK5_8_CSS_STYLING,
  WEEK9_12_FLEXBOX_RESPONSIVE,
  WEEK13_16_CAPSTONE_PORTFOLIO,
  MULTI_LANG_LESSONS,
  ML_STAGE1_FOUNDATION,
  ML_STAGE2_CONTROL_COLLECTIONS,
  ML_STAGE3_OOP_EXCEPTIONS,
  ML_STAGE4_CAPSTONE
} from '@/content/lessons';
import { BADGES } from '@/content/badges';
import { useProgress } from '@/lib/storage';
import { Lesson, CourseType } from '@/types/lesson';
import { 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Star, 
  Award, 
  BookOpen, 
  Layers, 
  Zap, 
  Code,
  Globe,
  Palette,
  Layout,
  Crown,
  Terminal,
  Cpu
} from 'lucide-react';

interface Chapter {
  id: string;
  track: string;
  course: CourseType;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  lessons: Lesson[];
}

const JS_CHAPTERS: Chapter[] = [
  {
    id: 'f_ch1',
    course: 'javascript',
    track: 'foundation',
    title: 'Học Phần 1A: Khởi Đầu Pháp Thuật & Hàm',
    subtitle: 'Khai báo biến let/const, kiểu dữ liệu, chuỗi ký tự, đấu trường toán tử và cuộn giấy Hàm Function',
    icon: '📘',
    color: 'from-blue-500 to-indigo-600',
    lessons: FOUNDATION_LESSONS.slice(0, 5),
  },
  {
    id: 'f_ch2',
    course: 'javascript',
    track: 'foundation',
    title: 'Học Phần 1B: Bậc Thầy Logic, Mảng & Đối Tượng',
    subtitle: 'Rẽ nhánh if/else, vòng xoáy lặp lại, balo mảng Array, siêu phương thức Map/Filter và Object RPG',
    icon: '⚡',
    color: 'from-purple-500 to-indigo-600',
    lessons: FOUNDATION_LESSONS.slice(5, 10),
  },
  {
    id: 'dom_ch1',
    course: 'javascript',
    track: 'dom',
    title: 'Học Phần 2A: Tân Binh DOM & Style',
    subtitle: 'Cây DOM, chọn phần tử ID, đổi chữ, màu sắc, ẩn hiện và thuộc tính ảnh',
    icon: '🏰',
    color: 'from-teal-500 to-emerald-600',
    lessons: DOM_LESSONS.slice(0, 5),
  },
  {
    id: 'dom_ch2',
    course: 'javascript',
    track: 'dom',
    title: 'Học Phần 2B: Bậc Thầy Sự Kiện & Tương Tác',
    subtitle: 'Sự kiện click, đếm số, bật tắt class, querySelector, sự kiện input, xóa & tạo thẻ mới',
    icon: '🪄',
    color: 'from-indigo-500 to-purple-600',
    lessons: DOM_LESSONS.slice(5, 12),
  },
  {
    id: 'adv_ch1',
    course: 'javascript',
    track: 'advanced',
    title: 'Học Phần 3: Pháp Thuật ES6+ & Bất Đồng Bộ (Async API)',
    subtitle: 'Destructuring, Spread Operator, hộp lưu trữ JSON & LocalStorage, Promise và Fetch API',
    icon: '🚀',
    color: 'from-cyan-500 to-blue-600',
    lessons: ADVANCED_LESSONS,
  },
  {
    id: 'cap_ch1',
    course: 'javascript',
    track: 'capstone',
    title: 'Học Phần 4: Đồ Án Thực Chiến & Capstone Games',
    subtitle: 'Ứng dụng To-Do List, Tabs UI, Toast Message, Form Validator và Game Đập Quái Vật Whack-A-Mole',
    icon: '👑',
    color: 'from-amber-500 to-rose-600',
    lessons: CAPSTONE_LESSONS,
  },
];

const HTML_CSS_CHAPTERS: Chapter[] = [
  {
    id: 'html_stage1',
    course: 'html-css',
    track: 'w-html-foundation',
    title: 'Giai Đoạn 1 (Buổi 1 - 4): Nền Tảng Cấu Trúc HTML5',
    subtitle: '1 tiết 60p/buổi (2 Cơ bản + 2 Nâng cao): Cấu trúc HTML5, thẻ tiêu đề h1-h6, định dạng in đậm/nghiêng, ảnh placeholder, danh sách ol/ul, liên kết target="_blank"/bookmark, semantic header/nav/main/section/article/aside, bảng table và biểu mẫu form validation.',
    icon: '🌐',
    color: 'from-orange-500 to-amber-600',
    lessons: WEEK1_4_HTML_FOUNDATION,
  },
  {
    id: 'html_stage2',
    course: 'html-css',
    track: 'w-css-styling',
    title: 'Giai Đoạn 2 (Buổi 5 - 8): Tô Màu, CSS Box Model & Position',
    subtitle: '1 tiết 60p/buổi (2 Cơ bản + 2 Nâng cao): Nhập môn CSS, bộ chọn class/id, Specificity, Box Model box-sizing border-box, Margin bottom, nút bấm .btn UI, avatar tròn 50%, bo góc card 16px, hover transition, nổi khối 3D translateY và CSS Position fixed/relative/absolute.',
    icon: '🎨',
    color: 'from-cyan-500 to-blue-600',
    lessons: WEEK5_8_CSS_STYLING,
  },
  {
    id: 'html_stage3',
    course: 'html-css',
    track: 'w-flexbox-responsive',
    title: 'Giai Đoạn 3 (Buổi 9 - 12): Bố Cục Flexbox & Thiết Kế Responsive',
    subtitle: '1 tiết 60p/buổi (2 Cơ bản + 2 Nâng cao): Flexbox 1 chiều display: flex, căn ngang/dọc, gap, flex-wrap lưới 2-3 cột sản phẩm, card equal height, Media Query @media (max-width: 768px) tối ưu điện thoại, sửa lỗi HTML/CSS và biến màu sắc :root var().',
    icon: '📐',
    color: 'from-indigo-500 to-purple-600',
    lessons: WEEK9_12_FLEXBOX_RESPONSIVE,
  },
  {
    id: 'html_stage4',
    course: 'html-css',
    track: 'w-capstone-portfolio',
    title: 'Giai Đoạn 4 (Buổi 13 - 16): Đồ Án Tốt Nghiệp — Website Cá Nhân',
    subtitle: '4 buổi đồ án thực chiến: Khung HTML Semantic 5 khối hoàn chỉnh, Thiết kế giao diện CSS & Dàn layout Flexbox máy tính, Tối ưu Responsive Mobile & Hiệu ứng tương tác hover/transition, Tổng duyệt Clean Code và Hoàn thiện bài thuyết trình sản phẩm.',
    icon: '👑',
    color: 'from-emerald-500 to-teal-600',
    lessons: WEEK13_16_CAPSTONE_PORTFOLIO,
  },
];

const MULTI_LANG_CHAPTERS: Chapter[] = [
  {
    id: 'ml_stage1',
    course: 'multi-lang',
    track: 'ml-foundation',
    title: 'Giai Đoạn 1 (Module 1 - 3): Nền Tảng Cú Pháp & Logic',
    subtitle: 'So sánh đối chiếu cú pháp Biến số, Kiểu dữ liệu, Cấu trúc rẽ nhánh điều kiện If/Else/Elif và Vòng lặp For/While trên JavaScript, Python và C++.',
    icon: '💻',
    color: 'from-blue-500 to-indigo-600',
    lessons: ML_STAGE1_FOUNDATION,
  },
  {
    id: 'ml_stage2',
    course: 'multi-lang',
    track: 'ml-control',
    title: 'Giai Đoạn 2 (Module 4 - 6): Hàm & Cấu Trúc Tập Hợp',
    subtitle: 'Định nghĩa Hàm Function & Tham số, Quản lý mảng Array (JS) vs List (Python) vs std::vector (C++), Xử lý và cắt chuỗi ký tự String Slicing.',
    icon: '🎒',
    color: 'from-emerald-500 to-teal-600',
    lessons: ML_STAGE2_CONTROL_COLLECTIONS,
  },
  {
    id: 'ml_stage3',
    course: 'multi-lang',
    track: 'ml-data-oop',
    title: 'Giai Đoạn 3 (Module 7 - 10): I/O, Hướng Đối Tượng (OOP) & Ngoại Lệ',
    subtitle: 'Luồng nhập xuất dữ liệu Console I/O, Lớp Class & Đối tượng Object, Kế thừa & Đa hình (Inheritance), Bẫy lỗi an toàn với Try-Catch và Try-Except.',
    icon: '🏛️',
    color: 'from-purple-500 to-pink-600',
    lessons: ML_STAGE3_OOP_EXCEPTIONS,
  },
  {
    id: 'ml_stage4',
    course: 'multi-lang',
    track: 'ml-capstone',
    title: 'Giai Đoạn 4 (Module 11 - 12): Thư Viện Chuẩn & Đồ Án Capstone',
    subtitle: 'Khai thác Thư viện chuẩn (Math, Random, Sorting) và Hoàn thành Đồ án Tốt nghiệp Đa Ngôn Ngữ: Ứng dụng Quản lý Task & Hệ Thống Điểm Thưởng.',
    icon: '👑',
    color: 'from-amber-500 to-rose-600',
    lessons: ML_STAGE4_CAPSTONE,
  },
];

export default function RoadmapPage() {
  const progress = useProgress();
  const [selectedCourse, setSelectedCourse] = useState<CourseType>('html-css');
  const [activeTab, setActiveTab] = useState<string>('all');

  const currentCourseLessons = 
    selectedCourse === 'html-css' 
      ? HTML_CSS_LESSONS 
      : selectedCourse === 'multi-lang'
      ? MULTI_LANG_LESSONS
      : JAVASCRIPT_LESSONS;

  const currentCourseChapters = 
    selectedCourse === 'html-css' 
      ? HTML_CSS_CHAPTERS 
      : selectedCourse === 'multi-lang'
      ? MULTI_LANG_CHAPTERS
      : JS_CHAPTERS;

  const completedInCourse = currentCourseLessons.filter((l) => progress.completedLessons.includes(l.id)).length;
  const courseProgressPercent = Math.round((completedInCourse / currentCourseLessons.length) * 100);

  const filteredChapters = currentCourseChapters.filter((ch) => {
    if (activeTab === 'all') return true;
    return ch.track === activeTab;
  });

  const handleCourseChange = (course: CourseType) => {
    setSelectedCourse(course);
    setActiveTab('all');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 mb-3">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span>
              {selectedCourse === 'multi-lang'
                ? 'Lộ Trình Đa Ngôn Ngữ: JavaScript • Python • C++ (12 Module Thực Chiến)'
                : selectedCourse === 'html-css'
                ? 'Chương Trình 16 Tuần: 12 Tuần Thực Hành + 4 Tuần Xây Dựng Website Cá Nhân'
                : 'Lộ Trình JavaScript DOM: 32 Bài Học Tương Tác & Chế Tạo Game'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Bản Đồ Phiêu Lưu Lập Trình
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {selectedCourse === 'multi-lang'
              ? 'Học lập trình toàn diện: Nắm vững tư duy logic và đối chiếu cú pháp song song giữa JavaScript, Python và C++!'
              : 'Mỗi tuần 1 tiết 60 phút thực hành trực quan: từ tạo khung xương, tô màu giao diện đến hoàn thiện Website cá nhân hoàn chỉnh!'}
          </p>
        </div>

        {/* Course Switcher Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80 backdrop-blur-md shadow-inner gap-1">
            <button
              onClick={() => handleCourseChange('html-css')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                selectedCourse === 'html-css'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span>🌐 HTML & CSS (16 Tuần)</span>
            </button>

            <button
              onClick={() => handleCourseChange('javascript')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                selectedCourse === 'javascript'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Zap className="h-4 w-4" />
              <span>🪄 JS Magic DOM ({JAVASCRIPT_LESSONS.length} bài)</span>
            </button>

            <button
              onClick={() => handleCourseChange('multi-lang')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                selectedCourse === 'multi-lang'
                  ? 'bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Terminal className="h-4 w-4" />
              <span>💻 Đa Ngôn Ngữ: JS • Python • C++ ({MULTI_LANG_LESSONS.length} Mod)</span>
            </button>
          </div>
        </div>

        {/* Progress Stats Card */}
        <div className="mb-8 rounded-3xl border border-indigo-100 bg-white p-6 sm:p-8 shadow-xl shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tiến độ: {selectedCourse === 'html-css' ? 'HTML & CSS (16 Tuần)' : 'JavaScript'}
              </div>
              <div className="mt-1 flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400">
                  {completedInCourse}
                </span>
                <span className="text-slate-500 font-semibold">/ {currentCourseLessons.length} bài ({selectedCourse === 'html-css' ? `${completedInCourse}/16 tuần` : 'bài học'})</span>
              </div>
              {/* Progress Bar */}
              <div className="mt-3 h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    selectedCourse === 'html-css'
                      ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400'
                      : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                  }`}
                  style={{ width: `${courseProgressPercent}%` }}
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
                {progress.xp >= 1500 ? '👑 Đại Sư Lập Trình' : progress.xp >= 600 ? '🧙‍♂️ Học Viên Lành Nghề' : '🪄 Tân Binh Đang Luyện Tập'}
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-800 pt-4 sm:pt-0 sm:pl-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Huy hiệu đã đạt</div>
              <div className="mt-1 flex items-center justify-center sm:justify-start gap-2 text-3xl font-black text-purple-600 dark:text-purple-400">
                <Award className="h-7 w-7" />
                <span>{progress.badges.length} / {BADGES.length}</span>
              </div>
              <div className="mt-2 text-xs text-slate-500">
                {progress.badges.length === BADGES.length ? '🏆 Đã mở khóa trọn bộ huy hiệu!' : 'Còn nhiều huy hiệu đang chờ'}
              </div>
            </div>

          </div>
        </div>

        {/* Track Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
              activeTab === 'all'
                ? selectedCourse === 'html-css'
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Toàn Bộ ({currentCourseLessons.length})</span>
            <span className="ml-1 rounded-full bg-white/20 px-1.5 py-0.2 text-[10px]">
              {completedInCourse}
            </span>
          </button>

          {selectedCourse === 'html-css' ? (
            <>
              <button
                onClick={() => setActiveTab('w-html-foundation')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'w-html-foundation'
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>📑 GĐ 1: HTML (Tuần 1-4)</span>
              </button>

              <button
                onClick={() => setActiveTab('w-css-styling')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'w-css-styling'
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <Palette className="h-3.5 w-3.5" />
                <span>🎨 GĐ 2: CSS (Tuần 5-8)</span>
              </button>

              <button
                onClick={() => setActiveTab('w-flexbox-responsive')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'w-flexbox-responsive'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <Layout className="h-3.5 w-3.5" />
                <span>📐 GĐ 3: Flexbox (Tuần 9-12)</span>
              </button>

              <button
                onClick={() => setActiveTab('w-capstone-portfolio')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'w-capstone-portfolio'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <Crown className="h-3.5 w-3.5" />
                <span>👑 GĐ 4: Đồ Án (Tuần 13-16)</span>
              </button>
            </>
          ) : selectedCourse === 'multi-lang' ? (
            <>
              <button
                onClick={() => setActiveTab('ml-foundation')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'ml-foundation'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <Code className="h-3.5 w-3.5" />
                <span>💻 GĐ 1: Cú Pháp (Mod 1-3)</span>
              </button>

              <button
                onClick={() => setActiveTab('ml-control')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'ml-control'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>🎒 GĐ 2: Hàm & Mảng (Mod 4-6)</span>
              </button>

              <button
                onClick={() => setActiveTab('ml-data-oop')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'ml-data-oop'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <Cpu className="h-3.5 w-3.5" />
                <span>🏛️ GĐ 3: OOP & Lỗi (Mod 7-10)</span>
              </button>

              <button
                onClick={() => setActiveTab('ml-capstone')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'ml-capstone'
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <Crown className="h-3.5 w-3.5" />
                <span>👑 GĐ 4: Capstone (Mod 11-12)</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setActiveTab('foundation')}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                  activeTab === 'foundation'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>📘 JS Căn Bản ({FOUNDATION_LESSONS.length})</span>
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
                <span>🪄 HTML DOM ({DOM_LESSONS.length})</span>
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
                <span>⚡ ES6+ & Async ({ADVANCED_LESSONS.length})</span>
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
                <span>👑 Đồ Án & Game ({CAPSTONE_LESSONS.length})</span>
              </button>
            </>
          )}
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
                    {completedInChapter} / {chapter.lessons.length} {selectedCourse === 'multi-lang' ? 'module hoàn thành' : 'bài hoàn thành'}
                  </div>
                </div>

                {/* Lesson Cards Grid */}
                <div className="space-y-3.5">
                  {chapter.lessons.map((lesson) => {
                    const courseIdx = currentCourseLessons.findIndex((l) => l.id === lesson.id);
                    const isCompleted = progress.completedLessons.includes(lesson.id);
                    
                    // Unlocked if first in track/chapter, or first overall in course, or previous lesson completed
                    const isUnlocked = 
                      courseIdx === 0 || 
                      lesson.id === 'b01-01' ||
                      lesson.id === 'b05-01' ||
                      lesson.id === 'b09-01' ||
                      lesson.id === 'b13-01' ||
                      lesson.id === 'w01-first-page' ||
                      lesson.id === '01-select-element' || 
                      lesson.id === 'adv01-es6-features' ||
                      lesson.id === '13-todo-list' ||
                      lesson.id === 'ml01-variables' ||
                      lesson.id === 'ml04-functions' ||
                      lesson.id === 'ml07-io' ||
                      lesson.id === 'ml11-stdlib' ||
                      progress.completedLessons.includes(currentCourseLessons[courseIdx - 1]?.id);

                    const getLessonBadgeLabel = () => {
                      if (lesson.id.startsWith('ml')) {
                        return `M${lesson.order}`;
                      }
                      if (lesson.id.startsWith('b')) {
                        const parts = lesson.id.replace('b', '').split('-');
                        if (parts.length === 2) {
                          const buoi = parseInt(parts[0], 10);
                          const bai = parseInt(parts[1], 10);
                          return `${buoi}.${bai}`;
                        }
                      }
                      if (lesson.course === 'html-css' || lesson.id.startsWith('w')) {
                        return `T${lesson.week || lesson.order}`;
                      }
                      if (lesson.track === 'foundation') return `F${lesson.order}`;
                      if (lesson.track === 'advanced') return `ES${lesson.order}`;
                      if (lesson.track === 'capstone') return `P${lesson.order}`;
                      return `D${lesson.order}`;
                    };

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
                                ? selectedCourse === 'html-css'
                                  ? 'bg-gradient-to-tr from-orange-500 to-amber-600 text-white shadow-orange-500/20'
                                  : 'bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-indigo-500/20'
                                : 'bg-slate-200 text-slate-400 dark:bg-slate-800'
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : isUnlocked ? (
                              <span>{getLessonBadgeLabel()}</span>
                            ) : (
                              <Lock className="h-4 w-4" />
                            )}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                                {lesson.title}
                              </h3>
                              {lesson.difficulty === 'easy' && (
                                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                  🟢 Cơ bản
                                </span>
                              )}
                              {lesson.difficulty === 'medium' && (
                                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                                  🟡 Nâng cao
                                </span>
                              )}
                              {lesson.difficulty === 'hard' && (
                                <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-bold text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                                  👑 Đồ án
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
                              <span>60 phút thực hành</span>
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
                                  : selectedCourse === 'html-css'
                                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/20'
                                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20'
                              }`}
                            >
                              <span>{isCompleted ? 'Làm lại' : 'Vào tiết học'}</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          ) : (
                            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 px-4 py-2">
                              <Lock className="h-3.5 w-3.5" />
                              <span>Chưa mở</span>
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


