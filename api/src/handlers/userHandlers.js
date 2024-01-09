const getUserController = require('../controllers/userController/getUserController.js');
const postUserController = require('../controllers/userController/postUserController.js');

const getUserHandler = async (req, res) => {
    try {
        const allUser = await getUserController();
        res.status(200).send(allUser);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const postUserHandler = async (req, res) => {
    const { name, email, type, status } = req.body;
    console.log(req.body);
    try {
        const newUser = await postUserController(name, email, type, status);
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = { getUserHandler, postUserHandler };