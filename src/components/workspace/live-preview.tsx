'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCw, Terminal, Eye, AlertCircle, Trash2, Columns2, Maximize2 } from 'lucide-react';
import { buildIframeHtml } from '@/lib/dom-tester';

interface ConsoleLog {
  type: 'log' | 'error' | 'warn' | 'info';
  message: string;
  timestamp: string;
}

interface LivePreviewProps {
  htmlContent: string;
  cssContent: string;
  jsCode: string;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
  onIframeLoaded?: () => void;
}

export function LivePreview({
  htmlContent,
  cssContent,
  jsCode,
  iframeRef,
  onIframeLoaded,
}: LivePreviewProps) {
  const [viewMode, setViewMode] = useState<'split' | 'dom_only' | 'console_only'>('split');
  const [logs, setLogs] = useState<ConsoleLog[]>([]);
  const [key, setKey] = useState(0);

  // Capture logs from iframe postMessage
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'CONSOLE_MESSAGE') {
        const time = new Date().toLocaleTimeString();
        setLogs((prev) => [
          ...prev,
          {
            type: e.data.level || 'log',
            message: e.data.text || '',
            timestamp: time,
          },
        ]);
      } else if (e.data?.type === 'RUNTIME_ERROR') {
        const time = new Date().toLocaleTimeString();
        setLogs((prev) => [
          ...prev,
          {
            type: 'error',
            message: e.data.message || 'Lỗi không xác định',
            timestamp: time,
          },
        ]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleRefresh = () => {
    setLogs([]);
    setKey((prev) => prev + 1);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const iframeSrcDoc = buildIframeHtml(htmlContent, cssContent, jsCode);
  const errorCount = logs.filter((l) => l.type === 'error').length;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900">
      
      {/* Header bar */}
      <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-slate-50 px-3 dark:border-slate-800 dark:bg-slate-950">
        
        {/* View Mode Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode('split')}
            title="Xem song song DOM & Console"
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
              viewMode === 'split'
                ? 'bg-white text-indigo-600 shadow-xs dark:bg-slate-800 dark:text-indigo-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Columns2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Song song</span>
          </button>

          <button
            onClick={() => setViewMode('dom_only')}
            title="Chỉ xem DOM"
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
              viewMode === 'dom_only'
                ? 'bg-white text-indigo-600 shadow-xs dark:bg-slate-800 dark:text-indigo-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Giao diện DOM</span>
          </button>

          <button
            onClick={() => setViewMode('console_only')}
            title="Chỉ xem Console"
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
              viewMode === 'console_only'
                ? 'bg-white text-indigo-600 shadow-xs dark:bg-slate-800 dark:text-indigo-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Console</span>
            {logs.length > 0 && (
              <span className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                errorCount > 0 
                  ? 'bg-red-100 text-red-700 font-extrabold' 
                  : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
              }`}>
                {logs.length}
              </span>
            )}
          </button>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          {logs.length > 0 && (
            <button
              onClick={clearLogs}
              title="Xóa console"
              className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Xóa log</span>
            </button>
          )}
          <button
            onClick={handleRefresh}
            title="Làm mới trang preview"
            className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <RotateCw className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Làm mới</span>
          </button>
        </div>

      </div>

      {/* Main Content Area */}
      <div className="relative flex flex-1 flex-col bg-slate-100 dark:bg-slate-950/60 p-2 gap-2 overflow-hidden">
        
        {/* DOM Preview Section */}
        <div className={`w-full rounded-xl bg-white shadow-xs overflow-hidden border border-slate-200/80 dark:border-slate-800 transition-all ${
          viewMode === 'dom_only' 
            ? 'h-full flex-1' 
            : viewMode === 'split' 
            ? 'h-[60%] flex-[6]' 
            : 'hidden'
        }`}>
          <iframe
            key={key}
            ref={iframeRef as any}
            srcDoc={iframeSrcDoc}
            title="DOM Sandbox Preview"
            sandbox="allow-scripts allow-modals allow-same-origin"
            className="h-full w-full border-0"
            onLoad={onIframeLoaded}
          />
        </div>

        {/* Console Log Section */}
        <div className={`w-full rounded-xl bg-slate-950 p-3 font-mono text-xs overflow-y-auto text-slate-200 border border-slate-800 transition-all flex flex-col ${
          viewMode === 'console_only' 
            ? 'h-full flex-1' 
            : viewMode === 'split' 
            ? 'h-[40%] flex-[4]' 
            : 'hidden'
        }`}>
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-[11px] text-slate-400 font-sans">
            <span className="flex items-center gap-1 font-bold">
              <Terminal className="h-3 w-3 text-amber-400" />
              <span>Bảng Điều Khiển Console:</span>
            </span>
            <span>{logs.length} tin nhắn</span>
          </div>

          {logs.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center text-slate-500 py-2">
              <p className="text-[11px]">Chưa có dữ liệu in ra.</p>
              <p className="text-[10px] mt-0.5 text-slate-600">
                Lệnh <code className="text-amber-400">console.log(...)</code> sẽ xuất hiện tại đây!
              </p>
            </div>
          ) : (
            <div className="space-y-1 overflow-y-auto flex-1 pr-1">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 rounded-md p-1 ${
                    log.type === 'error'
                      ? 'bg-red-950/50 text-red-300 border border-red-900/50'
                      : log.type === 'warn'
                      ? 'bg-amber-950/50 text-amber-300 border border-amber-900/50'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span className="text-[9px] text-slate-500 shrink-0 select-none mt-0.5">
                    {log.timestamp}
                  </span>
                  <span className="font-bold shrink-0">
                    {log.type === 'error' ? '❌' : log.type === 'warn' ? '⚠️' : '❯'}
                  </span>
                  <span className="whitespace-pre-wrap break-all flex-1 text-[11px]">
                    {log.message}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
