// Closures in javascript

// Lexical Scope

// A function can access variables defined in its own scope and in any outer (parent) scopes, but not in inner scopes.

// function outer() {
//   let outerVar = "I'm from outer";

//   function inner() {
//     let innerVar = "I'm from inner";
//     console.log(outerVar); // ✅ can access outerVar
//     console.log(innerVar); // ✅ can access innerVar
//   }

//   inner();
//   // console.log(innerVar); ❌ Error: innerVar is not defined
// }

// outer();

// what is closure

// A closure lets a function access variables from outside its own scope — even after the outer function is gone.

// function greet(name) {
//   return function() {
//     console.log("Hello, " + name);
//   };
// }

// const sayHello = greet("Shahid");
// sayHello(); // Output: Hello, Shahid

// O/P Based Question?

// 1. what will be logged to console?

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

// 2. write a function that would allow you to do this

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27