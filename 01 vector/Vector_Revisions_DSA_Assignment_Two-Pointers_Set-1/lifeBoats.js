function runProgram(input) {
    // Write code here
        input = input.trim().split("\n");
      let t = +input[0];
      let line = 1;
      for(let i=0;i<t;i++) {
        let [n,K] = input[line++].split(" ").map(Number);
        let arr = input[line++].split(" ").map(Number);
        lifeBoats(n,arr,K)
      }
  }
  function lifeBoats(n,arr,K) {
    arr = arr.sort((a,b) => a-b);
    let l=0;
    let r=n-1;
    let count = 0;
    while(l<=r){ 
      let remaining = K-arr[r]
      r--;
      count++
      if(l<=r && remaining >= arr[l] ){
        l++
      }
    }
    return console.log(count);
  }