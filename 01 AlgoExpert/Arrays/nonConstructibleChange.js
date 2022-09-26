function nonConstructibleChange(coins) {
    // Write your code here.
    coins.sort((a,b) => a-b);
  
    let currentChangeCreated = 0;
    for(const coin of coins){
      if(coin > currentChangeCreated + 1){
        return currentChangeCreated + 1 ;
      }else{
        currentChangeCreated += coin;
      }
    }
    return currentChangeCreated + 1;
  }

  // is array is sorted then Time complexity is O(N) else O(NlogN) due to sorting