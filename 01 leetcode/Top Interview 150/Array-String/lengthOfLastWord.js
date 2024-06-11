// https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    s = s.trim();
    for(let i= s.length-1;i>=0;i--) {
        if(s[i] !== ' '){
            length++
        }else if(length>0){
            break;
        }
    }
    return length;
};
