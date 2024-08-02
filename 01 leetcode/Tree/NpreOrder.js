// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let ans = [];
    helper(root, ans);
    return ans;
};

function helper(root, ans) {
    if(root === null) {
        return;
    }
     ans.push(root.val)
    for(let child of root.children) {
        helper(child, ans)
    }
   
}

