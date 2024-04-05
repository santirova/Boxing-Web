import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ApiCard = () => {
  const allPayments = useSelector((state) => state.paymentsReducer.allPayments);
  console.log("Pagos => ", allPayments);

  return (
    <div>
      <div className="cards__items">
        {allPayments.map((item) => (
          <div key={item.id} className="cards">
            <div>
              <p className="cards-firts">1° clase gratis</p>
              <h2>Pack {item.name}</h2>
              <p className="price">${item.price}</p>
              {item.description.split(".").map((point, index) => (
                <p className="entrenamiento" key={index}>
                  {point}
                </p>
              ))}
            </div>
            <Link to={`/Detalle/${item.id}`}>
              <button>Ver Detalle</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiCard;
