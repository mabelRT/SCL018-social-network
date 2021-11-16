//import { logicalExpression } from '@babel/types'; 

import {router} from './lib/routers.js';
router();

window.addEventListener("load", () => {
    router(window.location.hash);
});
window.addEventListener("hashchange", () => {
    router(window.location.hash);
});






  
 


/*document.querySelector('.startbtn').addEventListener('click', () => {
  window.location.hash = '#/register';
  const logintTemplate= document.querySelector('.containerall');
  logintTemplate.style.display="none"
  
});

document.querySelector('.btngoogle').addEventListener('click', () => {
  loginWithGoogle();
  console.log("aqui estoy");
});

document.querySelector('.loginbtn').addEventListener('click', () => {
  userLogin();
});

function userLogin (){
  const email=document.getElementByid('correoElectronico').value;
  const password=document.getElementByid('contresana').value;
  console.log(email);
  console.log(password);
};*/

