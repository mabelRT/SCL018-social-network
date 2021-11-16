import {login} from './firtpage.js';
import {register} from './registerPage.js';
//import { postPage } from "./pagesShow/postPage .js";
//import { onAuth } from "../lib/index.js"

export const changeroutes = (hash) =>{
  
if ( hash === '#/register') {
     return showTemplate (hash)
} else   { 
  return showTemplate (hash)
}
}


const showTemplate = (hash) => {
  const containerRoot = document.getElementById("root")
containerRoot.innerHTML = login();
switch (hash){
  
    case '#/register':
      containerRoot.appendChild(register()); 
      break;
      default:
        containerRoot.innerHTML = '<h2> No estoy : </h2>'
}
}

 
