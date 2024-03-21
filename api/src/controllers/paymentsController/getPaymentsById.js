const { Payments } = require("../../db");

const getPaymentsById = async (paymentsId) => {
<<<<<<< HEAD
    console.log("Esta es la data => ", paymentsId);
    try {
        const payments = await Payments.findByPk(paymentsId.toUpperCase());
        return payments
    } catch (error) {
        throw new Error("Error al obtener Abono por ID: " + error.message);
    }
=======
  try {
    const payments = await Payments.findByPk(paymentsId.toUpperCase());
    return payments;
  } catch (error) {
    throw new Error("Error al obtener Abono por ID: " + error.message);
  }
>>>>>>> fd066e3ca39b946f3191dba5742e6243cff51d34
};

module.exports = {
  getPaymentsById,
};
