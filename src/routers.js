/* import { firtpage } from "./pagesShow/firtpage.js";
import { registerPage } from "./pagesShow/registerPage.js";
import { postPage } from "./pagesShow/postPage .js";
//import { onAuth } from "../lib/index.js"

export const routes = (hash) => {
  const rootContainer = document.getElementById("root");
  rootContainer.innerHTML = "";
  if (hash === "#/" || hash === "/" || hash === "#" || hash === "") {
    rootContainer.appendChild(firtpage());
  } else if (hash === "#/firtpage") {
    rootContainer.appendChild(introPage());
  } else if (hash === "#/registerPage") {
    rootContainer.appendChild(registerPage());
  } else if (hash === "#/postPage ") {
    rootContainer.appendChild(postPage ());
  }
};

*/