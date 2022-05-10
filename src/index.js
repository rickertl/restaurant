/**
 * 1)
 * page-load module with default layout, import into index.js
 *
 * 2a)
 * menu module will export function that creates a div element, adds the
 * appropriate content and styles to that element and then appends it to the DOM.
 *
 * 2b)
 * contact module will export function that creates a div element, adds the
 * appropriate content and styles to that element and then appends it to the DOM.
 *
 * 3)
 * tab-switching logic inside of index.js. You should have event listeners for
 * each tab that wipes out the current contents and then runs the correct
 * ‘tab module’ to populate it again.
 *
 */
import "./style.css";
import pageLoad from "./page-load.js";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

pageLoad();
home();

const tab1 = content.querySelector(".tab1");
tab1.addEventListener("click", home);

const tab2 = content.querySelector(".tab2");
tab2.addEventListener("click", menu);

const tab3 = content.querySelector(".tab3");
tab3.addEventListener("click", contact);
