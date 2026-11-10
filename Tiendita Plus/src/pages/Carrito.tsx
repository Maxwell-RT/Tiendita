import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../context/useCarrito";
import { buscarLibro, formatoPrecio } from "../data/libros";

// Carrito ("/carrito"): lista los libros agregados y permite sumar,
// restar o quitar cada uno. "Confirmar pedido" es solo visual: vacía
// el carrito y muestra un aviso, no guarda el pedido en ningún lado.
function Carrito() {
  const { items, total, agregar, quitar, eliminar, vaciar } = useCarrito();
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  function confirmar() {
    vaciar();
    setPedidoConfirmado(true);
  }

  return (
    <section className="seccion">
      <div className="seccion-titulo">
        <h2>Tu carrito</h2>
      </div>

      {pedidoConfirmado && (
        <p className="carrito-aviso">
          ¡Pedido confirmado! Te contactaremos para coordinar la entrega.
        </p>
      )}

      {items.length === 0 ? (
        <div className="carrito-vacio">
          <p>Tu carrito está vacío.</p>
          <Link to="/catalogo" className="btn-cyber">
            Ver catálogo
          </Link>
        </div>
      ) : (
        <>
          <ul className="carrito-lista">
            {items.map((item) => {
              const libro = buscarLibro(item.slug);
              if (!libro) return null;
              return (
                <li key={item.slug} className="carrito-item">
                  <img src={libro.imagen} alt={`Portada de ${libro.titulo}`} />
                  <div className="carrito-item-info">
                    <Link to={`/libro/${libro.slug}`}>{libro.titulo}</Link>
                    <span className="carrito-item-autor">{libro.autor}</span>
                    <span className="carrito-item-precio">
                      {formatoPrecio(libro.precio)} c/u
                    </span>
                  </div>
                  <div className="carrito-cantidad">
                    <button
                      type="button"
                      onClick={() => quitar(item.slug)}
                      aria-label={`Quitar una unidad de ${libro.titulo}`}
                    >
                      −
                    </button>
                    <span>{item.cantidad}</span>
                    <button
                      type="button"
                      onClick={() => agregar(item.slug)}
                      aria-label={`Agregar una unidad de ${libro.titulo}`}
                    >
                      +
                    </button>
                  </div>
                  <span className="carrito-subtotal">
                    {formatoPrecio(libro.precio * item.cantidad)}
                  </span>
                  <button
                    type="button"
                    className="carrito-eliminar"
                    onClick={() => eliminar(item.slug)}
                  >
                    Quitar
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="carrito-resumen">
            <div className="carrito-total">
              <span>Total</span>
              <strong>{formatoPrecio(total)}</strong>
            </div>
            <div className="carrito-acciones">
              <button
                type="button"
                className="btn-cyber secundario carrito"
                onClick={vaciar}
              >
                Vaciar carrito
              </button>
              <button type="button" className="btn-cyber" onClick={confirmar}>
                Confirmar pedido
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Carrito;
