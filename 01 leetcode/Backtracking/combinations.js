//https://leetcode.com/problems/combinations/description/
// Approach (Backtracking)
//
// Given numbers from 1 to n, generate all possible combinations
// containing exactly k numbers.
//
// At each step, choose a number and add it to the current combination.
//
// The recursive call starts from i + 1, which ensures:
// 1. Each number is used only once.
// 2. Numbers are chosen in increasing order.
// 3. Duplicate combinations like [2,1] and [1,2] are avoided.
//
// When current.length becomes k, a valid combination is formed
// and added to the result.
//
// Use backtracking (push/pop) to explore all possible combinations.

var combine = function(n, k) {
    let combinations = [];
    Helper(n,k,combinations,1,[]);
    return combinations;
};

function Helper(n,k,combinations,index,current){
    if(current.length ===k){
        combinations.push([...current]);
        return;
    }
    for(let i=index;i<=n;i++){
        current.push(i);
        Helper(n,k,combinations,i+1,current);
        current.pop()
    }
}