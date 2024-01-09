require('dotenv').config();
const mercadopago = require("mercadopago");
const { ACCES_TOKEN } = process.env;


mercadopago.configure({
    acces_token: ACCES_TOKEN,
});


const createPreferenceController = (pendingOrderId, itemsBody) => {
    let preference = {
        metadata: { relatedOrderId: pendingOrderId },
        items: itemsBody,
        back_urls: {
            success: "http://localhost:5173/Contacto",
            failure: "http://localhost:5173/Contacto",
            pending: "http://localhost:5173/Contacto",
        },
        auto_return: "aproved",
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
    return preferenceId
};

module.exports = { createPreferenceController };