#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("WELCOME TO CLI BASED GAME");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function startGame() {
    let random = Math.random() * 10;
    let randomNumber = Math.round(random);
    const AskQuestion = await inquirer.prompt({
        name: "Q1",
        message: chalk.bold.yellowBright("Guess The Number Between 0 to 10"),
        type: "list",
        choices: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]
    });
    const { Q1 } = AskQuestion;
    console.log(`Your Guess: ${Q1} \n System Generated Number: ${randomNumber}`);
    if (Q1 == randomNumber) {
        console.log(chalk.bold.green `Your Answer is Correct ! \n ""Congratulation's You Win""`);
    }
    else {
        console.log(chalk.bold.redBright `Your Answer is Incorrect ! \n ""Sorry You Lose!""`);
    }
}
;
//  startGame();
async function playAgain() {
    do {
        await startGame();
        var again = inquirer.prompt({
            name: "restart",
            message: chalk.bgBlackBright `Do You PLAY AGAIN! \n Press Y for Yes & N for No`,
            type: "input"
        });
    } while ((await again).restart == `y` || (await again).restart == `yes` || (await again).restart == `YES` || (await again).restart == `Y` || (await again).restart == `Yes`);
}
;
playAgain();
