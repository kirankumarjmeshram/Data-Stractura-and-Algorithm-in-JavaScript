// https://www.algoexpert.io/questions/find-closest-value-in-bst
function findClosestValueInBst(tree, target) {
    // Write your code here.
    let node = tree;
    let closest = node.value;
    while(node != null){
      if(Math.abs(target - closest)>Math.abs(target-node.value)){
        closest = node.value;
      }if(target < node.value){
        node = node.left
      }else if(target > node.value){
        node = node.right
      }else{
        break;
      }
    }
    return closest
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  //exports.findClosestValueInBst = findClosestValueInBst;
  