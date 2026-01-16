// console.log("Hello world!");

// window.alert("Hello world!");

// document.getElementById("myH1").textContent = "Hello world!";
// document.getElementById("myP").textContent = "I like pizza!";
//This is a comment

// Variable = A container that stores a value. Behaves as if it were the value it contains.

// 1. Declaration let = x;
// 2. Assignment x = 100;

// Integer
// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// String
// let firstName = "John";
// let favoriteFood = "Lok Lak";
// let email = "HP168@gmail.com";

// Boolean
// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(typeof online);
// let fullName = "HP";
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// arithmetic operators = operands (values, variables, etc.)
//                        operators(+ - * /)
//                        ex. 11 = x +5;

// let students = 30;

// students = students + 2;
// students = students ** 2;
// '**' power of 2
// let extraStudents = students % 3;

//students += 1;
//students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// console.log(students);

/* 
  operators precedence
  1. parenthesis ()
  2. exponents'
  3. multiplication and division and modulo
  4. addition and subtraction
*/

// let result = (12 % 5) + 8 / 2;

// console.log(result);

// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY  = HTML textbox

// let username;

// username = window.prompt("What's your username?");

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = () => {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// };

// const = a variable that can't be changed.

// const pi = 3.14159;
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick = () => {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2 * pi * radius;

//   // Round to 2 decimal places using toFixed()
//   let roundedCircumference = circumference.toFixed(2);

//   document.getElementById("myH3").textContent = roundedCircumference + "cm";
// };

// COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = () => {
//   count++;
//   countLabel.textContent = count; // Update the displayed text to the current value of count 0 → 1, 1 → 2, 2 → 3, etc.
// };

// decreaseBtn.onclick = () => {
//   count--;
//   countLabel.textContent = count; // Update the displayed text to the current value of count 3 → 2, 2 → 1, 1 → 0, etc.
// };

// resetBtn.onclick = () => {
//   count = 0;
//   countLabel.textContent = count; // Update the displayed text to the current value of count 0
// };

// Math = built-in object that provides a collection of properties and methods.

// let x = 15;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x); // round down
// z = Math.ceil(x); // alway round up
// z = Math.trunc(x);
// z = Math.pow(x, y); // pow = power
// z = Math.sqrt(x); // square root

// z = Math.log(x); // log
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);

// z = Math.abs(x); // absolute value of x
// z = Math.sign(x);
// let min = Math.min(x, y, z);

// console.log(min);

// RANDOM NUMBER GENERATOR

// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = () => {
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   myLabel1.textContent = randomNum1;
//   myLabel2.textContent = randomNum2;
//   myLabel3.textContent = randomNum3;
// };

// IF STATEMENTS = If a condition is true, Execute some code if not, do something else.

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = () => {
//   age = myText.value; //Retrieves the value from the input field
//   age = Number(age);
//   if (age >= 18 && age < 100) {
//     resultElement.textContent = `You are old enough to enter this site`;
//   } else if (age < 0) {
//     resultElement.textContent = `Your age can't be below 0`;
//   } else if (age == 0) {
//     resultElement.textContent = `You can't enter. You were just born`;
//   } else if (age >= 100) {
//     resultElement.textContent = `You are TOO OLD to enter this site`;
//   } else {
//     resultElement.textContent = "You must be 18+ to enter this site";
//   }
// };

// .checked = property that determines the checked  state of an HTML checkbox or radio button element

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = () => {
//   if (myCheckBox.checked) {
//     subResult.textContent = `You are subscribed!`;
//   } else {
//     subResult.textContent = `You are not subscribed!`;
//   }

//   if (visaBtn.checked) {
//     paymentResult.textContent = `You are paying with Visa`;
//   } else if (masterCardBtn.checked) {
//     paymentResult.textContent = `You are paying with MasterCard`;
//   } else if (payPalBtn.checked) {
//     paymentResult.textContent = `You are paying with payPal`;
//   }
// };

// ternary operation = a shortcut to if{} and else{} statements helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIfFalse;

// let age = 12;
// let message = age >= 18 ? "You're an adult" : "You're a minor";

// console.log(message);

// let time = 10;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";

// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are not a student";

// console.log(message);

// let purchaseAmount = 100;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(
//   `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
// );

// SWITCH = can be an efficient replacement to many else if statements

// let testScore = 92;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;
//   case testScore >= 80:
//     letterGrade = "B";
//     break;
//   case testScore >= 70:
//     letterGrade = "C";
//     break;
//   case testScore >= 60:
//     letterGrade = "D";
//     break;
//   default:
//     letterGrade = "F";
//     break;
// }
// console.log(letterGrade);

// string methods = allow you to manipulate and work with text (strings)

// let userName = "BroCode ";
// console.log(userName.charAt(0));
// console.log(userName.length);

// userName = userName.repeat(3);
// console.log(userName);

// let result = userName.endsWith(" ");

// if (result) {
//   console.log("Your username can't end with ' '");
// } else {
//   console.log(userName);
// }

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "/");
// phoneNumber = phoneNumber.padEnd(15, "0");

// console.log(phoneNumber);

// string slicing = creating a substring from a portion of another string
//string.slice(start, end)
// const fullName = "Bro Code";
// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4, 8);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-4);

// let firstName = fullName.slice(0, fullName.indexOf(" "));

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// const email = "Bro1@gmail.com";

// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(userName);
// console.log(extension);

// Method Chaining = Calling one method after another
// in one continuous line of code.

// ------- NO METHOD CHAINING -------

// let userName = window.prompt("Enter your name: ");

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = letter + extraChars;

// console.log(userName);

// -------  METHOD CHAINING -------

// userName =
//   userName.trim().charAt(0).toUpperCase() +
//   userName.trim().slice(1).toLowerCase();

// console.log(userName);

// split string method
// const fullName = "John Jacob Doe";

// const [firstName, lastName, nickName] = fullName.split(" ");
// console.log(nickName);

// logical operators = used to combine or manipulate boolean values (true or false)
// AND = &&
// OR = ||
// NOT = !

// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

// const PI = 3.14;

// if (PI !== "3.14") {
//   console.log("That is PI");
// } else {
//   console.log("That is not PI");
// }

// while loop = repeat some code WHILE some condition is true

// let loggedIn = false;
// let userName;
// let password;

// while (!loggedIn) {
//   userName = window.prompt(`Enter your username: `);
//   password = window.prompt(`Enter your password: `);

//   if (userName === "myUsername" && password == "myPassword") {
//     loggedIn = true;
//     console.log("You are logged in!");
//   } else {
//     console.log("Invalid credentials! Please try again.");
//   }
// }

// for loop  = repeat some code a LIMITED amount of times.
//control flow statement (break, continue, ...)

// The for...of loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.).

// for...in loop in JavaScript is primarily used to iterate over the enumerable properties (keys) of an object.

// for (let i = 1; i <= 20; i++) {
//   if (i == 13) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

// NUMBER GUESSING GAME
// '*' symbol is the multiplication operator
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// console.log(answer);

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     window.alert(`Please enter valid number.`);
//   } else if (guess < minNum || guess > maxNum) {
//     window.alert("Please enter a valid number.");
//   } else {
//     attempts++;
//     if (guess < answer) {
//       window.alert("TOO LOW! TRY AGAIN.");
//     } else if (guess > answer) {
//       window.alert("TOO HIGH! TRY AGAIN!");
//     } else {
//       window.alert(
//         `CORRECT! The answer was ${answer}. Tit took you ${attempts} attempts`
//       );
//       running = false;
//     }
//   }
// }

// function = A section of reusable code. Declare code once, use it whenever you want.
//            Call the function to execute that code.

// function happyBirthday(userName, age) {
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log(`Happy birthday dear ${userName}.`);
//   console.log(`You are ${age} years old.`);
// }

// happyBirthday("Phanna", 20);

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   return x / y;
// }

// function isEven(number) {
//   return number % 2 === 0 ? true : false;
// }

// function isValidEmail(email) {
//   return email.includes("@") ? true : false;
// }
// console.log(isValidEmail("Brofake@.com"));
// console.log(isValidEmail("ElonMusk.com"));

// variable scope = where a variable is recognized and accessible (local vs global).

// let x = 3;
// function function1() {
//   let x = 1;
//   console.log(x);
// }

// function function2() {
//   let x = 2;
//   console.log(x);
// }

// function1();
// function2();
//In large-scale programming, local scope is generally preferred over global scope.

// TEMPERATURE CONVERSION PROGRAM

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;
// function convert() {
//   if (toFahrenheit.checked) {
//     temp = Number(textBox.value);
//     temp = (temp * 9) / 5 + 32;
//     result.textContent = temp.toFixed(2) + "°F";
//   } else if (toCelsius.checked) {
//     temp = Number(textBox.value);
//     temp = ((temp - 32) * 5) / 9;
//     result.textContent = temp.toFixed(2) + "°C";
//   } else {
//     result.textContent = "Select a unit";
//   }
// }

// array = a variable like structure that can hold more than 1 value.
// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits[2] = "coconut"; //update/replace the value at index.
// fruits.push("coconut");  Adds one or more elements to the end of an array and returns the new length.
// fruits.pop("coconut"); Removes the last element and returns it.
// fruits.unshift("coconut");  Adds one or more elements to the beginning of an array and returns the new
// fruits.shift();  Removes the first element and returns it.
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// -1 (output) means "apple" was not found in the array when indexOf was called.

// let numOfFruits = fruits.length;
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }
// fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// spread operator = ... allows an iterable such as an array or string to be expanded into
//                   separate elements (unpacks the elements).

//Using with Math Functions
// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

//Converting String to Array
// let userName = "Hel Phanna";
// let letters = [...userName].join();
// join() method is used to convert an array into a string.
// console.log(letters);

// Concatenating Arrays and Adding Elements to Arrays
// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carronts", "celery", "potatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods);

// rest parameters = (...rest) allow a function work with a variable number of arguments
//                   by bundling them into an array.

//                 spred = expands an array into seperate elements.
//                 rest = bundles seperate elements into an array.

// function openFridge(...foods) {
//   console.log(...foods);
// }

// function getFood(...foods) {
//   return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const total = getAverage(75, 100, 85, 90, 50);
// console.log(total);

// function conbineStrings(...strings) {
//   return strings.join(" ");
// }

// const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

// console.log(fullName);

// DICE ROLLING PROGRAM

// function rollDice() {
//   const numOfDice = document.getElementById("numOfDice").value;
//   const diceResult = document.getElementById("diceResult");
//   const diceImages = document.getElementById("diceImages");
//   const values = [];
//   const images = [];

//   for (let i = 0; i < numOfDice; i++) {
//     const value = Math.floor(Math.random() * 6) + 1;
//     values.push(value);
//     images.push(`<img src = "images/${value}.png">`);
//   }

//   diceResult.textContent = `dice: ${values.join(", ")}`;
//   diceImages.innerHTML = images.join("");
// }

// RANDOM PASSWORD GENERATOR

// function generateLength(
//   length,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// ) {
//   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&*()_-+=";

//   let allowedChars = "";
//   let password = "";

//   allowedChars += includeLowercase ? lowercaseChars : "";
//   allowedChars += includeUppercase ? uppercaseChars : "";
//   allowedChars += includeNumbers ? numberChars : "";
//   allowedChars += includeSymbols ? symbolChars : "";

//   if (length <= 0) {
//     return `(password length must be at least 1)`;
//   }
//   if (allowedChars === 0) {
//     return `(At least 1 set of character need to be selected)`;
//   }

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allowedChars.length);
//     password += allowedChars[randomIndex];
//   }

