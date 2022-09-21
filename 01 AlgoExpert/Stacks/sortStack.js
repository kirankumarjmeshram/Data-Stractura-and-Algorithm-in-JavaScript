function sortStack(stack) {
    // Write your code here.
    if(stack.length === 0){
      return stack;
    }
    const top = stack.pop();
    sortStack(stack);
    insertInSortedOrder(stack, top);
    return stack;
  }
  
  function insertInSortedOrder(stack, value) {
    if(stack.length ===0 || stack[stack.length-1]<= value){
      stack.push(value);
      return;
    }
  
    const top = stack.pop();
  
    insertInSortedOrder(stack, value);
    stack.push(top);
  }