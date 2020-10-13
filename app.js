
const chalk = require("chalk");
const notes = require("./notes.js");

const command = process.argv[2]


if (command === 'add'){
    console.log(chalk.greenBright.bold.inverse("Adding Note!"))
} else if (command === "remove"){
    console.log(chalk.redBright.bold.inverse("Removing note!"))
}