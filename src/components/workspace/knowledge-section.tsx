'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Copy, 
  Check, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Lightbulb, 
  AlertTriangle, 
  Pin, 
  Target, 
  Code2, 
  CheckCircle2, 
  Layers,
  Clock,
  Palette,
  FileCode,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface KnowledgeSectionProps {
  story: string;
  lessonTitle?: string;
  category?: string;
  difficulty?: string;
  course?: string;
  onApplyCodeSnippet?: (snippet: string) => void;
}

type FontSizeOption = 'sm' | 'md' | 'lg';

export function KnowledgeSection({
  story,
  lessonTitle,
  category,
  difficulty,
  course,
  onApplyCodeSnippet,
}: KnowledgeSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isFocusModalOpen, setIsFocusModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState<FontSizeOption>('md');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isUnderstood, setIsUnderstood] = useState(false);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  // Estimate reading time in minutes
  const readingTime = useMemo(() => {
    const wordCount = story.replace(/```[\s\S]*?```/g, '').trim().split(/\s+/).length;
    const mins = Math.max(1, Math.ceil(wordCount / 120));
    return mins;
  }, [story]);

  // Extract key concept tags from inline backtick codes
  const keyConcepts = useMemo(() => {
    const matches = story.match(/`([^`]+)`/g) || [];
    const unique = Array.from(
      new Set(
        matches
          .map((m) => m.replace(/`/g, '').trim())
          .filter((t) => t.length > 0 && t.length < 35 && !t.includes('\n'))
      )
    ).slice(0, 6);
    return unique;
  }, [story]);

  // Text-To-Speech (TTS) Handler
  const handleToggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ tính năng đọc giọng nói (SpeechSynthesis).');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Clean text for speech: strip markdown syntax, code blocks, etc.
    const cleanSpeechText = story
      .replace(/```[\s\S]*?```/g, ' Mã nguồn ví dụ. ')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/^[#*-]\s+/gm, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpeechText);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.95; // slightly slower for better learning clarity
    utterance.pitch = 1.0;

    // Try to find a Vietnamese voice
    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find((v) => v.lang.includes('vi') || v.name.toLowerCase().includes('vietnam'));
    if (viVoice) {
      utterance.voice = viVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleCopyCode = (codeText: string, index: number) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  const handleToggleUnderstood = () => {
    const nextState = !isUnderstood;
    setIsUnderstood(nextState);
    if (nextState) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#6366f1', '#a855f7', '#ec4899', '#10b981', '#f59e0b'],
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  };

  const cycleFontSize = () => {
    setFontSize((prev) => (prev === 'sm' ? 'md' : prev === 'md' ? 'lg' : 'sm'));
  };

  const fontSizeClass = {
    sm: 'text-xs leading-relaxed',
    md: 'text-sm leading-relaxed',
    lg: 'text-base leading-relaxed',
  }[fontSize];

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/40 via-white to-white shadow-xs transition-all dark:border-indigo-950/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        {/* Top Glow Accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90" />

        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-50/80 bg-white/70 px-4 py-3 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-xs shadow-indigo-500/30">
              <BookOpen className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-950 dark:text-indigo-300">
                  Kiến thức cần biết
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  <Clock className="h-3 w-3" /> ~{readingTime} phút đọc
                </span>
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1">
            {/* Audio Voice Narration */}
            <button
              onClick={handleToggleSpeech}
              title={isSpeaking ? 'Dừng đọc' : 'Đọc bài học (Tiếng Việt)'}
              className={`flex h-7 items-center gap-1.5 rounded-lg px-2 text-xs font-semibold transition-all cursor-pointer ${
                isSpeaking
                  ? 'bg-rose-500 text-white shadow-xs animate-pulse'
                  : 'bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="h-3.5 w-3.5" />
                  <span className="text-[11px]">Dừng đọc</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline text-[11px]">Giọng đọc</span>
                </>
              )}
            </button>

            {/* Font Size Adjuster */}
            <button
              onClick={cycleFontSize}
              title={`Cỡ chữ hiện tại: ${fontSize === 'sm' ? 'Nhỏ' : fontSize === 'md' ? 'Vừa' : 'Lớn'}`}
              className="flex h-7 items-center gap-1 rounded-lg bg-slate-100 px-2 text-xs font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              <span className="font-mono text-[11px] font-bold">
                A{fontSize === 'sm' ? '⁻' : fontSize === 'lg' ? '⁺' : ''}
              </span>
            </button>

            {/* Focus / Fullscreen Mode */}
            <button
              onClick={() => setIsFocusModalOpen(true)}
              title="Mở rộng bài học toàn màn hình (Focus Mode)"
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>

            {/* Collapse/Expand Toggle */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Thu gọn lý thuyết' : 'Mở rộng lý thuyết'}
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Content Body */}
        {isExpanded && (
          <div className="p-4 sm:p-5">
            {/* Key Concept Chips (if available) */}
            {keyConcepts.length > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-1.5 rounded-xl bg-slate-50/80 p-2.5 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                <span className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
                  <Layers className="h-3 w-3 text-indigo-500" /> Cốt lõi:
                </span>
                {keyConcepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 font-mono text-[11px] font-bold text-indigo-600 shadow-2xs border border-indigo-100/80 dark:bg-slate-800 dark:text-indigo-300 dark:border-indigo-900/50"
                  >
                    <code>{concept}</code>
                  </span>
                ))}
              </div>
            )}

            {/* Rich Rendered Content */}
            <div className={`space-y-3.5 text-slate-700 dark:text-slate-200 ${fontSizeClass}`}>
              <RichStoryRenderer
                story={story}
                onCopyCode={handleCopyCode}
                copiedCodeIndex={copiedCodeIndex}
                onApplySnippet={onApplyCodeSnippet}
              />
            </div>

            {/* Interactive "I have understood" footer pill */}
            <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={handleToggleUnderstood}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all cursor-pointer ${
                  isUnderstood
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800 shadow-2xs'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                <CheckCircle2 className={`h-4 w-4 ${isUnderstood ? 'text-emerald-500 fill-emerald-100 dark:fill-emerald-900' : 'text-slate-400'}`} />
                <span>{isUnderstood ? 'Đã nắm vững lý thuyết ✨' : 'Đánh dấu đã hiểu phần này'}</span>
              </button>

              <span className="text-[11px] font-medium text-slate-400 hidden sm:inline">
                Sẵn sàng giải bài bên dưới 👇
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Focus Mode Modal Popup */}
      {isFocusModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {lessonTitle || 'Kiến thức trọng tâm'}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>Chế độ đọc tập trung (Focus View)</span>
                    <span>•</span>
                    <span>~{readingTime} phút đọc</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleSpeech}
                  className={`flex h-8 items-center gap-1.5 rounded-xl px-3 text-xs font-bold transition cursor-pointer ${
                    isSpeaking
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                  }`}
                >
                  <Volume2 className="h-4 w-4" />
                  <span>{isSpeaking ? 'Dừng đọc' : 'Nghe đọc'}</span>
                </button>
                <button
                  onClick={() => setIsFocusModalOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 transition cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4 text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
              <RichStoryRenderer
                story={story}
                onCopyCode={handleCopyCode}
                copiedCodeIndex={copiedCodeIndex}
                onApplySnippet={onApplyCodeSnippet}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-6 py-3.5 dark:border-slate-800 dark:bg-slate-900/50">
              <span className="text-xs text-slate-400">Nhấn ESC hoặc đóng để quay lại khu vực làm bài</span>
              <button
                onClick={() => setIsFocusModalOpen(false)}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition cursor-pointer"
              >
                Đã xong, tiếp tục làm bài
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ==========================================================
// Rich Story Markdown Parser & Visual Block Renderer
// ==========================================================
interface RichStoryRendererProps {
  story: string;
  onCopyCode: (code: string, index: number) => void;
  copiedCodeIndex: number | null;
  onApplySnippet?: (snippet: string) => void;
}

function RichStoryRenderer({
  story,
  onCopyCode,
  copiedCodeIndex,
  onApplySnippet,
}: RichStoryRendererProps) {
  const blocks = useMemo(() => {
    return parseMarkdownBlocks(story);
  }, [story]);

  let codeBlockCounter = 0;

  return (
    <div className="rich-story-content space-y-3.5">
      {blocks.map((block, idx) => {
        if (block.type === 'code') {
          const currentCodeIdx = codeBlockCounter++;
          const isCopied = copiedCodeIndex === currentCodeIdx;
          return (
            <CodeBlockView
              key={idx}
              code={block.content}
              language={block.lang || 'javascript'}
              isCopied={isCopied}
              onCopy={() => onCopyCode(block.content, currentCodeIdx)}
              onApply={onApplySnippet ? () => onApplySnippet(block.content) : undefined}
            />
          );
        }

        if (block.type === 'callout') {
          return (
            <CalloutCard
              key={idx}
              iconType={block.calloutType}
              content={block.content}
            />
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={idx} className="space-y-2 my-2 pl-1">
              {block.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400 text-[10px] font-bold">
                    •
                  </span>
                  <div className="flex-1">
                    <InlineMarkdown text={item} />
                  </div>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === 'heading') {
          return (
            <h3 key={idx} className="font-extrabold text-slate-900 dark:text-white mt-3 text-sm flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              <InlineMarkdown text={block.content} />
            </h3>
          );
        }

        // Standard Paragraph
        return (
          <p key={idx} className="leading-relaxed">
            <InlineMarkdown text={block.content} />
          </p>
        );
      })}
    </div>
  );
}

// ==========================================================
// Code Block Component with Syntax Highlighting & Window Header
// ==========================================================
interface CodeBlockViewProps {
  code: string;
  language: string;
  isCopied: boolean;
  onCopy: () => void;
  onApply?: () => void;
}

function CodeBlockView({ code, language, isCopied, onCopy, onApply }: CodeBlockViewProps) {
  const getLangBadge = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'html':
        return { label: 'HTML5', icon: <FileCode className="h-3 w-3 text-orange-400" />, color: 'text-orange-400' };
      case 'css':
        return { label: 'CSS3', icon: <Palette className="h-3 w-3 text-cyan-400" />, color: 'text-cyan-400' };
      default:
        return { label: 'JavaScript', icon: <Code2 className="h-3 w-3 text-amber-400" />, color: 'text-amber-400' };
    }
  };

  const badge = getLangBadge(language);

  return (
    <div className="group my-3 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-md">
      {/* Code Window Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-3.5 py-1.5 text-xs">
        <div className="flex items-center gap-2">
          {/* macOS window dots */}
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="mx-1 h-3 w-px bg-slate-800" />
          <div className="flex items-center gap-1 font-mono text-[11px] font-bold text-slate-400">
            {badge.icon}
            <span className={badge.color}>{badge.label}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {onApply && (
            <button
              onClick={onApply}
              className="flex items-center gap-1 rounded bg-indigo-600/80 px-2 py-0.5 text-[11px] font-semibold text-white hover:bg-indigo-600 transition cursor-pointer"
              title="Áp dụng mẫu này vào Editor"
            >
              <span>Thử ngay</span>
              <ArrowRight className="h-2.5 w-2.5" />
            </button>
          )}
          <button
            onClick={onCopy}
            className={`flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-semibold transition cursor-pointer ${
              isCopied
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
            title="Sao chép đoạn mã"
          >
            {isCopied ? (
              <>
                <Check className="h-3 w-3" />
                <span>Đã chép</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Sao chép</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Body with Highlighting */}
      <pre className="overflow-x-auto p-3.5 font-mono text-xs leading-relaxed text-slate-200">
        <code>{highlightSyntax(code, language)}</code>
      </pre>
    </div>
  );
}

// ==========================================================
// Syntax Highlighting Engine (Regex Based, Client-Safe)
// ==========================================================
function highlightSyntax(code: string, language: string): React.ReactNode {
  const lines = code.trim().split('\n');

  return lines.map((line, lineIdx) => {
    return (
      <div key={lineIdx} className="table-row">
        <span className="table-cell select-none pr-3.5 text-right font-mono text-[11px] text-slate-600 opacity-60">
          {lineIdx + 1}
        </span>
        <span className="table-cell">
          {tokenizeLine(line, language)}
        </span>
      </div>
    );
  });
}

function tokenizeLine(line: string, language: string): React.ReactNode {
  if (line.trim().startsWith('//') || line.trim().startsWith('/*') || line.trim().startsWith('<!--')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  // Tokenize comments at the end of line
  const commentIndex = line.indexOf('//');
  if (commentIndex !== -1 && !line.slice(0, commentIndex).includes('"') && !line.slice(0, commentIndex).includes("'")) {
    const codePart = line.slice(0, commentIndex);
    const commentPart = line.slice(commentIndex);
    return (
      <>
        {renderTokens(codePart, language)}
        <span className="text-slate-500 italic">{commentPart}</span>
      </>
    );
  }

  return renderTokens(line, language);
}

function renderTokens(text: string, language: string): React.ReactNode {
  // Simple multi-pass tokenizer
  const tokens: { type: string; value: string }[] = [];
  
  // Master regex pattern matching strings, keywords, tags, numbers, operators
  const masterRegex = language === 'html'
    ? /(<!--[\s\S]*?-->)|(<\/?[a-zA-Z0-9-]+)|([a-zA-Z-]+(?==))|("[^"]*"|'[^']*')|(\d+)|([<>\/=])/g
    : language === 'css'
    ? /(\/\*[\s\S]*?\*\/)|([.#][a-zA-Z0-9_-]+)|([a-zA-Z-]+(?=:))|("[^"]*"|'[^']*')|(\d+(?:px|rem|%|em|s|ms|deg)?)|([{}():;,])/g
    : /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|(\b(?:const|let|var|function|return|if|else|for|while|import|export|from|new|class|async|await|typeof|instanceof|true|false|null|undefined)\b)|(\b(?:document|console|window|Math|JSON|Array|Object|String|Number)\b)|(\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\())|("[^"]*"|'[^']*'|`[^`]*`)|(\b\d+\b)|([+\-*/%=<>!&|^~?:;.,{}()\[\]])/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = masterRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', value: text.substring(lastIndex, match.index) });
    }

    const val = match[0];
    if (language === 'html') {
      if (val.startsWith('<!--')) tokens.push({ type: 'comment', value: val });
      else if (val.startsWith('<')) tokens.push({ type: 'tag', value: val });
      else if (val.startsWith('"') || val.startsWith("'")) tokens.push({ type: 'string', value: val });
      else if (/^\d+$/.test(val)) tokens.push({ type: 'number', value: val });
      else if (/^[a-zA-Z-]+$/.test(val)) tokens.push({ type: 'attribute', value: val });
      else tokens.push({ type: 'operator', value: val });
    } else if (language === 'css') {
      if (val.startsWith('/*')) tokens.push({ type: 'comment', value: val });
      else if (val.startsWith('.') || val.startsWith('#')) tokens.push({ type: 'selector', value: val });
      else if (val.startsWith('"') || val.startsWith("'")) tokens.push({ type: 'string', value: val });
      else if (/^\d+/.test(val)) tokens.push({ type: 'number', value: val });
      else if (/^[a-zA-Z-]+$/.test(val)) tokens.push({ type: 'property', value: val });
      else tokens.push({ type: 'operator', value: val });
    } else {
      // JavaScript
      if (val.startsWith('//') || val.startsWith('/*')) tokens.push({ type: 'comment', value: val });
      else if (/^(const|let|var|function|return|if|else|for|while|import|export|from|new|class|async|await|typeof|instanceof|true|false|null|undefined)$/.test(val)) {
        tokens.push({ type: 'keyword', value: val });
      } else if (/^(document|console|window|Math|JSON|Array|Object|String|Number)$/.test(val)) {
        tokens.push({ type: 'builtin', value: val });
      } else if (val.startsWith('"') || val.startsWith("'") || val.startsWith('`')) {
        tokens.push({ type: 'string', value: val });
      } else if (/^\d+$/.test(val)) {
        tokens.push({ type: 'number', value: val });
      } else if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(val) && masterRegex.lastIndex < text.length && text[masterRegex.lastIndex] === '(') {
        tokens.push({ type: 'function', value: val });
      } else {
        tokens.push({ type: 'operator', value: val });
      }
    }

    lastIndex = masterRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', value: text.substring(lastIndex) });
  }

  return (
    <>
      {tokens.map((tok, i) => {
        switch (tok.type) {
          case 'keyword':
            return <span key={i} className="text-purple-400 font-semibold">{tok.value}</span>;
          case 'builtin':
            return <span key={i} className="text-amber-300 font-semibold">{tok.value}</span>;
          case 'function':
            return <span key={i} className="text-cyan-300">{tok.value}</span>;
          case 'tag':
            return <span key={i} className="text-rose-400 font-semibold">{tok.value}</span>;
          case 'attribute':
            return <span key={i} className="text-sky-300">{tok.value}</span>;
          case 'property':
            return <span key={i} className="text-sky-300">{tok.value}</span>;
          case 'selector':
            return <span key={i} className="text-amber-300 font-semibold">{tok.value}</span>;
          case 'string':
            return <span key={i} className="text-emerald-300">{tok.value}</span>;
          case 'number':
            return <span key={i} className="text-orange-300">{tok.value}</span>;
          case 'comment':
            return <span key={i} className="text-slate-500 italic">{tok.value}</span>;
          case 'operator':
            return <span key={i} className="text-pink-400">{tok.value}</span>;
          default:
            return <span key={i} className="text-slate-200">{tok.value}</span>;
        }
      })}
    </>
  );
}

// ==========================================================
// Callout Alert Card Component
// ==========================================================
interface CalloutCardProps {
  iconType: 'tip' | 'warning' | 'pin' | 'target' | 'magic';
  content: string;
}

function CalloutCard({ iconType, content }: CalloutCardProps) {
  const getCalloutMeta = () => {
    switch (iconType) {
      case 'tip':
        return {
          icon: <Lightbulb className="h-4 w-4 text-amber-500 fill-amber-100 dark:fill-amber-950" />,
          borderColor: 'border-amber-400 dark:border-amber-700',
          bgGradient: 'bg-gradient-to-r from-amber-50/90 via-amber-50/40 to-transparent dark:from-amber-950/30 dark:via-amber-950/10 dark:to-transparent',
          textColor: 'text-amber-950 dark:text-amber-200',
          badgeText: 'Mẹo hay & Hiệu ứng',
          badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300',
        };
      case 'warning':
        return {
          icon: <AlertTriangle className="h-4 w-4 text-rose-500 fill-rose-100 dark:fill-rose-950" />,
          borderColor: 'border-rose-400 dark:border-rose-700',
          bgGradient: 'bg-gradient-to-r from-rose-50/90 via-rose-50/40 to-transparent dark:from-rose-950/30 dark:via-rose-950/10 dark:to-transparent',
          textColor: 'text-rose-950 dark:text-rose-200',
          badgeText: 'Lưu ý quan trọng',
          badgeBg: 'bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300',
        };
      case 'pin':
        return {
          icon: <Pin className="h-4 w-4 text-indigo-500 fill-indigo-100 dark:fill-indigo-950" />,
          borderColor: 'border-indigo-400 dark:border-indigo-700',
          bgGradient: 'bg-gradient-to-r from-indigo-50/90 via-indigo-50/40 to-transparent dark:from-indigo-950/30 dark:via-indigo-950/10 dark:to-transparent',
          textColor: 'text-indigo-950 dark:text-indigo-200',
          badgeText: 'Ghi nhớ cốt lõi',
          badgeBg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300',
        };
      case 'target':
        return {
          icon: <Target className="h-4 w-4 text-emerald-500 fill-emerald-100 dark:fill-emerald-950" />,
          borderColor: 'border-emerald-400 dark:border-emerald-700',
          bgGradient: 'bg-gradient-to-r from-emerald-50/90 via-emerald-50/40 to-transparent dark:from-emerald-950/30 dark:via-emerald-950/10 dark:to-transparent',
          textColor: 'text-emerald-950 dark:text-emerald-200',
          badgeText: 'Mục tiêu bài học',
          badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300',
        };
      default:
        return {
          icon: <Sparkles className="h-4 w-4 text-purple-500 fill-purple-100 dark:fill-purple-950" />,
          borderColor: 'border-purple-400 dark:border-purple-700',
          bgGradient: 'bg-gradient-to-r from-purple-50/90 via-purple-50/40 to-transparent dark:from-purple-950/30 dark:via-purple-950/10 dark:to-transparent',
          textColor: 'text-purple-950 dark:text-purple-200',
          badgeText: 'Bí kíp phép thuật',
          badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300',
        };
    }
  };

  const meta = getCalloutMeta();

  // Strip leading emoji or keyword from content for cleaner rendering
  const cleanContent = content
    .replace(/^([💡⚠️📌🎯✨🔥⭐]+\s*(\*\*[^*]+\*\*:?)?\s*)/, '')
    .trim();

  return (
    <div className={`my-3 overflow-hidden rounded-xl border-l-4 ${meta.borderColor} ${meta.bgGradient} p-3.5 shadow-2xs`}>
      <div className="flex items-center gap-2 mb-1.5">
        {meta.icon}
        <span className={`rounded-md px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${meta.badgeBg}`}>
          {meta.badgeText}
        </span>
      </div>
      <div className={`text-xs leading-relaxed ${meta.textColor}`}>
        <InlineMarkdown text={cleanContent || content} />
      </div>
    </div>
  );
}

// ==========================================================
// Inline Markdown Element (Bold, Italic, Inline Code)
// ==========================================================
function InlineMarkdown({ text }: { text: string }) {
  // Parse inline markdown tokens: `code`, **bold**, *italic*
  const parts: React.ReactNode[] = [];
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('`') && token.endsWith('`')) {
      const codeVal = token.slice(1, -1);
      parts.push(
        <code
          key={match.index}
          className="mx-0.5 rounded-md bg-indigo-50 px-1.5 py-0.5 font-mono text-[11px] font-bold text-indigo-700 border border-indigo-200/70 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-900"
        >
          {codeVal}
        </code>
      );
    } else if (token.startsWith('**') && token.endsWith('**')) {
      const boldVal = token.slice(2, -2);
      parts.push(
        <strong key={match.index} className="font-extrabold text-slate-900 dark:text-white">
          {boldVal}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      const italicVal = token.slice(1, -1);
      parts.push(
        <em key={match.index} className="italic text-slate-800 dark:text-slate-200">
          {italicVal}
        </em>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
}

// ==========================================================
// Markdown Block Parser
// ==========================================================
type MarkdownBlock =
  | { type: 'code'; lang: string; content: string }
  | { type: 'callout'; calloutType: 'tip' | 'warning' | 'pin' | 'target' | 'magic'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'heading'; content: string }
  | { type: 'paragraph'; content: string };

function parseMarkdownBlocks(markdown: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  const lines = markdown.split('\n');

  let inCodeBlock = false;
  let codeLang = '';
  let codeLines: string[] = [];

  let currentListItems: string[] = [];

  const flushList = () => {
    if (currentListItems.length > 0) {
      blocks.push({ type: 'list', items: [...currentListItems] });
      currentListItems = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check for code block delimiter
    if (trimmed.startsWith('```')) {
      flushList();
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLang = trimmed.replace('```', '').trim();
        codeLines = [];
      } else {
        inCodeBlock = false;
        blocks.push({
          type: 'code',
          lang: codeLang || 'javascript',
          content: codeLines.join('\n'),
        });
        codeLines = [];
        codeLang = '';
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    // Skip empty lines
    if (!trimmed) {
      flushList();
      continue;
    }

    // Check for bullet list item
    if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
      const itemContent = trimmed.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '');
      currentListItems.push(itemContent);
      continue;
    } else {
      flushList();
    }

    // Check for headings
    if (trimmed.startsWith('### ') || trimmed.startsWith('## ') || trimmed.startsWith('# ')) {
      const headingContent = trimmed.replace(/^#+\s*/, '');
      blocks.push({ type: 'heading', content: headingContent });
      continue;
    }

    // Check for Callouts
    if (trimmed.includes('💡') || trimmed.toLowerCase().includes('mẹo hay') || trimmed.toLowerCase().includes('hiệu ứng đặc biệt')) {
      blocks.push({ type: 'callout', calloutType: 'tip', content: trimmed });
      continue;
    }
    if (trimmed.includes('⚠️') || trimmed.toLowerCase().includes('lưu ý') || trimmed.toLowerCase().includes('chú ý')) {
      blocks.push({ type: 'callout', calloutType: 'warning', content: trimmed });
      continue;
    }
    if (trimmed.includes('📌') || trimmed.toLowerCase().includes('ghi nhớ')) {
      blocks.push({ type: 'callout', calloutType: 'pin', content: trimmed });
      continue;
    }
    if (trimmed.includes('🎯') || trimmed.toLowerCase().includes('mục tiêu')) {
      blocks.push({ type: 'callout', calloutType: 'target', content: trimmed });
      continue;
    }
    if (trimmed.includes('✨') || trimmed.includes('🏰') || trimmed.includes('🧙')) {
      // If it's a greeting or magic lore, keep as paragraph or callout
      if (trimmed.startsWith('Chào mừng bạn đến với')) {
        blocks.push({ type: 'paragraph', content: trimmed });
      } else {
        blocks.push({ type: 'callout', calloutType: 'magic', content: trimmed });
      }
      continue;
    }

    // Standard paragraph
    blocks.push({ type: 'paragraph', content: trimmed });
  }

  flushList();

  // If unclosed code block, flush it
  if (inCodeBlock && codeLines.length > 0) {
    blocks.push({
      type: 'code',
      lang: codeLang || 'javascript',
      content: codeLines.join('\n'),
    });
  }

  return blocks;
}
