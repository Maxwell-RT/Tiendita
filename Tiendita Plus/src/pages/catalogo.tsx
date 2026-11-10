import LibroCard from "../components/LibroCard";
import { libros } from "../data/libros";

// Catálogo completo ("/catalogo"): muestra todos los libros de
// src/data/libros.ts, los mismos que la página de inicio.
function Catalogo() {
  return (
    <section className="seccion" id="catalogo" style={{ paddingTop: 56 }}>
      <div className="seccion-titulo">
        <h2>Catálogo completo</h2>
        <span className="contador">{libros.length} títulos disponibles</span>
      </div>

      <div className="catalogo">
        {libros.map((libro) => (
          <LibroCard key={libro.slug} libro={libro} />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
