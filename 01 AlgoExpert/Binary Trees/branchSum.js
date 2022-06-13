//https://www.algoexpert.io/questions/branch-sums

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
    const sums =[];
    calcBranchSum(root,0,sums);
    return sums;
  }
  function calcBranchSum(node,currSum,sums){
    if(!node){
        return
    }
    const newCurrSum = currSum + node.value;
    if(!node.left && !node.right){
        sums.push(newCurrSum);
        return
    }
    calcBranchSum(node.left,newCurrSum,sums);
    calcBranchSum(node.right,newCurrSum,sums)
  }
  

 