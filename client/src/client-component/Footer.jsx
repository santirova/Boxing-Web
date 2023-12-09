import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

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
      <h5>Suscribite</h5>
      <p>Y recibí todas las promciones disponibles</p>
      <div className="newsletter">
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={handleInputChange}
        />
        <button onClick={handleSubscribe}>Suscribirse</button>
      </div>
      <div className="separador"></div>
      <div>
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
      </div>
      <p>&copy; {new Date().getFullYear()} Diego Noriega</p>
    </footer>
  );
};

export default Footer;
