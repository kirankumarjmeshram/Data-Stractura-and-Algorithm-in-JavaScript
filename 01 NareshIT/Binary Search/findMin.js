//Find Minimum in Rotated Sorted Array
//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

var findMin = function(nums) {
     let n = nums.length;
    let l = 0;
    let h = n-1;
    while(l<h) {
        let m = Math.floor(l+(h-l)/2);
        if(nums[m] < nums[h]){
            h=m
        }else{
            l = m+1;
        }
    }
    return nums[l];
};