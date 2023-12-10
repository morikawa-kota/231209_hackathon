"use client"
import Card from "@/app/components/card";
import { useEffect, useState } from "react";
import style from "../../dashbord.module.css"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userState, setUserState] = useState(null);
  
  const joinWork = () => {
    const fetchtData = async () => {
      try {
        await fetch(`/api/dashboard/`, {
          method: "POST",
          body: JSON.stringify("userdata"),
        }).then((response) => {
          const data = response.json()
          console.log(data)
        })
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchtData();
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchtData = async () => {
      try {
        const response = await fetch(`/api/dashboard/`, {
          method: "GET",
        });
        const responseJSON = await response.json();
        const workList = responseJSON.data;
        console.log("-------")
        setData(workList);
        setIsLoading(false);
      }
      catch (error) {
        console.error(error);
      }
      try {
        const userId = 1;
        const response = await fetch(`/api/user/?params=${userId}`, {
          method: "GET",
        });
        const data = await response.json();
        const userData = data.data;
        setUserState(userData);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchtData();
  }, []);
  

  return <>
    {isLoading ? (<p>Loading...</p>) : <div className={style.wrapper}>
      <h1 className={style.h1}>あなたへのおすすめ</h1>
      <div className={style.cardList}>
        {data.length && (
          data.map((item, key) => {
            if (userState != null && item.tags.some((tag) => userState.tags.includes(tag))) {
              return (<div key={key}>
                <Card data={item} onClick={joinWork} />
              </div>)
            }
          })
        )}
      </div>
      <h1 className={style.h1}>募集中の求人</h1>
      <div className={style.cardList}>
        {data.length && (
          data.map((item, key) => (<div key={key}>
            <Card data={item} onClick={joinWork} />
          </div>
          ))
        )}
      </div>
    </div >}
  </> 
}
