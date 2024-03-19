const { check } = require('express-validator');
const validateResults = require('../middleware/validatorMiddleware.js');
const User = require('../models/user.js');

const validatorRegister = [
    check("name")
        .exists().withMessage("El nombre es obligatorio")
        .notEmpty().withMessage("El nombre no puede estar vacío")
        .isLength({ min: 3, max: 99 }).withMessage("El nombre debe tener entre 3 y 99 caracteres"),
    check('email')
        .exists().withMessage("El correo electrónico es obligatorio")
        .notEmpty().withMessage("El correo electrónico no puede estar vacío")
        .isEmail().withMessage("Debe proporcionar una dirección de correo electrónico válida")
        .custom(async (value) => {

            const user = await User.findOne({ where: { email: value } });
            if (user) {
                throw new Error("El correo electrónico ya está en uso");
            }
        }),
    check('type')
        .optional(),


    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { validatorRegister };