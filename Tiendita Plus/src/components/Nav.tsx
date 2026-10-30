interface Props {
    clase?: string;
    children?: React.ReactNode;
}

function Nav({ clase='nav-cyber', children }: Props) {
    return <nav className={clase} style={{ width: '100%' }}>{children}</nav>
}

export default Nav;