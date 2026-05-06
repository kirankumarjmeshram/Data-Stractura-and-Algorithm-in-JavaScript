// https://leetcode.com/problems/binary-number-with-alternating-bits/

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let prev = n&1
    while(n) {
        n>>=1
        let curr = n&1;
        if(prev === curr){
            return false
        }
        prev = curr
    }
    return true;
};

//using xor
var hasAlternatingBitsXor = function(n) {
    let x = n^(n>>1);
    return !(x&(x+1));
};