//https://leetcode.com/problems/balanced-binary-tree/

//Solution 1
var isBalanced = function(root) {
    if(root === null) {
        return true;
    }
    let left = checkHeight(root.left);
    let right = checkHeight(root.right);
    if(Math.abs(left-right) > 1){
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right);

};

function checkHeight(root){
    if(root===null) {
        return 0;
    }
    return 1+ Math.max(checkHeight(root.left), checkHeight(root.right));
} 

// Solution 2
var isBalanced = function(root) {
    return checkHeight(root) !== -1;
};

function checkHeight(root) {
    if(root === null) return 0;
    let left = checkHeight(root.left);
    //if left subtree is already unbalanced return -1
    if(left === -1) return -1

    let right = checkHeight(root.right);
    //left subtree is already unbalanced return -1
    if(right === -1) return -1

    if(Math.abs(left - right) > 1) return -1;

    return 1 + Math.max(left, right)
}
