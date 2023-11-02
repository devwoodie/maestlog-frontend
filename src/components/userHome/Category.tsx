import styles from "@/styles/UserHome.module.css";
import Link from "next/link";

export default function Category({list}: [] | any){
    return(
        <div className={styles.category_wrap}>
            <span>카테고리</span>
            <ul>
                {list?.map((item: string, key: number) => (
                    <li key={key}>
                        <Link href={""}>
                            {item} <i>(2)</i>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
