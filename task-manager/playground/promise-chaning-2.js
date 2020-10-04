require("../src/db/mongoose");
const { count } = require("../src/models/task");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f76374868cdb93dfcf87ced").then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false })
//         .then((result) => {
//             console.log(result);
//         })
//         .catch((e) => {
//             console.log(e);
//         });
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteTaskAndCount("5f76188e5cb7e13350576c1c")
    .then((count) => {
        console.log(count);
    })
    .catch((e) => {
        console.log(e);
    });
