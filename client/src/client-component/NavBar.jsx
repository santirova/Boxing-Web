import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/22.jpg";
import "../index.css";

function NavBar() {
  return (
    <div className="container__nav">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="Logo Boxeo" />
        </NavLink>
      </div>
      <nav>
        <ul className="nav__links">
          <li>
            <NavLink to="Inicio" className="links">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="Nosotros" className="links">
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="Entrenamiento" className="links">
              Entrenamiento
            </NavLink>
          </li>
          <li>
            <NavLink to="Precios" className="links">
              Precios
            </NavLink>
          </li>
          <li>
            <NavLink to="Contacto" className="links">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <Link to="/">
        <button className="login">Login</button>
      </Link>
    </div>
  );
}

export default NavBar;
