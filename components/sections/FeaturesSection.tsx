"use client";
import { useState } from "react";
import { Cpu, Zap, Shield, Layers, Terminal, GitBranch } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "FPGA RTL 开发",
    desc: "AI 辅助架构分析与 RTL 编码，支持 Verilog/VHDL，自动 Lint 检查，生成 Vivado 集成文件集。",
    details: ["架构分析与模块划分", "RTL 编码与代码审查", "Lint 检查与规范验证", "Vivado 文件集生成"],
  },
  {
    icon: Zap,
    title: "NPU 算法部署",
    desc: "智能算法选型，支持 TensorFlow/PyTorch 模型转换，自动部署配置与运行验证。",
    details: ["模型格式转换与优化", "NPU 部署参数配置", "算子匹配与性能分析", "推理精度验证"],
  },
  {
    icon: Shield,
    title: "多级验证体系",
    desc: "本地验证与板上验证双轨并行，确保 RTL 仿真、综合、流片全流程质量可控。",
    details: ["RTL 仿真与覆盖率", "Vivado 综合与实现", "BOOT.bin 生成", "本地与板上结果对标"],
  },
  {
    icon: Layers,
    title: "C++ 系统集成",
    desc: "PS 端控制逻辑编写，NPU 算法调用，数据 Buffer 管理，完成系统级集成。",
    details: ["PS 端驱动开发", "NPU 算法接口封装", "数据 Buffer 管理", "系统联调与测试"],
  },
  {
    icon: Terminal,
    title: "Spec 驱动开发",
    desc: "基于 Spec 的迭代式开发流程，AI 辅助理解项目需求，自动生成技术规范文档。",
    details: ["需求分析与拆解", "Spec 循序迭代", "接口定义与审查", "技术规范生成"],
  },
  {
    icon: GitBranch,
    title: "AI 协同工作流",
    desc: "人类、Cursor/Opus、Codex/GPT 三方协同，各自发挥优势，提升开发效率。",
    details: ["人类确认项目要求", "Cursor 编写 RTL 与算法", "Codex 审查 Spec 与架构", "AI 辅助日志与验证"],
  },
];

export function FeaturesSection() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">核心功能</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">覆盖 30TAI 开发全生命周期的 AI 辅助能力</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`card cursor-pointer transition-all duration-300 hover:-translate-y-1 ${activeIdx === i ? "ring-2 ring-blue-500/60 shadow-lg scale-[1.02]" : ""}`}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              <f.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              {activeIdx === i && (
                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                  {f.details.map((d, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
