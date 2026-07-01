import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "产品", href: "/products" },
  { label: "工作流", href: "/workflow" },
  { label: "知识库", href: "/knowledge" },
  { label: "社区", href: "/community" },
];

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">30</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">30TAI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              登录
            </Link>
            <Link
              href="/workspace"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              开始使用
            </Link>
          </div>

          <label className="md:hidden p-2 cursor-pointer" htmlFor="mobile-menu-toggle">
            <Menu className="w-5 h-5" />
          </label>
        </div>
      </div>

      <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
      <div className="md:hidden bg-white border-t border-gray-100 peer-checked:block hidden">
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-600 hover:text-gray-900 py-2 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex gap-3">
            <Link href="/login" className="text-gray-600 px-4 py-2 text-sm font-medium">
              登录
            </Link>
            <Link
              href="/workspace"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium"
            >
              开始使用
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
