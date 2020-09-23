// const validator = require("validator");
const chalk = require("chalk");

const getNotes = require("./notes.js");

const msg = getNotes();
console.log(msg);
// console.log(validator.isURL("sanjana.com"));
console.log(chalk.bold.inverse.red("Success!"));
