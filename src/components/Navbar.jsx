import { Link } from "react-router-dom";
import "./Navbar.css"; // Importar los estilos

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;