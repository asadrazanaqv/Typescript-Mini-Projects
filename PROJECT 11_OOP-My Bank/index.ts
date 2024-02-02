#! /usr/bin/env node

import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";


// Customer Class
class Customer {
    firstName: string
    lastName: string
    age: number
    gender: string
    mobNumber: number
    accNumber: number

    constructor(
        fName: string,
        lName: string,
        age: number,
        gen: string,
        mob: number,
        acc: number
    ) {
        this.firstName = fName
        this.lastName = lName
        this.age = age
        this.gender = gen
        this.mobNumber = mob
        this.accNumber = acc

    }
}

// Interface for Bank Account
interface BankAccount {
    accNumber: number,
    balance: number
}

// Class Bank

class Bank {
    customer: Customer[] = [];
    account: BankAccount[] = [];

    addCustomer(obj: Customer) {
        this.customer.push(obj);
    }

    addAccountNumber(obj: BankAccount) {
        this.account.push(obj);
    }

    transaction(accobj: BankAccount) {
        let NewAccounts = this.account.filter(
            (acc) => acc.accNumber !== accobj.accNumber
        );

        this.account = [...NewAccounts, accobj];
    }
}

let myBank = new Bank();


// customer creation using Faker
for (let i: number = 1; i <= 5; i++) {
    let fName = faker.person.firstName(`male`)
    let lName = faker.person.lastName()
    let num = parseInt(faker.phone.number()); //"3#########"
    const cus = new Customer(fName, lName, 25 + i, "male", num, 1000 + i)
    myBank.addCustomer(cus);
    myBank.addAccountNumber({
        accNumber: cus.accNumber, balance: 1000 *
            i
    });
}


let a = "There are only 5 Account Holder in our Account, Which is 1001 to 1005";
console.log(chalk.bgWhiteBright.blueBright.bold.italic(a));




// Bank Functionality

async function BankService(bank: Bank) {
    do{
        
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Kindly select the Service you want",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit","Exit"]
        });
    
    
        //    view balance
        if (service.select == "View Balance") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Kindly enter your Account Number:",
            });
    
            let account = myBank.account.find((acc) => acc.accNumber == res.num)
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number!!!!!!"));
            }
            if (account) {
                let name = myBank.customer.find((item) => item.accNumber == account?.accNumber)
                console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} Your Account Balance is ${chalk.bold.blueBright(`$${account.balance}`
                )}`
                );
    
            }
        }
    
    
    
        // Cash Wihtdraw
        if (service.select == "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Kindly enter your Account Number:",
            });
    
            let account = myBank.account.find((acc) => acc.accNumber == res.num)
    
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number!!!!!!"));
            }
    
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Kindly Enter Your Amount",
                    name: "dollar"
                });
    
                if (ans.dollar > account.balance) {
                    console.log(chalk.red.bold("Insufficent Balance!!!"));
                }

                if (ans.dollar < account.balance) {
                    console.log(chalk.greenBright.bold("Transaction Successfull !!!"));
                
                    let newBalance = account.balance - ans.dollar
                    console.log(`Your Remaing Account Balance is $${newBalance} `);
                    
    
                }
    
                // // Transaction Method
    
    
                 //bank.transaction({ accNumber: account.accNumber, balance: newBalance });
    
    
    
    
            }
        }
    
    
        // Cash Deposit
        if (service.select == "Cash Deposit") {
    
            if (service.select == "Cash Deposit") {
                let res = await inquirer.prompt({
                    type: "input",
                    name: "num",
                    message: "Kindly enter your Account Number:",
                });
    
                let account = myBank.account.find((acc) => acc.accNumber == res.num)
    
                if (!account) {
                    console.log(chalk.red.bold.italic("Invalid Account Number!!!!!!"));
                }
    
                if (account) {
                    let ans = await inquirer.prompt({
                        type: "number",
                        message: "Kindly Enter Your Amount",
                        name: "dollar"
                    });
                    let newBalance = account.balance + ans.dollar;
    
                    // Transaction Method
    
                    
                //    bank.transaction({ accNumber: account.accNumber, balance: newBalance });
    
                    console.log(`$${newBalance}`);
    
    
                }
            }
        }
        // Exit
        if (service.select == "Exit"){
            return;
        }
    }
    while(true)
    
}
    
BankService(myBank);