function hasSingleCycle(array) {
    // Write your code here.
    let numElementVisited = 0;
    let currentIndex =0;
    while (numElementVisited < array.length){
      if(numElementVisited > 0 && currentIndex == 0){
        return false;
      }
      numElementVisited++;
      currentIndex = getNextIndex(currentIndex, array);
    }
    return currentIndex === 0;
  }
  function getNextIndex(currentIndex, array){
    const jump = array[currentIndex];
    const nextIdx = (currentIndex+jump)%array.length;
    if(nextIdx >=0){
      return nextIdx;
    }else{
      return nextIdx + array.length;
    }
  }
  