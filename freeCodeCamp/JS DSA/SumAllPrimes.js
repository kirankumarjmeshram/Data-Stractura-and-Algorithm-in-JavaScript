function sumPrimes(num) {
    function isPrime(n) {
      const sqrt = Math.sqrt(n);
      if(n<2) return false;
      for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0)
          return false;
      }
      return true;
    }
  
    let sum = 0;
  
    for(let i=0;i<=num;i++){
      if(isPrime(i)){
        sum += i;
      }
    }
    
    return sum;
  }
  
  console.log(sumPrimes(10));