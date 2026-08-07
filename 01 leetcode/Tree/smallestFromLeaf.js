// https://leetcode.com/problems/smallest-string-starting-from-leaf/

var smallestFromLeaf = function(root) {
    let smallestString = "";
    dfs(root, []);
    return smallestString;

    function dfs(root, path) {
        if(root === null) return;

        path.push(String.fromCharCode(root.val + 97));

        if(root.left === null && root.right === null) {
            let str = [...path].reverse().join("");
            if(smallestString === "" || str < smallestString) {
                smallestString = str;
            }
        }

        dfs(root.left, path);
        dfs(root.right, path);
        path.pop();
    }
};