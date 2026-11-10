import { Navigate } from "react-router-dom";
import { haySesionActiva } from "../data/auth";

/**
 * RutaProtegida — deja ver una página solo si hay sesión de
 * administrador activa; si no, redirige a /admin/login.
 *
 * Props:
 *   children  La página que quieres proteger.
 *
 * Se usa en App.tsx, envolviendo la página en su <Route>:
 *   <Route
 *     path="/admin"
 *     element={
 *       <RutaProtegida>
 *         <Admin />
 *       </RutaProtegida>
 *     }
 *   />
 * La sesión se maneja en src/data/auth.ts.
 */
function RutaProtegida({ children }: { children: React.ReactNode }) {
  if (!haySesionActiva()) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
}

export default RutaProtegida;
