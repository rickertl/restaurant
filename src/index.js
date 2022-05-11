import "./style.css";
import { tab1, tab2, tab3, pageBuild } from "./page-build.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

// initialize homepage
pageBuild();
home();

// watch for nav clicks
tab1.addEventListener("click", home);

tab2.addEventListener("click", menu);

tab3.addEventListener("click", contact);
