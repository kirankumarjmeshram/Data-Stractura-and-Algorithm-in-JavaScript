function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
    const numOdCoins = new Array(n+1).fill(Infinity);
    numOdCoins[0] = 0;
  
    for(const denom of denoms){
      for(let amount = 0; amount<=n; amount++){
        if(denom <= amount){
          numOdCoins[amount] = Math.min(numOdCoins[amount], numOdCoins[amount-denom]+1)
        }
      }
    }
    return numOdCoins[n] !== Infinity?numOdCoins[n] : -1;
  }