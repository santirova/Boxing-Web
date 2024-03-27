const { compare } = require('../../utils/handlePassword');
const { tokenSign } = require('../../utils/handleJsonWebToken');
const { User } = require('../../db');

const localLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).send('El usuario no existe');
        }
        const hashPassword = user.get('password');
        const check = await compare(password, hashPassword);

        if (!check) {
            return res.status(401).send('Error de autenticacion')
        };

        user.set('password', undefined, { strict: false });

        const data = {
            token: await tokenSign(user),
            user
        };

        return res.send({ data });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
};



module.exports = localLoginController;