// https://leetcode.com/problems/binary-tree-maximum-path-sum/

//dfs inside fn
var maxPathSum = function(root) {
    let maxSum = -Infinity;
    dfs(root);
    return maxSum;

    function dfs(root) {
        if(root === null ) return 0;
        let left = Math.max(0, dfs(root.left));
        let right = Math.max(0, dfs(root.right))

        maxSum = Math.max(maxSum, left + root.val + right);

        return root.val + Math.max(left, right);    }
};

//dfs outside fn
let maxSum
var maxPathSum = function(root) {
    maxSum = -Infinity;
    dfs(root);
    return maxSum;


};    
function dfs(root) {
    if(root === null ) return 0;
    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right))

    maxSum = Math.max(maxSum, left + root.val + right);

    return root.val + Math.max(left, right);    
}
