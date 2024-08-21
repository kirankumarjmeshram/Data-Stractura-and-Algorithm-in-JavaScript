// https://leetcode.com/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidHelper(root, -Infinity, Infinity);
};

function isValidHelper(root, min, max){
    if(root === null) return true;
    if(root.val < min ||root.val > max) return false;
    return isValidHelper(root.left, min, root.val) && isValidHelper(root.right, root.val, max) 
}