const db = require("../db/db");

const getUsersHandler = async (req, res) => {
    try {
        const users = await db.select("*").from("user");
        return res
            .status(200)
            .json({ data: users });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getUsersHandler
} 