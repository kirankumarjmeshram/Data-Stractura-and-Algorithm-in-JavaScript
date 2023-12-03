function detectPalII(N, string){
    //write code here
    let map = {};
    for(let i = 0; i<N;i++){
        if(!map[string[i]]){
            map[string[i]] = 1;
        }else{
            map[string[i]] += 1;
        }
    }
    let count = 0;
    for(let el in map){
        if(map[el]%2!==0){
            count++
        }
    }
    if(count>1){
        console.log("Not Possible!");
    }else{
        console.log("Possible!");
    }
}