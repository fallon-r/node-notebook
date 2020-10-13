

const validator = require('validator');
const chalk = require("chalk");
const notes = require("./notes.js");

console.log(chalk.green(notes()))


console.log(validator.isEmail("a@a.com"))