require("../src/db/mongoose");
const { count } = require("../src/models/user");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5f75c854ce51fb28bc0ff4a7", { name: "Sanjana" })
//     .then((user) => {
//         console.log(user);
//         return User.countDocuments({ name: "Sanjana" });
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

const UpdateAgeCount = async (id, name) => {
    const user = await User.findByIdAndUpdate(id, { name });
    const countDocuments = await User.countDocuments({ name });
    return count;
};

UpdateAgeCount("5f75c854ce51fb28bc0ff4a7", "Jasmine")
    .then((count) => {
        console.log(count);
    })
    .catch((e) => {
        console.log(e);
    });
