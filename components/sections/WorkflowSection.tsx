import { User, Bot, GitCommit, CheckCircle, ArrowRight, FileText, Cpu, Brain, Code2 } from "lucide-react";

const steps = [
  { step: 1, title: "需求与 Spec", desc: "项目要求输入 → AI 辅助分析 → 基于 30TAI 知识库 → Spec 循序迭代", icon: FileText },
  { step: 2, title: "FPGA RTL", desc: "架构分析 → RTL 编码 → Lint 检查 → 文件集集成", icon: Cpu },
  { step: 3, title: "NPU 算法", desc: "算法选型 → 部署配置 → 运行验证 → 文件集集成", icon: Brain },
  { step: 4, title: "C++ 集成", desc: "PS 端代码 → NPU 调用 → Buffer 处理 → 系统联调", icon: Code2 },
  { step: 5, title: "验证对标", desc: "本地验证 → 板上验证 → 结果对比 → 闭环完成", icon: CheckCircle },
];

const roles = [
  { name: "人类 (Human)", role: "确认项目要求、板卡实况、高风险操作", icon: User, color: "bg-blue-600" },
  { name: "Cursor / Opus", role: "编写 RTL、算法配置、C++ 代码", icon: Bot, color: "bg-green-600" },
  { name: "Codex / GPT", role: "审查 Spec、架构、接口、日志、验证证据", icon: Bot, color: "bg-purple-600" },
];

export function WorkflowSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">AI 协同工作流</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">从需求到板上验证的完整开发闭环</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="card text-center hover:-translate-y-1">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-xs text-blue-600 font-semibold mb-1">步骤 {s.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-blue-400/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-[22px] p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">角色分工</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((r, i) => (
              <div key={i} className="card hover:-translate-y-1">
                <div className={`w-10 h-10 ${r.color} rounded-xl flex items-center justify-center mb-4`}>
                  <r.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{r.name}</h4>
                <p className="text-gray-500 text-sm">{r.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
