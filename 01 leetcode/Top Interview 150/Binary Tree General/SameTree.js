// https://leetcode.com/problems/same-tree/?envType=study-plan-v2&envId=top-interview-150
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null && q===null) return true;
    if(p===null || q===null) return false;
    return p.val===q.val && isSameTree(p.left,q.left) && isSameTree(p.right, q.right);
};


var isSameTree2 = function(p, q) {
    // Create queues for both trees.
    const queue1 = [p];
    const queue2 = [q];

    while (queue1.length > 0 && queue2.length > 0) {
        const node1 = queue1.shift(); // Get the first node from queue1
        const node2 = queue2.shift(); // Get the first node from queue2

        // If both nodes are null, continue to the next iteration.
        if (!node1 && !node2) {
            continue;
        }
        // If one node is null and the other isn't, or their values are not the same, the trees aren't identical.
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }

        // Add the left and right children of both nodes to their respective queues.
        queue1.push(node1.left);
        queue1.push(node1.right);
        queue2.push(node2.left);
        queue2.push(node2.right);
    }

    // If both queues are empty, the trees are identical.
    return queue1.length === 0 && queue2.length === 0;
}

