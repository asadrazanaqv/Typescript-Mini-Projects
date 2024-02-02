#! /usr/bin/env node
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const ans = await inquirer.prompt({
    type: "number",
    name: "usrinput",
    message: chalk.bold.blue("Please enter the amount of seconds"),
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return "Seconds must be in 60";
        }
        else {
            return true;
        }
    },
});
let input = ans.usrinput;
function startTime(val) {
    const ftime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(ftime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk.bold.red("Timer has expired!!!!!"));
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(chalk.bold.green(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`));
    }, 1000);
}
startTime(input);
