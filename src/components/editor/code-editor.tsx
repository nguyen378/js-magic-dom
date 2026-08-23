'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { RotateCcw, Code2, Copy, Check } from 'lucide-react';

const Monaco = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface CodeEditorProps {
  code: string;
  onChange: (newCode: string) => void;
  onReset: () => void;
  onRun: () => void;
}

export function CodeEditor({ code, onChange, onReset, onRun }: CodeEditorProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm dark:border-slate-800">
      
      {/* Editor Header Bar */}
      <div className="flex h-11 items-center justify-between border-b border-slate-800 bg-slate-950 px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 flex items-center gap-1.5 text-xs font-bold text-slate-300">
            <Code2 className="h-3.5 w-3.5 text-amber-400" />
            script.js
          </span>
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
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(val) => onChange(val || '')}
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
        <span className="text-indigo-400 font-mono">JavaScript (ES6+)</span>
      </div>

    </div>
  );
}
