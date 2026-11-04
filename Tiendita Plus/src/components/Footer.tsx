// Footer compartido por todas las páginas. Antes vivía copiado en
// cada archivo .html; acá es un solo componente.
//
// Nota: el HTML original tenía un link "Acceso administrador" al
// final que llevaba a login.html / admin.html. Esa parte (el panel
// de administrador con auth.js) todavía no se adaptó a esta versión
// en React, así que por ahora el link no está. Cuando se arme esa
// parte, agregalo acá como <Link to="/admin/login">.
function Footer() {
  return (
    <footer className="footer-cyber" id="contacto">
      <div className="footer-grid">
        <div>
          <h4>Biblioteca del Gato</h4>
          <p>Libros seleccionados a mano en el corazón del Gato.</p>
        </div>
        <div>
          <h4>Tienda</h4>
          <ul>
            <li>
              <a href="/#catalogo">Catálogo</a>
            </li>
            <li>
              <a href="/#nosotros">Nosotros</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="mailto:hola@bibliotecadelgato.com">
                hola@bibliotecadelgato.com
              </a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Biblioteca del Gato</span>
      </div>
    </footer>
  );
}

export default Footer;
