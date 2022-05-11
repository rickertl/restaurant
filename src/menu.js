import { column2 } from "./page-build.js";

export default function menu() {
  content.className = "";
  content.classList.add("menu");

  column2.innerHTML = `
  <h2>Menu</h2>
  <h3>Pasta Marinara - $10.00</h3>
  <p>Bowl of angel hair sautéed in our homemade marinara sauce.</p>
  <h3>Ravioli - $13.00</h3>
  <p>Jumbo ravioli stuffed with crumbled Italian sausage, sautéed broccoli in 
  our suprema sauce with crumbled Italian sausage.
  <h3>Chicken Parmesan - $14.00</h3>
  <p>Lightly breaded and pounded chicken cutlet drizzled with marinara, lightly 
  covered with cheese and served over linguini pasta.</p>
  `;
}
