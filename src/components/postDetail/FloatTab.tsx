"use client";

import styles from "@/styles/PostDetail.module.css";
import {MdKeyboardArrowUp} from "react-icons/md";
import {PiMusicNotesFill} from "react-icons/pi";
import {SlPaperClip} from "react-icons/sl";
import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";

export default function FloatTab(){

    const [isLike, setIsLike] = useState<boolean>(false);
    const [likeNum, setLikeNum] = useState<number>(12);

    const handleMoveTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handleLike = () => {
        if(isLike){
            setIsLike(false);
            setLikeNum(likeNum - 1);
        }else{
            setIsLike(true);
            setLikeNum(likeNum + 1);
        }
    }

    const copyURL = () => {
        let currentUrl = window.document.location.href;
        let t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = currentUrl;
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);

        toast.success("현재 주소가 복사되었습니다.");
    };

    return(
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <ul className={styles.float_wrap}>
                <li onClick={handleMoveTop}>
                    <i><MdKeyboardArrowUp size={40} /></i>
                </li>
                <li className={isLike ? styles.like : ""} onClick={handleLike}>
                    <i><PiMusicNotesFill size={30} /></i>
                </li>
                <span>{likeNum}</span>
                <li onClick={copyURL}>
                    <i><SlPaperClip size={25} /></i>
                </li>
            </ul>
        </>
    )
}
