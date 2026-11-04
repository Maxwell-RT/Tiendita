interface Props {
    clase?: string;
    children?: React.ReactNode;
}

// Ojo: el valor por defecto es "navbar-cyber" porque esa es la clase
// que de verdad existe en Colores.css (antes decía "nav-cyber", que
// no tenía ningún estilo asociado).
function Nav({ clase='navbar-cyber', children }: Props) {
    return <nav className={clase}>{children}</nav>
}

export default Nav;