//   return password;
// }

// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generateLength(
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols
// );

// console.log(`Generate Password: ${password}`);

// callback = a function that is passed as an argument to another function,
//            to be executed later.

//            used to handle asynchronous operations:
//            1. Reading a file Network requests
//            2. Network requests
//            3. Interacting with databases.

// Using callback we are guaranteeing that function passed in will execute next.

// function hello(callback) {
//   console.log("Hello!");
//   callback();
// }

// function wait() {
//   console.log("Wait!");
// }

// function leave() {
//   console.log("Leave!");
// }
// function goodbye() {
//   console.log("Goodbye!");
// }

// hello(wait);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }

// function displayPage(result) {
//   document.getElementById("myH1").textContent = result;
// }

// sum(displayPage, 2, 2);

//Visualizing the Data Flow
// sum(displayPage, 2, 2)
//   │
//   ├─> Creates: x=2, y=2, callback=displayPage
//   │
//   ├─> Calculates: result = 2 + 2 → 4
//   │
//   └─> Calls callback(result) → displayPage(4)
//         │
//         └─> Receives 4 as parameter
//         │
//         └─> Updates DOM: myH1.textContent = 4

// forEach() = method used to iterate over the elements of an array and apply a specified
//             function (callback) to each element.

//             array.forEach(callback)

