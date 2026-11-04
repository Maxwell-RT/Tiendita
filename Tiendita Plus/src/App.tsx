import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Catalogo from "./pages/catalogo";
import Ficha from "./pages/Ficha";
import Login from "./pages/login";
import Registro from "./pages/registro";
import Carrito from "./pages/Carrito";

// Mapa de rutas de la tienda. Cada <Route> acá reemplaza uno de los
// archivos .html de Tiendita-main:
//   index.html        -> "/"
//   catalogo.html      -> "/catalogo"
//   ficha-*.html (x7)  -> "/libro/:slug" (una sola página dinámica)
//   login-usuario.html -> "/mi-cuenta"
//   registro.html       -> "/registro"
//
// El panel de administrador (login.html, admin.html, auth.js) no se
// adaptó todavía a esta versión: queda pendiente para más adelante.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/libro/:slug" element={<Ficha />} />
      <Route path="/mi-cuenta" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
  );
}

export default App;
