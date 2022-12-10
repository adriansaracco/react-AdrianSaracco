import { CardWidget } from "../CartWidget/CartWidget";
import { MenuNavBar } from "../menuNavBar/MenuNavBar";

import "./navbar.css";
export const NavBar = () => {
    return (
        <div>
            <nav className="NavBar">
                
                <MenuNavBar />
                <CardWidget />
            </nav>
        </div>
    );
}