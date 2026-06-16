// https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/

/**
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
  
  NOW
  f(25) = 25/5 + 25/25 = 6 
  here direct f(24) => f(25) The value 5 not appears.
  as 25 = 5², contributes two factors of 5.
  So at 25 the count increases by 2 instead of 1
  ie for f(x) = 5 ZERO elemets are exist  
  SO, f(k) will be 5 or if skip jump then 0
  As f(x) is monotonic , we will use binary search to find umber of non-negative integers x have the property that f(x) = k
 */ 

  var preimageSizeFZF = function(k) {
    let left = 0;
    let right = 5*k + 5;
    while(left<=right) {
        let mid = left + Math.floor((right-left)/2);
        if(endZeros(mid)<k) {
            left = mid+1;
        }else{
            right =  mid - 1
        }
    }
    return endZeros(left) ===k?5:0;
};

function endZeros(n){
    let total = 0;
    while(n>0){
        n = Math.floor(n/5);
        total+=n;
    }
    return total;
}