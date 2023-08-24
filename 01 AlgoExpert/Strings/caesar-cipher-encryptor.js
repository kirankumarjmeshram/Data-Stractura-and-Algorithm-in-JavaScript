function caesarCipherEncryptor(string, key) {
    // Write your code here.
    let newLetter = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0;i<string.length;i++){
      let x = alphabet.indexOf(string[i]) + key;
      x= x%26;
      newLetter+=alphabet[x]
    }
      return newLetter
  }
  