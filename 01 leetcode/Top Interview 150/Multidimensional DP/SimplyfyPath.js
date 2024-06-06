// https://leetcode.com/problems/simplify-path/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    path = path.split('/');
    let n = path.length;
    for(let i=0;i<n;i++){
        if(path[i] === '' || path[i]=== '.'){
            continue;
        }if(path[i] === '..'){
                stack.pop();
        }else{
            stack.push(path[i])
        }
    }
    return "/"+stack.join("/")
};
