function allTwiceExceptOne(n,arr){
    let map = {};
    for(let i=0;i<n;i++){
        if(!map[arr[i]]){
            map[arr[i]] = 1
        }else{
            map[arr[i]]+=1
        }
    }
    
    for (el in map){
        if(map[el] === 1){
            return el
        }
    }
}