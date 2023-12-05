import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
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
  );
};

export default Home;
