const { verifyToken } = require("../utils/handleJsonWebToken");
const { User } = require("../db");

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send("NOT_TOKEN");
    }
    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token, "[your_properties_key_here]");
    if (!dataToken) {
      res.status(401).send("NOT_PAYLOAD_DATA");
      return;
    }

    const query = {
      id: dataToken.id,
    };

    const user = await User.findOne({ where: query });
    req.user = user;

    next();
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

module.exports = authMiddleware;
