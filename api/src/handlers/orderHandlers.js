const {
  postOrderController,
} = require("../controllers/orderController/postOrderController");

const {
  putOrderController,
} = require("../controllers/orderController/putOrderController");

const postOrderHandler = async (req, res) => {
  try {
    const email = req.body.email;
    const newOrder = await postOrderController(email);
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

const putOrderHandler = async (req, res) => {
  try {
    const { orderId, order_status } = req.body;

    await putOrderController({ orderId, order_status });
    res.status(200).send("Orden modificada correctamente.");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { postOrderHandler, putOrderHandler };
