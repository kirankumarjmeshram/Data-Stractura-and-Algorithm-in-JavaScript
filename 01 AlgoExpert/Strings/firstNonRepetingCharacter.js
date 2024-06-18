function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let n = string.length;
    let map = {};
    for(let str of string ){
      if(!(str in map)){
        map[str] = 1;
      }else{
        map[str]++;
      }
    }
    for(let i=0;i<n;i++){
      if(map[string[i]] === 1){
        return i;
      }
    }
    return -1;
  }