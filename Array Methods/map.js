//The map() method creates a new array populated with the 
//results of calling a provided function on every element
// in the calling array

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);[2, 8, 18, 32]
console.log(array1);//[1, 4, 9, 16]