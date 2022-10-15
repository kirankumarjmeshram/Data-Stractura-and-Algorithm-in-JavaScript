class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  //O(h) time and O(1) space;
  function findSuccessor(tree, node) {
    // Write your code here.
    if (node.right !== null) return getLeftMostChild(node.right);
    return getRightMostParent(node)
  }
  function getLeftMostChild(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  function getRightMostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right === currentNode){
      currentNode = currentNode.parent;
    }
    return currentNode.parent;
  }