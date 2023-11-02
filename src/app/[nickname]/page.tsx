import styles from "@/styles/UserHome.module.css";
import Post from "@/components/home/Post";
import {userHomeDummy} from "@/constants/dummy";
import Category from "@/components/userHome/Category";

export default function UserHome(props: any){

    const uniqueNickname = props.params.nickname.replace('%40', '');

    return(
        <div className={styles.UserHome}>
            <div className={styles.user_info_wrap}>
                <span className={styles.user_image}><img src={`${userHomeDummy.profile_photo}`} alt={"user-image"} /></span>
                <div>
                    <h1>{userHomeDummy.blog_title}</h1>
                    <h3>{userHomeDummy.nickname}</h3>
                    <p>{userHomeDummy.blog_explanation}</p>
                </div>
            </div>
            <div className={styles.user_post_wrap}>
                <Post />
            </div>

            <Category
                list={userHomeDummy.category}
            />
        </div>
    )
}
