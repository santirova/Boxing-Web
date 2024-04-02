const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Item", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    final_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
};
