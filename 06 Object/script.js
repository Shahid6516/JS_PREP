// Object

//👉 An object stores data in a structured way and
// an object is created by using curly baraces {}

// modify
// user.name="Shahid Ansari"
// delete
// delete user.age
// console.log(user["hello shahid"])

// for(key in user){
//     console.log(user[key]);

// }

// 1. what's the output?
// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };
// it will print only a and b not last a because if there are same key in object it consider only first key as key
// console.log(obj)

// 2. what's the output of the following code?

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;
// console.log(a[b])  // output 456

// 3. what is JSON.stringify and JSON.parse?

// JSON.stringify converts a JavaScript object into a JSON string (text format).

// JSON.parse does the opposite — it converts a JSON string back into a JavaScript object.

// const user = {
//   name: "Shahid",
//   age: 21,
// };

// const strObj = JSON.stringify(user);
// console.log(strObj); // convert into a json string
// console.log(JSON.parse(strObj)); // convert json string back into the js object

// // this is mainly use in localstorgae because we can not save object direct in local Storage
// localStorage.setItem("test", strObj);

// 4. what is the output ?

// console.log([..."Lydia"])
// 5. what is the output ?

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin)

// 6. what's shallow copy and deep copy
// A shallow copy copies only the top-level properties of an object.
// A deep copy makes a complete copy — including all nested objects.

// 7. how to deep copy / clone any object?
// let user = {
//   name: "Mohammad Shahid",
//   age: 24,
// };

// const objClone = Object.assign({}, user);
// objClone.name="Shahid"
// console.log(user, objClone);
