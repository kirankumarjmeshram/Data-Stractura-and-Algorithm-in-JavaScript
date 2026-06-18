//https://leetcode.com/problems/combination-sum-ii/

// Approach (Backtracking)

// Similar to Combination Sum I, but with two key differences:

// 1. Each element can be used only once in a combination.
//    Therefore, after choosing candidates[i], the recursive call
//    starts from i + 1 instead of i.

// 2. Duplicate combinations are not allowed.
//    After sorting the array, skip duplicate values at the same
//    recursion level using:

//    if (i > index && candidates[i] === candidates[i - 1]) continue;

//    Here, i > index ensures that only duplicate siblings
//    (same recursion level) are skipped, while duplicates in
//    deeper levels are still allowed (e.g., [1,1,6]).

// Use backtracking (push/pop) to explore all valid combinations
// whose sum equals the target.

var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a,b)=> a-b);
    let result = [];
    Helper(candidates,target,result,0,[]);
    return result;
};

function Helper(candidates, target, result,index,current) {
    if(target === 0){
        result.push([...current]);
        return;
    }
    if(target < 0){
        return;
    }
    for(let i=index;i<candidates.length;i++) {
        if(candidates[i] > target){
            break;
        }
        // If this is not the first choice at the current recursion level (i > index) and 
        //it has the same value as the previous choice, skip it because it would generate the same combinations again.
        if(i>index && candidates[i] === candidates[i-1]){ 
            continue;
        }
        current.push(candidates[i]);
        Helper(candidates,target - candidates[i], result,i+1, current);
        current.pop();
    }
}