#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let conversion = {
    "PKR":{
        "USD" : 0.0034,
        "INR" : 0.28 ,
        "GBP" : 0.0027,
        "EUR" : 0.0032,
        "PKR" : 1
    },
    "USD":{
        "USD" : 1,
        "INR" : 83.13 ,
        "GBP" : 0.81,
        "EUR" : 0.94,
        "PKR" : 296.92
    },
    "INR":{
        "USD" : 0.012,
        "INR" : 1,
        "GBP" : 0.0097,
        "EUR" : 0.011,
        "PKR" : 3.57
    },
    "GBP":{
        "USD" : 1.24,
        "INR" : 103.04,
        "GBP" : 1,
        "EUR" : 1.16,
        "PKR" : 368.06
    },
    "EUR":{
        "USD" : 1.07,
        "INR" : 88.70,
        "GBP" : 0.86,
        "EUR" : 1,
        "PKR" : 316.79
    },
}

const answere:{
    from: "USD"|"INR"|"GBP"|"EUR"|"PKR",
    to: "USD"|"INR"|"GBP"|"EUR"|"PKR"
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["USD","INR","GBP","EUR","PKR"],
        message: chalk.blueBright.bold `Select your currency:`
    },
    {
        type: "list",
        name: "to",
        choices: ["USD","INR","GBP","EUR","PKR"],
        message: chalk.blueBright.bold `Select your conversion currency:`
    },
    {
        type: "number",
        name: "amount",
        message: chalk.bgBlueBright.bold `Enter your Amount:`
    },
])

const {from, to, amount} = answere;


if(from && to && amount) {
    let result = conversion[from][to] * amount
    console.log(`Your conversion from ${from} to ${to} is: \n ${chalk.greenBright.bold(result)}`);
    
} else {
    console.log(chalk.redBright.italic`Invalid Input`);
    
}