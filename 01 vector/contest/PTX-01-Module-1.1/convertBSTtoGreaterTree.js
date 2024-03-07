var convertBST = function(root) {
    let sum = 0;
    function dfs(root){
        if(root === null) return;
            dfs(root.right);
            sum = sum + root.val;
            root.val = sum;
            dfs(root.left);
    }
    dfs(root)
    return root;
    
};