function bestDigits(number, numDigits) {
    // Write your code here.
    const workingArray = number.split("");
    let count = 0;
    let left = 0;
    let right = 1;
  
    while(count< numDigits){
      if(workingArray[left] < workingArray[right] || right === workingArray.length) {
        workingArray.splice(left,1);
        left = 0;
        right = 1;
      }
      if(workingArray[left] >= workingArray[right]){
        left++;
        right++;
      }
    }
    return workingArray.join('');