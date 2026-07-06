import Link from "next/link";
import { Cpu, Zap, Shield, Layers, ArrowRight, CheckCircle } from "lucide-react";

const products = [
  {
    icon: Cpu,
    title: "FPGA RTL 开发套件",
    desc: "AI 辅助的 FPGA RTL 开发全流程，从架构设计到 Vivado 集成文件集生成。",
    features: ["AI 辅助架构分析与模块划分", "Verilog/VHDL RTL 编码与审查", "Design Lint 检查与规范验证", "Vivado 项目文件自动生成"],
    color: "blue",
  },
  {
    icon: Zap,
    title: "NPU 算法部署工具",
    desc: "支持多种 AI 框架模型转换，自动部署至 30TAI NPU 加速引擎。",
    features: ["TensorFlow / PyTorch 模型转换", "NPU 部署参数自动配置", "算子匹配与性能分析报告", "INT8 量化与精度验证"],
    color: "green",
  },
  {
    icon: Shield,
    title: "多级验证平台",
    desc: "本地与板上双轨验证，确保从仿真到流片的全流程质量可控。",
    features: ["RTL 仿真与功能覆盖率分析", "Vivado 综合与时序分析", "BOOT.bin 自动生成", "本地与板上结果自动对标"],
    color: "purple",
  },
  {
    icon: Layers,
    title: "C++ 系统集成框架",
    desc: "PS 端控制逻辑开发框架，简化 NPU 算法调用与数据 Buffer 管理。",
    features: ["PS 端驱动与中间层封装", "NPU 算法调用接口", "DMA 数据 Buffer 管理", "系统联调自动化脚本"],
    color: "orange",
  },
];

export default function ProductsPage() {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">产品功能</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">覆盖 30TAI 开发全生命周期的四大核心能力</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div key={i} className="card">
                <div className={`w-12 h-12 ${colorMap[p.color as keyof typeof colorMap]} rounded-xl flex items-center justify-center mb-4`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h2>
                <p className="text-gray-500 mb-6">{p.desc}</p>
                <ul className="space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/workspace" className="btn-primary flex items-center gap-2 mx-auto">
              开始使用<ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
