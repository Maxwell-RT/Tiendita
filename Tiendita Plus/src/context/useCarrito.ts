import { useContext } from "react";
import { CarritoContext } from "./carritoContext";

// Hook para usar el carrito desde cualquier componente:
//   const { items, agregar, quitar, total } = useCarrito();
export function useCarrito() {
  const contexto = useContext(CarritoContext);
  if (!contexto) {
    throw new Error("useCarrito debe usarse dentro de <CarritoProvider>");
  }
  return contexto;
}
