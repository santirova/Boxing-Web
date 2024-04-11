const { Router } = require("express");
const { postUserHandler } = require("../handlers/userHandlers");

const auth0Router = Router();

auth0Router.post("/", postUserHandler);

module.exports = auth0Router;
