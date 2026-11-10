/**
 * BarraEstado — la franjita HUD de arriba de todo ("SISTEMA EN LÍNEA").
 *
 * Sin props. No hace falta ponerla en cada página: LayoutTienda ya la
 * incluye en todas las rutas de la tienda. Para cambiar sus textos,
 * edítalos aquí.
 *
 * Ejemplo (solo si algún día la usas fuera de LayoutTienda):
 *   <BarraEstado />
 */
function BarraEstado() {
  return (
    <div className="hud-bar">
      <span className="online">SISTEMA EN LÍNEA</span>
      <span>BIBLIOTECA DEL GATO // SECTOR LIBROS</span>
    </div>
  );
}

export default BarraEstado;
