export { tab1, tab2, tab3, column2, pageBuild };

// elements to be used by this and other modules
const tab1 = document.createElement("div");
const tab2 = document.createElement("div");
const tab3 = document.createElement("div");
const column2 = document.createElement("div");

function pageBuild() {
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

  tab1.classList.add("tab", "tab1");
  tab1.textContent = "Home";
  nav.appendChild(tab1);

  tab2.classList.add("tab", "tab2");
  tab2.textContent = "Menu";
  nav.appendChild(tab2);

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
  column2.classList.add("column2");
  main.appendChild(column2);
}
