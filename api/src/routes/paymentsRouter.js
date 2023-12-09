// paymentsRouter.js
const { Router } = require("express");
const { getPaymentsHandlers, getPaymentsByIdHandlers } = require("../handlers/paymentsHandlers.js");
const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsHandlers);
paymentsRouter.get("/:id", getPaymentsByIdHandlers)

module.exports = paymentsRouter;
