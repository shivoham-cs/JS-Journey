// 🗓️ Day 6 — Objects in JavaScript
// ----------------------------------------------

// 1️⃣ Creating Objects
const person = {
  name: "Shivoham",
  age: 22,
  city: "Pune",
  hobbies: ["coding", "music", "reading"],
  greet: function() {
    console.log(`Hi, I'm ${this.name} from ${this.city}.`);
  }
};

// Accessing properties
console.log(person.name);
console.log(person["city"]);
person.greet();

// ----------------------------------------------
// 2️⃣ Modifying & Adding Properties
person.age = 23;
person.country = "India";
delete person.city;
console.log(person);

// ----------------------------------------------
// 3️⃣ Nested Objects
const student = {
  name: "Aarav",
  marks: {
    math: 90,
    science: 85,
    english: 92
  }
};

console.log("Science marks:", student.marks.science);

// ----------------------------------------------
// 4️⃣ Object Destructuring
const { name, age, hobbies } = person;
console.log(name, age, hobbies);

// ----------------------------------------------
// 5️⃣ Looping through Objects
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// ----------------------------------------------
// 6️⃣ Object Methods
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);

// ----------------------------------------------
// 🧩 Mini Challenge

// 1️⃣ Create an object "car" with properties: brand, model, year.
//     - Add a method start() that prints "Car started!".
//     - Call it and log all details.
const car = {
    brand: 'Ford', model: 'Mustang', year: 1965,
    carStart() {
        console.log(`${this.brand} ${this.model} started.`)
    },
    carInfo () {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`)
    }
}

car.carStart();
car.carInfo();

// 2️⃣ Create a "student" object with name, roll, and marks (array of 3 numbers).
//     - Add a method to calculate the average marks and return it.
const threeStudent = {
    student1: { name: 'Raman', roll: 15, marks: 80 },
    student2: { name: 'Seema', roll: 23, marks: 64 },
    student3: { name: 'Sudha', roll: 42, marks: 78 },
    get tMarks() {
        const students = [this.student1, this.student2, this.student3];
        const avTmarks = students.map(s => s.marks);
        return avTmarks.reduce((total, mark) => total + mark, 0) / avTmarks.length;
    }
}

console.log(threeStudent.tMarks);

// 3️⃣ Make an object "library" that holds an array of 3 book objects.
//     - Each book should have title and author.
//     - Loop through and print all book titles.
const library = {
  books: [
    { title: 'Alfacosta', author: 'Rica' },
    { title: 'Picaon', author: 'Piter' },
    { title: 'Herego', author: 'Heera' }
  ]
};

library.books.forEach(book => {
  console.log(book.title);
});

// 4️⃣ Create an object "bankAccount" with balance = 1000.
//     - Add deposit() and withdraw() methods that update balance.
//     - Prevent withdrawing more than available balance.

const bankAccount = {
  balance : 1000,
  diposit (amount) {
    console.log(`Deposited ₹${amount} successfully.`)
    return this.balance+=amount;
  },
  withdraw (amount) {
    if (this.balance>amount) {
      console.log(`Debited ₹${amount} from your account on successful withdrawal.`);
      return this.balance-=amount;
    }else{console.log(`Insufficient Funds. Cannot withdraw: ₹${amount}.`)}
    this.updateBalance();
  },
  updateBalance () {
    console.log(`Avilable Balance : ₹${this.balance}`);
  }
}
bankAccount.diposit(500);
bankAccount.updateBalance();
bankAccount.withdraw(200);
bankAccount.updateBalance();
bankAccount.withdraw(1500);
// 5️⃣ Use destructuring to extract properties from this object:
const user = { username: "Shivoham", email: "shiv@dev.com", country: "India" };
const {username, email, country} = user;
//     - Print each value using destructuring.
console.log(username);
console.log(email);
console.log(country);


