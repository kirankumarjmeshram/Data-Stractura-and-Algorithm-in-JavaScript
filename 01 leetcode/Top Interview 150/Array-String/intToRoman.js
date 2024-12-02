// https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanSymbols = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 },
  ];
  let result = "";

  for (const { symbol, value } of romanSymbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};


var intToRomanSol2 = function (num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "";
    let i = 0;

    while(num > 0) {
        const count = Math.floor(num/values[i]);
        if(count > 0) {
            result +=symbols[i].repete(count);
            num -= count * values[i];
        }
        i++
    }
    return result;
}
