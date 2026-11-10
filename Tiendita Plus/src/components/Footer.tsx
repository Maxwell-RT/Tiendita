import { Link } from "react-router-dom";

/**
 * Footer — pie de página (datos de contacto y el link discreto
 * "Acceso administrador" que lleva a /admin/login).
 *
 * Sin props. No hace falta ponerlo en cada página: LayoutTienda ya lo
 * incluye. Para cambiar textos o links, edítalos aquí. Su id="contacto"
 * es el destino del link "Contacto" del navbar.
 */
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
        <Link to="/admin/login" className="enlace-admin-discreto">
          Acceso administrador
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
