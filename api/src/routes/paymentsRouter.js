// paymentsRouter.js
const { Router } = require("express");
const { getPaymentsHandlers } = require("../handlers/paymentsHandlers.js");
const paymentsRouter = Router();

paymentsRouter.get("/", getPaymentsHandlers);

module.exports = paymentsRouter;
