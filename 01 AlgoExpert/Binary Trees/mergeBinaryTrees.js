// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

exports.BinaryTree = BinaryTree;

function mergeBinaryTrees(tree1, tree2) {
    // Write your code here.
    if (tree1 === null) return tree2;
    if (tree2 === null) return tree1;
    tree1.value += tree2.value;
    tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
    tree1.right = mergeBinaryTrees(tree1.right, tree2.right);
    return tree1;
}

// Do not edit the line below.
exports.mergeBinaryTrees = mergeBinaryTrees;
