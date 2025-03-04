function checkWinningCondition(n,arr,K){
    //write your code here
    let left=0;
    let right=n-1;
    while(left<right) {
      let sum = arr[left]+arr[right];
      if(sum === K) {
        return console.log("Yes");
      }else if(sum > K){
        right--;
      }else{
        left++;
      }
    }
    return console.log("No");
  }
  