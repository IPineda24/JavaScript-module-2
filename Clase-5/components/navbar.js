// components/navbar.js
class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <nav class="navbar">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    `;
    }
}
customElements.define('my-navbar', MyNavbar);
