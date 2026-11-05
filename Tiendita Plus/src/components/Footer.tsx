import { Link } from "react-router-dom";

// Footer compartido por todas las páginas. Antes vivía copiado en
// cada archivo .html; acá es un solo componente.
//
// El link discreto "Acceso administrador" del final lleva al login
// del panel (/admin/login), igual que en el HTML original.
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
