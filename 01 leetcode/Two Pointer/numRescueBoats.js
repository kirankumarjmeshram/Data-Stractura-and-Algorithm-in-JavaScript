// https://leetcode.com/problems/boats-to-save-people/

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people = people.sort((a,b) => a-b);
    let n = people.length;
    let l=0;
    let r=n-1;
    let count = 0;
    while(l<=r){ 
      let remaining = limit-people[r]
      r--;
      count++
      if(l<=r && remaining >= people[l] ){
        l++
      }
    }
    return count;
};