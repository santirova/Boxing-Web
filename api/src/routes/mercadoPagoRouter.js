const { Router } = require("express");
const mercadoPagoRouter = Router();
const mercadoPago = require("../controllers/mercadoPagoController/mercadoPago");

mercadoPagoRouter.post("/", mercadoPago);

module.exports = mercadoPagoRouter;
