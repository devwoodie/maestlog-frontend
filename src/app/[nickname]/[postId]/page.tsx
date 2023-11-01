import styles from "@/styles/PostDetail.module.css";
import {postDetailDummy} from "@/constants/dummy";
import dynamic from "next/dynamic";
const PostViewer = dynamic(
    () => import("@/components/postDetail/PostViewer"),
    {ssr: false}
)

export default function Post(props: any){
    console.log(props.params)

    return(
        <div className={styles.post_detail_wrap}>
            <div className={styles.PostDetail}>
                <h2>{postDetailDummy?.post_title}</h2>
                <div className={styles.writer_date}>
                    <div className={styles.post_writer_wrap}>
                        <span><img src={`${postDetailDummy?.profile_photo}`} alt="writer-image" /></span>
                        <p>by <b>{postDetailDummy?.nickname}</b></p>
                    </div>
                    <span className={styles.post_date}>{postDetailDummy?.upload_date}</span>
                </div>
                <div className={styles.hash_wrap}>
                    {postDetailDummy?.hash_tag.map((item, key) => (
                        <span key={key}>{item}</span>
                    ))}
                </div>
                <div className={styles.content}>
                    <PostViewer
                        content={postDetailDummy?.post_content}
                    />
                </div>
            </div>

            <ul className={styles.float_wrap}>
                <li>
                    <i></i>
                    <span>맨 위로</span>
                </li>
                <li>
                    <i></i>
                    <span>좋아요</span>
                </li>
                <li>
                    <i></i>
                    <span>URL 복사</span>
                </li>
            </ul>
        </div>
    )
}
