#! /usr/bin/env node
import inquirer from "inquirer";
const balance = Math.floor(Math.random() * 1000000);
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Kindly Enter Your ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter Your PIN"
    },
    {
        type: "list",
        name: "typeofaccount",
        choices: ["Current", "Saving", "Balance Inquiry"],
        message: "Kindly select your Account Type"
    },
    {
        type: "list",
        name: "typeoftransaction",
        choices: ["FastCash", "Withdraw"],
        message: "Kindly select your transaction",
        when(answers) {
            return answers.typeofaccount === "Current" || answers.typeofaccount === "Saving";
        },
    },
    {
        type: "input",
        name: "BalanceInquiry",
        message: "Press Enter to check Your Balance",
        when(answers) {
            return answers.typeofaccount === "Balance Inquiry";
        },
    },
    {
        type: "list",
        name: "FastCash",
        choices: [5000, 10000, 15000, 20000],
        message: "Kindly select Amount",
        when(answers) {
            return answers.typeoftransaction === "FastCash";
        },
    },
    {
        type: "number",
        name: "withdrawmethod",
        message: "Kindly Enter Your Amount",
        when(answers) {
            return answers.typeoftransaction === "Withdraw";
        },
    }
]);
// console.log(answers);
if (answers.typeofaccount === "Balance Inquiry") {
    console.log("Your balance is:", balance);
}
else if (answers.typeoftransaction === "FastCash") {
    const selectedAmount = answers.FastCash;
    if (balance >= selectedAmount) {
        const remaining = balance - selectedAmount;
        console.log("You took", selectedAmount, "from", balance);
        console.log("Your remaining balance is:", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
else if (answers.userID & answers.userPin) {
    const inputamount = answers.withdrawmethod;
    if (balance >= inputamount) {
        const remaining = balance - inputamount;
        console.log("You took", inputamount, "from", balance);
        console.log("Your remaining balance is:", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
;
