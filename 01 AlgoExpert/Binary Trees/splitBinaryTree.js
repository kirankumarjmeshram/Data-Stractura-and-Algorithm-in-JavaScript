// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

exports.BinaryTree = BinaryTree;

function splitBinaryTree(tree) {
    // Write your code here.
    const subTreeSum = treeSum(tree) / 2
    const canBeSplit = trySubtree(tree, subTreeSum)[1];
    return canBeSplit ? subTreeSum : 0;
}

function trySubtree(tree, subTreeSum) {

    if (tree === null) return [0, false];

    const [leftSum, leftCanBeSplit] = trySubtree(tree.left, subTreeSum);
    const [rightSum, rightCanBeSplit] = trySubtree(tree.right, subTreeSum);

    const currTreeSum = tree.value + leftSum + rightSum;

    const canBeSplit = leftCanBeSplit || rightCanBeSplit || currTreeSum === subTreeSum;
    return [currTreeSum, canBeSplit];
}

function treeSum(tree) {
    if (tree === null) return 0;
    else {
        return tree.value + treeSum(tree.left) + treeSum(tree.right);
    }
}

// Do not edit the line below.
exports.splitBinaryTree = splitBinaryTree;
