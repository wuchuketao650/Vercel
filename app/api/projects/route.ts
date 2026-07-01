import { NextResponse } from "next/server";

const mockProjects = [
  { id: 1, name: "Vision 目标检测系统", status: "active", progress: 65 },
  { id: 2, name: "语音唤醒模块", status: "completed", progress: 100 },
  { id: 3, name: "传感器数据融合", status: "pending", progress: 0 },
];

export function GET() {
  return NextResponse.json(mockProjects);
}

export function POST(req: Request) {
  const body = req.body;
  return NextResponse.json({ message: "项目创建成功" }, { status: 201 });
}
