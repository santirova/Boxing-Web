require("dotenv").config();
const { Sequelize } = require("sequelize");
const PaymentsFunction = require("./models/payments.js");
const OrderFunction = require("./models/order.js");
const UserFunction = require("./models/user.js");
const ItemFunction = require("./models/item.js");
const pg = require("pg");

const { DB_URL } = process.env;

const sequelize = new Sequelize(DB_URL, {
  logging: false,
  dialectModule: pg
});

PaymentsFunction(sequelize);
OrderFunction(sequelize);
UserFunction(sequelize);
ItemFunction(sequelize);

const { Payments, Order, User, Item } = sequelize.models;
User.belongsToMany(Payments, { through: "UserPayments" });
Payments.belongsToMany(User, { through: "UserPayments" });

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Item);
Item.belongsTo(Order);

Payments.hasMany(Item);
Item.belongsTo(Payments);

module.exports = {
  sequelize,
  ...sequelize.models,
};
