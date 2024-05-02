// REQUIRE
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/indexRouter.js");

// EXPRESS()
const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());

// MIDDLEWARE: CORS CONFIGURATION
app.use(cors());
app.options("*", cors()); // Habilita las solicitudes OPTIONS para CORS

// MIDDLEWARE PARA CONFIGURAR LOS HEADERS CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// MIDDLEWARE PARA LAS RUTAS
app.use("/", router);

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  console.error(err);
  res.status(status).send(message);
});

// EXPORTS
module.exports = app;
