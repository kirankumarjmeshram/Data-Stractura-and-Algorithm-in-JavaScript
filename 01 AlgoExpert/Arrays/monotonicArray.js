function isMonotonic(array) {
    // Write your code here.
    let increasing = true;
    let decreasing = true;
  
    // for(let i=0; i<array.length;i++){
    //   if(array[i] > array[i+1]) increasing =false;
    // }
    // for(let i=0; i<array.length;i++){
    //   if(array[i] < array[i+1]) decreasing =false;
    // }
   for(let i=0; i<array.length;i++){
      if(array[i] > array[i+1]) increasing =false;
      if(array[i] < array[i+1]) decreasing =false;
    }
  
    return increasing || decreasing;
  }

 // Second method

 /*
 function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 2){
    return true;
  }
  let direction = array[1] - array[0];
  for(let i =2; i<array.length; i++){
    if(direction === 0){
      direction = array[i] - array[i-1];
      continue;
    }
    if(breakDirection(direction, array[i-1], array[i])){
      return false;
    }
  }
  return true;
}
function breakDirection(direction, priviousInt, currentInt){
  const difference = currentInt - priviousInt;
  if(direction > 0) return difference <0;
  return difference > 0;
}
 */

