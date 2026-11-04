// Barra de estado tipo HUD que aparece arriba de todo, en todas las
// páginas. En el HTML original era el mismo <div class="hud-bar">
// copiado y pegado en cada archivo .html; acá es un solo componente.
function BarraEstado() {
  return (
    <div className="hud-bar">
      <span className="online">SISTEMA EN LÍNEA</span>
      <span>BIBLIOTECA DEL GATO // SECTOR LIBROS</span>
    </div>
  );
}

export default BarraEstado;
