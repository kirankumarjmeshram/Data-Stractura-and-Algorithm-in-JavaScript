// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let ans = [];
    helper(root, ans);
    return ans;
};

function helper(root, ans) {
    if(root === null) {
        return;
    }
    for(let child of root.children) {
        helper(child, ans)
    }
    ans.push(root.val)
}

// Iterative 
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [], stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        if (!curr) continue;
        res.push(curr.val);
        stack.push(...curr.children);
    }
    return res.reverse();
};


