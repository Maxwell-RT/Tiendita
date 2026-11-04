import { Link, useNavigate } from "react-router-dom";
import Boton from "../components/Boton";

// Adaptación de login-usuario.html ("Mi cuenta", el login del
// cliente — no confundir con el panel de administrador, que no se
// adaptó todavía).
//
// Igual que en el HTML original, esto es solo visual: no valida ni
// guarda nada en ningún lado. El botón "Iniciar sesión" lleva
// directo a la tienda, simulando que el inicio de sesión funcionó.
// Si en algún momento esto necesita ser real, hay que guardar los
// datos en algún lado (backend, o como mínimo localStorage) y
// validar el formulario antes de navegar.
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
