//https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
Approach :
Find the middle element.
If the middle element is the target, return its index.
Identify which half of the array is sorted.
Check whether the target lies within the sorted half.
If the target lies in the sorted half, continue searching there.
Otherwise, discard the sorted half and search in the other half.
Repeat until the target is found or the search space becomes empty.
If the target is not found, return -1.
 */


var search = function(nums, target) {
    let n = nums.length;
    let l = 0;
    let h = n-1;
    while(l<=h) {
        let m = Math.floor(l+(h-l)/2);
        if(nums[m]===target){
            return m;
        }else if(nums[l]<=nums[m]){
            if((target<nums[m])&& target>=nums[l]){
                 h= m-1;
                 // Target lies in the sorted left half
            }else{
                l = m+1
                // Target is not in left half, search right half
            }
           
        }else{
            if((target > nums[m]) && (target <= nums[h])){
                l = m+1
                // Target lies in the sorted right half
            }else{
                h=m-1
                // Target is not in right half, search left half
            }
            
        }
    }
    return -1;
};