var minDiffInBST = function(root) {
    let min = 100;
    let prev = null;
    function dfs(root){
        if(root == null) return;
        dfs(root.left);
        if(prev !== null){
            min = Math.min(root.val-prev.val,min);
        }
        prev = root
        dfs(root.right);
    }
    dfs( root);
    return min;
};