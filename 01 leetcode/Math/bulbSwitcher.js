// https://leetcode.com/problems/bulb-switcher/description/?envType=company&envId=accenture&favoriteSlug=accenture-thirty-days
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    //     let res = 0;
    //     let factor = 1;
    
    //     while(n > 0){
    //         n--;
    //         res++;
    
    //         n = n - (factor * 2);
    //         factor++;
    //     }
    //   return res;
    return Math.floor(Math.sqrt(n))
    };