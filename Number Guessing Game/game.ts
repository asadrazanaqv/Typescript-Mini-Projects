#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Game: Lets Guess a number betweem 1 to 10 only 3 rounds available");


let random = Math.floor(Math.random()*10) + 1;
// console.log(random);



let actualAnswer: number = random;
let rounds = 3;
let score = 0;
let play: boolean =true;

interface Answerstype {
    guess:number;
}

interface playloop{
    playAgain: boolean;
}


const welcome = await inquirer.prompt(
{
    message: "Press Enter Key To Start the Game",
    type: "input",
    name:"Welcome"
});

welcome;

while (play) {
while (rounds > 0 ) {
const answers:Answerstype = await inquirer.prompt([
{

    name:"guess",
    message:"Guess Your Number",
    type: "number"
},

]);


console.log(`You have ${rounds - 1} rounds left`);

if (answers.guess === actualAnswer) {
    console.log("Thats great!!!! you guessed the right number");   
    score += rounds;
    rounds = 0;
} else {
    console.log("You guessed it wrong"); 
    if (actualAnswer > answers.guess ) console.log("Think Higher");
    else {
        console.log("Think Lower");    
    }
}
console.log(`Your current score: ${score} `);

rounds--;
}
const playagainresult:playloop = await inquirer.prompt([
    {
        name:"playAgain",
        message: "Do you want to play again",
        type: "confirm"
        
    },
]);

if (playagainresult.playAgain == true) {
    rounds = 3;
    random = Math.floor(Math.random()*10) + 1;
    actualAnswer = random;
} else {
    console.log("Exiting ....");
    play = false
}

}
