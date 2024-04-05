import Breadcrumb from "../utils/Breadcrumb";

const Contact = () => {
  return (
    <>
      <section className="title__section">
        <div className="title__content">
          <h1>Contacto</h1>
          <p>
            Bienvenido a Boxeo Noriega, donde la pasión por el boxeo se
            encuentra con el compromiso hacia el rendimiento y la superación
            personal. Somos una comunidad unida por el amor al deporte y el
            deseo de alcanzar nuevos límites.
          </p>
          <div className="subtitle__section">
            <Breadcrumb />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
