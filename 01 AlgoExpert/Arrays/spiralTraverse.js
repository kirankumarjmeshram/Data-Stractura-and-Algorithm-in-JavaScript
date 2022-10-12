function spiralTraverse(array) {
  // Write your code here.
  const result = [];
  let top = 0;
  let bottom = array.length-1;
  let left = 0;
  let right = array[0].length-1;

  while(top  <= bottom && left <= right){
    for(let i = left; i <= right;i++){
      result.push(array[top][i]);
    }
    
    for(let i = top+1; i <= bottom;i++){
      result.push(array[i][right]);
    }
    
    for(let i = right-1; i>=left;i--){
     if (top === bottom) break;
       result.push(array[bottom][i])
    }
    
    for(let i = bottom-1; i>top;i--){
        if(left === right) break;
        result.push(array[i][left]);
      }

      top++;
      right--;
      bottom--;
      left++
      
    }
    return result;
    
  }