const { where } = require("sequelize");
const { User } = require("../../db");
const { Payments } = require("../../db");
const { Order } = require("../../db");
const { Item } = require("../../db");

const postOrderController = async (email) => {
  try {
    const userByEmail = await User.findOne({
      where: { email },
    });
    const userId = userByEmail.dataValues.id;
    console.log(userId);
    let userOrder = await Order.findOne({
      where: {
        UserId: userId,
        status: "PENDIENTE",
      },
      include: {
        model: Item,
        include: Payments,
      },
    });
    if (!userOrder) {
      userOrder = await Order.create(
        {
          UserId: userId,
          status: "PENDIENTE",
        },
        {
          include: [
            {
              model: Item,
              include: Payments,
            },
          ],
        }
      );
    }
    return userOrder;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postOrderController };
