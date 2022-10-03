class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    // Write your code here.
    return helperMethod(tree,-Infinity,Infinity)
  }
  
  function helperMethod(tree,min,max){
    if(tree === null){
      return true
    }if(tree.value<min || tree.value>=max){
      return false
    }
    const leftValidity = helperMethod(tree.left,min,tree.value) 
    return leftValidity && helperMethod(tree.right,tree.value,max)
    
  }
  