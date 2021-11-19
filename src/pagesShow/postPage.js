import{logOut} from "../lib/index.js";

export const post = () => {
    window.location.hash = '/postPage';
    const containerPostScreen = document.createElement('div');
    containerPostScreen.className = 'section-post';

    const pagePost = `

    <header class = "header-post">
    <figure>
     <img class="header-image" src="imagenes/post-header.png"/>
    </figure>
  </header>
  <main>
    <section class="container-second">
      <div class="container_left">
          <h1 class="logo-name" id="logpage">Easy&nbspeggie</h1>
      </div>
      <div class="iconshome">
          <img class="icodate" id="dateIcons" src="imagenes/icons-home.png" >
           <img src="imagenes/icons-recet.png" class="iconR">
           <img class="iconsPerson" src="imagenes/icons-person.png" id='profile'>
      </div>
    </section>
    <section id="contenedor-perfil2" class="contenedor-perfil2"><textarea type="search" class="textarea" name="post" id="post" 
      placeholder="¡Realiza una publicación!"></textarea>
     <button class="botones-post" type="button" id="publicar">Publicar</button>
    </section>
  </main>
     <div class="btn-feed">
       <button class="returnBtn" type="submit">
         <a href='#/firtpage'>Cerrar sesion</a></button> 
           </div> `;
    
    
   containerPostScreen.innerHTML = pagePost
   
   containerPostScreen.querySelector('.returnBtn').addEventListener('click', () => {
    logOut();
    window.location.hash ='#/firtpage';
  });
  
   return containerPostScreen;
}
 