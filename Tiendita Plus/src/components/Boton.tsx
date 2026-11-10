interface Props {
    clase?: string;
    children?: React.ReactNode;
}
/**
 * Boton — botón de ENVÍO de formulario, con el estilo neón de la tienda.
 *
 * Siempre es `type="submit"` y ocupa todo el ancho, así que sirve para
 * el botón final de un <form>. Para un botón común (con onClick) o un
 * link con aspecto de botón, usa directamente las clases de Colores.css:
 *   <button type="button" className="btn-cyber" onClick={...}>Texto</button>
 *   <Link to="/ruta" className="btn-cyber">Texto</Link>
 *
 * Props:
 *   children  El texto del botón.
 *   clase     (opcional) Clase CSS. Por defecto "btn-cyber"; para la
 *             versión apagada usa "btn-cyber secundario".
 *
 * Ejemplo:
 *   <form onSubmit={manejarEnvio}>
 *     ...campos...
 *     <Boton>Iniciar sesión</Boton>
 *   </form>
 */
function Boton({ clase='btn-cyber', children }: Props) {
    return <button type="submit" className={clase} style={{ width: '100%' }}>{children}</button>

}

function BotonCarrito({ clase = "btn-carrito", children }: Props) {
    return <button type="submit" className={clase} style={{ width: '100%' }}>{children}</button>
}
export default Boton;