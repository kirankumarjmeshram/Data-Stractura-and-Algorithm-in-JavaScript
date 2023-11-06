function rot13(str) {
    // Define a function to perform the ROT13 transformation on a single character
    function transformChar(char) {
      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = ((charCode - 65 + 13) % 26) + 65;
        return String.fromCharCode(shiftedCharCode);
      } else {
        return char; // Return non-alphabetic characters as is
      }
    }
  
    // Use the transformChar function to transform each character in the input string
    const transformedStr = str.split("").map(transformChar).join("");
  
    return transformedStr;
  }
  
  console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")) //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
  