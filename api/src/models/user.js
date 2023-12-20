const { DataTypes, DATE } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allownNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: {
                    msg: "Debe proporcionar una dirección de correo electrónico válida",
                },
            },
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "Client",
            validate: {
                isIn: {
                    args: [["Client", "Admin"]],
                    msg: "El tipo de usuario debe ser 'Client' o 'Admin'",
                },
            },
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    },
        { timestamps: false }
    );
};