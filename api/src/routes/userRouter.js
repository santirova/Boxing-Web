const { getUserHandler } = require('../handlers/userHandlers')
const { Router } = require('express');

const userRouter = Router();

userRouter.get('/user', getUserHandler);


module.exports = userRouter;