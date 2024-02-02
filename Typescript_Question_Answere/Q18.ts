const placesToVisit = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

console.log("Original Order:");
console.log(placesToVisit.join(', '));

console.log("\nAlphabetical Order:");
console.log(placesToVisit.slice().sort().join(', '));

console.log("\nOriginal Order (still):");
console.log(placesToVisit.join(', '));

console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit.slice().sort((a, b) => b.localeCompare(a)).join(', '));

console.log("\nOriginal Order (still):");
console.log(placesToVisit.join(', '));

console.log("\nReversed Order:");
console.log(placesToVisit.reverse().join(', '));

console.log("\nOriginal Order (back to):");
console.log(placesToVisit.join(', '));

console.log("\nAlphabetical Order:");
console.log(placesToVisit.sort().join(', '));

console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit.sort((a, b) => b.localeCompare(a)).join(', '));
