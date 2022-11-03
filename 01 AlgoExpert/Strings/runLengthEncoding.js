function runLengthEncoding(string) {
    // Write your code here.
    const encodedStringCharacters = [];
    let currentRunLength = 1;
    for (let i = 1; i < string.length; i++) {
      const currentCharacter = string[i];
      const priviousCharacter = string[i-1];
  
      if (currentCharacter !== priviousCharacter || currentRunLength === 9) {
        encodedStringCharacters.push(currentRunLength.toString());
        encodedStringCharacters.push(priviousCharacter);
        currentRunLength = 0;
      }
      currentRunLength ++;
    }
    encodedStringCharacters.push(currentRunLength.toString());
    encodedStringCharacters.push(string[string.length - 1]);
    return encodedStringCharacters.join('');
  
  }
  