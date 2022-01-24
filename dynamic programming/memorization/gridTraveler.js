const gridTravler = (m,n,memo={})=>{
    const key = m+","+n;
if(key in memo){
    return memo[key]
}if(n===1 && n===1){
    return 1
}if(m===0 || n===0){
    return 0
}else{
    memo[key]=gridTravler(m-1,n,memo)+gridTravler(m,n-1,memo)
}

return memo[key]
}

console.log(gridTravler(3,3))//6
console.log(gridTravler(18,18))//2333606220