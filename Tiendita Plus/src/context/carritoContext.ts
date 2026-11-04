import { createContext } from "react";

export interface ItemCarrito {
  slug: string; // identifica al libro (ver src/data/libros.ts)
  cantidad: number;
}

export interface CarritoContextoTipo {
  items: ItemCarrito[];
  cantidadTotal: number; // suma de unidades, para el contador del navbar
  total: number; // precio total en pesos
  agregar: (slug: string) => void; // +1 unidad
  quitar: (slug: string) => void; // -1 unidad (si llega a 0, lo saca)
  eliminar: (slug: string) => void; // saca el libro completo
  vaciar: () => void;
}

export const CarritoContext = createContext<CarritoContextoTipo | null>(null);
