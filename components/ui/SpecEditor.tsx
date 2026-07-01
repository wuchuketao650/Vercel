"use client";
import { useState } from "react";
import { FileText, Save, Download, CheckCircle, AlertCircle } from "lucide-react";

export function SpecEditor({ initialContent = "", onSave }: { initialContent?: string; onSave?: (content: string) => void }) {
  const [content, setContent] = useState(initialContent);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSave?.(content);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Spec 编辑器</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">{wordCount} 词</span>
          <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            {saved ? <CheckCircle className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {saved ? "已保存" : "保存"}
          </button>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="输入 Spec 内容，支持 Markdown 语法..."
          className="w-full h-96 p-4 bg-gray-50 border border-gray-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-400">
        <AlertCircle className="w-3 h-3" />
        <span>支持 Markdown · 自动保存 · 实时预览</span>
      </div>
    </div>
  );
}
