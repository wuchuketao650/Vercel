"use client";
import { useState } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!username) errs.username = "请输入用户名";
    else if (username.length < 2) errs.username = "用户名至少2个字符";
    if (!email) errs.email = "请输入邮箱";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "邮箱格式不正确";
    if (!password) errs.password = "请输入密码";
    else if (password.length < 6) errs.password = "密码至少6位";
    if (password !== confirm) errs.confirm = "两次密码不一致";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
      <div className="card w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold">30</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">注册 30TAI</h1>
          <p className="text-gray-500 text-sm mt-2">创建账号，开始你的开发之旅</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">用户名</label>
            <input type="text" value={username} onChange={(e) => { setUsername(e.target.value); setErrors((p) => ({ ...p, username: "" })); }} className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent ${errors.username ? "border-red-400 focus:ring-red-500" : "border-gray-200 focus:ring-blue-500"}`} placeholder="用户名" />
            {errors.username && <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{errors.username}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }} className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent ${errors.email ? "border-red-400 focus:ring-red-500" : "border-gray-200 focus:ring-blue-500"}`} placeholder="your@email.com" />
            {errors.email && <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: "" })); }} className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent ${errors.password ? "border-red-400 focus:ring-red-500" : "border-gray-200 focus:ring-blue-500"}`} placeholder="· · · · · · · ·" />
            {errors.password && <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{errors.password}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">确认密码</label>
            <input type="password" value={confirm} onChange={(e) => { setConfirm(e.target.value); setErrors((p) => ({ ...p, confirm: "" })); }} className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-transparent ${errors.confirm ? "border-red-400 focus:ring-red-500" : "border-gray-200 focus:ring-blue-500"}`} placeholder="· · · · · · · ·" />
            {errors.confirm && <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle className="w-3 h-3" />{errors.confirm}</p>}
          </div>
          <button type="submit" disabled={loading} className="w-full btn-primary disabled:opacity-50">
            {loading ? "注册中..." : "注册"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          已有账号？<Link href="/login" className="text-blue-600 hover:underline">登录</Link>
        </div>
      </div>
    </div>
  );
}
