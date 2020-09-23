// const validator = require("validator");
const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");

yargs.version("1.1.0");
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body content",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body);
    },
});

yargs.command({
    command: "remove",
    describe: "Remove the note",
    handler: function () {
        console.log("Remove the note");
    },
});

yargs.command({
    command: "list",
    describe: "Displaying list",
    handler: function () {
        console.log("List:");
    },
});

yargs.command({
    command: "read",
    describe: "Reading the list",
    handler: function () {
        console.log("Reading the list");
    },
});
yargs.parse();
// console.log(yargs.argv);
