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

  const tab1 = document.createElement("div");
  tab1.classList.add("tab", "tab1");
  tab1.textContent = "Home";
  nav.appendChild(tab1);

  const tab2 = document.createElement("div");
  tab2.classList.add("tab", "tab2");
  tab2.textContent = "Menu";
  nav.appendChild(tab2);

  const tab3 = document.createElement("div");
  tab3.classList.add("tab", "tab3");
  tab3.textContent = "Contact";
  nav.appendChild(tab3);

  // main
  const main = document.createElement("main");
  header.appendChild(main);

  // column one
  const column1 = document.createElement("div");
  column1.classList.add("column1");
  main.appendChild(column1);

  // column two
  // const column2 = document.createElement("div");
  Constants.column2.classList.add("column2");
  main.appendChild(Constants.column2);
}
