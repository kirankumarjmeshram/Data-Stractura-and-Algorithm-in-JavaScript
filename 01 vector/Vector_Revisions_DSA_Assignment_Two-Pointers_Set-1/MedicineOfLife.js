function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;
    for(let i=0;i<t;i++) {
      let [n,K] = input[line++].split(" ").map(Number);
      let arr = input[line++].split(" ").map(Number);
      medicineOfLife(n,arr,K)
    }
  }
  
  function medicineOfLife(n,arr,K) {
        let left=0;
      let right=n-1;
      while(left<right) {
        let sum = arr[left]+arr[right];
        if(sum === K) {
          return console.log("Possible");
        }else if(sum > K){
          right--;
        }else{
          left++;
        }
      }
      return console.log("Impossible");
  }