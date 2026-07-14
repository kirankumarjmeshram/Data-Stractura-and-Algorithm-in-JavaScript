// https://www.geeksforgeeks.org/problems/expression-contains-redundant-bracket-or-not/1

/**
Push every character of the expression onto the stack.
When you encounter a ), start popping elements until you reach the matching (.
Initialize flag = true, assuming the brackets are redundant.
While popping, if you find an operator (+, -, *, /), set flag = false because the brackets are grouping an operation and are necessary.
Remove the matching ( from the stack.
If flag remains true, no operator was found inside the brackets, so the brackets are redundant → return true.
If the entire expression is processed without finding redundant brackets, return false.
 */

 /**
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    checkRedundancy(s) {
        // code here
        let stack = [];
        for(let el of s) {
            if(el === ')') {
                let flag = true;
                while( stack[stack.length-1] !== '(') {
                    let top = stack.pop()
                    if( top === '+' ||
                    top === '-'||
                    top === '*'||
                    top === '/'
                    ){
                        flag = false;
                    }
                }
                stack.pop();
                if (flag){
                    return true
                } 
                
            }else{
                stack.push(el)
            }
        }
        return false;
        
    }
}