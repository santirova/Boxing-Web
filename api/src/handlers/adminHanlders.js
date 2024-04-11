const getUserController = require("../controllers/adminControllers/getUserController");
const getAllPaymentsController = require("../controllers/adminControllers/getAllPaymentsControllers");

const getUserHandler = async (req, res) => {
  try {
    const allUser = await getUserController();
    res.status(200).send(allUser);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getAllPaymentsHandlers = async (req, res) => {
  try {
    const allPayments = await getAllPaymentsController();
    res.status(200).send(allPayments);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { getUserHandler, getAllPaymentsHandlers };
