#! /usr/bin/env node

import inquirer from "inquirer";
let todos = [];
let loop = true;
const welcome = await inquirer.prompt([
    {
        type: "input",
        name: "welcomed",
        message: "Welcome to My first Todo list Press Enter to continue"
    }
]);
while (loop) {
    const codes = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false
        }
    ]);
    const { addmore, TODO } = codes;
    // console.log(codes);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
// console.log(todos);
if (todos.length > 0) {
    console.log("Your Todo list:");
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log("No Todos Founds!!!");
}
