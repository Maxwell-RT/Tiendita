import { Link } from "react-router-dom";
import LibroCard from "../components/LibroCard";
import Boton from "../components/Boton";
import { libros } from "../data/libros";

// Página de inicio ("/"): portada, catálogo, boletín y acceso de
// administrador. Los libros salen de src/data/libros.ts.
function Inicio() {
  return (
    <>
      {/* Portada */}
      <header className="hero">
        <p className="hero-eyebrow">LIBRERÍA INDEPENDIENTE DEL GATO</p>
        <h1>
          <span className="glitch" data-text="Biblioteca del Gato">
            Biblioteca del Gato
          </span>
        </h1>
        <p>
          Libros nuevos y usados, seleccionados a mano. Un catálogo chico,
          curado, con títulos que vale la pena tener en la biblioteca.
        </p>
        <div className="hero-actions">
          <a href="#catalogo" className="btn-cyber">
            Ver catálogo
          </a>
          <a href="#nosotros" className="btn-cyber secundario">
            Cómo compramos y vendemos
          </a>
        </div>
      </header>

      {/* Catálogo */}
      <section className="seccion" id="catalogo">
        <div className="seccion-titulo">
          <h2>Catálogo disponible</h2>
          <span className="contador">{libros.length} títulos disponibles</span>
        </div>

        <div className="catalogo">
          {libros.map((libro) => (
            <LibroCard key={libro.slug} libro={libro} />
          ))}
        </div>
      </section>

      {/* Boletín y acceso de administrador */}
      <section className="seccion" id="nosotros">
        <div className="boletin">
          <div>
            <h2>Novedades cada semana</h2>
            <p>
              Sumate para enterarte antes que nadie de ingresos nuevos y
              descuentos.
            </p>
          </div>
          <form
            className="form-boletin"
            onSubmit={(evento) => evento.preventDefault()}
          >
            <input type="email" placeholder="tu@correo.com" required />
            <Boton>Suscribirme</Boton>
          </form>
        </div>

        <div className="seccion-titulo">
          <h2>Acceso administrador</h2>
          <span className="contador">
            Para agregar libros y administrar el catálogo
          </span>
        </div>
        <Link to="/admin/login" className="btn-cyber">
          Ingresar como administrador
        </Link>
      </section>
    </>
  );
}

export default Inicio;
