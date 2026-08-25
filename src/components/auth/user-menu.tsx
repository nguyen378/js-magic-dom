'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '@/context/auth-context';
import {
  LogIn,
  LogOut,
  Cloud,
  RefreshCw,
  Check,
  User as UserIcon,
  ShieldAlert,
  Mail,
  Lock,
  UserPlus,
  ArrowLeft,
  X,
} from 'lucide-react';
import Image from 'next/image';

export function UserMenu() {
  const {
    user,
    loading,
    syncStatus,
    signInWithGoogle,
    signInGuest,
    signInWithEmail,
    signUpWithEmail,
    resetPassword,
    logout,
    syncWithCloud,
  } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot'>('signin');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setDisplayName('');
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const openModal = (mode: 'signin' | 'signup' = 'signin') => {
    resetForm();
    setAuthMode(mode);
    setShowLoginModal(true);
  };

  const getFriendlyError = (code?: string) => {
    switch (code) {
      case 'auth/invalid-email':
        return 'Địa chỉ email không đúng định dạng.';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
      case 'auth/invalid-credential':
        return 'Email hoặc mật khẩu không chính xác.';
      case 'auth/email-already-in-use':
        return 'Email này đã được sử dụng. Hãy chọn Đăng nhập.';
      case 'auth/weak-password':
        return 'Mật khẩu phải có ít nhất 6 ký tự.';
      case 'auth/too-many-requests':
        return 'Thử đăng nhập thất bại quá nhiều lần. Vui lòng đợi vài phút.';
      case 'auth/popup-closed-by-user':
        return 'Cửa sổ đăng nhập đã bị đóng trước khi hoàn tất.';
      default:
        return 'Đã có lỗi xảy ra. Vui lòng kiểm tra lại thông tin!';
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!email.trim() || (!password.trim() && authMode !== 'forgot')) {
      setErrorMsg('Vui lòng điền đầy đủ các thông tin.');
      return;
    }

    try {
      setIsSubmitting(true);
      if (authMode === 'signin') {
        await signInWithEmail(email.trim(), password);
        setShowLoginModal(false);
      } else if (authMode === 'signup') {
        if (password.length < 6) {
          setErrorMsg('Mật khẩu phải có tối thiểu 6 ký tự.');
          return;
        }
        await signUpWithEmail(email.trim(), password, displayName.trim() || 'Học sinh');
        setShowLoginModal(false);
      } else if (authMode === 'forgot') {
        await resetPassword(email.trim());
        setSuccessMsg('Đã gửi email đặt lại mật khẩu! Vui lòng kiểm tra hòm thư.');
      }
    } catch (err: unknown) {
      const e = err as { code?: string };
      setErrorMsg(getFriendlyError(e.code));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsSubmitting(true);
      setErrorMsg(null);
      await signInWithGoogle();
      setShowLoginModal(false);
    } catch (err: unknown) {
      const e = err as { code?: string };
      setErrorMsg(getFriendlyError(e.code));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGuestLogin = async () => {
    try {
      setIsSubmitting(true);
      setErrorMsg(null);
      await signInGuest();
      setShowLoginModal(false);
    } catch (err: unknown) {
      const e = err as { code?: string };
      setErrorMsg(getFriendlyError(e.code));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
    );
  }

  const renderModal = () => {
    if (!showLoginModal || !mounted) return null;

    return createPortal(
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
        <div className="relative w-full max-w-md my-auto rounded-2xl bg-white p-6 sm:p-7 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150">
          
          {/* Close button */}
          <button
            type="button"
            onClick={() => setShowLoginModal(false)}
            className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="text-center mb-5 pr-6 pl-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 mb-3">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {authMode === 'signin' && 'Đăng nhập tài khoản'}
              {authMode === 'signup' && 'Đăng ký tài khoản học sinh'}
              {authMode === 'forgot' && 'Khôi phục mật khẩu'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {authMode === 'forgot' 
                ? 'Nhập email để nhận liên kết đặt lại mật khẩu.' 
                : 'Lưu tiến độ học, điểm XP và huy hiệu an toàn trên Firebase.'}
            </p>
          </div>

          {/* Tabs for Sign In / Sign Up */}
          {authMode !== 'forgot' && (
            <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800 mb-4">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signin');
                  setErrorMsg(null);
                }}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition cursor-pointer ${
                  authMode === 'signin'
                    ? 'bg-white text-indigo-600 shadow-xs dark:bg-slate-700 dark:text-indigo-300'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
                }`}
              >
                Đăng nhập
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg(null);
                }}
                className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition cursor-pointer ${
                  authMode === 'signup'
                    ? 'bg-white text-indigo-600 shadow-xs dark:bg-slate-700 dark:text-indigo-300'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
                }`}
              >
                Đăng ký mới
              </button>
            </div>
          )}

          {/* Alerts */}
          {errorMsg && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-2.5 text-xs text-red-600 dark:bg-red-950/40 dark:text-red-400 border border-red-200 dark:border-red-900">
              <ShieldAlert className="h-4 w-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-emerald-50 p-2.5 text-xs text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
              <Check className="h-4 w-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form with Email & Password */}
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            {authMode === 'signup' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Tên của bạn
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ten@hocsinh.edu.vn"
                  className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>

            {authMode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Mật khẩu
                  </label>
                  {authMode === 'signin' && (
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('forgot');
                        setErrorMsg(null);
                        setSuccessMsg(null);
                      }}
                      className="text-xs text-indigo-600 hover:underline dark:text-indigo-400 cursor-pointer"
                    >
                      Quên mật khẩu?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-700 transition cursor-pointer disabled:opacity-50 mt-4"
            >
              {authMode === 'signin' && <LogIn className="h-4 w-4" />}
              {authMode === 'signup' && <UserPlus className="h-4 w-4" />}
              <span>
                {isSubmitting
                  ? 'Đang xử lý...'
                  : authMode === 'signin'
                  ? 'Đăng nhập với Email'
                  : authMode === 'signup'
                  ? 'Tạo tài khoản'
                  : 'Gửi yêu cầu khôi phục'}
              </span>
            </button>
          </form>

          {authMode === 'forgot' && (
            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('signin');
                  setErrorMsg(null);
                  setSuccessMsg(null);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Quay lại đăng nhập
              </button>
            </div>
          )}

          {/* Divider & Social Logins */}
          {authMode !== 'forgot' && (
            <>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <div className="relative flex justify-center text-2xs uppercase">
                  <span className="bg-white px-2 text-slate-400 dark:bg-slate-900">
                    Hoặc đăng nhập nhanh bằng
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700/80 transition cursor-pointer disabled:opacity-50"
                >
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleGuestLogin}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer disabled:opacity-50"
                >
                  <UserIcon className="h-4 w-4" />
                  Khách (Guest)
                </button>
              </div>
            </>
          )}

          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={() => setShowLoginModal(false)}
              className="text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
            >
              Đóng lại
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  // If user is not logged in
  if (!user) {
    return (
      <>
        <button
          onClick={() => openModal('signin')}
          className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 transition cursor-pointer"
        >
          <LogIn className="h-4 w-4" />
          <span className="hidden sm:inline">Lưu tiến độ</span>
          <span className="sm:hidden">Đăng nhập</span>
        </button>

        {/* Auth Modal via Portal */}
        {renderModal()}
      </>
    );
  }

  // If user is logged in
  return (
    <>
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-full p-1 border border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-750 transition cursor-pointer shadow-2xs"
        >
          {user.photoURL ? (
            <Image
              src={user.photoURL}
              alt={user.displayName || 'User'}
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white uppercase">
              {user.displayName ? user.displayName.charAt(0) : (user.isAnonymous ? 'K' : 'U')}
            </div>
          )}

          {/* Sync Status Badge */}
          <div className="pr-1.5 flex items-center">
            {syncStatus === 'syncing' ? (
              <span title="Đang đồng bộ Firebase...">
                <RefreshCw className="h-3.5 w-3.5 text-blue-500 animate-spin" />
              </span>
            ) : syncStatus === 'synced' ? (
              <span title="Đã đồng bộ lên Firebase">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
              </span>
            ) : syncStatus === 'error' ? (
              <span title="Lỗi đồng bộ">
                <ShieldAlert className="h-3.5 w-3.5 text-amber-500" />
              </span>
            ) : (
              <span title="Đã kết nối Firebase">
                <Cloud className="h-3.5 w-3.5 text-slate-400" />
              </span>
            )}
          </div>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white p-3 shadow-xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 z-50 animate-in fade-in slide-in-from-top-2">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-2 px-2">
              <p className="font-bold text-sm text-slate-900 dark:text-white truncate">
                {user.displayName || (user.isAnonymous ? 'Học sinh (Khách)' : 'Học sinh')}
              </p>
              {user.email && (
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  {user.email}
                </p>
              )}
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-0.5 text-2xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Firebase Cloud Active
              </div>
            </div>

            <div className="space-y-1">
              <button
                onClick={async () => {
                  await syncWithCloud();
                }}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <RefreshCw className={`h-4 w-4 ${syncStatus === 'syncing' ? 'animate-spin text-blue-500' : 'text-slate-400'}`} />
                <span>{syncStatus === 'syncing' ? 'Đang đồng bộ...' : 'Đồng bộ lại dữ liệu'}</span>
              </button>

              <button
                onClick={async () => {
                  setIsOpen(false);
                  await logout();
                }}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/50 transition cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                <span>Đăng xuất</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal via Portal */}
      {renderModal()}
    </>
  );
}
