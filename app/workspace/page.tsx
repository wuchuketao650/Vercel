"use client";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { AIChat } from "@/components/ui/AIChat";
import { SpecEditor } from "@/components/ui/SpecEditor";
import { FolderPlus, Plus, ArrowRight, FileText, MessageSquare } from "lucide-react";

const templates = [
  { name: "FPGA RTL 项目", desc: "从 RTL 编码到 Vivado 综合的完整流程" },
  { name: "NPU 算法部署项目", desc: "模型转换、部署配置、运行验证" },
  { name: "全栈开发项目", desc: "FPGA + NPU + C++ 的完整系统集成" },
];

function statusColor(status: string) {
  if (status === "completed") return "text-green-600 bg-green-50";
  if (status === "active") return "text-blue-600 bg-blue-50";
  return "text-gray-500 bg-gray-100";
}

function statusLabel(status: string) {
  if (status === "completed") return "已完成";
  if (status === "active") return "进行中";
  return "待开始";
}

export default function WorkspacePage() {
  const projects = useStore((s) => s.projects);
  const addProject = useStore((s) => s.addProject);
  const updateProgress = useStore((s) => s.updateProgress);
  const setActiveProject = useStore((s) => s.setActiveProject);
  const activeProject = useStore((s) => s.activeProject);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [view, setView] = useState<"list" | "spec" | "chat">("list");

  const handleAdd = () => {
    if (!newName.trim()) return;
    addProject(newName);
    setNewName("");
    setShowAdd(false);
  };

  return (
    <div>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">工作区</h1>
              <p className="text-gray-500">管理你的 30TAI 开发项目</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setView("list")}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${view === "list" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}
                >
                  项目列表
                </button>
                <button
                  onClick={() => setView("spec")}
                  className={`px-4 py-2 text-sm rounded-full transition-colors flex items-center gap-1 ${view === "spec" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}
                >
                  <FileText className="w-3 h-3" /> Spec
                </button>
                <button
                  onClick={() => setView("chat")}
                  className={`px-4 py-2 text-sm rounded-full transition-colors flex items-center gap-1 ${view === "chat" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}
                >
                  <MessageSquare className="w-3 h-3" /> AI 助手
                </button>
              </div>
              <button onClick={() => setShowAdd(true)} className="btn-primary flex items-center gap-2">
                <Plus className="w-4 h-4" /> 新建项目
              </button>
            </div>
          </div>

          {showAdd && (
            <div className="mb-8 card">
              <h3 className="font-semibold text-gray-900 mb-4">新建项目</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                  placeholder="输入项目名称..."
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
                <button onClick={handleAdd} className="btn-primary">创建</button>
                <button onClick={() => setShowAdd(false)} className="btn-secondary">取消</button>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">或使用模板</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {templates.map((t, i) => (
                    <div key={i} className="card cursor-pointer hover:bg-gray-50" onClick={() => { setNewName(t.name); }}>
                      <FolderPlus className="w-6 h-6 text-blue-600 mb-2" />
                      <h5 className="font-medium text-gray-900 text-sm">{t.name}</h5>
                      <p className="text-xs text-gray-500 mt-1">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {view === "list" && (
            <div className="space-y-4">
              {projects.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-400 mb-4">暂无项目，创建你的第一个 30TAI 项目</p>
                  <button onClick={() => setShowAdd(true)} className="btn-primary">创建项目</button>
                </div>
              ) : (
                projects.map((p) => (
                  <div key={p.id} className="card cursor-pointer hover:bg-gray-50" onClick={() => setActiveProject(p)}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-gray-900">{p.name}</h3>
                        {activeProject?.id === p.id && (
                          <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full">当前</span>
                        )}
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full ${statusColor(p.status)}`}>
                        {statusLabel(p.status)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${p.progress}%` }} />
                      </div>
                      <span className="text-sm text-gray-500 min-w-[40px] text-right">{p.progress}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">更新于 {p.updated}</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={p.progress}
                          onChange={(e) => updateProgress(p.id, parseInt(e.target.value))}
                          onClick={(e) => e.stopPropagation()}
                          className="w-24 h-1 accent-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {view === "spec" && (
            <SpecEditor
              initialContent={activeProject?.spec || ""}
              onSave={(content) => {
                if (activeProject) {
                  useStore.setState((s) => ({
                    projects: s.projects.map((p) => p.id === activeProject.id ? { ...p, spec: content } : p)
                  }));
                }
              }}
            />
          )}

          {view === "chat" && (
            <AIChat />
          )}

          {view === "list" && projects.length === 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">项目模板</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {templates.map((t, i) => (
                  <div key={i} className="card cursor-pointer hover:bg-gray-50">
                    <FolderPlus className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.desc}</p>
                    <div className="mt-4 text-sm text-blue-600 flex items-center gap-1">
                      使用模板 <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
