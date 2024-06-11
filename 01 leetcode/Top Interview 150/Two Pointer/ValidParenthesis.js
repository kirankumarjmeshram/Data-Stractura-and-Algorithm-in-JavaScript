// https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let left = 0; right = s.length-1

    while(left < right) {
        if(!isAlphaNumeric(s[left])){
            left++;
        }else if(!isAlphaNumeric(s[right])){
            right --
        }else if (s[left] !== s[right]){
            return false
        }else{
            left++;
            right--;
        }
    }
    return true;
};

function isAlphaNumeric (c) {
    let code = c.charCodeAt(0);
    return (code >=48 && code <=57) || (code >=65 && code <= 90) || (code >= 97 && code <=122);
}