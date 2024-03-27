import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/box-logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../loginComponent/loginButton/loginButton";
import LogoutButton from "../loginComponent/logOutButton/logOutButton";

const NavLinks = [
  { to: "/", label: "Inicio" },
  { to: "/Nosotros", label: "Nosotros" },
  { to: "/Entrenamiento", label: "Entrenamiento" },
  { to: "/Precios", label: "Precios" },
  { to: "/Contacto", label: "Contacto" },
];

const MobileNav = ({ isOpen, toggleMenu }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="Logo Boxeo" />
            </NavLink>
          </div>
          <ul className="nav__links">
            {NavLinks.map((link, index) => (
              <li className="navlinks__li" key={index}>
                <Link to={link.to} className="links">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="boton-mobile">
            {isAuthenticated && (
              <div className="register-mobile">
                <LogoutButton />
              </div>
            )}
            {!isAuthenticated && (
              <div className="register-mobile">
                <LoginButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileNav;
