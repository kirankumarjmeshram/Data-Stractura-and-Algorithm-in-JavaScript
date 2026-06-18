// https://leetcode.com/problems/combination-sum/

// Approach (Backtracking)
//
// The goal is to find all combinations whose sum equals the target.
//
// At each step, we choose a candidate and subtract its value from
// the remaining target. If the target becomes 0, we have found a
// valid combination and add it to the result.
//
// Since a candidate can be used multiple times, the recursive call
// starts from the current index (i) instead of i + 1:
//
//    helper(i, target - candidates[i]);
//
// Starting from i allows the same element to be chosen again,
// which is required in combinations like [2,2,3].
//
// Use backtracking (push/pop) to explore all possible combinations.
// If the remaining target becomes negative, stop exploring that path
// because it cannot produce a valid solution.

var combinationSum = function(candidates, target) {
    let result = [];
    Helper(candidates, target, result, 0,[]);
    return result;
};

function Helper(candidates, target, result, index, current){
    let n = candidates.length;
    if(target === 0) {
        result.push([...current]);
        return;
    }
    if(target < 0){
        return;
    } 
    for(let i=index;i<n;i++) {
        current.push(candidates[i]);
        Helper(candidates, target - candidates[i],result, i, current);
        current.pop();
    }
}