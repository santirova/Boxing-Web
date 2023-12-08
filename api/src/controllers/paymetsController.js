
const { Payments } = require("../db");

const getAllPaymentsController = async () => {
    try {
        const allPayments = await Payments.findAll();
        return allPayments;
    } catch (error) {
        throw new Error("Error al cargar datos: " + error.message);
    }
};

module.exports = {
    getAllPaymentsController
};
