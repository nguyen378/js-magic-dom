import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ALL_LESSONS } from '@/content/lessons';

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-slate-50 dark:bg-slate-950">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-indigo-700 backdrop-blur-md shadow-xs dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300 mb-6 animate-in fade-in">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Nền Tảng Thực Hành JavaScript DOM Cho Học Sinh Cấp 2</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl dark:text-white leading-tight">
            Học Lập Trình Web <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
              Trực Quan & Hứng Thú
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Không còn những dòng lệnh console khô khan. Tự tay điều khiển màu sắc, nút bấm, quái vật và tạo nên những mini-game kỳ diệu với JavaScript DOM!
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/lesson/01-select-element"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-indigo-500/25 hover:opacity-95 hover:scale-105 transition-all"
            >
              <span>Bắt Đầu Bài 1 Ngay</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/roadmap"
              className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-bold text-slate-700 shadow-xs hover:bg-slate-50 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition"
            >
              <span>Xem Lộ Trình Học</span>
            </Link>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400">32+</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Bài Học & Đồ Án</div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Chấm Điểm Tự Động</div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <div className="text-2xl sm:text-3xl font-black text-amber-500">18</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Huy Hiệu Danh Dự</div>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center dark:border-slate-800 dark:bg-slate-900/70">
              <div className="text-2xl sm:text-3xl font-black text-pink-500">Miễn phí</div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Tự Học Tại Nhà</div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="border-t border-slate-200/60 bg-white py-16 dark:border-slate-800/80 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Tại Sao Học Sinh Cấp 2 Yêu Thích JS Magic DOM?
            </h2>
            <p className="mt-2 text-sm text-slate-500">Phương pháp học lập trình thế hệ mới: Thấy là tin - Làm là hiểu!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 mb-4 text-2xl">
                📱
              </div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">
                Trực Quan Tức Thì (Live DOM)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Mỗi dòng mã bạn gõ ngay lập tức biến đổi các hộp quà, nút bấm, đèn phòng và khu vườn trong khung xem thử bên cạnh.
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
                Bắn pháo hoa mỗi khi vượt ải thành công, tích lũy điểm XP, duy trì chuỗi ngày liên tiếp và khoe bộ sưu tập huy hiệu độc đáo!
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
                Khám Phá Các Chặng Bài Học
              </h2>
              <p className="text-xs text-slate-500 mt-1">Từ các câu lệnh căn bản nhất đến đồ án game hoàn chỉnh</p>
            </div>
            <Link
              href="/roadmap"
              className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            >
              <span>Xem toàn bộ lộ trình</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_LESSONS.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/lesson/${lesson.id}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-indigo-300 hover:shadow-md hover:scale-[1.02] transition-all dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">Bài {lesson.order}</span>
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

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950">
        <p className="font-semibold text-slate-700 dark:text-slate-300">
          JS Magic DOM © 2026 - Nền tảng học JavaScript tương tác cho học sinh
        </p>
        <p className="mt-1 text-slate-400">
          Được thiết kế đặc biệt giúp việc học DOM trở nên dễ hiểu, trực quan và tràn ngập niềm vui.
        </p>
      </footer>

    </div>
  );
}
