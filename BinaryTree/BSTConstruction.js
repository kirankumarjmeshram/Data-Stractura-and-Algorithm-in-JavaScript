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

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  isPresentBFS(data) {
    const BFS = function (node, data) {
        if(node === null) {
            return false;
        }
        let queue = [node];
        while(queue.length !== 0) {
            let curr = queue.shift();
            if(curr.data === data){
                return true;
            }
            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);
        }
        return false;
    }
    return BFS(this.root, data);
  }

  isPresentDFS(data) {
    const DFS = function (node, data) {
        if(node === null) return false;
        let stack = [node];
        while(stack.length !==0) {
            let curr = stack.pop();
            if(curr.data === data) return true;
            if(curr.right !== null) stack.push(curr.right);
            if(curr.left !== null) stack.push(curr.left);
        }
        return false;
    }
    return DFS(this.root, data);
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left == null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root,data);
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

console.log(bst1.findMin()); //5
console.log(bst1.findMax()); //13212
console.log(bst1.isPresent(130)); //true
console.log(bst1.isPresentBFS(130))//true
console.log("DFS "+bst1.isPresentDFS(130))
bst1.remove(130)
console.log(bst1.isPresentBFS(130))//false
console.log("DFS "+bst1.isPresentDFS(130))