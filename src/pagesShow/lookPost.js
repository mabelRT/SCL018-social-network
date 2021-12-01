import{deletePost,editPost,auth} from "../lib/index.js";

//import { readData } from "../lib";

export const look = (box) => {

   const postNewPage = document.querySelector("#lookPage");
         postNewPage.innerHTML = "";
         const lookConten = (rest)  => {
             console.log(rest);
            const carry = `
              <div class="watchPost">
                <textarea class="postLook" id="postLook" readonly>${rest.task.data.recetas}</textarea>
                <div class="contentButtons">
                <button class="btn-like"> <img class="likepost" src="./imagenes/icons-like.png" /></button>
                <button class="btn-comment"> <img class="comment" src="./imagenes/comentarios.png" /></button>
                `;
                const carryTwo=`
                </div>
            </div> `;
            let carryThree="";
                if(rest.task.data.userId===auth.currentUser.uid){
              carryThree=`
                <div class="buttonsContent">
                <button class="icon-pencil edit"value=${rest.task.id}></button>
                <button class="icon-bin delete" value=${rest.task.id}></button>
                </div>
                </div>
            </div>`; 
        }
        postNewPage.innerHTML += carry+carryThree+carryTwo;
         }   
    box.forEach(lookConten);

    const btnDelete=postNewPage.querySelectorAll('.icon-bin');
    btnDelete.forEach((delate)=>{
        delate.addEventListener('click',()=>{
        const confirmDelete = confirm('¿Estás seguro de eliminar este Post?'); 
        if (confirmDelete == true){deletePost(e.value);}
        
    
         deletePost(delate.value)
        })
    })
    const btnEdit=postNewPage.querySelectorAll('.icon-pencil');
    btnEdit.forEach((edit) =>{
        edit.addEventListener('click',()=>{
       
         editPost(edit.value)
        });
    });
return look;
};
