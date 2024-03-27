const express = require('express');
const registerLocalRouter = express.Router();
const registerLocalController = require('../controllers/registerLocalController/registerLocalController.js')

registerLocalRouter.post('/', registerLocalController);


module.exports = registerLocalRouter;