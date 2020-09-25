// const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

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
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

yargs.command({
    command: "remove",
    describe: "Remove the note",
    builder: {
        title: {
            describe: "Remove title",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

yargs.command({
    command: "list",
    describe: "Displaying list",
    handler(argv) {
        notes.listNotes();
    },
});

yargs.command({
    command: "read",
    builder: {
        title: {
            describe: "Remove title",
            demandOption: true,
            type: "string",
        },
    },

    handler(argv) {
        notes.readNote(argv.title);
    },
});
yargs.parse();
// console.log(yargs.argv);
