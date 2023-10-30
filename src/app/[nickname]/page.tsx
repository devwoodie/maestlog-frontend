
export default function UserHome(props: any){
    const uniqueNickname = props.params.nickname.replace('%40', '')
    console.log(props)
    return(
        <div><b>{uniqueNickname}</b>.log maestlog 안녕하세요</div>
    )
}
