import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDetailPayments } from "../../redux/paymentsActions.js";

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

  return (
    <div>
      <h1>{paymentsDetail.name}</h1>
      <p>{paymentsDetail.id}</p>
    </div>
  );
};

export default DetailPayments;
