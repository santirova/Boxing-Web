const localLoginController = require("../controllers/registerLocalController/loginLocalController");

const loginLocalHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await localLoginController(email, password);
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = loginLocalHandler;
