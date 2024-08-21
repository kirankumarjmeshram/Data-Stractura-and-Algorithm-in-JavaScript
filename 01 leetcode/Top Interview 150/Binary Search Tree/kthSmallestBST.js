// https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = [];
    inorderTraversal(root,arr)
    // console.log(arr)
    return arr[k-1]
};

function inorderTraversal(root,arr) {
    if(root === null){
        return
    }
    inorderTraversal(root.left,arr);
    arr.push(root.val);
    inorderTraversal(root.right,arr)
}

// Solution 2
var kthSmallest = function(root, k) {
    let n = 0;
    let stack = [];
    let curr = root;
    while(curr || stack.length >0) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        n+=1;
        if(n===k) return curr.val;
        curr = curr.right;
    }
}