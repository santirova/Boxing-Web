const { Router } = require('express');
const { getUserHandler } = require('../handlers/userHandlers');
const { postUserHandler } = require('../handlers/userHandlers');

const userRouter = Router();

userRouter.get('/', getUserHandler);
userRouter.post('/', postUserHandler)
module.exports = userRouter;
