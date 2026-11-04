import { useEffect, useState } from "react";
import { CarritoContext, type ItemCarrito } from "./carritoContext";
import { buscarLibro } from "../data/libros";

const CLAVE = "biblioteca_carrito";

// Lee el carrito guardado en el navegador (si existe) para que no se
// pierda al recargar la página.
function cargarInicial(): ItemCarrito[] {
  try {
    const guardado = localStorage.getItem(CLAVE);
    return guardado ? (JSON.parse(guardado) as ItemCarrito[]) : [];
  } catch {
    return [];
  }
}

// Envuelve toda la app (ver main.tsx): cualquier componente puede
// leer o modificar el carrito con useCarrito().
export function CarritoProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ItemCarrito[]>(cargarInicial);

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(items));
    } catch {
      /* si el navegador bloquea localStorage, el carrito igual funciona */
    }
  }, [items]);

  function agregar(slug: string) {
    setItems((actuales) =>
      actuales.some((i) => i.slug === slug)
        ? actuales.map((i) => (i.slug === slug ? { ...i, cantidad: i.cantidad + 1 } : i))
        : [...actuales, { slug, cantidad: 1 }],
    );
  }

  function quitar(slug: string) {
    setItems((actuales) =>
      actuales
        .map((i) => (i.slug === slug ? { ...i, cantidad: i.cantidad - 1 } : i))
        .filter((i) => i.cantidad > 0),
    );
  }

  function eliminar(slug: string) {
    setItems((actuales) => actuales.filter((i) => i.slug !== slug));
  }

  function vaciar() {
    setItems([]);
  }

  const cantidadTotal = items.reduce((suma, i) => suma + i.cantidad, 0);
  const total = items.reduce(
    (suma, i) => suma + (buscarLibro(i.slug)?.precio ?? 0) * i.cantidad,
    0,
  );

  return (
    <CarritoContext.Provider
      value={{ items, cantidadTotal, total, agregar, quitar, eliminar, vaciar }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
