function User() {}

function Suggestion() {}

function Suggestions() {}

export default function Sidebar() {
  return (
    <div class="sidebar">
      <div class="profile">
        <img src="imgs\profiles\victordracxler.jpg" />
        <div class="profile-name">
          <h1>
            <strong>victordracxler</strong>
          </h1>
          <h2>Victor Dracxler</h2>
        </div>
      </div>
      <div class="suggestions">
        <h4>Sugestões para você</h4>
        <h5>Ver tudo</h5>
      </div>
      <div class="recommended">
        <div class="recommended-profile">
          <img src="imgs\profiles\badvibesmemes 1.png" />
          <div>
            <h1>bad.vibes.memes</h1>
            <h3>Segue você</h3>
          </div>
          <p>Seguir</p>
        </div>
        <div class="recommended-profile">
          <img src="imgs\profiles\chibirdart 1.png" />
          <div>
            <h1>chibirdart</h1>
            <h3>Segue você</h3>
          </div>
          <p>Seguir</p>
        </div>
        <div class="recommended-profile">
          <img src="imgs\profiles\razoesparaacreditar 1.png" />
          <div>
            <h1>razoesparaacreditar</h1>
            <h3>Novo no Instagram</h3>
          </div>
          <p>Seguir</p>
        </div>
        <div class="recommended-profile">
          <img src="imgs\profiles\adorableanimals 1.png" />
          <div>
            <h1>adorable_animals</h1>
            <h3>Segue você</h3>
          </div>
          <p>Seguir</p>
        </div>
        <div class="recommended-profile">
          <img src="imgs\profiles\smallcutecats 1.png" />
          <div>
            <h1>smallcutecats</h1>
            <h3>Segue você</h3>
          </div>
          <p>Seguir</p>
        </div>
      </div>
      <div class="sidebar-text">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  )
}
