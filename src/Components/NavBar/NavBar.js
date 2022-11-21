import "./navbar.css"
import { CardWidget } from "./CartWidget/CartWidget";
import { MenuNavBar } from "../NavBar/MenuNavBar/MenuNavBar";

export const NavBar = () => {
    return (
        <div>
            <nav className="nabvar-header">
                <MenuNavBar />
                <CardWidget />
            </nav>
        </div>
    );
}