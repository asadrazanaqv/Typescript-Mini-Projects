#!/usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";


chalkAnimation.rainbow('WELCOME TO ASAD PROGRAM');

async function main() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(chalk.blueBright("Let's Start Word Counting:"));

    const answers = await inquirer.prompt([
        {
            name: "paragraph",
            message: "Enter Your Paragraph:",
            type: "input"
        }
    ]);


    let counting = answers.paragraph.trim().split(/\s+/);

    console.log(`Your Paragraph word Count is ${counting.length}`);
}

main();
