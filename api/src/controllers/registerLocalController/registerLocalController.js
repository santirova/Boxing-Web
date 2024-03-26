const { User } = require('../../db');
const { tokenSign } = require('../../utils/handleJsonWebToken');
const { encrypt } = require('../../utils/handlePassword');

const registerLocalController = async (req, res) => {
    const { name, email, type, status, password: plainPassword } = req.body;
    try {

        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        const encryptedPassword = await encrypt(plainPassword);

        const newUser = await User.create({ name, email, type, status, password: encryptedPassword });
        newUser.set('password', undefined, { srtrict: false })

        const data = {
            token: await tokenSign(newUser),
            user: newUser
        }

        res.status(201).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = registerLocalController;
