//The substring() method returns the part of the string 
//between the start and end indexes, or to the end of the string

const str = 'Mozilla';

console.log(str.substring(1));//ozilla
console.log(str.substring(1).substring(1));//zilla
console.log(str.substring(1).substring(1).substring(1))//illa

console.log(str.substring(1, 3));//oz


console.log(str.substring(2));
// expected output: "zilla"
