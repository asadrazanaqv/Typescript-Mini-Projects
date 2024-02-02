import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(n) {
        this.name = n;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(n) {
        this.name = n;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let username = await inquirer.prompt({
    type: "input",
    name: "uname",
    message: "Enter Your Name:",
});
let Name = username.uname;
console.log(`Welcome ${Name}`);
let player = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Player:",
    choices: ["Goku", "Gohan", "Vegeta", "Trunks"]
});
console.log(player.select);
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent:",
    choices: ["Frieza", "Cell", "Buu", "Goku Black"]
});
console.log(opponent.select);
let p1 = new Player(player.select);
let o1 = new Opponent(opponent.select);
console.log(p1, o1);
let vs = `${chalk.bold.green(player.select)}  VS   ${chalk.bold.redBright(opponent.select)}`;
console.log(vs);
do {
    // Goku
    if (player.select == "Goku") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select One:",
            choices: ["SenzoBean", "Attack", "Fly..."]
        });
        if (ask.opt == "SenzoBean") {
            console.log(`Eating...`);
            p1.fuelIncrease();
            console.log(chalk.bold.green `${player.select} fuel is ${p1.fuel}`);
            console.log(chalk.bold.red `${opponent.select} fuel is ${o1.fuel}`);
        }
        if (ask.opt == "Attack") {
            console.log(chalk.bgBlueBright.bold.white(`Kamehameha`));
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red `${player.select} fuel is ${p1.fuel}`);
                console.log(chalk.bold.green `${opponent.select} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.blue(`Sorrry ${Name}\n You Loose...!! \n Better Luck ... Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green `${player.select} fuel is ${p1.fuel}`);
                console.log(chalk.bold.red `${opponent.select} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.bgMagenta(`!!! CONGRATULATION ${Name} !!! \n YOU WIN...!!`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Fly...") {
            console.log(chalk.bold.blue(`Sorrry ${Name} \n You Loose...!! \n Better Luck ... Next Time`));
            process.exit();
        }
    }
    // Vegeta
    if (player.select == "Vegeta") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select One:",
            choices: ["SenzoBean", "Attack", "Fly..."]
        });
        if (ask.opt == "SenzoBean") {
            console.log(`Eating...`);
            p1.fuelIncrease();
            console.log(chalk.bold.green `${player.select} fuel is ${p1.fuel}`);
            console.log(chalk.bold.red `${opponent.select} fuel is ${o1.fuel}`);
        }
        if (ask.opt == "Attack") {
            console.log(chalk.bgYellowBright.bold.blue(`Final Flash`));
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red `${player.select} fuel is ${p1.fuel}`);
                console.log(chalk.bold.green `${opponent.select} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.blue(`Sorrry ${Name}\n You Loose...!! \n Better Luck ... Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green `${player.select} fuel is ${p1.fuel}`);
                console.log(chalk.bold.red `${opponent.select} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.bgMagenta(`!!! CONGRATULATION ${Name} !!! \n YOU WIN...!!`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Fly...") {
            console.log(chalk.bold.blue(`Sorrry ${Name} \n You Loose...!! \n Better Luck ... Next Time`));
            process.exit();
        }
    }
    // Gohan
    if (player.select == "Gohan") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select One:",
            choices: ["SenzoBean", "Attack", "Fly..."]
        });
        if (ask.opt == "SenzoBean") {
            console.log(`Eating...`);
            p1.fuelIncrease();
            console.log(chalk.bold.green `${player.select} fuel is ${p1.fuel}`);
            console.log(chalk.bold.red `${opponent.select} fuel is ${o1.fuel}`);
        }
        if (ask.opt == "Attack") {
            console.log(chalk.bgBlueBright.bold.red(`Special Beam Canon`));
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red `${player.select} fuel is ${p1.fuel}`);
                console.log(chalk.bold.green `${opponent.select} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.blue(`Sorrry ${Name}\n You Loose...!! \n Better Luck ... Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green `${player.select} fuel is ${p1.fuel}`);
                console.log(chalk.bold.red `${opponent.select} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.bgMagenta(`!!! CONGRATULATION ${Name} !!! \n YOU WIN...!!`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Fly...") {
            console.log(chalk.bold.blue(`Sorrry ${Name} \n You Loose...!! \n Better Luck ... Next Time`));
            process.exit();
        }
    }
    //Trunks
    if (player.select == "Trunks") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "Select One:",
            choices: ["SenzoBean", "Sword Attack", "Fly..."]
        });
        if (ask.opt == "SenzoBean") {
            console.log(`Eating...`);
            p1.fuelIncrease();
            console.log(chalk.bold.green `${player.select} fuel is ${p1.fuel}`);
            console.log(chalk.bold.red `${opponent.select} fuel is ${o1.fuel}`);
        }
        if (ask.opt == "Sword Attack") {
            console.log(chalk.bgWhiteBright.bold.gray(`Sword Attack`));
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red `${player.select} fuel is ${p1.fuel}`);
                console.log(chalk.bold.green `${opponent.select} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.blue(`Sorrry ${Name}\n You Loose...!! \n Better Luck ... Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green `${player.select} fuel is ${p1.fuel}`);
                console.log(chalk.bold.red `${opponent.select} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.bgMagenta(`!!! CONGRATULATION ${Name} !!! \n YOU WIN...!!`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Fly...") {
            console.log(chalk.bold.blue(`Sorrry ${Name} \n You Loose...!! \n Better Luck ... Next Time`));
            process.exit();
        }
    }
} while (true);
