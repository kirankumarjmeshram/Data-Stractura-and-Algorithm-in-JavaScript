function isMonotonic(array) {
    // Write your code here.
    let increasing = true;
    let decreasing = true;
  
    for(let i=0; i<array.length;i++){
      if(array[i] > array[i+1]) increasing =false;
    }
    for(let i=0; i<array.length;i++){
      if(array[i] < array[i+1]) decreasing =false;
    }
  
    return increasing || decreasing;
  }