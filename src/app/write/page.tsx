import dynamic from "next/dynamic";
import styles from "@/styles/Write.module.css";

const PostEditor = dynamic(
    () => import("@/components/editor/Editor"),
    {ssr: false}
)

export default function Write(){

    return (
        <div className={styles.Write}>
            <div className={styles.title_wrap}>
                <input
                    type="text"
                    placeholder="제목을 입력하세요."
                    id="title"
                />
            </div>
            <div className={styles.hashtag_wrap}>
                <input
                    type="text"
                    placeholder="엔터를 입력하여 태그를 등록할 수 있습니다. (등록된 태그 클릭 시 삭제됩니다.)"
                    id="hashtag"
                />
            </div>
            <PostEditor />
        </div>
    )
}
