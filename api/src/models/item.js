const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Item', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allownNull: false,
        }
    })
}