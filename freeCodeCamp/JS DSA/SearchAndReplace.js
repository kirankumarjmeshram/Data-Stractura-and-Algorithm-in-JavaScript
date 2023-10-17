/**
 * myReplace("Let us go to the store", "store", "mall") should return 
 * the string Let us go to the mall.
myReplace("His name is Tom", "Tom", "john") should return the string His name is John.

*/

function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      // Change the after word to be uncapitalized before we use it.
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
    return console.log(str);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");