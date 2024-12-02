// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(" ")
    let str = [];

    for(let i=s.length-1;i>=0;i-- ){
        if(s[i] === ''){
            continue
        }else{
            str.push(s[i])
        }
        
    }
    return str.join(" ")
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWordsSol2 = function(s) {
    let n = s.length;
    s = s.split(" ");
    let res = [];
    for(let i= n-1; i>=0;i--){
        if(s[i]){
            res.push(s[i]);
        }
    }
    return res.join(" ");
};