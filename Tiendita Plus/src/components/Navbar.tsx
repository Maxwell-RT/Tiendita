import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useCarrito } from "../context/useCarrito";

// En el HTML original, cada página (index.html, catalogo.html, cada
// ficha-*.html) tenía su propia copia de esta barra de navegación,
// con links levemente distintos entre sí -y a veces directamente
// desincronizados-. Acá es un solo componente que usan todas las
// páginas, y la prop `activo` solo cambia qué link se marca como
// la sección actual.
interface Props {
  activo?: "catalogo" | "catalogo-completo";
}

function Navbar({ activo }: Props) {
  const { cantidadTotal } = useCarrito();
  return (
    <Nav>
      <div className="container">
        <Link to="/" className="brand">
          <span className="brand-mark">&lt;/&gt;</span> Biblioteca del Gato
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              to="/#catalogo"
              className={activo === "catalogo" ? "activo" : undefined}
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link
              to="/catalogo"
              className={activo === "catalogo-completo" ? "activo" : undefined}
            >
              Catálogo completo
            </Link>
          </li>
          <li>
            <Link to="/#nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/#contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/mi-cuenta">Mi cuenta</Link>
          </li>
          <li>
            <Link to="/carrito" className="nav-carrito">
              Carrito <span className="carrito-contador">{cantidadTotal}</span>
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Navbar;
