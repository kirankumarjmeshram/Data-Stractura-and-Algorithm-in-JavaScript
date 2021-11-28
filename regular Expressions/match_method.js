//.test() only been checking
// if a pattern exists or not within a string

//.match() extract the actual matches you found with the .match() method.

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result)//result 'coding'




//To search or extract a pattern more than once, you can use the g flag
let testStr = "Repeat, Repeat, Repeat";

let ourRegex = /Repeat/;
testStr.match(ourRegex);//here match would return ["Repeat"].

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); //And here match returns the value ["Repeat", "Repeat", "Repeat"]
