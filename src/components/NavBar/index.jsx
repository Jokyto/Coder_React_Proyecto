import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./logo.png";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src={logo} alt="Logo" width="50%" loading="lazy"></img>
      </Link>
      <Link to="/" className="nav-item btn btn-warning">
        Inicio
      </Link>
      <Link to="/category/Palillos" className="nav-item btn btn-warning">
        Palillos
      </Link>
      <Link to="/category/Cuencos" className="nav-item btn btn-warning">
        Cuencos
      </Link>      
      <Link to="/cart" className="nav-item btn btn-warning">
        Carrito
      </Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
