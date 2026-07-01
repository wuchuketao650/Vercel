import { Cpu, HardDrive, Zap, Radio, Brain, MemoryStick, Usb } from "lucide-react";

const specs = [
  { icon: Cpu, label: "PS 核心", value: "ARM Cortex-A53", detail: "四核 1.2GHz" },
  { icon: Brain, label: "PL 资源", value: "586K Logic Cells", detail: "Xilinx 7 Series" },
  { icon: Zap, label: "NPU 算力", value: "8 TOPS", detail: "INT8 推理" },
  { icon: MemoryStick, label: "内存", value: "4GB DDR3", detail: "双通道" },
  { icon: HardDrive, label: "功耗", value: "15W TDP", detail: "典型工作负载" },
  { icon: Usb, label: "接口", value: "丰富外设", detail: "PCIe / USB / ETH / SDIO" },
];

export function ChipSpecsSection() {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">30TAI 开发板规格</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">复旦微电子 30TAI 系列，面向 AIoT 与边缘计算场景</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((s, i) => (
            <div key={i} className="card hover:-translate-y-1">
              <s.icon className="w-6 h-6 text-blue-600 mb-3" />
              <div className="text-sm text-gray-500 mb-1">{s.label}</div>
              <div className="text-xl font-bold text-gray-900 mb-1">{s.value}</div>
              <div className="text-xs text-gray-400">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
