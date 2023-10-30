"use client"

import styles from "@/styles/Header.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {MdLightMode, MdModeNight} from "react-icons/md";
import LocalStorage from "@/utils/localStorage";

export default function Header(){

    const storageTheme = LocalStorage.getItem("mlTheme");
    const [theme, setTheme] = useState<string>("");

    useEffect(() => {
        if(storageTheme === null){
            LocalStorage.setItem("mlTheme", "light");
            setTheme("light");
        }else{
            document.body.setAttribute("data-theme", storageTheme);
            setTheme(storageTheme);
        }
    }, []);

    const handleModeChange = () => {
        if(theme === "light"){
            setTheme("dark");
            LocalStorage.setItem("mlTheme", "dark");
            document.body.setAttribute("data-theme", "dark");
        }else if(theme === "dark"){
            setTheme("light");
            LocalStorage.setItem("mlTheme", "light");
            document.body.setAttribute("data-theme", "light");
        }
    }

    return(
        <div className={styles.header}>
            <h1><Link href={"/"}>Maestlog</Link></h1>
            <div className={styles.right}>
                <button type="button" onClick={handleModeChange} className={styles.mode_btn}>
                    {theme === "light" ? <MdLightMode size={28} /> : <MdModeNight size={28} /> }
                </button>
                <button type="button" className={styles.login_btn}>로그인</button>
            </div>
        </div>
    )
}
