// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for(let token of tokens){
        // token = parse
        if(token === '+') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a+b)
        }else if(token === '-') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b-a)
        }else if(token === '*') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a*b)
        }else if (token === '/') {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc(b/a))
        }else{
            stack.push(Number(token))
        }
    }
    return stack[0]
};
