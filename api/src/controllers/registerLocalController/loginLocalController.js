const { compare } = require("../../utils/handlePassword");
const { tokenSign } = require("../../utils/handleJsonWebToken");
const { User } = require("../../db");

const localLoginController = async (email, password) => {
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    throw new Error("El usuario no existe");
  }
  const hashPassword = user.get("password");
  const check = await compare(password, hashPassword);

  if (!check) {
    throw new Error("Error de autenticacion");
  }

  user.set("password", undefined, { strict: false });

  const data = {
    token: await tokenSign(user),
    user,
  };

  return data;
};

module.exports = localLoginController;
