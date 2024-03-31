const express = require('express');
const registerLocalRouter = express.Router();
const registerLocalHandler = require("../handlers/registerLocalHandlers.js");
const { validatorRegister } = require("../validators/auth.js");

registerLocalRouter.post('/', validatorRegister, registerLocalHandler);


module.exports = registerLocalRouter;