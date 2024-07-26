// https://leetcode.com/problems/longest-palindromic-substring/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let longestPal = '';
    for(let i=0;i<n;i++) {
        let oddPal = longPal(s, i,i);
        let evenPal = longPal(s, i, i+1);
        if(oddPal.length > longestPal.length) {
            longestPal = oddPal;
        }
        if(evenPal.length > longestPal.length ) {
            longestPal = evenPal
        }
    }
    return longestPal;
};

function longPal(string, left, right) {
    while(left>=0 && right<string.length && string[left]===string[right]){
        left--;
        right++;
    }
    return string.slice(left+1, right);
}