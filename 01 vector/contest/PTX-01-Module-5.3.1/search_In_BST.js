// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

var searchBST = function(root, val) {
    let curr =  root;
    while(curr !== null){
        if(curr.val == val){
            return curr;
        }else if(val < curr.val){
            curr = curr.left;
        }else{
            curr = curr.right;
        }
    }
    return "NULL";
}
