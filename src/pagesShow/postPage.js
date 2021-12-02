import { logOut, recet } from "../lib/index.js";
//import { menuProfile } from "./profile.js";


export const post = () => {
  window.location.hash = '/postPage';
  const containerPostScreen = document.createElement('div');
  containerPostScreen.className = 'section-post';
  const pagePost = `
    <header class = "header-post">
      <figure>
       <img class="header-image" src="imagenes/imagen3.jpeg"/>
      </figure>
    </header>
    <nav class="container-second">
        <div class="container_left">
        <h1 class="logo-name" id="logpage">Easy &nbsp &nbsp eggie</h1>
        <img class="logo-image" src="imagenes/logo4.png"/>
        </div>
    </nav>
    <main>
    <section  class= "contentBox">
    <section class= "link"></section>
  
      <section id="contenedor-perfil2" class="contenedor-perfil2">
          <input type="search" class="textarea" name="textarea" id="post" 
            placeholder="¡Realiza una publicación!"/>
          <button class="botones-post" type="button" id="publicar">Publicar</button>
          <section class="toPost" id="lookPage"></section>
      </section>
  
      <div class="iconshome">
          <a span class="icon icon-home3" href="#postPage">Muro</a>
          <a span class="icon icon-user"href="">Perfil</a>
          <button class="returnBtn" type="submit">
          <a span class="icon icon-enter"href="#/firtpage">Cerrar sesion</a></button> 
      </div>
    </section>
    </main>
       </div> `;


  containerPostScreen.innerHTML = pagePost

  //cerrar seccion
  containerPostScreen.querySelector('.returnBtn').addEventListener('click', () => {
    logOut();

  });
  //publicar 
  containerPostScreen.querySelector('#publicar').addEventListener('click', () => {
    const postData = document.querySelector('#post').value;
    recet(postData);
    document.querySelector('#post').value = "";
  });

  return containerPostScreen;
}


