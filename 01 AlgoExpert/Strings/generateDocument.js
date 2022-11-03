function generateDocument(characters, document) {
    // Write your code here.
    const charCount = {};
    for (let char of characters) {
      if(!(char in charCount)){
        charCount[char] = 1;
      } else{
        charCount[char]++;
      }
      
    }
    for (let char of document) {
      if(!(char in charCount) || charCount[char] ===0) return false;
      charCount[char] --;
    }
    return true;
  }