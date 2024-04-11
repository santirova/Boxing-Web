const express = require("express");
const adminRouter = express.Router();
const { getAllPaymentsHandlers } = require("../handlers/adminHanlders");
const { getUserHandler } = require("../handlers/adminHanlders");
const authMiddleware = require("../middleware/session");

adminRouter.get("/user", authMiddleware, getUserHandler);
adminRouter.get("/payments", authMiddleware, getAllPaymentsHandlers);

module.exports = adminRouter;
