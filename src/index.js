import "./style.css";
import pageLoad from "./page-load.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import Constants from "./constants.js";

// initialize hompeage
pageLoad();
home();

// watch for nav clicks
Constants.tab1.addEventListener("click", home);

Constants.tab2.addEventListener("click", menu);

Constants.tab3.addEventListener("click", contact);
