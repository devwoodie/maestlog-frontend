import styles from "@/styles/Main.module.css";
import Navigate from "@/components/home/Navigate";
import Post from "@/components/home/Post";

export default function Home(props: any) {

    return (
        <div className={styles.Home}>
            <Navigate />
            <div className={styles.home_wrap}>
                <main>
                    <Post />
                </main>
            </div>
        </div>
    )
}
