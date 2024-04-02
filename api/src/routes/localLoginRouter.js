const express = require("express");
const localLoginRouter = express.Router();
const loginLocalHandler = require("../handlers/loginLocalHanlder.js");
const { validatorLogin } = require("../validators/auth.js");

localLoginRouter.post("/", validatorLogin, loginLocalHandler);

module.exports = localLoginRouter;
