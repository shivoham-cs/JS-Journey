# 01 - JavaScript Basics: Variables

## 🧠 Concepts Covered
- What variables are  
- Difference between `var`, `let`, and `const`  
- Naming rules and conventions  
- Data types stored in variables  
- Reassignment rules  
- Basic string interpolation using template literals

## 📌 Key Takeaways
- Prefer `const` by default; use `let` only when reassignment is needed  
- Avoid `var` (function-scoped and outdated)  
- Use `camelCase` for variable names  
- Template literals (`${}`) make strings cleaner  

## 🧩 Practice Challenge
> Create your own `profile.js` file that prints details like name, age, hobby, and country.  
Try experimenting with `const` and `let` to see what’s allowed.
---

# 02 - JavaScript Basics: Functions

## 🧠 Concepts Covered
- Function declarations and expressions  
- Parameters and arguments  
- Return values  
- Default parameters  
- Arrow functions (ES6)  
- Scope (local & global)  
- Hoisting behavior  
- Nested functions  
- Callback functions  
- Anonymous functions  
- Immediately Invoked Function Expressions (IIFE)  

## 📌 Key Takeaways
- **Function Declaration** → hoisted, reusable  
- **Function Expression** → stored in a variable, not hoisted  
- **Arrow Functions** → concise syntax, don’t have their own `this`  
- **Scope** → variables inside functions are local  
- **Callback** → function passed as an argument  
- **IIFE** → runs immediately after being defined  

## 🧩 Practice Challenges
1. Create a function `describePerson(name, age, hobby)` → returns a formatted sentence.  
2. Write an arrow function `isEven(num)` → returns true/false.  
3. Create a nested function example (outer → inner).  
4. Build a simple “calculator” using functions: add, subtract, multiply, divide.  
5. Make an IIFE that logs `"Learning Functions — Day 2 complete ✅"`.

---
---

# 03 - JavaScript Basics: Conditionals

## 🧠 Concepts Covered
- If, Else, and Else If statements  
- Nested conditionals  
- Comparison and logical operators  
- Ternary operator (`? :`)  
- Switch statement  
- Short-circuit evaluation (`||` and `&&`)  
- Truthy and Falsy values  
- Conditional best practices  

## 📌 Key Takeaways
- Always prefer `===` over `==` for strict type checking  
- Use ternary for short, single-line decisions  
- `switch` is great for multiple fixed choices  
- Remember: Falsy values → `false, 0, "", null, undefined, NaN`  
- Logical operators can act as conditional shortcuts  

## 🧩 Practice Challenges
1. Time-based greeting (`Good Morning`, `Good Night`, etc.)  
2. Number-to-month converter using `switch`  
3. Even/Odd checker using ternary operator  
4. Role-based login message using nested `if`  

---
---

# 04 - JavaScript Basics: Loops

## 🧠 Concepts Covered
- `for`, `while`, and `do...while` loops  
- `for...of` (arrays, strings)  
- `for...in` (objects)  
- `break` and `continue` statements  
- Nested loops  
- Looping best practices  

## 📌 Key Takeaways
- Use `for` when you know the exact count.  
- Use `while` when repetition depends on a condition.  
- Use `do...while` when the loop should run at least once.  
- `for...of` → iterates values in arrays/strings.  
- `for...in` → iterates keys in objects.  
- Avoid infinite loops! Always ensure your loop condition eventually becomes false.  

## 🧩 Practice Challenges
1. Print all odd numbers between 1–100.  
2. Create a `for` loop to print the multiplication table of 7.  
3. Loop through an array of names and print a greeting for each.  
4. Use `for...in` to display all properties of an object.  
5. Use nested loops to draw a pyramid pattern of stars.

---
