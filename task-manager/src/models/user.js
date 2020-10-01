const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    // age: {
    //     type: Number,
    //     default: 0,
    //     validate(value) {
    //         if (age < 0) {
    //             throw new Error("Age must be greater than 0");
    //         }
    //     },
    // },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email Is valid");
            }
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if (value.includes("password")) {
                throw new Error('Password must not be "password"');
            }
        },
    },
});

module.exports = User;
