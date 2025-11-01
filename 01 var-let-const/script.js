// var vs let vs const

// * var is function/global scope and let and const is block scope *

// global scope
// var a = 5;
// console.log(a);

// block scope
// {
//   const b = 10;
//   console.log(b);
// }

// variable shadowing

// Variable shadowing happens when a variable declared inside a local scope (like a block or function) has the same name as one in an outer scope.
// we can't do variable shadowing with const

// function test() {
//   let a = "Hello";
//   if (true) {
//     let a = "hi";
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// Declaration

// we can redecalre value by var but can't redeclare value by let

// let and const can't be redeclare in same scope but var can be

// let a
// let a

// console.log(a);

// Declaration without initalization

// we can declare var and let without initalization but we can not do this with const we need to give const some value to initalize it

// var a;   // working
// const b;    // error
// let c;     // working

// Re-initalization

// var and let can be re-initalize but const intialize only once

// Hoisting

// console.log(count);
//   var count = 1;    // undefined

// function abc() {
//   console.log(a, b, c);
//   const c = 30;
//   let b = 20;
//   var a = 10;
// }

// abc()  // refrence error in let and const

// const and let is not hoisted like var but they are hoisted in tempreal dead zone

// temperal deadzone is a term to describe state where variables are in the scope but they are not yet declared that's why b and c in temperal deadzone