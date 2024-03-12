//recursion\gridTraveler.js
const gridTravler = (n,m,memo={})=>{
    const key = n+','+m;
    if(key in memo) return memo[key]
    if(n===0 || m===0) return 0;
    if(n===1 && m===1) return 1;
    memo[key] = gridTravler(n-1,m,memo) + gridTravler(n,m-1,memo);
    return memo[key]
}

console.log(gridTravler(4,4))//20
console.log(gridTravler(18,18))//2333606220