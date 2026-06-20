// https://leetcode.com/problems/24-game/description/

// Approach (Backtracking)
//
// The goal is to determine whether the four numbers can be combined
// using '+', '-', '*', and '/' to produce exactly 24.
//
// At each step, choose any two numbers a and b from the current array
// and apply all possible operations:
//
//    a + b
//    a - b
//    b - a
//    a * b
//    a / b   (if b != 0)
//    b / a   (if a != 0)
//
// Remove the chosen numbers and add the computed result to form a
// smaller array. Then recursively solve the same problem on the
// remaining numbers.
//
// When only one number remains:
//
//    Math.abs(nums[0] - 24) < EPSILON
//
// If true, we have successfully formed 24.
//
// Backtracking is used to try every possible pair of numbers and
// every possible operation. After exploring a result, remove it
// (pop) and try the next possibility.
//
// Since division may produce floating-point values, compare with
// 24 using a small epsilon instead of direct equality.
//
// Because there are only 4 cards, exploring all possibilities is
// feasible.

var judgePoint24 = function(cards) {
    let epsilon = 0.1;
    return Helper(cards);
};

function Helper(nums) {
    let epsilon = 0.1;
    if(nums.length === 1) {
        return Math.abs(nums[0] - 24) < epsilon;
    }
    for(let i=0;i<nums.length;i++) {
        for(let j= i+1; j< nums.length; j++ ) {
            let a = nums[i];
            let b = nums[j];
            let next = [];
            for(let k=0;k<nums.length;k++){
                if(k!==i && k!==j) {
                    next.push(nums[k]);
                }
            }
            let possibleVals = [
                a+b,
                a-b,
                b-a,
                a*b
            ];
            if(Math.abs(a) > 0){
                possibleVals.push(b/a);
            }
            if(Math.abs(b) > 0) {
                possibleVals.push(a/b);
            }
            for (let val of possibleVals){
                next.push(val);
                if(Helper(next)) return true;
                next.pop()
            }
        }
    }
    return false;
}