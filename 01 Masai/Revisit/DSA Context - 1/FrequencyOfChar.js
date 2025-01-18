function frequencyOfChar(n, str) {
    let map = {};
    for(let i=0;i<n;i++) {
      if(!map[str[i]]) {
        map[str[i]] = 1
      }else{
        map[str[i]]+=1
      }
    }
    for(let s of Object.keys(map)){
      console.log(s +" "+map[s])
    } 
  }