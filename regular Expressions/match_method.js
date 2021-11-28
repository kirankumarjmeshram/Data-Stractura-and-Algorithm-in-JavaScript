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

let repeatRegex = /Repeat/g;//To search or extract a pattern more than once, you can use the g flag.
testStr.match(repeatRegex); //And here match returns the value ["Repeat", "Repeat", "Repeat"]

//useing flag g and flag i simultanously

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // i Ignore Case(capital or small) While Matching
let result = twinkleStar.match(starRegex); // Change this line

console.log(result);

//Match Anything with Wildcard Period ( . )

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);//return true

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
console.log(result) //return true


//Match Letters of the Alphabet
//to match lowercase letters a through e you would use [a-e]
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);//the three match calls would return the values ["cat"], ["bat"], and null.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // 
let result = quoteSample.match(alphabetRegex); 
console.log(result)


//Match Single Character with Multiple Possibilities
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);//["big"]
bagStr.match(bgRegex);//["bag"]
bugStr.match(bgRegex);//["bug"]
bogStr.match(bgRegex);//null

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result)
//return //[ 'e',
// 'a',
// 'e',
// 'o',
// 'u',
// 'i',
// 'e',
// 'a',
// 'o',
// 'e',
// 'o',
// 'e',
// 'I',
// 'a',
// 'e',
// 'o',
// 'o',
// 'e',
// 'i',
// 'o',
// 'e',
// 'o',
// 'i',
// 'e',
// 'i' ]





