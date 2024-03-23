const { encrypt } = require('../../utils/handlePassword');
const { tokenSign } = require('../../utils/handleJsonWebToken');
const { User } = require('../../db');

const registerController = async (req, res) => {
    try {
        const { name, email, password, type, status } = req.body;

        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).send({ error: 'El correo electrónico ya está registrado.' });
        }

        // Encriptar la contraseña antes de guardarla en la base de datos
        const hashedPassword = await encrypt(password);

        // Crear un nuevo usuario en la base de datos
        const newUser = await User.create({ name, email, password: hashedPassword, type, status });

        // Generar el token JWT para el nuevo usuario
        const token = await tokenSign(newUser);

        // Enviar la respuesta con el token y los datos del usuario
        res.status(201).send({ token, user: newUser });
    } catch (error) {
        console.error('Error en registerController:', error);
        res.status(500).send({ error: 'Error interno del servidor.' });
    }
};

module.exports = { registerController };
