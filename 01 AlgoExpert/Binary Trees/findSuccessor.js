class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  //O(n) time and O(n) space;
  function findSuccessor(tree, node) {
    // Write your code here.
    const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
    for (let idx = 0; idx < inOrderTraversalOrder.length; idx++) {
      const currentNode = inOrderTraversalOrder[idx];
      if(currentNode !== node) continue;
      if(idx === inOrderTraversalOrder.length-1) return null;
      return inOrderTraversalOrder[idx + 1];
    }
  }
  function getInOrderTraversalOrder(node, order = []){
    if(node === null) return order;
    getInOrderTraversalOrder(node.left, order);
    order.push(node)
    getInOrderTraversalOrder(node.right, order);
    return order;
  }
  