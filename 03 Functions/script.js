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
// 9. Params vs Arguments?
// 10. spread opretor
// 11. Params vs Arguments - O/P Based Question
// 12. Callback function
// 13. Arrow function

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

// var x = 21;
// var fun = function () {
//   console.log(x);
//   var x = 20;
// };
// fun();

// 9. Params vs Arguments

// function square(num) { // params
//   return num * num;
// }
// square(5)// Arguments

// 10. spread opretor

// function multiply(...nums) { // rest operator
//   console.log(nums[0]*nums[1]);
// }
// var arr = [5,6]

// multiply(...arr)   // spread opreator

// 11. Params vs Arguments - O/P Based Question

// const fn = (a, x, y, ...numbers) => {
//   console.log(x, y, numbers);
// };
// fn(5, 6, 3, 7, 8, 9);

// 12. Callback function

// A callback function is a function that is passed as an argument to another function,
// and then that other function calls it later (or "calls it back")

// Example👇 -

// document.addEventListener("click",function(params)=>{

// })

//  it can be function like map , Array, reduce etc  (callback function)

// 13. Arrow functions

// arrow function introduce in es6

// diffrence between an arrow function and normal function
// 1. syntax diffrent
// 2. Implicit 'return' keyword
// example 👇-
// const square = (num) => num * num;
// 3. arguments
// example 👇-
function fn(){
    console.log(arguments)
}

fn(1,3,2)

// arguments keyword is avilable in normal function but not in arrow function

const fnArr = ()=>{
    console.log(arguments)
}

fn(1,3,2)

