"use client";
import { useState } from "react";
import { Search, Book, Code, Terminal, Cpu, Zap, FileText, ArrowLeft, ArrowRight, ThumbsUp, BookOpen } from "lucide-react";

const categories = [
  { icon: Book, name: "快速入门", count: 12, color: "blue" },
  { icon: Cpu, name: "FPGA RTL", count: 28, color: "green" },
  { icon: Zap, name: "NPU 算法", count: 15, color: "purple" },
  { icon: Code, name: "C++ 集成", count: 20, color: "orange" },
  { icon: Terminal, name: "验证与调试", count: 18, color: "red" },
  { icon: FileText, name: "API 参考", count: 35, color: "gray" },
];

const articles = [
  {
    id: 1,
    title: "30TAI 开发板快速上手指南",
    category: "快速入门",
    readTime: "5 min",
    content: `# 30TAI 开发板快速上手指南\n\n## 硬件简介\n\n30TAI 开发板是复旦微电子推出的面向 AIoT 与边缘计算场景的开发平台，集成了 ARM Cortex-A53 PS 核心、FPGA PL 资源和 NPU 加速引擎。\n\n## 开箱与连接\n\n1. 连接电源线（12V/2A）\n2. 连接 USB 串口线用于终端访问\n3. 连接网线或 WiFi\n\n## 环境搭建\n\n1. 安装 Vivado 2023.1\n2. 安装 30TAI SDK\n3. 配置交叉编译工具链\n\n## 第一个项目\n\n跟随官方示例，创建一个 LED 闪烁程序，验证开发板基本功能。`,
  },
  {
    id: 2,
    title: "FPGA RTL 设计规范与最佳实践",
    category: "FPGA RTL",
    readTime: "12 min",
    content: `# FPGA RTL 设计规范与最佳实践\n\n## 设计原则\n\n1. **模块化设计**：每个模块职责单一\n2. **可综合性**：代码应能被综合工具处理\n3. **可测试性**：预留测试接口\n\n## 时钟管理\n\n- 使用 MMCM/PLL 管理时钟\n- 避免时钟门控\n- 跨时钟域使用 FIFO 或握手协议\n\n## 代码规范\n\n- 使用同步复位\n- 避免组合逻辑环路\n- 合理流水线优化关键路径`,
  },
  {
    id: 3,
    title: "NPU 模型部署完整流程",
    category: "NPU 算法",
    readTime: "15 min",
    content: `# NPU 模型部署完整流程\n\n## 前置条件\n\n- TensorFlow/PyTorch 训练好的模型\n- 30TAI NPU 工具链\n\n## 步骤\n\n1. **模型准备**：导出 ONNX 格式\n2. **算子检查**：确认所有算子被 NPU 支持\n3. **量化**：INT8 量化以提升推理速度\n4. **编译**：使用 NPU 编译器生成可执行文件\n5. **部署**：将模型文件部署到开发板\n6. **验证**：对比 CPU 与 NPU 推理结果`,
  },
  {
    id: 4,
    title: "PS 端 C++ 驱动开发入门",
    category: "C++ 集成",
    readTime: "8 min",
    content: `# PS 端 C++ 驱动开发入门\n\n## 架构概述\n\n30TAI 采用 PS-PL 架构，PS 端运行 Linux，PL 端运行 FPGA 逻辑。\n\n## 开发环境\n\n- 交叉编译工具链：arm-linux-gnueabihf\n- CMake 构建系统\n- Xilinx HAL 库\n\n## 基本流程\n\n1. 初始化 PL 端驱动\n2. 配置 DMA 传输\n3. 调用 NPU 接口\n4. 处理返回结果`,
  },
  {
    id: 5,
    title: "本地验证与板上验证对标方法",
    category: "验证与调试",
    readTime: "10 min",
    content: `# 本地验证与板上验证对标方法\n\n## 为什么需要对标\n\n本地验证（仿真）与板上验证（实板）的结果应当一致。如果不一致，说明存在设计或配置问题。\n\n## 对标步骤\n\n1. 确保仿真与实板使用相同的时钟频率\n2. 确保内存初始化顺序一致\n3. 比较输入输出数据\n4. 分析差异原因`,
  },
  {
    id: 6,
    title: "30TAI 开发板硬件接口参考",
    category: "API 参考",
    readTime: "6 min",
    content: `# 30TAI 开发板硬件接口参考\n\n## 主要接口\n\n- **PS 核心**：ARM Cortex-A53 四核 1.2GHz\n- **PL 资源**：586K Logic Cells\n- **NPU**：8 TOPS INT8 推理\n- **内存**：4GB DDR3 双通道\n- **外设**：PCIe、USB、ETH、SDIO`,
  },
];

interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  content: string;
}

export default function KnowledgePage() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeArticle) {
    const prevIdx = articles.findIndex((a) => a.id === activeArticle.id) - 1;
    const nextIdx = articles.findIndex((a) => a.id === activeArticle.id) + 1;

    return (
      <div>
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={() => setActiveArticle(null)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8">
              <ArrowLeft className="w-4 h-4" /> 返回列表
            </button>

            <article className="card">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-sm">{activeArticle.category}</span>
                <span className="text-xs text-gray-400">{activeArticle.readTime}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">{activeArticle.title}</h1>
              <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed whitespace-pre-wrap">
                {activeArticle.content}
              </div>
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                {prevIdx >= 0 ? (
                  <button onClick={() => setActiveArticle(articles[prevIdx])} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                    <ArrowLeft className="w-4 h-4" /> 上一篇
                  </button>
                ) : <div />}
                {nextIdx < articles.length ? (
                  <button onClick={() => setActiveArticle(articles[nextIdx])} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
                    下一篇<ArrowRight className="w-4 h-4" />
                  </button>
                ) : <div />}
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">知识库</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              30TAI 开发文档、教程与最佳实践
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索文档..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {categories.map((c, i) => (
              <div key={i} className="card text-center cursor-pointer hover:bg-gray-50">
                <c.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-900">{c.name}</div>
                <div className="text-xs text-gray-400 mt-1">{c.count} 篇</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">最新文章</h2>
            {filteredArticles.map((a) => (
              <div
                key={a.id}
                className="card cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                onClick={() => setActiveArticle(a)}
              >
                <div className="flex items-center gap-4">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">{a.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{a.category}</span>
                      <span className="text-xs text-gray-400">{a.readTime}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
