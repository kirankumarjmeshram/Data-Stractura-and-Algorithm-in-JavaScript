// https://leetcode.com/problems/sum-root-to-leaf-numbers/

var sumNumbers = function(root) {
    return Helper(root, 0)
};

function Helper(root, totalSum){
    if(root === null) return 0;
    totalSum = totalSum*10 + root.val;
    if(root.left === null && root.right === null ) return totalSum;
    return Helper(root.left, totalSum) + Helper(root.right, totalSum);
}