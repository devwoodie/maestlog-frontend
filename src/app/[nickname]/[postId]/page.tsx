import LocalStorage from "@/utils/localStorage";

export default function Post(props: any){
    console.log(props.params)

    return(
        <div>
            Post Detail
            <div>Nickname: {props.params.nickname.replace("%40", "")}.log</div>
            <div>Post Id: {props.params.postId}</div>
        </div>
    )
}
