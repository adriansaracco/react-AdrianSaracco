import "./index.css"

import { NavBar } from "./Components/NavBar/NavBar";

import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";


const App = ()=>{
    return (
        <div>
        <NavBar/>
        <ItemListContainer greeting={"Tienda de Adrián Saracco"}/>
        </div>
    )
}
export default App;