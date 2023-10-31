"use client";

import styles from "@/styles/Modal.module.css";
import {useState} from "react";
import {MdOutlineClose} from "react-icons/md";

interface Props{
    isOpen: boolean,
    setIsOpen: any
}

export default function LoginModal({isOpen, setIsOpen}: Props){

    const [isSignup, setIsSignup] = useState<boolean>(false);

    const handleSignup = () => {
        if(isSignup){
            setIsSignup(false);
        }else{
            setIsSignup(true);
        }
    }

    return isOpen && (
        <div className={styles.Modal}>
            <div className={`${styles.modal_inner} ${styles.login_inner}`}>
                <span className={styles.cls_btn} onClick={() => setIsOpen(false)}><MdOutlineClose size={25} /></span>
                <div className={styles.login_left}>
                    <h4>{!isSignup ? "로그인" : "회원가입"}</h4>
                    <ul className={styles.login_wrap}>
                        <li>
                            <h5>이메일로 {!isSignup ? "로그인" : "회원가입"}</h5>
                            <div className={styles.login_input_wrap}>
                                <input
                                    className={styles.login_input}
                                    type="text"
                                    placeholder={"이메일을 입력하세요."}
                                />
                                <button type="button" className={styles.login_btn}>{!isSignup ? "로그인" : "회원가입"}</button>
                            </div>
                        </li>
                        <li>
                            <h5>구글 계정으로 {!isSignup ? "로그인" : "회원가입"}</h5>
                            <button type="button" className={styles.google_btn}>
                                <img src={"/images/google_login_btn.svg"} alt={"google-btn"} />
                            </button>
                        </li>
                    </ul>
                    <span onClick={handleSignup} className={styles.signup_text}>{!isSignup ? "아직 회원이 아니신가요?" : "계정이 있으신가요?"}</span>
                </div>
                <div className={styles.login_right}>
                    <span>Welcome to<br/><b>Maestlog</b></span>
                </div>
            </div>
        </div>
    )
}
