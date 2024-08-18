class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    add(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function (node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }

    treeSum(){
        const sum = function(node){
            if(node === null){
                return 0;
            }else{
                return node.data + sum(node.left) + sum(node.right);
            }
        }
        return sum(this.root);
    }
}

let bst1 = new BST();

bst1.add(12);
bst1.add(15);
bst1.add(10);
bst1.add(14);
bst1.add(16);
bst1.add(19);
bst1.add(13212);
bst1.add(125);
bst1.add(130);
bst1.add(142);
bst1.add(106);
bst1.add(159);
bst1.add(5);
console.log(bst1.treeSum())//13965
console.log(bst1)