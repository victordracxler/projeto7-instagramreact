import React from "react"

function Post(props){

    const [saved, setSaved] = React.useState(false)

    
    function RenderBookmark(props){
        if (props.boolean === true){            
           return(
             <ion-icon onClick={() => setSaved(false)} class="bttn icon-save" name="bookmark"></ion-icon>
           )
        }else{
            return(
                <ion-icon onClick={() => setSaved(true)} class="bttn icon-save" name="bookmark-outline"></ion-icon>
            )
        }
    }


    return(
        <div class="post">
                    <div class="post-top">
                        <div class="profile-pic"><img src={props.profilePic} alt="profile"/></div>
                        <div class="username">
                            <p class="p-user">{props.username}</p>
                        </div>
                        <div class="post-options">
                            <ion-icon class="bttn" name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div class="content"><img src={props.content} alt="media"/></div>
                    <div class="post-bottom">
                        <div class="controls">
                            <div class="icons-left">
                                <ion-icon class="bttn icon-heart" name="heart-outline"></ion-icon>
                                <ion-icon class="bttn icon" name="chatbubble-outline"></ion-icon>
                                <ion-icon class="bttn icon" name="paper-plane-outline"></ion-icon>
                            </div>
                            <div class="icons-right">
                                <RenderBookmark boolean={saved}/>
                            </div>
                        </div>
                        <div class="likes">
                            <img src={props.likedByPic} alt="user that liked your post"/>
                            <p>Curtido por <strong>{props.likedByName}</strong> e <strong>outras {props.likes.toLocaleString('pt-BR')} pessoas</strong>
                            </p>
                        </div>
                    </div>
                </div>
    )

}

export default function Posts(){
    const postsData =[
        {
            username: "meowed",
            profilePic: "imgs/profiles/meowed 4.png",
            content: "imgs/feed/gato-telefone 1.png",
            likedByName: "adorable_animals",
            likedByPic: "imgs/profiles/adorableanimals 2.png",
            likes: 99159,
            liked: false,
            saved: false
        },
        {
            username: "barked",
            profilePic: "imgs/profiles/barked 2.png",
            content: "imgs/feed/dog 1.png",
            likedByName: "meltedvideos",
            likedByPic: "imgs/profiles/Melted.jpg",
            likes: 69329,
            liked: false,
            saved: false
        },
        {
            username: "meltedvideos",
            profilePic: "imgs/profiles/Melted.jpg",
            content: "imgs/feed/meltedProblem.jpg",
            likedByName: "respondeai",
            likedByPic: "imgs/profiles/respondeai 2.png",
            likes: 103420,
            liked: false,
            saved: false
        },
        {
            username: "meltedvideos",
            profilePic: "imgs/profiles/Melted.jpg",
            content: "imgs/feed/meltedSims.jpg",
            likedByName: "bad.vibes.memes",
            likedByPic: "imgs/profiles/badvibesmemes 1.png",
            likes: 69321,
            liked: false,
            saved: false
        },
        
    ]

    return(
        <div class="feed">
        {postsData.map(Post)}
        </div>
    )
}