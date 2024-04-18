const { or, where } = require("sequelize");
const { Order } = require("../../db");

const putOrderController = async ({
  orderId,
  order_status,
  status,
  payment_date,
  payment_id,
  payment_status_detail,
}) => {
  try {
    if (orderId) {
      const orderToBeModified = await Order.findOne({
        where: {
          id: orderId,
        },
      });

      if (
        orderToBeModified &&
        order_status &&
        !status &&
        !payment_status_detail &&
        !payment_date &&
        !payment_id
      ) {
        await Order.update(
          { order_status },
          {
            where: {
              id: orderToBeModified.dataValues.id,
            },
          }
        );
      }
      if (orderToBeModified && !order_status && status) {
        await Order.update(
          { status, payment_status_detail, payment_id, payment_date },
          {
            where: {
              id: orderToBeModified.dataValues.id,
            },
          }
        );
      }
      return "Order actualizada correctamente";
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { putOrderController };
