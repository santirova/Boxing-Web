// paymentsHandlers.js
const { getAllPaymentsController } = require("../controllers/paymentsController/getAllPaymentsController");
const { getPaymentsById } = require("../controllers/paymentsController/getPaymentsById.js")
const getPaymentsHandlers = async (req, res) => {
    try {
        const allPayments = await getAllPaymentsController();
        res.status(200).send(allPayments);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const getPaymentsByIdHandlers = async (req, res) => {
    const { id } = req.params;
    try {
        const payments = await getPaymentsById(id);
        if (payments) {
            res.status(200).json(payments);
        } else {
            res.status(404).json({
                error: {
                    message: "Payments not found",
                    values: { id }
                },
            });
        }
    } catch (error) {
        console.error('Error getting Payments by ID:', error);
        res.status(500).json({ error: 'Error getting Payments by ID' });
    }
}

module.exports = {
    getPaymentsHandlers,
    getPaymentsByIdHandlers
};
