const { Router } = require("express");
const { Payments } = require("../db");
const { paymentsData } = require("../../api");

const router = Router();

router.use("/api", async (req, res) => {
  const allPayments = await Payments.findAll();

  if (!allPayments.length) {
    await Payments.bulkCreate(paymentsData);

    res.status(200).json("Abonos Cargados");
  } else {
    res.status(200).json("Abonos ya han sido cargados");
  }
});

module.exports = router;
