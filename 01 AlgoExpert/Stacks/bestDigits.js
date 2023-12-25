function bestDigits(number, numDigits) {
    // Write your code here.
    let n = number.length;
    let stack = []
    for(let i=0;i<n;i++){
      while(stack.length >0 && numDigits > 0 && number[i] > stack[stack.length - 1]){
        numDigits--;
        stack.pop();
      }
      stack.push(number[i])
    }
    while(numDigits > 0){
      numDigits--;
      stack.pop();
    }
    return stack.join('');
  }