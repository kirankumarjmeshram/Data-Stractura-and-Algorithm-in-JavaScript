function reversePolishNotation(tokens) {
    // Write your code here.
    let n = tokens.length;
    let stack = [];
    for(let i=0; i<n;i++){
      if(tokens[i] === '+'){
        stack.push(stack.pop() + stack.pop());
      }else if(tokens[i] === '-'){
        // let firstNum = stack.pop()
        // stack.push(stack.pop()-firstNum)
        stack.push(-(stack.pop()-stack.pop()))
      }else if(tokens[i] === '*'){
        stack.push(stack.pop()*stack.pop())
      }else if(tokens[i] === '/'){
        stack.push(Math.trunc(1/(stack.pop()/stack.pop())))
      }else{
        stack.push(parseInt(tokens[i]));
      }
    }
    return stack.pop();
  }
  