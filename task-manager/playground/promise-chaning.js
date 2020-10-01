require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("5f75c854ce51fb28bc0ff4a7", { name: "Sanjana" })
    .then((user) => {
        console.log(user);
        return User.countDocuments({ name: "Sanjana" });
    })
    .then((result) => {
        console.log(result);
    })
    .catch((e) => {
        console.log(e);
    });
