const express = require("express");
const orderRouter = express.Router();
const { postOrderHandler } = require("../handlers/orderHandlers");

orderRouter.post("/", postOrderHandler);

module.exports = orderRouter;
