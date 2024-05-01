require("dotenv").config();
const mercadopago = require("mercadopago");
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

const mercadoPago = (pendingOrderId, itemsBody) => {
  let preference = {
    metadata: { relatedOrderId: pendingOrderId },
    items: itemsBody,

    back_urls: {
      success: "https://viandaexpress.vercel.app/payment",
      failure: "https://viandaexpress.vercel.app/payment",
      pending: "https://viandaexpress.vercel.app/payment",
    },
    auto_return: "approved",
  };

  const preferenceId = mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return {
        id: response.body.id,
      };
    })
    .catch(function (error) {
      console.log(error);
    });

  return preferenceId;
};

module.exports = mercadoPago;
