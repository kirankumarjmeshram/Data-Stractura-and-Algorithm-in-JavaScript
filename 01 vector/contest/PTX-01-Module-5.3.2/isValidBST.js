class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below

var isValidBST = function(root) {
    if(root === null){
        return true;
    }
    if(root.left !== null && root.left.val >= root.val){
        return false;
    }
    if(root.right !== null && root.right.val <= root.val){
        return false;
    }
    return isValidBST(root.left) && isValidBST(root.right);
};

