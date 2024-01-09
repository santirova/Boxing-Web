import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/22.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../loginComponent/loginButton/loginButton";
import LogoutButton from "../loginComponent/logOutButton/logOutButton";
function NavBar() {
  const { isAuthenticated } = useAuth0();
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
            <NavLink to="/" className="links">
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
        {isAuthenticated && (
          <div>
            <LogoutButton />
          </div>
        )}
        {!isAuthenticated && (
          <div>
            <LoginButton />
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
