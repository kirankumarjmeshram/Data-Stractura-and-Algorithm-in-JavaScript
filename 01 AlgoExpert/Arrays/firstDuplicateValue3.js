function firstDuplicateValue(array) {
    // Write your code here.
    let minimumSecondIndex = array.length;
    for (let i = 0; i < array.length;i++){
      const num1 = array[i];
      for (let j = i+1 ; j < array.length;j++){
        const num2 = array[j];
        if(num1 === num2){
          minimumSecondIndex = Math.min(minimumSecondIndex,j)
        }
      }
    }
    if(minimumSecondIndex === array.length){
      return -1
    }else{
      return array[minimumSecondIndex];
    }
  }
