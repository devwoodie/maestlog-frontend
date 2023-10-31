import styles from "@/styles/Main.module.css";
import Navigate from "@/components/home/Navigate";
import Link from "next/link";
import {PiMusicNotesFill} from "react-icons/pi";
import {GoCommentDiscussion} from "react-icons/go";
import {postListDummy} from "@/constants/dummy";
import {PostType} from "@/types/homeType";

export default function Home(props: any) {

    return (
        <div className={styles.Home}>
            <Navigate />
            <div className={styles.home_wrap}>
                <main>
                    <div className={styles.post_wrap}>
                        {postListDummy.map((item: PostType) => (
                            <div className={styles.post_cont} key={item.post_nm}>
                                <Link href={`/@${item.nickname}/${item.post_nm}`}>
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
                                </Link>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
