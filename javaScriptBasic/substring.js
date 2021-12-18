//The substring() method returns the part of the string 
//between the start and end indexes, or to the end of the string

// substring(indexStart)
// substring(indexStart, indexEnd)

const str = 'Mozilla';

console.log(str.substring(1));//ozilla
console.log(str.substring(1).substring(1));//zilla
console.log(str.substring(1).substring(1).substring(1))//illa

console.log(str.substring(1, 3));//oz


console.log(str.substring(2));
// expected output: "zilla"

const myString = "Hello World";

console.log(myString.substring(2,5));//"llo"
console.log(myString.substring(5,2));//"llo"
console.log(myString.substring(20,5));//' World'
console.log(myString.substring(5,20));//' World'



