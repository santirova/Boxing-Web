import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPayments } from "../../redux/paymentsActions";
import ApiCardContainer from "../../client-component/cardContainer/apiCardContainer";
import "./Price.css";

const Price = () => {
  const dispatch = useDispatch();
  const allPayments = useSelector((state) => state.paymentsReducer.allPayments);

  useEffect(() => {
    if (!allPayments.length) {
      axios.get("/api").then(() => dispatch(getPayments()));
    } else {
      dispatch(getPayments());
    }
  }, [dispatch, allPayments]);

  return (
    <section className="title__section">
      <div className="title__content">
        <h1>Precios</h1>
        <p>
          Bienvenido a Boxeo Noriega, donde la pasión por el boxeo se encuentra
          con el compromiso hacia el rendimiento y la superación personal.
        </p>
        <div className="subtitle__section">
          <h6>
            Inicio / <span>Precios</span>
          </h6>
        </div>
      </div>
      <div className="card__container">
        <ApiCardContainer />
      </div>
    </section>
  );
};

export default Price;
