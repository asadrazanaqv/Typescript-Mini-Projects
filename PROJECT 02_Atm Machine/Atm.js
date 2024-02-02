#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function main() {
    let transaction = await inquirer.prompt([
        {
            name: "userId",
            type: "input",
            message: chalk.bold.yellow `Enter you Username:`
        },
        {
            name: "userPin",
            type: "number",
            message: chalk.yellow.bold `Enter you PIN:`
        },
        {
            name: "AccountType",
            message: chalk.bold.italic.blue `Select Your Account Type:`,
            type: "list",
            choices: [chalk.bold.redBright `Current`, chalk.bold.redBright `Saving`]
        },
        {
            name: "transactionType",
            type: "list",
            choices: ["Cash Withdrawal", "Fast Cash"],
            message: chalk.bold.italic.blue `Select Your Transaction Type:`
        },
        {
            name: "Amount",
            type: "input",
            message: "Enter Your Amount in multiple of 500:",
            when(transaction) {
                return transaction.transactionType === `Cash Withdrawal`;
            }
        },
        {
            name: "Amount",
            type: "list",
            choices: [500, 1000, 2000, 5000, 10000, 20000],
            message: chalk.yellow `Select Your Amount:`,
            when(transaction) {
                return transaction.transactionType === `Fast Cash`;
            }
        }
    ]);
    let enteredAmount = transaction.Amount;
    let bankbalance = Math.round(Math.random() * 100000000);
    if (bankbalance >= enteredAmount) {
        console.log(chalk.bold.bgGreenBright `Transaction Succesfull \n Your Previous Balance : ${bankbalance}`);
        let balance = (bankbalance - enteredAmount);
        console.log(chalk.blueBright.bold `Your Remaining  Balance : ${balance}`);
    }
    else {
        console.log(chalk.bold.white.bgRed `You have insufficient balance \n Please Try Again \n Your Balance: ${bankbalance}`);
    }
}
;
main();
