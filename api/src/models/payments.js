const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Payments', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allownNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allownNull: true,
        }
    }
    )
}