"use client"
import {Viewer} from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

interface Content{
    content: string
}

export default function PostViewer({content}: Content){
    return(
        <Viewer
            initialValue={content}
        />
    )
}
