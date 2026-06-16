// https://leetcode.com/problems/factorial-trailing-zeroes/
/* 
  A trailing zero comes from 2 X 5 = 10
  in a factorial there are always more factor of 2 than 5
  so, number of traling zeros = number of factors of 5
  ie f(x) = x/5 + x/25 + x/125 ...
  ie f(5) = 5/5 = 1, ALSO  f(6) = f(7) = f(8) = f(9)  = 1 ie for f(x) = 1 there are 5 elements 
  f(10) = 10/2 = 2, f(6) = f(11) = f(12) = f(13) = f(14) = 2 ie for f(x) = 2 there are 5 elements 
  
  like wise 
  f(20) = 20/5 = 4, till f(24)
  
  So EXACTLY 5 NUMBERS., Because only multiples of 5 introduce new factors of 5
  Between two multiples of 5, the trailing zero count remains unchanged.
 */
var trailingZeroes = function(n) {
    let totalTrailingZeros = 0;
    while(n>0){
        n = Math.floor(n/5);
        totalTrailingZeros += n;
    }
    return totalTrailingZeros;
};