const postUserController = require('../controllers/userController/postUserController.js');

const getUserHandler = async (req, res) => {
    try {
        const allUser = await postUserController();
        res.status(200).send(allUser);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = getUserHandler;