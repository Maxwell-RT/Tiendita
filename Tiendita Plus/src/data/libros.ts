// ============================================================
// libros.ts — catálogo de la tienda, en un solo lugar
// ------------------------------------------------------------
// En la versión HTML (Tiendita-main) cada libro vivía repetido
// en varios archivos (index.html, catalogo.html y su propia
// ficha-*.html), así que era fácil que quedaran desincronizados
// -de hecho catalogo.html e index.html no coincidían-.
// Acá hay un solo array: la página de inicio, el catálogo
// completo y la ficha de cada libro lo leen desde este mismo
// lugar, así que agregar, editar o sacar un libro se hace en
// un solo sitio.
// ============================================================

export interface Libro {
  slug: string; // identificador para la URL, ej: /libro/dyd
  titulo: string;
  autor: string;
  categoria: string;
  precio: number; // en pesos, sin formato, ej: 8500 (para poder sumar en el carrito)
  imagen: string; // ruta dentro de /public/IMG
  resumen: string;
}

export const libros: Libro[] = [
  {
    slug: "dyd",
    titulo: "Libro de Dungeons & Dragons",
    autor: "Wizards of the Coast",
    categoria: "Juegos de rol",
    precio: 8500,
    imagen: "/IMG/shopping.png",
    resumen:
      "Manual básico para jugar Dungeons & Dragons: reglas de creación de personajes, combate y aventuras. Ideal tanto para quienes recién empiezan en los juegos de rol como para directores de juego que buscan un manual de referencia rápido.",
  },
  {
    slug: "ficciones",
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    categoria: "Clásicos",
    precio: 6900,
    imagen: "/IMG/image_1790042582899.png",
    resumen:
      "Ficciones es una colección de cuentos cortos que exploran temas como la realidad, la identidad y la percepción. Con su estilo único y su enfoque filosófico, Borges invita a los lectores a cuestionar la naturaleza de la existencia y a reflexionar sobre el poder de la imaginación.",
  },
  {
    slug: "androides",
    titulo: "¿Sueñan los androides con ovejas eléctricas?",
    autor: "Philip K. Dick",
    categoria: "Ciencia ficción",
    precio: 7900,
    imagen: "/IMG/image_1790041529546.png",
    resumen:
      "En un futuro post-apocalíptico, un cazarrecompensas persigue androides que se hacen pasar por humanos. La novela que inspiró la película Blade Runner, y una de las grandes preguntas de la ciencia ficción: ¿qué separa a lo humano de la máquina?",
  },
  {
    slug: "perico",
    titulo: "Perico trepa por Chile",
    autor: "Alicia Morel / Marcela Paz",
    categoria: "Infantil",
    precio: 6400,
    imagen: "/IMG/1602274312_cover.png",
    resumen:
      "Un clásico de la literatura infantil chilena: Perico recorre el país de norte a sur, conociendo paisajes, costumbres y personajes típicos en cada región. Ideal para las primeras lecturas.",
  },
  {
    slug: "desposeidos",
    titulo: "Los desposeídos",
    autor: "Ursula K. Le Guin",
    categoria: "Ciencia ficción",
    precio: 9200,
    imagen: "/IMG/image_1790042220894.png",
    resumen:
      "Un físico viaja entre dos mundos vecinos con sistemas políticos opuestos: uno anarquista y otro capitalista. Le Guin construye una de las novelas de ciencia ficción más lúcidas sobre libertad, propiedad y utopía.",
  },
  {
    slug: "fuego",
    titulo: "Las cosas que perdimos en el fuego",
    autor: "Mariana Enríquez",
    categoria: "Terror",
    precio: 7100,
    imagen: "/IMG/thumb_14220_portadas_big.jpeg",
    resumen:
      "Doce cuentos de terror ambientados en la Argentina contemporánea, donde lo sobrenatural se mezcla con la violencia social y la pobreza. Una de las voces más filosas del terror latinoamericano actual.",
  },
  {
    slug: "papelucho",
    titulo: "Papelucho y el marciano",
    autor: "Marcela Paz",
    categoria: "Infantil",
    precio: 7200,
    imagen: "/IMG/papelucho.jpg",
    resumen:
      "Papelucho cree haber encontrado un marciano y decide esconderlo. Como en el resto de la saga, el humor y la mirada ingenua del protagonista retratan con ternura la infancia y la vida en familia.",
  },
  {
    slug: "vader-lord-oscuro",
    titulo: "Vader: Lord Oscuro",
    autor: "Charles Soule/Giuseppe Camuncoli",
    categoria: "Ciencia ficción",
    precio: 2500,
    imagen: "/IMG/vader.jpg",
    resumen:
      "Comenzando durante los sucesos de Star Wars: Episodio III La Venganza de los Sith directamente después de que Darth Vader descubre que su esposa, Padmé Amidala, ha muerto, la serie narra a Vader yendo en varias misiones a través de la galaxia, mientras caza a los pocos Jedi sobrevivientes junto a su banda de aprendices del lado oscuro conocida como la Inquisición." },
];

// Útil para la ficha de un libro: busca por slug (el :slug de la URL)
export function buscarLibro(slug: string | undefined): Libro | undefined {
  return libros.find((libro) => libro.slug === slug);
}

// Convierte 8500 en "$8.500" para mostrarlo en pantalla
export function formatoPrecio(valor: number): string {
  return "$" + valor.toLocaleString("es-CL");
}
