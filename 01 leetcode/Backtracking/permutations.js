//https://leetcode.com/problems/permutations/
// Approach (Backtracking + Swapping)
//
// The goal is to generate all possible permutations of the given array.
// A permutation is an arrangement of all elements in a different order.
//
// We build permutations by fixing one position at a time.
//
// At recursion level i:
// - Positions [0...i-1] are already fixed.
// - We need to decide which element should be placed at position i.
//
// To do this, we iterate from j = i to n-1 and swap nums[i]
// with nums[j]. This places a new element at position i.
//
//    swap(i, j, nums);
//
// After fixing the current position, recursively generate
// permutations for the remaining positions:
//
//    helper(i + 1, nums, result);
//
// Once recursion returns, we undo the swap:
//
//    swap(i, j, nums);
//
// This backtracking step restores the original array so that
// other choices can be explored.
//
// Base Case:
// When i reaches the last index, all positions have been fixed,
// meaning a complete permutation has been formed. A copy of the
// current array is added to the result.
//
// Example:
// nums = [1,2,3]
//
// Fix position 0:
//   -> place 1 at index 0
//   -> place 2 at index 0
//   -> place 3 at index 0
//
// For each choice, recursively fix position 1,
// then position 2, until a complete permutation is formed.
//
// Time Complexity: O(n × n!)
// - There are n! permutations.
// - Copying each permutation takes O(n).
//
// Space Complexity: O(n)
// - Recursion stack depth is at most n.

var permute = function(nums) {
    let result = [];
    helper(0, nums, result);
    return result;
};

function helper(i, nums, result){
    if(i===nums.length-1){
        result.push(nums.slice());
        return;
    }else{
        for(let j=i;j<nums.length;j++){
            swap(i,j,nums);
            helper(i+1,nums,result);
            swap(i,j,nums)
        }
    }
}

function swap(i,j,nums) {
    let temp;
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}