"use client";

import styles from "@/styles/Modal.module.css";
import {useEffect, useState} from "react";
import {MdOutlineClose} from "react-icons/md";
import toast, {Toaster} from "react-hot-toast";
import {BsSend} from "react-icons/bs";

interface Props{
    isOpen: boolean,
    setIsOpen: any
}

export default function LoginModal({isOpen, setIsOpen}: Props){

    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const [isSignup, setIsSignup] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    useEffect(() => {
        if(!isOpen){
            setEmail("");
            setIsSubmit(false);
        }
    }, [isOpen]);

    const handleSignup = () => {
        if(isSignup){
            setIsSignup(false);
        }else{
            setIsSignup(true);
        }
    }

    const handleEmail = (event: any) => {
        if(event.target.id === "email"){
            setEmail(event.target.value);
        }
    }
    const handleEmailSubmit = () => {
        if(!emailRegEx.test(email) || email === ""){
            toast.error("이메일 형식이 올바르지 않습니다.");
        }else{
            setIsSubmit(true);
        }
    }

    return isOpen && (
        <div className={styles.Modal}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
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
                                    onChange={handleEmail}
                                    value={email}
                                    id={"email"}
                                />
                                <button type="button" onClick={handleEmailSubmit} className={styles.login_btn}>{!isSignup ? "로그인" : "회원가입"}</button>
                                {isSubmit &&
                                    <div className={styles.email_submit}>
                                        <span><em><BsSend /></em> {!isSignup ? "로그인" : "회원가입"} 링크가 이메일로 전송되었습니다.</span>
                                    </div>
                                }
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
