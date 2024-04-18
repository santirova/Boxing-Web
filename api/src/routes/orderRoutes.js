const express = require("express");
const orderRouter = express.Router();
const {
  postOrderHandler,
  putOrderHandler,
} = require("../handlers/orderHandlers");

orderRouter.post("/", postOrderHandler);
orderRouter.put("/", putOrderHandler);

module.exports = orderRouter;
