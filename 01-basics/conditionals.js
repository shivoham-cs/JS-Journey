// 🗓️ Day 3 — JavaScript Conditionals
// 🧠 Learn to make decisions in code using if, else, switch, ternary, and more.

// --------------------------------------
// 1️⃣ Introduction
// Conditionals help your code make decisions based on true/false (Boolean) values.

console.log("=== 1️⃣ If Statement ===");

// --------------------------------------
// 2️⃣ If Statement
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote!");
}

// --------------------------------------
// 3️⃣ If...Else Statement
let temp = 25;

if (temp > 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's a pleasant day!");
}

// --------------------------------------
// 4️⃣ If...Else If...Else
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// --------------------------------------
// 5️⃣ Nested If
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in first!");
}

// --------------------------------------
// 6️⃣ Comparison Operators
// ==  → equality (type conversion)
// === → strict equality (no conversion)
// !=  → not equal
// !== → strict not equal
// >, <, >=, <= → numerical comparisons

let x = "10";
let y = 10;

console.log(x == y);   // true (values same)
console.log(x === y);  // false (different types)

// --------------------------------------
// 7️⃣ Logical Operators
// && (AND), || (OR), ! (NOT)
let hasID = true;
let hasTicket = false;

if (hasID && hasTicket) {
  console.log("You can enter the event!");
} else {
  console.log("Access denied!");
}

if (hasID || hasTicket) {
  console.log("You have partial access!");
}

// NOT operator
console.log(!true); // false
console.log(!false); // true

// --------------------------------------
// 8️⃣ Ternary Operator (? :)
// Shorter form of if...else
let score = 70;
let result = score >= 50 ? "Pass ✅" : "Fail ❌";
console.log("Result:", result);

// Nested ternary
let statusMsg = score >= 90 ? "Excellent" : score >= 70 ? "Good" : "Needs Improvement";
console.log("Status:", statusMsg);

// --------------------------------------
// 9️⃣ Switch Statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend 🎉");
}

// --------------------------------------
// 🔟 Short-Circuit Evaluation
// JS evaluates logical operators from left to right and "short-circuits" when possible.
let userName = "";
let displayName = userName || "Guest"; // if userName is falsy, fallback to "Guest"
console.log("Welcome:", displayName);

let isMember = true;
isMember && console.log("Thanks for being a member!"); // executes only if true

// --------------------------------------
// 11️⃣ Truthy and Falsy Values
// Falsy → false, 0, "", null, undefined, NaN
// Everything else → truthy
let value = 0;

if (value) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

// --------------------------------------
// 12️⃣ Switch vs If Comparison Example
let browser = "Firefox";

if (browser === "Chrome") {
  console.log("You're using Chrome");
} else if (browser === "Firefox") {
  console.log("You're using Firefox");
} else if (browser === "Edge") {
  console.log("You're using Edge");
} else {
  console.log("Unknown browser");
}

// Same with switch
switch (browser) {
  case "Chrome":
    console.log("You're using Chrome");
    break;
  case "Firefox":
    console.log("You're using Firefox");
    break;
  case "Edge":
    console.log("You're using Edge");
    break;
  default:
    console.log("Unknown browser");
}

// --------------------------------------
// 🧩 Mini Challenge:
// 1. Create a variable for time (0–23). 
//    Use if...else to print "Good Morning", "Good Afternoon", or "Good Night".
let time = 3;
if (time > 4 && time < 12){
  console.log("Good Morning")
}else if (time > 12 && time < 18) {
  console.log("Good Afternoon")
}else if (time > 18 && time <= 23){
  console.log("Good Night")
}else if (time >= 0 && time < 4) {
  console.log("Not a valid time to wish, Go and Sleep.")
}else {
  console.log("Enter a valid time.")
}
// 2. Use switch to print the name of a month from its number.
let monthNum = 120;
switch (monthNum) {
  case 1:
    console.log("January")
    break;
  case 2:
    console.log("Febuary")
    break;
  case 3:
    console.log("March")
    break;
  case 4:
    console.log("April")
    break;
  case 5:
    console.log("May")
    break;
  case 6:
    console.log("June")
    break;
  case 7:
    console.log("July")
    break;
  case 8:
    console.log("August")
    break;
  case 9:
    console.log("September")
    break;
  case 10:
    console.log("October")
    break;
  case 11:
    console.log("November")
    break;
  case 12:
    console.log("December")
    break;
  default:
    console.log("Please enter a valid month number.")
    break;
}
// 3. Use a ternary operator to check if a number is even or odd.
let num = 56465464;
let checkNum = num % 2 === 0 ? "Even" : "Odd";
console.log(checkNum)
// 4. Practice short-circuit logic with default usernames.
let userNm = "Shiv";
let getNm = userNm || "Guest";
console.log("Hey", getNm);



