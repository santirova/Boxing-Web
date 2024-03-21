// indexRouter.js
<<<<<<< HEAD
const { Router } = require('express');
const { Payments } = require('../db');
const { paymentsData } = require('../../api');
const paymentsRouter = require('./paymentsRouter');
const userRouter = require('./userRouter');
=======
const { Router } = require("express");
const { Payments } = require("../db");
const { paymentsData } = require("../../api");
const paymentsRouter = require("./paymentsRouter");
>>>>>>> fd066e3ca39b946f3191dba5742e6243cff51d34

const router = Router();

router.use("/payments", paymentsRouter);

<<<<<<< HEAD
router.use('/user', userRouter);

router.use('/api', async (req, res) => {
    const allPayments = await Payments.findAll();

    if (!allPayments.length) {
        await Payments.bulkCreate(paymentsData);
        res.status(200).json("Abonos Cargados");
    } else {
        res.status(200).json("Abonos ya han sido cargados");
    }
=======
router.use("/api", async (req, res) => {
  const allPayments = await Payments.findAll();
>>>>>>> fd066e3ca39b946f3191dba5742e6243cff51d34

  if (!allPayments.length) {
    await Payments.bulkCreate(paymentsData);
    res.status(200).json("Abonos Cargados");
  } else {
    res.status(200).json("Abonos ya han sido cargados");
  }
});

module.exports = router;
