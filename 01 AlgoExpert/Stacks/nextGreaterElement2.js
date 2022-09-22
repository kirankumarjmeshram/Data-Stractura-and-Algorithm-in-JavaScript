function nextGreaterElement(array) {
    // Write your code here.
    const result = new Array(array.length).fill(-1);
    const stack = [];
  
    for( let idx =  2 * array.length-1; idx > -1; idx--){
      const circularIdx = idx % array.length;
  
      while (stack.length > 0 ){
       if(stack[stack.length - 1] <= array[circularIdx]){
         stack.pop();
       }else{
         result[circularIdx] = stack[stack.length - 1];
         break;
       }
      }
      stack.push(array[circularIdx])
    }
        return result;
  }