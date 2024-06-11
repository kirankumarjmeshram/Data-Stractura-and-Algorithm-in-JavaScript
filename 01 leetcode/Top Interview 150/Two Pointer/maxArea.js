// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length-1;
    let maxArea = 0;
    while (left < right) {
        maxArea = Math.max(maxArea, (right-left)*Math.min(height[left], height[right]))
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea
};
