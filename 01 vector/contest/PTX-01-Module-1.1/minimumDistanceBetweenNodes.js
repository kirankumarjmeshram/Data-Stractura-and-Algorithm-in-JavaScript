var minDiffInBST = function(root) {
    let min = 100;
    let prev = null;
    const stack = [];

    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (prev !== null) {
            min = Math.min(root.val - prev.val, min);
        }
        prev = root;
        root = root.right;
    }

    return min;
};