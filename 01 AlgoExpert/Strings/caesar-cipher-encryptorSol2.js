function caesarCipherEncryptor(string, key) {
    // Write your code here.
    key = key%26
    let newLetter = '';
    for(let i=0;i<string.length;i++){
      let x = string[i].charCodeAt() + key;
      if(x<=122){
        newLetter+= String.fromCharCode(x)
      }else{
        newLetter+= String.fromCharCode(96 + x%122)
      }
    }
      return newLetter
  }