function sumPrimes(num) {
    let sum = 0
    function isPrime(n){
      let count = 0;
      for(let i=1;i<=n;i++){
        if(n%i==0){
          count++
        }
      }
      if(count>2){
        return false
      }else{
        return true
      }
    }
    for(let i=2;i<=num;i++){
      if(isPrime(i)){
        sum+=i
      }
    }
    return sum;
  }
  
  console.log(sumPrimes(10));