import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    console.log(
      `Usuario suscrito con la dirección de correo electrónico: ${email}`
    );
  };

  return (
    <footer>
      <>
        <div className="container__footer">
          <div className="data-footer">
            <p>011-xxxx-xxxx</p>
            <p>diegonoriega@gmail.com</p>
            <p>Arturo Guastavino 3750.</p>
            <p>Castelar sur, Bs As (CP:1712)</p>
          </div>
          <nav className="nav-footer">
            <ul className="footer__links">
              <li>
                <NavLink to="/" className="links-footer">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="Nosotros" className="links-footer">
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="Entrenamiento" className="links-footer">
                  Entrenamiento
                </NavLink>
              </li>
              <li>
                <NavLink to="Precios" className="links-footer">
                  Precios
                </NavLink>
              </li>
              <li>
                <NavLink to="Contacto" className="links-footer">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="redes-footer">
            <h4>Redes sociales</h4>
            <div className="icons-redes">
              <a
                className="ig-icon"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="fb-icon"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                className="fb-whatsapp"
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
          <div className="newsletter">
            <h5>Suscribite</h5>
            <p>Y recibí todas las promociones disponibles</p>
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={handleInputChange}
            />
            <button onClick={handleSubscribe}>Suscribirse</button>
          </div>
        </div>
        <div className="separador"></div>
        <p className="copy-name">
          &copy; {new Date().getFullYear()} Diego Noriega
        </p>
      </>
    </footer>
  );
};

export default Footer;
