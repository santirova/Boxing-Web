const { User } = require("../../db");

const postUserController = async (name, email, type, status) => {
    let newUser = {};
    console.log(newUser);
    if (email === "silviojuarez60@gmail.com" || email === "cnmonsalvo@gmail.com") {
        type = "Admin"
    }

    if (type === "guest") {
        newUser = await User.create({ name, email, type, status });
    } else {
        const userByEmail = await User.findAll({
            where: { email: email },
        });
        if (!userByEmail.length) {
            newUser = await User.create({ name, email, type, status });
        }
    }
    return newUser.dataValues;

}

module.exports = postUserController;