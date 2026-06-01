// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = bSearch(nums, target, true);
    let right = bSearch(nums, target, false);
    return [left, right]

};

function bSearch(nums, target, searchLeft){
    let n = nums.length;
    let l =  0, h = n-1;
    let index = -1;
    while(l<=h){
        let mid = Math.floor(l + (h-l)/2);
        if(target < nums[mid]){
            h = mid-1
        }else if(target > nums[mid]){
            l = mid+1
        }else{
            index = mid;
            if(searchLeft){
                h = mid-1
            }else{
                l = mid+1
            }
        }
    }
    return index;
}