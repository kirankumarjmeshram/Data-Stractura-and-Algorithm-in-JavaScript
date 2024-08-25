// https://leetcode.com/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
var isSymmetric = function(root) {
    if(root === null) {
        return true;
    }
    return isMirror(root.left, root.right)
    function isMirror(leftNode, rightNode) {
        if(leftNode === null && rightNode === null) return true;
        if(leftNode === null || rightNode === null) return false;
        return leftNode.val === rightNode.val && 
            isMirror(leftNode.left, rightNode.right) && 
            isMirror(leftNode.right, rightNode.left);
    }
    
};

var isSymmetricRecursive = function(root) {
    if(root === null) return true;
    let queue = [root.left, root.right];
    while(queue.length > 0){
        let leftNode = queue.shift();
        let rightNode = queue.shift();

        if(leftNode === null && rightNode === null) continue;
        if(leftNode ===null || rightNode === null || leftNode.val !== rightNode.val) return false;

        queue.push(leftNode.left,rightNode.right);
        queue.push(leftNode.right, rightNode.left);
    }
    return true;
}
