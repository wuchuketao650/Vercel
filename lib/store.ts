"use client";
import { create } from "zustand";

export interface Project {
  id: number;
  name: string;
  status: "active" | "completed" | "pending";
  progress: number;
  updated: string;
  spec: string;
}

export interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  time: string;
}

export interface Activity {
  id: number;
  title: string;
  time: string;
  goalTitle: string;
  goalTime: string;
  type: "info" | "success" | "warning" | "error";
}

interface AppState {
  projects: Project[];
  messages: Message[];
  activeProject: Project | null;
  activities: Activity[];
  setProjects: (projects: Project[]) => void;
  addProject: (name: string) => void;
  updateProgress: (id: number, progress: number) => void;
  setActiveProject: (project: Project | null) => void;
  addMessage: (role: "user" | "assistant", content: string) => void;
  clearMessages: () => void;
  setActivities: (activities: Activity[]) => void;
}

const initialProjects: Project[] = [
  { id: 1, name: "Vision 协同智能工作流", status: "active", progress: 65, updated: "2025-07-01", spec: "" },
  { id: 2, name: "智能自动化任务", status: "completed", progress: 100, updated: "2025-06-28", spec: "" },
  { id: 3, name: "多模态数据分析", status: "pending", progress: 0, updated: "2025-06-25", spec: "" },
];

const initialActivities: Activity[] = [
  {
    id: 1,
    title: "展示了一个基于 AI 协作的智能工作流",
    time: "27 分",
    goalTitle: "目标",
    goalTime: "15 小时",
    type: "info",
  },
];

export const useStore = create<AppState>((set) => ({
  projects: initialProjects,
  messages: [],
  activeProject: null,
  activities: initialActivities,
  setProjects: (projects) => set({ projects }),
  addProject: (name) => set((s) => ({ projects: [...s.projects, { id: Date.now(), name, status: "active" as const, progress: 0, updated: new Date().toISOString().split("T")[0], spec: "" }] })),
  updateProgress: (id, progress) => set((s) => ({
    projects: s.projects.map((p) => p.id === id ? { ...p, progress, status: progress >= 100 ? "completed" as const : "active" as const } : p)
  })),
  setActiveProject: (project) => set({ activeProject: project }),
  addMessage: (role, content) => set((s) => ({
    messages: [...s.messages, { id: Date.now(), role, content, time: new Date().toLocaleTimeString() }]
  })),
  clearMessages: () => set({ messages: [] }),
  setActivities: (activities) => set({ activities }),
}));
