const { Router } = require("express");
const mercadoPagoRouter = Router();
const { mercadoPagoHandler } = require("../handlers/mercadoPagoHanlders");

mercadoPagoRouter.post("/create-preference/:userEmail", mercadoPagoHandler);

module.exports = mercadoPagoRouter;
