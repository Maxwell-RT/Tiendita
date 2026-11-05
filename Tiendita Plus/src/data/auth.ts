// ============================================================
// auth.ts — sesión de administrador (adaptación de auth.js)
// ------------------------------------------------------------
// AVISO: esto es solo una barrera de interfaz, no seguridad real.
// El usuario y la clave quedan dentro del código que se descarga
// al navegador, así que cualquiera puede leerlos (inspector →
// Sources) o activar la sesión a mano desde la consola.
// Para un sitio real, el login debe validarse en un servidor
// (backend) que devuelva un token, no comparando textos en el
// navegador.
// ============================================================

const CLAVE_SESION = "biblioteca_admin_sesion";

// Credenciales de demostración. Cámbialas por las que quieras.
const USUARIO_DEMO = "admin";
const CLAVE_DEMO = "abasto2026";

// Revisa usuario/clave y, si son correctos, guarda la sesión activa.
export function iniciarSesion(usuario: string, clave: string): boolean {
  if (usuario === USUARIO_DEMO && clave === CLAVE_DEMO) {
    try {
      sessionStorage.setItem(CLAVE_SESION, "true");
    } catch {
      return false; // el navegador bloquea sessionStorage: no se puede mantener la sesión
    }
    return true;
  }
  return false;
}

// true si ya hay una sesión de administrador activa en esta pestaña.
// (sessionStorage se borra al cerrar la pestaña o el navegador.)
export function haySesionActiva(): boolean {
  try {
    return sessionStorage.getItem(CLAVE_SESION) === "true";
  } catch {
    return false;
  }
}

export function cerrarSesion(): void {
  try {
    sessionStorage.removeItem(CLAVE_SESION);
  } catch {
    /* nada que borrar */
  }
}
