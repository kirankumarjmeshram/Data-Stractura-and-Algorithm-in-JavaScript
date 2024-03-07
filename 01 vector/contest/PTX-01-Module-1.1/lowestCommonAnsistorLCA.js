var lowestCommonAncestor = function(root, p, q) {
    while(root !== null){
        if(p.val <  root.val && q.val < root.val){
            root = root.left;
        }
        else if(p.val> root.val && q.val >  root.val ){
            root = root.right;
        }
        else{
             return root;
        }
    }
    return null;
};