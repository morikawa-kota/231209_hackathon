import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const params = request.nextUrl.searchParams.get("params");
  const user = {
    name: "山田 太郎",
    adress: "住所",
    tags: ["アニメ", "マンガ", "語学"],
  };
  return NextResponse.json(
    { data: user, status: 200 }
  );
}

export async function PUT(request) {
  const body = await request.json();
  return NextResponse.json(
    { status: 200 }
  );
}
