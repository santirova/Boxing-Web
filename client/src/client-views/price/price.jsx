import ApiCardContainer from "../../client-component/cardContainer/apiCardContainer";
import "./Price.css";
import { getPayments } from "../../redux/paymentsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const Price = () => {
  const dispatch = useDispatch();
  const allPayments = useSelector((state) => state.paymentsReducer.allPayments);
  useEffect(() => {
    if (!allPayments.length) {
      axios.get("/api").then(() => dispatch(getPayments()));
    } else {
      dispatch(getPayments());
    }
  }, [dispatch]);
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
