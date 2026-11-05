import LibroCard from "../components/LibroCard";
import { libros } from "../data/libros";

// Adaptación de catalogo.html: la página de catálogo completo,
// por formalidad, aparte de la vista resumida en inicio.tsx.
// Usa el mismo array de libros que inicio.tsx (src/data/libros.ts),
// así que siempre van a mostrar exactamente los mismos títulos.
function Catalogo() {
  return (
    <>
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
    </>
  );
}

export default Catalogo;
