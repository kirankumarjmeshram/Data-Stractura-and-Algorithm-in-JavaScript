function firstDuplicateValue(array) {
    // Write your code here.
    for(const num of array){
      const absNum = Math.abs(num);
      if(array[absNum] < 0){
        return absNum;
      }
      array[absNum] *= -1;
    }
    return -1;
  }