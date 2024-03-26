const express = require('express');
const localLoginRouter = express.Router();
const localLoginController = require('../controllers/registerLocalController/loginLocalController');

localLoginRouter.post('/', localLoginController);

module.exports = localLoginController;
