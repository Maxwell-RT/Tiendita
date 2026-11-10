interface Props {
    clase?: string;
    children?: React.ReactNode;
}

/**
 * Nav — solo el contenedor <nav> con el estilo de la barra superior.
 *
 * No trae logo ni links: eso lo pone Navbar.tsx. Normalmente no lo usas
 * directo. Si lo usas, el contenido debe ir dentro de un
 * <div className="container"> porque el CSS (.navbar-cyber .container)
 * lo espera así.
 *
 * Props:
 *   children  Lo que va dentro de la barra.
 *   clase     (opcional) Clase CSS. Por defecto "navbar-cyber".
 *
 * Ejemplo:
 *   <Nav>
 *     <div className="container">...</div>
 *   </Nav>
 */
function Nav({ clase='navbar-cyber', children }: Props) {
    return <nav className={clase}>{children}</nav>
}

export default Nav;