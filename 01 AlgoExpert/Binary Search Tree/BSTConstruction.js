class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    while (true) {
      if(value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = new BST(value);
          break;
        }else{
          currentNode = currentNode.left;
        }
      }else{
        if(currentNode.right === null){
          currentNode.right = new BST(value);
          break;
        }else{
          currentNode = currentNode.right
        }
      }
    }
    return this;
  }
//other way to write insert using this only

// insert(value) {
//   if (value < this.value) {
//     if (this.left === null) {
//       this.left = new BST(value);
//     } else {
//       this.left.insert(value);
//     }
//   } else {
//     if (this.right === null) {
//       this.right = new BST(value);
//     } else {
//       this.right.insert(value);
//     }
//   }
// }

  contains(value) {
    // Write your code here.
    let currentNode = this;
    while (currentNode !== null){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
        currentNode = currentNode.right;
      }else{
        return true;
      }
    }
    return false;
  }

  remove(value, parentNode=null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode =this;
    while(currentNode !==null){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode  = currentNode.right;
      }else{
        if (currentNode.left !== null  && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        }else if(parentNode === null){
          if(currentNode.left !== null){
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          }else if (currentNode.right !== null){
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          }else{
            
          }
        }else if(parentNode.left === currentNode){
          parentNode.left = currentNode.left !== null ? currentNode.left: currentNode.right;
        }else if(parentNode.right === currentNode){
          parentNode.right = currentNode.left!== null ? currentNode.left : currentNode.right;     
        }
        break;
      }
    }
    return this;
  }

  getMinValue(){
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
