// const { compare } = require('../../utils/handlePassword');
// const { tokenSing } = require('../../utils/handleJsonWebToken');
// const User = require('../../db');

const localLoginController = (req, res) => {
    try {
        res.send("Ruta login");
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};



module.exports = localLoginController;