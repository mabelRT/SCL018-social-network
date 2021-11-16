//import { logicalExpression } from '@babel/types'; 
import {login} from './pagesShow/firtpage.js';

import { changeroutes } from './pagesShow/routers.js';


const init = () => {
  document.getElementById('root').innerHTML= login()
  window.addEventListener('haschange', () => {
  
    changeroutes(window.location.hash);

  })
}
window.addEventListener('load',init)





  
 


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

