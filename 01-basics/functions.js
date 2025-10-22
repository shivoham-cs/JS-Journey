// 🧠 JavaScript Functions — Day 2

// --------------------------------------
// 1️⃣ What are Functions?
// Functions are reusable blocks of code designed to perform a specific task.

console.log("=== 1️⃣ Function Declaration ===");

// --------------------------------------
// 2️⃣ Function Declaration
function greet() {
  console.log("Hello, JavaScript learner!");
}

greet(); // Call the function

// --------------------------------------
// 3️⃣ Function Parameters & Arguments
function greetUser(name) {
  console.log(`Hi, ${name}! Welcome back.`);
}

greetUser("Shivoham");
greetUser("Alex");

// --------------------------------------
// 4️⃣ Return Statement
function add(a, b) {
  return a + b;
}

let sum = add(10, 5);
console.log("Sum:", sum);

// --------------------------------------
// 5️⃣ Default Parameters
function multiply(a, b = 2) {
  return a * b;
}

console.log("Multiply (2 args):", multiply(5, 3)); // 15
console.log("Multiply (1 arg):", multiply(5));     // 10 (b=2 by default)

// --------------------------------------
// 6️⃣ Function Expression
// Functions can be stored in variables.
const divide = function (x, y) {
  return x / y;
};

console.log("Division:", divide(20, 4));

// --------------------------------------
// 7️⃣ Arrow Functions (ES6)
const subtract = (a, b) => a - b; // concise form
console.log("Subtraction:", subtract(10, 6));

// Arrow function with multiple lines
const getSquare = (num) => {
  let result = num * num;
  return result;
};
console.log("Square:", getSquare(5));

// --------------------------------------
// 8️⃣ Function Scope
// Variables defined inside a function are not accessible outside.
function showScope() {
  let localVar = "I’m local!";
  console.log(localVar);
}
showScope();
// console.log(localVar); // ❌ ReferenceError

// --------------------------------------
// 9️⃣ Global Scope
let globalVar = "I’m global!";
function accessGlobal() {
  console.log(globalVar);
}
accessGlobal();

// --------------------------------------
// 🔟 Hoisting in Functions
// Function declarations are hoisted, so you can call them before they appear.

hoistedExample(); // works fine
function hoistedExample() {
  console.log("This function was called before its declaration!");
}

// Function expressions are NOT hoisted:
try {
  notHoisted(); // ❌ Error
} catch (err) {
  console.log("Error:", err.message);
}

const notHoisted = function () {
  console.log("You’ll never see this before declaration!");
};

// --------------------------------------
// 11️⃣ Nested Functions
function outer() {
  let outerVar = "Outer variable";

  function inner() {
    console.log("Accessing:", outerVar); // inner can access outer
  }

  inner();
}
outer();

// --------------------------------------
// 12️⃣ Callback Functions
function processUserInput(name, callback) {
  console.log("Processing input...");
  callback(name);
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

processUserInput("Shivoham", sayHello);

// --------------------------------------
// 13️⃣ Arrow Functions as Callbacks
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((n) => console.log(`Number: ${n}`));

// --------------------------------------
// 14️⃣ Anonymous Functions
setTimeout(function () {
  console.log("This message appears after 1 second");
}, 1000);

// --------------------------------------
// 15️⃣ Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed immediately!");
})();

// --------------------------------------
// 16️⃣ Function Best Practices
// ✅ Use meaningful names
// ✅ Keep functions small and focused
// ✅ Avoid global variables
// ✅ Prefer arrow functions for callbacks
// ✅ Return values explicitly for clarity

// --------------------------------------
// 🧩 Mini Challenge:
// 1. Create a function that takes a name and age, and returns:
//    "Hi <name>, you are <age> years old."
function getInfo (name, age) {
  console.log(`Hi ${name}, you are ${age} years old.`)
}

getInfo("Shiv", 21)
// 2. Create a function to calculate the square root of a number.
function calcSq (num) {
  console.log(Math.sqrt(num))
}

calcSq(625);
// 3. Use an arrow function to calculate the cube of a number.
const nCube = num => num * num * num;
console.log(nCube(5));
// 4. Create an IIFE that prints your current learning topic.
(function () {
  console.log("Current topic is funtions.js");
})();
