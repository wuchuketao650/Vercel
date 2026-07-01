"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { useStore } from "@/lib/store";

const suggestions = [
  "帮我生成 FPGA RTL 架构分析",
  "NPU 算法部署配置建议",
  "C++ PS 端代码模板",
  "Spec 文档生成",
];

export function AIChat() {
  const [input, setInput] = useState("");
  const messages = useStore((s) => s.messages);
  const addMessage = useStore((s) => s.addMessage);
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage("user", input);
    const userMsg = input;
    setInput("");

    setTimeout(() => {
      let reply = "";
      if (userMsg.includes("RTL") || userMsg.includes("FPGA")) {
        reply = "好的，我来帮你生成 FPGA RTL 架构分析。基于 30TAI 开发板的 PL 资源（586K Logic Cells），建议采用模块化设计：\n\n1. **顶层模块**：系统时钟管理与复位\n2. **AXI 总线接口**：PS-PL 数据交互\n3. **功能模块**：根据你的需求定制\n\n需要我生成具体的 Verilog 代码吗？";
      } else if (userMsg.includes("NPU") || userMsg.includes("算法")) {
        reply = "关于 NPU 算法部署，我建议以下步骤：\n\n1. **模型准备**：选择或训练你的 AI 模型\n2. **格式转换**：转换为 30TAI NPU 支持的格式\n3. **量化**：INT8 量化以提升推理速度\n4. **部署**：使用部署工具链生成可执行文件\n\n你有具体的模型需要部署吗？";
      } else if (userMsg.includes("Spec") || userMsg.includes("文档")) {
        reply = "我来帮你生成 Spec 文档。请告诉我：\n\n1. 项目名称\n2. 功能需求\n3. 性能指标\n4. 接口要求\n\n我会基于 30TAI 知识库为你生成完整的技术规范文档。";
      } else {
        reply = "你好！我是 30TAI AI 助手，可以帮你：\n\n• 生成 FPGA RTL 代码\n• 配置 NPU 算法部署\n• 编写 C++ PS 端代码\n• 创建 Spec 文档\n• 验证与调试建议\n\n请告诉我你需要什么帮助？";
      }
      addMessage("assistant", reply);
    }, 1000);
  };

  return (
    <div className="card flex flex-col h-[600px]">
      <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">30TAI AI 助手</h3>
          <p className="text-xs text-gray-400">在线 · 基于 30TAI 知识库</p>
        </div>
        <Sparkles className="w-4 h-4 text-blue-600 ml-auto" />
      </div>

      <div className="flex-1 overflow-y-auto py-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm mb-4">开始与 AI 助手对话</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setInput(s)}
                  className="text-xs px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-blue-600" />
              </div>
            )}
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
              msg.role === "user"
                ? "bg-blue-600 text-white rounded-br-sm"
                : "bg-gray-100 text-gray-700 rounded-bl-sm"
            }`}>
              <div className="whitespace-pre-wrap">{msg.content}</div>
              <div className={`text-xs mt-1 ${msg.role === "user" ? "text-blue-200" : "text-gray-400"}`}>
                {msg.time}
              </div>
            </div>
            {msg.role === "user" && (
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEnd} />
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="输入问题..."
            className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
