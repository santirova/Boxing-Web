const { Payments } = require("../../db");

const getPaymentsById = async (paymentsId) => {
  try {
    const payments = await Payments.findByPk(paymentsId.toUpperCase());
    return payments;
  } catch (error) {
    throw new Error("Error al obtener Abono por ID: " + error.message);
  }
};

module.exports = {
  getPaymentsById,
};
