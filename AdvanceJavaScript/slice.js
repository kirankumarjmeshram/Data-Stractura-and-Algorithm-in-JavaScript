// Syntax

// slice()
// slice(start)
// slice(start, end)


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));//["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));//["camel", "duck"]

console.log(animals.slice(1, 5));// ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));// ["duck", "elephant"]

console.log(animals.slice(2, -1));//["camel", "duck"]

console.log(animals.slice());//["ant", "bison", "camel", "duck", "elephant"]

