import { useState, useEffect } from "react";
import "./Cards.css";

const ApiCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para cargar datos desde la API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/payments");
        const result = await response.json();
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío significa que este efecto solo se ejecuta una vez al montar el componente

  return (
    <div>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div className="card-items">
          {data.map((item) => (
            <div key={item.id} className="card">
              <p className="card-firts">1° clase gratis</p>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <button>Ver Detalle</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiCard;
