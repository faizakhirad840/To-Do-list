#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let userAction = await inquirer.prompt([
        {
            name: "toDoWork",
            type: "input",
            message: chalk.yellow("What do you want to add in your To Do?")
        },
        {
            name: "add",
            type: "confirm",
            message: chalk.green("Do you want to add more?"),
            default: "false",
        }
    ]);
    if (userAction.toDoWork == '') {
        console.log(chalk.red("To do list should not be empty. Please enter a value"));
    }
    else {
        todos.push(userAction.toDoWork);
        condition = userAction.add;
    }
    console.log(chalk.cyanBright("Your To-Do List:"));
    for (let i = 0; i < todos.length; i++) {
        console.log(chalk.magentaBright(`${i + 1}. ${todos[i]}`));
    }
}
