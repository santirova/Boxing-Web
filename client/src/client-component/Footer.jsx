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

  const handleInputChange = (e) => setEmail(e.target.value);

  const handleSubscribe = () => {
    console.log(
      `Usuario suscrito con la dirección de correo electrónico: ${email}`
    );
  };

  const links = [
    { to: "/", label: "Inicio" },
    { to: "Nosotros", label: "Nosotros" },
    { to: "Entrenamiento", label: "Entrenamiento" },
    { to: "Precios", label: "Precios" },
    { to: "Contacto", label: "Contacto" },
  ];

  return (
    <footer className="footer">
      <section className="container__footer">
        <div className="data__footer">
          <p>011-6488-4537</p>
          <p>diegonoriega@gmail.com</p>
          <h4>Dirección</h4>
          <p>Arturo Guastavino 3750,</p>
          <p>Castelar Sur, Bs As (CP: 1712)</p>
        </div>
        <nav className="nav__footer">
          <ul className="footer__links">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} className="links__footer">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="redes__footer">
          <h4>Redes sociales</h4>
          <div className="icons__redes">
            {[
              { href: "https://www.instagram.com/", icon: faInstagram },
              { href: "https://www.facebook.com/", icon: faFacebook },
              { href: "https://www.whatsapp.com/", icon: faWhatsapp },
            ].map((social, index) => (
              <a
                key={index}
                className={`${social.icon.iconName}-icon`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
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
      </section>
      <div className="separador"></div>
      <p className="copy__name">
        &copy; {new Date().getFullYear()} Diego Noriega
      </p>
    </footer>
  );
};

export default Footer;
