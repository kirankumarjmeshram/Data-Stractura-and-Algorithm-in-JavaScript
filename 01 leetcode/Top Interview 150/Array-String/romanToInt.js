// https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};
let n = s.length;
for(let i=0;i<n-1;i++){
    if(roman[s[i]]<roman[s[i+1]]){
        res -= roman[s[i]]
    }else{
        res += roman[s[i]]
    }
}
return res + roman[s[n-1]]
};