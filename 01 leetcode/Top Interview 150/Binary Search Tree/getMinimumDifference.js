// https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let result = [];
    inOrderTraversal(root, result);
    let n = result.length;
    let min = result[n-1];
    for (let i=1;i<n;i++) {
        if(result[i]-result[i-1] < min){
            min = result[i]-result[i-1];
        }
    }
    return min;

};

function inOrderTraversal(root, result) {
    if(root === null) return;
    inOrderTraversal(root.left, result)
    result.push(root.val);
    inOrderTraversal(root.right, result)
}