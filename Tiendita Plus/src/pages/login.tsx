import { Link, useNavigate } from "react-router-dom";
import Boton from "../components/Boton";

// "Mi cuenta" ("/mi-cuenta"): inicio de sesión del cliente. Es solo
// visual: no valida ni guarda nada, el botón lleva directo a la
// tienda. No confundir con adminLogin.tsx, que sí valida la clave.
function Login() {
  const navigate = useNavigate();

  function manejarEnvio(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    navigate("/");
  }

  return (
    <div className="pantalla-login">
      <div className="panel-login">
        <p className="login-eyebrow">// MI CUENTA</p>
        <h1>Iniciar sesión</h1>

        <form onSubmit={manejarEnvio}>
          <div className="campo">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="campo">
            <label htmlFor="clave">Contraseña</label>
            <input type="password" id="clave" name="clave" />
          </div>
          <Boton>Iniciar sesión</Boton>
        </form>

        <Link to="/registro" className="login-volver">
          ¿No tienes cuenta? Registrate
        </Link>
        <Link to="/" className="login-volver">
          ← Volver a la tienda
        </Link>
      </div>
    </div>
  );
}

export default Login;
