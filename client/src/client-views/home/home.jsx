import "./home.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/box.jpg";
import img2 from "../../assets/box-dos.jpg";
import img3 from "../../assets/box-tres.jpg";

const images = [
  {
    src: img1,
    text: "Entrenamiento específico para diferentes niveles y objetivos",
  },
  { src: img2, text: "Feedback y evaluación personalizada" },
  { src: img3, text: "Incorporación de técnicas de entrenamiento con cuerdas" },
];

const Home = () => {
  return (
    <>
      <div className="home__container">
        <h1>
          <span className="s1">Team</span>
          <span className="s2">
            Diego <span className="s3">Noriega</span>
          </span>
        </h1>
        <p>Donde cada golpe cuenta una historia</p>
        <p>de valentía y perseverancia.</p>
        <Link to="Entrenamiento">
          <button className="btn-home">Ver más</button>
        </Link>
      </div>
      <div className="subhome__container">
        <h2>¿Por qué elegirnos?</h2>
        <div className="linea"></div>
        <div className="img__container">
          {images.map((image, index) => (
            <div key={index} className="img-subhome">
              <img src={image.src} alt={`Imagen ${index + 1}`} />
              <p>{image.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
