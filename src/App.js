import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";

import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";

import { NavBar } from "./components/navBar/NavBar";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={ <ItemListContainer/>} />
                    <Route path="/category" element={ <ItemListContainer />} />
                    <Route path="/category/:category" element={ <ItemListContainer />} />
                    <Route path="/itemDetail/:Id" element={ <ItemDetailContainer />} />
                    <Route path="/cart" element={ <h2>VISUALIZACIÓN DEL CARRITO - Cuando haya uno</h2>} />
                    <Route path="*" element={ <h2> Página no encontrada</h2>} />
                </Routes>
             
            </BrowserRouter>
        </div>
    )
}
export default App;