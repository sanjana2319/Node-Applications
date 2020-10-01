require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5f76374868cdb93dfcf87ced").then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false })
        .then((result) => {
            console.log(result);
        })
        .catch((e) => {
            console.log(e);
        });
});
