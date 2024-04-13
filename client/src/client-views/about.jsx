import aboutImg from "../assets/0000.jpg";
import Breadcrumb from "../utils/Breadcrumb";

const About = () => {
  return (
    <>
      <section className="title__section">
        <div className="title__content">
          <h1>Nosotros</h1>
          <p>
            Bienvenido a Boxeo Noriega, donde la pasión por el boxeo se
            encuentra con el compromiso hacia el rendimiento y la superación
            personal.
            <p>
              Somos una comunidad unida por el amor al deporte y el deseo de
              alcanzar nuevos límites.
            </p>
          </p>
          <div className="subtitle__section">
            <Breadcrumb />
          </div>
          <div className="pl">
            <svg
              className="lineaaa"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 50"
            >
              <path
                fill="#000000"
                fillOpacity="1"
                d="M 0 0 L 1920 60 V 70 H 0 V 0 Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="about__container">
        <div className="firts__about">
          <img src={aboutImg} alt="img" />
          <div className="title-firts-about">
            <h2>Nuestro Club</h2>
            <p>
              Nuestro gimnasio es más que una escuela de boxeo: es un club, una
              fraternidad y, para muchos, un estilo de vida. Guiamos a nuestros
              estudiantes hacia la excelencia a través del desafío y el apoyo
              inquebrantable y la atención al detalle.
            </p>
            <p>Ubicado en Barrio Marina, Castelar Sur.</p>
            <div className="skills-entrenamiento">
              <h3>Mejor Entrenamiento</h3>
              <h3>Mejores Precios</h3>
              <h3>Equipo de Calidad</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
