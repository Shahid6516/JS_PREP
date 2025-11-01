// Functions in javascript
// QUESTIONS
// 1. what is function Declarations?
// 2. what is function expression?
// 3. what are first class function
// 4. what is IIFE?
// 5. IIFE - O/P Based Question?
// 6. Function scope - O/P Based Question
// 7. Function Hoisting
// 8. Function Hoisting - O/P Based Question

// 1. what is function Declarations?

// function square(num) {
//   return num * num;
// }

// this can also be called function statement

// 2. what is function expression?

// when you store function inside a variable then it's called function expression

// const square = function (num) {
//   return num * num;
// };

// console.log(square(5));

// and when i declare without any name then it's called anynomous function
// example 👇 -

// function (num) {
//   return num * num;
// };

// 3. what are first class function?

// A first-class function is a function that can be treated like a variable — meaning it can be assigned to a variable, passed as an argument, or returned from another function.

// function square(num) {
//   return num * num;
// }

// function displaySqure(fn){
//     console.log("Square is " + fn(5))
// }

// displaySqure(square)

// 4. what is IIFE?

// (function square(num){
//     console.log(num*num)
// })(5);

// 5. IIFE - O/P Based Question?

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);   output is 1

// 6. Function scope - O/P Based Question

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// 7. Function Hoisting

// it does not matter where you run function it will run it's not like variable

// functionName()

// function functionName() {
//     console.log("Roadside Coder")
// }

// 8. Function Hoisting - O/P Based Question

var x = 21;
var fun = function () {
  console.log(x);
  var x = 20;
};
fun();
