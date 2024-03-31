const { Router } = require("express");
const { getUserHandler } = require("../handlers/userHandlers");
const { postUserHandler } = require("../handlers/userHandlers");
const authMiddleware = require("../middleware/session");

const auth0Router = Router();

auth0Router.get("/", authMiddleware, getUserHandler);
auth0Router.post("/", postUserHandler);
module.exports = auth0Router;
