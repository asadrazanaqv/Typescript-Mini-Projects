#! /usr/bin/env node
import inquirer from "inquirer";

let todos : string[] = [];
let loop  = true;

while(loop){
    const answers: {
        TODO : string,
        addmore : boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: `What do you want to add in your "TODO LIST" `
        },
        {
            type: "confirm",
            name: "addmore",
            message: `Do you want to add more items in your "TODO LIST" ? YES OR NO ?`,
            default: "false"
        }
    ])
    const {TODO , addmore } = answers;
    loop = addmore
    if(TODO){
        todos.push(TODO)
    }else{
        console.log("kindly add valid input")
    }
} 
if (todos.length > 0) {
    console.log("Your Todo List !");
    
    todos.forEach(todo => {
        console.log(todo);
        
    });
} else {
    console.log("There is No `TODO` in your todo list !");
    
}

