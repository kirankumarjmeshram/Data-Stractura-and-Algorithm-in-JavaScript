// https://leetcode.com/problems/contains-duplicate/submissions/1989882450/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     let set = new Set();
        for(let num of nums) {
            if(set.has(num)) return true;
            set.add(num)
        }
        return false;
};