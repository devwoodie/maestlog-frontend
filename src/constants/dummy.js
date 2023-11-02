export const postListDummy = [
    {
        post_nm: 1,
        cover_photo: "/images/dummy/img8.png",
        post_title: "테스트 제목입니다. 제목이 길어지면 어떻게 될까요?",
        explanation: "지난 과거를 돌아보며 내가 공부하면서 좋았던 방법들과 최악의 방법들을 공유하였습니다. 이 글이 당신의 개발 인생 앞날에 좋은 영향력을 끼쳤으면 좋겠습니다. 😃",
        upload_date: "2023년 10월 3일",
        nickname: "dbehddn",
        profile_photo: "/images/dummy/img2.png",
        like_nm: "32",
        reply_nm: "2",
    },
    {
        post_nm: 2,
        cover_photo: "/images/dummy/img2.png",
        post_title: "혼자서 개발하는 사이트는 어떻게 만들어야 할까? 소프트콘 뷰어쉽 제작기 (2)",
        explanation: "소프트콘 뷰어쉽은 아프리카, 트위치에서 방송중인 크리에이터들의 정보를 실시간으로 수집하여 해당 크리에이터의 데이터 및 순위를 보여주는 뷰어쉽 어플리케이션입니다.",
        upload_date: "2023년 9월 29일",
        nickname: "qkrdlsln",
        profile_photo: "/images/dummy/img2.png",
        like_nm: "2",
        reply_nm: "12",
    },
    {
        post_nm: 3,
        cover_photo: "/images/dummy/img4.png",
        post_title: "테스트 제목입니다. 제목이 길어지면 어떻게 될까요?",
        explanation: "이 글이 당신의 개발 인생 앞날에 좋은 영향력을 끼쳤으면 좋겠습니다.",
        upload_date: "2023년 8월 2일",
        nickname: "dlwotmd",
        profile_photo: "/images/dummy/img2.png",
        like_nm: "70",
        reply_nm: "12",
    },
    {
        post_nm: 4,
        cover_photo: "/images/dummy/img3.png",
        post_title: "테스트 제목입니다. 제목이 길어지면 어떻게 될까요?",
        explanation: "이 글이 당신의 개발 인생 앞날에 좋은 영향력을 끼쳤으면 좋겠습니다.",
        upload_date: "2023년 5월 12일",
        nickname: "woodie",
        profile_photo: "/images/dummy/img2.png",
        like_nm: "100",
        reply_nm: "50",
    },
    {
        post_nm: 5,
        cover_photo: "/images/dummy/img5.png",
        post_title: "딥링크 실전에서 잘 사용하는 방법",
        explanation: "모바일 웹 서비스에서 다른 앱을 열어야 하는 경우가 있습니다. 이번 포스트에서는 딥링크에 대해서 알아보고 커스텀 URL 스킴을 중심으로 특정 외부 앱을 실행하는 방법을 알아볼게요.",
        upload_date: "2023년 2월 4일",
        nickname: "seung2",
        profile_photo: "/images/dummy/img2.png",
        like_nm: "120",
        reply_nm: "780",
    }
]

export const postDetailDummy = {
    post_nm: 1,
    cover_photo: "/images/dummy/img8.png",
    post_title: "IntelliJ 유용한 설정과 플러그인",
    upload_date: "2023년 2월 4일",
    nickname: "seung2",
    profile_photo: "/images/dummy/img2.png",
    hash_tag: ["javascript", "hashtag", "html5", "next.js", "react",],
    category: "",
    post_content: "<div contenteditable=\"false\"></div><h2>📝 SPA(Single Page Application)</h2><p>SPA란 <strong>하나의 페이지로 이루어진 애플리케이션</strong>이라는 의미입니다.</p><p>왜 싱글 페이지 애플리케이션이라는 개념이 생기기 전에 사용되던 <code data-backticks=\"1\">멀티 페이지 애플리케이션</code>을 먼저 알아보도록 하겠습니다.</p><p><br></p><p><img src=\"https://velog.velcdn.com/images/woodie/post/1b186b74-ca5f-4813-a788-0306dfb2e10e/image.png\" contenteditable=\"false\"><br></p><p><br></p><p>멀티 페이지 애플리케이션에서는 사용자가 다른 페이지로 이동할 때마다 새로운 html을 받아오고, 페이지를 로딩할 때마다 서버에서 CSS, JS, image 파일 등의 리소스를 전달받아 브라우저 화면에</p><p>보여 주었습니다. 각 페이지마다 다른 html 파일을 만들어서 제공을 하거나, 데이터에 따라 유동적인 html을 생성해 주는 템플릿 엔진을 사용하기도 했습니다.</p><p><br></p><p>사용자 인터랙션이 별로 없는 정적인 페이지들은 기존의 방식이 적합하지만, 사용자 인터랙션이 많고 다양한 정보를 제공하는 모던 웹 애플리케이션은 이 방식이 적합하지 않습니다. 새로운 페이지를 보여줘야 할 때마다 서버 측에서 모든 준비를 한다면 그만큼 <strong>서버의 자원을 사용</strong>하는 것이고, <strong>트래픽도 더 많이 나올 수 있기 때문</strong>입니다.</p><p><br></p><p>그래서 리액트 같은 라이브러리를 사용해서 <code data-backticks=\"1\">뷰 렌더링</code>을 사용자의 <strong>브라우저가 담당</strong>하도록 하고, 우선 웹 애플리케이션을 브라우저에 불러와서 실행 시킨 후에 사용자와의 <code data-backticks=\"1\">인터렉션이 발생</code>하면 필요한 부분만 <strong>자바스크립트를 사용하여 업데이트</strong>하는 방식을 사용하게 됐습니다.</p><p><br></p><p><img src=\"https://velog.velcdn.com/images/woodie/post/e6a0c529-0852-4cda-a018-ca6fc97e0ae7/image.png\" contenteditable=\"false\"><br></p><p><br></p><p>이렇게 <strong>html은 한번만 받아와서 웹 애플리케이션을 실행시킨 후, 이후에는 필요한 데이터만 받아와서 화면에 업데이트하는 것</strong>이 <code data-backticks=\"1\">SPA(Single Page Application)</code>입니다.</p><p><br></p><p>SPA(Single Page Application)는 기술적으로는 한 페이지만 존재하지만, 사용자가 경험하기에는 여러 페이지가 존재하는 것처럼 느낄 수 있습니다.</p><p><br></p><p>리액트 라우터 같은 <code data-backticks=\"1\">라우팅 시스템</code>은 사용자의 브라우저 주소창의 경로에 따라 알맞은 페이지를 보여주는데, 이후 링크를 눌러서 다른 페이지로 이동할 때 서버에 다른 페이지의 html을 새로 요청하는 것이 아니라, <strong>브라우저의 History API를 사용</strong>하여 브라우저의 <strong>주소창의 값만 변경</strong>하고 기존에 페이지에 띄웠던 웹 애플리케이션을 <strong>그대로 유지</strong>하면서 라우팅 설정에 따라 또 다른 페이지를 보여주게 됩니다.</p><div contenteditable=\"false\"><hr></div>"
}

export const userHomeDummy = {
    blog_title: "dlwotmd",
    blog_explanation: "저의 개발 블로그입니다.",
    profile_photo: "/images/dummy/img4.png",
    nickname: "seung2",
    category: ["JavaScript", "React", "Spring", "MongoDB", "TypeScript", "mySql", "kotlin", "Swift",],
}
