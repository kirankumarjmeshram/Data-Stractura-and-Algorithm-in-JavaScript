let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result)//true


let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result)//true
// You can search for multiple patterns using the alternation or OR operator: |

let myString = "freeCodeCamp";
let fccRegex = /FREECODECAMP/i; // Change this line
let result = fccRegex.test(myString);
console.log(result)//true

//  /.../i Ignore Case(capital or small) While Matching