"use client";

import styles from "@/styles/Main.module.css";
import {postListDummy} from "@/constants/dummy";
import {PostType} from "@/types/homeType";
import {PiMusicNotesFill} from "react-icons/pi";
import {GoCommentDiscussion} from "react-icons/go";
import {useRouter} from "next/navigation";
import LocalStorage from "@/utils/localStorage";

export default function Post(){

    const router = useRouter();

    const handlePostClick = (nickname: string, post_nm: number) => {
        router.push(`/@${nickname}/${post_nm}`);
        LocalStorage.setItem("mlNickname", nickname);
    }

    return(
        <div className={styles.post_wrap}>
            {postListDummy.map((item: PostType) => (
                <div className={styles.post_cont} key={item.post_nm}>
                    <div className={styles.post_click} onClick={() => handlePostClick(item.nickname, item.post_nm)}>
                        <div className={styles.post_img}>
                            <img src={`${item.cover_photo}`} alt="post-image" />
                        </div>
                        <div className={styles.post_inner}>
                            <h4>{item.post_title}</h4>
                            <p>{item.explanation}</p>
                            <div className={styles.post_small}>
                                <span className={styles.post_date}>{item.upload_date}</span>
                                <div className={styles.post_comment}>
                                    <span><PiMusicNotesFill size={18} /><b>{item.like_nm}</b></span>&nbsp; | &nbsp;<span><GoCommentDiscussion size={18} /><b>{item.reply_nm}</b></span>
                                </div>
                            </div>
                            <div className={styles.post_writer_wrap}>
                                <span><img src={`${item.profile_photo}`} alt="writer-image" /></span>
                                <p>by <b>{item.nickname}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
