function phoneNumberMnemonics(phoneNumber) {
    const currentMnemonic = new Array(phoneNumber.length).fill('0');
    const mnemonicsFound = [];
  
    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
    return mnemonicsFound;
  }
  
  function phoneNumberMnemonicsHelper(i, phoneNumber, currentMnemonic, mnemonicsFound) {
    if(i === phoneNumber.length){
      const mnemonic = currentMnemonic.join('');
      mnemonicsFound.push(mnemonic);
    }else{
      const digit = phoneNumber[i];
      const letters = DIGIT_LETTERS[digit];
      for (const letter of letters){
        currentMnemonic[i] = letter;
        phoneNumberMnemonicsHelper(i+1, phoneNumber, currentMnemonic, mnemonicsFound)
      }
    }
  }
  
  const DIGIT_LETTERS = {
    0:['0'],
    1:['1'],
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z'],
  }
  
console.log(phoneNumberMnemonics('999').length)
  