// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    while(left < right){
        if(numbers[left]+numbers[right]=== target){
            return [left+1, right+1]
        }else if(numbers[left]+numbers[right] > target){
            right --;
        }else{
            left ++;
        }
    }
};