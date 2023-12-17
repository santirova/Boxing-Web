import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDetailPayments } from "../../redux/paymentsActions.js";
const DetailPayments = () => {
  const dispatch = useDispatch();
  const { id } = useParams;
  // const navigate = useNavigate();

  const paymenstDetail = useSelector(
    (state) => state.paymentsReducer.paymenstDetail
  );
  console.log("Detalle del pago => ", paymenstDetail);

  useEffect(() => {
    dispatch(fetchDetailPayments(id));
  }, [dispatch, id]);
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
};

export default DetailPayments;
