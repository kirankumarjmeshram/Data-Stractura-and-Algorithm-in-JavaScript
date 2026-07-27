
//DFS Recursion
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};

//DFS Stack
var countNodes = function(root) {
    if (!root) return 0;

    let stack = [root];
    let count = 0;

    while (stack.length) {
        let node = stack.pop();
        count++;

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return count;
};

//BFS
var countNodes = function(root) {
    if (root === null) return 0;

    let queue = [root];
    let count = 0;

    while (queue.length > 0) {
        let curr = queue.shift();
        count++;

        if (curr.left !== null) queue.push(curr.left);
        if (curr.right !== null) queue.push(curr.right);
    }

    return count;
};

//using Height
// In a complete binary tree, if the leftmost and rightmost heights are equal, the subtree is perfect, 
// so we can calculate its nodes directly without traversing all of them
var countNodes = function(root) {
    function leftHeight(node) {
        let h = 0;
        while (node) {
            h++;
            node = node.left;
        }
        return h;
    }

    function rightHeight(node) {
        let h = 0;
        while (node) {
            h++;
            node = node.right;
        }
        return h;
    }

    if (root === null) return 0;
    let lh = leftHeight(root);
    let rh = rightHeight(root);

    if (lh === rh) {
        return Math.pow(2, lh) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};