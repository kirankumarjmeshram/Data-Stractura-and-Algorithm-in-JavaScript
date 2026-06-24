// https://leetcode.com/problems/permutations-ii/

// Approach (Backtracking + Swapping)
//
// Similar to Permutations I, but the input may contain duplicates.
//
// At each recursion level, use a Set to track which values have
// already been placed at the current position.
//
// If a value has already been used at the current level, skip it
// to avoid generating duplicate permutations.
//
// Use swapping to fix one position at a time and backtrack
// by swapping the elements back.

var permuteUnique = function(nums) {
    let uniquePermutations = [];
    Helper(nums,uniquePermutations,0);
    return uniquePermutations;
};

function Helper(nums,uniquePermutations,index) {
    let set = new Set();
    if(index === nums.length) {
        uniquePermutations.push(nums.slice());
        return;
    }

    for(let i=index;i<nums.length;i++) {
        if(set.has(nums[i])){
            continue;
        }
        set.add(nums[i])
        // [nums[i],nums[index]] = [nums[index],nums[i]];
        swap(index, i, nums)
        Helper(nums,uniquePermutations,index+1);
        swap(index, i, nums)
        // [nums[i],nums[index]] = [nums[index],nums[i]];
    }
}

function swap(index, i, nums) {
    let temp;
    temp = nums[i];
    nums[i] = nums[index];
    nums[index] = temp;
}
