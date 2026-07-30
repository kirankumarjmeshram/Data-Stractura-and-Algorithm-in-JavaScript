//https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/
//Sol 
var kthLargestPerfectSubtree = function(root, k) {
    let sizes = [];
    function dfs (node) {
        if(node === null) return 0

        let left = dfs(node.left);
        let right = dfs(node.right);

        if(left === right) {
            sizes.push(left+right+1);

            return left+right+1
        };
        return -1;
    }
    dfs(root);
    sizes.sort((a,b) => b-a);
    return k<= sizes.length?sizes[k-1]:-1;    
};