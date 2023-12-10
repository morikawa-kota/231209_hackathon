import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  // const fetchtData = async () => {
  //   try {
  //     await fetch(`https://lolup.lolbox.jp/get_recruits/`, {
  //       method: "GET",
  //     }).then((response) => {
  //       const workList = response;
  //       console.log(workList)
  //       return NextResponse.json(
  //         { data: workList, status: 200 }
  //       );
  //     })
  //   }
  //   catch (error) {
  //     console.error(error);
  //   }
  // }
  // fetchtData();

  const workList = [{
    place: '沖縄市',
    hourlyPay: 1000,
    time: '10時~22時',
    tags: ["語学","料理"]
  },
  {
    place: '沖縄市',
    hourlyPay: 1000,
    time: '10時~22時',
    tags: ["ああ", "料理"]
    },
    {
      place: '沖縄市',
      hourlyPay: 1000,
      time: '10時~22時',
      tags: ["いい", "料理"]
    },
    {
      place: '沖縄市',
      hourlyPay: 1000,
      time: '10時~22時',
      tags: ["うう", "料理"]
    }];
  return NextResponse.json(
    { data: workList, status: 500 }
  );
}

export async function POST(request) {
  const body = await request.json();
  console.log(body)
  return NextResponse.json(
    { status: 200 }
  );
}
