import { Link } from "react-router-dom";
import { formatoPrecio, type Libro } from "../data/libros";

// Tarjeta de libro clickeable. Reemplaza los <a class="libro-card">
// repetidos a mano en index.html y catalogo.html: ahora cada tarjeta
// se arma desde los datos de un Libro (ver src/data/libros.ts) y
// lleva a su ficha en /libro/[slug].
interface Props {
  libro: Libro;
}

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
