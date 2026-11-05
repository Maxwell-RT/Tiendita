import { Navigate } from "react-router-dom";
import { haySesionActiva } from "../data/auth";

// Envuelve las páginas que solo puede ver el administrador. Si no
// hay sesión activa, redirige a /admin/login antes de mostrar nada
// (equivale a protegerPagina() de auth.js en la versión HTML).
//
// Uso en App.tsx:
//   <Route path="/admin" element={<RutaProtegida><Admin /></RutaProtegida>} />
function RutaProtegida({ children }: { children: React.ReactNode }) {
  if (!haySesionActiva()) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
}

export default RutaProtegida;
