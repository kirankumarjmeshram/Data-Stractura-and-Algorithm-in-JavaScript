function maxSubsetSumNoAdjacent1(array) {
    // Write your code here.
    if(array.length ==0) return 0;
    if(array.length ==1) return array[0];
    let newArray = array.slice();
    //newArray[0] = array[0];
    newArray[1] = Math.max(array[0],array[1]);
  
    for(let i=2;i<array.length;i++){
      newArray[i] = Math.max(newArray[i-1], newArray[i-2]+array[i])
    }
  
    return newArray[array.length-1];
  }
  
  function maxSubsetSumNoAdjacent2(array) {
    // Write your code here.
    if(array.length ==0) return 0;
    if(array.length ==1) return array[0];
   // let newArray = array.slice();
    let two = array[0];
    let one = Math.max(array[0],array[1]);
  
    for(let i=2;i<array.length;i++){
      let curr = Math.max(one, two+array[i]);
      two = one;
      one = curr
    }
  
    return one;
  }