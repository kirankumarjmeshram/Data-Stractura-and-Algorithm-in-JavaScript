function sumFibs(num) {
    let fibNos = new Array(num)
    fibNos[0] = 0
    fibNos[1] = 1
    let sum = 1;
    for(let i=2;i<=num;i++){
      fibNos[i] = fibNos[i-1]+fibNos[i-2]
      if((fibNos[i]<=num) && fibNos[i]%2!==0){
        sum+=fibNos[i]
      }
    }
    return sum;
  }
  
  console.log(sumFibs(4));