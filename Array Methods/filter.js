// Syntax
// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])
//In the following example, odd numbers are "filtered" out, leaving only even numbers.
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // 

//In the next example, filter() is used to get all the students whose grades are greater than or equal to 90.

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  const studentGrades = students.filter(student => student.grade >= 90);
 console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]