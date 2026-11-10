import { Outlet, useLocation } from "react-router-dom";
import BarraEstado from "./BarraEstado";
import Navbar from "./Navbar";
import Footer from "./Footer";


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
