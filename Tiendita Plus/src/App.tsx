import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Catalogo from "./pages/catalogo";
import Ficha from "./pages/Ficha";
import Login from "./pages/login";
import Registro from "./pages/registro";
import Carrito from "./pages/Carrito";
import AdminLogin from "./pages/adminLogin";
import Admin from "./pages/admin";
import LayoutTienda from "./components/LayoutTienda";
import RutaProtegida from "./components/RutaProtegida";

// Mapa de rutas de la tienda. Cada <Route> acá reemplaza uno de los
// archivos .html de Tiendita-main:
//   index.html         -> "/"
//   catalogo.html       -> "/catalogo"
//   ficha-*.html (x7)   -> "/libro/:slug" (una sola página dinámica)
//   login-usuario.html  -> "/mi-cuenta"
//   registro.html        -> "/registro"
//   login.html           -> "/admin/login"
//   admin.html           -> "/admin" (protegida: pide sesión)
//
// Las rutas de la tienda van dentro de <LayoutTienda> (barra de
// estado, navbar y footer compartidos). Las de administrador van
// afuera porque el panel tiene su propia barra superior.
function App() {
  return (
    <Routes>
      <Route element={<LayoutTienda />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libro/:slug" element={<Ficha />} />
        <Route path="/mi-cuenta" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<Carrito />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <RutaProtegida>
            <Admin />
          </RutaProtegida>
        }
      />
    </Routes>
  );
}

export default App;
