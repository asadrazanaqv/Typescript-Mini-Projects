const str1 = "apple";
const str2 = "banana";// if it was apple then it is equal to str 1 and str 2
const str3 = "Apple";

console.log("Is str1 == str2? I predict False.");
console.log(str1 == str2);

console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);

console.log("Is str1.toLowerCase() == str3.toLowerCase()? I predict True.");
console.log(str1.toLowerCase() == str3.toLowerCase());

const num1 = 5;
const num2 = 10;

console.log("Is num1 + num2 == 15? I predict True.");
console.log(num1 + num2 == 15);

console.log("Is num1 * num2 != 50? I predict False.");
console.log(num1 * num2 != 50);

const isSunny = true;
const isRainy = false;

console.log("Is it sunny AND not rainy? I predict True.");
console.log(isSunny && !isRainy);

const fruits = ["apple", "banana", "orange"];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes("apple"));

console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape"));
