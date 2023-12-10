import ApiCardContainer from "../../client-component/cardContainer/apiCardContainer";
import "./Price.css";

const Price = () => {
  return (
    <div className="price__container">
      <h1>Precios</h1>
      <div className="card__container">
        <ApiCardContainer />
      </div>
    </div>
  );
};

export default Price;
