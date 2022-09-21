function balancedBrackets(string) {
    // Write your code here.
    const openingBracket = '([{';
    const closingBracket = ')]}';
    const matchingBrackets = {')':'(',']':'[','}':'{'};
    const stack = [];
    for ( const char of string){
      if(openingBracket.includes(char)){
        stack.push(char);
      }else if(closingBracket.includes(char)){
        if(stack.length == 0){
          return false;
        }if(stack[stack.length-1] === matchingBrackets[char]){
          stack.pop();
        }else{
          return false;
        }
      }
    }
    return stack.length === 0;
  }
