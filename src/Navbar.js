export default function Navbar(){

    return(
        <>
        <div class="topbar">
        <a href="http://instagram.com/" target="_blank">
            <div class="logos-box">
                <ion-icon class="bttn icon-logo" name="logo-instagram"></ion-icon>
                <img src="imgs\logo.png" class="img-logo"/>
            </div>
        </a>
        <div class="searchbar">
            <p class="pesquisa">Pesquisar</p>
        </div>
        <div class="buttons">
            <ion-icon class="bttn" name="paper-plane-outline"></ion-icon>
            <ion-icon class="bttn" name="compass-outline"></ion-icon>
            <ion-icon class="bttn" name="heart-outline"></ion-icon>
            <ion-icon class="bttn" name="person-outline"></ion-icon>
        </div>
    </div>

    
    <div class="topbar-mobile">

        <a href="http://instagram.com/" target="_blank">
            <ion-icon class="bttn" name="logo-instagram"></ion-icon>
        </a>
        <a href="http://instagram.com/" target="_blank">
            <img src="imgs\logo.png"/>
        </a>
        <a href="http://instagram.com/" target="_blank">
            <ion-icon class="bttn" name="paper-plane-outline"></ion-icon>
        </a>
    </div>
    </>
    )

}