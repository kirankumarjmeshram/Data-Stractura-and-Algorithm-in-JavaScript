// https://leetcode.com/problems/factorial-trailing-zeroes/

var trailingZeroes = function(n) {
    let totalTrailingZeros = 0;
    while(n>0){
        n = Math.floor(n/5);
        totalTrailingZeros += n;
    }
    return totalTrailingZeros;
};