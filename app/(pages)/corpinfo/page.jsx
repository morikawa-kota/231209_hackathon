'use client'
import 'next/head';
import { useState } from 'react';
import style from '../../corpinfo.module.css';


export default function CorporateInfo() {
    const [optionOpen, setOptionOpen] = useState(false);
    const [isDeleteState, setIsDeleteState] = useState(false);
    const toggleOption = async () => {
        setOptionOpen(!optionOpen);
    };

    return (
        <div className={style["main-content"]}>
            <form className={style["input-form"]}>
                <div className={`${style["standard-info"]}`}>
                <h1>基本情報入力</h1>
                    <div className={style.group}>
                        <div className={style["info-text"]}>会社名</div>
                        <input type="text" className={style["campany-name"]} placeholder="会社名"></input>
                    </div>
                    <div className={style.group}>
                        <div className={style["info-text"]}>住所</div>
                        <input type="text" className={style["campany-address"]} placeholder="住所"></input>
                    </div>
                    <button type="submit" className={`${style["button-module"]} ${style["func-submit"]}`}>保存する</button>
                    <button type="cancel" className={style["button-module"]}>キャンセル</button>
                </div>

                <div className={`${style["job-info"]}`}>
                {
                    isDeleteState ? (
                        <div></div>
                    ) : (
                        <>
                        <h1>仕事情報入力</h1><div className={style.group}>
                        <div className={style["info-text"]}>仕事名</div>
                            <input type="text" className={style["job-name"]} placeholder="仕事名"></input>
                            <div className={`${style["option-icon"]} ${optionOpen ? style.active : ""}`} onClick={toggleOption}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className={`${style["option"]} ${optionOpen ? style.active : ""}`} id="option">
                                <button type='submit' className={style["option-item"]}>編集する</button>
                                {!isDeleteState && (<button type='submit' className={style["option-item"]} onClick={() => { setIsDeleteState(true); } }>削除する</button>)}
                            </div>
                        </div>
                        <div className={style.group}>
                            <div className={style["info-text"]}>雇用形態</div>
                                <input type="text" className={`${style["mg-right-5"]} ${style["employee-style"]}`} placeholder="正社員/バイト"></input>
                                <input type="text" className={`${style["mg-right-5"]} ${style["money-style"]}`} placeholder="月給/時給"></input>
                            </div>
                            <div className={style.group}>
                                <div className={style["info-text"]}>仕事内容</div>
                                <textarea className={style["input-text-area"]} rows={'5'} cols={'33'} placeholder='仕事内容(詳細)'></textarea>
                            </div>
                            <div className={style.group}>
                                <div className={style["info-text"]}>メディア</div>
                                <input type="file"></input>
                            </div>
                            <div className={style.group}>
                                <div className={style["info-text"]}>タグ</div>
                                <textarea className={`${style["input-text-area"]} ${style["tag-module"]}`} placeholder="タグを挿入(スペースで区切る)" rows={'1'} cols={'40'}></textarea>
                            </div>
                            <button type="submit" className={`${style["button-module"]} ${style["func-submit"]}`}>保存する</button>
                            <button type="cancel" className={style["button-module"]}>キャンセル</button>
                        </>
                    )
                }
                </div>

                <div className={style.group}>
                    <button type="submit" className={`${style["add-info"]} ${style["func-submit"]} ${style["button-module"]}`}>
                        <div className={style["info-circle"]}>
                            <div className={style["info-cross"]}>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        求人を追加する
                    </button>
                </div>
            </form>
        </div>
    );
}