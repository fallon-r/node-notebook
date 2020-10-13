
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");


// Add Command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder:{
        title:{
            describe: "Note Title",
            demandOption : true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption : true,
            type: "string"
        }
    },
    handler: function (argv){
        notes.addNote(argv.title, argv.body)

    }
})
// -------
// Remove Command
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    handler: function (){
        console.log(chalk.red.bold.inverse("Removing a note..."))
    }
})
// --------
// List Command
yargs.command({
    command: 'list',
    describe: "Lists available notes",
    handler: function (){
        console.log(chalk.yellowBright.bold.inverse("Here are all of your notes..."))
    }
})
// -------
// Read Command
yargs.command({
    command: 'read',
    describe: "Read Notes",
    handler: function (){
        console.log(chalk.blueBright.bold.inverse("Reading your notes:"))
    }
})
// -------

yargs.parse()