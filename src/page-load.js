import Constants from "./constants.js";

export default function pageLoad() {
  const content = document.getElementById("content");

  // header
  const header = document.createElement("header");
  const businessName = document.createElement("h1");
  header.appendChild(businessName);
  content.appendChild(header);
  businessName.textContent = "Lotsa Pasta!";

  // nav
  const nav = document.createElement("div");
  nav.classList.add("nav");
  header.append(nav);

  Constants.tab1.classList.add("tab", "tab1");
  Constants.tab1.textContent = "Home";
  nav.appendChild(Constants.tab1);

  Constants.tab2.classList.add("tab", "tab2");
  Constants.tab2.textContent = "Menu";
  nav.appendChild(Constants.tab2);

  Constants.tab3.classList.add("tab", "tab3");
  Constants.tab3.textContent = "Contact";
  nav.appendChild(Constants.tab3);

  // main
  const main = document.createElement("main");
  header.appendChild(main);

  // column one
  const column1 = document.createElement("div");
  column1.classList.add("column1");
  main.appendChild(column1);

  // column two
  Constants.column2.classList.add("column2");
  main.appendChild(Constants.column2);
}
