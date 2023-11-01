"use client"

import styles from "@/styles/Header.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {MdLightMode, MdModeNight} from "react-icons/md";
import LocalStorage from "@/utils/localStorage";
import {usePathname} from "next/navigation";
import LoginModal from "@/components/modal/LoginModal";

export default function Header(){

    const pathname: string = usePathname();
    const storageTheme: string|null = LocalStorage.getItem("mlTheme");
    const storageNickname: string|null = LocalStorage.getItem("mlNickname");
    const [theme, setTheme] = useState<string>("");
    const [logo, setLogo] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // const bodyAllTag = document.querySelector(".body_all");
    console.log(pathname)
    useEffect(() => {
        if(storageTheme === null){
            LocalStorage.setItem("mlTheme", "light");
            setTheme("light");
        }else{
            document.body.setAttribute("data-theme", storageTheme);
            setTheme(storageTheme);
        }
    }, []);

    useEffect(() => {
        if(storageNickname === null){
            setLogo("Maestlog");
        }else{
            setLogo(`${storageNickname}.log`);
        }
    }, [storageNickname]);

    useEffect(() => {
        if(pathname === "/" || pathname === "/recent" || pathname === "/write"){
            LocalStorage.removeItem("mlNickname");
            setLogo("Maestlog");
        }
        if(pathname === "/"){
            document.querySelector(".body_all")?.classList.add("default");
        }else{
            document.querySelector(".body_all")?.classList.remove("default");
        }
    }, [pathname]);

    const handleModalOpen = () => {
        setIsOpen(true);
    }

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

    return pathname !== "/write" && (
        <div className={styles.header}>
            <h1><Link href={logo === "Maestlog" ? "/" : `/@${logo.replace(".log", "")}`}>{logo}</Link></h1>
            <div className={styles.right}>
                <button type="button" onClick={handleModeChange} className={styles.mode_btn}>
                    {theme === "light" ? <MdLightMode size={28} /> : <MdModeNight size={28} /> }
                </button>
                <button type="button" className={styles.login_btn} onClick={handleModalOpen}>로그인</button>
            </div>

            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
