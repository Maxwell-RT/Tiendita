  /* ============================================================
    auth.js — sesión de administrador
    ------------------------------------------------------------
    AVISO: esto es solo una barrera de interfaz, no seguridad real.
    El usuario y la clave quedan visibles en este archivo, que
    cualquiera puede leer desde el navegador (Ver código fuente,
    o la pestaña "Sources" del inspector). Para un sitio real, el
    login debe validarse en un servidor (backend), no comparando
    strings en JavaScript del lado del cliente.
    ============================================================ */

// Clave con la que se guarda el estado de sesión en este navegador
const CLAVE_SESION = 'biblioteca_admin_sesion';

// Credenciales de demostración. Cambialas por las que quieras.
const USUARIO_DEMO = 'admin';
const CLAVE_DEMO = 'Gato2026';

// Revisa usuario/clave y, si son correctos, guarda la sesión activa
function iniciarSesion(usuario, clave) {
  if (usuario === USUARIO_DEMO && clave === CLAVE_DEMO) {
    sessionStorage.setItem(CLAVE_SESION, 'true');
    return true;
  }
  return false;
}

// true si ya hay una sesión de administrador activa en este navegador
function haySesionActiva() {
  return sessionStorage.getItem(CLAVE_SESION) === 'true';
}

// Borra la sesión y vuelve al login
function cerrarSesion() {
  sessionStorage.removeItem(CLAVE_SESION);
  window.location.href = 'login.html';
}

// Llamar apenas carga admin.html: si no hay sesión, expulsa al login
function protegerPagina() {
  if (!haySesionActiva()) {
    window.location.href = 'login.html';
  }
}
