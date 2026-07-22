// https://leetcode.com/problems/find-the-duplicate-number/description/
// Find the duplicate number (cycle entrance).
// P = Distance from index 0 to the duplicate (cycle entrance).
// C = Length of the cycle.
// X = Distance from duplicate to the meeting point.
// Slow = P + X
// Fast = P + C + X
// Since Fast = 2 × Slow:
// 2(P + X) = P + C + X
// P = C - X
// Therefore, the distance from index 0 to the duplicate
// equals the distance from the meeting point to the duplicate.
// That's why resetting slow to index 0 and moving both pointers
// one step at a time makes them meet at the duplicate number.

//take ref 01 NareshIT\LinkedList\removeLoop.js

var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) {
            break;
        }
    }
    slow = 0;
    while(true) {
        slow = nums[slow];
        fast = nums[fast];
        if(slow === fast) {
            return slow;
        }
    }

};