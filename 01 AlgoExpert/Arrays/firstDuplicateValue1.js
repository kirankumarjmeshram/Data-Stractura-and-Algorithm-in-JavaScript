function firstDuplicateValue(array) {
    // Write your code here.
    let seen = new Set();
    for(let num of array){
      if(seen.has(num)){
        return num;
      }else{
        seen.add(num);
      }
    }
    return -1;
  }