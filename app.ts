import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright("============================== WELCOME TO MY TO-DO LIST ========================================"));


let todos: any[] = []
let condition = true;

while(condition){
    let features = await inquirer.prompt({
        name : "userAction",
        type : "list",
        message : chalk.blueBright("What do you want to perform?"),
        choices : ["add", "delete", "update"]
    })

    if(features.userAction == "add"){
        let addTask = await inquirer.prompt({
            name : "addQuestion",
            type : "input",
            message : chalk.cyanBright("What would you like to add in your to-do list?")
        })
        
        if(addTask.addQuestion == ''){
            console.log(chalk.gray("To do list should not be empty. Please enter a value"));
        }
        else{
            todos.push(addTask.addQuestion)
        }

    }

    if(features.userAction == "delete"){
        if(todos.length === 0) {
            console.log(chalk.redBright("No tasks to delete or update."));
        }
        else{

        let deleteTask = await inquirer.prompt({
            name : "deleteQuestion",
            type : "list",
            message : chalk.yellowBright("What do you want to delete in your to-do list?"),
            choices : todos
        })

        const deleteTaskIndex = todos.indexOf(deleteTask.deleteQuestion)
        todos.splice(deleteTaskIndex,1)
    }

    }
    
    if(features.userAction == "update"){

        if(todos.length === 0) {
            console.log(chalk.redBright("No tasks to delete or update."));
        }
        else{

        let updateTask = await inquirer.prompt({
            name : "updateQuestion",
            type : "list",
            message : chalk.magentaBright("What do you want to update in your to-do list?"),
            choices : todos
        })

        let taskIndex = todos.indexOf(updateTask.updateQuestion)

        let updatedTask = await inquirer.prompt({
            name : "updatedValue",
            type : "input",
            message : chalk.yellow("Enter the updated value:"),
        })

        todos[taskIndex] = updatedTask.updatedValue

    }
}
    

    let  perform =await inquirer.prompt ({
        name : "performMore",
        type : "confirm",
        message : chalk.magenta("Would you like to perform more actions to your to-do list?")
    })


    console.log(chalk.cyan("Your To-Do list:"));
    for (let i = 0; i < todos.length; i++) {
        console.log(chalk.green(`${i + 1}. ${todos[i]}`));
    }
    condition = perform.performMore


    
}




