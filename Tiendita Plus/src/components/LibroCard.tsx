import { Link } from "react-router-dom";
import { formatoPrecio, type Libro } from "../data/libros";

interface Props {
  libro: Libro;
}

/**
 * LibroCard — tarjeta clickeable de un libro (portada, autor, título y
 * precio). Al hacer clic lleva a su ficha: /libro/<slug>.
 *
 * Props:
 *   libro  Un objeto Libro de src/data/libros.ts.
 *
 * Va dentro de <div className="catalogo">, que es la grilla de tarjetas.
 * Al repetirla con .map() acuérdate del `key`:
 *   <div className="catalogo">
 *     {libros.map((libro) => (
 *       <LibroCard key={libro.slug} libro={libro} />
 *     ))}
 *   </div>
 */
function LibroCard({ libro }: Props) {
  return (
    <Link className="libro-card" to={`/libro/${libro.slug}`}>
      <div className="libro-portada">
        <img src={libro.imagen} alt={`Portada de ${libro.titulo}`} />
      </div>
      <div className="libro-info">
        <p className="libro-autor">{libro.autor}</p>
        <h3 className="libro-titulo">{libro.titulo}</h3>
        <span className="libro-precio">{formatoPrecio(libro.precio)}</span>
      </div>
    </Link>
  );
}

export default LibroCard;
