import { column2 } from "./page-build.js";

export default function home() {
  content.className = "";
  content.classList.add("home");
  column2.innerHTML = `
  <h2>Ciao!</h2>
  <p>Lotsa Pasta is a small neighborhood, family friendly restaurant. We have been serving the area for many years, offering authentic Italian dishes handed down through generations of my family.</p>
  <p>We welcome all and want you to feel like family.  We have an extra party room for your meetings, parties and large dinner groups.</p>
  <p>We offer take out and catering.  Just click on the tab at the top to see our menu.</p>
  <p>Join us for an experience you will want to have over and over again!</p>`;
}
