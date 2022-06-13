// https://www.algoexpert.io/questions/node-depths
function nodeDepths(root, depth=0) {
    // Write your code here.
    if(root == null){
        return 0
    }else{
        return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1)
    }
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  