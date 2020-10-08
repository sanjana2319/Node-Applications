const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
    try {
        console.log(User);
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, "mynodejscourse");
        const user = await User.find({});
        console.log(user);

        if (!user) {
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({ error: "Please authenticate" + e.message });
    }
};

module.exports = auth;
