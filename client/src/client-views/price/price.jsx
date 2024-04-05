import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPayments } from "../../redux/paymentsActions";
import ApiCardContainer from "../../client-component/cardContainer/apiCardContainer";
import Breadcrumb from "../../utils/Breadcrumb";

const Price = () => {
  const dispatch = useDispatch();
  const allPayments = useSelector((state) => state.paymentsReducer.allPayments);

  useEffect(() => {
    if (!allPayments.length) {
      axios.get("/api").then(() => dispatch(getPayments()));
    }
  }, [dispatch, allPayments]);

  return (
    <section className="title__section">
      <div className="title__content">
        <h1>Precios</h1>
        <p>
          Selecciona el plan que mejor se adapte a tus necesidades y
          presupuesto.
        </p>
        <div className="subtitle__section">
          <Breadcrumb />
        </div>
      </div>
      <div className="card__container">
        <ApiCardContainer />
      </div>
    </section>
  );
};

export default Price;
