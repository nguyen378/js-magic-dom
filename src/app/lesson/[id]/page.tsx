'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getLessonById, getNextLessonId, getPrevLessonId } from '@/content/lessons';
import { LessonGuide } from '@/components/workspace/lesson-guide';
import { CodeEditor } from '@/components/editor/code-editor';
import { LivePreview } from '@/components/workspace/live-preview';
import { ActionBar } from '@/components/workspace/action-bar';
import { CelebrationModal } from '@/components/gamification/celebration-modal';
import { StorageService } from '@/lib/storage';
import { evaluateTests, TestRunResult, buildIframeHtml } from '@/lib/dom-tester';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function LessonPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const lesson = getLessonById(lessonId);

  const editorLanguage = lesson?.editorLanguage || 'javascript';
  const defaultInitialCode = lesson
    ? editorLanguage === 'html'
      ? (lesson.initialHtmlCode ?? lesson.htmlContent ?? '')
      : editorLanguage === 'css'
      ? (lesson.initialCssCode ?? lesson.cssContent ?? '')
      : (lesson.initialJsCode ?? '')
    : '';

  const initialCode = lesson ? StorageService.getCode(lesson.id, defaultInitialCode) : '';
  const [code, setCode] = useState<string>(initialCode);
  const [prevLessonIdState, setPrevLessonIdState] = useState(lessonId);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<TestRunResult | null>(null);
  const [passedList, setPassedList] = useState<string[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationData, setCelebrationData] = useState<{
    xpEarned: number;
    isFirstTime: boolean;
    unlockedBadgeIds: string[];
  }>({ xpEarned: 0, isFirstTime: false, unlockedBadgeIds: [] });

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Sync state when switching lessons
  if (prevLessonIdState !== lessonId) {
    setPrevLessonIdState(lessonId);
    setCode(lesson ? StorageService.getCode(lesson.id, defaultInitialCode) : '');
    setTestResult(null);
    setPassedList([]);
    setShowCelebration(false);
  }

  // Build iframe HTML based on lesson's editor language
  const getIframeHtml = useCallback((userCode: string) => {
    if (!lesson) return '';
    const lang = lesson.editorLanguage || 'javascript';
    if (lang === 'html') {
      return buildIframeHtml(userCode, lesson.cssContent, lesson.initialJsCode || '');
    }
    if (lang === 'css') {
      return buildIframeHtml(lesson.htmlContent, userCode, lesson.initialJsCode || '');
    }
    return buildIframeHtml(lesson.htmlContent, lesson.cssContent, userCode);
  }, [lesson]);

  // Re-run the iframe preview with the current code
  const handleRun = useCallback(() => {
    if (iframeRef.current && lesson) {
      iframeRef.current.srcdoc = getIframeHtml(code);
    }
  }, [lesson, code, getIframeHtml]);

  // Handle keyboard shortcut Ctrl+Enter to Run
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRun]);

  if (!lesson) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center p-6 text-center">
        <div className="rounded-full bg-rose-100 p-4 text-rose-600 dark:bg-rose-950 dark:text-rose-400 mb-4">
          <AlertCircle className="h-10 w-10" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Không tìm thấy bài học</h1>
        <p className="mt-2 text-sm text-slate-500">Bài học bạn đang tìm kiếm không tồn tại hoặc đã được chuyển đi.</p>
        <Link
          href="/roadmap"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Quay lại Bản đồ bài học</span>
        </Link>
      </div>
    );
  }

  const nextLessonId = getNextLessonId(lesson.id);
  const prevLessonId = getPrevLessonId(lesson.id);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    StorageService.saveCode(lesson.id, newCode);
  };

  const handleResetCode = () => {
    if (confirm('Khôi phục lại đoạn mã ban đầu của bài học này?')) {
      setCode(defaultInitialCode);
      StorageService.saveCode(lesson.id, defaultInitialCode);
      if (iframeRef.current) {
        iframeRef.current.srcdoc = getIframeHtml(defaultInitialCode);
      }
    }
  };

  const handleApplySolution = (solutionCode: string) => {
    setCode(solutionCode);
    StorageService.saveCode(lesson.id, solutionCode);
    if (iframeRef.current) {
      iframeRef.current.srcdoc = getIframeHtml(solutionCode);
    }
  };

  // Run assertion tests on the DOM
  const handleTest = async () => {
    if (!iframeRef.current) return;
    setIsTesting(true);

    try {
      // Re-trigger iframe with current code first to make sure state is fresh
      await new Promise<void>((resolve) => {
        const iframe = iframeRef.current;
        if (!iframe) return resolve();

        let resolved = false;
        const done = () => {
          if (resolved) return;
          resolved = true;
          iframe.removeEventListener('load', done);
          setTimeout(resolve, 50);
        };

        setTimeout(done, 500);
        iframe.addEventListener('load', done);
        iframe.srcdoc = getIframeHtml(code);
      });

      const result = await evaluateTests(iframeRef.current, lesson.tests);
      setTestResult(result);

      const passedIds = result.testDetails.filter((t) => t.passed).map((t) => t.id);
      setPassedList(passedIds);

      if (result.passed) {
        // Save progress to local storage
        const { isFirstTime, newBadges } = StorageService.completeLesson(
          lesson.id,
          lesson.xpReward,
          code
        );

        // Notify Navbar of storage update
        window.dispatchEvent(new Event('storage_updated'));

        setCelebrationData({
          xpEarned: lesson.xpReward,
          isFirstTime,
          unlockedBadgeIds: newBadges,
        });

        setShowCelebration(true);
      }
    } catch (err) {
      console.error('Test execution error', err);
    } finally {
      setIsTesting(false);
    }
  };

  // Live preview props based on editor language
  const previewHtml = editorLanguage === 'html' ? code : lesson.htmlContent;
  const previewCss = editorLanguage === 'css' ? code : lesson.cssContent;
  const previewJs = editorLanguage === 'javascript' ? code : (lesson.initialJsCode || '');

  return (
    <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-[1700px] flex-col p-3 sm:p-4 gap-3">
      
      {/* 3-Column Layout Workspace */}
      <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-12 overflow-hidden min-h-0">
        
        {/* Left Column: Lesson Guide & Tasks (4 cols on lg) */}
        <div className="h-full overflow-hidden lg:col-span-4 flex flex-col">
          <LessonGuide
            lesson={lesson}
            passedList={passedList}
            onApplySolution={handleApplySolution}
          />
        </div>

        {/* Middle Column: Monaco Code Editor (4 cols on lg) */}
        <div className="h-full overflow-hidden lg:col-span-4 flex flex-col">
          <CodeEditor
            code={code}
            language={editorLanguage}
            onChange={handleCodeChange}
            onReset={handleResetCode}
            onRun={handleRun}
          />
        </div>

        {/* Right Column: Live DOM Preview & Console (4 cols on lg) */}
        <div className="h-full overflow-hidden lg:col-span-4 flex flex-col">
          <LivePreview
            htmlContent={previewHtml}
            cssContent={previewCss}
            jsCode={previewJs}
            iframeRef={iframeRef}
          />
        </div>

      </div>

      {/* Bottom Action Bar */}
      <div className="shrink-0">
        <ActionBar
          onRun={handleRun}
          onTest={handleTest}
          isTesting={isTesting}
          testResult={testResult}
          prevLessonId={prevLessonId}
          nextLessonId={nextLessonId}
        />
      </div>

      {/* Celebration Modal when Lesson is Completed */}
      {showCelebration && (
        <CelebrationModal
          xpEarned={celebrationData.xpEarned}
          isFirstTime={celebrationData.isFirstTime}
          unlockedBadgeIds={celebrationData.unlockedBadgeIds}
          nextLessonId={nextLessonId}
          onClose={() => setShowCelebration(false)}
          onStay={() => setShowCelebration(false)}
        />
      )}

    </div>
  );
}
