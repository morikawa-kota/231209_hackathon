'use client'
import 'next/head';
import { useState } from 'react';
import style from '../../corpinfo.module.css';


export default function CorporateInfo() {
    const [optionOpen, setOptionOpen] = useState(false);
    const [isDeleteState, setIsDeleteState] = useState(false);
    const [campanyName, setCampanyName] = useState('');
    const [campanyAddress, setCampanyAddress] = useState('');
    const [campanyDraftName, setCampanyDraftName] = useState('');
    const [campanyDraftAddress, setCampanyDraftAddress] = useState('');
    const [jobName, setJobName] = useState('');
    const [employeeStyle, setEmployeeStyle] = useState('');
    const [moneyStyle, setMoneyStyle] = useState('');
    const [jobTask, setJobTask] = useState('');
    const [tags, setTags] = useState('');
    const [jobDraftName, setJobDraftName] = useState('');
    const [employeeDraftStyle, setEmployeeDraftStyle] = useState('');
    const [moneyDraftStyle, setMoneyDraftStyle] = useState('');
    const [jobDraftTask, setJobDraftTask] = useState('');
    const [draftTags, setDraftTags] = useState('');

    const toggleOption = async () => {
        setOptionOpen(!optionOpen);
    };

    const saveCampanyInfo = () => {
        console.log(campanyName);
        console.log(campanyAddress);

        setCampanyName(campanyDraftName);
        setCampanyAddress(campanyDraftAddress);

        const res = fetch("/api/campany/", {
            method: "PUT",
            body: JSON.stringify(
              {
                name: campanyDraftName,
                adress: campanyDraftAddress,
              }
            ),
          }).catch((error) => {
            console.error(error);
        });

        console.log(res);
    };

    const cancelCampanyInfo = () => {
        setCampanyDraftName(campanyName);
        setCampanyDraftAddress(campanyAddress);
    }

    const saveWorkInfo = () => {
        setJobName(jobDraftName);
        setEmployeeStyle(employeeDraftStyle);
        setMoneyStyle(moneyDraftStyle);
        setJobTask(jobDraftTask);
        setTags(draftTags);

        fetch("/api/campany/", {
            method: "PUT",
            body: JSON.stringify(
              {
                jobName: jobDraftName,
                employeeStyle: employeeDraftStyle,
                moneyStyle: moneyDraftStyle,
                jobTask: jobDraftTask,
                tags: draftTags
              }
            )
          }).catch((error) => {
            console.error(error);
          });
    }

    const cancelWorkInfo = () => {
        setJobDraftName(jobName);
        setEmployeeDraftStyle(employeeStyle);
        setMoneyDraftStyle(moneyStyle);
        setJobDraftTask(jobTask);
        setDraftTags(tags);
    }

    return (
        <div className={style["main-content"]}>
            <div className={style["input-form"]}>
                <div className={`${style["standard-info"]}`}>
                <h1>基本情報入力</h1>
                    <div className={style.group}>
                        <div className={style["info-text"]}>会社名</div>
                        <input 
                            type="text" 
                            className={style["campany-name"]} 
                            placeholder="会社名"
                            value={campanyDraftName}
                            onChange={(event) => {
                                setCampanyDraftName(event.target.value)
                            }}
                        ></input>
                    </div>
                    <div className={style.group}>
                        <div className={style["info-text"]}>住所</div>
                        <input 
                            type="text" 
                            className={style["campany-address"]} 
                            placeholder="住所"
                            value={campanyDraftAddress}
                            onChange={(event) => {
                                setCampanyDraftAddress(event.target.value)
                            }}
                        ></input>
                    </div>
                    <button 
                        type="" 
                        className={`${style["button-module"]} ${style["func-submit"]}`}
                        onClick={() => saveCampanyInfo()}
                    >保存する</button>
                    <button 
                        type="cancel" 
                        className={style["button-module"]}
                        onClick={() => cancelCampanyInfo()}
                    >キャンセル</button>
                </div>

                <div className={`${style["job-info"]}`}>
                {
                    isDeleteState ? (
                        <div></div>
                    ) : (
                        <>
                        <div className={style.jobInfoHeader}>
                            <h1>仕事情報入力</h1>
                            <div className={style.menu}>
                                <div className={`${style["option-icon"]} ${optionOpen ? style.active : ""}`} onClick={toggleOption}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>                    
                                <div className={`${style["option"]} ${optionOpen ? style.active : ""}`} id="option">
                                    <button className={style["option-item"]}>編集する</button>
                                    {/* {!isDeleteState && (<button type='submit' className={style["option-item"]} onClick={() => { setIsDeleteState(true); } }>削除する</button>)} */}
                                    <button className={style["option-item"]}>削除する</button>
                                </div>
                            </div>
                        </div>
                        <div className={style.group}>
                        <div className={style["info-text"]}>仕事名</div>
                            <input 
                                type="text" 
                                className={style["job-name"]} 
                                placeholder="仕事名"
                                value={jobDraftName}
                                onChange={(event) => 
                                    setJobDraftName(event.target.value)
                                }
                            ></input>
                        </div>
                        <div className={style.group}>
                            <div className={style["info-text"]}>雇用形態</div>
                                <input 
                                    type="text" 
                                    className={`${style["mg-right-5"]} ${style["employee-style"]}`} 
                                    placeholder="正社員/バイト"
                                    value={employeeDraftStyle}
                                    onChange={(event) => {
                                        setEmployeeDraftStyle(event.target.value)
                                    }}
                                ></input>
                                <input 
                                    type="text" 
                                    className={`${style["mg-right-5"]} ${style["money-style"]}`} 
                                    placeholder="月給/時給"
                                    value={moneyDraftStyle}
                                    onChange={(event) => {
                                        setMoneyDraftStyle(event.target.value)
                                    }}
                                ></input>
                            </div>
                            <div className={style.group}>
                                <div className={style["info-text"]}>仕事内容</div>
                                <textarea 
                                    className={style["input-text-area"]} 
                                    rows={'5'} 
                                    cols={'33'} 
                                    placeholder='仕事内容(詳細)'
                                    value={jobDraftTask}
                                    onChange={(event) => {
                                        setJobDraftTask(event.target.value)
                                    }}
                                ></textarea>
                            </div>
                            <div className={style.group}>
                                <div className={style["info-text"]}>メディア</div>
                                <input type="file" accept='image/*'></input>
                            </div>
                            <div className={style.group}>
                                <div className={style["info-text"]}>タグ</div>
                                <textarea 
                                    className={`${style["input-text-area"]} ${style["tag-module"]}`} 
                                    placeholder="タグを挿入(スペースで区切る)" 
                                    rows={'1'} 
                                    cols={'40'}
                                    value={draftTags}
                                    onChange={(event) => {
                                        setDraftTags(event.target.value)
                                    }}
                                ></textarea>
                            </div>
                            <button 
                                type=""
                                className={`${style["button-module"]} ${style["func-submit"]}`}
                                onClick={() => saveWorkInfo()}
                            >保存する</button>
                            <button 
                                type=""
                                className={style["button-module"]}
                                onClick={() => cancelWorkInfo()}
                            >キャンセル</button>
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
            </div>
        </div>
    );
}