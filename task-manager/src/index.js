const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const { response } = require("express");
const e = require("express");
const { update } = require("./models/user");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send("GET Requests is disabled");
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send("Under Maintenance");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is running at port ", port);
});

// const main = async () => {
//     // const task = await Task.findById();
//     // await task.populate("owner").execPopulate("5f7c199e1174131b90427f62");

//     const user = await User.findById("5f7c199e1174131b90427f62");
//     await user.populate("tasks").execPopulate();
//     console.log(task.owner);
// };

// main();
