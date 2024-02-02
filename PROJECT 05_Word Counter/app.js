#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { name: "Sentence",
        type: "input",
        message: "Enter Text to count words in your sentence: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(`Your Sentence word count is ${words.length} `);