// let number = [1, 2, 3, 4, 5];

// number.forEach(cube);
// number.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }
// function display(element) {
//   console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function lowerCase(element, index, array) {
//   array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element) {
//   console.log(element);
// }

// .map() = accepts a callback and applies that function to each element
//          of an array, then return a new array.

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);
// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element) {
//   return element.toUpperCase();
// }

// const dates = ["2024-1-10", "2025-2-20", "2025-3-30"];

// const formatedDates = dates.map(formatDates);

// console.log(formatedDates);
// function formatDates(element) {
//   const parts = element.split("-");
//   return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// split()	String → Array	String + Separator	Array of substrings
// join()	Array → String	Array + Separator	Combined string

// const str = "Hello,world";
// const arr = str.split(","); // ["Hello", "world"]
// const newStr = arr.join("-"); // "Hello-world"

// .filter() = create a new array by filtering
//             out elements.

// let number = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = number.filter(isEven);
// let oddNums = number.filter(isOddn);

// console.log(oddNums);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOddn(element) {
//   return element % 2 !== 0;
// }

// const ages = [16, 17, 18, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);

// console.log(adults);
// console.log(children);

// function isAdult(element) {
//   return element >= 18;
// }

// function isChild(element) {
//   return element < 18;
// }

// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongwords);

// console.log(shortWords);
// console.log(longWords);

// function getShortWords(element) {
//   return element.length <= 6;
// }

// function getLongwords(element) {
//   return element.length > 6;
// }

