#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    static idCounter = 10000; // Initial student ID counter
    id;
    name;
    courses;
    balance;
    isActive;
    constructor(name) {
        this.id = Student.idCounter++; // Generate a unique student ID
        this.name = name;
        this.courses = [];
        this.balance = 0;
        this.isActive = true;
    }
    // Method to enroll a student in a course
    enrollCourse(courseName, courseCost) {
        this.courses.push(courseName);
        this.balance += courseCost;
    }
    // Method to pay tuition fees
    payTuition(amount) {
        this.balance -= amount;
    }
    checkActiveStatus() {
        this.isActive = this.balance >= 10; // those whose balance is $0
    }
    // Method to display student status
    showStatus() {
        this.checkActiveStatus();
        console.log(`Student ID: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
        console.log(`Status: ${this.isActive ? `Active` : `Inactive`}`);
    }
}
// Create an array to store student objects
const students = [];
// Function to add a new student
function addStudent(name) {
    const student = new Student(name);
    students.push(student);
    console.log(`Student ${student.name} added with ID ${student.id}`);
}
// Example usage:
addStudent("Asad");
addStudent("Raza");
addStudent("Syed");
addStudent("Rida");
addStudent("Fatima");
// Enroll students in courses
const courseCost = 500; // Example course cost
students[0].enrollCourse("WEB3.0 BlockChain", courseCost);
students[0].enrollCourse("Metaverse", courseCost * 2);
students[1].enrollCourse("History", courseCost * 1.5);
students[2].enrollCourse("Physics", courseCost * 1.2);
students[2].enrollCourse("Chemistry", courseCost * 1.2);
students[3].enrollCourse("Mathematics", courseCost * 1.1);
students[3].enrollCourse("Biology", courseCost * 1.2);
students[4].enrollCourse("English Literature", courseCost * 1.1);
students[4].enrollCourse("Art History", courseCost * 1.2);
// Pay tuition fees
students[0].payTuition(1000);
students[1].payTuition(750);
students[2].payTuition(1200);
students[3].payTuition(1100);
students[4].payTuition(1150);
// Display student status
students[0].showStatus();
students[1].showStatus();
students[2].showStatus();
students[3].showStatus();
students[4].showStatus();
