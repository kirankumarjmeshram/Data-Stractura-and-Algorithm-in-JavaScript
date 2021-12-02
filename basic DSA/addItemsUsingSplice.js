



const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);//[ 10, 11, 12, 13, 14, 15 ]




//We have defined a function, htmlColorNames, which takes 
//an array of HTML colors as an argument. Modify the function 
//using splice() to remove the first two elements of the array and 
//add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.


function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
  
  // [ 'DarkSalmon',
  //   'BlanchedAlmond',
  //   'LavenderBlush',
  //   'PaleTurquoise',
  //   'FireBrick' ]