// .reduce() = reduce the elements of an array
//             to a single value.

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element) {
//   return accumulator + element;
// }

// const grades = [75, 50, 90, 80, 65, 95];

// const maximun = grades.reduce(getMax);
// const minimun = grades.reduce(getMin);

// console.log(`Maximun number: ${maximun}`);
// console.log(`Minimum number: ${minimun}`);

// function getMax(accumulator, element) {
//   return Math.max(accumulator, element);
// }

// function getMin(accumulator, element) {
//   return Math.min(accumulator, element);
// }

// function declaration = define a reusable block of code that performs a specific task.

// function hello() {
//   console.log("Hello!");
// }

// function expressions = a way to define function as values or varibles.

// const hello = function () {
//   console.log("Hello!");
// };

// hello();

//3000 milliseconds
// setTimeout(function () {
//   console.log("Hello!");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });

// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0;
// });

// const oddNums = numbers.filter(function (element) {
//   return element % 2 != 0;
// });

// const total = numbers.reduce(function (accumulator, element) {
//   return accumulator + element;
// });

// console.log(squares);
// console.log(cubes);
// console.log(`Even number: ${evenNums}`);
// console.log(`Odd numbers: ${oddNums}`);
// console.log(`Total number: ${total}`);

// function expression = a way to define functions as
//                       values or varibles.

// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closers
// 4. Event Listeners

// const hello = function () {
//   console.log("Hello!");
// };

// setTimeout(function () {
//   console.log("Goodbye");
// }, 5000);

// arrow functions = a concise way to write function expressions
//                   good for simple function that you use only once
//                   (paramerers) => some code

// const hello = (name, age) => {
//   console.log(`Hello! ${name}`);
//   console.log(`You are ${age} years old`);
// };

// hello("Bruh", 25);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((acccumulator, element) => acccumulator + element);

// console.log(squares);
// console.log(cubes);
// console.log(evenNums);
// console.log(oddNums);
// console.log(total);

// object = A collection of related properties and/or methods
//          can represent real word objects (people, products, places)

//          object = {key:value,
//                    function()}

// const person1 = {
//   fistName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,
//   sayHello: () => {
//     console.log("Hi I am Spongebob!");
//   },
//   eat: () => {
//     console.log("I'm eating a krabby Patty");
//   },
// };

// const person2 = {
//   fistName: "Patrick",
//   lastName: "Star",
//   age: 42,
//   isEmployed: false,
//   sayHello: () => {
//     console.log("Hey, I'm Patrick...");
//   },
//   eat: () => {
//     console.log("I'm eating a roast beef, chicken and pizza");
//   },
// };

// person1.sayHello();
// person1.eat();
// person2.sayHello();
// person2.eat();

// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

// const person1 = {
//   name: "Spongebob",
//   favFood: "hamburgers",
//   sayHello() {
//     // <-- ES6 method shorthand (same as `sayHello: function() { ... }`)
//     console.log(`Hi! I am ${this.name}`); // `this` = `person1`
//   },
//   eat() {
//     console.log(`${this.name} is eating ${this.favFood}`);
//   },
// };

// const person2 = {
//   name: "Patrick",
//   favFood: "Pizza",
//   sayHello() {
//     // <-- ES6 method shorthand (same as `sayHello: function() { ... }`)
//     console.log(`Hi! I am ${this.name}`);
//   },
//   eat() {
//     console.log(`${this.name} is eating ${this.favFood}`);
//   },
// };

// person1.sayHello();
// person1.eat();
// person2.sayHello();
// person2.eat();

//constructor = special method for defining the
//              properties and methods of objects.

// function Car(make, model, year, color) {
// Assign properties to the new object
//   (this.make = make),
//     (this.model = model),
//     (this.year = year),
//     (this.color = color);
//   this.drive = function () {
//     console.log(`You drive the ${this.model}`);
//   };
// }

// const car1 = new Car("Ford", "Mustand", 2025, "red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
// const car3 = new Car("Dodge", "Charger", 2026, "silver");

// car1.drive();

// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional construtor functions
//         ex. static keyword, encapsulation, inheritance.

// class Product {
//   constructor(name, price) {
//     // Parameters: name, price
//     this.name = name; // Assigns parameter 'name' to property 'this.name'
//     this.price = price; // Assigns parameter 'price' to property 'this.price'
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(saleTax) {
//     return this.price + this.price * saleTax;
//   }
// }

// const saleTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 25.5);
// const product3 = new Product("Underwear", 100);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const total = product2.calculateTotal(saleTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

// static = keyword that defines properties or methods that belong to
//          a class itself rather that the objects created
//          from that class (class owns anything static, not the objects)

// class MathUntil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }

//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(MathUntil.PI.toFixed(2));
// console.log(MathUntil.getDiameter(10));
// console.log(MathUntil.getCircumference(10).toFixed(2));
// console.log(MathUntil.getArea(10).toFixed(2));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   static getUserCount() {
//     console.log(`There are ${User.userCount} users online.`);
//   }
//   sayHello() {
//     console.log(`Hello, my username is ${this.username}`);
//   }
// }

// const user1 = new User("Snopgebob");
// const user2 = new User("Kaja");
// const user3 = new User("Sophea");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// User.getUserCount();

// inheritance = allows a new class to inherit properties and methods from an existing class
//               (parent -> child) helps with code reusability.

// Object ជាពាក្យទូទៅសំរាប់វត្ថុណាមួយ (ឧទាហរណ៍ { name: "Nemo" })
// Instance គឺជា Object ដែលបង្កើតពី Class (ដោយប្រើ new)

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This ${this.name} is running.`);
//   }
// }

// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming.`);
//   }
// }

// class Hawk extends Animal {
//   name = "hawk";

//   fly() {
//     console.log(`This ${this.name} is flying.`);
//   }
// }

// const rabbit = new Rabbit(); //create new object(instances).
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// Super = keyword is used in classes to call the constructor or access the properties
//         and methods of a parent(superclass)
//         this = this object
//         super = the parent

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   move(speed) {
//     console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimSpeed);
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`This ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 1.5, 2);
// const hawk = new Hawk("hawk", 2, 50);

// fish.swim();

// console.log(
//   `${rabbit.name} is ${rabbit.age} year old and have running speed ${rabbit.runSpeed}Kh/h`
// );

// console.log(
//   `${fish.name} is ${fish.age} year old and have swimming speed ${fish.swimSpeed}kh/h `
// );

// console.log(
//   `${hawk.name} is ${hawk.age} year old and have flying speed ${hawk.flySpeed}kh/h `
// );

// getter = specail method that makes a property readable.
// setter = special method that makes a property writeable.

// validaate and modify a value when reading/writing a property.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("width must be a positive number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("height must be a positive number");
//     }
//   }

//   get width() {
//     return `${this._width.toFixed(1)}cm`;
//   }

//   get height() {
//     return `${this._height.toFixed(1)}cm`;
//   }

//   get area() {
//     return `${(this._width * this._height).toFixed(1)}cm²`;
//   }
// }

// const rectangle = new Rectangle(4, 5);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName) {
//     if (typeof newFirstName === "string" && newFirstName.length > 0) {
//       this._firstname = newFirstName;
//     } else {
//       console.error("First name must be a non-empty string.");
//     }
//   }

//   set lastName(newLastName) {
//     if (typeof newLastName === "string" && newLastName.length > 0) {
//       this._lastname = newLastName;
//     } else {
//       console.error("Last name must be a non-empty string.");
//     }
//   }

//   set age(newAge) {
//     if (typeof newAge === "number" && newAge >= 0) {
//       this._age = newAge;
//     } else {
//       console.error("Age name must be a non-negative number.");
//     }
//   }

//   get firstName() {
//     return this._firstname;
//   }

//   get lastName() {
//     return this._lastname;
//   }

//   get age() {
//     return this._age;
//   }

//   get fullName() {
//     return this._firstname + " " + this._lastname;
//   }
// }

// const person = new Person("Phanna", "Hel", 20);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);

// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// const colors = ["red", "green", "blue", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// const colors = ["red", "green", "blue", "white", "black"];

// const [firstcolor, secondColor, thirdColor, ...extraColor] = colors;

// console.log(firstcolor + " " + secondColor + " " + thirdColor);
// console.log(extraColor);

// function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
//   // Destructuring extracts:
//   console.log(`name: ${firstName} ${lastName}`);
//   console.log(`name: ${age}`);
//   console.log(`name: ${job}`);
// }

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "SquarePants",
//   age: 30,
//   job: "Fry Cook",
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
// };

// displayPerson(person2);

// nested objects = objects inside of other objects.
//                  Allows to represent more complex data structures
//                  child object is enclosed by a Parent object.

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCar{Keybord{}, Mouse{}, Monitor{}}

// const person = {
//   fullname: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   // nested object
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. Water",
//   },
// };

// for (const properties in person.address) {
//   console.log(properties); // shows the property name
//   console.log(person.address[properties]); // shows the property value
// }
// A property is a named value associated with an object that represents
// some characteristic of that object.

// An instance is a single, unique object created from a class or constructor function.

// this in Object Methods:
//                       When used inside an object method,
//                       this refers to the object itself (the owner of the method).

// this in Class Constructors:
//                            When used inside a class constructor,
//                            this refers to the newly created instance of the class.

// class Person {
//   constructor(name, age, ...address) { // Rest Parameter
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address); // Spread Operator
//   }
// }

// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person1 = new Person(
//   "Spongebob",
//   30,
//   "124 conch St.",
//   "Bikini Botttom",
//   "Int. Waters"
// );

// const person2 = new Person(
//   "Patrick",
//   38,
//   "124 conch St.",
//   "Bikini Botttom",
//   "Int. Waters"
// );

// const person3 = new Person(
//   "Squidward",
//   45,
//   "124 conch St.",
//   "Bikini Botttom",
//   "Int. Waters"
// );

// console.log(person1.address.city);

// const fruits = [
//   { name: "apple", color: "red", calories: 95 },
//   { name: "orage", color: "orange", calories: 45 },
//   { name: "bannna", color: "yellow", calories: 105 },
//   { name: "coconut", color: "white", calories: 159 },
//   { name: "pineapple", color: "yellow", calories: 37 },
// ];

// fruits.push({ name: "grapes", color: "purple", calories: 62 });
// fruits.pop();
// fruits.splice(1, 2);

//  --------forEach------------

// fruits.forEach((fruit) => {
//   console.log(fruit.color);
// });
// fruit is just a temporary variable holding the current item.

// ----------map---------------

// const fruitNames = fruits.map((fruit) => fruit.name); //Creates a new empty array
// const fruitColors = fruits.map((fruit) => fruit.color);
// const fruitCalories = fruits.map((fruit) => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// map() returns a new array (while forEach doesn't return anything)

// ------------filter-------------

// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// const lowCalFruits = fruits.filter((fruit) => fruit.calories > 100);
// const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// ---------reduce-------------

// const maxfruit = fruits.reduce((max, fruit) =>
//   fruit.calories > max.calories ? fruit : max
// );

// const minfruit = fruits.reduce((min, fruit) =>
//   fruit.calories < min.calories ? fruit : min
// );

// console.log(maxfruit);
// console.log(minfruit);

// sort() = method used to sord elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          Lexicographic = (alphabet + number + symbols) as strings.

// let fruits = ["apple", "orange", "banna", "coconut", "pineapple"];

// fruits.sort();

// console.log(fruits);

// let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort((a, b) => b - a);

// console.log(numbers);

// const people = [
//   { name: "Spongebob", age: 30, gpa: 3.0 },
//   { name: "Patrick", age: 37, gpa: 1.5 },
//   { name: "Sandy", age: 27, gpa: 4.0 },
// ];

// people.sort((a, b) => a.name.localeCompare(b.name));

// console.log(people);

// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

// function shuffle(array) {
//   // Start from the last element and move backwards
//   for (let i = array.length - 1; i > 0; i--) {
//     // Generate a random index between 0 and i (inclusive)
//     const random = Math.floor(Math.random() * (i + 1));

//     // Swap the current element (array[i]) with the randomly selected element (array[random])
//     [array[i], array[random]] = [array[random], array[i]];
//   }
//   // Note: The array is modified in-place (no need to return it)
// }

// shuffle(cards);
// console.log(cards);

// Date objects = Objects that contain values that represent dates and times
//                These date objects can be change and formatted

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth() + 1;
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(dayOfWeek);

// closure = A function define inside of another function,
//           the inner function has access to the varibles
//           and scope of the outer function.
//           Allow for private variables and state maintance
//           Use frequantly in JS framework: React, Vue, Angular

// function outer() {
//   let message = "Hello!";

//   function inner() {
//     console.log(message);
//   }

//   inner();
// }

// outer();

// function createCounter() {
//   count = 0;

//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }

//   return { increment, getCount };
// }

// const counter = new createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);

// function createGame() {
//   let score = 0;

//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts `);
//   }

//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts `);
//   }

//   function getScore() {
//     return score;
//   }

//   return { increaseScore, decreaseScore, getScore };
//   //    shorthand for
//   //    {
//   //   increaseScore: increaseScore,
//   //   decreaseScore: decreaseScore,
//   //   getScore: getScore
//   // }
// }

// const game = createGame();

// game.increaseScore(5);
// game.decreaseScore(2);
// console.log(`The final score is ${game.getScore()}`);

// setTimeout() = function in JavaScript that allow you to the schedule the execution of a function
//                after an amount of time (miliseconds)
//                Times are approximate (varies based on the workload of JavaScript runtime env.)

//                setTimeout(callback, delay);
// clearTimeout() = can cancel timeout before it triggers.

// function sayHello() {
//   window.alert("Hello!");
// }

// setTimeout(sayHello, 3000);

// const timeoutId = setTimeout(() => {
//   window.alert("Hello!");
// }, 3000);

// clearTimeout(timeoutId);

// let timeoutId;
// function startTimer() {
//   timeoutId = setTimeout(() => {
//     window.alert("Hello!");
//   }, 3000);

//   console.log("STARTED");
// }

// function clearTimer() {
//   clearTimeout(timeoutId);

//   console.log("CLEARED");
// }

// DIGITAL CLOCK PROGRAM

// function updateClock() {
//   const now = new Date(); //creates a new Date(current date) object
//   let hours = now.getHours();
//   const meridiem = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12 || 12;
//   hours = hours.toString().padStart(2, 0);
//   const minutes = now.getMinutes().toString().padStart(2, 0);
//   const seconds = now.getSeconds().toString().padStart(2, 0);
//   const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

//   document.getElementById("clock").textContent = timeString;
// }

// updateClock();
// setInterval(updateClock, 1000);

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(update, 10);
//     isRunning = true;
//   }
// }

// function stop() {
//   if (isRunning) {
//     clearInterval(timer);
//     elapsedTime = Date.now() - startTime;
//     isRunning = false;
//   }
// }

// function reset() {
//   clearInterval(timer);
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   display.textContent = "00:00:00:00";
// }

// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);
//   let miliseconds = Math.floor((elapsedTime % 1000) / 10);

//   hours = String(hours).padStart(2, "0");
//   minutes = String(minutes).padStart(2, "0");
//   seconds = String(seconds).padStart(2, "0");
//   miliseconds = String(miliseconds).padStart(2, "0");

//   display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
// }

// ES6 Module = An external file that contains reuseable code
//              that can be imported into other JavaScript files.
//              Write reuseable code for many different apps.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update.

// import from mathUtil.js
// import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

// synchronous = Execute line by line consecutively in a sequential manner
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operataion to be preformed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await.

// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 3000);
// }

// function func2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }

// func1(func2);

// Error = An Object that is created to represent a problem that occurs
//         Occurs often with the user input or establishing a connection.

// try { } = Enclosed code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Alway executes. Used most for clean up
//               ex: close files, close connections, release resources
// try {
//   console.log("Hello!");
//   // NETWROK ERRORS
//   // PROMISE REJECTION
//   // SECURITY ERRORS
// } catch (error) {
//   console.log(error);
// } finally {
//   {
//     // CLOSE FILES
//     // CLOSE CONNECTION
//     // RELEASE RESOURCES
//     console.log("This alway executes!");
//   }
// }

// console.log("You have reached the end!");

// try {
//   const devidend = window.Number(prompt("Enter a devidend: "));
//   const devisor = window.Number(prompt("Enter a devisor: "));

//   if (devisor == 0) {
//     throw new Error("You can't devide by zero!");
//   }

//   if (isNaN(devidend) || isNaN(devisor)) {
//     throw new Error("Values must be number!");
//   }

//   const result = devidend / devisor;
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// console.log("You have reached at the end!");

// CALCULATOR PROGRAM

// const display = document.getElementById("display");

// function appendToDisplay(input) {
//   display.value += input;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// DOM = DOCUMENT OBJECT MODEL
//       object{} that represents the page you see in the web browser
//       and provide you with API to interact with it.
//       web brower constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style for web page.

// const username = "";
// const welcomeMsg = document.getElementById("welcome-smg");

// welcomeMsg.textContent += username === "" ? " guest" : username;

// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document object module)

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElemntsByClassName()    // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "Yellow";
// myHeading.style.textAlign = "Center";

// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");

// for...of
// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "yellow";
// }

// forEach()

// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "yellow";
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// h4Elements[1].style.backgroundColor = "yellow";

// for...of loops
// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "yellow";
// }

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "lightgreen";
// }

// .forEach loop
// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = "lightgreen";
// });

// const element = document.querySelector("ul");

// element.style.backgroundColor = "yellow";
// console.log(element);

// const foods = document.querySelectorAll("li");

// foods[0].style.backgroundColor = "yellow";
// console.log(foods);

// foods.forEach((food) => {
//   food.style.backgroundColor = "yellow";
// });

// DOM Navigation = The process of navigating thruogh the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSilbling
// .previousElementSibling
// .parentElement
// .children

//-----------.firstElementChild------------

// const element = document.getElementById("vegetables");
// const firstChild = element.firstElementChild;

// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

//-------------.lastElementChild----------------

// const element = document.getElementById("desserts");
// const lastChild = element.lastElementChild;

// lastChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// });

// for (let ulElement of ulElements) {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "lightgreen";
// }

// ------------.nextElementSibling--------------

// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;

// nextSibling.style.backgroundColor = "yellow";

// ------------.previousElementSibling--------------

// const element = document.getElementById("fruits");
// const prevSibling = element.previousElementSibling;

// prevSibling.style.backgroundColor = "yellow";

// ------------.parentElement------------

// const element = document.getElementById("pie");
// const parents = element.parentElement;

// parents.style.backgroundColor = "lightgreen";

// -------------.children----------
// const element = document.getElementById("desserts");
// const children = element.children;

// children[0].style.backgroundColor = "yellow";

// Array.from(children).forEach((element) => {
//   element.style.backgroundColor = "yellow";
// });

// for (let child of children) {
//   child.style.backgroundColor = "lightgreen";
// }

// ------------- EXAMPLE 1 <h1> -------------

// STEP 1 CRETE THE ELEMENT
// const newH1 = document.createElement("h1");

// const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES

// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";

// newH1.textContent = "I lik Pro-hok!";
// newH1.id = "myH1";
// newH1.style.color = "blue";
// newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.prepend(newListItem);
// document.getElementById("fruits").prepend(newListItem);
// document.body.prepend(newH1);
// document.getElementById("box2").append(newH1);
// document.getElementById("box4").prepend(newH1);

// const box2 = document.getElementById("box4");
// document.body.insertBefore(newH1, box2);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItem = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItem[2]);

// const boxes = document.querySelectorAll(".boxes");
// document.body.insertBefore(newH1, boxes[3]);

// REMOVE HTML ELEMENT

// document.body.removeChild(newH1);
// document.getElementById("box2").removeChild(newH1);

// eventListener = listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback)

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// // click
// myButton.addEventListener("click", (event) => {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH! 🤕";
// });

// // mouseover
// myButton.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "Don't do it! 🤕";
// });

// // mouseout
// myButton.addEventListener("mouseout", (event) => {
//   event.target.style.backgroundColor = "lightgreen";
//   event.target.textContent = "Click Me 😊";
// });

// events: keydown, keyup

// const myBox = document.getElementById("myBox");
// const moveMoment = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", (event) => {
//   myBox.style.backgroundColor = "tomato";
//   myBox.textContent = "⏬";
// });

// document.addEventListener("keyup", (event) => {
//   myBox.style.backgroundColor = "lightgreen";
//   myBox.textContent = "⏫";
// });

// document.addEventListener("keydown", (event) => {
//   if (event.key.startsWith("Arrow")) {
//     event.preventDefault();

//     switch (event.key) {
//       case "ArrowUp":
//         y -= moveMoment;
//         break;

//       case "ArrowDown":
//         y += moveMoment;
//         break;

//       case "ArrowLeft":
//         x -= moveMoment;
//         break;

//       case "ArrowRight":
//         x += moveMoment;
//         break;
//     }

//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });

// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", (event) => {
//   if (myImg.style.visibility === "hidden") {
//     myImg.style.visibility = "visible";
//     myButton.textContent = "Hide";
//   } else {
//     myImg.style.visibility = "hidden";
//     myButton.textContent = "Show";
//   }
// });

// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes.

// let buttons = document.querySelectorAll(".myButtons");

//  ADD HTML/CSS PROPERIES

// buttons.forEach((button) => {
//   button.style.backgroundColor = "green";
//   button.textContent += "😊";
// });

// CLICK eventListener

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// MOUSEOVER + MOUSEOUT eventListener

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//   });
// });

// ADD AN ELEMENT

// const newButton = document.createElement("button"); //STEP 1
// newButton.textContent = "Button 5"; //STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton); //STEP 3

// REMOVVE AN ELEMENT

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.remove();
//     let buttons = document.querySelectorAll(".myButtons");
//     console.log(buttons);
//   });
// });

// classList = Elment prepery in JavaScript used to interact
//             with an element's list of classes (CSS classed)
//             Allow you to reuseable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");
// myButton.classList.add("hover");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover");
// });
// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover");
// });

// myButton.classList.add("enabled");
// myH1.classList.add("enabled");

// myButton.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += " 🤬";
//   }
//   event.target.classList.replace("enabled", "disabled");
// });

// myH1.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += " 🤬";
//   }
//   event.target.classList.replace("enabled", "disabled");
// });

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach((button) => {
//   button.classList.add("enabled");
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.classList.toggle("hover");
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.classList.toggle("hover");
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     if (event.target.classList.contains("disabled")) {
//       event.target.textContent += " 🤬";
//     } else {
//       event.target.classList.replace("enabled", "disabled");
//     }
//   });
// });

//  ROCK PAPER SCISSORS

// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// let playerScore = 0;
// let computerScore = 0;

// function playGame(playerChoice) {
//   const computerChoice = choices[Math.floor(Math.random() * 3)];
//   let result = "";

//   if (playerChoice === computerChoice) {
//     result = "IT'S A TIE!";
//   } else {
//     switch (playerChoice) {
//       case "rock":
//         result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
//         break;

//       case "paper":
//         result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
//         break;

//       case "scissors":
//         result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
//         break;
//     }
//   }

//   playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//   computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
//   resultDisplay.textContent = result;

//   resultDisplay.classList.remove("greenText", "redText");

//   switch (result) {
//     case "YOU WIN!":
//       resultDisplay.classList.add("greenText");
//       playerScore++;
//       playerScoreDisplay.textContent = playerScore;
//       break;

//     case "YOU LOSE!":
//       resultDisplay.classList.add("redText");
//       computerScore++;
//       computerScoreDisplay.textContent = computerScore;
//       break;
//   }
// }

// IMAGE SLIDE

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// // initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);
// function initializeSlider() {
//   if (slides.length > 0) {
//     slides[slideIndex].classList.add("displaySlide");
//     intervalId = setInterval(nextSlide, 5000);
//   }
// }

// function showSlide(index) {
//   if (index >= slides.length) {
//     slideIndex = 0;
//   } else if (index < 0) {
//     slideIndex = slides.length - 1;
//   }

//   slides.forEach((slide) => {
//     slide.classList.remove("displaySlide");
//   });

//   slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide() {
//   clearInterval(intervalId);
//   slideIndex--;
//   showSlide(slideIndex);
// }

// function nextSlide() {
//   slideIndex++;
//   showSlide(slideIndex);
// }

// Callback Hell = Situation in JavaScript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code difficult to read.
//                 Old partter to handle asynchronous function.
//                 Use Promises + asyn/await to aviod callback Hell

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 completes.");
//     callback();
//   }, 2000);
// }
// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2 completes.");
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3 completes.");
//     callback();
//   }, 4000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task 4 completes.");
//     callback();
//   }, 1500);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log("All task completed");
//       });
//     });
//   });
// });

// Promise = An object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return the value"
//           PENDIING -> RESOLVED OR REJECTED
//           new Promise((resolve, reject) => {asychronous code})

// DO THIS CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// Async/Await = Async = make a function return a promise
//               Await = make an async function wait for a promise

//               Allow you write asynchronous code in a asynchronous manner
//               Async doen't have resolve and reject parameters
//               Everything after Await is placed in an event queue
// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;

//       if (dogWalked) {
//         resolve("You walk the dog 🐕");
//       } else {
//         reject("You didn't walk the dog!");
//       }
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve("You clean the kitchen 🧹");
//       } else {
//         reject("You didn't clean the kitchen!");
//       }
//     }, 2500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakeOut = true;

//       if (trashTakeOut) {
//         resolve("You take out the trash 🚮");
//       } else {
//         reject("You didn't take out the trash!");
//       }
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You finished all the chores!");
//   })
//   .catch((error = console.error()));

// async function doChores() {
//   try {
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);

//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);

//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult);

//     console.log("You finished all the dochores!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// doChores();

// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.

// const names = ["Shaylar", "Sahura", "Matcha", "coffe"];
// const names = '["Shaylar", "Sahura", "Matcha", "coffe"]';

// const jsonString = JSON.stringify(names);
// const parseData = JSON.parse(names);

// console.log(parseData);

// fetch("people.json")
//   .then((response) => response.json())
//   .then((values) =>
//     values.forEach((value) => {
//       console.log(value);
//     })
//   );

// fetch = fucntion used for making HTPP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to restrieve and send data
//         asynchronous over the web. fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((respone) => {
//     if (!respone.ok) {
//       throw new Error("Could not fetch resource!");
//     }
//     return respone.json();
//   })
//   .then((data) => console.log(data))
//   .catch((eror) => {
//     console.error(eror);
//   });

// async function fetchData() {
//   try {
//     const pokemonName = document
//       .getElementById("pokemonName")
//       .value.toLowerCase();
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );
//     if (!response.ok) {
//       throw new Error("Could not fetch resource!");
//     }

//     const data = await response.json();
//     const pokemonSprite = data.sprites.front_default;
//     const imgElement = document.getElementById("pokemonSprite");

//     imgElement.src = pokemonSprite;
//     imgElement.style.display = "block";
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey = "612f9b725621422c83ed1a9ffd71c9d3";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData); // Argument = weatherData
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city.");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  //   const city = data.name;
  // const temp = data.main.temp;
  // const humidity = data.main.humidity;
  // const description = data.weather[0].description;
  // const id = data.weather[0].id;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${temp.toFixed()}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";

    case weatherId >= 300 && weatherId < 400:
      return "🌧️";

    case weatherId >= 500 && weatherId < 600:
      return "🌧️";

    case weatherId >= 600 && weatherId < 700:
      return "❄️";

    case weatherId >= 700 && weatherId < 800:
      return "🌫️";

    case weatherId === 800:
      return "☀️";

    case weatherId > 800 && weatherId < 810:
      return "☁️";

    default:
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
