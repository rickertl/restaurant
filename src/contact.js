import { column2 } from "./page-build.js";

export default function contact() {
  content.className = "";
  content.classList.add("contact");

  column2.innerHTML = `
    <h2>Contact Us</h2>
    <p>Phone: (555) 555-5555</p>
    <p>Fax: (555) 555-5556</p>
    <p>Email: <a href="">pasta@pasta.com</a></p>
    `;
}
