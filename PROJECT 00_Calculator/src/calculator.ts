#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";

import { Addition } from "./add.js"
import { Subtraction } from "./subtraction.js"
import { Multiplication } from "./multiplication.js"
import { Division } from "./division.js"
import { type } from "os"


async function calculator() {

    // I added a welcome meesage display functona

    const welcome = await inquirer.prompt({
        message: "Press Any Key To Continue",
        type: "input",
        name:"Welcome"
    })

const num1 = await inquirer.prompt({
    message: "Enter Your First Number",
    type: "number",
    name: "firstnum"
})


const Operator = await inquirer.prompt({
    message: "Operators(+,-,*,/) select operator",
    type: "list",
    choices:["+","-","*","/"],
    name:"opera"
})

const num2 = await inquirer.prompt({
    message: "Enter Your Second Number",
    type: "number",
    name: "secondnum"
})

welcome;

let result;

if (Operator.opera === '+') {
    result = num1.firstnum + num2.secondnum;
} else if (Operator.opera === '-') {
    result = num1.firstnum - num2.secondnum;
} else if (Operator.opera === '*') {
    result = num1.firstnum * num2.secondnum;
} else if (Operator.opera === '/') {
    result = num1.firstnum / num2.secondnum;
}

console.log(`Result: ${chalk.green(result)}`);
}


calculator();