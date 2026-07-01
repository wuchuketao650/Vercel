import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "用户信息 API" });
}
