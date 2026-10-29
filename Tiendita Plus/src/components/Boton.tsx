interface Props {
    clase?: string;
    children?: React.ReactNode;
}

function Boton({ clase='btn-cyber', children }: Props) {
    return <button type="submit" className={clase} style={{ width: '100%' }}>{children}</button>

}
export default Boton;