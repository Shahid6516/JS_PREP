// // call , apply , bind

// // 🎯 Easy way to remember:

// // call → “Call now”

// // apply → “Apply now with an array”

// // bind → “Bind now, use later”

// // Call

// const person1 = { name: "Shahid" };
// const person2 = { name: "Ayaan" };
// function sayHello() {
//   console.log("Hello, I am " + this.name);
// }

// console.log(sayHello.call(person1));

// // apply

// function sayHello(city, age) {
//   console.log("Hello, I am " + this.name + " from " + city + ", My age is  " + age);
// }

// sayHello.apply(person1, ["Utter Pradesh", 21]);


// // bind

// const sayHelloToShahid = sayHello.bind(person1, "UP", 21);

// sayHelloToShahid(); 
