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


var evalRPN_2 = function(tokens) {
    let stack = [];

    for(let token of tokens) {
        if(isNaN(token)) {
            let a = stack.pop();
            let b = stack.pop();

            if(token === '+') stack.push(a+b);
            if(token === '-') stack.push(b-a);
            if(token === '*') stack.push(a*b);
            if(token === "/") stack.push(Math.trunc(b/a));
        }else{
            stack.push(Number(token));
        }
    }
    return stack.pop();
};

var evalRPN_switch = function(tokens) {
    let stack = [];

    for (let token of tokens) {
        switch (token) {
            case '+':
            case '-':
            case '*':
            case '/':
                let a = stack.pop();
                let b = stack.pop();

                switch (token) {
                    case '+': stack.push(b + a); break;
                    case '-': stack.push(b - a); break;
                    case '*': stack.push(b * a); break;
                    case '/': stack.push(Math.trunc(b / a)); break;
                }
                break;

            default:
                stack.push(Number(token));
        }
    }

    return stack.pop();
};


var evalRPN_obj = function(tokens) {
    let stack = [];

    const ops = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => Math.trunc(b / a)
    };

    for (let token of tokens) {
        if (ops[token]) {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(ops[token](a, b));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};