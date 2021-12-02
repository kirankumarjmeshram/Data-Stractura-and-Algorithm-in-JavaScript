//Copy an Array with the Spread Operator
//ES6's new spread operator allows us to easily copy all of an array's elements, 
//in order, with a simple and highly readable syntax. The spread syntax simply looks like this:  "..." 
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray) // equals [true, true, undefined, false, null].


function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr])
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 3));
  // [ [ true, false, true ],
  //   [ true, false, true ],
  //   [ true, false, true ] ]

//Combine Arrays with the Spread Operator
let thisArray1 = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray1 = ['basil', 'cilantro', ...thisArray, 'coriander'];
console.log(thatArray1)//=> ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']


function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence=['learning',...fragment,'is','fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());//[ 'learning', 'to', 'code', 'is', 'fun' ]

