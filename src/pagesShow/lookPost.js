import { deletePost, editPost, auth } from "../lib/index.js";

//import { readData } from "../lib";

export const look = (box) => {

  const postNewPage = document.querySelector("#lookPage");
  postNewPage.innerHTML = "";
  const lookConten = (rest) => {
    console.log(rest);
    const carry = `
              <div class="watchPost">
              <div class="conteinerUser">
                <p>${rest.task.data.name === null ? "Desconocido" : rest.task.data.name}</p>
                </div>
                <textarea class="postLook" id="postLook" readonly>${rest.task.data.recetas}</textarea>
                <div class="contentButtons">
                <button class="btn-like"> <img class="likepost" src="./imagenes/icons-like.png" /></button>
                <button class="btn-comment"> <img class="comment" src="./imagenes/comentarios.png" /></button>
                `;
    const carryTwo = `
                </div>
            </div> `;
    let carryThree = "";
    if (rest.task.data.userId === auth.currentUser.uid) {
      carryThree = `
                <div class="buttonsContent">
                <button class="icon-pencil edit"value=${rest.task.id}></button>
                <button class="icon-bin delete" value=${rest.task.id}></button>
                <button class="save" id="${rest.task.id}-save">save</button>
                </div>
                </div>
            </div>`;
    }
    postNewPage.innerHTML += carry + carryThree + carryTwo;
  }
  box.forEach(lookConten);

  const btnDelete = postNewPage.querySelectorAll('.icon-bin');
  btnDelete.forEach((delate) => {
    delate.addEventListener('click', () => {
      const confirmDelete = confirm('¿Estás seguro de eliminar este Post?');
      if (confirmDelete == true) { deletePost(e.value); }


      deletePost(delate.value)
    })
  })
  const btnEdit = document.querySelectorAll('.icon-pencil');
  btnEdit.forEach((edit) => {
    edit.addEventListener('click', () => {
      const currentPost = document.querySelector('.postLook');
      currentPost.removeAttribute("readonly");
      const btnsave = document.querySelector(`#${edit.value}-save`)
      btnsave.style.display = "block"
      btnsave.addEventListener("click", () => {
        const recetas = currentPost.value;
        editPost(edit.value, recetas);
        btnsave.style.display = "none"
        currentPost.setAttribute("readonly");


      })






    });
  });
  return look;
};

