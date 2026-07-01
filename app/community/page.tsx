"use client";
import { useState } from "react";
import { MessageSquare, Heart, Eye, Search, User, ArrowLeft, Send, ThumbsUp } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "如何在 30TAI 上部署 YOLOv8 模型？",
    author: "张工",
    category: "NPU 算法",
    replies: 23,
    views: 156,
    likes: 12,
    tags: ["NPU", "YOLO", "部署"],
    content: "大家好，我最近在尝试将 YOLOv8 部署到 30TAI 的 NPU 上。目前遇到了一些问题：\n\n1. 模型转换时出现算子不支持的报错\n2. INT8 量化后精度下降较多\n3. NPU 推理速度没有达到预期\n\n有没有已经成功部署的同学可以分享一下经验？",
    replyList: [
      { id: 1, author: "李工", content: "YOLOv8 的 NMS 算子需要自定义实现，30TAI NPU 默认不支持。建议使用自定义算子替换。", time: "2025-07-01 10:30", likes: 5 },
      { id: 2, author: "王工", content: "量化精度问题可以试试混合精度量化，保持第一层和最后一层用 FP16。", time: "2025-07-01 11:15", likes: 3 },
    ],
  },
  {
    id: 2,
    title: "FPGA RTL 时序收敛经验分享",
    author: "李工",
    category: "FPGA RTL",
    replies: 15,
    views: 234,
    likes: 28,
    tags: ["FPGA", "时序", "Vivado"],
    content: "分享一些在 30TAI 上做 FPGA 时序收敛的经验：\n\n1. 合理划分时钟域，避免跨时钟域问题\n2. 使用流水线技术优化关键路径\n3. 约束文件要精确，不要过度约束\n4. 利用 Vivado 的时序报告分析问题",
    replyList: [
      { id: 1, author: "赵工", content: "很实用的经验分享！特别是关于时钟域划分的部分。", time: "2025-06-30 09:00", likes: 2 },
    ],
  },
  {
    id: 3,
    title: "PS 端 DMA 传输优化技巧",
    author: "王工",
    category: "C++ 集成",
    replies: 8,
    views: 89,
    likes: 6,
    tags: ["DMA", "C++", "优化"],
    content: "PS 端与 PL 端的数据传输是 30TAI 开发中的关键。分享一些 DMA 优化技巧：\n\n1. 使用缓存一致性的内存区域\n2. 批量传输比单次传输更高效\n3. 注意对齐要求，使用 aligned_alloc",
    replyList: [],
  },
  {
    id: 4,
    title: "本地仿真与板上验证结果不一致？",
    author: "赵工",
    category: "验证调试",
    replies: 31,
    views: 412,
    likes: 19,
    tags: ["验证", "调试", "仿真"],
    content: "最近在做本地仿真和板上验证的对标，发现结果不一致。排查后发现是：\n\n1. 仿真模型中没有考虑时序延迟\n2. 板上的时钟频率与仿真不同\n3. 内存初始化顺序有差异\n\n大家在做对标时也要注意这些点。",
    replyList: [
      { id: 1, author: "刘工", content: "时钟频率差异确实是个常见问题，建议仿真时使用与板上相同的时钟参数。", time: "2025-06-28 14:20", likes: 4 },
    ],
  },
  {
    id: 5,
    title: "30TAI 开发板开箱与上手体验",
    author: "刘工",
    category: "快速入门",
    replies: 45,
    views: 678,
    likes: 52,
    tags: ["入门", "开箱", "硬件"],
    content: "刚收到 30TAI 开发板，开箱分享：\n\n- 板子做工不错，接口齐全\n- 预装了 SDK，可以快速开始\n- 文档比较完善\n- 建议先跑通官方示例，再开始自己的项目",
    replyList: [
      { id: 1, author: "陈工", content: "新手入门好帖！我也刚入手，跟着官方示例走了一遍。", time: "2025-06-25 16:00", likes: 6 },
    ],
  },
];

interface Post {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  likes: number;
  tags: string[];
  content: string;
  replyList: Array<{ id: number; author: string; content: string; time: string; likes: number }>;
}

export default function CommunityPage() {
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [replyText, setReplyText] = useState("");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handleLike = (id: number) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleReply = () => {
    if (!replyText.trim() || !activePost) return;
    setReplyText("");
  };

  if (activePost) {
    return (
      <div>
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={() => setActivePost(null)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8">
              <ArrowLeft className="w-4 h-4" /> 返回列表
            </button>

            <div className="card mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{activePost.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> {activePost.author}</span>
                <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{activePost.category}</span>
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {activePost.views}</span>
                <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {activePost.replies}</span>
              </div>
              <div className="prose prose-sm max-w-none text-gray-600 whitespace-pre-wrap leading-relaxed">
                {activePost.content}
              </div>
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                {activePost.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">#{tag}</span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">回复 ({activePost.replyList.length})</h3>
              {activePost.replyList.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-8">暂无回复，成为第一个回复的人</p>
              ) : (
                <div className="space-y-4">
                  {activePost.replyList.map((r) => (
                    <div key={r.id} className="card">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 text-sm">{r.author}</span>
                        <span className="text-xs text-gray-400">{r.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{r.content}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600">
                          <ThumbsUp className="w-3 h-3" /> {r.likes}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="card">
              <h3 className="font-medium text-gray-900 mb-3">发表回复</h3>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex-1">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="写下你的回复..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-24"
                  />
                  <div className="flex justify-end mt-3">
                    <button onClick={handleReply} className="btn-primary flex items-center gap-2">
                      <Send className="w-3 h-3" /> 发送
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">开发者社区</h1>
            <p className="text-gray-500 text-lg">与 30TAI 开发者一起交流与成长</p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="搜索讨论..." className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="card cursor-pointer hover:bg-gray-50" onClick={() => setActivePost(post)}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{post.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                      <span>{post.author}</span>
                      <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{post.category}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {post.replies}</span>
                      <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {post.views}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">#{tag}</span>
                        ))}
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); handleLike(post.id); }} className={`flex items-center gap-1 text-xs ${likedPosts.has(post.id) ? "text-blue-600" : "text-gray-400"}`}>
                        <Heart className="w-3 h-3" /> {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
