import Navigate from "@/components/home/Navigate";
import styles from "@/styles/Main.module.css";
import Post from "@/components/home/Post";

export default function Recent(props: any){

    return(
        <div>
            <Navigate />
            <div className={styles.home_wrap}>
                <main>
                    <Post />
                </main>
            </div>
        </div>
    )
}
