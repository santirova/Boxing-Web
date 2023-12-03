require('dotenv').config();
const { Sequelize } = require('sequelize');
const PaymentsFunction = require('./models/payments.js')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false }
);

PaymentsFunction(sequelize);

const { Payments } = sequelize.models;

module.exports = {
    sequelize,
    Payments,
    ...sequelize.models,
};
