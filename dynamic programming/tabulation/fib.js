function fib(n){
    let table = new Array(n+1).fill(0);
    table[1] = 1;
    for(let i=1;i<=n;i++){
        table[i+1]+=table[i];
        table[i+2]+=table[i]
    }
    return table[n];
}

console.log(fib(5));


