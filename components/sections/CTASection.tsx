import Link from "next/link";
import { Rocket } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[22px] p-12 md:p-16 text-white shadow-xl">
          <Rocket className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">开始你的 30TAI 开发之旅</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            创建项目，选择模板，AI 辅助完成从 Spec 到板上验证的完整流程。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/workspace" className="px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]">
              创建新项目
            </Link>
            <Link href="/knowledge" className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 transition-all duration-200">
              浏览知识库
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
