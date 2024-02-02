#! /usr/bin/env node
import inquirer from "inquirer";

class Student {
    name: string
    constructor(name:string) {
        this.name = name
    }
}

class Person {
    students:Student [] = []

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person ()



const programStart = async (persons: Person) => {
    do{
        console.log("Welcome Bro!!!");

    const ans = await inquirer.prompt({
        type: "list",
        message: "Who do you wanna talk?",
        name: "select",
        choices: ["Myself", "student", "Exit"],
    });

    if (ans.select == "Myself") {
        console.log("Hi i want to talk with my self");
        console.log("I am well");
        
    }   

    if(ans.select == "student") {
        const ans = await inquirer.prompt({
            type:"input",
            message:"Whom you wanna talk?",
            name:"student",
        });

        const student = persons.students.find(val => val.name == ans.student)

        if (!student){
            const name = new Student(ans.student)
            persons.addStudent(name)

            console.log(`Hello i am ${name.name}, and i am fine`);
            console.log(persons.students);
        }

        if(student){
            console.log(`Hello i am ${student.name}, and i am fine........`);
            console.log(persons.students);
        }
    }
    if (ans.select == "Exit") {
        console.log("Goodbye!");
        break;
    }

    }while(true)    
};


programStart(persons);