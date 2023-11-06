function convertToRoman(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let result = "";
  
    for (const symbol in romanNumerals) {
      while (num >= romanNumerals[symbol]) {
        result += symbol;
        num -= romanNumerals[symbol];
      }
    }
  
    return result;
  }
  let num = 68
  console.log(convertToRoman(num)) //LXVIII