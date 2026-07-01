"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">发生错误</h1>
        <p className="text-gray-500 mb-8">系统暂时遇到问题，请稍后重试</p>
        <button onClick={() => reset()} className="btn-primary">重试</button>
      </div>
    </div>
  );
}
