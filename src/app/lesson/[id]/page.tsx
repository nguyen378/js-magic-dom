'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getLessonById, getNextLessonId, getPrevLessonId } from '@/content/lessons';
import { LessonGuide } from '@/components/workspace/lesson-guide';
import { CodeEditor } from '@/components/editor/code-editor';
import { LivePreview, ConsoleLog } from '@/components/workspace/live-preview';
import { ActionBar } from '@/components/workspace/action-bar';
import { CelebrationModal } from '@/components/gamification/celebration-modal';
import { StorageService } from '@/lib/storage';
import { evaluateTests, TestRunResult, buildIframeHtml } from '@/lib/dom-tester';
import { executeMultiLangCode } from '@/lib/multi-lang-runner';
import { EditorLanguage } from '@/types/lesson';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function LessonPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const lesson = getLessonById(lessonId);

  const availableLanguages: EditorLanguage[] = 
    lesson?.availableLanguages && lesson.availableLanguages.length > 0
      ? lesson.availableLanguages
      : lesson?.editorLanguage
      ? [lesson.editorLanguage]
      : ['javascript'];

  const defaultLang: EditorLanguage = lesson?.editorLanguage || availableLanguages[0] || 'javascript';
  const [selectedLanguage, setSelectedLanguage] = useState<EditorLanguage>(defaultLang);

  const getDefaultCodeForLang = useCallback((lang: EditorLanguage) => {
    if (!lesson) return '';
    if (lang === 'python') return lesson.initialPyCode || '';
    if (lang === 'cpp') return lesson.initialCppCode || '';
    if (lang === 'html') return lesson.initialHtmlCode ?? lesson.htmlContent ?? '';
    if (lang === 'css') return lesson.initialCssCode ?? lesson.cssContent ?? '';
    return lesson.initialJsCode ?? '';
  }, [lesson]);

  const getStorageKey = useCallback((lang: EditorLanguage) => {
    if (!lesson) return '';
    if (lesson.course === 'multi-lang' || (lesson.availableLanguages && lesson.availableLanguages.length > 1)) {
      return `${lesson.id}_${lang}`;
    }
    return lesson.id;
  }, [lesson]);

  const [code, setCode] = useState<string>(() => {
    if (!lesson) return '';
    return StorageService.getCode(getStorageKey(defaultLang), getDefaultCodeForLang(defaultLang));
  });

  const [prevLessonIdState, setPrevLessonIdState] = useState(lessonId);
  const [customLogs, setCustomLogs] = useState<ConsoleLog[]>([]);
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
    const newDefaultLang = lesson?.editorLanguage || (lesson?.availableLanguages ? lesson.availableLanguages[0] : 'javascript');
    setSelectedLanguage(newDefaultLang);
    const initialForNew = lesson ? StorageService.getCode(getStorageKey(newDefaultLang), getDefaultCodeForLang(newDefaultLang)) : '';
    setCode(initialForNew);
    setCustomLogs([]);
    setTestResult(null);
    setPassedList([]);
    setShowCelebration(false);
  }

  // Handle switching languages (e.g. JS -> Python -> C++)
  const handleLanguageChange = (newLang: EditorLanguage) => {
    if (newLang === selectedLanguage) return;
    // 1. Save current code
    StorageService.saveCode(getStorageKey(selectedLanguage), code);
    // 2. Load code for new language
    const newCode = StorageService.getCode(getStorageKey(newLang), getDefaultCodeForLang(newLang));
    setSelectedLanguage(newLang);
    setCode(newCode);
    setCustomLogs([]);
    setTestResult(null);
  };

  // Build iframe HTML based on lesson's editor language
  const getIframeHtml = useCallback((userCode: string) => {
    if (!lesson) return '';
    if (selectedLanguage === 'html') {
      return buildIframeHtml(userCode, lesson.cssContent, lesson.initialJsCode || '');
    }
    if (selectedLanguage === 'css') {
      return buildIframeHtml(lesson.htmlContent, userCode, lesson.initialJsCode || '');
    }
    return buildIframeHtml(lesson.htmlContent, lesson.cssContent, userCode);
  }, [lesson, selectedLanguage]);

  // Re-run execution with current code
  const handleRun = useCallback(() => {
    if (!lesson) return;

    if (selectedLanguage === 'python' || selectedLanguage === 'cpp') {
      // Execute directly via multi-lang runner
      const out = executeMultiLangCode(selectedLanguage, code);
      const timeStr = new Date().toLocaleTimeString();
      const newLogs: ConsoleLog[] = out.stdout.map((line) => ({
        type: line.startsWith('❌') ? 'error' : 'log',
        message: line,
        timestamp: timeStr,
      }));
      setCustomLogs(newLogs);
    } else {
      // JavaScript / HTML / CSS in iframe
      if (iframeRef.current) {
        iframeRef.current.srcdoc = getIframeHtml(code);
      }
    }
  }, [lesson, selectedLanguage, code, getIframeHtml]);

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
    StorageService.saveCode(getStorageKey(selectedLanguage), newCode);
  };

  const handleResetCode = () => {
    if (confirm(`Khôi phục lại đoạn mã ban đầu của ngôn ngữ ${selectedLanguage.toUpperCase()}?`)) {
      const resetCode = getDefaultCodeForLang(selectedLanguage);
      setCode(resetCode);
      StorageService.saveCode(getStorageKey(selectedLanguage), resetCode);
      if (selectedLanguage === 'python' || selectedLanguage === 'cpp') {
        setCustomLogs([]);
      } else if (iframeRef.current) {
        iframeRef.current.srcdoc = getIframeHtml(resetCode);
      }
    }
  };

  const handleApplySolution = (solutionCode: string) => {
    setCode(solutionCode);
    StorageService.saveCode(getStorageKey(selectedLanguage), solutionCode);
    if (selectedLanguage === 'python' || selectedLanguage === 'cpp') {
      const out = executeMultiLangCode(selectedLanguage, solutionCode);
      const timeStr = new Date().toLocaleTimeString();
      setCustomLogs(out.stdout.map(l => ({ type: 'log', message: l, timestamp: timeStr })));
    } else if (iframeRef.current) {
      iframeRef.current.srcdoc = getIframeHtml(solutionCode);
    }
  };

  // Run assertion tests across JavaScript, Python, or C++
  const handleTest = async () => {
    setIsTesting(true);

    try {
      // 1. Run multi-lang execution context
      const multiLangOutput = executeMultiLangCode(selectedLanguage, code);

      if (selectedLanguage === 'python' || selectedLanguage === 'cpp') {
        const timeStr = new Date().toLocaleTimeString();
        setCustomLogs(multiLangOutput.stdout.map((line) => ({
          type: line.startsWith('❌') ? 'error' : 'log',
          message: line,
          timestamp: timeStr,
        })));
      } else {
        // Re-trigger iframe with current code first
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
      }

      const multiLangContext = {
        language: selectedLanguage,
        code,
        stdout: multiLangOutput.stdout,
        stderr: multiLangOutput.stderr,
        variables: multiLangOutput.variables,
      };

      const result = await evaluateTests(iframeRef.current, lesson.tests, multiLangContext);
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
  const previewHtml = selectedLanguage === 'html' ? code : lesson.htmlContent;
  const previewCss = selectedLanguage === 'css' ? code : lesson.cssContent;
  const previewJs = selectedLanguage === 'javascript' ? code : (lesson.initialJsCode || '');

  return (
    <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-[1700px] flex-col p-3 sm:p-4 gap-3">
      
      {/* 3-Column Layout Workspace */}
      <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-12 overflow-hidden min-h-0">
        
        {/* Left Column: Lesson Guide & Tasks (4 cols on lg) */}
        <div className="h-full overflow-hidden lg:col-span-4 flex flex-col">
          <LessonGuide
            lesson={lesson}
            passedList={passedList}
            currentLanguage={selectedLanguage}
            onApplySolution={handleApplySolution}
          />
        </div>

        {/* Middle Column: Monaco Code Editor (4 cols on lg) */}
        <div className="h-full overflow-hidden lg:col-span-4 flex flex-col">
          <CodeEditor
            code={code}
            language={selectedLanguage}
            availableLanguages={availableLanguages}
            onLanguageChange={handleLanguageChange}
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
            language={selectedLanguage}
            customLogs={customLogs}
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
