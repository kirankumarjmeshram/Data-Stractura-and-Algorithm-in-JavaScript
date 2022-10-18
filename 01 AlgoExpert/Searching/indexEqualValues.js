function indexEqualsValue(array) {
    // Write your code here.
    for(let Idx = 0; Idx < array.length;Idx++){
      const value = array[Idx];
      if(Idx === value){
        return Idx
      }
    }
    return -1;
  }