#! /usr/bin/env node
import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0035,
        "GBP": 0.0028,
        "ETH": 0.0000022,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.22,
        "PKR": 351.53,
        "ETH": 0.00077,
        "GBP": 1
    },
    "USD": {
        "PKR": 287.22,
        "GBP": 0.82,
        "ETH": 0.00063,
        "USD": 1
    },
    "ETH": {
        "USD": 1593.06,
        "PKR": 457564.91,
        "GBP": 1301.63,
        "ETH": 1
    }
};
while (true) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "Welcome",
            message: "Welcome to my first Currency Converter Press Enter to Continue"
        },
        {
            type: "list",
            name: "from",
            choices: ["PKR", "USD", "GBP", "ETH"],
            message: "Select Currency: "
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "USD", "GBP", "ETH"],
            message: "Select the currency you want to convert"
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount which you want to convert"
        }
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(`Your conversion from ${from} to ${to} is ${result}`);
    }
    else {
        ("Invalid Inputs");
    }
    const anotherConversionAnswer = await inquirer.prompt([
        {
            type: "confirm",
            name: "anotherConversion",
            message: "Do you want to perform another conversion?",
            default: true
        }
    ]);
    if (!anotherConversionAnswer.anotherConversion) {
        console.log("Goodbye!");
        break;
    }
}
;
