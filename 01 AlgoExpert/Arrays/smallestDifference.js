function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    arrayOne.sort((a,b)=>a-b);
    arrayTwo.sort((a,b)=>a-b);
    let i=0,j=0;
    let smallest = Infinity;
    let current =Infinity;
    let smallestPair =[];
    while (i < arrayOne.length && j<arrayTwo.length) {
      let firstNum = arrayOne[i];
      let secondNum = arrayTwo[j];
      if(firstNum < secondNum){
        current = secondNum - firstNum;
        i++
      }else if (secondNum <firstNum){
        current = firstNum - secondNum;
        j++
      }else{
        return [firstNum, secondNum]
      }if(current < smallest){
        smallest = current;
        smallestPair = [firstNum, secondNum];
      }
    }
    return smallestPair
  }
  