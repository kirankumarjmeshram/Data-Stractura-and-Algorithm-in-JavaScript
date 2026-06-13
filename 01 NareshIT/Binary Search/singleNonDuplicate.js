    //The single element's position changes the parity (even/odd) of pair starting indices!
    // In a sorted array where every element appears twice except one, 
    // pairs start at even indices before the single element and at odd indices after it.
    //  Using binary search, I check whether the pair starting at an even index is intact. 
    // If it is, the single element lies on the right; otherwise, it lies on the left. 
    // Time Complexity O(log n) 
    // Space Complexity O(1) .
var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length-1;
    while(low<high){
        let mid = low + Math.floor((high-low)/2);
        if(mid%2===1){
            mid = mid-1;
        }if(nums[mid]===nums[mid+1]){
            low = mid+2
        }else{
            high=mid;
        }
    }
    return nums[low];
};