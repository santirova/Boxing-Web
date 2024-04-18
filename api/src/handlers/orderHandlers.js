const {
  postOrderController,
} = require("../controllers/orderController/postOrderController");

const postOrderHandler = async (req, res) => {
  try {
    const email = req.body.email;
    const newOrder = await postOrderController(email);
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

module.exports = { postOrderHandler };
