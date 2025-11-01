// map(), filter(), reduce()

// * what is Map() *

// The map() method is used on arrays to create a new array by performing a specific operation on each element of the original array.

// It does not change the original array — it returns a new one.

// const nums=[1,2,3,4];
// const multiplythree = nums.map((num)=>{
// return num*3
// })

// console.log(multiplythree)

// * what is filter() *

// The filter() method creates a new array containing only those elements that pass a specific test condition (a callback function).

// It filters out elements that don’t meet the condition.
// It doesn’t modify the original array.

// const nums = [1,2,3,4]

// const moreThanTwo = nums.filter((num)=>{
// return num > 2;
// })
// console.log(moreThanTwo)

// * what is reduce() *

// The reduce() method executes a callback function on each element of the array and reduces the array to a single value (like a sum, product, object, etc).

//  It’s often used to accumulate or combine data.
// if there is no initial value it takes first element of array as initial value for accumulator

// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(sum)

// ##############* Output based question *######*

// map filter and reduce - O/P Based questions

// Question 1

// 1. Return only name of student in capital
// 2. Return only details of those who scored more than 60
// 3. More than 60 marks and rollnumber greater than 15
// 4. Sum of marks of all student
// 5. Return only names of students who scored more than 60
// 6. Return total marks for the students with marks greater than 60 after 20 marks have been added to those who score less than 60 

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// 1. Return only name of student in capital

// const names = students.map((nam)=>{
//     return nam.name.toUpperCase()
// })
// console.log(names);

// 2. Return only details of those who scored more than 60

// const details = students.filter((std)=>{
//    return std.marks > 60
// })
// console.log(details);

// 3. More than 60 marks and rollnumber greater than 15

// const details = students.filter((std)=> std.marks > 60 && std.rollNumber > 15)

// console.log(details)

// 4. Sum of marks of all student

// const sum = students.reduce((acc, curr) => acc + curr.marks, 0)
// console.log(sum)

// 5. Return only names of students who scored more than 60

// const names = students.filter((mark) => mark.marks > 60).map((std)=> std.name)

// console.log(names)


// 6. Return total marks for the students with marks greater than 60 after 20 marks have been added to those who score less than 60 

const totalMarks = students.map((std)=>{
    if(std.marks < 60 ){
        std.marks += 20;
    }
    return std;
}).filter((mark)=> mark.marks > 60).reduce((acc,curr) => acc + curr.marks, 0)
console.log(totalMarks)
