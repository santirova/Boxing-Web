const { User } = require('../../db');

const getUserController = async () => {
    try {
        const allUser = await User.findAll();
        return allUser;
    } catch (error) {
        throw new Error("Error al cargar datos: " + error.message);
    }
}

module.exports = getUserController