import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  const workList = [{
    place: '沖縄市',
    hourlyPay: 1000,
    time: '10時~22時'
  },
  {
    place: '沖縄市',
    hourlyPay: 1000,
    time: '10時~22時'
    },
    {
      place: '沖縄市',
      hourlyPay: 1000,
      time: '10時~22時'
    },
    {
      place: '沖縄市',
      hourlyPay: 1000,
      time: '10時~22時'
    }];
  return NextResponse.json(
    { data: workList, status: 200 }
  );
}

export async function POST(request) {
  const body = await request.json();
  console.log(body)
  return NextResponse.json(
    { status: 200 }
  );
}
