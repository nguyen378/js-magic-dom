'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { RotateCcw, Code2, Copy, Check, FileCode, Palette } from 'lucide-react';
import { EditorLanguage } from '@/types/lesson';
import { useAppTheme } from '@/context/theme-context';

const Monaco = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface CodeEditorProps {
  code: string;
  language?: EditorLanguage;
  availableLanguages?: EditorLanguage[];
  onLanguageChange?: (lang: EditorLanguage) => void;
  fileName?: string;
  onChange: (newCode: string) => void;
  onReset: () => void;
  onRun: () => void;
}

export function CodeEditor({ 
  code, 
  language = 'javascript', 
  availableLanguages,
  onLanguageChange,
  fileName, 
  onChange, 
  onReset, 
  onRun 
}: CodeEditorProps) {
  const { theme } = useAppTheme();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageDetails = () => {
    switch (language) {
      case 'html':
        return {
          title: fileName || 'index.html',
          icon: <FileCode className="h-3.5 w-3.5 text-orange-400" />,
          footerBadge: 'HTML5 (Semantic)',
          badgeColor: 'text-orange-400',
        };
      case 'css':
        return {
          title: fileName || 'style.css',
          icon: <Palette className="h-3.5 w-3.5 text-cyan-400" />,
          footerBadge: 'CSS3 (Stylesheet)',
          badgeColor: 'text-cyan-400',
        };
      case 'python':
        return {
          title: fileName || 'main.py',
          icon: <Code2 className="h-3.5 w-3.5 text-emerald-400" />,
          footerBadge: 'Python 3.12 (Live)',
          badgeColor: 'text-emerald-400',
        };
      case 'cpp':
        return {
          title: fileName || 'main.cpp',
          icon: <Code2 className="h-3.5 w-3.5 text-sky-400" />,
          footerBadge: 'C++17/20 (Live)',
          badgeColor: 'text-sky-400',
        };
      default:
        return {
          title: fileName || 'script.js',
          icon: <Code2 className="h-3.5 w-3.5 text-amber-400" />,
          footerBadge: 'JavaScript (V8 Live)',
          badgeColor: 'text-amber-400',
        };
    }
  };

  const langDetails = getLanguageDetails();

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm dark:border-slate-800">
      
      {/* Editor Header Bar */}
      <div className="flex h-11 items-center justify-between border-b border-slate-800 bg-slate-950 px-3">
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 mr-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* If availableLanguages provided, show Interactive Language Switch Tabs */}
          {availableLanguages && availableLanguages.length > 1 ? (
            <div className="flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800 gap-0.5">
              {availableLanguages.map((lang) => {
                const isActive = language === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => onLanguageChange?.(lang)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? lang === 'python'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : lang === 'cpp'
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'bg-amber-500 text-slate-950 shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <span>{lang === 'python' ? '🐍 Python' : lang === 'cpp' ? '🔷 C++' : '🟨 JS'}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
              {langDetails.icon}
              {langDetails.title}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            title="Sao chép code"
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Đã chép' : 'Sao chép'}</span>
          </button>
          <button
            onClick={onReset}
            title="Khôi phục code ban đầu"
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-amber-300 transition cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Đặt lại</span>
          </button>
        </div>
      </div>

      {/* Monaco Editor Container */}
      <div className="relative flex-1 min-h-[280px]">
        <Monaco
          height="100%"
          language={language}
          theme={theme === 'cozy' ? 'cozy-warm' : theme === 'cyberpunk' ? 'cyberpunk-neon' : theme === 'pixel' ? 'pixel-arcade' : 'vs-dark'}
          value={code}
          onChange={(val) => onChange(val || '')}
          beforeMount={(monaco) => {
            // Cozy Warm Paper Theme
            monaco.editor.defineTheme('cozy-warm', {
              base: 'vs',
              inherit: true,
              rules: [
                { token: 'comment', foreground: '8c7864', fontStyle: 'italic' },
                { token: 'keyword', foreground: 'b45309', fontStyle: 'bold' },
                { token: 'string', foreground: '047857' },
                { token: 'number', foreground: 'c2410c' },
                { token: 'identifier', foreground: '382716' },
                { token: 'type', foreground: '9333ea' },
                { token: 'delimiter', foreground: '574130' },
              ],
              colors: {
                'editor.background': '#fbf8f2',
                'editor.foreground': '#382716',
                'editorLineNumber.foreground': '#bdafa0',
                'editorLineNumber.activeForeground': '#7c6450',
                'editor.lineHighlightBackground': '#f3ede1',
                'editorCursor.foreground': '#b45309',
                'editor.selectionBackground': '#e8decb',
              },
            });

            // Cyberpunk Neon Theme
            monaco.editor.defineTheme('cyberpunk-neon', {
              base: 'vs-dark',
              inherit: true,
              rules: [
                { token: 'comment', foreground: '475569', fontStyle: 'italic' },
                { token: 'keyword', foreground: 'ec4899', fontStyle: 'bold' },
                { token: 'string', foreground: '06b6d4' },
                { token: 'number', foreground: 'f59e0b' },
                { token: 'identifier', foreground: 'e2e8f0' },
              ],
              colors: {
                'editor.background': '#090d16',
                'editor.foreground': '#e2e8f0',
                'editorLineNumber.foreground': '#334155',
                'editorLineNumber.activeForeground': '#06b6d4',
                'editor.lineHighlightBackground': '#0f172a',
                'editorCursor.foreground': '#06b6d4',
                'editor.selectionBackground': '#1e293b',
              },
            });

            // Pixel Arcade Theme
            monaco.editor.defineTheme('pixel-arcade', {
              base: 'vs-dark',
              inherit: true,
              rules: [
                { token: 'comment', foreground: '64748b', fontStyle: 'italic' },
                { token: 'keyword', foreground: 'f59e0b', fontStyle: 'bold' },
                { token: 'string', foreground: '10b981' },
                { token: 'number', foreground: 'f97316' },
                { token: 'identifier', foreground: 'f8fafc' },
              ],
              colors: {
                'editor.background': '#0c1017',
                'editor.foreground': '#f8fafc',
                'editorLineNumber.foreground': '#334155',
                'editorLineNumber.activeForeground': '#f59e0b',
                'editor.lineHighlightBackground': '#161e2e',
                'editorCursor.foreground': '#f59e0b',
                'editor.selectionBackground': '#1e293b',
              },
            });
          }}
          onMount={(editor, monaco) => {
            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
              onRun();
            });
          }}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontLigatures: true,
            lineNumbers: 'on',
            lineNumbersMinChars: 3,
            roundedSelection: true,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            padding: { top: 12, bottom: 12 },
            suggestOnTriggerCharacters: true,
            quickSuggestions: true,
            wordWrap: 'on',
          }}
          loading={
            <div className="flex h-full items-center justify-center text-slate-500 text-sm">
              Đang tải trình soạn thảo code...
            </div>
          }
        />
      </div>

      {/* Editor Shortcut Tip */}
      <div className="border-t border-slate-800 bg-slate-950/80 px-4 py-1.5 text-[11px] text-slate-400 flex items-center justify-between">
        <span>💡 Mẹo: Nhấn phím <kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">Ctrl + Enter</kbd> để chạy thử nhanh!</span>
        <span className={`${langDetails.badgeColor} font-mono font-bold`}>{langDetails.footerBadge}</span>
      </div>

    </div>
  );
}

