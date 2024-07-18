// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

exports.BinaryTree = BinaryTree;

function symmetricalTree(tree) {
    // Write your code here.
    let leftTreeStack = [tree.left];
    let rightTreeStack = [tree.right];
    while (leftTreeStack.length > 0) {
        left = leftTreeStack.pop();
        right = rightTreeStack.pop()
        if (left === null && right === null) continue
        if (left === null || right === null || left.value !== right.value) {
            return false;
        }
        leftTreeStack.push(left.left);
        leftTreeStack.push(left.right);
        rightTreeStack.push(right.right);
        rightTreeStack.push(right.left)
    }
    return true;
}

// Do not edit the line below.
exports.symmetricalTree = symmetricalTree;
