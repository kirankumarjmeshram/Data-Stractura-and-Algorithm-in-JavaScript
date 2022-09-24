class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    const sortedNodeValues = [];
    inOrderTraverse(tree, sortedNodeValues);
    return sortedNodeValues[sortedNodeValues.length-k];
  }
  
  function inOrderTraverse(node,sortedNodeValues){
    if(node === null) return;
    inOrderTraverse(node.left, sortedNodeValues);
    sortedNodeValues.push(node.value);
    inOrderTraverse(node.right, sortedNodeValues);
  }
  