const express = require('express');
const registerLocalRouter = express.Router();
const { validatorRegister } = require('../validators/auth.js');
const { registerController } = require('../controllers/authController/registerController.js');

registerLocalRouter.post('/', validatorRegister, registerController);

module.exports = registerLocalRouter;