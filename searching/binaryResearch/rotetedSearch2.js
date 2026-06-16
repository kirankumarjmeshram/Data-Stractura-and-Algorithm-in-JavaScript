
//https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
    var search = function(nums, target) {
    let n = nums.length;
    let l = 0;
    let h = n-1;
    while(l<=h) {
        let m = Math.floor(l+(h-l)/2);
        if(nums[m]===target){
            return true;
        }if(nums[l]===nums[m]){
            l++;
            //If the left boundary equals the middle, we can't know which side is sorted, so discard one duplicate and continue.
            continue;
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
    return false;
};