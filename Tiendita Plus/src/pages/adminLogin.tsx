import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Boton from "../components/Boton";
import { haySesionActiva, iniciarSesion } from "../data/auth";

// Adaptación de login.html (acceso de administrador, ruta
// /admin/login). No confundir con login.tsx, que es el "Mi cuenta"
// del cliente y es solo visual: este SÍ valida usuario y clave
// (ver src/data/auth.ts) y guarda la sesión.
function AdminLogin() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  // Si ya hay sesión activa (por ejemplo volvió con el botón
  // "atrás"), manda directo al panel en vez de mostrar el login.
  if (haySesionActiva()) {
    return <Navigate to="/admin" replace />;
  }

  function manejarEnvio(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (iniciarSesion(usuario.trim(), clave)) {
      navigate("/admin");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  }

  return (
    <div className="pantalla-login">
      <div className="panel-login">
        <p className="login-eyebrow">// ACCESO RESTRINGIDO</p>
        <h1>Panel de administración</h1>

        <form onSubmit={manejarEnvio}>
          <div className="campo">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              autoComplete="username"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="clave">Contraseña</label>
            <input
              type="password"
              id="clave"
              name="clave"
              autoComplete="current-password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              required
            />
          </div>
          <p className="error-login" role="alert">
            {error}
          </p>
          <Boton>Ingresar</Boton>
        </form>

        <Link to="/" className="login-volver">
          ← Volver a la tienda
        </Link>
      </div>
    </div>
  );
}

export default AdminLogin;
