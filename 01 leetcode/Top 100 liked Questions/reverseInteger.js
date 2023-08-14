// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = 0;
    let temp = 0;
   
        while(x != 0){
            temp = x%10;
            x= (x-temp)/10;
            y = y*10 + temp; 
        }
        if (y > 2**31-1 || y < -( 2**31)){
            return 0;
        }else{
            return y
        }
};

