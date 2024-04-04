import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDetailPayments } from "../../redux/paymentsActions.js";
import style from "./detailPayment.module.css";
import axios from "axios";

const DetailPayments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const paymentsDetail = useSelector(
    (state) => state.paymentsReducer.paymentsDetail
  );

  const pay = async (paymentId, unitPrice) => {
    console.log("Unit price:", unitPrice);
    try {
      const response = await axios.post("/mercadoPago", {
        paymentId,
        price: unitPrice,
      });
      console.log("data response =>", response.data);

      window.location.href = response.data.body.init_point;
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchDetailPayments(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className={style.card}>
        <h1>{paymentsDetail.name}</h1>
        <p>{paymentsDetail.id}</p>
        <div>
          <button
            onClick={() => pay(paymentsDetail.id, paymentsDetail.price)}
            className={style.button}
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPayments;
