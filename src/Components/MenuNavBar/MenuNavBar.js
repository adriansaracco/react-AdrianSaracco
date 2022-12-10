import "./MenuNavBar.css"
import { Link } from "react-router-dom";
export const MenuNavBar = () => {
    return (
        <ul className="UlMenuNavBar">
            <Link className="Link" to="/">
                Nosotros
            </Link>
            <Link className="Link" to="/category/Pantalones">
                Articulos Deportivos
            </Link>
            <Link className="Link" to="/category/Remeras">
                Indumentaria
            </Link>
            <Link className="Link" to="/category/Calzado">
                Accesorios
            </Link>
            <Link className="Link" to="/category">
                Ver todo
            </Link>
        </ul>
    )
};