// paymentsRouter.js
const { Router } = require("express");
const {
  getAllPaymentsHandlers,
  getPaymentsByIdHandlers,
} = require("../handlers/paymentsHandlers");

const paymentsRouter = Router();
paymentsRouter.get("/", getAllPaymentsHandlers);
paymentsRouter.get("/:id", getPaymentsByIdHandlers);

module.exports = paymentsRouter;
