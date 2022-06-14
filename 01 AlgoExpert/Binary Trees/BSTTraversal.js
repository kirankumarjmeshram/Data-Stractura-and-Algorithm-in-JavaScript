//https://www.algoexpert.io/questions/bst-traversal
function inOrderTraverse(tree, array) {
    // LDR
    if(tree !== null){
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array)
    }
    return array
    
  }
  
  function preOrderTraverse(tree, array) {
     // DLR
    if(tree !== null){
        array.push(tree.value);
        preOrderTraverse(tree.left, array);
        preOrderTraverse(tree.right,array)
    }
    return array
  }
  
  function postOrderTraverse(tree, array) {
    // LRD
    if(tree !== null){
       
        postOrderTraverse(tree.left, array);
        postOrderTraverse(tree.right,array);
        array.push(tree.value);
    }
    return array
  }