import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { FileText, GitBranch, Code, Cpu, Zap, CheckCircle } from "lucide-react";

const phases = [
  {
    icon: FileText,
    phase: "阶段一",
    title: "需求与 Spec",
    steps: ["项目需求输入与理解", "AI 辅助需求分析与拆解", "基于 30TAI 知识库检索", "Spec 循序迭代与审查"],
  },
  {
    icon: GitBranch,
    phase: "阶段二",
    title: "并行开发",
    steps: ["FPGA RTL 架构分析与编码", "NPU 算法选型与部署配置", "Lint 检查与代码审查", "文件集集成准备"],
  },
  {
    icon: Code,
    phase: "阶段三",
    title: "系统集成",
    steps: ["C++ PS 端代码编写", "NPU 算法接口封装", "数据 Buffer 管理", "系统级联调与测试"],
  },
  {
    icon: Cpu,
    phase: "阶段四",
    title: "本地验证",
    steps: ["C++ 编译与链接", "RTL 仿真与覆盖率", "Vivado 综合与实现", "BOOT.bin 生成"],
  },
  {
    icon: Zap,
    phase: "阶段五",
    title: "板上验证",
    steps: ["部署到 30TAI 开发板", "系统启动与日志采集", "本地与板上结果对比", "验证闭环与迭代"],
  },
];

export default function WorkflowPage() {
  return (
    <div>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI 协同工作流</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              从需求到板上验证的完整开发闭环，AI 全程辅助
            </p>
          </div>

          <div className="space-y-12">
            {phases.map((p, i) => (
              <div key={i} className="card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <p.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-blue-600 font-semibold mb-1">{p.phase}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{p.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                      {p.steps.map((s, j) => (
                        <div key={j} className="bg-gray-50 rounded-xl p-3 text-sm text-gray-600">
                          <span className="text-gray-400 mr-2">0{j + 1}.</span>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkflowSection />
    </div>
  );
}
