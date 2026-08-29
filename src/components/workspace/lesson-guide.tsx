'use client';

import React, { useState } from 'react';
import { Lesson } from '@/types/lesson';
import { KnowledgeSection } from '@/components/workspace/knowledge-section';
import { CheckSquare, Lightbulb, Key, ChevronDown, ChevronUp, Sparkles, Wand2, CheckCircle2 } from 'lucide-react';

interface LessonGuideProps {
  lesson: Lesson;
  passedList: string[]; // List of passed test IDs
  onApplySolution: (solutionCode: string) => void;
}

export function LessonGuide({ lesson, passedList, onApplySolution }: LessonGuideProps) {
  const [hintLevel, setHintLevel] = useState<number>(0);
  const [showSolution, setShowSolution] = useState(false);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300';
      case 'medium':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300';
      case 'hard':
        return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300';
      default:
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
  };

  const getDifficultyText = (diff: string) => {
    switch (diff) {
      case 'easy': return 'Dễ';
      case 'medium': return 'Vừa';
      case 'hard': return 'Thử thách';
      default: return diff;
    }
  };

  const totalTasks = lesson.taskInstructions.length;
  const allTestsPassed = lesson.tests.length > 0 && lesson.tests.every((t) => passedList.includes(t.id));

  const getTaskStatus = (idx: number) => {
    if (allTestsPassed) return true;
    if (passedList.length === 0) return false;

    // Direct 1-to-1 match
    if (lesson.tests.length === totalTasks) {
      const testItem = lesson.tests[idx];
      return Boolean(testItem && passedList.includes(testItem.id));
    }

    // Direct index test
    if (lesson.tests[idx] && passedList.includes(lesson.tests[idx].id)) {
      return true;
    }

    // Proportional match when test counts differ
    const passRatio = passedList.length / lesson.tests.length;
    const taskThreshold = (idx + 1) / totalTasks;
    return passRatio >= taskThreshold;
  };

  const completedTasks = allTestsPassed
    ? totalTasks
    : lesson.taskInstructions.filter((_, idx) => getTaskStatus(idx)).length;

  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="flex h-full flex-col overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
      
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${getDifficultyColor(lesson.difficulty)}`}>
            {getDifficultyText(lesson.difficulty)}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-400">
            <Sparkles className="h-3 w-3 text-amber-500" />
            +{lesson.xpReward} XP
          </span>
        </div>
        <span className="text-xs font-medium text-slate-400">
          {lesson.course === 'html-css' || lesson.id.startsWith('w')
            ? `Tuần ${lesson.week || lesson.order} / 16 (60 phút)`
            : lesson.track === 'foundation'
            ? `Bài F${lesson.order} / 10`
            : lesson.track === 'advanced'
            ? `Bài ES${lesson.order} / 4`
            : lesson.track === 'capstone'
            ? `Đồ án P${lesson.order} / 6`
            : `Bài ${lesson.order} / 12`}
        </span>
      </div>

      {/* Title */}
      <div className="mt-3">
        <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {lesson.title}
        </h1>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {lesson.shortDescription}
        </p>
      </div>

      {/* Upgraded Knowledge Section */}
      <div className="mt-4">
        <KnowledgeSection
          story={lesson.story}
          lessonTitle={lesson.title}
          category={lesson.category}
          difficulty={lesson.difficulty}
          course={lesson.course}
          onApplyCodeSnippet={onApplySolution}
        />
      </div>

      {/* Mission Tasks Checklist with Progress Indicator */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
            <CheckSquare className="h-4 w-4 text-emerald-500" />
            <span>Nhiệm vụ của bạn:</span>
          </div>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
            completedTasks === totalTasks && totalTasks > 0
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
          }`}>
            {completedTasks}/{totalTasks} Hoàn thành
          </span>
        </div>

        {/* Mini progress bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800 mb-3">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="space-y-2">
          {lesson.taskInstructions.map((task, idx) => {
            const isDone = getTaskStatus(idx);
            return (
              <div
                key={idx}
                className={`flex items-start gap-2.5 rounded-xl p-3 border transition-all text-xs font-medium ${
                  isDone
                    ? 'border-emerald-200 bg-emerald-50/70 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300 shadow-2xs'
                    : 'border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isDone}
                  readOnly
                  className="mt-0.5 h-4 w-4 rounded-md text-emerald-600 focus:ring-emerald-500 border-slate-300 pointer-events-none"
                />
                <span className={`leading-relaxed ${isDone ? 'line-through opacity-75' : ''}`}>
                  {task}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progressive Hint System */}
      <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
            <Lightbulb className="h-4 w-4" />
            <span>Bạn có gặp khó khăn?</span>
          </div>
          {hintLevel < 2 && (
            <button
              onClick={() => setHintLevel((prev) => Math.min(prev + 1, 2))}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 cursor-pointer"
            >
              + Mở gợi ý {hintLevel === 0 ? 'cấp 1' : 'cấp 2'}
            </button>
          )}
        </div>

        {/* Hint Level 1 */}
        {hintLevel >= 1 && (
          <div className="mb-2 rounded-xl bg-amber-50/80 p-3 border border-amber-200 text-xs text-amber-900 dark:bg-amber-950/30 dark:border-amber-900/40 dark:text-amber-200 animate-in fade-in">
            <div className="font-bold flex items-center gap-1 mb-1">
              <span>💡 Gợi ý 1: Khái niệm</span>
            </div>
            <p>{lesson.hints.level1}</p>
          </div>
        )}

        {/* Hint Level 2 */}
        {hintLevel >= 2 && (
          <div className="mb-2 rounded-xl bg-indigo-50/80 p-3 border border-indigo-200 text-xs text-indigo-900 dark:bg-indigo-950/30 dark:border-indigo-900/40 dark:text-indigo-200 animate-in fade-in font-mono">
            <div className="font-bold flex items-center gap-1 mb-1 font-sans text-indigo-800 dark:text-indigo-300">
              <span>🧩 Gợi ý 2: Cú pháp mẫu</span>
            </div>
            <pre className="whitespace-pre-wrap">{lesson.hints.level2}</pre>
          </div>
        )}

        {/* Reveal Solution Button & Block */}
        <div className="mt-3">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex w-full items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            <span className="flex items-center gap-1.5">
              <Key className="h-3.5 w-3.5 text-amber-500" />
              <span>{showSolution ? 'Ẩn đáp án hoàn chỉnh' : 'Xem đáp án hoàn chỉnh'}</span>
            </span>
            {showSolution ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {showSolution && (
            <div className="mt-2 rounded-xl bg-slate-900 p-3 text-xs text-slate-100 border border-slate-800 animate-in fade-in">
              <div className="flex items-center justify-between mb-2 pb-1 border-b border-slate-800">
                <span className="font-mono text-indigo-400 font-bold text-[11px]">
                  {lesson.editorLanguage === 'html' ? 'solution.html' : lesson.editorLanguage === 'css' ? 'solution.css' : 'solution.js'}
                </span>
                <button
                  onClick={() => {
                    const solutionCode = lesson.editorLanguage === 'html'
                      ? (lesson.solutionHtmlCode || lesson.solutionJsCode || '')
                      : lesson.editorLanguage === 'css'
                      ? (lesson.solutionCssCode || lesson.solutionJsCode || '')
                      : (lesson.solutionJsCode || '');
                    onApplySolution(solutionCode);
                  }}
                  className="flex items-center gap-1 rounded bg-indigo-600 px-2 py-0.5 text-[11px] font-bold text-white hover:bg-indigo-700 transition cursor-pointer"
                >
                  <Wand2 className="h-3 w-3" />
                  <span>Điền vào Editor</span>
                </button>
              </div>
              <pre className="font-mono text-[11px] whitespace-pre-wrap text-emerald-400">
                {lesson.editorLanguage === 'html'
                  ? (lesson.solutionHtmlCode || lesson.solutionJsCode || '')
                  : lesson.editorLanguage === 'css'
                  ? (lesson.solutionCssCode || lesson.solutionJsCode || '')
                  : (lesson.solutionJsCode || '')}
              </pre>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
