
const { Payments } = require("../db");

const getAllPaymentsController = async () => {
    try {
        const allPayments = await Payments.findAll();
        return allPayments;
    } catch (error) {
        throw new Error("Error al cargar datos: " + error.message);
    }
};

const getPaymentsById = async (paymentsId) => {
    try {
        const payments = await Payments.findByPk(paymentsId.toUpperCase());
        return payments
    } catch (error) {
        throw new Error("Error al obtener Abono por ID: " + error.message);
    }
}

module.exports = {
    getAllPaymentsController,
    getPaymentsById
};
