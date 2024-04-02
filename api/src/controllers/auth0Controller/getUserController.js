const { User } = require("../../db");

const getUserController = async () => {
  try {
    const allUsers = await User.findAll();
    const modifiedUsers = allUsers.map((user) => {
      const modifiedUser = user.toJSON();
      delete modifiedUser.password;
      return modifiedUser;
    });
    return modifiedUsers;
  } catch (error) {
    throw new Error("Error al cargar datos: " + error.message);
  }
};

module.exports = getUserController;
