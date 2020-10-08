const mongoose = require("mongoose");
const validator = require("validator");
const auth = require("../middleware/auth");

const Task = mongoose.model("Task", {
    description: {
        type: String,
        trim: true,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
});

module.exports = Task;
