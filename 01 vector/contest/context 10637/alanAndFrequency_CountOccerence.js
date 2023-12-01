function alanAndFrequency(n, str){
    let map = {};
    str = str.split("").sort().join("")
    // console.log(str)
    for(let i = 0; i<n;i++){
        if(!map[str[i]]){
            map[str[i]]=1
        }else{
            map[str[i]]+=1
        }
    }
    for(let el in map){
        console.log(el+"-"+map[el]);
    }
}