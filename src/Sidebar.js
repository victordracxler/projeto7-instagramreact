import React from "react";

function User() {

  const [name, setName] = React.useState('Victor Dracxler')
  const [picture, setPicture] = React.useState("imgs/profiles/victordracxler.jpg")


  return (
    <div class="profile">
      <img onClick={() => setPicture(prompt('Insira a url da imagem de perfil:'))} src={picture} alt="" />
      <div class="profile-name">
        <h1>
          <strong>victordracxler</strong>
        </h1>
        <div class="username-change"><h2>{name}</h2><ion-icon onClick={() => setName(prompt('Editar nome de usuário'))} name="pencil-outline"></ion-icon></div>
      </div>
    </div>
  );
}

function Suggestion(props) {
  return (
    <div class="recommended-profile">
      <img src={props.image} alt={props.name} />
      <div>
        <h1>{props.name}</h1>
        <h3>{(props.follower)? "Segue você": "Novo no Instagram"}</h3>
      </div>
      <p>Seguir</p>
    </div>
  );
}

function Suggestions() {
  const recommendations = [
    {
      name: "bad.vibes.memes",
      image: "imgs/profiles/badvibesmemes 1.png",
      follower: true,
    },
    {
      name: "chibirdart",
      image: "imgs/profiles/chibirdart 1.png",
      follower: true,
    },
    {
      name: "razoesparaacreditar",
      image: "imgs/profiles/razoesparaacreditar 1.png",
      follower: false,
    },
    {
      name: "adorable_animals",
      image: "imgs/profiles/adorableanimals 1.png",
      follower: true,
    },
    {
      name: "smallcutecats",
      image: "imgs/profiles/smallcutecats 1.png",
      follower: false,
    },
  ];

  return (
    <>
      <div class="suggestions">
        <h4>Sugestões para você</h4>
        <h5>Ver tudo</h5>
      </div>
      <div class="recommended">
        {recommendations.map(Suggestion)}
      </div>
    </>
  );
}

export default function Sidebar() {
  return (
    <div class="sidebar">
      <User />
      <Suggestions />
      <div class="sidebar-text">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}
