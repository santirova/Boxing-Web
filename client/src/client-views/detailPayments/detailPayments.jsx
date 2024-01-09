import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDetailPayments } from "../../redux/paymentsActions.js";
import style from "./detailPayment.module.css";

const DetailPayments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("LLega el id => ", id);

  const paymentsDetail = useSelector(
    (state) => state.paymentsReducer.paymentsDetail
  );

  console.log("Detalle del pago => ", paymentsDetail);

  useEffect(() => {
    dispatch(fetchDetailPayments(id));
  }, [dispatch, id]);

  const clickPayment = () => {
    console.log("Este es el pago");
  };

  return (
    <div>
      <div className={style.card}>
        <h1>{paymentsDetail.name}</h1>
        <p>{paymentsDetail.id}</p>
        <div>
          <button onClick={clickPayment} className={style.button}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPayments;
