import { Link, useNavigate } from "react-router-dom";
import { cerrarSesion } from "../data/auth";
import { formatoPrecio, libros } from "../data/libros";

// Adaptación de admin.html (panel de administración, ruta /admin).
// App.tsx la envuelve en <RutaProtegida>, así que solo se llega
// acá con la sesión iniciada.
//
// La tabla del catálogo ya sale de src/data/libros.ts (antes eran
// filas escritas a mano en el HTML), así que siempre coincide con
// lo que ve el cliente en la tienda.
//
// Igual que en la versión HTML, el formulario "Agregar libro", los
// botones Editar/Eliminar y la tabla de Pedidos son SOLO VISUALES:
// no guardan ni cambian nada. Para que funcionen, el catálogo
// tendría que vivir en un estado editable (por ejemplo un contexto
// con localStorage, como el del carrito) en vez de un array fijo.
function Admin() {
  const navigate = useNavigate();

  function salir() {
    cerrarSesion();
    navigate("/admin/login");
  }

  return (
    <>
      <header className="admin-topbar">
        <span className="brand">&lt;/&gt; Panel de administración</span>
        <div className="acciones">
          <Link to="/" className="enlace-tienda">
            Ver tienda ↗
          </Link>
          <button className="btn-salir" type="button" onClick={salir}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="admin-main">
        {/* ===== Catálogo ===== */}
        <section>
          <div className="panel-header">
            <h2 className="seccion-titulo-simple">Catálogo</h2>
          </div>

          <table className="tabla-admin">
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {libros.map((libro) => (
                <tr key={libro.slug}>
                  <td>{libro.titulo}</td>
                  <td>{libro.autor}</td>
                  <td>{formatoPrecio(libro.precio)}</td>
                  <td>
                    <div className="acciones-fila">
                      <button className="btn-mini editar" type="button">
                        Editar
                      </button>
                      <button className="btn-mini eliminar" type="button">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ===== Formulario "Agregar libro" (visual) ===== */}
        <section style={{ marginTop: 48 }}>
          <div className="panel-header">
            <h2 className="seccion-titulo-simple">Agregar libro</h2>
          </div>

          <form
            className="form-libro-simple"
            onSubmit={(evento) => evento.preventDefault()}
          >
            <div className="fila-doble">
              <div className="campo">
                <label htmlFor="nuevo-titulo">Título</label>
                <input type="text" id="nuevo-titulo" name="titulo" />
              </div>
              <div className="campo">
                <label htmlFor="nuevo-autor">Autor</label>
                <input type="text" id="nuevo-autor" name="autor" />
              </div>
            </div>
            <div className="campo">
              <label htmlFor="nuevo-precio">Precio</label>
              <input
                type="text"
                id="nuevo-precio"
                name="precio"
                placeholder="$0"
              />
            </div>
            <button type="button" className="btn-cyber">
              Guardar libro
            </button>
          </form>
        </section>

        {/* ===== Pedidos (filas de ejemplo) ===== */}
        <section style={{ marginTop: 48 }}>
          <div className="panel-header">
            <h2 className="seccion-titulo-simple">Pedidos</h2>
          </div>

          <table className="tabla-admin">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Libro</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Camila R.</td>
                <td>Ficciones</td>
                <td>
                  <span className="estado-select pendiente">Pendiente</span>
                </td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Nicolás F.</td>
                <td>Libro de Dungeons &amp; Dragons</td>
                <td>
                  <span className="estado-select enviado">Enviado</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Admin;
