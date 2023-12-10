"use client"
import Card from "@/app/components/card";
import { useEffect, useState } from "react";
import style from "../../dashbord.module.css"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const JSON = {
      place: '沖縄市',
      hourlyPay: 1000,
      time: '10時~22時'
    }
    setData(JSON);
    setIsLoading(false);
  }, []);

  return <>
    {isLoading ? (<p>Loading...</p>) : <div className={style.warrapper}>
      <h1 className={style.h1}>あなたへのおすすめ</h1 >
      <Card data={data} /> 
      <h1 className={style.h1}>募集中の求人</h1>
      <Card data={data} />
    </div >}
  </> 
}
