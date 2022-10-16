class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  // O(n^2) Time && O(n) space
  function reconstructBst(preOrderTraversalValues) {
    // Write your code here.
    if(preOrderTraversalValues.length === 0) return null;
    const currentValue = preOrderTraversalValues[0];
    let rightSubTreeRootIdx = preOrderTraversalValues.length;
  
    for (let idx = 1; idx < preOrderTraversalValues.length; idx++) {
      const value = preOrderTraversalValues[idx];
      if(value >= currentValue){
        rightSubTreeRootIdx = idx;
        break;
      }
    }
    const leftSubTree = reconstructBst(preOrderTraversalValues.slice(1,rightSubTreeRootIdx));
    const rightSubTree = reconstructBst(preOrderTraversalValues.slice(rightSubTreeRootIdx));
    return new BST(currentValue, leftSubTree, rightSubTree)
    
    
  }
  