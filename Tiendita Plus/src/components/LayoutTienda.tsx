import { Outlet, useLocation } from "react-router-dom";
import BarraEstado from "./BarraEstado";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Marco común de la tienda: barra de estado + navbar arriba y
// footer abajo, con la página de cada ruta en el medio (<Outlet />).
// Las rutas de administrador NO pasan por acá (ver App.tsx): el
// panel tiene su propia barra superior, como en admin.html.
function LayoutTienda() {
  const { pathname } = useLocation();

  // Marca en el navbar en qué sección estás
  const activo =
    pathname === "/catalogo"
      ? "catalogo-completo"
      : pathname === "/" || pathname.startsWith("/libro/")
        ? "catalogo"
        : undefined;

  return (
    <>
      <BarraEstado />
      <Navbar activo={activo} />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutTienda;
