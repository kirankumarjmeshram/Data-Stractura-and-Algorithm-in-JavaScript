// function combinationSum(candidates, target, start = 0, temp = [], result = []) {
//     if (target < 0) return;
//     if (target === 0) {
//         result.push(temp.slice());
//         return result;
//     }
    
//     if (start < candidates.length) {
//         temp.push(candidates[start]);
//         combinationSum(candidates, target - candidates[start], start, temp, result);
//         temp.pop();
//         combinationSum(candidates, target, start + 1, temp, result);
//     }
    
//     return result;
// }

// // Example usage:
// console.log(combinationSum([2,3,6,7], 7)); // Expected output: [[2,2,3],[7]]



// function combinationSum(candidates, target) {
//     let result = [];
//     candidates.sort((a, b) => a - b);
    
//     function backtrack(start, target, temp) {
//         if (target < 0) return;
//         if (target === 0) {
//             result.push(temp.slice());
//             return;
//         }
        
//         for (let i = start; i < candidates.length; i++) {
//             temp.push(candidates[i]);
//             backtrack(i, target - candidates[i], temp);
//             temp.pop();
//         }
//     }
    
//     backtrack(0, target, []);
//     return result;
// }