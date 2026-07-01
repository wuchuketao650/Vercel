import Link from "next/link";
import { ArrowRight, Cpu, Sparkles, Code2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          基于 AI 协同的复旦微 30TAI 开发板开发工作流
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
          <span className="block text-blue-600">AI 协同的复旦微 30TAI</span>
          <span className="block mt-2">开发板开发工作流</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          旨在将项目需求快速落地到板卡上验证。它是完整的。从 FPGA/NPU 并行开发到 C++ 控制逻辑编写与集成，最终在 30TAI 板上完成闭环验证。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="/workspace" className="btn-primary flex items-center gap-2">
            开始工作 <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/workflow" className="btn-secondary flex items-center gap-2">
            了解更多 <Code2 className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">FPGA RTL</h3>
            <p className="text-gray-500 text-sm leading-relaxed">架构分析、RTL 编码、Lint 检查、文件集集成。</p>
          </div>
          <div className="card text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">NPU 算法部署</h3>
            <p className="text-gray-500 text-sm leading-relaxed">算法选型、部署配置、运行验证、文件集集成。</p>
          </div>
          <div className="card text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">C++ 控制逻辑编写</h3>
            <p className="text-gray-500 text-sm leading-relaxed">编写 PS 端代码，调用 NPU 算法，处理数据 Buffer，最终完成控制逻辑编写。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
