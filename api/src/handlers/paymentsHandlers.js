// paymentsHandlers.js
const { getAllPaymentsController } = require("../controllers/paymetsController");

const getPaymentsHandlers = async (req, res) => {
    try {
        const allPayments = await getAllPaymentsController();
        res.status(200).send(allPayments);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = {
    getPaymentsHandlers
};
