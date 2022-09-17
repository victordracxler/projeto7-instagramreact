function Story(props){
    return (
        <div class="story">
                    <img class="sbg" src="imgs/stories_background.jpg" alt="Story Background"/>
                    <p class="s-user">{props.username}</p>
                    <img class="s-pfl" src={props.image} alt={props.username} />
                </div>
    )

}

export default function Stories(){
    const storiesList = [
        {
            username:'9gag',
            image: 'imgs/stories/9gag 1.png'
        },
        {
            username:'meowed',
            image: 'imgs/stories/meowed 1.png'
        },
        {
            username:'barked',
            image: 'imgs/stories/barked 1.png'
        },
        {
            username:'nathanwpyle...',
            image: 'imgs/stories/nathanwpylestrangeplanet 1.png'
        },
        {
            username:'wawawiwac...',
            image: 'imgs/stories/wawawiwacomicsa 1.png'
        },
        {
            username:'respondeai',
            image: 'imgs/stories/respondeai 1.png'
        },
        {
            username:'filomoderna',
            image: 'imgs/stories/filomoderna 1.png'
        },
        {
            username:'memeriagourmet',
            image: 'imgs/stories/memeriagourmet 1.png'
        }
    ]


    return(
        <div class="stories-bar">
                <div class="s-arrow">
                    <ion-icon class="arrow bttn" name="chevron-forward-circle"></ion-icon>
                </div>
                {storiesList.map(Story)}
                
            </div>
    )
}