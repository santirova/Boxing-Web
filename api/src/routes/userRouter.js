const { Router } = require('express');
const { getUserHandler } = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.get('/', getUserHandler);

module.exports = userRouter;
