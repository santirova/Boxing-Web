<<<<<<< HEAD
require('dotenv').config();
const { Sequelize } = require('sequelize');
const PaymentsFunction = require('./models/payments.js');
const OrderFunction = require('./models/order.js');
const UserFunction = require('./models/user.js');
const ItemFunction = require('./models/item.js');

=======
require("dotenv").config();
const { Sequelize } = require("sequelize");
const PaymentsFunction = require("./models/payments.js");
>>>>>>> fd066e3ca39b946f3191dba5742e6243cff51d34

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

PaymentsFunction(sequelize);
OrderFunction(sequelize);
UserFunction(sequelize);
ItemFunction(sequelize);

const { Payments, Order, User, Item } = sequelize.models;

User.hasMany(Order);
Order.belongsTo(User);

Payments.hasMany(Item);
Item.belongsTo(Payments);

module.exports = {
<<<<<<< HEAD
    sequelize,
    ...sequelize.models,
=======
  sequelize,
  Payments,
  ...sequelize.models,
>>>>>>> fd066e3ca39b946f3191dba5742e6243cff51d34
};
