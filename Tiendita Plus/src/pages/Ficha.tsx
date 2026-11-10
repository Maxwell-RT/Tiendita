import { Link, useParams } from "react-router-dom";
import { buscarLibro, formatoPrecio } from "../data/libros";
import { useCarrito } from "../context/useCarrito";

// Ficha de un libro ("/libro/:slug"): foto, datos, resumen y botón
// para agregarlo al carrito. Una sola página sirve para todos los
// libros: busca el que corresponde al :slug de la URL en
// src/data/libros.ts, así que un libro nuevo no necesita archivo propio.
function Ficha() {
  const { slug } = useParams();
  const libro = buscarLibro(slug);
  const { items, agregar } = useCarrito();

  if (!libro) {
    return (
      <section className="seccion">
        <Link to="/#catalogo" className="volver-catalogo">
          ← Volver al catálogo
        </Link>
        <p>No encontramos ese libro.</p>
      </section>
    );
  }

  const enCarrito = items.find((i) => i.slug === libro.slug)?.cantidad ?? 0;

  return (
    <section className="seccion">
      <Link to="/#catalogo" className="volver-catalogo">
        ← Volver al catálogo
      </Link>

      <div className="ficha-libro">
        <div className="ficha-portada">
          <img src={libro.imagen} alt={`Portada de ${libro.titulo}`} />
        </div>

        <div className="ficha-info">
          <span className="ficha-categoria">{libro.categoria}</span>
          <h1>{libro.titulo}</h1>
          <p className="ficha-autor">{libro.autor}</p>
          <span className="ficha-precio">{formatoPrecio(libro.precio)}</span>

          <p className="ficha-resumen">{libro.resumen}</p>

          <div className="ficha-acciones">
            <button
              type="button"
              className="btn-cyber"
              onClick={() => agregar(libro.slug)}
            >
              Agregar al carrito
              {enCarrito > 0 && ` (${enCarrito} en el carrito)`}
            </button>
            <Link to="/#catalogo" className="btn-cyber secundario">
              ← Seguir viendo el catálogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ficha;
