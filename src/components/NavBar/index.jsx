import "./NavBar.css"
import CartWidget from "../CartWidget"
import logo from "./logo.png"

function NavBar() {
    return(
            <nav className="navbar-container">
                <a href="/">
                    <img src={logo} alt="Logo" width="50%" loading="lazy"></img>
                </a>
                <button className= "button-navbar">Inicio</button>
                <button className= "button-navbar">Productos</button>
                <button className= "button-navbar">Información</button>
                <CartWidget/>
            </nav>
    );
}

export default NavBar