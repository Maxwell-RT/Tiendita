import { Link, useParams } from "react-router-dom";
import { buscarLibro, formatoPrecio } from "../data/libros";
import { useCarrito } from "../context/useCarrito";

// Adaptación de ficha-plantilla.html y las 7 fichas que salían de
// ella.
// Para agregar un libro nuevo ahora NO hace falta crear un archivo
// nuevo: alcanza con agregar un objeto más al array en
// src/data/libros.ts

function Ficha() {
  const { slug } = useParams();
  const libro = buscarLibro(slug);
  const { items, agregar } = useCarrito();

  const enCarrito = items.find((i) => i.slug === slug)?.cantidad ?? 0;

  if (!libro) {
    return (
      <>
        {/* <BarraEstado />
        <Navbar /> */}
        <section className="seccion">
          <Link to="/#catalogo" className="volver-catalogo">
            ← Volver al catálogo
          </Link>
          <p>No encontramos ese libro.</p>
        </section>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      {/* <BarraEstado />
      <Navbar activo="catalogo" /> */}

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

      {/* <Footer /> */}
    </>
  );
}

export default Ficha;
