import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">平台</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-500 hover:text-gray-900 text-sm">产品功能</Link></li>
              <li><Link href="/workflow" className="text-gray-500 hover:text-gray-900 text-sm">AI 工作流</Link></li>
              <li><Link href="/knowledge" className="text-gray-500 hover:text-gray-900 text-sm">知识库</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">资源</h3>
            <ul className="space-y-2">
              <li><Link href="/community" className="text-gray-500 hover:text-gray-900 text-sm">开发者社区</Link></li>
              <li><Link href="/knowledge" className="text-gray-500 hover:text-gray-900 text-sm">技术文档</Link></li>
              <li><Link href="/workspace" className="text-gray-500 hover:text-gray-900 text-sm">工作区</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">关于</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-500 text-sm">复旦微电子</span></li>
              <li><span className="text-gray-500 text-sm">30TAI 开发板</span></li>
              <li><span className="text-gray-500 text-sm">AI 协同开发</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="text-gray-500 text-sm">技术支持邮箱</li>
              <li className="text-gray-500 text-sm">support@30tai.dev</li>
              <li className="text-gray-500 text-sm">开发者微信群</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          © 2025 30TAI 平台 · 基于复旦微电子 30TAI 开发板 · AI 协同开发
        </div>
      </div>
    </footer>
  );
}
