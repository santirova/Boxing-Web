import { useSelector } from "react-redux";
import "./Cards.css";

const ApiCard = () => {
  const allPayments = useSelector((state) => state.paymentsReducer.allPayments);
  console.log("Pagos => ", allPayments);
  return (
    <div>
      <div className="card-items">
        {allPayments.map((item) => (
          <div key={item.id} className="card">
            <p className="card-firts">1° clase gratis</p>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button>Ver Detalle</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiCard;
