'use client'

import styles from "@/styles/Main.module.css";
import {MdVolumeDownAlt, MdUpdate, MdLeaderboard} from "react-icons/md";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navigate(props: any){

    const pathname: string = usePathname();

    return(
        <div className={styles.nav_wrap}>
            <ul className={styles.navigation}>
                <li className={pathname === "/" ? styles.on : ""} >
                    <Link href={"/"}>
                        <MdLeaderboard size={25} /><span>인기글</span>
                    </Link>
                </li>
                <li className={pathname === "/recent" ? styles.on : ""} >
                    <Link href={"/recent"}>
                        <MdUpdate size={25} /><span>최신글</span>
                    </Link>
                </li>
            </ul>
            <Link href="/" className={styles.notice}>
                <MdVolumeDownAlt size={20} />
                <span>[공지] 최신 업데이트 소식입니다.</span>
            </Link>
        </div>
    )
}
