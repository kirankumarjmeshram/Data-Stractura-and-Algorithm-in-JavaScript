//.forEach loop

const array =['a','b','c','d','e'];

array.forEach(el=>console.log(el));

//for...in loop
//syntax
// for (variable in object) {
//     statement
//   }
//The for...in statement iterates over all enumerable properties 
//of an object that are keyed by strings (ignoring ones keyed by 
//Symbols), including inherited enumerable properties.
const object = {a:1,b:2,c:3};

for(const property in object){
    console.log(`${property}: ${object[property]}`)
}


//.concate

const arr1=[1,2,3,4];
const arr2 =['a','c','d','e'];

const arr3 = arr1.concat(arr2);
console.log(arr3)//-o=>[1,   2,   3,   4,'a', 'c', 'd', 'e']

//.keys

const arr4 = ['a','b','c'];
const k = arr4.keys();
for (const key of k) {
    console.log(key);
  }
  

  //.shift() removes first element of an array and return that value

  const arr5 =[1,2,3,4,5,6,67,3];
  const abc =arr5.shift();

  console.log(abc);
  console.log(arr5);

  //.slice() =>
    //syntax
    // slice()
    // slice(start)
    // slice(start, end)
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]