require("dotenv").config();
const mercadopago = require("mercadopago");
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const mercadoPago = async (req, res) => {
  try {
    const preference = {
      items: [
        {
          title: "Compu",
          picture_url: "http://sdasdasd",
          unit_price: 200,
          currency_id: "ARS",
          description: "fdfsdfsdf",
          quantity: 1,
        },
      ],
      back_urls: {
        success: "http://localhost:5173/Precios",
        pending: "http://localhost:5173/Precios",
        failure: "http://localhost:5173/Precios",
      },
      auto_return: "approved",
    };
    const response = await mercadopago.preferences.create(preference);
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = mercadoPago;
