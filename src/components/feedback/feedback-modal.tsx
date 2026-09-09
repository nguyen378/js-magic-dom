'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  MessageSquareHeart, 
  X, 
  Star, 
  Bug, 
  Lightbulb, 
  Sparkles, 
  ThumbsUp, 
  MessageSquare, 
  Code2, 
  CheckCircle2, 
  Send, 
  Loader2, 
  AlertCircle,
  User as UserIcon,
  Mail,
  FileCode
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAuth } from '@/context/auth-context';
import { sendFeedbackToFirebase, FeedbackCategory } from '@/lib/feedback';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonId?: string;
  lessonTitle?: string;
  course?: string;
  userCode?: string;
}

export function FeedbackModal({
  isOpen,
  onClose,
  lessonId,
  lessonTitle,
  course,
  userCode,
}: FeedbackModalProps) {
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);

  // Form states
  const [category, setCategory] = useState<FeedbackCategory>(lessonId ? 'bug' : 'content');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [customName, setCustomName] = useState<string>('');
  const [customEmail, setCustomEmail] = useState<string>('');
  const [attachCode, setAttachCode] = useState<boolean>(Boolean(userCode));

  // Submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrorMessage(null);
      setMessage('');
      setCategory(lessonId ? 'bug' : 'content');
      setRating(5);
      setAttachCode(Boolean(userCode));
    }
  }, [isOpen, lessonId, userCode]);

  if (!isOpen || !mounted) return null;

  const categories: { id: FeedbackCategory; label: string; icon: React.ReactNode; color: string }[] = [
    { 
      id: 'bug', 
      label: 'Báo lỗi bài tập', 
      icon: <Bug className="h-3.5 w-3.5" />,
      color: 'hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40'
    },
    { 
      id: 'content', 
      label: 'Góp ý lý thuyết', 
      icon: <Lightbulb className="h-3.5 w-3.5" />,
      color: 'hover:border-amber-300 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40'
    },
    { 
      id: 'feature', 
      label: 'Đề xuất tính năng', 
      icon: <Sparkles className="h-3.5 w-3.5" />,
      color: 'hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40'
    },
    { 
      id: 'rating', 
      label: 'Đánh giá chung', 
      icon: <ThumbsUp className="h-3.5 w-3.5" />,
      color: 'hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
    },
    { 
      id: 'other', 
      label: 'Góp ý khác', 
      icon: <MessageSquare className="h-3.5 w-3.5" />,
      color: 'hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/40'
    },
  ];

  const ratingDescriptions: Record<number, string> = {
    1: '😞 Rất khó hiểu / Chưa hài lòng',
    2: '🙁 Hơi khó / Cần cải thiện thêm',
    3: '😐 Tạm ổn / Mức độ trung bình',
    4: '🙂 Rất hay & Dễ hiểu',
    5: '🤩 Tuyệt vời / Cực kỳ thích!',
  };

  const activeRating = hoverRating || rating;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setErrorMessage('Vui lòng nhập nội dung góp ý của bạn.');
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      await sendFeedbackToFirebase({
        category,
        rating,
        message: message.trim(),
        userName: customName.trim() || undefined,
        userEmail: customEmail.trim() || undefined,
        lessonId,
        lessonTitle,
        course,
        userCode,
        attachCode,
      });

      setIsSuccess(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#a855f7', '#ec4899', '#10b981', '#f59e0b'],
        });
      } catch (err) {
        // Fallback
      }
    } catch (err: unknown) {
      console.error('Lỗi khi gửi feedback:', err);
      setErrorMessage('Không thể gửi phản hồi lúc này. Vui lòng kiểm tra kết nối mạng và thử lại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-3 sm:p-5 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg my-auto rounded-3xl bg-white p-5 sm:p-7 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Content */}
        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pr-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 to-indigo-600 text-white shadow-md shadow-pink-500/20">
                <MessageSquareHeart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  Gửi Phản Hồi & Góp Ý
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Ý kiến của bạn sẽ được lưu trực tiếp vào Firebase để giúp hoàn thiện bài học!
                </p>
              </div>
            </div>

            {/* If from specific lesson, show Lesson Context Pill */}
            {lessonTitle && (
              <div className="mb-4 flex items-center gap-2 rounded-xl bg-indigo-50/70 p-2.5 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                <FileCode className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                    Đang góp ý cho bài học:
                  </span>
                  <p className="text-xs font-bold text-indigo-950 dark:text-indigo-200 truncate">
                    {lessonTitle} {lessonId ? `(${lessonId})` : ''}
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-xs text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  1. Bạn muốn phản hồi về nội dung gì?
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => {
                    const isSelected = category === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id)}
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs shadow-indigo-500/20'
                            : `bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700 ${cat.color}`
                        }`}
                      >
                        {cat.icon}
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  2. Mức độ hài lòng / Dễ hiểu của bài giảng:
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        className="p-1 text-slate-300 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`h-6 w-6 transition-colors ${
                            star <= activeRating
                              ? 'fill-amber-400 text-amber-400 drop-shadow-xs'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {ratingDescriptions[activeRating]}
                  </span>
                </div>
              </div>

              {/* Message text area */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  3. Nội dung phản hồi chi tiết: <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hãy chia sẻ chi tiết vấn đề bạn gặp phải (ví dụ: lỗi chấm bài ở dòng nào, chỗ lý thuyết nào chưa rõ, hoặc đề xuất tính năng mới)..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/60 p-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:bg-slate-800"
                />
              </div>

              {/* Attach code checkbox (if userCode is available) */}
              {userCode && (
                <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
                  <input
                    type="checkbox"
                    id="attach-code"
                    checked={attachCode}
                    onChange={(e) => setAttachCode(e.target.checked)}
                    className="h-4 w-4 rounded-md text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <label htmlFor="attach-code" className="text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer flex items-center gap-1.5">
                    <Code2 className="h-3.5 w-3.5 text-indigo-500" />
                    <span>Đính kèm mã nguồn bài làm hiện tại để hỗ trợ kiểm tra lỗi</span>
                  </label>
                </div>
              )}

              {/* User Identity Info */}
              {user ? (
                <div className="flex items-center justify-between rounded-xl bg-slate-100/70 px-3 py-2 text-2xs font-medium text-slate-600 dark:bg-slate-800/60 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <UserIcon className="h-3 w-3 text-indigo-500" />
                    <span>Đang gửi từ: <strong className="text-slate-800 dark:text-slate-200">{user.displayName || (user.isAnonymous ? 'Học sinh (Khách)' : 'Học sinh')}</strong></span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">● Đã liên kết</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Tên của bạn (Tùy chọn)
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        placeholder="Ví dụ: Minh Quân"
                        className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-8 pr-2.5 text-xs text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Email nhận phản hồi (Tùy chọn)
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="email"
                        value={customEmail}
                        onChange={(e) => setCustomEmail(e.target.value)}
                        placeholder="ten@gmail.com"
                        className="w-full rounded-xl border border-slate-200 bg-white py-1.5 pl-8 pr-2.5 text-xs text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:from-indigo-700 hover:to-purple-700 transition cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Đang lưu vào Firebase...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Gửi Phản Hồi</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-6 text-center animate-in zoom-in-95 duration-200">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 shadow-lg shadow-emerald-500/20 animate-bounce">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Cảm Ơn Bạn Đã Góp Ý! ✨
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Thông tin phản hồi của bạn đã được ghi nhận an toàn trên hệ thống <strong>Firebase</strong>. Đội ngũ phát triển sẽ xem xét và tối ưu bài học sớm nhất!
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition cursor-pointer"
            >
              Tiếp tục học tập
            </button>
          </div>
        )}

      </div>
    </div>,
    document.body
  );
}
