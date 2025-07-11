// components/footer.js
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer class="footer">
        <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    `;
    }
}
customElements.define('my-footer', MyFooter);
