import React from "react"
import style from "./card.module.css"

export default function Card({ data, onClick }) {
  return (
    <div className={style.card}>
      <img src="" className={style.img} />
      <div className={style.cardData}>
        <p>場所:　{data.place}</p>
        <p>時給:　{data.hourlyPay}円</p>
        <p>時間:　{data.time}</p>
        <p>距離:　（ユーザー情報から概算）</p>
        <p>タグ：　{data.tags.length && (
          data.tags.map((item, key) => (<span key={key}>
            {item}　
          </span>
          ))
        )}
        </p>
      </div>
      <button className={style.joinButton} onClick={onClick} type="button">応募する</button>
    </div>
  )
}
