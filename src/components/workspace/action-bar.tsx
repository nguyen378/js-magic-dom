'use client';

import React from 'react';
import { Play, CheckCircle, ArrowLeft, ArrowRight, AlertTriangle, Sparkles, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { TestRunResult } from '@/lib/dom-tester';

interface ActionBarProps {
  onRun: () => void;
  onTest: () => void;
  isTesting: boolean;
  testResult: TestRunResult | null;
  prevLessonId: string | null;
  nextLessonId: string | null;
}

export function ActionBar({
  onRun,
  onTest,
  isTesting,
  testResult,
  prevLessonId,
  nextLessonId,
}: ActionBarProps) {
  return (
    <div className="space-y-3">
      
      {/* Test Error / Alert Notification Banner */}
      {testResult && !testResult.passed && (
        <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900/60 dark:bg-rose-950/40 animate-in fade-in slide-in-from-bottom-2">
          <div className="rounded-full bg-rose-100 p-1.5 text-rose-600 dark:bg-rose-900 dark:text-rose-300 shrink-0">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="flex-1 text-xs">
            <div className="font-bold text-rose-900 dark:text-rose-200 text-sm">
              Chưa hoàn thành hết các bài kiểm tra ({testResult.passedTests}/{testResult.totalTests})
            </div>
            <ul className="mt-2 space-y-1">
              {testResult.testDetails.map((t) => (
                <li key={t.id} className="flex items-center gap-2">
                  <span className={t.passed ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-rose-600 dark:text-rose-400 font-bold'}>
                    {t.passed ? '✓' : '✗'}
                  </span>
                  <span className={t.passed ? 'text-slate-700 dark:text-slate-300' : 'text-rose-800 dark:text-rose-300 font-semibold'}>
                    {t.description}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-2 text-slate-600 dark:text-slate-400 text-[11px]">
              💡 Hãy kiểm tra lại từng bước hoặc nhấn nút "Gợi ý" ở cột bên trái nhé!
            </div>
          </div>
        </div>
      )}

      {/* Main Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        
        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          {prevLessonId ? (
            <Link
              href={`/lesson/${prevLessonId}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Bài trước</span>
            </Link>
          ) : (
            <div />
          )}

          {nextLessonId && (
            <Link
              href={`/lesson/${nextLessonId}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 transition"
            >
              <span className="hidden sm:inline">Bài sau</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Primary Action Buttons */}
        <div className="flex items-center gap-2.5">
          
          {/* Run button */}
          <button
            onClick={onRun}
            className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition cursor-pointer shadow-2xs"
          >
            <Play className="h-4 w-4 text-emerald-500 fill-emerald-500" />
            <span>Chạy thử</span>
          </button>

          {/* Submit & Test button */}
          <button
            onClick={onTest}
            disabled={isTesting}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:opacity-95 disabled:opacity-50 transition cursor-pointer"
          >
            {isTesting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Đang kiểm tra DOM...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
                <span>Kiểm tra & Nộp bài</span>
              </>
            )}
          </button>

        </div>

      </div>

    </div>
  );
}
