"use client"

import { Editor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import { useRef } from 'react'
import LocalStorage from "@/utils/localStorage";

export default function PostEditor(){

    const storageTheme: string|null = LocalStorage.getItem("mlTheme");
    const editorRef = useRef(null);
    const toolbarItems = [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr'],
        ['ul', 'ol', 'task'],
        ['table', 'link'], ['image'], ['code']
    ]

    const handleClick = () => {
        // if (editorRef.current !== null) {
        //     console.log(editorRef?.current?.getInstance().getHTML());
        // }
    }

    return(
        <>
            <Editor
                ref={editorRef}
                initialValue={"내용을 입력하세요."}
                previewStyle="vertical"
                initialEditType="markdown"
                useCommandShortcut={false}
                height="80vh"
                toolbarItems={toolbarItems}
                theme={storageTheme === "light" ? "light" : "dark"}
                hideModeSwitch={true}
                language="ko-KR"
            />
            <button type="button" onClick={handleClick}>등록</button>
        </>
    )
}
