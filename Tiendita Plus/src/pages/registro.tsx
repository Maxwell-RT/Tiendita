import { Link, useNavigate } from "react-router-dom";
import Boton from "../components/Boton";

// Adaptación de registro.html ("Crear cuenta").
// Misma idea que login.tsx: solo visual, sin guardar ni validar
// nada de verdad. Al enviar el formulario, simula que la cuenta se
// creó y manda a la persona a iniciar sesión.
function Registro() {
  const navigate = useNavigate();

  function manejarEnvio(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    navigate("/mi-cuenta");
  }

  return (
    <div className="pantalla-login">
      <div className="panel-login">
        <p className="login-eyebrow">// NUEVO CLIENTE</p>
        <h1>Crear cuenta</h1>

        <form onSubmit={manejarEnvio}>
          <div className="campo">
            <label htmlFor="nombre">Nombre completo</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="campo">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="campo">
            <label htmlFor="clave">Contraseña</label>
            <input type="password" id="clave" name="clave" />
          </div>
          <div className="campo">
            <label htmlFor="clave-confirmar">Confirmar contraseña</label>
            <input type="password" id="clave-confirmar" name="clave-confirmar" />
          </div>
          <Boton>Crear cuenta</Boton>
        </form>

        <Link to="/mi-cuenta" className="login-volver">
          ¿Ya tienes cuenta? Iniciar sesión
        </Link>
        <Link to="/" className="login-volver">
          ← Volver a la tienda
        </Link>
      </div>
    </div>
  );
}

export default Registro;
